import { useState } from 'react';
import { 
  Home, Apple, CalendarRange, BookOpen, 
  Dumbbell, Menu, X, ShieldAlert, Activity
} from 'lucide-react';
import DailyDashboard from './components/DailyDashboard';
import NutritionModule from './components/NutritionModule';
import TimelineModule from './components/TimelineModule';
import WikiModule from './components/WikiModule';
import MobilityModule from './components/MobilityModule';

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard'); // dashboard, nutrition, timeline, wiki
  const [currentWeek, setCurrentWeek] = useState(1);
  const [currentDay, setCurrentDay] = useState('Lunes');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigationItems = [
    { id: 'dashboard', name: 'Dashboard Diario', icon: Home, desc: 'Tus tareas para hoy' },
    { id: 'nutrition', name: 'Nutrición Visual', icon: Apple, desc: 'Déficit de 1700 kcal' },
    { id: 'mobility', name: 'Flexibilidad y Movilidad', icon: Activity, desc: 'Preparación y recuperación' },
    { id: 'timeline', name: 'Timeline Estratégico', icon: CalendarRange, desc: 'Plan de 12 semanas' },
    { id: 'wiki', name: 'Biblioteca y Skills', icon: BookOpen, desc: 'Biomecánica y calistenia' }
  ];

  const handleNavClick = (tabId) => {
    setActiveTab(tabId);
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#030712] text-slate-200 flex flex-col font-sans">
      
      {/* 1. Header Superior para todas las resoluciones */}
      <header className="glass-panel border-b border-slate-900 sticky top-0 z-40 px-4 py-3.5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-indigo-600/10 border border-indigo-500/20 rounded-xl">
            <Dumbbell className="w-5 h-5 text-indigo-400" />
          </div>
          <div>
            <span className="text-[10px] text-indigo-400 uppercase tracking-widest font-bold">Información de Lectura</span>
            <h1 className="text-base font-bold font-outfit text-white leading-none mt-0.5">VISUAL CONTROL HUB</h1>
          </div>
        </div>

        {/* User profile & status banner */}
        <div className="hidden md:flex items-center gap-4">
          <div className="text-right">
            <span className="text-xs text-slate-400 block">Diana - Macrociclo</span>
            <span className="inline-flex items-center gap-1.5 text-[10px] text-emerald-400 font-semibold bg-emerald-950/30 px-2 py-0.5 rounded-full border border-emerald-900/50">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              En Progreso
            </span>
          </div>
        </div>

        {/* Mobile menu trigger */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-slate-400 hover:text-white hover:bg-slate-900 rounded-lg transition-colors"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </header>

      {/* Main Layout Area */}
      <div className="flex-grow flex flex-col lg:flex-row">
        
        {/* 2. Sidebar de Navegación (Desktop) */}
        <aside className="hidden lg:flex flex-col w-72 bg-[#050b18] border-r border-slate-900/80 p-4 shrink-0 justify-between">
          <div className="space-y-6">
            <div className="space-y-1">
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest px-3">Menú Principal</span>
              <nav className="space-y-1">
                {navigationItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeTab === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleNavClick(item.id)}
                      className={`w-full flex items-center gap-3.5 px-3 py-3 rounded-xl text-left transition-all duration-200 ${isActive ? 'bg-indigo-600/10 border-l-4 border-indigo-500 text-white font-semibold shadow-inner' : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/40'}`}
                    >
                      <Icon className={`w-5 h-5 shrink-0 ${isActive ? 'text-indigo-400' : 'text-slate-400'}`} />
                      <div>
                        <span className="text-sm block leading-none">{item.name}</span>
                        <span className="text-[10px] text-slate-500 font-normal mt-1 block">{item.desc}</span>
                      </div>
                    </button>
                  );
                })}
              </nav>
            </div>
          </div>

          {/* Footer Sidebar Info */}
          <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-900 text-xs text-slate-500 space-y-2 leading-relaxed">
            <span className="flex items-center gap-1 font-bold text-slate-400 uppercase tracking-wider text-[10px]">
              <ShieldAlert className="w-4 h-4 text-amber-500" />
              Regla Inquebrantable
            </span>
            <p className="text-[10px]">
              Todos los datos, ejercicios, repeticiones y porciones provienen exactamente de su ficha personal.
            </p>
          </div>
        </aside>

        {/* 3. Mobile Menu Overlay (Drawer) */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 z-30 bg-slate-950/80 backdrop-blur-sm pt-16 px-4">
            <nav className="glass-panel p-4 rounded-2xl space-y-2 border border-slate-800 shadow-2xl mt-4">
              {navigationItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl text-left transition-colors ${isActive ? 'bg-indigo-600/20 text-white font-semibold' : 'text-slate-400 hover:bg-slate-900'}`}
                  >
                    <Icon className="w-5 h-5 text-indigo-400 shrink-0" />
                    <span className="text-sm">{item.name}</span>
                  </button>
                );
              })}
            </nav>
          </div>
        )}

        {/* 4. Contenido Principal */}
        <main className="flex-grow p-4 md:p-6 lg:p-8 max-w-7xl mx-auto w-full transition-all duration-300">
          
          {/* Tab Render Switch */}
          {activeTab === 'dashboard' && (
            <DailyDashboard 
              currentWeek={currentWeek} 
              setCurrentWeek={setCurrentWeek} 
              currentDay={currentDay} 
              setCurrentDay={setCurrentDay} 
            />
          )}

          {activeTab === 'nutrition' && <NutritionModule />}

          {activeTab === 'mobility' && <MobilityModule />}

          {activeTab === 'timeline' && <TimelineModule />}

          {activeTab === 'wiki' && <WikiModule />}

        </main>

      </div>
    </div>
  );
}
