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
  const prevEval = evaluations.length > 1 ? evaluations[evaluations.length - 2] : null;
  const fatDiffPct = (latestEval.masses.adiposa.pct - baselineEval.masses.adiposa.pct).toFixed(2);
  const muscleDiffKg = (latestEval.masses.muscular.kg - baselineEval.masses.muscular.kg).toFixed(3);
  const muscleDiffPrevKg = prevEval ? (latestEval.masses.muscular.kg - prevEval.masses.muscular.kg).toFixed(3) : 0;
  const sum6DiffMm = (latestEval.skinfolds.sum6 - baselineEval.skinfolds.sum6).toFixed(1);

  // Status flags
  const isMuscleUpBase = Number(muscleDiffKg) >= 0;
  const isMuscleUpPrev = Number(muscleDiffPrevKg) >= 0;
  const isFatDown = Number(fatDiffPct) <= 0;
  const isSum6Down = Number(sum6DiffMm) <= 0;

  // Goal progress calculation
  const totalDropNeeded = baselineEval.masses.adiposa.pct - profile.targetBodyFatPct;
  const currentDropAchieved = baselineEval.masses.adiposa.pct - latestEval.masses.adiposa.pct;
  const progressPct = Math.min(100, Math.max(0, (currentDropAchieved / totalDropNeeded) * 100)).toFixed(1);

  return (
    <div className="space-y-6 max-w-7xl mx-auto w-full">

      {/* 1. Header Banner & Goal Progress Bar */}
      <div className="glass-panel p-6 rounded-2xl border border-[#253745] space-y-5">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-[#9BA8AB] font-bold text-xs uppercase tracking-widest font-mono">
              <Award className="w-4 h-4 text-[#9BA8AB]" />
              Devolución de Nutrición & Antropometría ISAK
            </div>
            <h2 className="text-2xl font-bold font-outfit text-white flex items-center gap-2">
              Recomposición Corporal
              <span className="text-xs bg-[#06141B] text-[#CCD0CF] border border-[#253745] px-2.5 py-0.5 rounded-full font-mono font-medium">
                {evaluations.length} Mediciones Registradas
              </span>
            </h2>
            <p className="text-xs text-slate-300">
              Evaluación antropométrica realizada por <strong className="text-white">{profile.nutritionist}</strong>. Objetivo principal: <strong className="text-emerald-400">Llegar al 20% de Grasa Corporal</strong> preservando masa magra.
            </p>
          </div>

          <div className="flex items-center gap-3 bg-[#06141B] border border-[#253745] p-3 rounded-xl shrink-0">
            <div className="w-10 h-10 rounded-lg bg-[#253745] border border-[#4A5C6A] flex items-center justify-center">
              <Target className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <span className="text-[10px] text-[#4A5C6A] uppercase font-bold tracking-wider block font-mono">Meta Principal</span>
              <span className="text-lg font-bold text-emerald-400 font-outfit">20.0% Grasa</span>
              <span className="text-[10px] text-[#9BA8AB] block">Actual: {latestEval.masses.adiposa.pct}%</span>
            </div>
          </div>
        </div>

        {/* Progress Bar Container */}
        <div className="bg-[#06141B] p-4 rounded-xl border border-[#253745] space-y-2">
          <div className="flex justify-between items-center text-xs">
            <span className="text-[#9BA8AB] font-semibold flex items-center gap-1.5 font-mono">
              <Activity className="w-3.5 h-3.5 text-[#9BA8AB]" />
              Progreso de Reducción Adiposa
            </span>
            <span className="text-emerald-400 font-bold font-outfit">
              {progressPct}% Completado ({fatDiffPct}% de grasa)
            </span>
          </div>

          <div className="relative w-full h-3.5 bg-[#11212D] rounded-full overflow-hidden border border-[#253745]">
            <div 
              className="h-full bg-gradient-to-r from-[#253745] via-[#4A5C6A] to-[#9BA8AB] rounded-full transition-all duration-1000"
              style={{ width: `${Math.max(4, progressPct)}%` }}
            />
          </div>

          <div className="flex justify-between text-[11px] text-[#9BA8AB] font-mono pt-1">
            <span>Línea Base: <strong>{baselineEval.masses.adiposa.pct}%</strong> ({baselineEval.dateDisplay.slice(0, -5)})</span>
            <span className="text-[#CCD0CF] font-bold">Actual: {latestEval.masses.adiposa.pct}% ({latestEval.dateDisplay.slice(0, -5)})</span>
            <span className="text-emerald-400 font-bold">Objetivo: 20.0%</span>
          </div>
        </div>
      </div>

      {/* 2. Top KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        {/* KPI 1: Masa Adiposa % */}
        <div className="glass-panel p-4 rounded-xl border border-[#253745] relative overflow-hidden group hover:border-[#4A5C6A] transition-all">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-[#9BA8AB] uppercase tracking-wider font-outfit">Masa Adiposa</span>
            <div className="p-2 rounded-lg bg-[#06141B] border border-[#253745] text-[#CCD0CF]">
              <PieChart className="w-4 h-4 text-[#9BA8AB]" />
            </div>
          </div>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-2xl font-bold font-outfit text-white">{latestEval.masses.adiposa.pct}%</span>
            <span className="text-xs text-slate-400 font-mono">({latestEval.masses.adiposa.kg} kg)</span>
          </div>
          <div className={`mt-2 flex items-center gap-1.5 text-xs font-semibold ${isFatDown ? 'text-emerald-400' : 'text-rose-400'}`}>
            {isFatDown ? <TrendingDown className="w-3.5 h-3.5" /> : <TrendingUp className="w-3.5 h-3.5" />}
            <span>{fatDiffPct}% acumulado</span>
            <span className="text-[10px] text-[#4A5C6A] ml-auto font-mono">Medición {latestEval.measurementNumber} vs 1</span>
          </div>
        </div>

        {/* KPI 2: Masa Muscular Magra */}
        <div className="glass-panel p-4 rounded-xl border border-[#253745] relative overflow-hidden group hover:border-[#4A5C6A] transition-all">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-[#9BA8AB] uppercase tracking-wider font-outfit">Masa Muscular</span>
            <div className={`p-2 rounded-lg bg-[#06141B] border border-[#253745] ${isMuscleUpBase ? 'text-emerald-400' : 'text-rose-400'}`}>
              <Zap className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-2xl font-bold font-outfit text-white">{latestEval.masses.muscular.kg} kg</span>
            <span className="text-xs text-slate-400 font-mono">({latestEval.masses.muscular.pct}%)</span>
          </div>
          <div className={`mt-2 flex items-center gap-1.5 text-xs font-semibold ${isMuscleUpBase ? 'text-emerald-400' : 'text-rose-400'}`}>
            {isMuscleUpBase ? <TrendingUp className="w-3.5 h-3.5" /> : <TrendingDown className="w-3.5 h-3.5" />}
            <span>{isMuscleUpBase ? `+${muscleDiffKg}` : muscleDiffKg} kg magros</span>
            <span className="text-[10px] text-[#4A5C6A] ml-auto font-mono">
              {prevEval ? `(${isMuscleUpPrev ? '+' : ''}${muscleDiffPrevKg} kg vs Med ${prevEval.measurementNumber})` : 'vs Línea Base'}
            </span>
          </div>
        </div>

        {/* KPI 3: Suma de 6 Pliegues */}
        <div className="glass-panel p-4 rounded-xl border border-[#253745] relative overflow-hidden group hover:border-[#4A5C6A] transition-all">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-[#9BA8AB] uppercase tracking-wider font-outfit">Suma 6 Pliegues</span>
            <div className="p-2 rounded-lg bg-[#06141B] border border-[#253745] text-amber-400">
              <Flame className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-2xl font-bold font-outfit text-white">{latestEval.skinfolds.sum6} mm</span>
            <span className="text-xs text-slate-400 font-mono">(ISAK 6)</span>
          </div>
          <div className={`mt-2 flex items-center gap-1.5 text-xs font-semibold ${isSum6Down ? 'text-emerald-400' : 'text-rose-400'}`}>
            {isSum6Down ? <TrendingDown className="w-3.5 h-3.5" /> : <TrendingUp className="w-3.5 h-3.5" />}
            <span>{sum6DiffMm} mm reducidos</span>
            <span className="text-[10px] text-[#4A5C6A] ml-auto font-mono">De {baselineEval.skinfolds.sum6} mm</span>
          </div>
        </div>

        {/* KPI 4: Índice Adiposo / Muscular */}
        <div className="glass-panel p-4 rounded-xl border border-[#253745] relative overflow-hidden group hover:border-[#4A5C6A] transition-all">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-[#9BA8AB] uppercase tracking-wider font-outfit">Índice Adiposo/Músculo</span>
            <div className="p-2 rounded-lg bg-[#06141B] border border-[#253745] text-[#CCD0CF]">
              <Scale className="w-4 h-4 text-[#9BA8AB]" />
            </div>
          </div>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-2xl font-bold font-outfit text-white">{latestEval.indices.fatToMuscleRatio}</span>
            <span className="text-xs text-slate-400 font-mono">(Kerr 1988)</span>
          </div>
          <div className="mt-2 flex items-center gap-1.5 text-xs text-emerald-400 font-semibold">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Mejora eficiente</span>
          </div>
        </div>
      </div>

      {/* 3. Evolución Histórica Comparativa entre Mediciones */}
      <div className="glass-panel p-6 rounded-2xl space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#253745] pb-4">
          <div>
            <span className="text-[10px] font-bold text-[#9BA8AB] uppercase tracking-widest block font-mono">Comparativa Evolutiva</span>
            <h3 className="text-lg font-bold font-outfit text-white">Evolución de las {evaluations.length} Mediciones Antropométricas</h3>
          </div>

          <div className="flex flex-wrap gap-1.5 bg-[#06141B] p-1 rounded-xl border border-[#253745] text-xs">
            <button
              onClick={() => setActiveTab('masses')}
              className={`px-3 py-1.5 rounded-lg font-outfit transition-all ${activeTab === 'masses' ? 'bg-[#253745] text-white font-semibold shadow-inner' : 'text-[#9BA8AB] hover:text-white'}`}
            >
              5 Componentes (kg)
            </button>
            <button
              onClick={() => setActiveTab('skinfolds')}
              className={`px-3 py-1.5 rounded-lg font-outfit transition-all ${activeTab === 'skinfolds' ? 'bg-[#253745] text-white font-semibold shadow-inner' : 'text-[#9BA8AB] hover:text-white'}`}
            >
              Pliegues (mm)
            </button>
            <button
              onClick={() => setActiveTab('perimeters')}
              className={`px-3 py-1.5 rounded-lg font-outfit transition-all ${activeTab === 'perimeters' ? 'bg-[#253745] text-white font-semibold shadow-inner' : 'text-[#9BA8AB] hover:text-white'}`}
            >
              Perímetros (cm)
            </button>
            <button
              onClick={() => setActiveTab('indices')}
              className={`px-3 py-1.5 rounded-lg font-outfit transition-all ${activeTab === 'indices' ? 'bg-[#253745] text-white font-semibold shadow-inner' : 'text-[#9BA8AB] hover:text-white'}`}
            >
              Somatotipo e Índices
            </button>
          </div>
        </div>

        {/* Tab 1: 5 Componentes Corporal */}
        {activeTab === 'masses' && (
          <div className="space-y-4">
            <p className="text-xs text-slate-300">
              Fraccionamiento anatómico en 5 masas según el modelo de <strong>D. Kerr (1988)</strong>. Destaca la reducción progresiva de masa adiposa (<strong>-{(baselineEval.masses.adiposa.kg - latestEval.masses.adiposa.kg).toFixed(2)} kg total</strong>, bajando del {baselineEval.masses.adiposa.pct}% al {latestEval.masses.adiposa.pct}%) y la recomposición de peso general.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {evaluations.map((ev) => (
                <div 
                  key={ev.measurementNumber}
                  className={`p-4 rounded-xl border transition-all ${ev.measurementNumber === latestEval.measurementNumber ? 'bg-[#06141B] border-[#4A5C6A]' : 'bg-[#06141B]/60 border-[#253745]'}`}
                >
                  <div className="flex justify-between items-center border-b border-[#253745] pb-2.5 mb-3">
                    <div>
                      <span className="text-xs font-bold text-[#9BA8AB] block font-outfit">Medición N° {ev.measurementNumber}</span>
                      <span className="text-[11px] text-slate-400">{ev.dateDisplay} ({ev.basic.weightKg} kg)</span>
                    </div>
                    {ev.measurementNumber === latestEval.measurementNumber && (
                      <span className="text-[10px] bg-[#253745] text-emerald-300 border border-emerald-500/40 px-2 py-0.5 rounded-full font-bold">
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
                      <div className="w-full h-2 bg-[#11212D] rounded-full overflow-hidden border border-[#253745]">
                        <div className="h-full bg-amber-400 rounded-full" style={{ width: `${ev.masses.adiposa.pct}%` }} />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-slate-300 mb-1">
                        <span>Masa Muscular:</span>
                        <strong className="text-emerald-400">{ev.masses.muscular.kg} kg ({ev.masses.muscular.pct}%)</strong>
                      </div>
                      <div className="w-full h-2 bg-[#11212D] rounded-full overflow-hidden border border-[#253745]">
                        <div className="h-full bg-emerald-400 rounded-full" style={{ width: `${ev.masses.muscular.pct}%` }} />
                      </div>
                    </div>

                    <div className="pt-2 border-t border-[#253745] grid grid-cols-3 text-[11px] text-slate-400 font-mono">
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
            <p className="text-xs text-slate-300">
              Seguimiento de espesor de pliegues cutáneos (mm). Todos los pliegues muestran una clara tendencia decreciente, destacando la fuerte reducción abdominal y general.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left border-collapse">
                <thead>
                  <tr className="border-b border-[#253745] text-[#9BA8AB] bg-[#06141B] font-outfit">
                    <th className="p-3">Pliegue (mm)</th>
                    {evaluations.map((ev, idx) => (
                      <th key={ev.measurementNumber} className={`p-3 ${idx === evaluations.length - 1 ? 'text-emerald-400 font-bold' : ''}`}>
                        Medición {ev.measurementNumber} ({ev.dateDisplay.slice(0, -5)})
                      </th>
                    ))}
                    <th className="p-3 text-right">Variación Total</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#253745]/60 text-slate-300 font-mono">
                  {[
                    { key: 'triceps', label: 'Tríceps' },
                    { key: 'subescapular', label: 'Subescapular' },
                    { key: 'supraespinal', label: 'Supraespinal' },
                    { key: 'abdominal', label: 'Abdominal' },
                    { key: 'musloMedial', label: 'Muslo (Medial)' },
                    { key: 'pantorrilla', label: 'Pantorrilla' },
                  ].map((sf) => {
                    const diff = (latestEval.skinfolds[sf.key] - baselineEval.skinfolds[sf.key]).toFixed(1);
                    return (
                      <tr key={sf.key}>
                        <td className="p-3 font-semibold text-white font-sans">{sf.label}</td>
                        {evaluations.map((ev, idx) => (
                          <td key={ev.measurementNumber} className={`p-3 ${idx === evaluations.length - 1 ? 'font-bold text-emerald-400' : ''}`}>
                            {ev.skinfolds[sf.key]} mm
                          </td>
                        ))}
                        <td className={`p-3 text-right font-bold ${diff < 0 ? 'text-emerald-400' : 'text-slate-400'}`}>
                          {diff < 0 ? `${diff} mm` : `+${diff} mm`}
                        </td>
                      </tr>
                    );
                  })}
                  <tr className="bg-[#06141B] font-bold">
                    <td className="p-3 text-[#CCD0CF] font-sans">SUMA DE 6 PLIEGUES</td>
                    {evaluations.map((ev, idx) => (
                      <td key={ev.measurementNumber} className={`p-3 ${idx === evaluations.length - 1 ? 'text-emerald-400' : 'text-slate-300'}`}>
                        {ev.skinfolds.sum6} mm
                      </td>
                    ))}
                    <td className="p-3 text-right text-emerald-400">{sum6DiffMm} mm</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Tab 3: Perímetros Corporales */}
        {activeTab === 'perimeters' && (
          <div className="space-y-4">
            <p className="text-xs text-slate-300">
              Evolución de perímetros en cm. Se destaca la importante afinación de la cintura mínima (<strong>{(latestEval.perimeters.cinturaMinima - baselineEval.perimeters.cinturaMinima).toFixed(1)} cm</strong>) y la meso-esternal (<strong>{(latestEval.perimeters.toraxMesoesternal - baselineEval.perimeters.toraxMesoesternal).toFixed(1)} cm</strong>).
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 text-xs">
              {[
                { key: 'cinturaMinima', label: 'Cintura (mínima)', unit: 'cm' },
                { key: 'toraxMesoesternal', label: 'Tórax Mesoesternal', unit: 'cm' },
                { key: 'brazoFlexionado', label: 'Brazo Flexionado (Tensión)', unit: 'cm' },
                { key: 'caderasMaxima', label: 'Caderas (máxima)', unit: 'cm' },
                { key: 'musloMedial', label: 'Muslo Medial', unit: 'cm' },
                { key: 'pantorrillaMaxima', label: 'Pantorrilla (máxima)', unit: 'cm' },
              ].map((item) => {
                const diff = (latestEval.perimeters[item.key] - baselineEval.perimeters[item.key]).toFixed(1);
                return (
                  <div key={item.key} className="p-3.5 rounded-xl bg-[#06141B] border border-[#253745] space-y-1">
                    <span className="text-[#9BA8AB] font-semibold block">{item.label}</span>
                    <div className="flex items-baseline justify-between">
                      <span className="text-xl font-bold font-outfit text-emerald-400">{latestEval.perimeters[item.key]} cm</span>
                      <span className={`font-mono font-bold ${diff < 0 ? 'text-emerald-400' : 'text-slate-300'}`}>
                        {diff < 0 ? `${diff} cm` : `+${diff} cm`}
                      </span>
                    </div>
                    <span className="text-[10px] text-[#4A5C6A] block font-mono">
                      Med 1: {baselineEval.perimeters[item.key]} cm → Med {latestEval.measurementNumber}: {latestEval.perimeters[item.key]} cm
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Tab 4: Somatotipo e Índices */}
        {activeTab === 'indices' && (
          <div className="space-y-4">
            <p className="text-xs text-slate-300">
              Evaluación del somatotipo de <strong>Heath & Carter (1990)</strong> y los coeficientes anatómicos de la antropometrista Lic. Maggi Carolina.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              
              {/* Somatotipo Card */}
              <div className="p-4 rounded-xl bg-[#06141B] border border-[#253745] space-y-3">
                <div className="flex justify-between items-center border-b border-[#253745] pb-2">
                  <h4 className="text-xs font-bold text-white font-outfit uppercase tracking-wider">Somatotipo Actual (Heath-Carter)</h4>
                  <span className="text-[10px] text-[#9BA8AB] font-mono font-bold">Mesomórfico Dominante</span>
                </div>
                
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="p-2.5 rounded-lg bg-[#11212D] border border-[#253745]">
                    <span className="text-[10px] text-[#9BA8AB] block uppercase font-mono">Endomorfia</span>
                    <strong className="text-lg font-outfit text-amber-400">{latestEval.somatotype.endo}</strong>
                    <span className="text-[9px] text-[#4A5C6A] block">Grasa / Adiposidad</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-[#11212D] border border-[#253745]">
                    <span className="text-[10px] text-[#9BA8AB] block uppercase font-mono">Mesomorfia</span>
                    <strong className="text-lg font-outfit text-emerald-400">{latestEval.somatotype.meso}</strong>
                    <span className="text-[9px] text-[#4A5C6A] block">Robustez Muscular</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-[#11212D] border border-[#253745]">
                    <span className="text-[10px] text-[#9BA8AB] block uppercase font-mono">Ectomorfia</span>
                    <strong className="text-lg font-outfit text-[#CCD0CF]">{latestEval.somatotype.ecto}</strong>
                    <span className="text-[9px] text-[#4A5C6A] block">Linearidad / Altura</span>
                  </div>
                </div>

                <p className="text-[11px] text-slate-300 leading-relaxed pt-1">
                  Coordenadas en Somatocarta: X = <strong>{latestEval.somatotype.x}</strong>, Y = <strong>{latestEval.somatotype.y}</strong>. Muestra excelente desarrollo muscular con baja fragilidad ósea.
                </p>
              </div>

              {/* Coeficientes e Índices */}
              <div className="p-4 rounded-xl bg-[#06141B] border border-[#253745] space-y-3">
                <div className="flex justify-between items-center border-b border-[#253745] pb-2">
                  <h4 className="text-xs font-bold text-white font-outfit uppercase tracking-wider">Índices Anatómicos & Salud</h4>
                  <span className="text-[10px] text-emerald-400 font-mono font-bold">Riesgo Bajo</span>
                </div>

                <div className="space-y-2 text-xs">
                  <div className="flex justify-between p-2 rounded-lg bg-[#11212D]">
                    <span className="text-[#9BA8AB]">Índice Cintura / Cadera:</span>
                    <strong className="text-emerald-400 font-mono">{latestEval.indices.waistToHipRatio} (Bajo Riesgo Intra-abdominal)</strong>
                  </div>
                  <div className="flex justify-between p-2 rounded-lg bg-[#11212D]">
                    <span className="text-[#9BA8AB]">Índice Músculo / Óseo:</span>
                    <strong className="text-white font-mono">{latestEval.indices.muscleToBoneRatio} kg músculo/kg hueso</strong>
                  </div>
                  <div className="flex justify-between p-2 rounded-lg bg-[#11212D]">
                    <span className="text-[#9BA8AB]">Metabolismo Basal (Harris-Benedict):</span>
                    <strong className="text-[#CCD0CF] font-mono">{latestEval.indices.basalMetabolismKcal} kcal/día</strong>
                  </div>
                  <div className="flex justify-between p-2 rounded-lg bg-[#11212D]">
                    <span className="text-[#9BA8AB]">IMC (Índice Masa Corporal):</span>
                    <strong className="text-slate-300 font-mono">{latestEval.indices.bmi} kg/m²</strong>
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}
      </div>

      {/* 4. Visor Detallado por Medición (Informe Nutricionista) */}
      <div className="glass-panel p-6 rounded-2xl space-y-5 border border-[#253745]">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#253745] pb-4">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-[#9BA8AB]" />
            <div>
              <h3 className="text-lg font-bold font-outfit text-white">Devolución de la Nutricionista por Medición</h3>
              <p className="text-xs text-slate-400">Selecciona el número de informe para revisar la ficha completa y observaciones de Lic. Maggi Carolina.</p>
            </div>
          </div>

          <div className="flex items-center gap-2 bg-[#06141B] p-1 rounded-xl border border-[#253745] shrink-0">
            {evaluations.map((ev, idx) => (
              <button
                key={ev.measurementNumber}
                onClick={() => setSelectedEvalIndex(idx)}
                className={`px-3 py-1.5 rounded-lg text-xs font-outfit transition-all ${selectedEvalIndex === idx ? 'bg-[#253745] text-white font-bold shadow-inner' : 'text-[#9BA8AB] hover:text-white'}`}
              >
                Informe N° {ev.measurementNumber} ({ev.dateDisplay})
              </button>
            ))}
          </div>
        </div>

        {/* Card of Selected Evaluation Notes */}
        <div className="p-4 rounded-xl bg-[#06141B] border border-[#253745] flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="text-[10px] text-[#9BA8AB] font-bold uppercase tracking-wider block font-outfit">
              Conclusión Técnica - Medición N° {selectedEval.measurementNumber} ({selectedEval.dateDisplay})
            </span>
            <p className="text-xs text-slate-200 leading-relaxed font-sans">
              "{selectedEval.notes}"
            </p>
          </div>
          <div className="shrink-0 flex items-center gap-3 bg-[#11212D] border border-[#253745] p-3 rounded-xl">
            <div className="text-right">
              <span className="text-[10px] text-[#4A5C6A] block uppercase font-mono">Peso Medido</span>
              <span className="text-base font-bold text-white font-outfit">{selectedEval.basic.weightKg} kg</span>
            </div>
            <div className="h-7 w-[1px] bg-[#253745]" />
            <div className="text-right">
              <span className="text-[10px] text-[#4A5C6A] block uppercase font-mono">% Adiposa</span>
              <span className="text-base font-bold text-amber-400 font-outfit">{selectedEval.masses.adiposa.pct}%</span>
            </div>
          </div>
        </div>

        {/* Detailed Metrics Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left border-collapse">
            <thead>
              <tr className="border-b border-[#253745] text-[#9BA8AB] bg-[#06141B] font-outfit">
                <th className="p-3">Tejido / Componente (D. Kerr 1988)</th>
                <th className="p-3">Porcentaje (%)</th>
                <th className="p-3">Masa (kg)</th>
                <th className="p-3">Score-Z</th>
                <th className="p-3 text-right">Diferencia con Anterior (kg)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#253745]/60 text-slate-300 font-mono">
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
              <tr className="bg-[#06141B] font-bold font-sans">
                <td className="p-3 text-white">MASA TOTAL ESTRUCTURADA</td>
                <td className="p-3 text-white font-mono">100.00%</td>
                <td className="p-3 text-white font-mono">{selectedEval.basic.weightKg} kg</td>
                <td className="p-3 text-white font-mono">{selectedEval.masses.total.scoreZ}</td>
                <td className="p-3 text-right text-[#CCD0CF] font-mono">
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
