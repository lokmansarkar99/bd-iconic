import React from 'react';
import { cn } from "@/components/ui/Ui"; // <--- ADD THIS IMPORT
import { Card } from "@/components/ui/Ui"; // Assuming you moved Card here
import { MOCK_NOTIFICATIONS } from "@/lib/data"; // Assuming you moved data here

export default function NotificationsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-slate-900">Notifications</h1>
      <Card className="p-0 overflow-hidden"> 
        <div className="divide-y divide-slate-100">
          {MOCK_NOTIFICATIONS.map((notif) => (
             <div 
               key={notif.id} 
               className={cn(
                 "p-4 flex gap-4 hover:bg-slate-50 transition-colors", 
                 !notif.read && "bg-blue-50/40"
               )}
             >
                <div className={cn(
                  "mt-1.5 h-2.5 w-2.5 rounded-full shrink-0 shadow-sm", 
                  notif.type === 'warning' ? 'bg-amber-500' : 
                  notif.type === 'success' ? 'bg-emerald-500' : 
                  'bg-blue-500'
                )} />
                <div className="flex-1">
                   <p className="text-sm font-semibold text-slate-900">{notif.title}</p>
                   <p className="text-xs text-slate-500 mt-1">{notif.date}</p>
                </div>
             </div>
          ))}
        </div>
      </Card>
    </div>
  );
}