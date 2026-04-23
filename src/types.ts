export type View = 'login' | 'dashboard' | 'directory' | 'profile' | 'attendance' | 'payroll' | 'performance';

export interface Employee {
  id: string;
  name: string;
  role: string;
  department: string;
  avatar: string;
  location?: string;
  status?: string;
  tags?: string[];
  isTopPerformer?: boolean;
  email?: string;
  phone?: string;
  workstation?: string;
  startDate?: string;
  employmentType?: string;
  directReports?: string;
}

export interface Activity {
  id: string;
  type: 'payroll' | 'anniversary' | 'onboarding';
  title: string;
  description: string;
  time: string;
}
