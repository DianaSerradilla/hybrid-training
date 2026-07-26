import React, { useState } from 'react';
import {
  Zap, ShieldAlert, CheckCircle2, AlertCircle, Info,
  Flame, Clock, Calendar, CheckSquare, Dumbbell, Activity, Sparkles
} from 'lucide-react';
import { gtgSchedule, gtgRules, macrocycleWeeks } from '../data/macrocycleData';

export default function GtgModule({ currentWeek = 1, currentDay = 'Lunes' }) {
  const [selectedDay, setSelectedDay] = useState(currentDay);

  // Track completed Pomodoro pauses per day
  const [completedPauses, setCompletedPauses] = useState({});

  const daysOfWeek = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];

  const weekObj = macrocycleWeeks.find(w => w.number === currentWeek) || macrocycleWeeks[0];
  const isDeloadWeek = weekObj?.isDeload ?? false;
  const daySchedule = gtgSchedule[selectedDay] || gtgSchedule['Lunes'];

  const togglePause = (pauseIndex) => {
    const key = `${selectedDay}-pause${pauseIndex}`;
    setCompletedPauses(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const getCompletedCountForDay = () => {
    let count = 0;
    for (let i = 1; i <= 8; i++) {
      if (completedPauses[`${selectedDay}-pause${i}`]) {
        count++;
      }
    }
    return count;
  };

  return (
    <div className="space-y-6">

      {/* Header Banner */}
      <div className="glass-panel p-6 rounded-2xl glow-indigo border border-slate-800">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2 text-indigo-400 font-bold text-xs uppercase tracking-widest">
              <Zap className="w-4 h-4 fill-indigo-400" />
              Micro-Dosis Neuromusculares (Pomodoro)
            </div>
            <h2 className="text-2xl font-bold font-outfit text-white">
              Método Grease the Groove (GTG)
            </h2>
            <p className="text-xs text-slate-400 max-w-2xl leading-relaxed">
              Frecuencia alta, cero fatiga. Ejecución repetida al 40%-60% de tu máximo durante tus pausas laborales Pomodoro para mielinizar los axones motores sin sobrecargar el SNC.
            </p>
          </div>


        </div>

        {/* Day Selector Only */}
        <div className="mt-6 pt-5 border-t border-slate-850 flex items-center gap-3">
          <label htmlFor="gtg-day-select" className="text-xs font-bold text-slate-400 uppercase tracking-wider shrink-0">
            Día de la semana:
          </label>
          <select
            id="gtg-day-select"
            value={selectedDay}
            onChange={(e) => setSelectedDay(e.target.value)}
            className="bg-slate-900 border border-slate-700 text-white text-xs rounded-xl py-2 px-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 font-semibold cursor-pointer transition-all w-full sm:w-72"
          >
            {daysOfWeek.map((d) => (
              <option key={d} value={d}>
                {d} ({gtgSchedule[d]?.gymFocus || ''})
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Deload Warning / Restriction Alert */}
      {isDeloadWeek ? (
        <div className="glass-panel p-5 rounded-2xl border border-red-900/60 bg-red-950/20 text-red-200 flex items-start gap-4">
          <ShieldAlert className="w-6 h-6 text-red-400 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <h3 className="font-bold text-sm text-red-300">
              SEMANA DE DESCARGA (W{currentWeek}): GTG ESTRICTAMENTE PROHIBIDO
            </h3>
            <p className="text-xs text-red-300/80 leading-relaxed">
              Durante los 7 días de tu semana de descarga, las flexiones y dominadas durante tu jornada laboral de Pomodoro quedan strictly prohibidas. Tu sistema nervioso central (SNC) necesita apagarse de esa frecuencia diaria para consolidar las adaptaciones neurales (mielinización) logradas en las semanas previas.
            </p>
          </div>
        </div>
      ) : (
        <div className="glass-panel p-4 rounded-xl border border-slate-850 bg-slate-950/60 flex items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-slate-300">
            <Info className="w-4 h-4 text-indigo-400 shrink-0" />
            <span><strong>Foco del día en gimnasio:</strong> {daySchedule.gymFocus}</span>
          </div>
          <span className="text-[11px] text-amber-400 bg-amber-950/40 border border-amber-900/50 px-2.5 py-1 rounded-md font-semibold">
            {daySchedule.restriction}
          </span>
        </div>
      )}

      {/* 8 Pomodoro Pauses Daily Plan */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Column 1 & 2: Movements breakdown & Pomodoro Tracker */}
        <div className="lg:col-span-2 space-y-6">

          {/* Movements Schedule */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            {/* Movimiento A */}
            <div className="glass-card p-5 rounded-2xl border border-slate-800 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest bg-indigo-950/50 px-2.5 py-0.5 rounded-full border border-indigo-900/60">
                  Movimiento A (4 Pausas)
                </span>
                <span className="text-xs font-semibold text-slate-400">Prioridad Handstand</span>
              </div>
              <h4 className="text-lg font-bold text-white font-outfit">{daySchedule.movA.name}</h4>
              <p className="text-xs text-slate-400 leading-relaxed">{daySchedule.movA.desc}</p>
            </div>

            {/* Movimiento B */}
            <div className="glass-card p-5 rounded-2xl border border-slate-800 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest bg-emerald-950/50 px-2.5 py-0.5 rounded-full border border-emerald-900/60">
                  Movimiento B (4 Pausas)
                </span>
                <span className="text-xs font-semibold text-slate-400">Ejercicio Rotativo</span>
              </div>
              <h4 className="text-lg font-bold text-white font-outfit">{daySchedule.movB.name}</h4>
              <p className="text-xs text-slate-400 leading-relaxed">{daySchedule.movB.desc}</p>
            </div>

          </div>

          {/* 8 Pomodoro Checkboxes Tracker */}
          <div className="glass-panel p-5 rounded-2xl border border-slate-800 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-850 pb-3">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <CheckSquare className="w-4 h-4 text-indigo-400" />
                Seguimiento de las 8 Pausas Pomodoro ({selectedDay})
              </h3>
              <span className="text-xs text-slate-400">Haz clic para marcar cada pausa realizada</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[1, 2, 3, 4, 5, 6, 7, 8].map(pauseIndex => {
                const key = `${selectedDay}-pause${pauseIndex}`;
                const isChecked = !!completedPauses[key];
                const isMovA = pauseIndex <= 4;
                const movName = isMovA ? daySchedule.movA.name : daySchedule.movB.name;

                return (
                  <button
                    key={pauseIndex}
                    disabled={isDeloadWeek}
                    onClick={() => togglePause(pauseIndex)}
                    className={`p-3.5 rounded-xl border text-left transition-all flex flex-col justify-between gap-2 ${isDeloadWeek
                        ? 'opacity-40 cursor-not-allowed border-slate-900 bg-slate-950'
                        : isChecked
                          ? 'border-emerald-500/50 bg-emerald-950/30 text-white shadow-inner'
                          : 'border-slate-800 bg-slate-950 hover:border-slate-700 text-slate-300'
                      }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold text-slate-400 uppercase">Pausa {pauseIndex}</span>
                      <CheckCircle2 className={`w-4 h-4 ${isChecked ? 'text-emerald-400 fill-emerald-400/20' : 'text-slate-700'}`} />
                    </div>
                    <div>
                      <span className={`text-xs font-bold block ${isMovA ? 'text-indigo-300' : 'text-emerald-300'}`}>
                        {movName}
                      </span>
                      <span className="text-[9px] text-slate-500 block">
                        {isMovA ? 'Ranita / Pino' : 'Pausa de Fuerza'}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Micro-Dosis Protocol (10-minute block structure) */}
          <div className="glass-panel p-5 rounded-2xl border border-slate-800 space-y-4">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <Clock className="w-4 h-4 text-indigo-400" />
              Estructura de la Pausa (Bloque de 10 Minutos)
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-850 space-y-1">
                <div className="flex items-center justify-between text-indigo-400 font-bold">
                  <span>Fase 1: Calentamiento Articular Exprés</span>
                  <span>2-3 min</span>
                </div>
                <p className="text-slate-400 text-[11px]">
                  <strong>El Peaje Obligatorio:</strong> Rotaciones de muñecas (ambos lados), apoyos con dedos hacia atrás y costados en el piso. Preparar tendones es prioridad #1.
                </p>
              </div>

              <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-850 space-y-1">
                <div className="flex items-center justify-between text-emerald-400 font-bold">
                  <span>Fase 2: Activación Rápida del Core</span>
                  <span>1 min</span>
                </div>
                <p className="text-slate-400 text-[11px]">
                  1 o 2 series de 10-15s de plancha o hollow body en el piso para despertar el abdomen y recordar la alineación previa a invertir la postura.
                </p>
              </div>

              <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-850 space-y-1">
                <div className="flex items-center justify-between text-amber-400 font-bold">
                  <span>Fase 3: Práctica Submáxima ("Tiempo de Vuelo")</span>
                  <span>5-6 min</span>
                </div>
                <p className="text-slate-400 text-[11px]">
                  <strong>Regla de Oro:</strong> Cortar el intento ANTES de cansarte. Si tu máx en ranita son 15s, sostén solo 5-7s. Realiza 4-6 intentos de máxima calidad.
                </p>
              </div>

              <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-850 space-y-1">
                <div className="flex items-center justify-between text-fuchsia-400 font-bold">
                  <span>Fase 4: Descompresión</span>
                  <span>1 min</span>
                </div>
                <p className="text-slate-400 text-[11px]">
                  Estiramiento pasivo de flexores de antebrazo (dedos hacia atrás suavemente) para dejar muñecas listas para el siguiente bloque o el gym.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Column 3: Rules of Engagement Panel */}
        <div className="space-y-6">

          <div className="glass-panel p-5 rounded-2xl glow-indigo border border-slate-800 space-y-4">
            <h3 className="font-bold text-sm text-slate-200 uppercase tracking-wider flex items-center gap-1.5">
              <ShieldAlert className="w-4 h-4 text-indigo-400" />
              Reglas Inflexibles de GTG
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              {gtgRules.definition}
            </p>

            <div className="space-y-3">
              {gtgRules.rules.map((rule, idx) => (
                <div key={idx} className="p-3 bg-slate-950 rounded-xl border border-slate-850 text-xs space-y-1">
                  <strong className="text-indigo-300 font-semibold block">{rule.title}</strong>
                  <p className="text-slate-400 text-[11px] leading-relaxed">{rule.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Quick GTG Summary Table */}
          <div className="glass-panel p-5 rounded-2xl border border-slate-800 space-y-3 text-xs">
            <h4 className="font-bold text-white uppercase tracking-wider text-xs flex items-center gap-1.5">
              <Activity className="w-4 h-4 text-emerald-400" />
              Resumen del Calendario Semanal
            </h4>
            <div className="space-y-2 font-mono text-[11px]">
              <div className="flex justify-between p-2 bg-slate-950 rounded border border-slate-850">
                <span className="text-slate-300">Lunes</span>
                <span className="text-slate-400">Handstand + Flexiones</span>
              </div>
              <div className="flex justify-between p-2 bg-slate-950 rounded border border-slate-850">
                <span className="text-slate-300">Martes</span>
                <span className="text-slate-400">Handstand + Dominadas</span>
              </div>
              <div className="flex justify-between p-2 bg-slate-950 rounded border border-slate-850">
                <span className="text-emerald-400">Miércoles</span>
                <span className="text-emerald-400 font-bold">Descanso Total GTG</span>
              </div>
              <div className="flex justify-between p-2 bg-slate-950 rounded border border-slate-850">
                <span className="text-slate-300">Jueves</span>
                <span className="text-slate-400">Handstand + Compresiones</span>
              </div>
              <div className="flex justify-between p-2 bg-slate-950 rounded border border-slate-850">
                <span className="text-emerald-400">Viernes</span>
                <span className="text-emerald-400 font-bold">Descanso Total GTG</span>
              </div>
              <div className="flex justify-between p-2 bg-slate-950 rounded border border-slate-850">
                <span className="text-slate-300">Sábado</span>
                <span className="text-slate-400">Handstand + Compresiones</span>
              </div>
              <div className="flex justify-between p-2 bg-slate-950 rounded border border-slate-850">
                <span className="text-slate-300">Domingo</span>
                <span className="text-slate-400">Handstand + Compresiones</span>
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
