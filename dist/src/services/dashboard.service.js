"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.classifyFollowupStatus = void 0;
exports.superAdminDashboard = superAdminDashboard;
exports.clinicDashboard = clinicDashboard;
exports.followupMetrics = followupMetrics;
const Appointment_js_1 = require("../models/Appointment.js");
const Clinic_js_1 = require("../models/Clinic.js");
const Followup_js_1 = require("../models/Followup.js");
const Patient_js_1 = require("../models/Patient.js");
const Payment_js_1 = require("../models/Payment.js");
const User_js_1 = require("../models/User.js");
const ClinicAssignments_js_1 = require("../models/ClinicAssignments.js");
const Visit_js_1 = require("../models/Visit.js");
const followup_service_js_1 = require("./followup.service.js");
Object.defineProperty(exports, "classifyFollowupStatus", { enumerable: true, get: function () { return followup_service_js_1.classifyFollowupStatus; } });
function startOfToday() {
    const now = new Date();
    return new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()));
}
function endOfToday() {
    const start = startOfToday();
    return new Date(start.getTime() + 24 * 60 * 60 * 1000);
}
async function superAdminDashboard() {
    const todayStart = startOfToday();
    const todayEnd = endOfToday();
    const [totalClinics, activeClinics, inactiveClinics, totalPatients, totalDoctors, totalAdmins, totalReception, pendingFollowups, recentPayments, recentClinics,] = await Promise.all([
        Clinic_js_1.Clinic.countDocuments({ isDeleted: false }),
        Clinic_js_1.Clinic.countDocuments({ isDeleted: false, status: "ACTIVE" }),
        Clinic_js_1.Clinic.countDocuments({ isDeleted: false, status: "INACTIVE" }),
        Patient_js_1.Patient.countDocuments({ isDeleted: false }),
        User_js_1.User.countDocuments({ isDeleted: false, role: "DOCTOR" }),
        User_js_1.User.countDocuments({ isDeleted: false, role: "ADMIN" }),
        User_js_1.User.countDocuments({ isDeleted: false, role: "RECEPTION" }),
        Followup_js_1.Followup.countDocuments({
            isDeleted: false,
            status: { $in: ["UPCOMING", "DUE", "MISSED"] },
        }),
        Payment_js_1.Payment.find().sort({ createdAt: -1 }).limit(8).populate("clinicId", "name").lean(),
        Clinic_js_1.Clinic.find({ isDeleted: false }).sort({ createdAt: -1 }).limit(6).select("name status createdAt").lean(),
    ]);
    const [paidAgg, pendingAgg, overdueAgg] = await Promise.all([
        Payment_js_1.Payment.aggregate([{ $match: { status: "PAID" } }, { $group: { _id: null, total: { $sum: "$paidAmount" } } }]),
        Payment_js_1.Payment.countDocuments({ status: "PENDING" }),
        Payment_js_1.Payment.countDocuments({ status: "OVERDUE" }),
    ]);
    return {
        totalClinics,
        activeClinics,
        inactiveClinics,
        totalPatients,
        totalDoctors,
        totalAdmins,
        totalReception,
        pendingFollowups,
        todayRange: { todayStart, todayEnd },
        revenue: {
            total: paidAgg[0]?.total ?? 0,
            pendingPayments: pendingAgg,
            overduePayments: overdueAgg,
        },
        recentPayments,
        recentClinics,
    };
}
async function clinicDashboard(clinicId) {
    const todayStart = startOfToday();
    const todayEnd = endOfToday();
    const filter = { clinicId, isDeleted: false };
    const [totalPatients, todayPatients, todayAppointments, pendingAppointments, todayFollowups, doctors, receptionStaff,] = await Promise.all([
        Patient_js_1.Patient.countDocuments(filter),
        Visit_js_1.Visit.countDocuments({ ...filter, visitDate: { $gte: todayStart, $lt: todayEnd } }),
        Appointment_js_1.Appointment.countDocuments({ ...filter, appointmentDate: { $gte: todayStart, $lt: todayEnd } }),
        Appointment_js_1.Appointment.countDocuments({ ...filter, status: { $in: ["SCHEDULED", "CONFIRMED"] } }),
        Followup_js_1.Followup.countDocuments({ ...filter, followupDate: { $gte: todayStart, $lt: todayEnd } }),
        ClinicAssignments_js_1.DoctorClinicAssignment.countDocuments({ clinicId, isDeleted: false, status: "ACTIVE" }),
        ClinicAssignments_js_1.ReceptionClinicAssignment.countDocuments({ clinicId, isDeleted: false, status: "ACTIVE" }),
    ]);
    return {
        totalPatients,
        todayPatients,
        todayAppointments,
        pendingAppointments,
        todayFollowups,
        doctors,
        receptionStaff,
    };
}
async function followupMetrics(clinicId) {
    const todayStart = startOfToday();
    const todayEnd = endOfToday();
    const filter = { clinicId, isDeleted: false };
    const [today, pending, overdue, completed] = await Promise.all([
        Followup_js_1.Followup.countDocuments({ ...filter, followupDate: { $gte: todayStart, $lt: todayEnd } }),
        Followup_js_1.Followup.countDocuments({ ...filter, status: { $in: ["UPCOMING", "DUE"] } }),
        Followup_js_1.Followup.countDocuments({ ...filter, status: "MISSED" }),
        Followup_js_1.Followup.countDocuments({ ...filter, status: "COMPLETED" }),
    ]);
    return { today, pending, overdue, completed };
}
//# sourceMappingURL=dashboard.service.js.map