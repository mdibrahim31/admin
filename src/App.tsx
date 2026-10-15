import React from 'react';
import { AppErrorBoundary } from './components/common/AppErrorBoundary';
import { DeliveryProvider } from './context/DeliveryContext';
import { AdminPortal } from './components/admin/AdminPortal';

export default function App() {
  return (
    <AppErrorBoundary>
      <DeliveryProvider>
        <div className="min-h-screen bg-gray-50 flex flex-col font-sans relative">
          <main className="flex-1">
            <AdminPortal />
          </main>
        </div>
      </DeliveryProvider>
    </AppErrorBoundary>
  );
}
