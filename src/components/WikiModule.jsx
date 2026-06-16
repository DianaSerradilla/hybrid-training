import React, { useState } from 'react';
import {
  BookOpen, Trophy, ShieldCheck, ChevronDown,
  ChevronUp, HelpCircle, Award, Layers, Zap, Activity
} from 'lucide-react';
import { wikiBiomechanics, calisthenicsSkills, biomechanicsAnchorSummary } from '../data/macrocycleData';

export default function WikiModule() {
  const [expandedMuscle, setExpandedMuscle] = useState(null);
  const [bombeoState, setBombeoState] = useState('correct'); // low, correct
  const [disrupcionState, setDisrupcionState] = useState('correct'); // none, correct
  const [rendimientoState, setRendimientoState] = useState('correct'); // stagnation, correct

  const toggleMuscle = (muscleName) => {
    setExpandedMuscle(prev => (prev === muscleName ? null : muscleName));
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">

      {/* LEFT COLUMN: Skills Calistenia & Anclajes Biomecánicos */}
      <div className="lg:col-span-3 space-y-6">

        {/* 1. Skills Calistenia (Timeline style) */}
        <div className="glass-panel p-6 rounded-2xl glow-fuchsia space-y-6">
          <div>
            <h3 className="font-bold text-sm text-slate-200 uppercase tracking-wider flex items-center gap-1.5">
              <Trophy className="w-4.5 h-4.5 text-fuchsia-400" />
              Línea de Tiempo de Skills en Calistenia
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">Ruta de progresión obligatoria ordenada por dificultad de bases a élite</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {calisthenicsSkills.map((vectorBlock, idx) => (
              <div key={idx} className="relative border-l border-slate-800 pl-5 ml-2.5 space-y-5">
                {/* Section Header overlapping the timeline border */}
                <h4 className="text-[10px] font-bold text-fuchsia-400 uppercase tracking-widest flex items-center gap-1 relative -left-[31px] bg-[#030712] py-1 px-2.5 rounded-full border border-slate-800 w-fit">
                  <Layers className="w-3 h-3 text-fuchsia-400" />
                  {vectorBlock.vector.replace(' (PUSH)', '').replace(' (PULL)', '')}
                </h4>

                <div className="space-y-4">
                  {vectorBlock.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="relative group">
                      {/* Timeline Dot centered on the line */}
                      <span className="absolute -left-[26px] top-2 w-3 h-3 rounded-full bg-slate-950 border-2 border-fuchsia-500 group-hover:border-fuchsia-400 transition-colors" />
                      
                      <div className="bg-slate-950/60 border border-slate-850 p-3 rounded-xl hover:border-fuchsia-500/40 transition-colors">
                        <div className="flex items-center justify-between gap-2">
                          <strong className="text-xs font-bold text-slate-200">{skill.name}</strong>
                          <span className={`text-[8px] font-bold px-1.5 py-0.5 rounded uppercase shrink-0 ${skill.difficulty === 'Básico' ? 'bg-slate-850 text-slate-400' : skill.difficulty === 'Básico-Intermedio' || skill.difficulty === 'Intermedio' ? 'bg-indigo-950 text-indigo-400' : skill.difficulty === 'Intermedio-Avanzado' || skill.difficulty === 'Avanzado' ? 'bg-amber-950 text-amber-400' : 'bg-red-950 text-red-400'}`}>
                            {skill.difficulty}
                          </span>
                        </div>
                        <div className="mt-2 text-[10px] text-slate-400 space-y-1">
                          <div>
                            <span className="text-slate-300 font-semibold">Requisito:</span> {skill.prereq}
                          </div>
                          <div className="text-slate-400 leading-normal">
                            <span className="text-slate-300 font-semibold">Ruta:</span> {skill.route}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Anclajes Biomecánicos en Calistenia */}
        <div className="glass-panel p-6 rounded-2xl glow-emerald space-y-4">
          <div>
            <h3 className="font-bold text-sm text-slate-200 uppercase tracking-wider flex items-center gap-1.5">
              <ShieldCheck className="w-4.5 h-4.5 text-emerald-400" />
              Anclajes Biomecánicos en Calistenia
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">Control postural innegociable para evitar lesiones</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div className="p-4 bg-slate-950 rounded-xl border border-slate-850 space-y-2">
              <strong className="text-emerald-400 block font-semibold">{biomechanicsAnchorSummary.retroversionPelvica.name}</strong>
              <p className="text-slate-400 leading-relaxed text-[11px]">{biomechanicsAnchorSummary.retroversionPelvica.desc}</p>
              <span className="block text-[10px] text-slate-500 font-medium pt-1 border-t border-slate-900">Aplicación: {biomechanicsAnchorSummary.retroversionPelvica.app}</span>
            </div>

            <div className="p-4 bg-slate-950 rounded-xl border border-slate-850 space-y-3">
              <strong className="text-emerald-400 block font-semibold">Anclajes de Escápula (Movimiento Vertical/Horizontal)</strong>
              <div className="space-y-1.5 text-[11px] text-slate-400">
                <div><span className="text-slate-200 font-semibold">Retracción:</span> {biomechanicsAnchorSummary.escapularAnchor.retraccion}</div>
                <div><span className="text-slate-200 font-semibold">Protracción:</span> {biomechanicsAnchorSummary.escapularAnchor.protraccion}</div>
                <div><span className="text-slate-200 font-semibold">Depresión:</span> {biomechanicsAnchorSummary.escapularAnchor.depresion}</div>
                <div><span className="text-slate-200 font-semibold">Elevación:</span> {biomechanicsAnchorSummary.escapularAnchor.elevacion}</div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* RIGHT COLUMN: Biblioteca Biomecánica & Pirámide de la Hipertrofia Pura */}
      <div className="lg:col-span-2 space-y-6">

        {/* 1. Biblioteca Biomecánica */}
        <div className="glass-panel p-6 rounded-2xl glow-indigo space-y-4">
          <div>
            <h2 className="text-xl font-bold font-outfit text-white flex items-center gap-2">
              <BookOpen className="w-5.5 h-5.5 text-indigo-400" />
              Biblioteca Biomecánica: Vectores Inquebrantables
            </h2>
            <p className="text-xs text-slate-400">Manual definitivo de selección y ejecución de ejercicios dictado por la anatomía muscular</p>
          </div>

          <div className="space-y-3">
            {wikiBiomechanics.map((item, idx) => {
              const isExpanded = expandedMuscle === item.muscleGroup;

              return (
                <div key={idx} className="border border-slate-800 bg-slate-950/40 rounded-xl overflow-hidden transition-all duration-200">
                  <button
                    onClick={() => toggleMuscle(item.muscleGroup)}
                    className="w-full flex items-center justify-between p-4 bg-slate-950/80 hover:bg-slate-900 text-left transition-colors"
                  >
                    <div>
                      <span className="font-bold text-slate-200 text-sm block">{item.muscleGroup}</span>
                      <span className="text-xs text-indigo-400 mt-0.5 block">{item.ruleName}</span>
                    </div>
                    {isExpanded ? (
                      <ChevronUp className="w-5 h-5 text-slate-400" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-400" />
                    )}
                  </button>

                  {isExpanded && (
                    <div className="p-4 bg-slate-950/20 border-t border-slate-900/60 space-y-4">
                      {/* Vectors */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                        {item.vectors.map((vec, vIdx) => (
                          <div key={vIdx} className="bg-slate-950 border border-slate-850 p-3 rounded-lg text-xs space-y-1">
                            <strong className="text-indigo-300 font-semibold block">{vec.title}</strong>
                            <p className="text-slate-400 leading-normal">{vec.desc}</p>
                          </div>
                        ))}
                      </div>

                      {/* Golden Rules if available */}
                      {item.goldenRules && (
                        <div className="pt-3 border-t border-slate-900 space-y-2">
                          <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider">Reglas de Oro de Ejecución</h4>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                            {item.goldenRules.map((rule, rIdx) => (
                              <div key={rIdx} className="bg-indigo-950/10 border border-indigo-900/30 p-3 rounded-lg text-[11px] space-y-1">
                                <strong className="text-indigo-400 font-semibold block">{rule.title}</strong>
                                <p className="text-slate-400 leading-normal">{rule.desc}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* 2. La Pirámide de la Hipertrofia Pura */}
        <div className="glass-panel p-6 rounded-2xl glow-fuchsia space-y-5">
          <div>
            <h3 className="font-bold text-sm text-slate-200 uppercase tracking-wider flex items-center gap-1.5">
              <Award className="w-4.5 h-4.5 text-fuchsia-400" />
              La Pirámide de la Hipertrofia Pura
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">Los 5 niveles fisiológicos obligatorios ordenados por prioridad</p>
          </div>

          <div className="space-y-3">
            {/* Pyramid Level 5 */}
            <div className="bg-amber-950/25 border border-amber-900/30 p-4 rounded-xl space-y-2 hover:border-amber-500/20 transition-colors">
              <div className="flex items-center justify-between">
                <span className="text-[10px] bg-amber-900/30 text-amber-300 px-2 py-0.5 rounded border border-amber-800/60 font-bold uppercase tracking-wider">Nivel 5 (Cúspide)</span>
                <strong className="text-xs font-bold text-amber-200 font-outfit">5. Peso (La Recompensa Mecánica)</strong>
              </div>
              <p className="text-[11px] text-slate-300 leading-relaxed"><strong className="text-amber-400">La Regla:</strong> Aumento de la carga bruta externa.</p>
              <p className="text-[11px] text-slate-400 leading-relaxed"><strong className="text-slate-300">Aplicación:</strong> ¡Felicidades! Limpiaste la técnica, maximizaste el estiramiento, controlaste el tempo y sacaste el máximo de repeticiones exigidas. Te has ganado el derecho de subir el peso. Al subirlo, tus repeticiones caerán; reinicias el loop limpiando la ejecución con la nueva carga.</p>
            </div>
            
            {/* Pyramid Level 4 */}
            <div className="bg-rose-950/25 border border-rose-900/30 p-4 rounded-xl space-y-2 hover:border-rose-500/20 transition-colors">
              <div className="flex items-center justify-between">
                <span className="text-[10px] bg-rose-900/30 text-rose-300 px-2 py-0.5 rounded border border-rose-800/60 font-bold uppercase tracking-wider">Nivel 4</span>
                <strong className="text-xs font-bold text-rose-200 font-outfit">4. Rango de Repeticiones (El Puente)</strong>
              </div>
              <p className="text-[11px] text-slate-300 leading-relaxed"><strong className="text-rose-400">La Regla:</strong> Maximizar el rango de repeticiones prescrito antes de mirar el rack de mancuernas.</p>
              <p className="text-[11px] text-slate-400 leading-relaxed"><strong className="text-slate-300">Aplicación:</strong> Si tu rutina dicta hacer 10 a 14 repeticiones, tu directiva es luchar semana a semana para sumar una repetición extra. Hasta que no conquistes las 14 repeticiones manteniendo el RIR establecido, el peso no se mueve.</p>
            </div>

            {/* Pyramid Level 3 */}
            <div className="bg-pink-950/25 border border-pink-900/30 p-4 rounded-xl space-y-2 hover:border-pink-500/20 transition-colors">
              <div className="flex items-center justify-between">
                <span className="text-[10px] bg-pink-900/30 text-pink-300 px-2 py-0.5 rounded border border-pink-800/60 font-bold uppercase tracking-wider">Nivel 3</span>
                <strong className="text-xs font-bold text-pink-200 font-outfit">3. Tempo (Control del Tiempo Bajo Tensión)</strong>
              </div>
              <p className="text-[11px] text-slate-300 leading-relaxed"><strong className="text-pink-400">La Regla:</strong> Dominar la gravedad en cada milímetro del recorrido.</p>
              <p className="text-[11px] text-slate-400 leading-relaxed"><strong className="text-slate-300">Aplicación:</strong> Si sueltas el peso de golpe en la bajada, tiras a la basura el 50% de las ganancias. Tu misión es frenar la excéntrica durante 3 o 4 segundos y agregar una pausa de 1 segundo en el estiramiento para matar el rebote elástico antes de subir.</p>
            </div>

            {/* Pyramid Level 2 */}
            <div className="bg-fuchsia-950/25 border border-fuchsia-900/30 p-4 rounded-xl space-y-2 hover:border-fuchsia-500/20 transition-colors">
              <div className="flex items-center justify-between">
                <span className="text-[10px] bg-fuchsia-900/30 text-fuchsia-300 px-2 py-0.5 rounded border border-fuchsia-800/60 font-bold uppercase tracking-wider">Nivel 2</span>
                <strong className="text-xs font-bold text-fuchsia-200 font-outfit">2. ROM (Rango de Movimiento)</strong>
              </div>
              <p className="text-[11px] text-slate-300 leading-relaxed"><strong className="text-fuchsia-400">La Regla:</strong> Tensión mecánica en el máximo estiramiento posible.</p>
              <p className="text-[11px] text-slate-400 leading-relaxed"><strong className="text-slate-300">Aplicación:</strong> Un músculo estirado bajo carga es el detonante biológico más potente. Si para sacar una repetición extra tienes que acortar el recorrido, esa repetición es nula. El músculo crece en los extremos, no en el medio.</p>
            </div>

            {/* Pyramid Level 1 */}
            <div className="bg-indigo-950/35 border border-indigo-900/40 p-4 rounded-xl space-y-2 hover:border-indigo-500/20 transition-colors">
              <div className="flex items-center justify-between">
                <span className="text-[10px] bg-indigo-900/35 text-indigo-300 px-2 py-0.5 rounded border border-indigo-800/50 font-bold uppercase tracking-wider">Nivel 1 (Base)</span>
                <strong className="text-xs font-bold text-indigo-200 font-outfit">1. Ejecución (Limpieza Técnica Absoluta)</strong>
              </div>
              <p className="text-[11px] text-slate-300 leading-relaxed"><strong className="text-indigo-400">La Regla:</strong> El músculo objetivo debe ser el único motor. Cero inercia, cero balanceo, cero compensaciones.</p>
              <p className="text-[11px] text-slate-400 leading-relaxed"><strong className="text-slate-300">Aplicación:</strong> La repetición número 1 y la 10 deben verse idénticas. Si usas inercia o balanceo lumbar, tu sobrecarga progresiva es falsa e inválida.</p>
            </div>
          </div>
        </div>

      </div>

    </div>

    {/* 3. Panel de Auditoría de Volumen (Semáforos) */}
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

      {/* Left Column: Context & Rules */}
      <div className="glass-panel p-6 rounded-2xl glow-indigo space-y-4 lg:col-span-1">
        <div>
          <h3 className="font-bold text-sm text-slate-200 uppercase tracking-wider flex items-center gap-1.5">
            <Activity className="w-4.5 h-4.5 text-indigo-400" />
            Auditoría de Volumen
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">Evaluación biofeedback de series efectivas</p>
        </div>

        <div className="text-xs text-slate-300 space-y-3 leading-relaxed">
          <p>
            <strong>La Regla de Oro:</strong> Nunca se suben las series en medio de un mesociclo. Si la fatiga se acumula, sumar series nublará tus datos.
          </p>
          <p>
            El momento exacto para tomar la decisión de sumar series es en la <strong>Auditoría de la Semana de Descarga (Cierre del Mesociclo)</strong>.
          </p>
          <div className="bg-slate-950 p-3 rounded-lg border border-slate-900 text-[10px] text-slate-400 space-y-1">
            <strong className="block text-slate-300">Reglas de progresión de series:</strong>
            <span>1. Llegas a la descarga (Semana 4 u 8)</span>
            <span>2. Evalúas registros de semanas anteriores</span>
            <span>3. En la Semana 1 del nuevo mesociclo, agregas 1 sola serie extra al músculo rezagado</span>
            <span>4. Al sumar series a un músculo, quítalas a otro para balancear el tonelaje</span>
          </div>
        </div>
      </div>

      {/* Right Columns: Traffic Lights (2/3 columns) */}
      <div className="glass-panel p-6 rounded-2xl glow-emerald space-y-5 lg:col-span-2">
        <div>
          <h3 className="font-bold text-base text-white">Los 3 Semáforos para Medir tu MEV</h3>
          <p className="text-xs text-slate-400">Determina si estás alcanzando tu Volumen Efectivo Mínimo (MEV) mediante retroalimentación biológica</p>
        </div>

        <div className="space-y-4">

          {/* Traffic Light 1: El Bombeo */}
          <div className="p-4 rounded-xl border border-slate-800 bg-slate-950 flex flex-col sm:flex-row items-start justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className={`w-3.5 h-3.5 rounded-full ${bombeoState === 'correct' ? 'bg-emerald-500 shadow-lg shadow-emerald-500/50' : 'bg-red-500 shadow-lg shadow-red-500/50'}`}></span>
                <strong className="text-sm text-slate-200">Semáforo 1: El Bombeo (Intra-entreno)</strong>
              </div>
              <p className="text-xs text-slate-400 leading-normal max-w-xl">
                {bombeoState === 'correct'
                  ? "Sientes el músculo hinchado, lleno de sangre. La ejecución es correcta."
                  : "No se siente hinchado; trabajaron más las articulaciones que la fibra muscular. Tu volumen o ejecución está por debajo del umbral mínimo."
                }
              </p>
            </div>

            <div className="flex items-center gap-2 self-end sm:self-center shrink-0">
              <button
                onClick={() => setBombeoState('low')}
                className={`px-2.5 py-1 text-[10px] font-bold rounded-lg border transition-all ${bombeoState === 'low' ? 'bg-red-950 border-red-800 text-red-400' : 'bg-slate-900 border-slate-800 text-slate-500 hover:text-slate-300'}`}
              >
                Bajo / Mal
              </button>
              <button
                onClick={() => setBombeoState('correct')}
                className={`px-2.5 py-1 text-[10px] font-bold rounded-lg border transition-all ${bombeoState === 'correct' ? 'bg-emerald-950 border-emerald-800 text-emerald-400' : 'bg-slate-900 border-slate-800 text-slate-500 hover:text-slate-300'}`}
              >
                Excelente
              </button>
            </div>
          </div>

          {/* Traffic Light 2: Disrupción */}
          <div className="p-4 rounded-xl border border-slate-800 bg-slate-950 flex flex-col sm:flex-row items-start justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className={`w-3.5 h-3.5 rounded-full ${disrupcionState === 'correct' ? 'bg-emerald-500 shadow-lg shadow-emerald-500/50' : 'bg-red-500 shadow-lg shadow-red-500/50'}`}></span>
                <strong className="text-sm text-slate-200">Semáforo 2: Disrupción Muscular (Post-entreno)</strong>
              </div>
              <p className="text-xs text-slate-400 leading-normal max-w-xl">
                {disrupcionState === 'correct'
                  ? "A las 24 o 48 horas sientes una ligera 'pesadez' o tensión al estirar el músculo. Hay conciencia física de trabajo."
                  : "Te sientes al 100% fresca al día siguiente, como si no hubieras pisado el gimnasio. El volumen fue de mantenimiento, no efectivo."
                }
              </p>
            </div>

            <div className="flex items-center gap-2 self-end sm:self-center shrink-0">
              <button
                onClick={() => setDisrupcionState('none')}
                className={`px-2.5 py-1 text-[10px] font-bold rounded-lg border transition-all ${disrupcionState === 'none' ? 'bg-red-950 border-red-800 text-red-400' : 'bg-slate-900 border-slate-800 text-slate-500 hover:text-slate-300'}`}
              >
                Nula / Cero
              </button>
              <button
                onClick={() => setDisrupcionState('correct')}
                className={`px-2.5 py-1 text-[10px] font-bold rounded-lg border transition-all ${disrupcionState === 'correct' ? 'bg-emerald-950 border-emerald-800 text-emerald-400' : 'bg-slate-900 border-slate-800 text-slate-500 hover:text-slate-300'}`}
              >
                Óptima
              </button>
            </div>
          </div>

          {/* Traffic Light 3: Rendimiento */}
          <div className="p-4 rounded-xl border border-slate-800 bg-slate-950 flex flex-col sm:flex-row items-start justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className={`w-3.5 h-3.5 rounded-full ${rendimientoState === 'correct' ? 'bg-emerald-500 shadow-lg shadow-emerald-500/50' : 'bg-red-500 shadow-lg shadow-red-500/50'}`}></span>
                <strong className="text-sm text-slate-200">Semáforo 3: Rendimiento (Microciclo a Microciclo)</strong>
              </div>
              <p className="text-xs text-slate-400 leading-normal max-w-xl">
                {rendimientoState === 'correct'
                  ? "Semana a semana puedes sumar una repetición más o levantar un kilo extra manteniendo tu RIR. Estás en tu MEV o superior."
                  : "Te estancaste por completo en peso y repeticiones. Llegas sintiéndote fresca pero sin poder superar el récord anterior."
                }
              </p>
            </div>

            <div className="flex items-center gap-2 self-end sm:self-center shrink-0">
              <button
                onClick={() => setRendimientoState('stagnation')}
                className={`px-2.5 py-1 text-[10px] font-bold rounded-lg border transition-all ${rendimientoState === 'stagnation' ? 'bg-red-950 border-red-800 text-red-400' : 'bg-slate-900 border-slate-800 text-slate-500 hover:text-slate-300'}`}
              >
                Estancado
              </button>
              <button
                onClick={() => setRendimientoState('correct')}
                className={`px-2.5 py-1 text-[10px] font-bold rounded-lg border transition-all ${rendimientoState === 'correct' ? 'bg-emerald-950 border-emerald-800 text-emerald-400' : 'bg-slate-900 border-slate-800 text-slate-500 hover:text-slate-300'}`}
              >
                Progresando
              </button>
            </div>
          </div>

          {/* Sumar Series trigger evaluation logic */}
          {bombeoState === 'low' && disrupcionState === 'none' && rendimientoState === 'stagnation' ? (
            <div className="bg-red-950/20 border border-red-900/60 text-red-300 p-4 rounded-xl text-xs space-y-1">
              <strong>Diagnóstico: Volumen Inefectivo Confirmado.</strong>
              <p>Se alinearon los tres semáforos negativos. Al final de este mesociclo (en la semana de descarga), debes planificar agregar <strong>1 serie extra</strong> a este grupo muscular en el primer microciclo del mesociclo siguiente.</p>
            </div>
          ) : (
            <div className="bg-slate-900/50 border border-slate-800 text-slate-400 p-4 rounded-xl text-xs">
              <strong>Regla 'No lo toques si funciona':</strong> Si estás progresando en cargas o repeticiones, el volumen actual es el correcto. Aumentar series por premio es un error garrafal. Mantén la estructura estable.
            </div>
          )}

        </div>
      </div>

    </div>

    </div>
  );
}
