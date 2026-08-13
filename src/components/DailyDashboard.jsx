import React, { useState, useMemo, useEffect } from 'react';
import {
  Flame, Calendar, Clock, Footprints, Zap, AlertTriangle,
  Info, CheckSquare, Plus, Minus, RefreshCw, Trophy, BookOpen,
  CheckCircle, Activity
} from 'lucide-react';
import { weeklySchedule, routinesByWeek, macrocycleWeeks, cardioSchedule } from '../data/macrocycleData';

const motivationQuotes = [
  "La repetición número 1 y la repetición número 10 deben verse biomecánicamente idénticas.",
  "Tu sobrecarga progresiva hoy no es buscar 11 repeticiones. Tu misión es hacer esas mismas 10 repeticiones plantada como una estatua de hormigón.",
  "Tensión mecánica en el máximo estiramiento posible. Un músculo estirado bajo carga es el detonante biológico más potente.",
  "Dominar la gravedad en cada milímetro del recorrido; no dejar que el peso caiga.",
  "Si para sacar una repetición extra tienes que acortar el recorrido, esa repetición es nula. El músculo crece en los extremos.",
  "El cerebro debe aprender a reclutar la mayor cantidad de fibras en una fracción de segundo (fuerza relativa).",
  "El volumen se mantiene intacto mientras el peso o las repeticiones sigan subiendo. 'No lo toques si funciona'.",
  "Durante la semana de descarga, el sistema nervioso necesita apagarse para consolidar las adaptaciones neurales (mielinización)."
];

export default function DailyDashboard({ currentWeek, setCurrentWeek, currentDay, setCurrentDay }) {
  const activeWeekObj = useMemo(() => {
    return macrocycleWeeks.find(w => w.number === currentWeek) || macrocycleWeeks[0];
  }, [currentWeek]);

  const activeWorkout = useMemo(() => {
    return routinesByWeek.getWorkout(currentWeek, currentDay);
  }, [currentWeek, currentDay]);

  const activeDaySchedule = useMemo(() => {
    return weeklySchedule.find(s => s.day === currentDay) || weeklySchedule[0];
  }, [currentDay]);

  const calisthenicsData = useMemo(() => {
    switch (activeWeekObj.mesocycle) {
      case 1:
        return {
          title: "Acondicionamiento Neuromuscular y Mielinización (Semanas 1 a 4)",
          focus: "Objetivo Global: Construir la autopista nerviosa. En esta fase, las ganancias de fuerza no provienen de músculos más grandes, sino de una mayor sincronización de las unidades motoras y el engrosamiento de la vaina de mielina de los axones."
        };
      case 2:
        return {
          title: "Sobrecarga Excéntrica y Densidad Contráctil (Semanas 5 a 8)",
          focus: "Objetivo Global: Construcción del \"hardware\". Una vez que el sistema nervioso sabe enviar la señal de fuerza, necesitamos que las fibras musculares sean más gruesas (hipertrofia miofibrilar) para ejecutarla. Nos enfocaremos en el daño muscular a través de las fases excéntricas lentas."
        };
      case 3:
      default:
        return {
          title: "Intensificación, Tolerancia Láctica y Peaking (Semanas 9 a 12)",
          focus: "Objetivo Global: Resistencia Anaeróbica y Fuerza Absoluta. Tienes los nervios (M1) y tienes el músculo (M2); ahora debes entrenar a la célula para que recicle el ATP a máxima velocidad y tolere el ácido láctico para poder exprimir esas 15 a 20 repeticiones continuas."
        };
    }
  }, [activeWeekObj.mesocycle]);

  const carouselSlides = useMemo(() => {
    return [
      {
        quote: "La repetición 1 y la repetición 10 deben verse biomecánicamente idénticas.",
        tag: "Ley Biomecánica",
        image: ""
      },
      {
        quote: "Tensión mecánica en el máximo estiramiento posible: el detonante biológico más potente.",
        tag: "Hipertrofia Pura",
        image: ""
      },
      {
        quote: "Durante la semana de descarga, el sistema nervioso se apaga para consolidar adaptaciones neurales.",
        tag: "Recuperación del SNC",
        image: ""
      }
    ];
  }, []);

  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev === carouselSlides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [carouselSlides.length]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-10 gap-6">

      {/* 1. Tarjeta de Motivación Diaria - Carrusel Vertical */}
      <div
        className="lg:col-span-3 lg:col-start-8 lg:row-start-1 relative overflow-hidden rounded-2xl h-[400px] flex flex-col justify-between p-6 border border-[#253745] bg-[#11212D] transition-all duration-500"
      >
        {/* Header / Top Info */}
        <div className="flex items-center justify-between z-10 w-full">
          <span className="bg-[#253745] border border-[#4A5C6A] text-[#CCD0CF] text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider flex items-center gap-1">
            <Trophy className="w-3 h-3 text-[#9BA8AB]" />
            {carouselSlides[activeSlide].tag}
          </span>
          <span className="text-[10px] text-[#9BA8AB] font-bold bg-[#06141B] px-2 py-0.5 rounded border border-[#253745] font-mono">
            {activeSlide + 1} / {carouselSlides.length}
          </span>
        </div>

        {/* Bottom Quote & Navigation Controls */}
        <div className="space-y-4 z-10 w-full">
          <div className="space-y-2">
            <div className="text-[10px] text-[#9BA8AB] font-bold uppercase tracking-widest flex items-center gap-1">
              <Flame className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
              No lo olvides
            </div>
            <blockquote className="text-base font-semibold text-[#CCD0CF] font-outfit italic leading-snug">
              "{carouselSlides[activeSlide].quote}"
            </blockquote>
          </div>

          {/* Navigation Arrows and Dots */}
          <div className="flex items-center justify-between pt-2 border-t border-[#253745]">
            {/* Dots indicators */}
            <div className="flex gap-1.5">
              {carouselSlides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={(e) => { e.stopPropagation(); setActiveSlide(idx); }}
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${idx === activeSlide ? 'bg-[#9BA8AB] w-3' : 'bg-[#4A5C6A]'}`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex gap-1">
              <button
                onClick={(e) => { e.stopPropagation(); setActiveSlide(prev => (prev === 0 ? carouselSlides.length - 1 : prev - 1)); }}
                className="p-1.5 bg-[#06141B] hover:bg-[#253745] text-[#9BA8AB] hover:text-white rounded-lg border border-[#253745] transition-colors"
              >
                ←
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); setActiveSlide(prev => (prev === carouselSlides.length - 1 ? 0 : prev + 1)); }}
                className="p-1.5 bg-[#06141B] hover:bg-[#253745] text-[#9BA8AB] hover:text-white rounded-lg border border-[#253745] transition-colors"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Header de Progreso & Selectores Interactivos */}
      <div className="lg:col-span-7 lg:col-start-1 lg:row-start-1 glass-panel p-6 rounded-2xl flex flex-col justify-between gap-5 lg:h-[400px]">
        <div>
          <div className="flex items-center gap-2 text-[#9BA8AB] font-semibold mb-2 text-xs tracking-wider uppercase font-mono">
            <Calendar className="w-4 h-4 text-[#9BA8AB]" />
            <span>Fase y Enfoque Actual</span>
          </div>
          <h2 className="text-lg md:text-xl font-bold font-outfit text-white leading-snug">
            Mesociclo {activeWeekObj.mesocycle}: {activeWeekObj.mesocycleName} / {calisthenicsData.title}
          </h2>
          <div className="space-y-3 mt-3 text-xs md:text-sm leading-relaxed lg:max-h-[170px] lg:overflow-y-auto pr-1">
            <div>
              <strong className="font-semibold text-[#9BA8AB]">Gimnasio: </strong>
              <span className="text-slate-300">{activeWeekObj.focus}</span>
            </div>
            <div>
              <strong className="font-semibold text-[#9BA8AB]">Calistenia: </strong>
              <span className="text-slate-300">{calisthenicsData.focus}</span>
            </div>
          </div>
        </div>

        {/* Dynamic Selector Panels */}
        <div className="flex flex-col sm:flex-row gap-4 border-t border-[#253745] pt-4 w-full justify-start">
          <div className="w-full sm:w-44">
            <label className="block text-[10px] font-bold text-[#4A5C6A] mb-1.5 uppercase tracking-wider">Semana</label>
            <select
              value={currentWeek}
              onChange={(e) => setCurrentWeek(Number(e.target.value))}
              className="bg-[#06141B] border border-[#253745] text-white text-xs rounded-xl py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#4A5C6A] font-medium w-full transition-all"
            >
              {macrocycleWeeks.map((w) => (
                <option key={w.number} value={w.number}>
                  Semana {w.number} {w.isDeload ? '(Descarga)' : ''}
                </option>
              ))}
            </select>
          </div>

          <div className="w-full sm:w-48">
            <label className="block text-[10px] font-bold text-[#4A5C6A] mb-1.5 uppercase tracking-wider">Día de la semana</label>
            <select
              value={currentDay}
              onChange={(e) => setCurrentDay(e.target.value)}
              className="bg-[#06141B] border border-[#253745] text-white text-xs rounded-xl py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#4A5C6A] font-medium w-full transition-all"
            >
              {weeklySchedule.map((s) => (
                <option key={s.day} value={s.day}>
                  {s.day} ({s.target})
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* 3. Módulo de Entrenamiento del Día */}
      <div className="lg:col-span-10 lg:col-start-1 lg:row-start-2 space-y-4">
        <div className="glass-panel p-6 rounded-2xl space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#253745] pb-4">
            <div>
              <span className="text-xs font-bold text-[#9BA8AB] uppercase tracking-widest font-mono">Entrenamiento de Hoy</span>
              <h2 className="text-2xl font-bold font-outfit text-white mt-1">
                {activeWorkout.title}
              </h2>
            </div>
            <div className="flex items-center gap-2 bg-[#06141B] px-3.5 py-1.5 rounded-xl border border-[#253745] text-xs font-semibold text-slate-300 self-start sm:self-center">
              <Clock className="w-4 h-4 text-[#9BA8AB]" />
              <span>{activeDaySchedule.label}</span>
            </div>
          </div>

          {/* Custom test instructions for Saturday of week 12 */}
          {activeWorkout.blocks[0].customWarning && (
            <div className="bg-red-950/40 border border-red-800/80 text-red-300 p-4 rounded-xl flex gap-3 text-sm">
              <AlertTriangle className="w-5 h-5 text-red-400 shrink-0" />
              <div>
                <strong className="block font-semibold mb-0.5">Atención: Examen Oficial</strong>
                {activeWorkout.blocks[0].customWarning}
              </div>
            </div>
          )}

          {/* Workout Blocks */}
          <div className="space-y-6">
            {activeWorkout.blocks.map((block, bIdx) => (
              <div key={bIdx} className="space-y-3">
                <h3 className="text-sm font-bold text-slate-200 bg-[#06141B]/60 px-3 py-1.5 rounded-lg border-l-4 border-[#4A5C6A] uppercase tracking-wider font-outfit">
                  {block.name}
                </h3>

                <div className="divide-y divide-[#253745]/60">
                  {block.exercises.map((ex, eIdx) => (
                    <div key={eIdx} className="py-3.5 first:pt-1 last:pb-1 flex flex-col md:flex-row md:items-start justify-between gap-3 hover:bg-[#253745]/20 px-2 rounded-lg transition-colors">
                      <div className="space-y-1">
                        <span className="font-semibold text-slate-100 block">{ex.name}</span>
                        <span className="text-xs text-slate-400 block max-w-md">{ex.note}</span>
                      </div>

                      {/* Exercise Metrics */}
                      <div className="flex items-center gap-3 shrink-0 self-start md:self-center">
                        <div className="bg-[#06141B] border border-[#253745] px-3 py-1.5 rounded-xl text-center min-w-16">
                          <span className="block text-[10px] text-[#4A5C6A] uppercase font-bold font-mono">Series</span>
                          <span className="text-sm font-bold text-white font-outfit">{ex.sets}</span>
                        </div>

                        <div className="bg-[#06141B] border border-[#253745] px-3 py-1.5 rounded-xl text-center min-w-20">
                          <span className="block text-[10px] text-[#4A5C6A] uppercase font-bold font-mono">Reps</span>
                          <span className="text-sm font-bold text-white font-outfit">{ex.reps}</span>
                        </div>

                        <div className="bg-[#06141B] border border-[#253745] px-3 py-1.5 rounded-xl text-center min-w-16">
                          <span className="block text-[10px] text-[#4A5C6A] uppercase font-bold font-mono">RIR</span>
                          <span className={`text-sm font-bold font-outfit ${ex.rir === '0' ? 'text-red-400' : 'text-[#9BA8AB]'}`}>
                            {ex.rir}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {block.intensityTechnique && (
                  <div className="bg-[#253745]/40 border border-[#4A5C6A] text-[#CCD0CF] px-4 py-2.5 rounded-xl flex gap-2.5 text-xs mt-2">
                    <Zap className="w-4 h-4 text-[#9BA8AB] shrink-0" />
                    <div>
                      <strong>Método de Intensidad Aplicado:</strong> {block.intensityTechnique}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* General Biomechanical Tips Link */}
          <div className="border-t border-[#253745] pt-4 flex items-center justify-between text-xs text-slate-400">
            <span className="flex items-center gap-1.5">
              <Info className="w-4 h-4 text-[#4A5C6A]" />
              Consulta reglas de ejecución detalladas en la Biblioteca (Wiki).
            </span>
            <span className="text-[#9BA8AB] font-mono">Solo Lectura / Hub</span>
          </div>
        </div>
      </div>

    </div>
  );
}
