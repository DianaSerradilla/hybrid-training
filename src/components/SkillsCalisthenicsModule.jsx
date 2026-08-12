import React from 'react';
import { Trophy, Layers, ShieldCheck, Dumbbell, Sparkles, CheckCircle2 } from 'lucide-react';
import { calisthenicsSkills, biomechanicsAnchorSummary } from '../data/macrocycleData';

export default function SkillsCalisthenicsModule() {
  return (
    <div className="space-y-8 max-w-7xl mx-auto w-full text-slate-100">

      {/* BANNER PRINCIPAL */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-fuchsia-950/60 via-indigo-950/60 to-slate-950/80 border border-fuchsia-500/30 p-6 md:p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 shadow-2xl backdrop-blur-md glow-fuchsia">
        <div className="space-y-3 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-fuchsia-500/10 text-fuchsia-400 border border-fuchsia-500/20 font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            Progreso Neuromuscular & Control del Peso Corporal
          </div>
          <h2 className="text-2xl md:text-4xl font-extrabold font-outfit text-white tracking-tight leading-tight">
            Skills & Calistenia
          </h2>
          <p className="text-xs md:text-sm text-slate-300 leading-relaxed font-sans">
            Línea de tiempo de progresiones por vectores de fuerza, prerequisitos innegociables y anclajes biomecánicos escapulares/pélvicos.
          </p>
        </div>

        <div className="shrink-0 self-start md:self-center bg-slate-950/80 border border-slate-800 p-4 rounded-2xl text-center">
          <span className="text-[10px] text-slate-400 font-mono block uppercase font-bold">Meta del Macrociclo</span>
          <span className="text-xs font-bold text-fuchsia-400 font-outfit mt-1 block">
            10 Dominadas • 12 Fondos • 15 Flexiones • 5 Pikes
          </span>
        </div>
      </div>

      {/* LÍNEA DE TIEMPO DE SKILLS (POR VECTORES) */}
      <div className="glass-panel p-6 rounded-2xl glow-fuchsia space-y-6">
        <div className="border-b border-slate-800 pb-4 flex items-center gap-3">
          <div className="p-2.5 bg-fuchsia-600/10 border border-fuchsia-500/20 rounded-xl">
            <Trophy className="w-6 h-6 text-fuchsia-400" />
          </div>
          <div>
            <span className="text-[10px] font-bold text-fuchsia-400 uppercase tracking-widest font-mono">RUTA DE PROGRESIÓN</span>
            <h3 className="font-bold text-lg md:text-xl text-white font-outfit mt-0.5">
              Línea de Tiempo de Skills en Calistenia
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              Clasificación por vector anatómico y orden estricto de dificultad biológica
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {calisthenicsSkills.map((vectorBlock, idx) => (
            <div key={idx} className="bg-slate-950/80 border border-slate-850 rounded-2xl p-5 space-y-5 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center gap-2 border-b border-slate-800 pb-3">
                  <div className="p-2 bg-indigo-500/10 border border-indigo-500/20 rounded-lg">
                    <Layers className="w-4 h-4 text-indigo-400" />
                  </div>
                  <h4 className="text-sm font-bold text-white font-outfit tracking-wide">
                    Vector: {vectorBlock.vector}
                  </h4>
                </div>

                <div className="space-y-3">
                  {vectorBlock.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="bg-slate-900/60 border border-slate-800 p-3.5 rounded-xl space-y-2 hover:border-slate-700 transition-colors">
                      <div className="flex items-center justify-between gap-2">
                        <strong className="text-xs font-bold text-slate-100 font-outfit">{skill.name}</strong>
                        <span className={`text-[8.5px] font-bold px-2 py-0.5 rounded font-mono uppercase border ${
                          skill.difficulty.includes('Básico') ? 'bg-emerald-950 text-emerald-400 border-emerald-800' :
                          skill.difficulty.includes('Intermedio') ? 'bg-indigo-950 text-indigo-400 border-indigo-800' :
                          skill.difficulty.includes('Avanzado') ? 'bg-fuchsia-950 text-fuchsia-400 border-fuchsia-800' :
                          'bg-amber-950 text-amber-400 border-amber-800'
                        }`}>
                          {skill.difficulty}
                        </span>
                      </div>
                      <div className="text-[11px] text-slate-400 space-y-1 pt-1 border-t border-slate-850">
                        <p><span className="text-slate-300 font-semibold font-mono">Requisito:</span> {skill.prereq}</p>
                        <p><span className="text-slate-300 font-semibold font-mono">Ruta:</span> {skill.route}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ANCLAJES BIOMECÁNICOS */}
      <div className="glass-panel p-6 rounded-2xl glow-emerald space-y-6">
        <div className="border-b border-slate-800 pb-4 flex items-center gap-3">
          <div className="p-2.5 bg-emerald-600/10 border border-emerald-500/20 rounded-xl">
            <ShieldCheck className="w-6 h-6 text-emerald-400" />
          </div>
          <div>
            <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest font-mono">CERROJOS ANATÓMICOS</span>
            <h3 className="font-bold text-lg md:text-xl text-white font-outfit mt-0.5">
              Anclajes Biomecánicos en Calistenia
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              Posiciones pélvicas y escapulares obligatorias para máxima palanca y protección articular
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
          {/* Retroversión Pélvica */}
          <div className="p-5 bg-slate-950/80 rounded-2xl border border-slate-850 space-y-3 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="flex items-center gap-2 border-b border-slate-800 pb-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <strong className="text-sm font-bold text-emerald-400 font-outfit">
                  {biomechanicsAnchorSummary.retroversionPelvica.name}
                </strong>
              </div>
              <p className="text-slate-300 text-xs leading-relaxed">
                {biomechanicsAnchorSummary.retroversionPelvica.desc}
              </p>
            </div>
            <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 text-[11px] text-slate-300 font-mono">
              <span className="text-emerald-400 font-bold block mb-0.5">Aplicación Clínica:</span>
              {biomechanicsAnchorSummary.retroversionPelvica.app}
            </div>
          </div>

          {/* Anclajes Escapulares */}
          <div className="p-5 bg-slate-950/80 rounded-2xl border border-slate-850 space-y-3 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="flex items-center gap-2 border-b border-slate-800 pb-2">
                <CheckCircle2 className="w-4 h-4 text-indigo-400" />
                <strong className="text-sm font-bold text-indigo-300 font-outfit">
                  Anclajes Escapulares (Cintura Escapular)
                </strong>
              </div>
              <div className="space-y-2 text-xs text-slate-300">
                <div className="p-2.5 bg-slate-900/90 rounded-lg border border-slate-800">
                  <span className="text-indigo-400 font-bold font-mono">Retracción:</span> {biomechanicsAnchorSummary.escapularAnchor.retraccion}
                </div>
                <div className="p-2.5 bg-slate-900/90 rounded-lg border border-slate-800">
                  <span className="text-indigo-400 font-bold font-mono">Protracción:</span> {biomechanicsAnchorSummary.escapularAnchor.protraccion}
                </div>
                <div className="p-2.5 bg-slate-900/90 rounded-lg border border-slate-800">
                  <span className="text-indigo-400 font-bold font-mono">Depresión:</span> {biomechanicsAnchorSummary.escapularAnchor.depresion}
                </div>
                <div className="p-2.5 bg-slate-900/90 rounded-lg border border-slate-800">
                  <span className="text-indigo-400 font-bold font-mono">Elevación:</span> {biomechanicsAnchorSummary.escapularAnchor.elevacion}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
