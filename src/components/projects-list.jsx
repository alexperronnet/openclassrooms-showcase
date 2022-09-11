import React from 'react';
import projects from '~/data/projects.json';

export default function ProjectsList() {
  return (
    <table className="w-full text-xs sm:text-sm text-left rounded-lg overflow-hidden">
      <thead className="text-xs text-slate-400 uppercase bg-slate-700 border-b border-slate-600">
        <tr>
          <th className="hidden lg:block lg:py-3 lg:px-6">No.</th>
          <th className="py-3 px-6">Title</th>
          <th className="py-3 px-6">Links</th>
          <th className="hidden sm:block sm:py-3 sm:px-6">Status</th>
        </tr>
      </thead>
      <tbody>
        {projects.map((project, index) => (
          <tr key={index} className="bg-slate-800 border-b border-slate-700 last:border-b-0">
            <td className="hidden lg:block lg:p-6">{project.number}</td>
            <td className="p-6">
              <span className="hidden md:block md:font-bold">{project.title}</span>
              <span className="font-bold md:font-normal md:text-xs md:text-slate-400 md:block md:mt-2">
                {project.name}
              </span>
            </td>
            {project.status === 'Validated' ? (
              <td className="p-6 text-slate-100">
                <a href={project.links.source} className="mr-4 link-highlight">
                  Source
                </a>
                <a href={project.links.demo} className="link-highlight">
                  Live
                </a>
              </td>
            ) : (
              <td className="p-6 text-slate-500 cursor-not-allowed line-through">Not available</td>
            )}
            <td
              className={`hidden sm:block sm:p-6 sm:text-xs ${
                project.status === 'Validated' && 'sm:text-emerald-400'
              } ${project.status === 'In Progress' && 'sm:text-amber-400'} ${
                project.status === 'Not Started' && 'sm:text-rose-400'
              }`}>
              {project.status}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
