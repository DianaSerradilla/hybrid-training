import { useState } from 'react';
import { 
  Home, Apple, Footprints, CalendarRange, ShieldAlert,
  Activity, Target, BookOpen, Dumbbell, Menu, X, Trophy, Scale
} from 'lucide-react';
import DailyDashboard from './components/DailyDashboard';
import NutritionModule from './components/NutritionModule';
import NeatModule from './components/NeatModule';
import WeeklyStructureModule from './components/WeeklyStructureModule';
import TimelineModule from './components/TimelineModule';
import WikiModule from './components/WikiModule';
import MobilityModule from './components/MobilityModule';
import HandstandDashboard from './components/HandstandDashboard';
import SkillsCalisthenicsModule from './components/SkillsCalisthenicsModule';
import BodyRecompositionModule from './components/BodyRecompositionModule';

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard'); // Default to Dashboard Principal
  const [currentWeek, setCurrentWeek] = useState(1);
  const [currentDay, setCurrentDay] = useState('Lunes');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigationItems = [
    { id: 'dashboard', name: 'Dashboard Principal', icon: Home, desc: 'Tus tareas y rutina de hoy' },
    { id: 'recomposition', name: 'Recomposición Corporal', icon: Scale, desc: 'Evolución nutricionista y meta 20% grasa' },
    { id: 'mobility', name: 'Movilidad', icon: Activity, desc: 'Flexibilidad, Big 5 y rutinas 1-9' },
    { id: 'handstand', name: 'HandStand', icon: Target, desc: 'Cues, progresiones y plan 12 sem' },
    { id: 'skills', name: 'Skills & Calistenia', icon: Trophy, desc: 'Vectores de fuerza y anclajes' },
    { id: 'neat', name: 'NEAT', icon: Footprints, desc: 'Protocolo 10k-15k pasos' },
    { id: 'nutrition', name: 'Alimentacion', icon: Apple, desc: '1700 kcal, bloques y recetas' },
    { id: 'structure', name: 'Estructura Semanal', icon: CalendarRange, desc: 'Rutinas diarias PPL + Híbrido' },
    { id: 'mesocycles', name: 'Desglose Mesociclos', icon: BookOpen, desc: 'Mesociclo 1, 2 y 3 (12 Semanas)' },
    { id: 'info', name: 'WIKI', icon: BookOpen, desc: 'Manual definitivo de entrenamiento' }
  ];

  const handleNavClick = (tabId) => {
    setActiveTab(tabId);
    setMobileMenuOpen(false);
  };

  return (
    <div className="h-screen w-screen bg-[#030712] text-slate-200 flex flex-col font-sans overflow-hidden">
      
      {/* 1. Header Superior para todas las resoluciones */}
      <header className="glass-panel border-b border-slate-900 shrink-0 z-40 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-indigo-600/10 border border-indigo-500/20 rounded-xl">
            <Dumbbell className="w-5 h-5 text-indigo-400" />
          </div>
          <div>
            <span className="text-[10px] text-indigo-400 uppercase tracking-widest font-bold font-outfit">Documento Oficial</span>
            <h1 className="text-base font-bold font-outfit text-white leading-none mt-0.5">RUTINA DIANA - HUB</h1>
          </div>
        </div>

        {/* User profile & status banner */}
        <div className="hidden md:flex items-center gap-4">
          <div className="text-right">
            <span className="text-xs text-slate-400 block font-outfit font-semibold">Diana Serradilla</span>
            <span className="inline-flex items-center gap-1.5 text-[10px] text-emerald-400 font-semibold bg-emerald-950/30 px-2 py-0.5 rounded-full border border-emerald-900/50">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              Macrociclo Activo
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
      <div className="flex-grow flex flex-col lg:flex-row overflow-hidden min-h-0">
        
        {/* 2. Sidebar de Navegación (Desktop) - Fijo y sin scroll */}
        <aside className="hidden lg:flex flex-col w-72 bg-[#050b18] border-r border-slate-900 p-3.5 shrink-0 justify-between h-full overflow-hidden">
          <div className="space-y-3 flex flex-col h-full justify-between min-h-0">
            <div className="space-y-2 min-h-0 flex flex-col flex-grow">
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest px-2 font-outfit shrink-0">Índice del Documento</span>
              <nav className="space-y-1 flex-grow overflow-hidden">
                {navigationItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeTab === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleNavClick(item.id)}
                      className={`w-full flex items-center gap-3 px-2.5 py-1.5 lg:py-2 rounded-xl text-left transition-all duration-200 ${isActive ? 'bg-indigo-600/10 border-l-4 border-indigo-500 text-white font-semibold' : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/40'}`}
                    >
                      <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-indigo-400' : 'text-slate-400'}`} />
                      <div className="min-w-0">
                        <span className="text-xs block leading-tight font-outfit truncate">{item.name}</span>
                        <span className="text-[10px] text-slate-500 font-normal block truncate">{item.desc}</span>
                      </div>
                    </button>
                  );
                })}
              </nav>
            </div>

            {/* Footer Sidebar Info */}
            <div className="bg-slate-950 p-3 rounded-xl border border-slate-900 text-xs text-slate-500 space-y-1 shrink-0">
              <span className="flex items-center gap-1 font-bold text-slate-400 uppercase tracking-wider text-[10px] font-outfit">
                <ShieldAlert className="w-3.5 h-3.5 text-amber-500" />
                Rutina_Diana.pdf
              </span>
              <p className="text-[10px] text-slate-500">
                Estructura oficial extraída directamente del índice del PDF.
              </p>
            </div>
          </div>
        </aside>

        {/* 3. Mobile Menu Overlay (Drawer) */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 z-30 bg-slate-950/80 backdrop-blur-sm pt-16 px-4">
            <nav className="glass-panel p-4 rounded-2xl space-y-2 border border-slate-900 no-scrollbar mt-4">
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
                    <span className="text-sm font-outfit">{item.name}</span>
                  </button>
                );
              })}
            </nav>
          </div>
        )}

        {/* 4. Contenido Principal - ÚNICO PANEL CON SCROLL VERTICAL */}
        <main className="flex-grow p-4 md:p-6 lg:p-8 max-w-7xl mx-auto w-full overflow-y-auto h-full min-h-0">
          
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

          {activeTab === 'recomposition' && <BodyRecompositionModule />}

          {activeTab === 'neat' && <NeatModule />}

          {activeTab === 'structure' && <WeeklyStructureModule />}

          {activeTab === 'info' && <WikiModule />}

          {activeTab === 'mobility' && <MobilityModule />}

          {activeTab === 'handstand' && <HandstandDashboard />}

          {activeTab === 'skills' && <SkillsCalisthenicsModule />}

          {activeTab === 'mesocycles' && <TimelineModule />}

        </main>

      </div>
    </div>
  );
}
