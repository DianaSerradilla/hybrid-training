import React from 'react';
import { Trophy, Layers, ShieldCheck, Dumbbell, Sparkles, CheckCircle2 } from 'lucide-react';
import { calisthenicsSkills, biomechanicsAnchorSummary } from '../data/macrocycleData';

export default function SkillsCalisthenicsModule() {
  return (
    <div className="space-y-8 max-w-7xl mx-auto w-full text-[#CCD0CF]">

      {/* BANNER PRINCIPAL */}
      <div className="relative overflow-hidden rounded-3xl bg-[#11212D] border border-[#253745] p-6 md:p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 backdrop-blur-md">
        <div className="space-y-3 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#06141B] text-[#CCD0CF] border border-[#253745] font-mono">
            <Sparkles className="w-3.5 h-3.5 text-[#9BA8AB]" />
            Progreso Neuromuscular & Control del Peso Corporal
          </div>
          <h2 className="text-2xl md:text-4xl font-extrabold font-outfit text-white tracking-tight leading-tight">
            Skills & Calistenia
          </h2>
          <p className="text-xs md:text-sm text-slate-300 leading-relaxed font-sans">
            Línea de tiempo de progresiones por vectores de fuerza, prerequisitos innegociables y anclajes biomecánicos escapulares/pélvicos.
          </p>
        </div>

        <div className="shrink-0 self-start md:self-center bg-[#06141B] border border-[#253745] p-4 rounded-2xl text-center">
          <span className="text-[10px] text-[#9BA8AB] font-mono block uppercase font-bold">Meta del Macrociclo</span>
          <span className="text-xs font-bold text-emerald-400 font-outfit mt-1 block">
            10 Dominadas • 12 Fondos • 15 Flexiones • 5 Pikes
          </span>
        </div>
      </div>

      {/* LÍNEA DE TIEMPO DE SKILLS (POR VECTORES) */}
      <div className="glass-panel p-6 rounded-2xl border border-[#253745] space-y-6">
        <div className="border-b border-[#253745] pb-4 flex items-center gap-3">
          <div className="p-2.5 bg-[#06141B] border border-[#253745] rounded-xl">
            <Trophy className="w-6 h-6 text-[#9BA8AB]" />
          </div>
          <div>
            <span className="text-[10px] font-bold text-[#9BA8AB] uppercase tracking-widest font-mono">RUTA DE PROGRESIÓN</span>
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
            <div key={idx} className="bg-[#06141B] border border-[#253745] rounded-2xl p-5 space-y-5 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center gap-2 border-b border-[#253745] pb-3">
                  <div className="p-2 bg-[#11212D] border border-[#253745] rounded-lg">
                    <Layers className="w-4 h-4 text-[#9BA8AB]" />
                  </div>
                  <h4 className="text-sm font-bold text-white font-outfit tracking-wide">
                    Vector: {vectorBlock.vector}
                  </h4>
                </div>

                <div className="space-y-3">
                  {vectorBlock.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="bg-[#11212D] border border-[#253745] p-3.5 rounded-xl space-y-2 hover:border-[#4A5C6A] transition-colors">
                      <div className="flex items-center justify-between gap-2">
                        <strong className="text-xs font-bold text-slate-100 font-outfit">{skill.name}</strong>
                        <span className={`text-[8.5px] font-bold px-2 py-0.5 rounded font-mono uppercase border ${
                          skill.difficulty.includes('Básico') ? 'bg-[#06141B] text-emerald-400 border-emerald-500/40' :
                          skill.difficulty.includes('Intermedio') ? 'bg-[#06141B] text-[#CCD0CF] border-[#4A5C6A]' :
                          skill.difficulty.includes('Avanzado') ? 'bg-[#06141B] text-[#9BA8AB] border-[#4A5C6A]' :
                          'bg-[#06141B] text-amber-400 border-amber-500/40'
                        }`}>
                          {skill.difficulty}
                        </span>
                      </div>
                      <div className="text-[11px] text-slate-400 space-y-1 pt-1 border-t border-[#253745]">
                        <p><span className="text-[#9BA8AB] font-semibold font-mono">Requisito:</span> {skill.prereq}</p>
                        <p><span className="text-[#9BA8AB] font-semibold font-mono">Ruta:</span> {skill.route}</p>
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
      <div className="glass-panel p-6 rounded-2xl border border-[#253745] space-y-6">
        <div className="border-b border-[#253745] pb-4 flex items-center gap-3">
          <div className="p-2.5 bg-[#06141B] border border-[#253745] rounded-xl">
            <ShieldCheck className="w-6 h-6 text-emerald-400" />
          </div>
          <div>
            <span className="text-[10px] font-bold text-[#9BA8AB] uppercase tracking-widest font-mono">CERROJOS ANATÓMICOS</span>
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
          <div className="p-5 bg-[#06141B] rounded-2xl border border-[#253745] space-y-3 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="flex items-center gap-2 border-b border-[#253745] pb-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <strong className="text-sm font-bold text-emerald-400 font-outfit">
                  {biomechanicsAnchorSummary.retroversionPelvica.name}
                </strong>
              </div>
              <p className="text-slate-300 text-xs leading-relaxed">
                {biomechanicsAnchorSummary.retroversionPelvica.desc}
              </p>
            </div>
            <div className="p-3 bg-[#11212D] rounded-xl border border-[#253745] text-[11px] text-slate-300 font-mono">
              <span className="text-emerald-400 font-bold block mb-0.5">Aplicación Clínica:</span>
              {biomechanicsAnchorSummary.retroversionPelvica.app}
            </div>
          </div>

          {/* Anclajes Escapulares */}
          <div className="p-5 bg-[#06141B] rounded-2xl border border-[#253745] space-y-3 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="flex items-center gap-2 border-b border-[#253745] pb-2">
                <CheckCircle2 className="w-4 h-4 text-[#9BA8AB]" />
                <strong className="text-sm font-bold text-white font-outfit">
                  Anclajes Escapulares (Cintura Escapular)
                </strong>
              </div>
              <div className="space-y-2 text-xs text-slate-300">
                <div className="p-2.5 bg-[#11212D] rounded-lg border border-[#253745]">
                  <span className="text-[#9BA8AB] font-bold font-mono">Retracción:</span> {biomechanicsAnchorSummary.escapularAnchor.retraccion}
                </div>
                <div className="p-2.5 bg-[#11212D] rounded-lg border border-[#253745]">
                  <span className="text-[#9BA8AB] font-bold font-mono">Protracción:</span> {biomechanicsAnchorSummary.escapularAnchor.protraccion}
                </div>
                <div className="p-2.5 bg-[#11212D] rounded-lg border border-[#253745]">
                  <span className="text-[#9BA8AB] font-bold font-mono">Depresión:</span> {biomechanicsAnchorSummary.escapularAnchor.depresion}
                </div>
                <div className="p-2.5 bg-[#11212D] rounded-lg border border-[#253745]">
                  <span className="text-[#9BA8AB] font-bold font-mono">Elevación:</span> {biomechanicsAnchorSummary.escapularAnchor.elevacion}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
