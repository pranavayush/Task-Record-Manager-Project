import React, { useState } from "react";
import { Plus, MoreVertical, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "../components/ui/Card";
import { Button } from "../components/ui/Button";
import { Modal } from "../components/ui/Modal";
import { Input, Label } from "../components/ui/Input";
import { MOCK_PROJECTS, Project } from "../../mock/data";
import { format } from "date-fns";

export function Projects() {
  const [projects, setProjects] = useState<Project[]>(MOCK_PROJECTS);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCreateProject = (e: React.FormEvent) => {
    e.preventDefault();
    setIsModalOpen(false);
    // In a real app, API call goes here.
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-zinc-900">Projects</h1>
          <p className="text-zinc-500 mt-1">Manage and track your team's projects.</p>
        </div>
        <Button onClick={() => setIsModalOpen(true)} className="gap-2">
          <Plus className="h-4 w-4" />
          New Project
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Card key={project.id} className="group hover:shadow-md transition-all duration-200 cursor-pointer flex flex-col">
            <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-2">
              <CardTitle className="text-lg line-clamp-1">{project.name}</CardTitle>
              <button className="text-zinc-400 hover:text-zinc-900 opacity-0 group-hover:opacity-100 transition-opacity">
                <MoreVertical className="h-5 w-5" />
              </button>
            </CardHeader>
            <CardContent className="flex-1">
              <p className="text-sm text-zinc-500 line-clamp-2 mt-2">{project.description}</p>
            </CardContent>
            <CardFooter className="flex items-center justify-between border-t border-zinc-100 pt-4 mt-auto">
              <div className="flex items-center text-xs text-zinc-500 gap-1.5">
                <Calendar className="h-3.5 w-3.5" />
                {format(new Date(project.createdAt), 'MMM d, yyyy')}
              </div>
              <div className="flex -space-x-2">
                {project.members.map((m, i) => (
                  <div key={i} className="h-6 w-6 rounded-full border-2 border-white bg-zinc-200 flex items-center justify-center text-[10px] font-bold text-zinc-600">
                    {m.replace('u', '')}
                  </div>
                ))}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Create New Project">
        <form onSubmit={handleCreateProject} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="name">Project Name</Label>
            <Input id="name" placeholder="e.g. Website Redesign" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <textarea
              id="description"
              className="flex w-full rounded-xl border border-zinc-200 bg-white px-3 py-2 text-sm placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 min-h-[100px] resize-none"
              placeholder="Describe the project..."
              required
            />
          </div>
          <div className="flex justify-end gap-3 pt-4 border-t border-zinc-100">
            <Button type="button" variant="ghost" onClick={() => setIsModalOpen(false)}>Cancel</Button>
            <Button type="submit">Create Project</Button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
