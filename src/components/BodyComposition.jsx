import React, { useState } from 'react';
import { 
  Scale, TrendingDown, TrendingUp, ShieldAlert, 
  Info, Calendar, Award, Sparkles, User, RefreshCw
} from 'lucide-react';
import { personalProfile, anthropometryGoals, anthropometryHistory } from '../data/anthropometryData';

export default function BodyComposition() {
  const [selectedPdf, setSelectedPdf] = useState(null);

  // Obtener los datos del primer mes (Mayo) y del último mes (Junio)
  const baseMeasurement = anthropometryHistory[0];
  const currentMeasurement = anthropometryHistory[anthropometryHistory.length - 1];

  // Cálculo de variaciones generales
  const weightDiff = currentMeasurement.weightKg - baseMeasurement.weightKg;
  const fatKgDiff = currentMeasurement.fatMass.kg - baseMeasurement.fatMass.kg;
  const fatPctDiff = currentMeasurement.fatMass.percentage - baseMeasurement.fatMass.percentage;
  const muscleKgDiff = currentMeasurement.muscleMass.kg - baseMeasurement.muscleMass.kg;
  const musclePctDiff = currentMeasurement.muscleMass.percentage - baseMeasurement.muscleMass.percentage;

  // Progreso hacia la meta de grasa corporal (20%)
  const startFatPct = baseMeasurement.fatMass.percentage;
  const currentFatPct = currentMeasurement.fatMass.percentage;
  const targetFatPct = anthropometryGoals.targetFatPercentage;
  
  const totalFatLossTarget = startFatPct - targetFatPct; // 31.16 - 20.00 = 11.16%
  const currentFatLoss = startFatPct - currentFatPct; // 31.16 - 30.70 = 0.46%
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
            Monitoreo y evolución a partir de las fichas médicas oficiales de la carpeta <span className="text-indigo-300 font-mono">public/antropometria/</span>.
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
            <span className="text-base font-bold text-slate-200 font-outfit">{personalProfile.baseAge} años</span>
            <span className="text-[10px] text-slate-400 block">Fórmula de Mayo/Junio</span>
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
              Has bajado de <strong>{startFatPct}%</strong> a <strong>{currentFatPct}%</strong> de grasa corporal (una reducción neta de <strong>{formatVal(Math.abs(fatPctDiff), 2)}%</strong> o <strong>{formatVal(Math.abs(fatKgDiff), 3)} kg</strong> de masa adiposa en 4 semanas).
            </p>
          </div>
        </div>

        {/* Muscle Protection Warning */}
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
              <span className="text-slate-400">Masa Muscular de Partida (Mayo):</span>
              <span className="font-semibold text-slate-300">{muscleBaseKg} kg</span>
            </div>
            <div className="flex justify-between items-center text-xs">
              <span className="text-slate-400">Masa Muscular Actual (Junio):</span>
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
                  Has bajado <strong>{formatVal(Math.abs(muscleLossFromStart), 3)} kg (151 gramos)</strong> de masa muscular desde el arranque. 
                  Para frenar esta tendencia, asegúrate de mantener el déficit calórico controlado, no saltarte las ingestas de proteína (mínimo {2.2 * 65}g diarios) y entrenar con alta intensidad/cerca del fallo.
                </p>
              </div>
            ) : (
              <div className="bg-emerald-950/30 border border-emerald-900/50 p-3.5 rounded-xl space-y-1.5">
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs">
                  <Award className="w-4.5 h-4.5" />
                  Masa Muscular Protegida
                </div>
                <p className="text-[10px] text-emerald-300/90 leading-relaxed">
                  ¡Excelente! Has mantenido tu masa muscular por encima del umbral de partida de {muscleBaseKg} kg. 
                  Esto significa que el peso perdido proviene principalmente de oxidación de grasa. ¡Sigue así!
                </p>
              </div>
            )}
          </div>
        </div>

      </div>

      {/* 4. Comparative Month-to-Month Table & Custom SVG Chart */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        
        {/* Table - 2 columns width in xl */}
        <div className="xl:col-span-2 glass-panel p-5 rounded-2xl space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2">
            <h3 className="font-bold text-sm text-slate-200 uppercase tracking-wider flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-indigo-500"></span>
              Evolución Comparativa
            </h3>
            <span className="text-xs text-slate-500 font-medium">Mediciones Antropométricas</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-850 text-[10px] text-slate-400 uppercase tracking-wider">
                  <th className="py-3 px-2 font-bold">Componente</th>
                  <th className="py-3 px-2 font-bold text-right">Mayo (28/05)</th>
                  <th className="py-3 px-2 font-bold text-right">Junio (25/06)</th>
                  <th className="py-3 px-2 font-bold text-right">Variación Neta</th>
                  <th className="py-3 px-2 font-bold text-right">Var. %</th>
                </tr>
              </thead>
              <tbody className="text-xs divide-y divide-slate-850/50">
                {/* Peso */}
                <tr className="hover:bg-slate-900/20 transition-colors">
                  <td className="py-3 px-2 font-semibold text-slate-300">Peso Corporal Total</td>
                  <td className="py-3 px-2 text-right text-slate-300">{formatVal(baseMeasurement.weightKg, 2)} kg</td>
                  <td className="py-3 px-2 text-right text-slate-300">{formatVal(currentMeasurement.weightKg, 2)} kg</td>
                  <td className="py-3 px-2 text-right font-semibold text-emerald-400">
                    {weightDiff < 0 ? '' : '+'}{formatVal(weightDiff, 2)} kg
                  </td>
                  <td className="py-3 px-2 text-right text-emerald-400">
                    {((weightDiff / baseMeasurement.weightKg) * 100).toFixed(2)}%
                  </td>
                </tr>

                {/* Masa Adiposa */}
                <tr className="hover:bg-slate-900/20 transition-colors">
                  <td className="py-3 px-2 font-semibold text-slate-300">Masa Adiposa (Grasa)</td>
                  <td className="py-3 px-2 text-right text-slate-300">
                    {formatVal(baseMeasurement.fatMass.kg, 3)} kg <span className="text-[10px] text-slate-400">({baseMeasurement.fatMass.percentage}%)</span>
                  </td>
                  <td className="py-3 px-2 text-right text-slate-300">
                    {formatVal(currentMeasurement.fatMass.kg, 3)} kg <span className="text-[10px] text-slate-400">({currentMeasurement.fatMass.percentage}%)</span>
                  </td>
                  <td className="py-3 px-2 text-right font-semibold text-emerald-400">
                    {fatKgDiff < 0 ? '' : '+'}{formatVal(fatKgDiff, 3)} kg
                  </td>
                  <td className="py-3 px-2 text-right text-emerald-400">
                    {fatPctDiff < 0 ? '' : '+'}{formatVal(fatPctDiff, 2)}% grasa
                  </td>
                </tr>

                {/* Masa Muscular */}
                <tr className="hover:bg-slate-900/20 transition-colors">
                  <td className="py-3 px-2 font-semibold text-slate-300">Masa Muscular</td>
                  <td className="py-3 px-2 text-right text-slate-300">
                    {formatVal(baseMeasurement.muscleMass.kg, 3)} kg <span className="text-[10px] text-slate-400">({baseMeasurement.muscleMass.percentage}%)</span>
                  </td>
                  <td className="py-3 px-2 text-right text-slate-300">
                    {formatVal(currentMeasurement.muscleMass.kg, 3)} kg <span className="text-[10px] text-slate-400">({currentMeasurement.muscleMass.percentage}%)</span>
                  </td>
                  <td className={`py-3 px-2 text-right font-semibold ${isMuscleInDanger ? 'text-amber-400' : 'text-emerald-400'}`}>
                    {muscleKgDiff < 0 ? '' : '+'}{formatVal(muscleKgDiff, 3)} kg
                  </td>
                  <td className={`py-3 px-2 text-right ${isMuscleInDanger ? 'text-amber-400' : 'text-emerald-400'}`}>
                    {musclePctDiff < 0 ? '' : '+'}{formatVal(musclePctDiff, 2)}% rel.
                  </td>
                </tr>

                {/* Masa Ósea */}
                <tr className="hover:bg-slate-900/20 transition-colors text-slate-400">
                  <td className="py-3 px-2">Masa Ósea</td>
                  <td className="py-3 px-2 text-right">{formatVal(baseMeasurement.boneMass.kg, 3)} kg ({baseMeasurement.boneMass.percentage}%)</td>
                  <td className="py-3 px-2 text-right">{formatVal(currentMeasurement.boneMass.kg, 3)} kg ({currentMeasurement.boneMass.percentage}%)</td>
                  <td className="py-3 px-2 text-right">0.000 kg</td>
                  <td className="py-3 px-2 text-right">+0.14% rel.</td>
                </tr>

                {/* Masa Residual */}
                <tr className="hover:bg-slate-900/20 transition-colors text-slate-400">
                  <td className="py-3 px-2">Masa Residual (Órganos/Vísceras)</td>
                  <td className="py-3 px-2 text-right">{formatVal(baseMeasurement.residualMass.kg, 3)} kg ({baseMeasurement.residualMass.percentage}%)</td>
                  <td className="py-3 px-2 text-right">{formatVal(currentMeasurement.residualMass.kg, 3)} kg ({currentMeasurement.residualMass.percentage}%)</td>
                  <td className="py-3 px-2 text-right">{(currentMeasurement.residualMass.kg - baseMeasurement.residualMass.kg).toFixed(3)} kg</td>
                  <td className="py-3 px-2 text-right">-0.10% rel.</td>
                </tr>

                {/* Masa Cutánea */}
                <tr className="hover:bg-slate-900/20 transition-colors text-slate-400">
                  <td className="py-3 px-2">Masa de la Piel (Cutánea)</td>
                  <td className="py-3 px-2 text-right">{formatVal(baseMeasurement.skinMass.kg, 3)} kg ({baseMeasurement.skinMass.percentage}%)</td>
                  <td className="py-3 px-2 text-right">{formatVal(currentMeasurement.skinMass.kg, 3)} kg ({currentMeasurement.skinMass.percentage}%)</td>
                  <td className="py-3 px-2 text-right">{(currentMeasurement.skinMass.kg - baseMeasurement.skinMass.kg).toFixed(3)} kg</td>
                  <td className="py-3 px-2 text-right">+0.04% rel.</td>
                </tr>
              </tbody>
            </table>
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
            <svg viewBox="0 0 300 200" className="w-full max-w-[260px] overflow-visible">
              {/* Grid Lines */}
              <line x1="40" y1="30" x2="280" y2="30" stroke="#1e293b" strokeDasharray="3" />
              <line x1="40" y1="85" x2="280" y2="85" stroke="#1e293b" strokeDasharray="3" />
              <line x1="40" y1="140" x2="280" y2="140" stroke="#1e293b" strokeDasharray="3" />
              <line x1="40" y1="170" x2="280" y2="170" stroke="#334155" />

              {/* Y Axis Labels (Weights in kg) */}
              <text x="32" y="34" fill="#64748b" fontSize="9" textAnchor="end">30 kg</text>
              <text x="32" y="89" fill="#64748b" fontSize="9" textAnchor="end">20 kg</text>
              <text x="32" y="144" fill="#64748b" fontSize="9" textAnchor="end">10 kg</text>
              <text x="32" y="174" fill="#64748b" fontSize="9" textAnchor="end">0 kg</text>

              {/* Mayo Bars (x=80) */}
              {/* Muscle (29.93 kg) -> height = 29.925 * 4.66 = 140px. y = 170 - 140 = 30 */}
              <rect x="70" y="30.3" width="18" height="139.7" fill="#6366f1" rx="2" opacity="0.85" />
              {/* Fat (20.78 kg) -> height = 20.784 * 4.66 = 97px. y = 170 - 97 = 73 */}
              <rect x="92" y="73.1" width="18" height="96.9" fill="#d946ef" rx="2" opacity="0.85" />

              {/* Junio Bars (x=200) */}
              {/* Muscle (29.77 kg) -> height = 29.774 * 4.66 = 139px. y = 170 - 139 = 31 */}
              <rect x="180" y="31.0" width="18" height="139.0" fill="#6366f1" rx="2" />
              {/* Fat (20.20 kg) -> height = 20.203 * 4.66 = 94.2px. y = 170 - 94.2 = 75.8 */}
              <rect x="202" y="75.8" width="18" height="94.2" fill="#d946ef" rx="2" />

              {/* Bar Labels (Mass value text) */}
              <text x="79" y="24" fill="#818cf8" fontSize="8" fontWeight="bold" textAnchor="middle">29.9</text>
              <text x="101" y="67" fill="#f472b6" fontSize="8" fontWeight="bold" textAnchor="middle">20.8</text>
              <text x="189" y="25" fill="#a5b4fc" fontSize="8" fontWeight="bold" textAnchor="middle">29.8</text>
              <text x="211" y="70" fill="#f472b6" fontSize="8" fontWeight="bold" textAnchor="middle">20.2</text>

              {/* X Axis Labels */}
              <text x="90" y="186" fill="#94a3b8" fontSize="10" fontWeight="bold" textAnchor="middle">Mayo (Inicial)</text>
              <text x="200" y="186" fill="#94a3b8" fontSize="10" fontWeight="bold" textAnchor="middle">Junio (Act.)</text>
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
          <a 
            href="/hybrid-training/antropometria/Antropometria 28-5-26.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 px-3.5 py-1.5 rounded-xl text-xs text-slate-300 hover:text-white transition-all"
          >
            <span>📄 Medición 1 (28/05/2026)</span>
          </a>
          <a 
            href="/hybrid-training/antropometria/Antropometria 25-6-26.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 px-3.5 py-1.5 rounded-xl text-xs text-slate-300 hover:text-white transition-all"
          >
            <span>📄 Medición 2 (25/06/2026)</span>
          </a>
        </div>
      </div>

    </div>
  );
}
