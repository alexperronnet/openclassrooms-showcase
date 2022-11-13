import React from 'react';
import projects from '~/data/projects.json';

export default function ProjectsList() {
  return (
    <table className="w-full text-xs sm:text-sm text-left rounded-lg overflow-hidden">
      <thead className="text-xs text-slate-400 uppercase bg-slate-700 border-b border-slate-600">
        <tr>
          <th className="hidden lg:table-cell lg:py-3 lg:px-6">No.</th>
          <th className="py-3 px-6 lg:border-l lg:border-slate-600">Title</th>
          <th className="py-3 px-6 border-l border-slate-600">Links</th>
          <th className="hidden sm:table-cell sm:py-3 sm:px-6 border-l border-slate-600">Status</th>
        </tr>
      </thead>
      <tbody>
        {projects.map((project, index) => (
          <tr key={index} className="bg-slate-800 border-b border-slate-700 last:border-b-0">
            <td className="hidden lg:table-cell lg:p-6">{project.number}</td>
            <td className="p-6 lg:border-l lg:border-slate-700">
              <h2 className="hidden md:table-cell md:font-bold">{project.title}</h2>
              <h3 className="font-bold md:font-normal md:text-xs md:text-slate-400 md:block md:mt-2">
                {project.name}
              </h3>
            </td>
            {project.status === 'Validated' ? (
              <td className="p-6 text-slate-100  border-l border-slate-700">
                {project.links.source && (
                  <a href={project.links.source} className="mr-4 link-highlight">
                    Source
                  </a>
                )}
                {project.links.demo && (
                  <a href={project.links.demo} className="mr-4 link-highlight">
                    Demo
                  </a>
                )}
              </td>
            ) : (
              <td className="p-6 text-slate-500 cursor-not-allowed line-through border-l border-slate-700">
                Not available
              </td>
            )}
            <td
              className={`hidden sm:table-cell sm:p-6 sm:text-xs border-l border-slate-700 ${
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
