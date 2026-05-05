import React from "react";
import { Bell, Search, Menu } from "lucide-react";
import { Avatar } from "../ui/Avatar";
import { MOCK_USERS } from "../../../mock/data";

export function Navbar() {
  const currentUser = MOCK_USERS[0]; // Pretend u1 is logged in

  return (
    <header className="sticky top-0 z-30 flex h-16 w-full items-center justify-between border-b border-zinc-200 bg-white/80 px-4 md:px-8 backdrop-blur-md">
      <div className="flex flex-1 items-center gap-4">
        <button className="md:hidden text-zinc-500 hover:text-zinc-900">
          <Menu className="h-5 w-5" />
        </button>
        <div className="w-full max-w-md relative hidden sm:block">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400" />
          <input 
            type="text" 
            placeholder="Search tasks, projects..." 
            className="h-10 w-full rounded-full border-0 bg-zinc-100 pl-10 pr-4 text-sm outline-none focus:ring-2 focus:ring-zinc-900"
          />
        </div>
      </div>
      <div className="flex items-center gap-6">
        <button className="relative text-zinc-500 hover:text-zinc-900 transition-colors">
          <Bell className="h-5 w-5" />
          <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
        </button>
        <div className="flex items-center gap-3 border-l border-zinc-200 pl-6">
          <div className="flex flex-col items-end">
            <span className="text-sm font-medium text-zinc-900">{currentUser.name}</span>
            <span className="text-xs text-zinc-500">{currentUser.role}</span>
          </div>
          <Avatar src={currentUser.avatarUrl} fallback="AR" />
        </div>
      </div>
    </header>
  );
}
