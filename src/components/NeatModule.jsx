import { useState } from 'react';
import { Footprints, Sun, Clock, PhoneCall, Sparkles, CheckCircle2, Flame, Award } from 'lucide-react';

export default function NeatModule() {
  const [completedMicrodose, setCompletedMicrodose] = useState({
    matutina: false,
    postAlmuerzo: false,
    postCena: false,
    pomodoro: false,
    walkTalk: false
  });

  const toggleMicrodose = (key) => {
    setCompletedMicrodose(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const completedCount = Object.values(completedMicrodose).filter(Boolean).length;

  return (
    <div className="space-y-8 animate-fade-in text-[#CCD0CF] max-w-6xl mx-auto px-1">
      
      {/* 1. Header Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-[#11212D] border border-[#253745] p-6 md:p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 backdrop-blur-md">
        <div className="space-y-2 max-w-2xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#06141B] text-emerald-400 border border-[#253745] font-mono">
            <Footprints className="w-3.5 h-3.5" />
            Gasto Energético No Asociado al Ejercicio
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold font-outfit text-white tracking-tight leading-tight">
            Protocolo NEAT (10,000 - 15,000 Pasos Diarios)
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed font-sans">
            El NEAT es el motor principal de la oxidación de grasa. La caminadora del gimnasio suma 3,000 a 4,000 pasos LISS; el resto se acumula mediante micro-dosis estratégicas.
          </p>
        </div>

        <div className="bg-[#06141B] border border-[#253745] rounded-2xl p-4 text-center shrink-0 w-full md:w-auto space-y-1">
          <span className="text-[10px] uppercase tracking-wider font-bold text-[#9BA8AB] font-mono">Meta Innegociable</span>
          <div className="text-2xl font-bold font-outfit text-emerald-400">10k - 15k</div>
          <span className="text-[10px] text-slate-400 block font-mono">pasos / día</span>
        </div>
      </div>

      {/* 2. Tracker de Micro-Dosis Diarias */}
      <div className="glass-panel border border-[#253745] rounded-2xl p-6 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#253745]">
          <div>
            <h3 className="font-bold text-lg text-white font-outfit flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-emerald-400" />
              Micro-Dosis de Pasos (Checklist Diaria)
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              Estrategia infalible para alcanzar los 15,000 pasos sin agotamiento mental
            </p>
          </div>
          <div className="flex items-center gap-2 bg-[#06141B] border border-[#253745] px-3 py-1.5 rounded-xl font-mono">
            <Award className="w-4 h-4 text-emerald-400" />
            <span className="text-xs font-bold text-emerald-300">
              {completedCount} de 5 Completadas
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          
          {/* Microdosis 1 */}
          <div 
            onClick={() => toggleMicrodose('matutina')}
            className={`p-4 rounded-xl border transition-all duration-200 cursor-pointer space-y-2.5 ${completedMicrodose.matutina ? 'bg-[#06141B] border-emerald-500/50' : 'bg-[#06141B] border-[#253745] hover:border-[#4A5C6A]'}`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Sun className="w-4 h-4 text-amber-400" />
                <span className="font-bold text-xs text-white font-outfit">1. Activación Basal Matutina</span>
              </div>
              <CheckCircle2 className={`w-4 h-4 ${completedMicrodose.matutina ? 'text-emerald-400 fill-emerald-400/20' : 'text-[#4A5C6A]'}`} />
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Caminata de 10 a 15 minutos al despertar recibiendo luz solar directa.
            </p>
            <div className="text-[10px] font-mono text-emerald-400 font-semibold bg-[#11212D] px-2 py-0.5 rounded w-fit border border-[#253745]">
              +1,000 a 1,500 pasos
            </div>
          </div>

          {/* Microdosis 2 */}
          <div 
            onClick={() => toggleMicrodose('postAlmuerzo')}
            className={`p-4 rounded-xl border transition-all duration-200 cursor-pointer space-y-2.5 ${completedMicrodose.postAlmuerzo ? 'bg-[#06141B] border-emerald-500/50' : 'bg-[#06141B] border-[#253745] hover:border-[#4A5C6A]'}`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Footprints className="w-4 h-4 text-[#9BA8AB]" />
                <span className="font-bold text-xs text-white font-outfit">2. Caminata Post-Almuerzo</span>
              </div>
              <CheckCircle2 className={`w-4 h-4 ${completedMicrodose.postAlmuerzo ? 'text-emerald-400 fill-emerald-400/20' : 'text-[#4A5C6A]'}`} />
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              10 a 15 minutos de caminata continua inmediatamente después de almorzar.
            </p>
            <div className="text-[10px] font-mono text-emerald-400 font-semibold bg-[#11212D] px-2 py-0.5 rounded w-fit border border-[#253745]">
              Mejora sensibilidad a la insulina
            </div>
          </div>

          {/* Microdosis 3 */}
          <div 
            onClick={() => toggleMicrodose('postCena')}
            className={`p-4 rounded-xl border transition-all duration-200 cursor-pointer space-y-2.5 ${completedMicrodose.postCena ? 'bg-[#06141B] border-emerald-500/50' : 'bg-[#06141B] border-[#253745] hover:border-[#4A5C6A]'}`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Footprints className="w-4 h-4 text-[#9BA8AB]" />
                <span className="font-bold text-xs text-white font-outfit">3. Caminata Post-Cena</span>
              </div>
              <CheckCircle2 className={`w-4 h-4 ${completedMicrodose.postCena ? 'text-emerald-400 fill-emerald-400/20' : 'text-[#4A5C6A]'}`} />
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              10 a 15 minutos de caminata ligera tras cenar antes de relajarse.
            </p>
            <div className="text-[10px] font-mono text-emerald-400 font-semibold bg-[#11212D] px-2 py-0.5 rounded w-fit border border-[#253745]">
              Aplasia de glucosa nocturna
            </div>
          </div>

          {/* Microdosis 4 */}
          <div 
            onClick={() => toggleMicrodose('pomodoro')}
            className={`p-4 rounded-xl border transition-all duration-200 cursor-pointer space-y-2.5 ${completedMicrodose.pomodoro ? 'bg-[#06141B] border-emerald-500/50' : 'bg-[#06141B] border-[#253745] hover:border-[#4A5C6A]'}`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#9BA8AB]" />
                <span className="font-bold text-xs text-white font-outfit">4. Pausas Activas Pomodoro</span>
              </div>
              <CheckCircle2 className={`w-4 h-4 ${completedMicrodose.pomodoro ? 'text-emerald-400 fill-emerald-400/20' : 'text-[#4A5C6A]'}`} />
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              5 minutos de caminata en interiores entre bloques de trabajo enfocado.
            </p>
            <div className="text-[10px] font-mono text-[#CCD0CF] font-semibold bg-[#11212D] px-2 py-0.5 rounded w-fit border border-[#253745]">
              Rompe el sedentarismo
            </div>
          </div>

          {/* Microdosis 5 */}
          <div 
            onClick={() => toggleMicrodose('walkTalk')}
            className={`p-4 rounded-xl border transition-all duration-200 cursor-pointer space-y-2.5 ${completedMicrodose.walkTalk ? 'bg-[#06141B] border-emerald-500/50' : 'bg-[#06141B] border-[#253745] hover:border-[#4A5C6A]'}`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <PhoneCall className="w-4 h-4 text-[#9BA8AB]" />
                <span className="font-bold text-xs text-white font-outfit">5. Llamadas Dinámicas (Walk & Talk)</span>
              </div>
              <CheckCircle2 className={`w-4 h-4 ${completedMicrodose.walkTalk ? 'text-emerald-400 fill-emerald-400/20' : 'text-[#4A5C6A]'}`} />
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Atender llamadas telefónicas o audios caminando en lugar de estar sentada.
            </p>
            <div className="text-[10px] font-mono text-[#CCD0CF] font-semibold bg-[#11212D] px-2 py-0.5 rounded w-fit border border-[#253745]">
              Acumulación pasiva
            </div>
          </div>

        </div>
      </div>

      {/* 3. Desglose Estratégico de la Acumulación */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Card 1: Cardio LISS vs NEAT */}
        <div className="glass-panel border border-[#253745] rounded-2xl p-6 space-y-4">
          <h4 className="font-bold text-base text-white flex items-center gap-2 font-outfit">
            <Flame className="w-5 h-5 text-amber-400" />
            Cardio LISS en Caminadora vs. NEAT
          </h4>
          <div className="space-y-3 text-xs text-slate-300 leading-relaxed">
            <div className="p-3 bg-[#06141B] rounded-xl border border-[#253745]">
              <strong className="text-emerald-400 font-bold block mb-1">Cardio LISS (20-30 min)</strong>
              Sumás de 3,000 a 4,000 pasos directos al terminar el entrenamiento de fuerza en el gimnasio.
            </div>
            <div className="p-3 bg-[#06141B] rounded-xl border border-[#253745]">
              <strong className="text-[#CCD0CF] font-bold block mb-1">Pasos de Vida Diaria (NEAT)</strong>
              Los 7,000 a 11,000 pasos restantes se acumulan a lo largo del día sin fatiga central acumulada.
            </div>
          </div>
        </div>

        {/* Card 2: Por qué el NEAT es la Clave */}
        <div className="glass-panel border border-[#253745] rounded-2xl p-6 space-y-4">
          <h4 className="font-bold text-base text-white flex items-center gap-2 font-outfit">
            <Sparkles className="w-5 h-5 text-emerald-400" />
            Beneficios Metabólicos Directos
          </h4>
          <ul className="space-y-2 text-xs text-slate-300 list-disc pl-4 leading-relaxed font-sans">
            <li><strong>Preserva la masa muscular (29,925 kg):</strong> A diferencia del cardio de alta intensidad constante, el NEAT no eleva el cortisol ni degrada tejido muscular.</li>
            <li><strong>Optimiza la glucemia postprandial:</strong> Caminar tras comer reduce los picos de insulina y deriva nutrientes directamente a la resíntesis de glucógeno muscular.</li>
            <li><strong>Facilita el déficit calórico:</strong> Permite consumir más calorías diarias manteniendo una tasa de pérdida grasa continua.</li>
          </ul>
        </div>

      </div>

    </div>
  );
}
