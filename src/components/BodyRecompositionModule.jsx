import React, { useState } from 'react';
import { 
  TrendingDown, TrendingUp, Target, Award, Activity, Scale,
  ChevronRight, Calendar, User, FileText, CheckCircle2, Sparkles,
  Zap, Info, Flame, HeartPulse, PieChart, Layers
} from 'lucide-react';
import bodyData from '../data/bodyRecompositionData.json';

export default function BodyRecompositionModule() {
  const { profile, evaluations } = bodyData;
  const [selectedEvalIndex, setSelectedEvalIndex] = useState(evaluations.length - 1); // Default to latest (Medición 3)
  const [activeTab, setActiveTab] = useState('masses'); // 'masses', 'skinfolds', 'perimeters', 'indices'

  // Latest and initial evaluation
  const latestEval = evaluations[evaluations.length - 1];
  const baselineEval = evaluations[0];
  const selectedEval = evaluations[selectedEvalIndex];

  // Derived progress calculations
  const fatDiffPct = (latestEval.masses.adiposa.pct - baselineEval.masses.adiposa.pct).toFixed(2);
  const muscleDiffKg = (latestEval.masses.muscular.kg - baselineEval.masses.muscular.kg).toFixed(3);
  const sum6DiffMm = (latestEval.skinfolds.sum6 - baselineEval.skinfolds.sum6).toFixed(1);

  // Goal progress calculation
  // Total fat % reduction needed: baseline (31.16%) -> target (20.0%) = 11.16%
  const totalDropNeeded = baselineEval.masses.adiposa.pct - profile.targetBodyFatPct;
  const currentDropAchieved = baselineEval.masses.adiposa.pct - latestEval.masses.adiposa.pct;
  const progressPct = Math.min(100, Math.max(0, (currentDropAchieved / totalDropNeeded) * 100)).toFixed(1);

  return (
    <div className="space-y-6 max-w-7xl mx-auto w-full">

      {/* 1. Header Banner & Goal Progress Bar */}
      <div className="glass-panel p-6 rounded-2xl glow-indigo border border-indigo-500/30 space-y-5">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-indigo-400 font-bold text-xs uppercase tracking-widest">
              <Award className="w-4 h-4" />
              Devolución de Nutrición & Antropometría ISAK
            </div>
            <h2 className="text-2xl font-bold font-outfit text-white flex items-center gap-2">
              Recomposición Corporal
              <span className="text-xs bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 px-2.5 py-0.5 rounded-full font-sans font-medium">
                {evaluations.length} Mediciones Registradas
              </span>
            </h2>
            <p className="text-xs text-slate-300">
              Evaluación antropométrica realizada por <strong className="text-white">{profile.nutritionist}</strong>. Objetivo principal: <strong className="text-emerald-400">Llegar al 20% de Grasa Corporal</strong> preservando masa magra.
            </p>
          </div>

          <div className="flex items-center gap-3 bg-slate-900/90 border border-slate-800 p-3 rounded-xl shrink-0">
            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center">
              <Target className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider block">Meta Principal</span>
              <span className="text-lg font-bold text-emerald-400 font-outfit">20.0% Grasa</span>
              <span className="text-[10px] text-slate-400 block">Actual: {latestEval.masses.adiposa.pct}%</span>
            </div>
          </div>
        </div>

        {/* Progress Bar Container */}
        <div className="bg-slate-950/80 p-4 rounded-xl border border-slate-800/80 space-y-2">
          <div className="flex justify-between items-center text-xs">
            <span className="text-slate-400 font-semibold flex items-center gap-1.5">
              <Activity className="w-3.5 h-3.5 text-indigo-400" />
              Progreso de Reducción Adiposa
            </span>
            <span className="text-emerald-400 font-bold font-outfit">
              {progressPct}% Completado ({fatDiffPct}% de grasa)
            </span>
          </div>

          <div className="relative w-full h-3.5 bg-slate-900 rounded-full overflow-hidden border border-slate-800">
            <div 
              className="h-full bg-gradient-to-r from-indigo-500 via-emerald-400 to-emerald-500 rounded-full transition-all duration-1000 shadow-[0_0_12px_rgba(16,185,129,0.4)]"
              style={{ width: `${Math.max(4, progressPct)}%` }}
            />
          </div>

          <div className="flex justify-between text-[11px] text-slate-400 font-mono pt-1">
            <span>Línea Base: <strong>{baselineEval.masses.adiposa.pct}%</strong> (28/05)</span>
            <span className="text-indigo-300 font-bold">Actual: {latestEval.masses.adiposa.pct}% (21/07)</span>
            <span className="text-emerald-400 font-bold">Objetivo: 20.0%</span>
          </div>
        </div>
      </div>

      {/* 2. Top KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        {/* KPI 1: Masa Adiposa % */}
        <div className="glass-panel p-4 rounded-xl border border-slate-800 relative overflow-hidden group hover:border-indigo-500/50 transition-all">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider font-outfit">Masa Adiposa</span>
            <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400">
              <PieChart className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-2xl font-bold font-outfit text-white">{latestEval.masses.adiposa.pct}%</span>
            <span className="text-xs text-slate-400 font-mono">({latestEval.masses.adiposa.kg} kg)</span>
          </div>
          <div className="mt-2 flex items-center gap-1.5 text-xs text-emerald-400 font-semibold">
            <TrendingDown className="w-3.5 h-3.5" />
            <span>{fatDiffPct}% acumulado</span>
            <span className="text-[10px] text-slate-500 ml-auto">Medición 3 vs 1</span>
          </div>
        </div>

        {/* KPI 2: Masa Muscular Magra */}
        <div className="glass-panel p-4 rounded-xl border border-slate-800 relative overflow-hidden group hover:border-emerald-500/50 transition-all">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider font-outfit">Masa Muscular</span>
            <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
              <Zap className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-2xl font-bold font-outfit text-white">{latestEval.masses.muscular.kg} kg</span>
            <span className="text-xs text-slate-400 font-mono">({latestEval.masses.muscular.pct}%)</span>
          </div>
          <div className="mt-2 flex items-center gap-1.5 text-xs text-emerald-400 font-semibold">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>+{muscleDiffKg} kg magros</span>
            <span className="text-[10px] text-emerald-400/80 bg-emerald-950/60 px-1.5 py-0.5 rounded ml-auto">¡Ganancia pura!</span>
          </div>
        </div>

        {/* KPI 3: Suma de 6 Pliegues */}
        <div className="glass-panel p-4 rounded-xl border border-slate-800 relative overflow-hidden group hover:border-amber-500/50 transition-all">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider font-outfit">Suma 6 Pliegues</span>
            <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400">
              <Flame className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-2xl font-bold font-outfit text-white">{latestEval.skinfolds.sum6} mm</span>
            <span className="text-xs text-slate-400 font-mono">(ISAK 6)</span>
          </div>
          <div className="mt-2 flex items-center gap-1.5 text-xs text-emerald-400 font-semibold">
            <TrendingDown className="w-3.5 h-3.5" />
            <span>{sum6DiffMm} mm reducidos</span>
            <span className="text-[10px] text-slate-500 ml-auto">De 108.5 mm</span>
          </div>
        </div>

        {/* KPI 4: Índice Adiposo / Muscular */}
        <div className="glass-panel p-4 rounded-xl border border-slate-800 relative overflow-hidden group hover:border-blue-500/50 transition-all">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider font-outfit">Índice Adiposo/Músculo</span>
            <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
              <Scale className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-2xl font-bold font-outfit text-white">{latestEval.indices.fatToMuscleRatio}</span>
            <span className="text-xs text-slate-400 font-mono">(Kerr 1988)</span>
          </div>
          <div className="mt-2 flex items-center gap-1.5 text-xs text-emerald-400 font-semibold">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Mejora eficiente</span>
            <span className="text-[10px] text-slate-500 ml-auto">De 0.695 a 0.658</span>
          </div>
        </div>

      </div>

      {/* 3. Evolución Histórica Comparativa entre Mediciones */}
      <div className="glass-panel p-6 rounded-2xl space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
          <div>
            <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest block">Comparativa Evolutiva</span>
            <h3 className="text-lg font-bold font-outfit text-white">Evolución de las 3 Mediciones Antropométricas</h3>
          </div>

          <div className="flex flex-wrap gap-1.5 bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs">
            <button
              onClick={() => setActiveTab('masses')}
              className={`px-3 py-1.5 rounded-lg font-outfit transition-all ${activeTab === 'masses' ? 'bg-indigo-600 text-white font-semibold shadow-inner' : 'text-slate-400 hover:text-white'}`}
            >
              5 Componentes (kg)
            </button>
            <button
              onClick={() => setActiveTab('skinfolds')}
              className={`px-3 py-1.5 rounded-lg font-outfit transition-all ${activeTab === 'skinfolds' ? 'bg-indigo-600 text-white font-semibold shadow-inner' : 'text-slate-400 hover:text-white'}`}
            >
              Pliegues (mm)
            </button>
            <button
              onClick={() => setActiveTab('perimeters')}
              className={`px-3 py-1.5 rounded-lg font-outfit transition-all ${activeTab === 'perimeters' ? 'bg-indigo-600 text-white font-semibold shadow-inner' : 'text-slate-400 hover:text-white'}`}
            >
              Perímetros (cm)
            </button>
            <button
              onClick={() => setActiveTab('indices')}
              className={`px-3 py-1.5 rounded-lg font-outfit transition-all ${activeTab === 'indices' ? 'bg-indigo-600 text-white font-semibold shadow-inner' : 'text-slate-400 hover:text-white'}`}
            >
              Somatotipo e Índices
            </button>
          </div>
        </div>

        {/* Tab 1: 5 Componentes Corporal */}
        {activeTab === 'masses' && (
          <div className="space-y-4">
            <p className="text-xs text-slate-400">
              Fraccionamiento anatómico en 5 masas según el modelo de <strong>D. Kerr (1988)</strong>. Destaca la recomposición con incremento muscular (+0.528 kg total) y descenso de masa grasa (-0.747 kg total).
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {evaluations.map((ev) => (
                <div 
                  key={ev.measurementNumber}
                  className={`p-4 rounded-xl border transition-all ${ev.measurementNumber === latestEval.measurementNumber ? 'bg-indigo-950/20 border-indigo-500/40 glow-indigo' : 'bg-slate-900/60 border-slate-800'}`}
                >
                  <div className="flex justify-between items-center border-b border-slate-800 pb-2.5 mb-3">
                    <div>
                      <span className="text-xs font-bold text-indigo-400 block font-outfit">Medición N° {ev.measurementNumber}</span>
                      <span className="text-[11px] text-slate-400">{ev.dateDisplay} ({ev.basic.weightKg} kg)</span>
                    </div>
                    {ev.measurementNumber === latestEval.measurementNumber && (
                      <span className="text-[10px] bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 px-2 py-0.5 rounded-full font-bold">
                        Última
                      </span>
                    )}
                  </div>

                  <div className="space-y-2.5 text-xs">
                    <div>
                      <div className="flex justify-between text-slate-300 mb-1">
                        <span>Masa Adiposa:</span>
                        <strong className="text-amber-300">{ev.masses.adiposa.kg} kg ({ev.masses.adiposa.pct}%)</strong>
                      </div>
                      <div className="w-full h-2 bg-slate-950 rounded-full overflow-hidden border border-slate-800">
                        <div className="h-full bg-amber-400 rounded-full" style={{ width: `${ev.masses.adiposa.pct}%` }} />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-slate-300 mb-1">
                        <span>Masa Muscular:</span>
                        <strong className="text-emerald-400">{ev.masses.muscular.kg} kg ({ev.masses.muscular.pct}%)</strong>
                      </div>
                      <div className="w-full h-2 bg-slate-950 rounded-full overflow-hidden border border-slate-800">
                        <div className="h-full bg-emerald-400 rounded-full" style={{ width: `${ev.masses.muscular.pct}%` }} />
                      </div>
                    </div>

                    <div className="pt-2 border-t border-slate-800/80 grid grid-cols-3 text-[11px] text-slate-400">
                      <div>Ósea: <strong className="text-slate-200">{ev.masses.osea.kg} kg</strong></div>
                      <div>Residual: <strong className="text-slate-200">{ev.masses.residual.kg} kg</strong></div>
                      <div>Piel: <strong className="text-slate-200">{ev.masses.piel.kg} kg</strong></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 2: Pliegues Cutáneos */}
        {activeTab === 'skinfolds' && (
          <div className="space-y-4">
            <p className="text-xs text-slate-400">
              Seguimiento de espesor de pliegues cutáneos (mm). Todos los pliegues muestran una tendencia decreciente o de estabilización en zonas clave.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-800 text-slate-400 bg-slate-950/60 font-outfit">
                    <th className="p-3">Pliegue (mm)</th>
                    <th className="p-3">Medición 1 (28/05)</th>
                    <th className="p-3">Medición 2 (25/06)</th>
                    <th className="p-3 text-emerald-400">Medición 3 (21/07)</th>
                    <th className="p-3 text-right">Variación Total</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60 text-slate-300">
                  <tr>
                    <td className="p-3 font-semibold text-white">Tríceps</td>
                    <td className="p-3 font-mono">{baselineEval.skinfolds.triceps} mm</td>
                    <td className="p-3 font-mono">{evaluations[1].skinfolds.triceps} mm</td>
                    <td className="p-3 font-mono font-bold text-emerald-400">{latestEval.skinfolds.triceps} mm</td>
                    <td className="p-3 text-right font-mono text-emerald-400 font-bold">-1.5 mm</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-white">Subescapular</td>
                    <td className="p-3 font-mono">{baselineEval.skinfolds.subescapular} mm</td>
                    <td className="p-3 font-mono">{evaluations[1].skinfolds.subescapular} mm</td>
                    <td className="p-3 font-mono font-bold text-emerald-400">{latestEval.skinfolds.subescapular} mm</td>
                    <td className="p-3 text-right font-mono text-emerald-400 font-bold">-2.0 mm</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-white">Supraespinal</td>
                    <td className="p-3 font-mono">{baselineEval.skinfolds.supraespinal} mm</td>
                    <td className="p-3 font-mono">{evaluations[1].skinfolds.supraespinal} mm</td>
                    <td className="p-3 font-mono font-bold text-emerald-400">{latestEval.skinfolds.supraespinal} mm</td>
                    <td className="p-3 text-right font-mono text-emerald-400 font-bold">-0.5 mm</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-white">Abdominal</td>
                    <td className="p-3 font-mono">{baselineEval.skinfolds.abdominal} mm</td>
                    <td className="p-3 font-mono">{evaluations[1].skinfolds.abdominal} mm</td>
                    <td className="p-3 font-mono font-bold text-amber-400">{latestEval.skinfolds.abdominal} mm</td>
                    <td className="p-3 text-right font-mono text-slate-400">0.0 mm</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-white">Muslo (Medial)</td>
                    <td className="p-3 font-mono">{baselineEval.skinfolds.musloMedial} mm</td>
                    <td className="p-3 font-mono">{evaluations[1].skinfolds.musloMedial} mm</td>
                    <td className="p-3 font-mono font-bold text-emerald-400">{latestEval.skinfolds.musloMedial} mm</td>
                    <td className="p-3 text-right font-mono text-emerald-400 font-bold">-2.0 mm</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-white">Pantorrilla</td>
                    <td className="p-3 font-mono">{baselineEval.skinfolds.pantorrilla} mm</td>
                    <td className="p-3 font-mono">{evaluations[1].skinfolds.pantorrilla} mm</td>
                    <td className="p-3 font-mono font-bold text-emerald-400">{latestEval.skinfolds.pantorrilla} mm</td>
                    <td className="p-3 text-right font-mono text-emerald-400 font-bold">-0.5 mm</td>
                  </tr>
                  <tr className="bg-indigo-950/30 font-bold">
                    <td className="p-3 text-indigo-300">SUMA DE 6 PLIEGUES</td>
                    <td className="p-3 font-mono text-slate-300">{baselineEval.skinfolds.sum6} mm</td>
                    <td className="p-3 font-mono text-slate-300">{evaluations[1].skinfolds.sum6} mm</td>
                    <td className="p-3 font-mono text-emerald-400">{latestEval.skinfolds.sum6} mm</td>
                    <td className="p-3 text-right font-mono text-emerald-400">-6.5 mm</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Tab 3: Perímetros Corporales */}
        {activeTab === 'perimeters' && (
          <div className="space-y-4">
            <p className="text-xs text-slate-400">
              Evolución de perímetros en cm. Se destaca la afinación de la cintura mínima (-1.1 cm) y la meso-esternal (-2.0 cm), junto con la hipertrofia muscular en extremidades.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 text-xs">
              <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1">
                <span className="text-slate-400 font-semibold block">Cintura (mínima)</span>
                <div className="flex items-baseline justify-between">
                  <span className="text-xl font-bold font-outfit text-emerald-400">{latestEval.perimeters.cinturaMinima} cm</span>
                  <span className="text-emerald-400 font-mono font-bold">-1.1 cm</span>
                </div>
                <span className="text-[10px] text-slate-500 block">Med 1: 73.9 cm → Med 3: 72.8 cm</span>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1">
                <span className="text-slate-400 font-semibold block">Tórax Mesoesternal</span>
                <div className="flex items-baseline justify-between">
                  <span className="text-xl font-bold font-outfit text-emerald-400">{latestEval.perimeters.toraxMesoesternal} cm</span>
                  <span className="text-emerald-400 font-mono font-bold">-2.0 cm</span>
                </div>
                <span className="text-[10px] text-slate-500 block">Med 1: 94.4 cm → Med 3: 92.4 cm</span>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1">
                <span className="text-slate-400 font-semibold block">Brazo Flexionado (Tensión)</span>
                <div className="flex items-baseline justify-between">
                  <span className="text-xl font-bold font-outfit text-indigo-400">{latestEval.perimeters.brazoFlexionado} cm</span>
                  <span className="text-indigo-400 font-mono font-bold">Excelente tono</span>
                </div>
                <span className="text-[10px] text-slate-500 block">Med 1: 33.6 cm → Med 3: 33.4 cm</span>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1">
                <span className="text-slate-400 font-semibold block">Caderas (máxima)</span>
                <div className="flex items-baseline justify-between">
                  <span className="text-xl font-bold font-outfit text-white">{latestEval.perimeters.caderasMaxima} cm</span>
                  <span className="text-slate-400 font-mono">+1.0 cm</span>
                </div>
                <span className="text-[10px] text-slate-500 block">Med 1: 103.0 cm → Med 3: 104.0 cm</span>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1">
                <span className="text-slate-400 font-semibold block">Muslo Medial</span>
                <div className="flex items-baseline justify-between">
                  <span className="text-xl font-bold font-outfit text-white">{latestEval.perimeters.musloMedial} cm</span>
                  <span className="text-emerald-400 font-mono font-bold">Estable</span>
                </div>
                <span className="text-[10px] text-slate-500 block">Med 1: 55.1 cm → Med 3: 55.1 cm</span>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1">
                <span className="text-slate-400 font-semibold block">Pantorrilla (máxima)</span>
                <div className="flex items-baseline justify-between">
                  <span className="text-xl font-bold font-outfit text-indigo-400">{latestEval.perimeters.pantorrillaMaxima} cm</span>
                  <span className="text-indigo-400 font-mono font-bold">+0.6 cm</span>
                </div>
                <span className="text-[10px] text-slate-500 block">Med 1: 38.9 cm → Med 3: 39.5 cm</span>
              </div>
            </div>
          </div>
        )}

        {/* Tab 4: Somatotipo e Índices */}
        {activeTab === 'indices' && (
          <div className="space-y-4">
            <p className="text-xs text-slate-400">
              Evaluación del somatotipo de <strong>Heath & Carter (1990)</strong> y los coeficientes anatómicos de la antropometrista Lic. Maggi Carolina.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              
              {/* Somatotipo Card */}
              <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-3">
                <div className="flex justify-between items-center border-b border-slate-800 pb-2">
                  <h4 className="text-xs font-bold text-white font-outfit uppercase tracking-wider">Somatotipo Actual (Heath-Carter)</h4>
                  <span className="text-[10px] text-indigo-400 font-mono font-bold">Mesomórfico Dominante</span>
                </div>
                
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800">
                    <span className="text-[10px] text-slate-400 block uppercase">Endomorfia</span>
                    <strong className="text-lg font-outfit text-amber-400">{latestEval.somatotype.endo}</strong>
                    <span className="text-[9px] text-slate-500 block">Grasa / Adiposidad</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800">
                    <span className="text-[10px] text-slate-400 block uppercase">Mesomorfia</span>
                    <strong className="text-lg font-outfit text-emerald-400">{latestEval.somatotype.meso}</strong>
                    <span className="text-[9px] text-slate-500 block">Robustez Muscular</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800">
                    <span className="text-[10px] text-slate-400 block uppercase">Ectomorfia</span>
                    <strong className="text-lg font-outfit text-indigo-400">{latestEval.somatotype.ecto}</strong>
                    <span className="text-[9px] text-slate-500 block">Linearidad / Altura</span>
                  </div>
                </div>

                <p className="text-[11px] text-slate-400 leading-relaxed pt-1">
                  Coordenadas en Somatocarta: X = <strong>{latestEval.somatotype.x}</strong>, Y = <strong>{latestEval.somatotype.y}</strong>. Muestra excelente desarrollo muscular con baja fragilidad ósea.
                </p>
              </div>

              {/* Coeficientes e Índices */}
              <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-3">
                <div className="flex justify-between items-center border-b border-slate-800 pb-2">
                  <h4 className="text-xs font-bold text-white font-outfit uppercase tracking-wider">Índices Anatómicos & Salud</h4>
                  <span className="text-[10px] text-emerald-400 font-mono font-bold">Riesgo Bajo</span>
                </div>

                <div className="space-y-2 text-xs">
                  <div className="flex justify-between p-2 rounded-lg bg-slate-950">
                    <span className="text-slate-400">Índice Cintura / Cadera:</span>
                    <strong className="text-emerald-400 font-mono">{latestEval.indices.waistToHipRatio} (Bajo Riesgo Intra-abdominal)</strong>
                  </div>
                  <div className="flex justify-between p-2 rounded-lg bg-slate-950">
                    <span className="text-slate-400">Índice Músculo / Óseo:</span>
                    <strong className="text-white font-mono">{latestEval.indices.muscleToBoneRatio} kg músculo/kg hueso</strong>
                  </div>
                  <div className="flex justify-between p-2 rounded-lg bg-slate-950">
                    <span className="text-slate-400">Metabolismo Basal (Harris-Benedict):</span>
                    <strong className="text-indigo-400 font-mono">{latestEval.indices.basalMetabolismKcal} kcal/día</strong>
                  </div>
                  <div className="flex justify-between p-2 rounded-lg bg-slate-950">
                    <span className="text-slate-400">IMC (Índice Masa Corporal):</span>
                    <strong className="text-slate-300 font-mono">{latestEval.indices.bmi} kg/m²</strong>
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}
      </div>

      {/* 4. Visor Detallado por Medición (Informe Nutricionista) */}
      <div className="glass-panel p-6 rounded-2xl space-y-5 border border-slate-800">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-indigo-400" />
            <div>
              <h3 className="text-lg font-bold font-outfit text-white">Devolución de la Nutricionista por Medición</h3>
              <p className="text-xs text-slate-400">Selecciona el número de informe para revisar la ficha completa y observaciones de Lic. Maggi Carolina.</p>
            </div>
          </div>

          <div className="flex items-center gap-2 bg-slate-950 p-1 rounded-xl border border-slate-800 shrink-0">
            {evaluations.map((ev, idx) => (
              <button
                key={ev.measurementNumber}
                onClick={() => setSelectedEvalIndex(idx)}
                className={`px-3 py-1.5 rounded-lg text-xs font-outfit transition-all ${selectedEvalIndex === idx ? 'bg-indigo-600 text-white font-bold shadow-inner' : 'text-slate-400 hover:text-white'}`}
              >
                Informe N° {ev.measurementNumber} ({ev.dateDisplay})
              </button>
            ))}
          </div>
        </div>

        {/* Card of Selected Evaluation Notes */}
        <div className="p-4 rounded-xl bg-indigo-950/20 border border-indigo-500/30 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="text-[10px] text-indigo-400 font-bold uppercase tracking-wider block font-outfit">
              Conclusión Técnica - Medición N° {selectedEval.measurementNumber} ({selectedEval.dateDisplay})
            </span>
            <p className="text-xs text-slate-200 leading-relaxed font-sans">
              "{selectedEval.notes}"
            </p>
          </div>
          <div className="shrink-0 flex items-center gap-3 bg-slate-900/90 border border-slate-800 p-3 rounded-xl">
            <div className="text-right">
              <span className="text-[10px] text-slate-400 block uppercase">Peso Medido</span>
              <span className="text-base font-bold text-white font-outfit">{selectedEval.basic.weightKg} kg</span>
            </div>
            <div className="h-7 w-[1px] bg-slate-800" />
            <div className="text-right">
              <span className="text-[10px] text-slate-400 block uppercase">% Adiposa</span>
              <span className="text-base font-bold text-amber-400 font-outfit">{selectedEval.masses.adiposa.pct}%</span>
            </div>
          </div>
        </div>

        {/* Detailed Metrics Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-800 text-slate-400 bg-slate-950/80 font-outfit">
                <th className="p-3">Tejido / Componente (D. Kerr 1988)</th>
                <th className="p-3">Porcentaje (%)</th>
                <th className="p-3">Masa (kg)</th>
                <th className="p-3">Score-Z</th>
                <th className="p-3 text-right">Diferencia con Anterior (kg)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-slate-300 font-mono">
              <tr>
                <td className="p-3 font-sans font-semibold text-amber-400">1- Masa Adiposa ("grasa subcutánea")</td>
                <td className="p-3">{selectedEval.masses.adiposa.pct}%</td>
                <td className="p-3 font-bold">{selectedEval.masses.adiposa.kg} kg</td>
                <td className="p-3">{selectedEval.masses.adiposa.scoreZ}</td>
                <td className={`p-3 text-right font-bold ${selectedEval.masses.adiposa.diffKg < 0 ? 'text-emerald-400' : 'text-slate-400'}`}>
                  {selectedEval.masses.adiposa.diffKg !== 0 ? `${selectedEval.masses.adiposa.diffKg} kg` : '-'}
                </td>
              </tr>
              <tr>
                <td className="p-3 font-sans font-semibold text-emerald-400">2- Masa Muscular ("músculo magro")</td>
                <td className="p-3">{selectedEval.masses.muscular.pct}%</td>
                <td className="p-3 font-bold">{selectedEval.masses.muscular.kg} kg</td>
                <td className="p-3">{selectedEval.masses.muscular.scoreZ}</td>
                <td className={`p-3 text-right font-bold ${selectedEval.masses.muscular.diffKg > 0 ? 'text-emerald-400' : 'text-slate-400'}`}>
                  {selectedEval.masses.muscular.diffKg !== 0 ? `+${selectedEval.masses.muscular.diffKg} kg` : '-'}
                </td>
              </tr>
              <tr>
                <td className="p-3 font-sans text-slate-300">3- Masa Residual (vísceras, órganos, pulmones)</td>
                <td className="p-3">{selectedEval.masses.residual.pct}%</td>
                <td className="p-3">{selectedEval.masses.residual.kg} kg</td>
                <td className="p-3">{selectedEval.masses.residual.scoreZ}</td>
                <td className="p-3 text-right text-slate-400">
                  {selectedEval.masses.residual.diffKg !== 0 ? `${selectedEval.masses.residual.diffKg} kg` : '-'}
                </td>
              </tr>
              <tr>
                <td className="p-3 font-sans text-slate-300">4- Masa Ósea (huesos)</td>
                <td className="p-3">{selectedEval.masses.osea.pct}%</td>
                <td className="p-3">{selectedEval.masses.osea.kg} kg</td>
                <td className="p-3">{selectedEval.masses.osea.scoreZ}</td>
                <td className="p-3 text-right text-slate-400">0,000 kg</td>
              </tr>
              <tr>
                <td className="p-3 font-sans text-slate-300">5- Masa Cutánea (piel)</td>
                <td className="p-3">{selectedEval.masses.piel.pct}%</td>
                <td className="p-3">{selectedEval.masses.piel.kg} kg</td>
                <td className="p-3">-</td>
                <td className="p-3 text-right text-slate-400">
                  {selectedEval.masses.piel.diffKg !== 0 ? `${selectedEval.masses.piel.diffKg} kg` : '-'}
                </td>
              </tr>
              <tr className="bg-indigo-950/40 font-bold font-sans">
                <td className="p-3 text-white">MASA TOTAL ESTRUCTURADA</td>
                <td className="p-3 text-white font-mono">100.00%</td>
                <td className="p-3 text-white font-mono">{selectedEval.basic.weightKg} kg</td>
                <td className="p-3 text-white font-mono">{selectedEval.masses.total.scoreZ}</td>
                <td className="p-3 text-right text-indigo-300 font-mono">
                  {selectedEval.masses.total.diffKg !== 0 ? `${selectedEval.masses.total.diffKg} kg` : '-'}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
