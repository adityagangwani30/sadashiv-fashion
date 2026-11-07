'use client';

import React, { useState } from 'react';

const TEL_LINK = 'tel:+916376648869';
const MAPS_LINK = 'https://maps.google.com/?q=Sadashiv+Fashions+Malviya+Nagar+Jaipur';
const WA_GENERAL =
  'https://wa.me/916376648869?text=Hello%20Sadashiv%20Fashions%2C%20I%20am%20interested%20in%20your%20boutique%20collection.%20Please%20guide%20me.';
const WA_WHOLESALE =
  'https://wa.me/916376648869?text=Hello%20Sadashiv%20Fashions%2C%20I%20am%20enquiring%20about%20a%20wholesale%20purchase.%20Please%20share%20your%20catalogue%2C%20pricing%20and%20terms.';

export default function FloatingWhatsApp() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="fixed bottom-6 right-5 z-40 select-none">
      {/* Expanded Boutique Concierge Popover */}
      {expanded && (
        <div className="mb-3 w-80 bg-[#FAF6F0] rounded-2xl shadow-2xl border border-[#E6D8C8] p-5 animate-in fade-in slide-in-from-bottom-2 duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-[#E6D8C8]">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#25D366] animate-pulse" />
              <p className="font-display text-base font-semibold text-[#1A1817]">Sadashiv Concierge</p>
            </div>
            <button
              onClick={() => setExpanded(false)}
              className="text-[#7A6358] hover:text-[#1A1817] p-1 text-sm rounded-md transition-colors"
              aria-label="Close Concierge popover"
            >
              ✕
            </button>
          </div>

          <p className="text-xs text-[#5A4A42] my-3 leading-relaxed">
            Welcome to Sadashiv Fashions in Malviya Nagar, Jaipur. How may we assist you today?
          </p>

          <div className="space-y-2">
            <a
              href={WA_GENERAL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-between p-2.5 bg-[#D4197D] text-white rounded-xl text-xs font-semibold uppercase tracking-[0.12em] hover:bg-[#B31468] transition-colors shadow-xs"
            >
              <span>WhatsApp Consultation</span>
              <span>↗</span>
            </a>

            <a
              href={TEL_LINK}
              className="w-full flex items-center justify-between p-2.5 bg-[#FAF6F0] hover:bg-[#F3ECE2] border border-[#E6D8C8] rounded-xl text-xs text-[#1A1817] font-medium transition-colors"
            >
              <div className="flex items-center gap-2">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
                <span>Call: +91 63766 48869</span>
              </div>
              <span className="text-[#856020]">Immediate</span>
            </a>

            <a
              href={MAPS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-between p-2.5 bg-[#FAF6F0] hover:bg-[#F3ECE2] border border-[#E6D8C8] rounded-xl text-xs text-[#1A1817] font-medium transition-colors"
            >
              <span>Get Showroom Directions</span>
              <span className="text-[#856020]">Maps ↗</span>
            </a>

            <a
              href={WA_WHOLESALE}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-between p-2.5 bg-[#1A1817] hover:bg-[#292522] text-[#FAF6F0] rounded-xl text-xs font-medium transition-colors"
            >
              <span>Wholesale &amp; Bulk Enquiries</span>
              <span className="text-white">✦</span>
            </a>
          </div>

          <p className="mt-3 text-[10px] text-center text-[#7A6358] pt-2 border-t border-[#E6D8C8]">
            Malviya Nagar, Jaipur · Prompt Response
          </p>
        </div>
      )}

      {/* Main Floating Trigger Pill */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="group flex items-center gap-2.5 bg-[#1A1817] hover:bg-[#D4197D] text-white rounded-full pl-3.5 pr-4 py-2.5 shadow-xl border border-[#C5A059]/40 transition-all duration-300 active:scale-95"
        aria-label="Open Sadashiv WhatsApp & Showroom Concierge"
        aria-expanded={expanded}
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-[#25D366]" />
        </span>
        <span className="text-xs uppercase tracking-[0.16em] font-medium">Concierge</span>
        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" className="text-[#25D366] group-hover:text-white transition-colors">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.564 4.14 1.546 5.877L.057 23.5l5.773-1.516A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.044-1.394l-.361-.214-3.735.979 1-3.639-.235-.374A9.818 9.818 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z" />
        </svg>
      </button>
    </div>
  );
}
