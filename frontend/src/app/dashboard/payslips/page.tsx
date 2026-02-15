import { Card } from "@/components/ui/Ui";
import { MOCK_PAYSLIPS } from "@/lib/data";
import { DollarSign, Download } from "lucide-react";

const PayslipsPage = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-slate-900">Payslips</h1>
      <Card>
        <div className="divide-y divide-slate-100">
          {MOCK_PAYSLIPS.map((slip) => (
            <div key={slip.id} className="p-4 md:p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 bg-blue-50 text-fuchsia-600 rounded-full flex items-center justify-center">
                  <DollarSign size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">{slip.month} {slip.year}</h4>
                  <p className="text-sm text-slate-500">Net Salary: <span className="font-medium text-slate-700">{slip.currency} {slip.netSalary.toLocaleString()}</span></p>
                </div>
              </div>
              <button className="flex items-center justify-center gap-2 px-4 py-2 bg-white border border-slate-300 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors w-full md:w-auto">
                <Download size={16} />
                Download PDF
              </button>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default PayslipsPage;