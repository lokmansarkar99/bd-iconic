"use client";
import { Card, CardHeader, StatusBadge } from "@/components/ui/Ui";
import { MOCK_PAYSLIPS, MOCK_USER } from "@/lib/data";
import {
  ArrowUpRight,
  FileText,
  CheckCircle2,
  AlertTriangle,
  Download,
  DollarSign,
  ShieldCheck,
  User,
} from "lucide-react";
import { useSession } from "next-auth/react";
// ... imports from above

const OverviewPage = () => {
  const session = useSession();
  console.log(session);
  const user = session.data?.user;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-slate-900">
          Welcome back, {user?.name.split(" ")[0]}
        </h1>
        <p className="text-slate-500 mt-1">
          Here is what is happening with your employment status.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="p-5">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-slate-500">
                Net Salary (Jan)
              </p>
              <h3 className="text-2xl font-bold text-slate-900 mt-1">
                SAR 4,500
              </h3>
            </div>
            <div className="p-2 bg-emerald-50 rounded-lg text-emerald-600">
              <DollarSign size={20} />
            </div>
          </div>
          <div className="mt-4 flex items-center text-xs text-slate-500">
            <span className="text-emerald-600 font-medium flex items-center mr-2">
              <CheckCircle2 size={12} className="mr-1" /> Paid
            </span>
            on 28th Jan
          </div>
        </Card>

        <Card className="p-5">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-slate-500">
                Service Deductions
              </p>
              <h3 className="text-2xl font-bold text-slate-900 mt-1">
                SAR 0.00
              </h3>
            </div>
            <div className="p-2 bg-blue-50 rounded-lg text-fuchsia-600">
              <FileText size={20} />
            </div>
          </div>
          <p className="mt-4 text-xs text-slate-500">No active deductions</p>
        </Card>

        <Card className="p-5">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-slate-500">Visa Status</p>
              <div className="mt-1">
                <StatusBadge status={MOCK_USER.visaStatus} />
              </div>
            </div>
            <div className="p-2 bg-purple-50 rounded-lg text-purple-600">
              <ShieldCheck size={20} />
            </div>
          </div>
          <p className="mt-4 text-xs text-slate-500">
            Expires: {MOCK_USER.visaExpiry}
          </p>
        </Card>

        <Card className="p-5">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-slate-500">Profile</p>
              <div className="flex items-end mt-1">
                <h3 className="text-2xl font-bold text-slate-900">
                  {MOCK_USER.profileCompletion}%
                </h3>
              </div>
            </div>
            <div className="p-2 bg-slate-50 rounded-lg text-slate-600">
              <User size={20} />
            </div>
          </div>
          {/* Simple Progress Bar */}
          <div className="w-full bg-slate-100 rounded-full h-1.5 mt-4">
            <div
              className="bg-fuchsia-600 h-1.5 rounded-full"
              style={{ width: `${MOCK_USER.profileCompletion}%` }}
            ></div>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Alerts / Tasks */}
        <div className="lg:col-span-2 space-y-4">
          <h2 className="text-lg font-semibold text-slate-900">Action Items</h2>

          {/* Warning Alert */}
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex items-start gap-3">
            <AlertTriangle
              className="text-amber-600 shrink-0 mt-0.5"
              size={20}
            />
            <div>
              <h4 className="text-sm font-semibold text-amber-900">
                Iqama (ID) Expiring Soon
              </h4>
              <p className="text-sm text-amber-700 mt-1">
                Your residence ID will expire on 01 March 2024. Please contact
                your supervisor to initiate renewal.
              </p>
            </div>
          </div>

          <Card>
            <CardHeader title="Recent Payslips" />
            <div className="divide-y divide-slate-100">
              {MOCK_PAYSLIPS.slice(0, 2).map((slip) => (
                <div
                  key={slip.id}
                  className="p-4 flex items-center justify-between hover:bg-slate-50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-500">
                      <FileText size={18} />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-900">
                        {slip.month} {slip.year}
                      </p>
                      <p className="text-xs text-slate-500">Salary Credited</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold text-slate-900">
                      {slip.currency} {slip.netSalary}
                    </p>
                    <button className="text-xs text-fuchsia-600 font-medium hover:underline flex items-center justify-end mt-1">
                      Download <ArrowUpRight size={12} className="ml-1" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Quick Details */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-slate-900">My Details</h2>
          <Card className="p-0">
            <div className="p-5 space-y-4">
              <div>
                <label className="text-xs uppercase tracking-wide text-slate-400 font-semibold">
                  Employee ID
                </label>
                <p className="text-sm font-medium text-slate-900">
                  {MOCK_USER.id}
                </p>
              </div>
              <div>
                <label className="text-xs uppercase tracking-wide text-slate-400 font-semibold">
                  Sponsor (Kafeel)
                </label>
                <p className="text-sm font-medium text-slate-900">
                  {MOCK_USER.sponsorName}
                </p>
              </div>
              <div>
                <label className="text-xs uppercase tracking-wide text-slate-400 font-semibold">
                  Job Title
                </label>
                <p className="text-sm font-medium text-slate-900">
                  {MOCK_USER.jobTitle}
                </p>
              </div>
            </div>
            <div className="bg-slate-50 p-4 border-t border-slate-100 text-center">
              <button className="text-sm text-fuchsia-600 font-medium hover:text-fuchsia-700">
                View Full Profile
              </button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default OverviewPage;
