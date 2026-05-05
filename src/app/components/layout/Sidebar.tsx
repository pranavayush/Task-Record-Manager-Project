import React from "react";
import { Link, useLocation } from "react-router";
import { LayoutDashboard, FolderKanban, CheckSquare, Settings, LogOut } from "lucide-react";
import { cn } from "../ui/Button";

const navigation = [
  { name: 'Dashboard', href: '/', icon: LayoutDashboard },
  { name: 'Projects', href: '/projects', icon: FolderKanban },
  { name: 'Tasks', href: '/tasks', icon: CheckSquare },
  { name: 'Settings', href: '/settings', icon: Settings },
];

export function Sidebar() {
  const location = useLocation();

  return (
    <div className="hidden md:flex w-64 flex-col border-r border-zinc-200 bg-white min-h-screen">
      <div className="flex h-16 items-center px-6 border-b border-zinc-200">
        <div className="flex items-center gap-2 font-bold text-xl tracking-tight text-zinc-900">
          <div className="h-8 w-8 rounded-lg bg-zinc-900 flex items-center justify-center">
            <CheckSquare className="h-5 w-5 text-white" />
          </div>
          TeamTask
        </div>
      </div>
      
      <div className="flex flex-1 flex-col overflow-y-auto pt-6 pb-4">
        <nav className="flex-1 space-y-1 px-4">
          {navigation.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "group flex items-center rounded-xl px-3 py-2.5 text-sm font-medium transition-colors",
                  isActive
                    ? "bg-zinc-100 text-zinc-900"
                    : "text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900"
                )}
              >
                <item.icon
                  className={cn(
                    "mr-3 h-5 w-5 flex-shrink-0",
                    isActive ? "text-zinc-900" : "text-zinc-400 group-hover:text-zinc-500"
                  )}
                  aria-hidden="true"
                />
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>
      
      <div className="p-4 border-t border-zinc-200">
        <Link
          to="/login"
          className="group flex w-full items-center rounded-xl px-3 py-2 text-sm font-medium text-zinc-600 hover:bg-red-50 hover:text-red-600 transition-colors"
        >
          <LogOut className="mr-3 h-5 w-5 flex-shrink-0 text-zinc-400 group-hover:text-red-500" />
          Log out
        </Link>
      </div>
    </div>
  );
}
