"use client";
import ProfileUpdateForm from "@/components/DashboardComponents/ProfileUpdateForm";
import { Card, CardHeader, StatusBadge } from "@/components/ui/Ui";
import { MOCK_USER } from "@/lib/data";
import { UserCircle, Briefcase, FileBadge } from "lucide-react";
import { useSession } from "next-auth/react";
import Image from "next/image";

export default function ProfilePage() {
  // Get first letter for Avatar
  const session = useSession();
  const user = session.data?.user;

  return (
    <div className="pb-12 space-y-8">
      {/* 1. Page Header with Avatar */}
      <div className="flex items-center gap-4 border-b border-slate-200 pb-6">
        <div className="h-20 w-20 rounded-full bg-slate-100 border-2 border-white shadow-sm flex items-center justify-center text-fuchsia-500 text-2xl font-bold">
          {
            user?.imageUrl ? (
              <Image
                src={user?.imageUrl}
                alt="Profile Picture"
                width={80}
                height={80}
                className="rounded-full"
              />
            ) : user?.name.charAt(0).toUpperCase()
          }
        </div>
        <div>
          <h1 className="text-2xl font-bold text-slate-900">{user?.name}</h1>
          <p className="text-slate-500 text-sm">
            Employee Profile • {MOCK_USER.id}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {/* 2. Personal Information Section */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 px-1">
            <UserCircle className="text-slate-400" size={20} />
            <h2 className="text-lg font-semibold text-slate-900">
              Personal Details
            </h2>
          </div>

          <Card>
            <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-6 gap-x-8">
              <InfoGroup label="Full Name" value={user?.name} />
              <InfoGroup label="Nationality" value={MOCK_USER.nationality} />
              <InfoGroup label="Phone Number" value={user?.phone} />
              <InfoGroup label="Email Address" value={user?.email} />
            </div>
          </Card>
        </section>

        {/* 3. Employment & Visa Section */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 px-1">
            <Briefcase className="text-slate-400" size={20} />
            <h2 className="text-lg font-semibold text-slate-900">
              Employment & Legal Status
            </h2>
          </div>

          <Card>
            {/* Sub-section: Job Details */}
            <div className="p-6 border-b border-slate-100">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-8">
                <InfoGroup label="Job Title" value={MOCK_USER.jobTitle} />
                <InfoGroup
                  label="Sponsor (Kafeel)"
                  value={MOCK_USER.sponsorName}
                />
                <InfoGroup
                  label="Client Company"
                  value={MOCK_USER.clientCompany}
                />
              </div>
            </div>

            {/* Sub-section: Visa/ID Details */}
            <div className="p-6 bg-slate-50/50">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-6 gap-x-8">
                <InfoGroup
                  label="Iqama Number"
                  value={MOCK_USER.iqamaNumber}
                  isMonospace
                />
                <InfoGroup
                  label="Passport Number"
                  value={MOCK_USER.passportNumber}
                  isMonospace
                />

                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-slate-500 mb-1.5">
                    Visa Status
                  </label>
                  <StatusBadge status={MOCK_USER.visaStatus} />
                </div>

                <InfoGroup
                  label="Visa Expiry Date"
                  value={MOCK_USER.visaExpiry}
                />
              </div>
            </div>
          </Card>
        </section>

        {/* 4. Update Form Section */}
        <div className="pt-8">
          <ProfileUpdateForm />
        </div>
      </div>
    </div>
  );
}

// --- Reusable Component ---

interface InfoGroupProps {
  label: string;
  value: string;
  isMonospace?: boolean;
}

const InfoGroup = ({ label, value, isMonospace }: InfoGroupProps) => (
  <div className="flex flex-col">
    <label className="text-xs uppercase tracking-wider font-semibold text-slate-500 mb-1.5">
      {label}
    </label>
    <p
      className={`text-sm font-medium text-slate-900 ${
        isMonospace ? "font-mono tracking-tight" : ""
      }`}
    >
      {value || "—"}
    </p>
  </div>
);
