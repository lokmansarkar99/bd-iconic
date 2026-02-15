import { Card, StatusBadge } from "@/components/ui/Ui";
import { MOCK_DOCS } from "@/lib/data";
import { FileText } from "lucide-react";

const DocumentsPage = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-slate-900">My Documents</h1>
      <Card>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-slate-50 text-slate-500 border-b border-slate-200">
              <tr>
                <th className="px-6 py-4 font-medium">Document Type</th>
                <th className="px-6 py-4 font-medium">Expiry Date</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {MOCK_DOCS.map((doc) => (
                <tr key={doc.id} className="hover:bg-slate-50/50">
                  <td className="px-6 py-4 font-medium text-slate-900 flex items-center gap-2">
                    <FileText size={16} className="text-slate-400" />
                    {doc.type}
                  </td>
                  <td className="px-6 py-4 text-slate-600">{doc.expiryDate}</td>
                  <td className="px-6 py-4">
                    <StatusBadge status={doc.status} />
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-fuchsia-600 hover:text-fuchsia-700 font-medium text-xs">View</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};

export default DocumentsPage;

