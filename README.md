


# 🌐 Live URL
**[https://www.bdiconicksa.com/](https://www.bdiconicksa.com/)**

---

# Manpower Management System

> **Status**: 🚧 Under Active Development | Authentication & Dashboard Phase Complete

A comprehensive cloud-based platform for Saudi-based manpower companies to manage worker recruitment, payroll processing, visa management, and compliance operations[file:1]. Built with modern, scalable architecture to handle multi-company placements and complex salary calculations with service charge deductions[file:1].

## 🎯 Project Purpose

This system streamlines manpower management operations for companies managing worker recruitment and salary disbursement on behalf of client companies[file:1]. It provides:

- Complete worker lifecycle management (recruitment → onboarding → deployment → payroll)
- Automated salary collection with configurable service charge calculations (e.g., 30% commission model)
- Multi-role dashboards for Super Admin, Finance Manager, Operations Manager, Investor (Kafeel), and Employees
- Document expiry tracking and automated notifications for visas, passports, and work permits
- Comprehensive financial reporting and audit trail compliance

## ✅ Completed Features

### Authentication System
- Secure user registration and login with JWT-based authentication
- Role-based access control (RBAC) with hierarchical permissions
- Password encryption and session management
- Email/phone-based authentication flow
- Secure token refresh mechanism

### Dashboard
- Role-specific dashboard layouts
- User profile management interface
- Basic navigation and routing structure
- Responsive UI foundation with Next.js

## 🏗️ Technology Stack

### Backend
- **Runtime**: Node.js with Express.js (TypeScript)
- **Database**: MySQL with Prisma ORM
- **Architecture**: Clean, modular MVC pattern
- **Authentication**: JWT tokens with bcrypt password hashing
- **API Design**: RESTful endpoints with proper error handling

### Frontend
- **Framework**: Next.js (React)
- **Language**: TypeScript
- **Styling**: Modern CSS framework (Tailwind CSS recommended)
- **State Management**: React Context/Redux (as needed)

### Infrastructure
- **Deployment**: VPS/Cloud hosting
- **Database**: MySQL production instance
- **Security**: HTTPS/TLS encryption


```

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- MySQL (v8.0 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd manpower-management
```

2. **Backend Setup**
```bash
cd backend
npm install
cp .env.example .env
# Configure your DATABASE_URL and JWT_SECRET in .env
npx prisma generate
npx prisma migrate dev
npm run dev
```

3. **Frontend Setup**
```bash
cd frontend
npm install
cp .env.example .env.local
# Configure your NEXT_PUBLIC_API_URL in .env.local
npm run dev
```

4. **Access the application**

- Frontend: `http://localhost:3000`
- Backend API: `http://localhost:5000`


## 🛣️ Development Roadmap

### Phase 1: Core User Management (In Progress)

- [ ] User role management (Super Admin, Admin, Finance Manager, Operations Manager)
- [ ] Profile management with KYC document uploads
- [ ] Employee registration and onboarding workflow
- [ ] Role-based permission enforcement across all modules


### Phase 2: Document \& Visa Management

- [ ] Document management system (passport, visa, ID cards, contracts)
- [ ] Document expiry tracking with metadata
- [ ] Automated expiry notifications (90/60/30/7 days before expiry)
- [ ] Visa lifecycle management (Applied → Issued → Stamped → Active → Expired)
- [ ] Travel and immigration record tracking


### Phase 3: Payroll \& Financial Engine

- [ ] Salary receipt recording system
- [ ] Service charge calculation engine (configurable percentage-based)
- [ ] Multi-deduction support (taxes, loans, advances, medical)
- [ ] Net pay calculation: `Net = Gross - (ServiceCharge + OtherDeductions)`
- [ ] Payslip PDF generation and history
- [ ] Salary hold/release approval workflow
- [ ] Remittance tracking (bank transfer, cash pickup, mobile wallet)


### Phase 4: Reporting \& Analytics

- [ ] Daily collection and payout reports
- [ ] Monthly payroll summaries
- [ ] Employee and company ledgers
- [ ] KPI dashboard with graphs (total workers, active visas, monthly revenue)
- [ ] VAT/GOSI/Tax compliance reports
- [ ] Exportable audit logs


### Phase 5: Advanced Features

- [ ] Attendance and timesheet management
- [ ] Complaint/grievance ticketing system
- [ ] Multi-language support (Arabic RTL + English)
- [ ] SMS and email notification system
- [ ] Mobile-responsive employee portal
- [ ] Bank and payment gateway integrations
- [ ] Two-factor authentication (2FA)


## 🔐 Key Features (Planned)

### Role-Based Access

- **Super Admin**: Full system control, audit logs, financial oversight
- **Finance Manager**: Payroll processing, invoicing, remittances, financial reports
- **Operations Manager**: Worker assignments, attendance, visa management, onboarding
- **Investor (Kafeel)**: Portfolio view, sponsored worker lists, approval workflows
- **Employee**: Personal dashboard, document status, payslips, leave requests


### Service Charge Model

Example calculation for 30% service charge:

- Employee salary from client: **SAR 4,500**
- Service charge (30%): **SAR 1,350**
- Net employee salary: **SAR 3,150**


### Security \& Compliance

- End-to-end TLS encryption
- PII data encryption at rest
- Immutable audit trail for financial transactions
- RBAC with granular permissions
- Saudi Arabia regulatory compliance (GOSI, labor laws)


## 📝 API Documentation

API documentation will be available at `/api/docs` once development progresses. Current endpoints include:

- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/profile` - Get user profile (protected)
- `POST /api/auth/refresh` - Refresh JWT token


## 🤝 Contributing

This project is under active development. Contribution guidelines will be added once the core modules are stabilized.

## 📄 License

[Specify your license here]

## 📧 Contact

For inquiries about BD Iconic KSA or this system, please visit [https://www.bdiconicksa.com/](https://www.bdiconicksa.com/)

---

**Last Updated**: February 2026 | **Version**: 0.1.0 (Alpha - Authentication Phase)

```

This README provides a balanced level of detail—professional enough for stakeholders to understand the project scope, technical enough for developers to get started, and clear about the current development status and next steps. The structure follows your clean modular architecture approach and highlights the completed authentication system while outlining the comprehensive feature roadmap ahead.[^1]


<div align="center">⁂</div>

[^1]: Manpower-Management-System.pdf```

