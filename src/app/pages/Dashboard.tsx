import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/Card";
import { Badge } from "../components/ui/Badge";
import { MOCK_TASKS, MOCK_PROJECTS } from "../../mock/data";
import { CheckCircle2, Clock, ListTodo, AlertCircle } from "lucide-react";
import { format } from "date-fns";

export function Dashboard() {
  const stats = [
    { name: 'Total Tasks', value: MOCK_TASKS.length, icon: ListTodo, color: 'text-zinc-900' },
    { name: 'Completed', value: MOCK_TASKS.filter(t => t.status === 'Completed').length, icon: CheckCircle2, color: 'text-emerald-500' },
    { name: 'In Progress', value: MOCK_TASKS.filter(t => t.status === 'In Progress').length, icon: Clock, color: 'text-blue-500' },
    { name: 'Pending', value: MOCK_TASKS.filter(t => t.status === 'Pending').length, icon: AlertCircle, color: 'text-amber-500' },
  ];

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900">Dashboard</h1>
        <p className="text-zinc-500 mt-1">Welcome back. Here's what's happening today.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.name} className="hover:shadow-md transition-shadow duration-200">
            <CardContent className="p-6 flex items-center gap-4">
              <div className={`p-3 rounded-2xl bg-zinc-100 ${stat.color}`}>
                <stat.icon className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm font-medium text-zinc-500">{stat.name}</p>
                <h3 className="text-2xl font-bold text-zinc-900">{stat.value}</h3>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Recent Tasks</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {MOCK_TASKS.slice(0, 4).map(task => (
                <div key={task.id} className="flex items-center justify-between border-b border-zinc-100 pb-4 last:border-0 last:pb-0">
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-zinc-900">{task.title}</p>
                    <p className="text-xs text-zinc-500">Due {format(new Date(task.deadline), 'MMM d, yyyy')}</p>
                  </div>
                  <Badge variant={
                    task.status === 'Completed' ? 'completed' :
                    task.status === 'In Progress' ? 'progress' : 'pending'
                  }>
                    {task.status}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Active Projects</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {MOCK_PROJECTS.slice(0, 4).map(project => (
                <div key={project.id} className="flex items-center justify-between border-b border-zinc-100 pb-4 last:border-0 last:pb-0">
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-zinc-900">{project.name}</p>
                    <p className="text-xs text-zinc-500 truncate max-w-[200px]">{project.description}</p>
                  </div>
                  <div className="flex -space-x-2">
                    {project.members.map((m, i) => (
                      <div key={i} className="h-8 w-8 rounded-full border-2 border-white bg-zinc-200 flex items-center justify-center text-[10px] font-bold">
                        U
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
