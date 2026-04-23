import { useState } from 'react';
import { View, Employee } from './types';
import { Login } from './components/Login';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import { Directory } from './components/Directory';
import { Profile } from './components/Profile';
import { Attendance } from './components/Attendance';
import { Payroll } from './components/Payroll';
import { Performance } from './components/Performance';
import { PROFILE_ELEANOR } from './constants';

export default function App() {
  const [view, setView] = useState<View>('login');
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(null);

  if (view === 'login') {
    return <Login onLogin={() => setView('dashboard')} />;
  }

  const handleSelectEmployee = (emp: Employee) => {
    setSelectedEmployee(emp);
    setView('profile');
  };

  return (
    <div className="min-h-screen bg-surface font-sans text-on-surface flex">
      <Sidebar currentView={view} onViewChange={setView} />
      
      <main className="flex-1 ml-64 flex flex-col min-h-screen">
        <Header />
        
        <div className="flex-1 p-12 max-w-7xl mx-auto w-full">
          {view === 'dashboard' && <Dashboard />}
          {view === 'directory' && <Directory onSelectEmployee={handleSelectEmployee} />}
          {view === 'attendance' && <Attendance />}
          {view === 'payroll' && <Payroll />}
          {view === 'performance' && <Performance />}
          {view === 'profile' && (
            <Profile 
              employee={selectedEmployee || PROFILE_ELEANOR} 
              onBack={() => setView('directory')} 
              onSelectEmployee={handleSelectEmployee}
            />
          )}
        </div>

        <footer className="p-8 text-center text-[10px] font-black text-on-surface-variant/20 uppercase tracking-[0.4em] pointer-events-none">
          End of Strategic Stream • Workforce Admin Portal v2.4.0
        </footer>
      </main>
    </div>
  );
}
