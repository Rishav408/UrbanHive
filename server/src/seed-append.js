const dotenv = require('dotenv');
dotenv.config();

const bcrypt = require('bcryptjs');
const { connectDb } = require('./config/db');
const User = require('./models/User');
const Complaint = require('./models/Complaint');
const Payment = require('./models/Payment');
const Visitor = require('./models/Visitor');

function pick(list, index) {
    return list[index % list.length];
}

async function seedAppend() {
    await connectDb(process.env.MONGODB_URI);

    const passwordHash = await bcrypt.hash('Password@123', 10);
    const existingEmails = new Set(
        (await User.find({}, { email: 1 })).map(u => u.email.toLowerCase())
    );

    const buildings = ['URB-001', 'URB-002'];
    const residentFlats = [
        'A-110', 'A-210', 'A-310', 'A-410',
        'B-111', 'B-211', 'B-311', 'B-411',
        'C-112', 'C-212', 'C-312', 'C-412',
        'D-113', 'D-213', 'D-313', 'D-413'
    ];
    const workerTypes = ['Plumber', 'Electrician', 'Security', 'Cleaner', 'Maintenance'];

    const newUsers = [];

    // 30 new residents
    for (let i = 0; i < 30; i += 1) {
        const email = `residentx${i + 1}@urbanhive.local`;
        if (existingEmails.has(email)) continue;
        newUsers.push({
            name: `Resident X${i + 1}`,
            email,
            passwordHash,
            role: 'resident',
            flatNo: pick(residentFlats, i),
            buildingId: pick(buildings, i)
        });
    }

    // 5 new workers
    for (let i = 0; i < 5; i += 1) {
        const email = `workerx${i + 1}@urbanhive.local`;
        if (existingEmails.has(email)) continue;
        newUsers.push({
            name: `Worker X${i + 1}`,
            email,
            passwordHash,
            role: 'worker',
            workerType: pick(workerTypes, i),
            buildingId: pick(buildings, i)
        });
    }

    if (newUsers.length) {
        await User.insertMany(newUsers);
    }

    const allUsers = await User.find({});
    const managers = allUsers.filter(u => u.role === 'manager');
    const residents = allUsers.filter(u => u.role === 'resident');
    const workers = allUsers.filter(u => u.role === 'worker');

    // Add some extra operational data
    const complaints = [];
    for (let i = 0; i < 15; i += 1) {
        const resident = pick(residents, i);
        const manager = pick(managers, i);
        const worker = pick(workers, i);
        complaints.push({
            title: pick(['Plumbing', 'Electrical', 'Cleaning', 'Security', 'Maintenance'], i),
            description: `Auto-generated complaint ${i + 1}`,
            residentId: resident._id,
            managerId: manager?._id,
            workerId: worker?._id,
            status: pick(['new', 'assigned', 'in_progress'], i),
            priority: pick(['low', 'medium', 'high'], i),
            buildingId: resident.buildingId || pick(buildings, i),
            timeline: [
                { status: 'new', message: 'Complaint created', updatedBy: resident._id }
            ]
        });
    }
    if (complaints.length) await Complaint.insertMany(complaints);

    const payments = [];
    for (let i = 0; i < 15; i += 1) {
        const resident = pick(residents, i);
        const manager = pick(managers, i);
        const status = pick(['pending', 'approved'], i);
        payments.push({
            residentId: resident._id,
            managerId: status === 'pending' ? undefined : manager?._id,
            amount: 1000 + (i % 5) * 500,
            type: pick(['Maintenance', 'Water', 'Parking'], i),
            status,
            mode: pick(['cash', 'upi', 'card', 'bank'], i),
            month: 'April 2026',
            dueDate: `2026-04-${String((i % 20) + 1).padStart(2, '0')}`,
            paidDate: status === 'pending' ? '' : `2026-04-${String((i % 20) + 1).padStart(2, '0')}`,
            verifiedAt: status === 'pending' ? undefined : new Date()
        });
    }
    if (payments.length) await Payment.insertMany(payments);

    const visitors = [];
    for (let i = 0; i < 15; i += 1) {
        const resident = pick(residents, i);
        const manager = pick(managers, i);
        visitors.push({
            residentId: resident._id,
            managerId: manager?._id,
            name: `Visitor X${i + 1}`,
            phone: `99880${String(2000 + i).slice(-4)}`,
            visitDate: `2026-04-${String((i % 20) + 1).padStart(2, '0')}`,
            purpose: pick(['Guest', 'Delivery', 'Service'], i),
            notes: '',
            status: pick(['requested', 'approved', 'entered'], i)
        });
    }
    if (visitors.length) await Visitor.insertMany(visitors);

    console.log('Append complete.');
    console.log(`Inserted users: ${newUsers.length}`);
    console.log('Inserted complaints: 15');
    console.log('Inserted payments: 15');
    console.log('Inserted visitors: 15');
    process.exit(0);
}

seedAppend().catch(error => {
    console.error('Append seed failed:', error);
    process.exit(1);
});
