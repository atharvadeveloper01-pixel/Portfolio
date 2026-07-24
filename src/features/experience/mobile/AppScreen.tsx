import React from "react";
import type { AppScreen, AppScreenItem, AppScreenStat } from "@/types";
import { cn } from "@/lib/cn";

interface AppScreenProps {
  screen: AppScreen;
  accent: string;
}

// ─── Sub-renderers ───────────────────────────────────

function StatusBar({ accent }: { accent: string }) {
  return (
    <div className="flex items-center justify-between px-5 pt-3 pb-1 shrink-0">
      <span className="text-[10px] font-semibold text-zinc-400">9:41</span>
      <div className="flex items-center gap-1">
        <div className="flex gap-0.5 items-end h-3">
          {[2, 3, 4, 3].map((h, i) => (
            <div
              key={i}
              className="w-0.5 rounded-sm"
              style={{ height: `${h * 3}px`, backgroundColor: i < 3 ? "#71717a" : "#3f3f46" }}
            />
          ))}
        </div>
        <div className="ml-1 h-2 w-4 rounded-sm border border-zinc-600 p-0.5">
          <div className="h-full w-3/4 rounded-sm bg-zinc-400" />
        </div>
      </div>
    </div>
  );
}

function AuthScreen({ screen, accent }: { screen: AppScreen; accent: string }) {
  return (
    <div className="flex flex-col h-full px-5 pb-5 justify-center gap-4">
      <div className="mb-2">
        <div className="h-9 w-9 rounded-xl mb-4" style={{ backgroundColor: accent }} />
        <p className="text-base font-bold text-white leading-tight">{screen.header}</p>
        <p className="text-xs text-zinc-500 mt-0.5">{screen.subtitle}</p>
      </div>
      {["Email address", "Password"].map((ph) => (
        <div key={ph} className="h-9 rounded-xl border border-zinc-700 bg-zinc-800/80 px-3 flex items-center">
          <span className="text-[11px] text-zinc-500">{ph}</span>
        </div>
      ))}
      <div
        className="h-9 rounded-xl flex items-center justify-center mt-1"
        style={{ backgroundColor: accent }}
      >
        <span className="text-[11px] font-semibold text-white">Sign In</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="flex-1 h-px bg-zinc-800" />
        <span className="text-[9px] text-zinc-600">or</span>
        <div className="flex-1 h-px bg-zinc-800" />
      </div>
      <div className="h-9 rounded-xl border border-zinc-700 bg-zinc-800/80 flex items-center justify-center">
        <span className="text-[11px] font-medium text-zinc-300">Continue with Google</span>
      </div>
    </div>
  );
}

function DashboardScreen({ screen, accent }: { screen: AppScreen; accent: string }) {
  return (
    <div className="flex flex-col h-full px-4 pb-4 gap-3 overflow-hidden">
      <div className="pt-1">
        <p className="text-[13px] font-bold text-white">{screen.header}</p>
        <p className="text-[10px] text-zinc-500">{screen.subtitle}</p>
      </div>
      {/* Stats row */}
      {screen.stats && (
        <div className="grid grid-cols-3 gap-1.5">
          {screen.stats.map((s) => (
            <div key={s.label} className="rounded-xl bg-zinc-800/60 border border-zinc-700/50 p-2 text-center">
              <p className="text-sm font-bold text-white leading-none">{s.value}</p>
              <p className="text-[9px] text-zinc-500 mt-0.5">{s.label}</p>
            </div>
          ))}
        </div>
      )}
      {/* Task preview */}
      {screen.items && (
        <div className="flex flex-col gap-1.5 flex-1 overflow-hidden">
          <p className="text-[9px] font-semibold uppercase tracking-widest text-zinc-600">Today</p>
          {screen.items.slice(0, 3).map((item) => (
            <TaskItem key={item.label} item={item} accent={accent} />
          ))}
        </div>
      )}
      {/* Category items for wallpapers */}
      {!screen.items?.some(i => "done" in i) && screen.items && (
        <div className="flex flex-col gap-1.5 flex-1 overflow-hidden">
          {screen.items.map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-3 rounded-xl border border-zinc-800 bg-zinc-800/40 px-3 py-2"
            >
              <div
                className="h-6 w-6 shrink-0 rounded-lg"
                style={{ backgroundColor: item.color ?? accent }}
              />
              <div className="flex-1 min-w-0">
                <p className="text-[11px] font-semibold text-zinc-200 truncate">{item.label}</p>
                <p className="text-[9px] text-zinc-500">{item.secondary}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function TaskItem({ item, accent }: { item: AppScreenItem; accent: string }) {
  return (
    <div className="flex items-center gap-2.5 rounded-xl border border-zinc-800 bg-zinc-800/40 px-3 py-2">
      <div
        className={cn("h-4 w-4 shrink-0 rounded-full border-2 flex items-center justify-center", item.done && "border-transparent")}
        style={{
          borderColor: item.done ? accent : "#52525b",
          backgroundColor: item.done ? accent : "transparent",
        }}
      >
        {item.done && <div className="h-1.5 w-1.5 rounded-full bg-white" />}
      </div>
      <div className="flex-1 min-w-0">
        <p className={cn("text-[11px] font-medium leading-none truncate", item.done ? "text-zinc-500 line-through" : "text-zinc-100")}>{item.label}</p>
        {item.secondary && <p className="text-[9px] text-zinc-600 mt-0.5">{item.secondary}</p>}
      </div>
    </div>
  );
}

function ListScreen({ screen, accent }: { screen: AppScreen; accent: string }) {
  return (
    <div className="flex flex-col h-full px-4 pb-4 gap-2.5 overflow-hidden relative">
      <div className="flex items-center justify-between pt-1">
        <p className="text-[13px] font-bold text-white">{screen.header}</p>
        {screen.subtitle && <p className="text-[10px] text-zinc-500">{screen.subtitle}</p>}
      </div>
      <div className="flex flex-col gap-1.5 flex-1 overflow-hidden">
        {(screen.items ?? []).map((item) => (
          "done" in item
            ? <TaskItem key={item.label} item={item} accent={accent} />
            : (
              <div
                key={item.label}
                className="flex items-center gap-3 rounded-xl border border-zinc-800 bg-zinc-800/40 px-3 py-2"
              >
                <div
                  className="h-6 w-6 shrink-0 rounded-lg"
                  style={{ backgroundColor: item.color ?? accent }}
                />
                <div className="flex-1 min-w-0">
                  <p className="text-[11px] font-semibold text-zinc-200 truncate">{item.label}</p>
                  <p className="text-[9px] text-zinc-500">{item.secondary}</p>
                </div>
              </div>
            )
        ))}
      </div>
      {screen.showFAB && (
        <div
          className="absolute bottom-5 right-4 h-10 w-10 rounded-full shadow-lg flex items-center justify-center text-white font-bold text-lg"
          style={{ backgroundColor: accent }}
        >
          +
        </div>
      )}
    </div>
  );
}

function FormScreen({ screen, accent }: { screen: AppScreen; accent: string }) {
  return (
    <div className="flex flex-col h-full px-4 pb-4 gap-3 overflow-hidden">
      <div className="pt-1 flex items-center gap-2">
        <div className="h-5 w-5 rounded-full border border-zinc-700 flex items-center justify-center">
          <span className="text-[8px] text-zinc-400">←</span>
        </div>
        <p className="text-[13px] font-bold text-white">{screen.header}</p>
      </div>
      {[
        { label: "Task Title", ph: "e.g. Design homepage" },
        { label: "Category", ph: "Work / Personal / Health" },
        { label: "Priority", ph: "High / Medium / Low" },
        { label: "Due Date", ph: "Select date..." },
      ].map(({ label, ph }) => (
        <div key={label}>
          <p className="text-[9px] font-semibold uppercase tracking-widest text-zinc-500 mb-1">{label}</p>
          <div className="h-9 rounded-xl border border-zinc-700 bg-zinc-800/80 px-3 flex items-center">
            <span className="text-[11px] text-zinc-600">{ph}</span>
          </div>
        </div>
      ))}
      <div
        className="mt-auto h-9 rounded-xl flex items-center justify-center"
        style={{ backgroundColor: accent }}
      >
        <span className="text-[11px] font-semibold text-white">Create Task</span>
      </div>
    </div>
  );
}

function ProfileScreen({ screen, accent }: { screen: AppScreen; accent: string }) {
  return (
    <div className="flex flex-col h-full px-4 pb-4 gap-4 overflow-hidden">
      <div className="pt-1">
        <p className="text-[13px] font-bold text-white">{screen.header}</p>
        <p className="text-[10px] text-zinc-500">{screen.subtitle}</p>
      </div>
      <div className="flex flex-col items-center gap-2">
        <div
          className="h-14 w-14 rounded-full flex items-center justify-center text-white font-bold text-base"
          style={{ backgroundColor: accent }}
        >
          AJ
        </div>
        <div className="text-center">
          <p className="text-[12px] font-semibold text-white">{screen.header}</p>
          <p className="text-[9px] text-zinc-500">Flutter Developer</p>
        </div>
      </div>
      {screen.stats && (
        <div className="grid grid-cols-3 gap-1.5">
          {screen.stats.map((s) => (
            <div key={s.label} className="rounded-xl bg-zinc-800/60 border border-zinc-700/50 p-2.5 text-center">
              <p className="text-sm font-bold text-white leading-none">{s.value}</p>
              <p className="text-[8px] text-zinc-500 mt-0.5">{s.label}</p>
            </div>
          ))}
        </div>
      )}
      <div className="flex flex-col gap-1.5 mt-auto">
        {["Edit Profile", "Notifications", "Export Data", "Sign Out"].map((item) => (
          <div key={item} className="flex items-center justify-between rounded-xl border border-zinc-800 bg-zinc-800/40 px-3 py-2">
            <span className="text-[11px] text-zinc-300">{item}</span>
            <span className="text-[10px] text-zinc-600">›</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function GalleryScreen({ screen, accent }: { screen: AppScreen; accent: string }) {
  const COLORS = ["#7C3AED", "#db2777", "#059669", "#ea580c", "#3B82F6", "#f59e0b"];
  return (
    <div className="flex flex-col h-full px-4 pb-4 gap-3 overflow-hidden">
      <div className="pt-1 flex items-center gap-2">
        <p className="text-[13px] font-bold text-white flex-1">{screen.header}</p>
        <div className="h-7 w-7 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center">
          <span className="text-[9px] text-zinc-400">⊞</span>
        </div>
      </div>
      {/* Search bar */}
      <div className="h-8 rounded-xl border border-zinc-700 bg-zinc-800/80 px-3 flex items-center gap-2">
        <span className="text-zinc-500 text-[11px]">⌕</span>
        <span className="text-[10px] text-zinc-600">Search wallpapers...</span>
      </div>
      {/* Grid */}
      <div className="grid grid-cols-2 gap-1.5 flex-1 overflow-hidden">
        {COLORS.map((c, i) => (
          <div
            key={i}
            className="rounded-xl flex-1"
            style={{
              background: `linear-gradient(135deg, ${c}40, ${c}10)`,
              border: `1px solid ${c}30`,
              minHeight: "60px",
            }}
          />
        ))}
      </div>
    </div>
  );
}

function DetailScreen({ screen, accent }: { screen: AppScreen; accent: string }) {
  return (
    <div className="flex flex-col h-full overflow-hidden">
      {/* Large preview */}
      <div
        className="flex-1 relative"
        style={{ background: `linear-gradient(135deg, ${accent}40 0%, ${accent}10 60%, #09090b 100%)` }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-16 w-16 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm" />
        </div>
      </div>
      {/* Info panel */}
      <div className="px-4 pb-4 pt-3 flex flex-col gap-3 bg-zinc-950">
        <div>
          <p className="text-[12px] font-bold text-white">{screen.header}</p>
          <p className="text-[9px] text-zinc-500">{screen.subtitle}</p>
        </div>
        <div className="flex gap-2">
          <div
            className="flex-1 h-8 rounded-xl flex items-center justify-center text-white text-[10px] font-semibold"
            style={{ backgroundColor: accent }}
          >
            Set Wallpaper
          </div>
          <div className="h-8 w-8 rounded-xl border border-zinc-700 bg-zinc-800 flex items-center justify-center">
            <span className="text-zinc-400 text-xs">♡</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function GameScreen({ screen, accent }: { screen: AppScreen; accent: string }) {
  return (
    <div className="flex flex-col h-full px-4 pb-4 gap-3 overflow-hidden">
      <div className="flex items-center justify-between pt-1">
        {screen.stats?.map((s) => (
          <div key={s.label} className="text-center">
            <p className="text-[10px] text-zinc-500">{s.label}</p>
            <p className="text-[13px] font-bold text-white">{s.value}</p>
          </div>
        ))}
      </div>
      {/* Score display */}
      <div className="text-center py-2">
        <p className="text-4xl font-black text-white">{screen.header}</p>
        <p className="text-[10px] text-zinc-500">{screen.subtitle}</p>
      </div>
      {/* Game area */}
      <div
        className="flex-1 rounded-2xl border flex items-center justify-center relative overflow-hidden"
        style={{ borderColor: `${accent}30`, background: `${accent}08` }}
      >
        <div className="grid grid-cols-3 gap-2 p-4">
          {Array.from({ length: 9 }).map((_, i) => (
            <div
              key={i}
              className="h-10 w-10 rounded-xl transition-all"
              style={{
                backgroundColor: i === 4 ? accent : `${accent}${i % 3 === 0 ? "40" : "15"}`,
                border: `1px solid ${accent}30`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function ResultScreen({ screen, accent }: { screen: AppScreen; accent: string }) {
  return (
    <div className="flex flex-col h-full px-4 pb-4 items-center justify-center gap-4 text-center">
      <div className="text-4xl">🎉</div>
      <div>
        <p className="text-4xl font-black text-white leading-none">{screen.header}</p>
        <p className="text-[11px] font-semibold mt-1" style={{ color: accent }}>
          {screen.subtitle}
        </p>
      </div>
      {screen.stats && (
        <div className="w-full grid grid-cols-3 gap-1.5">
          {screen.stats.map((s) => (
            <div key={s.label} className="rounded-xl bg-zinc-800/60 border border-zinc-700/50 p-2.5">
              <p className="text-xs font-bold text-white">{s.value}</p>
              <p className="text-[8px] text-zinc-500 mt-0.5">{s.label}</p>
            </div>
          ))}
        </div>
      )}
      <div className="flex flex-col gap-2 w-full mt-2">
        <div
          className="h-9 rounded-xl flex items-center justify-center text-white text-[11px] font-semibold"
          style={{ backgroundColor: accent }}
        >
          Play Again
        </div>
        <div className="h-9 rounded-xl border border-zinc-700 bg-zinc-800 flex items-center justify-center text-zinc-300 text-[11px]">
          Main Menu
        </div>
      </div>
    </div>
  );
}

// ─── Main Renderer ───────────────────────────────────

export default function AppScreenRenderer({ screen, accent }: AppScreenProps) {
  const SCREENS: Record<string, (props: { screen: AppScreen; accent: string }) => React.ReactElement> = {
    auth: AuthScreen,
    dashboard: DashboardScreen,
    list: ListScreen,
    form: FormScreen,
    profile: ProfileScreen,
    gallery: GalleryScreen,
    detail: DetailScreen,
    game: GameScreen,
    result: ResultScreen,
  };

  const Screen = SCREENS[screen.type] ?? DashboardScreen;

  return (
    <div className="flex flex-col h-full bg-zinc-950 overflow-hidden">
      <StatusBar accent={accent} />
      <div className="flex-1 overflow-hidden">
        <Screen screen={screen} accent={accent} />
      </div>
    </div>
  );
}
