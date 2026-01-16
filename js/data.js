// Urban Hive - Dummy Data

const data = {
    notices: [
        {
            id: 'N001',
            title: 'Annual General Meeting',
            content: 'The AGM will be held on 20th January 2026 at 6:00 PM in the community hall. All residents are requested to attend.',
            createdAt: '2026-01-10',
            priority: 'important',
            createdBy: 'Society Secretary'
        },
        {
            id: 'N002',
            title: 'Water Tank Cleaning',
            content: 'Water supply will be interrupted on 18th January from 10 AM to 2 PM for tank cleaning.',
            createdAt: '2026-01-12',
            priority: 'urgent',
            createdBy: 'Maintenance Head'
        },
        {
            id: 'N003',
            title: 'Diwali Celebration',
            content: 'Join us for Diwali celebrations on 25th January. Cultural programs and dinner arranged.',
            createdAt: '2026-01-08',
            priority: 'normal',
            createdBy: 'Events Committee'
        },
        {
            id: 'N004',
            title: 'Parking Guidelines Update',
            content: 'New parking slots have been assigned. Please check the notice board for your allocated slot.',
            createdAt: '2026-01-05',
            priority: 'normal',
            createdBy: 'Society Secretary'
        }
    ],

    complaints: [
        {
            id: 'C001',
            residentId: 'R001',
            residentName: 'Rahul Sharma',
            flatNo: 'A-404',
            category: 'Plumbing',
            description: 'Water leakage in kitchen sink. Urgent attention needed.',
            status: 'Assigned',
            createdAt: '2026-01-14',
            assignedTo: 'W003',
            workerName: 'Raju Plumber'
        },
        {
            id: 'C002',
            residentId: 'R002',
            residentName: 'Anjali Mehta',
            flatNo: 'B-202',
            category: 'Electrical',
            description: 'Corridor lights on 2nd floor not working since 3 days.',
            status: 'In Progress',
            createdAt: '2026-01-13',
            assignedTo: 'W004',
            workerName: 'Suresh Electrician'
        },
        {
            id: 'C003',
            residentId: 'R003',
            residentName: 'Vikram Singh',
            flatNo: 'C-101',
            category: 'Security',
            description: 'CCTV camera near parking is not functioning.',
            status: 'Open',
            createdAt: '2026-01-15'
        },
        {
            id: 'C004',
            residentId: 'R001',
            residentName: 'Rahul Sharma',
            flatNo: 'A-404',
            category: 'Cleaning',
            description: 'Staircase cleaning not done properly.',
            status: 'Resolved',
            createdAt: '2026-01-10',
            assignedTo: 'W001',
            workerName: 'Ramesh Cleaner'
        },
        {
            id: 'C005',
            residentId: 'R004',
            residentName: 'Sneha Reddy',
            flatNo: 'A-305',
            category: 'Maintenance',
            description: 'Lift in A block making strange noises.',
            status: 'Open',
            createdAt: '2026-01-16'
        }
    ],

    payments: [
        {
            id: 'P001',
            residentId: 'R001',
            amount: 5500,
            type: 'Maintenance',
            status: 'Pending',
            dueDate: '2026-01-20'
        },
        {
            id: 'P002',
            residentId: 'R001',
            amount: 800,
            type: 'Water',
            status: 'Paid',
            dueDate: '2026-01-15',
            paidDate: '2026-01-14'
        },
        {
            id: 'P003',
            residentId: 'R001',
            amount: 2000,
            type: 'Parking',
            status: 'Paid',
            dueDate: '2026-01-01',
            paidDate: '2025-12-28'
        },
        {
            id: 'P004',
            residentId: 'R001',
            amount: 5500,
            type: 'Maintenance',
            status: 'Overdue',
            dueDate: '2025-12-20'
        }
    ],

    visitors: [
        {
            id: 'V001',
            residentId: 'R001',
            name: 'Delivery - Amazon',
            purpose: 'Package Delivery',
            entryTime: '2026-01-15 10:30',
            exitTime: '2026-01-15 10:35',
            status: 'Out'
        },
        {
            id: 'V002',
            residentId: 'R001',
            name: 'Dr. Kapoor',
            purpose: 'Medical Visit',
            entryTime: '2026-01-15 14:00',
            status: 'In'
        },
        {
            id: 'V003',
            residentId: 'R001',
            name: 'Swiggy Delivery',
            purpose: 'Food Delivery',
            entryTime: '2026-01-14 20:15',
            exitTime: '2026-01-14 20:18',
            status: 'Out'
        }
    ],

    tasks: [
        {
            id: 'T001',
            title: 'Fix Water Leakage - A-404',
            description: 'Kitchen sink pipe needs replacement',
            assignedBy: 'M001',
            assignedTo: 'W003',
            workerName: 'Raju Plumber',
            dueDate: '2026-01-16',
            status: 'In Progress',
            priority: 'High'
        },
        {
            id: 'T002',
            title: 'Replace Corridor Lights - B Block',
            description: '2nd floor corridor lights replacement',
            assignedBy: 'M001',
            assignedTo: 'W004',
            workerName: 'Suresh Electrician',
            dueDate: '2026-01-17',
            status: 'Pending',
            priority: 'Medium'
        },
        {
            id: 'T003',
            title: 'Garden Maintenance',
            description: 'Trim hedges and water plants in main garden',
            assignedBy: 'M001',
            assignedTo: 'W001',
            workerName: 'Ramesh Cleaner',
            dueDate: '2026-01-15',
            status: 'Completed',
            priority: 'Low'
        },
        {
            id: 'T004',
            title: 'Security Round - Night Shift',
            description: 'Complete perimeter check and log entries',
            assignedBy: 'M001',
            assignedTo: 'W002',
            workerName: 'Shankar Security',
            dueDate: '2026-01-15',
            status: 'Pending',
            priority: 'High'
        }
    ],

    workers: [
        {
            id: 'W001',
            name: 'Ramesh Kumar',
            type: 'Cleaner',
            shift: 'Morning',
            phone: '+91 98765 43210',
            status: 'Active',
            joiningDate: '2023-06-15'
        },
        {
            id: 'W002',
            name: 'Shankar Prasad',
            type: 'Security',
            shift: 'Night',
            phone: '+91 98765 43211',
            status: 'Active',
            joiningDate: '2022-11-01'
        },
        {
            id: 'W003',
            name: 'Raju Singh',
            type: 'Plumber',
            shift: 'Morning',
            phone: '+91 98765 43212',
            status: 'Active',
            joiningDate: '2024-02-20'
        },
        {
            id: 'W004',
            name: 'Suresh Yadav',
            type: 'Electrician',
            shift: 'Morning',
            phone: '+91 98765 43213',
            status: 'Active',
            joiningDate: '2023-09-10'
        },
        {
            id: 'W005',
            name: 'Mohan Lal',
            type: 'Maintenance',
            shift: 'Evening',
            phone: '+91 98765 43214',
            status: 'On Leave',
            joiningDate: '2024-01-05'
        }
    ],

    residents: [
        {
            id: 'R001',
            name: 'Rahul Sharma',
            flatNo: 'A-404',
            building: 'Genesis Tower',
            phone: '+91 99999 11111',
            email: 'rahul@email.com',
            type: 'Owner',
            moveInDate: '2022-03-15'
        },
        {
            id: 'R002',
            name: 'Anjali Mehta',
            flatNo: 'B-202',
            building: 'Genesis Tower',
            phone: '+91 99999 22222',
            email: 'anjali@email.com',
            type: 'Tenant',
            moveInDate: '2024-06-01'
        },
        {
            id: 'R003',
            name: 'Vikram Singh',
            flatNo: 'C-101',
            building: 'Horizon Heights',
            phone: '+91 99999 33333',
            email: 'vikram@email.com',
            type: 'Owner',
            moveInDate: '2021-08-20'
        }
    ],

    managerStats: {
        totalResidents: 156,
        totalWorkers: 24,
        openComplaints: 12,
        resolvedThisMonth: 45,
        pendingPayments: 23,
        totalCollection: 856000,
        attendanceRate: 92
    },

    workerStats: {
        tasksToday: 5,
        completedTasks: 3,
        pendingTasks: 2,
        attendanceThisMonth: 22
    }
};

// Helper functions
function getStatusBadgeClass(status) {
    const statusMap = {
        'Open': 'badge-warning',
        'Assigned': 'badge-info',
        'In Progress': 'badge-info',
        'Resolved': 'badge-success',
        'Completed': 'badge-success',
        'Pending': 'badge-warning',
        'Paid': 'badge-success',
        'Overdue': 'badge-destructive',
        'Active': 'badge-success',
        'On Leave': 'badge-warning',
        'In': 'badge-success',
        'Out': 'badge',
        'normal': 'badge',
        'important': 'badge-warning',
        'urgent': 'badge-destructive',
        'High': 'badge-destructive',
        'Medium': 'badge-warning',
        'Low': 'badge-info'
    };
    return statusMap[status] || 'badge';
}

function formatCurrency(amount) {
    return `₹${amount.toLocaleString('en-IN')}`;
}

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', { 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric' 
    });
}
