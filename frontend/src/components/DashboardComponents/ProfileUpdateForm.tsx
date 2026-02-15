'use client';

import { use, useState } from 'react';
import { Save, Upload, AlertCircle, CheckCircle2, FileText, X } from 'lucide-react';
import { Card, cn } from '../ui/Ui';
import { useSession } from 'next-auth/react';


export default function ProfileUpdateForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');
  const user = useSession().data?.user;
  
  // Form State
  const [formData, setFormData] = useState({
    phone: '+966 50 123 4567',
    email: 'mohammed.r@example.com',
    address: 'Riyadh, Olaya District',
  });

  // Document Upload State
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [docType, setDocType] = useState('Passport');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setSuccessMsg('');

    // Simulate API Call
    setTimeout(() => {
      setIsLoading(false);
      setSuccessMsg('Update request sent to HR for approval.');
      setSelectedFile(null); // Reset file
    }, 1500);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-2">
         <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-slate-400">
            <Upload size={18} />
         </div>
         <div>
            <h2 className="text-lg font-bold text-slate-900">Update Information</h2>
            <p className="text-sm text-slate-500">Request changes or upload renewed documents.</p>
         </div>
      </div>

      {successMsg && (
        <div className="bg-emerald-50 border border-emerald-200 text-emerald-700 px-4 py-3 rounded-lg flex items-center gap-2 text-sm">
          <CheckCircle2 size={16} />
          {successMsg}
        </div>
      )}

      <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left Col: Contact Details */}
        <Card className="lg:col-span-2 p-6">
          <h3 className="font-semibold text-slate-800 mb-4 flex items-center gap-2">
            <FileText size={18} className="text-slate-400" /> 
            Contact Details
          </h3>
          
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-slate-500 mb-1">Mobile Number</label>
                <input
                  type="text"
                  name="phone"
                  defaultValue={user?.phone}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-fuchsia-500 text-slate-900"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-500 mb-1">Email Address</label>
                <input
                  type="email"
                  name="email"
                  defaultValue={user?.email}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-fuchsia-500 text-slate-900"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-500 mb-1">Saudi Address</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-900"
              />
            </div>
            
            <div className="bg-blue-50 p-3 rounded-lg flex gap-3 items-start">
               <AlertCircle size={16} className="text-fuchsia-600 mt-0.5 shrink-0" />
               <p className="text-xs text-fuchsia-700 leading-relaxed">
                 Note: Core information like Name, Passport Number, and Nationality cannot be edited here. Please contact HR directly for legal changes.
               </p>
            </div>
          </div>
        </Card>

        {/* Right Col: Document Upload */}
        <Card className="p-6">
          <h3 className="font-semibold text-slate-800 mb-4 flex items-center gap-2">
            <Upload size={18} className="text-slate-400" /> 
            Upload Documents
          </h3>

          <div className="space-y-4">
            <div>
               <label className="block text-xs font-medium text-slate-500 mb-1">Document Type</label>
               <select 
                 value={docType}
                 onChange={(e) => setDocType(e.target.value)}
                 className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-900"
               >
                 <option>Passport (Renewal)</option>
                 <option>Iqama (Renewal)</option>
                 <option>Driving License</option>
                 <option>Medical Report</option>
                 <option>Other</option>
               </select>
            </div>

            <div className="border-2 border-dashed border-slate-200 rounded-xl p-6 text-center hover:bg-slate-50 transition-colors relative">
              <input 
                type="file" 
                onChange={handleFileChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                accept=".pdf,.jpg,.png"
              />
              <div className="flex flex-col items-center">
                <div className="h-10 w-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-400 mb-3">
                  <Upload size={20} />
                </div>
                <p className="text-sm font-medium text-slate-700">Click to upload</p>
                <p className="text-xs text-slate-400 mt-1">PDF, JPG or PNG (Max 5MB)</p>
              </div>
            </div>

            {selectedFile && (
              <div className="flex items-center justify-between bg-slate-100 px-3 py-2 rounded-lg">
                <span className="text-xs font-medium text-slate-700 truncate max-w-[150px]">
                  {selectedFile.name}
                </span>
                <button 
                  type="button" 
                  onClick={() => setSelectedFile(null)} 
                  className="text-slate-400 hover:text-red-500"
                >
                  <X size={14} />
                </button>
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className={cn(
                "w-full flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-medium transition-all",
                isLoading 
                  ? "bg-slate-100 text-slate-400 cursor-not-allowed" 
                  : "bg-fuchsia-600 text-white hover:bg-fuchsia-700 shadow-sm hover:shadow-md"
              )}
            >
              {isLoading ? 'Processing...' : (
                <>
                  <Save size={16} />
                  Submit Request
                </>
              )}
            </button>
          </div>
        </Card>
      </form>
    </div>
  );
}