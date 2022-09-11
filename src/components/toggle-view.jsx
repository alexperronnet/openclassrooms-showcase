import React from 'react';
import { Svg } from '~/components';

export default function ToggleView({ onClick, view }) {
  return (
    <button
      onClick={onClick}
      className="w-fit flex items-center gap-3 text-sm bg-slate-800 py-2 px-4 rounded hover:bg-slate-700 transition-[background-color]">
      <Svg name={view === 'grid' ? 'list' : 'grid'} className="h-5" />
      Toggle {view === 'grid' ? 'list' : 'grid'} view
    </button>
  );
}
