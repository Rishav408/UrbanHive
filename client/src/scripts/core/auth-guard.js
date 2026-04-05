import { auth, db } from './firebase-init.js';
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js";

// Determine which folder the user is currently looking at
const currentPath = window.location.pathname;
let requiredRole = null;
if (currentPath.includes('/resident/')) requiredRole = 'resident';
else if (currentPath.includes('/manager/')) requiredRole = 'manager';
else if (currentPath.includes('/worker/')) requiredRole = 'worker';

// Helper to kick user out
function logoutAndRedirect() {
    sessionStorage.removeItem('currentUser');
    localStorage.removeItem('currentUser');
    window.location.href = '../login.html';
}

// 1. Quick Local Check (to prevent screen flickering)
const localSession = sessionStorage.getItem('currentUser') || localStorage.getItem('currentUser');
if (!localSession && requiredRole) {
    // No session at all, immediate boot
    logoutAndRedirect();
} else if (localSession && requiredRole) {
    const user = JSON.parse(localSession);
    if (user.role !== requiredRole) {
        // Logged in, but exploring places they shouldn't!
        logoutAndRedirect();
    }
}

// 2. Truth Check: Verify with Firebase Servers
onAuthStateChanged(auth, async (firebaseUser) => {
    if (!firebaseUser) {
        // Firebase says no one is logged in
        if (requiredRole && !localSession) {
            logoutAndRedirect();
        }
    } else {
        // Ensure local session matches Auth Truth
        if (requiredRole) {
            try {
                const docRef = doc(db, "users", firebaseUser.uid);
                const docSnap = await getDoc(docRef);
                
                if (docSnap.exists()) {
                    const profile = docSnap.data();
                    if (profile.role !== requiredRole) {
                        logoutAndRedirect();
                    } else {
                        // All good! Update session storage just in case
                        sessionStorage.setItem('currentUser', JSON.stringify({
                            email: profile.email,
                            role: profile.role,
                            name: profile.name,
                            flatNo: profile.flatNo || '',
                            id: firebaseUser.uid,
                            uid: firebaseUser.uid
                        }));
                    }
                } else {
                    // Profile doesn't exist in Firestore, fall back to session storage
                    console.warn("Auth Guard: No Firestore profile found, trusting local session.");
                    const localData = JSON.parse(sessionStorage.getItem('currentUser'));
                    if (!localData || localData.role !== requiredRole) {
                        logoutAndRedirect();
                    }
                }
            } catch (error) {
                console.error("Auth Guard Error:", error);
                // Database permission error or offline, trust local session instead of booting
                const localData = JSON.parse(sessionStorage.getItem('currentUser'));
                if (!localData || localData.role !== requiredRole) {
                    logoutAndRedirect();
                }
            }
        }
    }
});
