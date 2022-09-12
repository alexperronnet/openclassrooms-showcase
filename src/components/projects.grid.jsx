import React from 'react';
import projects from '../data/projects.json';

export default function ProjectsGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-stretch gap-8">
      {projects.map((project, index) => (
        <article
          key={index}
          className="grow flex flex-col justify-between p-5 rounded-lg bg-slate-800 border border-slate-700 relative hover:border-cyan-400 transition-[border] before:content-[''] before:absolute before:inset-0 before:bg-slate-800 before:w-full before:h-full before:rounded-lg before:border before:border-slate-700 before:opacity-60 before:-z-10 before:transition-[transform] hover:before:rotate-3 after:content-[''] after:absolute after:inset-0 after:bg-slate-800 after:w-full after:h-full after:rounded-lg after:border after:border-slate-700 after:opacity-40 after:-z-20 after:translate-x-2 after:translate-y-2 after:transition-[transform] hover:after:-rotate-3">
          <div className="flex flex-col gap-5 mb-10">
            <span
              className={`text-xs w-fit px-2 py-1 rounded-full ${
                project.status === 'Validated' && 'text-emerald-400 bg-emerald-400/10'
              } ${project.status === 'In Progress' && 'text-amber-400 bg-amber-400/10'} ${
                project.status === 'Not Started' && 'text-rose-400 bg-rose-400/10'
              }`}>
              {project.status}
            </span>
            <h2 className="font-bold text-xl">{project.title}</h2>
            <h3 className="text-sm text-slate-300">
              P{project.number} — {project.name}
            </h3>
          </div>
          {project.status === 'Validated' ? (
            <div className="flex items-center gap-4">
              <a href={project.links.source} className="text-sm w-fit link-highlight">
                Source
              </a>
              <a href={project.links.demo} className="text-sm w-fit link-highlight">
                Live
              </a>
            </div>
          ) : (
            <p className="text-sm text-slate-500 cursor-not-allowed line-through">
              Links not available right now
            </p>
          )}
        </article>
      ))}
    </div>
  );
}
