import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-6 left-6 z-40 flex flex-col items-center gap-2 group">
      <a
        href="https://wa.me/916374817034?text=Hello%20Livewire%20Salem,%20I%20want%20to%20know%20more%20details%20about%20your%20software%20courses."
        target="_blank"
        rel="noreferrer"
        className="w-14 h-14 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 relative"
        title="Chat with Livewire Salem on WhatsApp"
      >
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-40"></span>
        <MessageCircle className="w-8 h-8 relative z-10 fill-current" />
      </a>
      <span className="hidden sm:block text-[11px] font-bold bg-slate-900 text-white px-2.5 py-1 rounded-full shadow opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        Chat with Livewire
      </span>
    </div>
  );
}
