import React, { useState, useMemo, useEffect } from 'react';
import {
  Flame, Calendar, Clock, Footprints, Zap, AlertTriangle,
  Info, CheckSquare, Plus, Minus, RefreshCw, Trophy, BookOpen,
  CheckCircle
} from 'lucide-react';
import { weeklySchedule, routinesByWeek, macrocycleWeeks } from '../data/macrocycleData';

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
        quote: "Solo triunfa quien soporta el proceso.",
        tag: "Motivación",
        image: `${import.meta.env.BASE_URL}1.webp`
      },
      {
        quote: "En la incomodidad está el crecimiento.",
        tag: "Motivación",
        image: `${import.meta.env.BASE_URL}4.webp`
      },
      {
        quote: "No hay otra vida para intentarlo.",
        tag: "Motivación",
        image: `${import.meta.env.BASE_URL}3.jpg`
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

  // GTG restrictions check
  const gtgState = useMemo(() => {
    const isDeload = activeWeekObj.isDeload;
    const isPushDay = currentDay === "Lunes" || currentDay === "Jueves";
    const isPullDay = currentDay === "Martes";

    return {
      allForbidden: isDeload,
      pullupsSuspended: isPullDay,
      pushupsSuspended: isPushDay,
      reason: isDeload
        ? "Semana de descarga: Grease the Groove está estrictamente prohibido para permitir la resíntesis del SNC."
        : isPullDay
          ? "Día de Pull pesado: el GTG de dominadas queda suspendido para proteger la articulación."
          : isPushDay
            ? "Día de Push pesado: el GTG de flexiones queda suspendido para evitar sobrecarga neural."
            : null
    };
  }, [activeWeekObj, currentDay]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-10 gap-6">

      {/* 1. Tarjeta de Motivación Diaria - Carrusel Vertical (Rectángulo Parado) */}
      <div
        className="lg:col-span-3 lg:col-start-8 lg:row-start-1 relative overflow-hidden rounded-2xl h-[400px] flex flex-col justify-between p-6 bg-cover bg-center border border-slate-800 shadow-xl transition-all duration-500"
        style={{
          backgroundImage: `linear-gradient(to top, rgba(3, 7, 18, 0.95) 15%, rgba(3, 7, 18, 0.3) 100%), url('${carouselSlides[activeSlide].image}')`,
          backgroundColor: '#111827'
        }}
      >
        {/* Header / Top Info */}
        <div className="flex items-center justify-between z-10 w-full">
          <span className="bg-indigo-600/95 text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider flex items-center gap-1 backdrop-blur-sm">
            <Trophy className="w-3 h-3" />
            {carouselSlides[activeSlide].tag}
          </span>
          <span className="text-[10px] text-slate-400 font-bold bg-slate-900/60 px-2 py-0.5 rounded backdrop-blur-sm font-sans">
            {activeSlide + 1} / {carouselSlides.length}
          </span>
        </div>

        {/* Bottom Quote & Navigation Controls */}
        <div className="space-y-4 z-10 w-full">
          <div className="space-y-2">
            <div className="text-[10px] text-indigo-400 font-bold uppercase tracking-widest flex items-center gap-1">
              <Flame className="w-3.5 h-3.5 text-orange-500 fill-orange-500" />
              No lo olvides
            </div>
            <blockquote className="text-base font-semibold text-slate-100 font-outfit italic leading-snug">
              "{carouselSlides[activeSlide].quote}"
            </blockquote>

          </div>

          {/* Navigation Arrows and Dots */}
          <div className="flex items-center justify-between pt-2 border-t border-slate-800/40">
            {/* Dots indicators */}
            <div className="flex gap-1.5">
              {carouselSlides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={(e) => { e.stopPropagation(); setActiveSlide(idx); }}
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${idx === activeSlide ? 'bg-indigo-500 w-3' : 'bg-slate-600'}`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex gap-1">
              <button
                onClick={(e) => { e.stopPropagation(); setActiveSlide(prev => (prev === 0 ? carouselSlides.length - 1 : prev - 1)); }}
                className="p-1.5 bg-slate-900/80 hover:bg-slate-800 text-slate-300 rounded-lg border border-slate-850 hover:text-white transition-colors"
              >
                ←
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); setActiveSlide(prev => (prev === carouselSlides.length - 1 ? 0 : prev + 1)); }}
                className="p-1.5 bg-slate-900/80 hover:bg-slate-800 text-slate-300 rounded-lg border border-slate-850 hover:text-white transition-colors"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Header de Progreso & Selectores Interactivos */}
      <div className="lg:col-span-7 lg:col-start-1 lg:row-start-1 glass-panel p-6 rounded-2xl flex flex-col justify-between gap-5 glow-indigo lg:h-[400px]">
        <div>
          <div className="flex items-center gap-2 text-indigo-400 font-semibold mb-2 text-xs tracking-wider uppercase">
            <Calendar className="w-4.5 h-4.5" />
            <span>Fase y Enfoque Actual</span>
          </div>
          <h2 className="text-lg md:text-xl font-bold font-outfit text-white leading-snug">
            Mesociclo {activeWeekObj.mesocycle}: {activeWeekObj.mesocycleName} / {calisthenicsData.title}
          </h2>
          <div className="space-y-3 mt-3 text-xs md:text-sm leading-relaxed lg:max-h-[170px] lg:overflow-y-auto pr-1">
            <div>
              <strong className="font-semibold text-indigo-400">Gimnasio: </strong>
              <span className="text-slate-300">{activeWeekObj.focus}</span>
            </div>
            <div>
              <strong className="font-semibold text-indigo-400">Calistenia: </strong>
              <span className="text-slate-300">{calisthenicsData.focus}</span>
            </div>
          </div>
        </div>

        {/* Dynamic Selector Panels (Placed below the text for height alignment) */}
        <div className="flex flex-col sm:flex-row gap-4 border-t border-slate-800/80 pt-4 w-full justify-start">
          <div className="w-full sm:w-44">
            <label className="block text-[10px] font-bold text-slate-500 mb-1.5 uppercase tracking-wider">Semana</label>
            <select
              value={currentWeek}
              onChange={(e) => setCurrentWeek(Number(e.target.value))}
              className="bg-slate-900 border border-slate-700 text-white text-xs rounded-xl py-2 px-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 font-medium w-full transition-all"
            >
              {macrocycleWeeks.map((w) => (
                <option key={w.number} value={w.number}>
                  Semana {w.number} {w.isDeload ? '(Descarga)' : ''}
                </option>
              ))}
            </select>
          </div>

          <div className="w-full sm:w-48">
            <label className="block text-[10px] font-bold text-slate-500 mb-1.5 uppercase tracking-wider">Día de la semana</label>
            <select
              value={currentDay}
              onChange={(e) => setCurrentDay(e.target.value)}
              className="bg-slate-900 border border-slate-700 text-white text-xs rounded-xl py-2 px-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 font-medium w-full transition-all"
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

      {/* 3. Módulo de Entrenamiento del Día (Left Column) */}
      <div className="lg:col-span-7 lg:col-start-1 lg:row-start-2 space-y-4">
        <div className="glass-panel p-6 rounded-2xl glow-indigo space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
            <div>
              <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest">Entrenamiento de Hoy</span>
              <h2 className="text-2xl font-bold font-outfit text-white mt-1">
                {activeWorkout.title}
              </h2>
            </div>
            <div className="flex items-center gap-2 bg-slate-900/80 px-3.5 py-1.5 rounded-xl border border-slate-800 text-xs font-semibold text-slate-300 self-start sm:self-center">
              <Clock className="w-4 h-4 text-indigo-400" />
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
                <h3 className="text-sm font-bold text-slate-300 bg-slate-900/40 px-3 py-1.5 rounded-lg border-l-4 border-indigo-500 uppercase tracking-wider">
                  {block.name}
                </h3>

                <div className="divide-y divide-slate-800/60">
                  {block.exercises.map((ex, eIdx) => (
                    <div key={eIdx} className="py-3.5 first:pt-1 last:pb-1 flex flex-col md:flex-row md:items-start justify-between gap-3 hover:bg-slate-900/10 px-2 rounded-lg transition-colors">
                      <div className="space-y-1">
                        <span className="font-semibold text-slate-100 block">{ex.name}</span>
                        <span className="text-xs text-slate-400 block max-w-md">{ex.note}</span>
                      </div>

                      {/* Exercise Metrics */}
                      <div className="flex items-center gap-3 shrink-0 self-start md:self-center">
                        <div className="bg-slate-950 border border-slate-800 px-3 py-1.5 rounded-xl text-center min-w-16">
                          <span className="block text-[10px] text-slate-500 uppercase font-bold">Series</span>
                          <span className="text-sm font-bold text-white">{ex.sets}</span>
                        </div>

                        <div className="bg-slate-950 border border-slate-800 px-3 py-1.5 rounded-xl text-center min-w-20">
                          <span className="block text-[10px] text-slate-500 uppercase font-bold">Reps</span>
                          <span className="text-sm font-bold text-white">{ex.reps}</span>
                        </div>

                        <div className="bg-slate-950 border border-slate-800 px-3 py-1.5 rounded-xl text-center min-w-16">
                          <span className="block text-[10px] text-slate-500 uppercase font-bold">RIR</span>
                          <span className={`text-sm font-bold ${ex.rir === '0' ? 'text-red-400' : 'text-indigo-400'}`}>
                            {ex.rir}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {block.intensityTechnique && (
                  <div className="bg-indigo-950/20 border border-indigo-900/50 text-indigo-300 px-4 py-2.5 rounded-xl flex gap-2.5 text-xs mt-2">
                    <Zap className="w-4 h-4 text-indigo-400 shrink-0" />
                    <div>
                      <strong>Método de Intensidad Aplicado:</strong> {block.intensityTechnique}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* General Biomechanical Tips Link */}
          <div className="border-t border-slate-800 pt-4 flex items-center justify-between text-xs text-slate-400">
            <span className="flex items-center gap-1.5">
              <Info className="w-4 h-4 text-slate-500" />
              Consulta reglas de ejecución detalladas en la Biblioteca (Wiki).
            </span>
            <span className="text-indigo-400 font-medium">Solo Lectura / Hub</span>
          </div>
        </div>
      </div>

      {/* 4. Panel de Hábitos Recomendados (Right Column) - Solo Informativo */}
      <div className="lg:col-span-3 lg:col-start-8 lg:row-start-2 space-y-6">
        <div className="glass-panel p-6 rounded-2xl glow-fuchsia space-y-6">
          <div className="border-b border-slate-800 pb-3">
            <h2 className="text-lg font-bold font-outfit text-white">Hábitos Recomendados</h2>
            <p className="text-xs text-slate-400">Guía de hábitos diarios requeridos</p>
          </div>

          {/* Normal Habits Information */}
          <div className="space-y-3">
            {/* Habit 1 */}
            <div className="flex items-center justify-between p-3.5 rounded-xl border border-slate-800 bg-slate-950/30">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-indigo-950/60 border border-indigo-900 flex items-center justify-center">
                  <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></span>
                </div>
                <div>
                  <span className="text-sm font-semibold text-slate-200 block">Cardio LISS (30 min)</span>
                  <span className="text-xs text-slate-500">Realizado en caminadora para sumar pasos base</span>
                </div>
              </div>
            </div>

            {/* Habit 2 */}
            <div className="flex items-center justify-between p-3.5 rounded-xl border border-slate-800 bg-slate-950/30">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-indigo-950/60 border border-indigo-900 flex items-center justify-center">
                  <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></span>
                </div>
                <div>
                  <span className="text-sm font-semibold text-slate-200 block">Práctica de Verticales</span>
                  <span className="text-xs text-slate-500">20-30 min de Ranita y alineación articular</span>
                </div>
              </div>
            </div>

            {/* Habit 3 */}
            <div className="flex items-center justify-between p-3.5 rounded-xl border border-slate-800 bg-slate-950/30">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-indigo-950/60 border border-indigo-900 flex items-center justify-center">
                  <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></span>
                </div>
                <div>
                  <span className="text-sm font-semibold text-slate-200 block">Objetivo NEAT Diario</span>
                  <span className="text-xs text-slate-500">Rango ideal de 10k - 15k pasos totales</span>
                </div>
              </div>
            </div>
          </div>

          {/* Grease the Groove (GTG) Module - Purely Informative */}
          <div className="border-t border-slate-800 pt-4 space-y-4">
            <div>
              <h3 className="text-sm font-bold text-slate-200 uppercase tracking-wider flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-amber-400 fill-amber-400" />
                Método Grease the Groove (GTG)
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">Frecuencia y dosificación recomendada durante la jornada</p>
            </div>

            {/* Dynamic Alerts */}
            {gtgState.allForbidden ? (
              <div className="bg-red-950/30 border border-red-900/60 text-red-300 p-3.5 rounded-xl flex gap-2.5 text-xs">
                <AlertTriangle className="w-4.5 h-4.5 text-red-400 shrink-0" />
                <span>{gtgState.reason}</span>
              </div>
            ) : gtgState.pullupsSuspended || gtgState.pushupsSuspended ? (
              <div className="bg-amber-950/30 border border-amber-900/60 text-amber-300 p-3.5 rounded-xl flex gap-2.5 text-xs">
                <Info className="w-4.5 h-4.5 text-amber-400 shrink-0" />
                <span>{gtgState.reason}</span>
              </div>
            ) : (
              <div className="bg-emerald-950/20 border border-emerald-900/40 text-emerald-300 p-3.5 rounded-xl flex gap-2.5 text-xs">
                <CheckCircle className="w-4.5 h-4.5 text-emerald-400 shrink-0" />
                <span>Método GTG habilitado hoy: Ejecutar series dispersas en estado de máxima frescura neural.</span>
              </div>
            )}

            {/* GTG Reference Info */}
            <div className="space-y-3">
              {/* Pull-ups GTG info */}
              <div className={`p-3.5 rounded-xl border ${gtgState.allForbidden || gtgState.pullupsSuspended ? 'border-slate-900 bg-slate-950/10 opacity-40' : 'border-slate-800 bg-slate-950/50'} flex items-center justify-between`}>
                <div>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">Set Dominadas</span>
                  <span className="text-sm font-semibold text-slate-200 block mt-0.5">2 Dominadas por serie</span>
                  <span className="text-[10px] text-slate-400 block mt-1">Frecuencia: Máx 5 series dispersas en la jornada</span>
                </div>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase ${gtgState.allForbidden || gtgState.pullupsSuspended ? 'bg-red-950 text-red-400 border border-red-900' : 'bg-emerald-950 text-emerald-400 border border-emerald-900'}`}>
                  {gtgState.allForbidden || gtgState.pullupsSuspended ? 'Suspendido' : 'Habilitado'}
                </span>
              </div>

              {/* Push-ups GTG info */}
              <div className={`p-3.5 rounded-xl border ${gtgState.allForbidden || gtgState.pushupsSuspended ? 'border-slate-900 bg-slate-950/10 opacity-40' : 'border-slate-800 bg-slate-950/50'} flex items-center justify-between`}>
                <div>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">Set Flexiones</span>
                  <span className="text-sm font-semibold text-slate-200 block mt-0.5">3 Flexiones por serie</span>
                  <span className="text-[10px] text-slate-400 block mt-1">Frecuencia: Máx 5 series dispersas en la jornada</span>
                </div>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase ${gtgState.allForbidden || gtgState.pushupsSuspended ? 'bg-red-950 text-red-400 border border-red-900' : 'bg-emerald-950 text-emerald-400 border border-emerald-900'}`}>
                  {gtgState.allForbidden || gtgState.pushupsSuspended ? 'Suspendido' : 'Habilitado'}
                </span>
              </div>
            </div>

            {/* Biomechanical Warning footer */}
            <div className="text-[10px] text-slate-500 italic flex gap-1.5 leading-snug">
              <Info className="w-3.5 h-3.5 text-slate-600 shrink-0" />
              <span>Grease the Groove: Ejecutar al 40%-60% de tu máximo. Cero fatiga sistémica.</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
