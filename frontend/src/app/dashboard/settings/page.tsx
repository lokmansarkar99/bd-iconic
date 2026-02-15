import ToggleSwitch from "@/components/DashboardComponents/ToggleSwitch";
import { Card } from "@/components/ui/Ui";

const SettingsView = () => (
  <div className="max-w-2xl space-y-6">
    <h1 className="text-2xl font-bold text-slate-900">Settings</h1>
    <Card className="divide-y divide-slate-100">
      <div className="p-4 flex items-center justify-between">
        <div>
          <h3 className="text-sm font-medium text-slate-900">Language</h3>
          <p className="text-xs text-slate-500">Change dashboard language</p>
        </div>
        <select className="bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-lg focus:ring-fuchsia-500 focus:border-fuchsia-500 block p-2">
          <option>English</option>
          <option>العربية (Arabic)</option>
        </select>
      </div>
      <div className="p-4 flex items-center justify-between">
        <div>
          <h3 className="text-sm font-medium text-slate-900">
            Email Notifications
          </h3>
          <p className="text-xs text-slate-500">
            Receive salary and expiry alerts via email
          </p>
        </div>
        <ToggleSwitch />
      </div>
    </Card>
  </div>
);

export default SettingsView;
