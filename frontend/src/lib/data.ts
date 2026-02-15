import { FileText, User, Bell, DollarSign, Settings, ShieldCheck, AlertCircle } from 'lucide-react';

// --- Types ---
export type VisaStatus = 'Active' | 'Expiring Soon' | 'Expired';

export interface EmployeeProfile {
  id: string;
  fullName: string;
  passportNumber: string;
  iqamaNumber: string; // Saudi Residence ID
  nationality: string;
  jobTitle: string;
  sponsorName: string; // Kafeel
  clientCompany: string;
  visaStatus: VisaStatus;
  visaExpiry: string;
  phone: string;
  email: string;
  profileCompletion: number;
}

export interface DocumentItem {
  id: string;
  type: string;
  expiryDate: string;
  status: 'Valid' | 'Expiring' | 'Expired';
}

export interface Payslip {
  id: string;
  month: string;
  year: number;
  netSalary: number;
  currency: string;
  downloadUrl: string;
}

export interface NotificationItem {
  id: string;
  title: string;
  date: string;
  type: 'info' | 'warning' | 'success';
  read: boolean;
}

// --- Mock Data (Saudi Context) ---
export const MOCK_USER: EmployeeProfile = {
  id: "EMP-2024-001",
  fullName: "Mohammed Al-Rahman",
  passportNumber: "N12345678",
  iqamaNumber: "2345678901",
  nationality: "Bangladeshi",
  jobTitle: "Heavy Equipment Operator",
  sponsorName: "Al-Hamra Manpower Services",
  clientCompany: "Saudi Aramco Projects Ltd.",
  visaStatus: "Active",
  visaExpiry: "2026-05-20",
  phone: "+966 50 123 4567",
  email: "mohammed.r@example.com",
  profileCompletion: 85,
};

export const MOCK_DOCS: DocumentItem[] = [
  { id: "1", type: "Passport", expiryDate: "2028-10-15", status: "Valid" },
  { id: "2", type: "Iqama (Residence ID)", expiryDate: "2024-03-01", status: "Expiring" }, // Specific Saudi context
  { id: "3", type: "Employment Contract", expiryDate: "2025-01-01", status: "Valid" },
  { id: "4", type: "Medical Insurance", expiryDate: "2024-06-15", status: "Valid" },
];

export const MOCK_PAYSLIPS: Payslip[] = [
  { id: "ps-1", month: "January", year: 2024, netSalary: 4500, currency: "SAR", downloadUrl: "#" },
  { id: "ps-2", month: "December", year: 2023, netSalary: 4500, currency: "SAR", downloadUrl: "#" },
  { id: "ps-3", month: "November", year: 2023, netSalary: 4200, currency: "SAR", downloadUrl: "#" },
];

export const MOCK_NOTIFICATIONS: NotificationItem[] = [
  { id: "1", title: "Salary credited for January 2024", date: "2 days ago", type: "success", read: false },
  { id: "2", title: "Iqama expiring in 45 days", date: "1 week ago", type: "warning", read: false },
  { id: "3", title: "New policy document available", date: "2 weeks ago", type: "info", read: true },
];