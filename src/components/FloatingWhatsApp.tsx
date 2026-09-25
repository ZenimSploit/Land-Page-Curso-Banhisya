import React, { useState, useEffect } from 'react';
import { MessageCircle, ArrowRight, Clock, CalendarDays } from 'lucide-react';
import { getWhatsAppUrl } from '../types';

interface CountdownState {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function calculateTimeLeft(): CountdownState {
  const now = new Date();
  const targetYear = now.getFullYear();
  // Target: October 5th at 08:00 AM local time
  let target = new Date(targetYear, 9, 5, 8, 0, 0);

  // If already past this year's Oct 5, calculate for next year
  if (now.getTime() > target.getTime()) {
    target = new Date(targetYear + 1, 9, 5, 8, 0, 0);
  }

  const diff = Math.max(0, target.getTime() - now.getTime());
  const totalSeconds = Math.floor(diff / 1000);

  const days = Math.floor(totalSeconds / (3600 * 24));
  const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return { days, hours, minutes, seconds };
}

export const FloatingWhatsApp: React.FC = () => {
  const [countdown, setCountdown] = useState<CountdownState>(calculateTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const floatingUrl = getWhatsAppUrl(
    'Olá! Vi no site que a turma inaugural do Curso de Banhista inicia dia 05/10 e gostaria de garantir a minha vaga!'
  );

  return (
    <>
      {/* Mobile Sticky Bottom Conversion Bar (< 640px) */}
      <div className="fixed bottom-0 left-0 right-0 z-50 sm:hidden bg-[#090C14]/95 backdrop-blur-xl border-t border-white/[0.12] px-3.5 pt-2 pb-[max(0.75rem,env(safe-area-inset-bottom))] shadow-[0_-8px_25px_rgba(0,0,0,0.7)] animate-in slide-in-from-bottom-2 duration-300">
        {/* Top Info & Countdown Line */}
        <div className="flex items-center justify-between gap-1.5 mb-1.5 px-0.5">
          {/* Turma Inaugural */}
          <div className="flex items-center gap-1.5 text-[11px] font-semibold text-slate-300">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
            </span>
            <span className="text-white font-bold tracking-wide">Turma Inaugural</span>
          </div>

          {/* Countdown to 05/10 */}
          <div className="flex items-center gap-1 text-[11px] font-mono font-bold text-amber-300 bg-amber-950/50 px-2 py-0.5 rounded border border-amber-500/30">
            <Clock className="w-3 h-3 text-amber-400 animate-pulse" />
            <span>Início 05/10:</span>
            <span className="text-white font-extrabold">
              {countdown.days}d {String(countdown.hours).padStart(2, '0')}h {String(countdown.minutes).padStart(2, '0')}m
            </span>
          </div>
        </div>

        {/* Action Button */}
        <a
          href={floatingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-glow-emerald flex items-center justify-center gap-2.5 w-full h-11 rounded-xl bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white font-extrabold text-xs xs:text-sm tracking-wide shadow-lg shadow-emerald-950/60 transition-transform active:scale-[0.98] border border-emerald-400/40"
          aria-label="Garantir Vaga no WhatsApp"
        >
          <MessageCircle className="w-4 h-4 text-emerald-100 fill-current shrink-0" />
          <span>GARANTIR VAGA NO WHATSAPP</span>
          <ArrowRight className="w-4 h-4 text-emerald-200 shrink-0" />
        </a>
      </div>

      {/* Desktop / Tablet Sticky Bottom Bar (>= 640px) */}
      <div className="hidden sm:block fixed bottom-0 left-0 right-0 z-50 bg-[#090C14]/95 backdrop-blur-xl border-t border-white/[0.12] py-2.5 px-4 shadow-[0_-8px_30px_rgba(0,0,0,0.8)] animate-in slide-in-from-bottom-2 duration-300">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          {/* Left: Turma Inaugural & Location */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500" />
              </span>
              <span className="text-white font-extrabold text-sm uppercase tracking-wide">
                Turma Inaugural
              </span>
            </div>
            <span className="text-slate-500 text-xs hidden lg:inline">•</span>
            <span className="text-slate-400 text-xs hidden lg:inline">
              Presencial em São José/SC
            </span>
          </div>

          {/* Center: Live Countdown to October 5th */}
          <div className="flex items-center gap-3 bg-[#111624] px-3.5 py-1.5 rounded-xl border border-white/[0.08] shadow-inner">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-300">
              <CalendarDays className="w-4 h-4 text-amber-400" />
              <span className="text-slate-200 font-bold">Início dia 05/10:</span>
            </div>

            <div className="flex items-center gap-1.5 font-mono text-xs">
              <div className="flex items-center gap-1 bg-[#1A2236] px-2 py-0.5 rounded border border-white/[0.08]">
                <span className="font-extrabold text-amber-300 text-sm">{countdown.days}</span>
                <span className="text-[10px] text-slate-400 uppercase">dias</span>
              </div>
              <span className="text-slate-500 font-bold">:</span>
              <div className="flex items-center gap-1 bg-[#1A2236] px-2 py-0.5 rounded border border-white/[0.08]">
                <span className="font-extrabold text-white text-sm">{String(countdown.hours).padStart(2, '0')}</span>
                <span className="text-[10px] text-slate-400 uppercase">h</span>
              </div>
              <span className="text-slate-500 font-bold">:</span>
              <div className="flex items-center gap-1 bg-[#1A2236] px-2 py-0.5 rounded border border-white/[0.08]">
                <span className="font-extrabold text-white text-sm">{String(countdown.minutes).padStart(2, '0')}</span>
                <span className="text-[10px] text-slate-400 uppercase">m</span>
              </div>
              <span className="text-slate-500 font-bold">:</span>
              <div className="flex items-center gap-1 bg-[#1A2236] px-2 py-0.5 rounded border border-white/[0.08]">
                <span className="font-extrabold text-emerald-400 text-sm">{String(countdown.seconds).padStart(2, '0')}</span>
                <span className="text-[10px] text-slate-400 uppercase">s</span>
              </div>
            </div>
          </div>

          {/* Right: CTA Button */}
          <a
            href={floatingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glow-emerald flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white font-extrabold text-xs sm:text-sm tracking-wide shadow-lg shadow-emerald-950/60 transition-transform active:scale-[0.98] border border-emerald-400/40 shrink-0"
            aria-label="Garantir Vaga no WhatsApp"
          >
            <MessageCircle className="w-4 h-4 text-emerald-100 fill-current shrink-0" />
            <span>GARANTIR VAGA NO WHATSAPP</span>
            <ArrowRight className="w-4 h-4 text-emerald-200 shrink-0" />
          </a>
        </div>
      </div>
    </>
  );
};

