import { useState, useEffect } from 'react';
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
  const [activeTab, setActiveTab] = useState('dashboard');
  const [currentWeek, setCurrentWeek] = useState(1);
  const [currentDay, setCurrentDay] = useState('Lunes');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Set dark class on html element
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

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
    <div className="h-screen w-screen flex flex-col font-sans overflow-hidden bg-[#06141B] text-[#CCD0CF] dark">

      {/* 1. Header Superior */}
      <header className="shrink-0 z-40 px-4 py-3 flex items-center justify-between border-b bg-[#11212D] border-[#253745]">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl border bg-[#253745]/60 border-[#4A5C6A] text-[#9BA8AB]">
            <Dumbbell className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[10px] uppercase tracking-widest font-bold font-outfit text-[#9BA8AB]">Documento Oficial</span>
            <h1 className="text-base font-bold font-outfit leading-none mt-0.5 text-[#CCD0CF]">RUTINA DIANA - HUB</h1>
          </div>
        </div>

        {/* User profile & status banner */}
        <div className="flex items-center gap-3 md:gap-5">
          <div className="hidden md:flex items-center gap-3">
            <div className="text-right">
              <span className="text-xs block font-outfit font-semibold text-[#CCD0CF]">Diana Serradilla</span>
              <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold px-2 py-0.5 rounded-full border bg-[#11212D] text-[#9BA8AB] border-[#253745]">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                Macrociclo Activo
              </span>
            </div>
          </div>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg transition-colors text-[#9BA8AB] hover:text-white hover:bg-[#253745]"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Main Layout Area */}
      <div className="flex-grow flex flex-col lg:flex-row overflow-hidden min-h-0">

        {/* 2. Sidebar de Navegación (Desktop) */}
        <aside className="hidden lg:flex flex-col w-72 p-3.5 shrink-0 justify-between h-full overflow-hidden border-r bg-[#11212D] border-[#253745]">
          <div className="space-y-3 flex flex-col h-full justify-between min-h-0">
            <div className="space-y-2 min-h-0 flex flex-col flex-grow">
              <span className="text-[10px] font-bold uppercase tracking-widest px-2 font-outfit shrink-0 text-[#4A5C6A]">Índice del Documento</span>

              <nav className="space-y-1 flex-grow overflow-hidden">
                {navigationItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeTab === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleNavClick(item.id)}
                      className={`w-full flex items-center gap-3 px-2.5 py-1.5 lg:py-2 rounded-xl text-left transition-all duration-200 ${isActive
                          ? 'bg-[#253745] border-l-4 border-[#9BA8AB] text-[#CCD0CF] font-bold shadow-sm'
                          : 'text-[#9BA8AB] hover:text-white hover:bg-[#253745]/40'
                        }`}
                    >
                      <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-[#9BA8AB]' : 'text-[#4A5C6A]'
                        }`} />
                      <div className="min-w-0">
                        <span className="text-xs block leading-tight font-outfit truncate">{item.name}</span>
                        <span className={`text-[10px] font-normal block truncate ${isActive ? 'text-[#9BA8AB]' : 'text-[#4A5C6A]'
                          }`}>{item.desc}</span>
                      </div>
                    </button>
                  );
                })}
              </nav>
            </div>


          </div>
        </aside>

        {/* 3. Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 z-30 bg-black/60 backdrop-blur-sm pt-16 px-4">
            <nav className="p-4 rounded-2xl space-y-2 border no-scrollbar mt-4 bg-[#11212D] border-[#253745] text-[#CCD0CF]">
              {navigationItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl text-left transition-colors ${isActive
                        ? 'bg-[#253745] text-white font-semibold'
                        : 'text-[#9BA8AB] hover:bg-[#253745]/40'
                      }`}
                  >
                    <Icon className="w-5 h-5 shrink-0 text-[#9BA8AB]" />
                    <span className="text-sm font-outfit">{item.name}</span>
                  </button>
                );
              })}
            </nav>
          </div>
        )}

        {/* 4. Contenido Principal */}
        <main className="flex-grow p-4 md:p-6 lg:p-8 max-w-7xl mx-auto w-full overflow-y-auto h-full min-h-0">

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
