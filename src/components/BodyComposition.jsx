import React, { useState } from 'react';
import { 
  Scale, TrendingDown, TrendingUp, ShieldAlert, 
  Info, Calendar, Award, Sparkles, User, RefreshCw,
  ChevronDown, ChevronUp
} from 'lucide-react';
import { personalProfile, anthropometryGoals, anthropometryHistory } from '../data/anthropometryData';

export default function BodyComposition() {
  const [selectedPdf, setSelectedPdf] = useState(null);
  const [expandedCardIndex, setExpandedCardIndex] = useState(anthropometryHistory.length - 1);

  // Obtener los datos del primer mes (Mayo) y del último mes (Julio)
  const baseMeasurement = anthropometryHistory[0];
  const currentMeasurement = anthropometryHistory[anthropometryHistory.length - 1];
  const previousMeasurement = anthropometryHistory[anthropometryHistory.length - 2];

  // Cálculo de variaciones generales (Inicio vs Actual)
  const weightDiff = currentMeasurement.weightKg - baseMeasurement.weightKg;
  const fatKgDiff = currentMeasurement.fatMass.kg - baseMeasurement.fatMass.kg;
  const fatPctDiff = currentMeasurement.fatMass.percentage - baseMeasurement.fatMass.percentage;
  const muscleKgDiff = currentMeasurement.muscleMass.kg - baseMeasurement.muscleMass.kg;
  const musclePctDiff = currentMeasurement.muscleMass.percentage - baseMeasurement.muscleMass.percentage;

  // Variaciones mes a mes (Último mes vs Mes Anterior: Julio vs Junio)
  const lastMonthMuscleKgDiff = currentMeasurement.muscleMass.kg - previousMeasurement.muscleMass.kg;
  const lastMonthFatKgDiff = currentMeasurement.fatMass.kg - previousMeasurement.fatMass.kg;

  // Progreso hacia la meta de grasa corporal (20%)
  const startFatPct = baseMeasurement.fatMass.percentage;
  const currentFatPct = currentMeasurement.fatMass.percentage;
  const targetFatPct = anthropometryGoals.targetFatPercentage;
  
  const totalFatLossTarget = startFatPct - targetFatPct; // 31.16 - 20.00 = 11.16%
  const currentFatLoss = startFatPct - currentFatPct; // 31.16 - 30.15 = 1.01%
  const fatProgressPct = Math.min(100, Math.max(0, (currentFatLoss / totalFatLossTarget) * 100));

  // Regla de seguridad de masa muscular (No bajar de la masa muscular inicial)
  const muscleBaseKg = anthropometryGoals.startingMuscleMassKg;
  const currentMuscleKg = currentMeasurement.muscleMass.kg;
  const muscleLossFromStart = muscleBaseKg - currentMuscleKg; // Si es positivo, se perdió músculo.
  const isMuscleInDanger = currentMuscleKg < muscleBaseKg;

  // Formateador de números
  const formatVal = (val, decimals = 2) => val.toFixed(decimals);

  return (
    <div className="space-y-6">
      
      {/* 1. Header & Quick Summary */}
      <div className="glass-panel p-6 rounded-2xl glow-indigo flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <div className="flex items-center gap-1.5 text-indigo-400 font-bold text-xs uppercase tracking-widest">
            <Scale className="w-4.5 h-4.5" />
            Análisis de Composición Corporal
          </div>
          <h2 className="text-2xl font-bold font-outfit text-white mt-1">
            Visualización Antropométrica (Kerr 5 Componentes)
          </h2>
          <p className="text-xs text-slate-400 mt-0.5">
            Monitoreo y evolución histórica basada en los informes antropométricos oficiales.
          </p>
        </div>
        
        {/* Quick overall numbers badge */}
        <div className="flex items-center gap-3">
          <div className="bg-slate-900 border border-slate-800/80 px-4 py-2.5 rounded-xl text-center">
            <span className="text-[10px] text-slate-400 block uppercase font-bold tracking-wider">Peso Actual</span>
            <span className="text-lg font-bold text-white font-outfit">{formatVal(currentMeasurement.weightKg, 1)} kg</span>
          </div>
          <div className="bg-slate-900 border border-slate-800/80 px-4 py-2.5 rounded-xl text-center">
            <span className="text-[10px] text-slate-400 block uppercase font-bold tracking-wider">Grasa Corporal</span>
            <span className="text-lg font-bold text-fuchsia-400 font-outfit">{formatVal(currentMeasurement.fatMass.percentage, 2)}%</span>
          </div>
          <div className="bg-slate-900 border border-slate-800/80 px-4 py-2.5 rounded-xl text-center">
            <span className="text-[10px] text-slate-400 block uppercase font-bold tracking-wider">Masa Muscular</span>
            <span className="text-lg font-bold text-emerald-400 font-outfit">{formatVal(currentMeasurement.muscleMass.kg, 2)} kg</span>
          </div>
        </div>
      </div>

      {/* 2. Fichas de Información Estable */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Edad Card */}
        <div className="glass-card p-4 rounded-xl border border-slate-800/60 flex items-center gap-4 hover:border-slate-700/55 transition-colors">
          <div className="p-3 bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 rounded-xl">
            <User className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[10px] text-slate-500 block uppercase font-bold tracking-wider">Edad</span>
            <span className="text-base font-bold text-slate-200 font-outfit">{currentMeasurement.age} años</span>
            <span className="text-[10px] text-slate-400 block">Medición 3 (Julio 2026)</span>
          </div>
        </div>

        {/* Altura Card */}
        <div className="glass-card p-4 rounded-xl border border-slate-800/60 flex items-center gap-4 hover:border-slate-700/55 transition-colors">
          <div className="p-3 bg-blue-500/10 border border-blue-500/20 text-blue-400 rounded-xl">
            <TrendingUp className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[10px] text-slate-500 block uppercase font-bold tracking-wider">Altura</span>
            <span className="text-base font-bold text-slate-200 font-outfit">{personalProfile.heightCm} cm</span>
            <span className="text-[10px] text-slate-400 block">Talla de pie estable</span>
          </div>
        </div>

        {/* Somatotipo Card */}
        <div className="glass-card p-4 rounded-xl border border-slate-800/60 flex items-center gap-4 hover:border-slate-700/55 transition-colors">
          <div className="p-3 bg-amber-500/10 border border-amber-500/20 text-amber-400 rounded-xl">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[10px] text-slate-500 block uppercase font-bold tracking-wider">Somatotipo</span>
            <span className="text-base font-bold text-slate-200 font-outfit">{personalProfile.somaticTypeName}</span>
            <span className="text-[9px] text-slate-400 block">
              Endo: {personalProfile.somaticType.endo} | Meso: {personalProfile.somaticType.meso} | Ecto: {personalProfile.somaticType.ecto}
            </span>
          </div>
        </div>

        {/* Metabolismo Basal Card */}
        <div className="glass-card p-4 rounded-xl border border-slate-800/60 flex items-center gap-4 hover:border-slate-700/55 transition-colors">
          <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-xl">
            <Award className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[10px] text-slate-500 block uppercase font-bold tracking-wider">Gasto Metabólico Basal</span>
            <span className="text-base font-bold text-slate-200 font-outfit">~{personalProfile.bmrKcal} kcal/día</span>
            <span className="text-[10px] text-slate-400 block">Ecuación Harris-Benedict</span>
          </div>
        </div>
      </div>

      {/* 3. Progress Tracking & Muscle Mass Safety Warning */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Fat Loss Target (20% Body Fat Goal) */}
        <div className="glass-panel p-5 rounded-2xl space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-sm text-slate-200 uppercase tracking-wider flex items-center gap-1.5">
              <TrendingDown className="w-4.5 h-4.5 text-fuchsia-400" />
              Meta de Grasa Corporal
            </h3>
            <span className="text-xs bg-fuchsia-950/40 text-fuchsia-300 border border-fuchsia-900/50 px-2 py-0.5 rounded-full font-bold">
              Objetivo: {targetFatPct}%
            </span>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-xs text-slate-400">
              <span>Inicio: {startFatPct}%</span>
              <span className="text-white font-semibold">Actual: {currentFatPct}%</span>
              <span>Meta: {targetFatPct}%</span>
            </div>

            {/* Visual Gauge/Track bar */}
            <div className="relative h-4 bg-slate-950 rounded-full border border-slate-850 overflow-hidden">
              {/* Progress fill */}
              <div 
                className="absolute top-0 bottom-0 left-0 bg-gradient-to-r from-indigo-500 to-fuchsia-500 rounded-full transition-all duration-500"
                style={{ width: `${fatProgressPct}%` }}
              ></div>
              {/* Indicator dot */}
              <div 
                className="absolute top-0 bottom-0 w-2.5 h-2.5 bg-white border border-slate-900 rounded-full shadow transition-all duration-500"
                style={{ left: `calc(${100 - ((currentFatPct - targetFatPct) / (startFatPct - targetFatPct)) * 100}% - 5px)` }}
              ></div>
            </div>

            <div className="flex justify-between items-center text-[10px] text-slate-500 mt-1">
              <span>Completado: {formatVal(fatProgressPct, 1)}% del objetivo</span>
              <span>Falta oxidar: {formatVal(currentFatPct - targetFatPct, 2)}%</span>
            </div>
          </div>

          <div className="bg-slate-950/40 border border-slate-900 p-3 rounded-xl text-[10px] text-slate-400 leading-normal flex items-start gap-2">
            <Info className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
            <p>
              Has bajado de <strong>{startFatPct}%</strong> a <strong>{currentFatPct}%</strong> de grasa corporal (una reducción neta acumulada de <strong>{formatVal(Math.abs(fatPctDiff), 2)}%</strong> o <strong>{formatVal(Math.abs(fatKgDiff), 3)} kg</strong> de masa adiposa en 3 mediciones).
            </p>
          </div>
        </div>

        {/* Muscle Protection Warning / Progress */}
        <div className="glass-panel p-5 rounded-2xl space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-sm text-slate-200 uppercase tracking-wider flex items-center gap-1.5">
              <ShieldAlert className="w-4.5 h-4.5 text-emerald-400" />
              Protección de Masa Muscular
            </h3>
            <span className="text-xs bg-emerald-950/40 text-emerald-300 border border-emerald-900/50 px-2 py-0.5 rounded-full font-bold">
              Base: {muscleBaseKg} kg
            </span>
          </div>

          <div className="space-y-3">
            <div className="flex justify-between items-center text-xs">
              <span className="text-slate-400">Masa Muscular Inicial (Mayo):</span>
              <span className="font-semibold text-slate-300">{muscleBaseKg} kg</span>
            </div>
            <div className="flex justify-between items-center text-xs">
              <span className="text-slate-400">Masa Muscular Actual (Julio):</span>
              <span className={`font-semibold ${isMuscleInDanger ? 'text-amber-400' : 'text-emerald-400'}`}>
                {currentMuscleKg} kg
              </span>
            </div>

            {/* Alert Indicator */}
            {isMuscleInDanger ? (
              <div className="bg-amber-950/30 border border-amber-900/50 p-3.5 rounded-xl space-y-1.5">
                <div className="flex items-center gap-2 text-amber-400 font-bold text-xs">
                  <ShieldAlert className="w-4.5 h-4.5" />
                  ALERTA: Desviación detectada (-{formatVal(Math.abs(muscleLossFromStart) * 1000, 0)}g)
                </div>
                <p className="text-[10px] text-amber-300/90 leading-relaxed">
                  Has bajado <strong>{formatVal(Math.abs(muscleLossFromStart), 3)} kg</strong> de masa muscular desde el arranque. 
                </p>
              </div>
            ) : (
              <div className="bg-emerald-950/30 border border-emerald-900/50 p-3.5 rounded-xl space-y-1.5">
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs">
                  <Award className="w-4.5 h-4.5" />
                  Masa Muscular Protegida y En Aumento
                </div>
                <p className="text-[10px] text-emerald-300/90 leading-relaxed">
                  ¡Excelente progreso! Has incrementado tu masa muscular a <strong>{currentMuscleKg} kg</strong> (<strong>+{formatVal((currentMuscleKg - muscleBaseKg) * 1000, 0)}g</strong> desde Mayo y <strong>+{formatVal(lastMonthMuscleKgDiff * 1000, 0)}g</strong> respecto a Junio). 
                  La revalorización de masa magra demuestra un estímulo de entrenamiento de hipertrofia súper efectivo.
                </p>
              </div>
            )}
          </div>
        </div>

      </div>

      {/* 4. Comparative Month-to-Month Table & Custom SVG Chart */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        
        {/* Table / Accordion - 2 columns width in xl */}
        <div className="xl:col-span-2 glass-panel p-5 rounded-2xl space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2">
            <div>
              <h3 className="font-bold text-sm text-slate-200 uppercase tracking-wider flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-indigo-500"></span>
                Evolución Comparativa Histórica
              </h3>
              <p className="text-[10px] text-slate-500 mt-0.5">Historial por fechas de medición</p>
            </div>
            <span className="text-[10px] bg-slate-900 text-slate-400 border border-slate-800 px-2 py-1 rounded-lg">
              {anthropometryHistory.length} Mediciones
            </span>
          </div>

          {/* Desktop Table View */}
          <div className="hidden md:block overflow-x-auto -mx-5 px-5 custom-scrollbar">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="border-b border-slate-800 text-[10px] text-slate-400 uppercase tracking-wider">
                  <th className="py-3 px-3 font-bold sticky left-0 bg-slate-900/95 backdrop-blur z-10 border-r border-slate-800/60 shadow-sm">
                    Medición / Fecha
                  </th>
                  <th className="py-3 px-3 font-bold text-right text-slate-200">Peso Total</th>
                  <th className="py-3 px-3 font-bold text-right text-fuchsia-400">Masa Adiposa (Grasa)</th>
                  <th className="py-3 px-3 font-bold text-right text-emerald-400">Masa Muscular</th>
                  <th className="py-3 px-3 font-bold text-right text-slate-400">Masa Ósea</th>
                  <th className="py-3 px-3 font-bold text-right text-slate-400">Masa Residual</th>
                  <th className="py-3 px-3 font-bold text-right text-slate-400">Masa Cutánea</th>
                </tr>
              </thead>
              <tbody className="text-xs divide-y divide-slate-850/50">
                {anthropometryHistory.map((m, idx) => {
                  const isLatest = idx === anthropometryHistory.length - 1;
                  return (
                    <tr 
                      key={idx} 
                      className={`transition-colors ${
                        isLatest ? 'bg-indigo-950/20 hover:bg-indigo-950/30' : 'hover:bg-slate-900/40'
                      }`}
                    >
                      <td className="py-3 px-3 font-semibold text-slate-200 sticky left-0 bg-slate-900/95 backdrop-blur z-10 border-r border-slate-800/60">
                        <div className="flex items-center gap-2">
                          <span className={`w-2 h-2 rounded-full ${isLatest ? 'bg-emerald-400 animate-pulse' : 'bg-slate-600'}`}></span>
                          <span>{m.displayDate}</span>
                          {isLatest && (
                            <span className="text-[9px] bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 px-1.5 py-0.5 rounded font-normal">
                              Actual
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="py-3 px-3 text-right font-medium text-slate-200">
                        {formatVal(m.weightKg, 2)} kg
                      </td>
                      <td className="py-3 px-3 text-right text-slate-300">
                        <div className="font-semibold text-fuchsia-300">{formatVal(m.fatMass.kg, 3)} kg</div>
                        <div className="text-[10px] text-slate-400">{m.fatMass.percentage.toFixed(2)}%</div>
                      </td>
                      <td className="py-3 px-3 text-right text-slate-300">
                        <div className="font-semibold text-emerald-300">{formatVal(m.muscleMass.kg, 3)} kg</div>
                        <div className="text-[10px] text-slate-400">{m.muscleMass.percentage.toFixed(2)}%</div>
                      </td>
                      <td className="py-3 px-3 text-right text-slate-400">
                        <div>{formatVal(m.boneMass.kg, 3)} kg</div>
                        <div className="text-[10px] text-slate-500">{m.boneMass.percentage.toFixed(2)}%</div>
                      </td>
                      <td className="py-3 px-3 text-right text-slate-400">
                        <div>{formatVal(m.residualMass.kg, 3)} kg</div>
                        <div className="text-[10px] text-slate-500">{m.residualMass.percentage.toFixed(2)}%</div>
                      </td>
                      <td className="py-3 px-3 text-right text-slate-400">
                        <div>{formatVal(m.skinMass.kg, 3)} kg</div>
                        <div className="text-[10px] text-slate-500">{m.skinMass.percentage.toFixed(2)}%</div>
                      </td>
                    </tr>
                  );
                })}

                {/* Summary Row - Net Variation */}
                <tr className="bg-slate-950/80 font-bold border-t-2 border-slate-800">
                  <td className="py-3.5 px-3 text-indigo-300 uppercase text-[10px] tracking-wider sticky left-0 bg-slate-950 z-10 border-r border-slate-800/60">
                    Var. Neta Acumulada
                  </td>
                  <td className="py-3.5 px-3 text-right text-emerald-400 font-semibold">
                    {weightDiff < 0 ? '' : '+'}{formatVal(weightDiff, 2)} kg
                  </td>
                  <td className="py-3.5 px-3 text-right text-emerald-400 font-semibold">
                    <div>{fatKgDiff < 0 ? '' : '+'}{formatVal(fatKgDiff, 3)} kg</div>
                    <div className="text-[10px] text-emerald-400/80">{fatPctDiff < 0 ? '' : '+'}{formatVal(fatPctDiff, 2)}% grasa</div>
                  </td>
                  <td className="py-3.5 px-3 text-right text-emerald-400 font-semibold">
                    <div>{muscleKgDiff < 0 ? '' : '+'}{formatVal(muscleKgDiff, 3)} kg</div>
                    <div className="text-[10px] text-emerald-400/80">{musclePctDiff < 0 ? '' : '+'}{formatVal(musclePctDiff, 2)}% rel.</div>
                  </td>
                  <td className="py-3.5 px-3 text-right text-slate-400 font-normal">
                    <div>{(currentMeasurement.boneMass.kg - baseMeasurement.boneMass.kg).toFixed(3)} kg</div>
                    <div className="text-[10px] text-slate-500">{(currentMeasurement.boneMass.percentage - baseMeasurement.boneMass.percentage).toFixed(2)}% rel.</div>
                  </td>
                  <td className="py-3.5 px-3 text-right text-slate-400 font-normal">
                    <div>{(currentMeasurement.residualMass.kg - baseMeasurement.residualMass.kg).toFixed(3)} kg</div>
                    <div className="text-[10px] text-slate-500">{(currentMeasurement.residualMass.percentage - baseMeasurement.residualMass.percentage).toFixed(2)}% rel.</div>
                  </td>
                  <td className="py-3.5 px-3 text-right text-slate-400 font-normal">
                    <div>{(currentMeasurement.skinMass.kg - baseMeasurement.skinMass.kg).toFixed(3)} kg</div>
                    <div className="text-[10px] text-slate-500">{(currentMeasurement.skinMass.percentage - baseMeasurement.skinMass.percentage).toFixed(2)}% rel.</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Mobile Accordion View */}
          <div className="block md:hidden space-y-3 pt-1">
            {anthropometryHistory.map((m, idx) => {
              const isLatest = idx === anthropometryHistory.length - 1;
              const isExpanded = expandedCardIndex === idx;

              return (
                <div 
                  key={idx} 
                  className={`rounded-xl border transition-all overflow-hidden ${
                    isLatest ? 'bg-indigo-950/20 border-indigo-500/40' : 'bg-slate-900/60 border-slate-800'
                  }`}
                >
                  {/* Accordion Header */}
                  <button 
                    onClick={() => setExpandedCardIndex(isExpanded ? null : idx)}
                    className="w-full p-3.5 flex items-center justify-between gap-3 text-left hover:bg-slate-850/50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-7 h-7 rounded-full flex items-center justify-center border transition-colors ${
                        isExpanded 
                          ? 'bg-indigo-500 text-white border-indigo-400' 
                          : 'bg-slate-800 text-slate-300 border-slate-700'
                      }`}>
                        {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-xs text-white font-outfit">{m.displayDate}</span>
                          {isLatest && (
                            <span className="text-[9px] bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 px-1.5 py-0.5 rounded font-medium">
                              Actual
                            </span>
                          )}
                        </div>
                        <span className="text-[10px] text-slate-400">Medición N° {m.measurementNumber}</span>
                      </div>
                    </div>

                    <div className="text-right">
                      <span className="font-bold text-xs text-slate-100 block">{formatVal(m.weightKg, 1)} kg</span>
                      <span className="text-[10px] text-fuchsia-400 block font-medium">{m.fatMass.percentage.toFixed(1)}% grasa</span>
                    </div>
                  </button>

                  {/* Accordion Body */}
                  {isExpanded && (
                    <div className="px-4 pb-4 pt-2 border-t border-slate-800/60 bg-slate-950/40 space-y-2.5 text-xs">
                      <div className="flex justify-between items-center py-1.5 border-b border-slate-850">
                        <span className="text-slate-400 font-medium">Peso Total</span>
                        <span className="font-bold text-slate-100">{formatVal(m.weightKg, 2)} kg</span>
                      </div>
                      <div className="flex justify-between items-center py-1.5 border-b border-slate-850">
                        <span className="text-slate-400 font-medium">Masa Adiposa (Grasa)</span>
                        <div className="text-right">
                          <span className="font-bold text-fuchsia-300">{formatVal(m.fatMass.kg, 3)} kg</span>
                          <span className="text-[10px] text-slate-400 ml-1.5">({m.fatMass.percentage.toFixed(2)}%)</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center py-1.5 border-b border-slate-850">
                        <span className="text-slate-400 font-medium">Masa Muscular</span>
                        <div className="text-right">
                          <span className="font-bold text-emerald-300">{formatVal(m.muscleMass.kg, 3)} kg</span>
                          <span className="text-[10px] text-slate-400 ml-1.5">({m.muscleMass.percentage.toFixed(2)}%)</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center py-1.5 border-b border-slate-850">
                        <span className="text-slate-400 font-medium">Masa Ósea</span>
                        <div className="text-right">
                          <span className="font-medium text-slate-300">{formatVal(m.boneMass.kg, 3)} kg</span>
                          <span className="text-[10px] text-slate-500 ml-1.5">({m.boneMass.percentage.toFixed(2)}%)</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center py-1.5 border-b border-slate-850">
                        <span className="text-slate-400 font-medium">Masa Residual</span>
                        <div className="text-right">
                          <span className="font-medium text-slate-300">{formatVal(m.residualMass.kg, 3)} kg</span>
                          <span className="text-[10px] text-slate-500 ml-1.5">({m.residualMass.percentage.toFixed(2)}%)</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center py-1.5">
                        <span className="text-slate-400 font-medium">Masa Cutánea</span>
                        <div className="text-right">
                          <span className="font-medium text-slate-300">{formatVal(m.skinMass.kg, 3)} kg</span>
                          <span className="text-[10px] text-slate-500 ml-1.5">({m.skinMass.percentage.toFixed(2)}%)</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}

            {/* Summary Card for Var. Neta Acumulada */}
            <div className="rounded-xl border border-indigo-900/50 bg-slate-950/80 overflow-hidden">
              <button 
                onClick={() => setExpandedCardIndex(expandedCardIndex === 'summary' ? null : 'summary')}
                className="w-full p-3.5 flex items-center justify-between gap-3 text-left hover:bg-slate-900/50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center">
                    {expandedCardIndex === 'summary' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                  <div>
                    <span className="font-bold text-xs text-indigo-300 uppercase tracking-wider block">Var. Neta Acumulada</span>
                    <span className="text-[10px] text-slate-400">Total desde el inicio</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="font-bold text-xs text-emerald-400 block">
                    {weightDiff < 0 ? '' : '+'}{formatVal(weightDiff, 2)} kg
                  </span>
                  <span className="text-[10px] text-emerald-400/80 block font-medium">
                    {fatPctDiff < 0 ? '' : '+'}{formatVal(fatPctDiff, 2)}% grasa
                  </span>
                </div>
              </button>

              {expandedCardIndex === 'summary' && (
                <div className="px-4 pb-4 pt-2 border-t border-slate-800/60 bg-slate-950/90 space-y-2.5 text-xs">
                  <div className="flex justify-between items-center py-1.5 border-b border-slate-850">
                    <span className="text-slate-400 font-medium">Peso Total</span>
                    <span className="font-bold text-emerald-400">{weightDiff < 0 ? '' : '+'}{formatVal(weightDiff, 2)} kg</span>
                  </div>
                  <div className="flex justify-between items-center py-1.5 border-b border-slate-850">
                    <span className="text-slate-400 font-medium">Masa Adiposa (Grasa)</span>
                    <div className="text-right font-bold text-emerald-400">
                      <div>{fatKgDiff < 0 ? '' : '+'}{formatVal(fatKgDiff, 3)} kg</div>
                      <div className="text-[10px] text-emerald-400/80">{fatPctDiff < 0 ? '' : '+'}{formatVal(fatPctDiff, 2)}% grasa</div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center py-1.5 border-b border-slate-850">
                    <span className="text-slate-400 font-medium">Masa Muscular</span>
                    <div className="text-right font-bold text-emerald-400">
                      <div>{muscleKgDiff < 0 ? '' : '+'}{formatVal(muscleKgDiff, 3)} kg</div>
                      <div className="text-[10px] text-emerald-400/80">{musclePctDiff < 0 ? '' : '+'}{formatVal(musclePctDiff, 2)}% rel.</div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center py-1.5 border-b border-slate-850">
                    <span className="text-slate-400 font-medium">Masa Ósea</span>
                    <div className="text-right text-slate-400">
                      <div>{(currentMeasurement.boneMass.kg - baseMeasurement.boneMass.kg).toFixed(3)} kg</div>
                      <div className="text-[10px] text-slate-500">{(currentMeasurement.boneMass.percentage - baseMeasurement.boneMass.percentage).toFixed(2)}% rel.</div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center py-1.5 border-b border-slate-850">
                    <span className="text-slate-400 font-medium">Masa Residual</span>
                    <div className="text-right text-slate-400">
                      <div>{(currentMeasurement.residualMass.kg - baseMeasurement.residualMass.kg).toFixed(3)} kg</div>
                      <div className="text-[10px] text-slate-500">{(currentMeasurement.residualMass.percentage - baseMeasurement.residualMass.percentage).toFixed(2)}% rel.</div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center py-1.5">
                    <span className="text-slate-400 font-medium">Masa Cutánea</span>
                    <div className="text-right text-slate-400">
                      <div>{(currentMeasurement.skinMass.kg - baseMeasurement.skinMass.kg).toFixed(3)} kg</div>
                      <div className="text-[10px] text-slate-500">{(currentMeasurement.skinMass.percentage - baseMeasurement.skinMass.percentage).toFixed(2)}% rel.</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Visual custom SVG chart - 1 column width in xl */}
        <div className="glass-panel p-5 rounded-2xl flex flex-col justify-between">
          <div className="space-y-1">
            <h3 className="font-bold text-sm text-slate-200 uppercase tracking-wider flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-fuchsia-500"></span>
              Grasa vs Músculo (kg)
            </h3>
            <p className="text-[10px] text-slate-500">Evolución de componentes clave en pesos absolutos</p>
          </div>

          {/* Simple custom React SVG Chart */}
          <div className="my-4 flex justify-center items-center">
            <svg viewBox="0 0 340 200" className="w-full max-w-[320px] overflow-visible">
              {/* Grid Lines */}
              <line x1="40" y1="30" x2="320" y2="30" stroke="#1e293b" strokeDasharray="3" />
              <line x1="40" y1="85" x2="320" y2="85" stroke="#1e293b" strokeDasharray="3" />
              <line x1="40" y1="140" x2="320" y2="140" stroke="#1e293b" strokeDasharray="3" />
              <line x1="40" y1="170" x2="320" y2="170" stroke="#334155" />

              {/* Y Axis Labels (Weights in kg) */}
              <text x="32" y="34" fill="#64748b" fontSize="9" textAnchor="end">30 kg</text>
              <text x="32" y="89" fill="#64748b" fontSize="9" textAnchor="end">20 kg</text>
              <text x="32" y="144" fill="#64748b" fontSize="9" textAnchor="end">10 kg</text>
              <text x="32" y="174" fill="#64748b" fontSize="9" textAnchor="end">0 kg</text>

              {/* Mayo Bars (x=70, 88) */}
              {/* Muscle (29.93 kg) -> height = 29.925 * 4.66 = 139.5px. y = 170 - 139.5 = 30.5 */}
              <rect x="62" y="30.5" width="15" height="139.5" fill="#6366f1" rx="2" opacity="0.75" />
              {/* Fat (20.78 kg) -> height = 20.784 * 4.66 = 96.9px. y = 170 - 96.9 = 73.1 */}
              <rect x="80" y="73.1" width="15" height="96.9" fill="#d946ef" rx="2" opacity="0.75" />

              {/* Junio Bars (x=142, 160) */}
              {/* Muscle (29.77 kg) -> height = 29.774 * 4.66 = 138.7px. y = 170 - 138.7 = 31.3 */}
              <rect x="142" y="31.3" width="15" height="138.7" fill="#6366f1" rx="2" opacity="0.85" />
              {/* Fat (20.20 kg) -> height = 20.203 * 4.66 = 94.1px. y = 170 - 94.1 = 75.9 */}
              <rect x="160" y="75.9" width="15" height="94.1" fill="#d946ef" rx="2" opacity="0.85" />

              {/* Julio Bars (x=222, 240) */}
              {/* Muscle (30.45 kg) -> height = 30.453 * 4.66 = 141.9px. y = 170 - 141.9 = 28.1 */}
              <rect x="222" y="28.1" width="15" height="141.9" fill="#6366f1" rx="2" />
              {/* Fat (20.04 kg) -> height = 20.037 * 4.66 = 93.4px. y = 170 - 93.4 = 76.6 */}
              <rect x="240" y="76.6" width="15" height="93.4" fill="#d946ef" rx="2" />

              {/* Bar Labels (Mass value text) */}
              <text x="70" y="24" fill="#818cf8" fontSize="8" fontWeight="bold" textAnchor="middle">29.9</text>
              <text x="88" y="67" fill="#f472b6" fontSize="8" fontWeight="bold" textAnchor="middle">20.8</text>

              <text x="150" y="25" fill="#a5b4fc" fontSize="8" fontWeight="bold" textAnchor="middle">29.8</text>
              <text x="168" y="70" fill="#f472b6" fontSize="8" fontWeight="bold" textAnchor="middle">20.2</text>

              <text x="230" y="22" fill="#38bdf8" fontSize="8" fontWeight="bold" textAnchor="middle">30.5</text>
              <text x="248" y="71" fill="#f472b6" fontSize="8" fontWeight="bold" textAnchor="middle">20.0</text>

              {/* X Axis Labels */}
              <text x="79" y="186" fill="#94a3b8" fontSize="9" fontWeight="bold" textAnchor="middle">Mayo</text>
              <text x="159" y="186" fill="#94a3b8" fontSize="9" fontWeight="bold" textAnchor="middle">Junio</text>
              <text x="239" y="186" fill="#38bdf8" fontSize="9" fontWeight="bold" textAnchor="middle">Julio (Act.)</text>
            </svg>
          </div>

          {/* Legend */}
          <div className="flex justify-center items-center gap-4 text-[10px] text-slate-400 border-t border-slate-900 pt-3">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 bg-indigo-500 rounded"></span>
              <span>Masa Muscular</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 bg-fuchsia-500 rounded"></span>
              <span>Masa Adiposa (Grasa)</span>
            </div>
          </div>
        </div>

      </div>

      {/* 5. PDF References / Source check */}
      <div className="glass-panel p-5 rounded-2xl border border-slate-800/80 bg-slate-950/30 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="space-y-0.5 text-center md:text-left">
          <h4 className="text-xs font-bold text-white flex items-center justify-center md:justify-start gap-1.5">
            <Calendar className="w-4 h-4 text-indigo-400" />
            Fuentes de Medición Disponibles
          </h4>
          <p className="text-[10px] text-slate-500">
            Fichas antropométricas en formato PDF proporcionadas por la nutricionista deportiva Lic. Maggi Carolina.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {anthropometryHistory.map((m, idx) => (
            <a 
              key={idx}
              href={`/hybrid-training/antropometria/Antropometria ${m.date.split('-')[2].replace(/^0/, '')}-${m.date.split('-')[1].replace(/^0/, '')}-${m.date.split('-')[0].slice(2)}.pdf`}
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 px-3 py-1.5 rounded-xl text-xs text-slate-300 hover:text-white transition-all"
            >
              <span>📄 Medición {m.measurementNumber} ({m.displayDate})</span>
            </a>
          ))}
        </div>
      </div>

    </div>
  );
}

