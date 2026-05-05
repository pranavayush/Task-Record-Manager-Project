export type User = {
  id: string;
  name: string;
  email: string;
  role: 'Admin' | 'Member';
  avatarUrl?: string;
};

export type Project = {
  id: string;
  name: string;
  description: string;
  members: string[]; // User IDs
  createdBy: string;
  createdAt: string;
};

export type TaskStatus = 'Pending' | 'In Progress' | 'Completed';

export type Task = {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
  assignedTo: string; // User ID
  projectId: string;
  deadline: string;
  createdAt: string;
};

export const MOCK_USERS: User[] = [
  { id: 'u1', name: 'Alex Rivera', email: 'alex@example.com', role: 'Admin', avatarUrl: 'https://i.pravatar.cc/150?u=u1' },
  { id: 'u2', name: 'Jamie Chen', email: 'jamie@example.com', role: 'Member', avatarUrl: 'https://i.pravatar.cc/150?u=u2' },
  { id: 'u3', name: 'Taylor Smith', email: 'taylor@example.com', role: 'Member', avatarUrl: 'https://i.pravatar.cc/150?u=u3' },
];

export const MOCK_PROJECTS: Project[] = [
  { id: 'p1', name: 'Website Redesign', description: 'Overhaul the corporate website with a modern look and feel.', members: ['u1', 'u2'], createdBy: 'u1', createdAt: '2023-10-01' },
  { id: 'p2', name: 'Q4 Marketing Campaign', description: 'Plan and execute the end-of-year holiday campaign.', members: ['u1', 'u3'], createdBy: 'u1', createdAt: '2023-10-15' },
  { id: 'p3', name: 'Mobile App Launch', description: 'Finalize iOS and Android apps for the app store launch.', members: ['u2', 'u3'], createdBy: 'u1', createdAt: '2023-11-05' },
];

export const MOCK_TASKS: Task[] = [
  { id: 't1', title: 'Design Homepage Mockups', description: 'Create high-fidelity designs in Figma for the new homepage.', status: 'Completed', assignedTo: 'u2', projectId: 'p1', deadline: '2023-10-10', createdAt: '2023-10-02' },
  { id: 't2', title: 'Write Copy for About Page', description: 'Draft new company story and values for the About Us page.', status: 'In Progress', assignedTo: 'u3', projectId: 'p1', deadline: '2023-10-20', createdAt: '2023-10-03' },
  { id: 't3', title: 'Setup Google Ads', description: 'Configure targeting and budget for Q4 ad campaigns.', status: 'Pending', assignedTo: 'u1', projectId: 'p2', deadline: '2023-11-01', createdAt: '2023-10-16' },
  { id: 't4', title: 'Finalize App Icon', description: 'Review and approve the final app icon design.', status: 'Completed', assignedTo: 'u2', projectId: 'p3', deadline: '2023-11-10', createdAt: '2023-11-06' },
  { id: 't5', title: 'Submit to App Store', description: 'Go through the Apple review process.', status: 'Pending', assignedTo: 'u1', projectId: 'p3', deadline: '2023-11-20', createdAt: '2023-11-11' },
];
