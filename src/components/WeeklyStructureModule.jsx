import React from 'react';
import { CalendarRange, Clock, Dumbbell, Activity, Footprints, Target, Sparkles, CheckCircle2, ShieldAlert } from 'lucide-react';

export default function WeeklyStructureModule() {
  const scheduleItems = [
    {
      dayNum: "Día 1",
      dayName: "Lunes",
      target: "PUSH",
      color: "border-[#253745] bg-[#06141B] text-[#CCD0CF]",
      badgeBg: "bg-[#253745] text-[#CCD0CF] border-[#4A5C6A]",
      breakdown: [
        { label: "10 min", detail: "Handstand", type: "skill" },
        { label: "60 min", detail: "Fuerza", type: "strength" },
        { label: "20 min", detail: "Cardio LISS", type: "cardio" }
      ],
      desc: "Empujes de pecho, hombros y tríceps. Calistenia neural (Pike Push-ups & Dips) + Hipertrofia miofibrilar pesada en palancas."
    },
    {
      dayNum: "Día 2",
      dayName: "Martes",
      target: "PULL",
      color: "border-[#253745] bg-[#06141B] text-[#CCD0CF]",
      badgeBg: "bg-[#253745] text-[#CCD0CF] border-[#4A5C6A]",
      breakdown: [
        { label: "10 min", detail: "Handstand", type: "skill" },
        { label: "60 min", detail: "Fuerza", type: "strength" },
        { label: "20 min", detail: "Cardio LISS", type: "cardio" }
      ],
      desc: "Tracciones verticales y horizontales de espalda y bíceps. Dominadas estrictas con retractación escapular + Remos pesados."
    },
    {
      dayNum: "Día 3",
      dayName: "Miércoles",
      target: "LEGS 1 (Quads)",
      color: "border-[#253745] bg-[#06141B] text-[#CCD0CF]",
      badgeBg: "bg-[#253745] text-[#CCD0CF] border-[#4A5C6A]",
      breakdown: [
        { label: "5 min", detail: "Calentamiento Articular", type: "warmup" },
        { label: "60 min", detail: "Fuerza", type: "strength" },
        { label: "20 min", detail: "Movilidad Pesada (Flex)", type: "mobility" }
      ],
      desc: "Dominancia de cuádriceps (Sentadillas pesadas en Hack/Prensa). Sin Handstand para reservar el SNC para el esfuerzo de piernas."
    },
    {
      dayNum: "Día 4",
      dayName: "Jueves",
      target: "TREN SUPERIOR HÍBRIDO",
      color: "border-[#253745] bg-[#06141B] text-[#CCD0CF]",
      badgeBg: "bg-[#253745] text-[#CCD0CF] border-[#4A5C6A]",
      breakdown: [
        { label: "10 min", detail: "Handstand", type: "skill" },
        { label: "60 min", detail: "Fuerza", type: "strength" },
        { label: "20 min", detail: "Cardio LISS", type: "cardio" }
      ],
      desc: "Estímulo equilibrado de torso completo (Empuje + Tracción acoplados) para maximizar la frecuencia semanal."
    },
    {
      dayNum: "Día 5",
      dayName: "Viernes",
      target: "LEGS 2 (Isquios/Glúteo)",
      color: "border-[#253745] bg-[#06141B] text-[#CCD0CF]",
      badgeBg: "bg-[#253745] text-[#CCD0CF] border-[#4A5C6A]",
      breakdown: [
        { label: "5 min", detail: "Calentamiento Articular", type: "warmup" },
        { label: "60 min", detail: "Fuerza", type: "strength" },
        { label: "20 min", detail: "Movilidad Pesada (Flex)", type: "mobility" }
      ],
      desc: "Cadena posterior y bisagra de cadera (Peso Muerto Rumano RDL + Hip Thrust). Sin Handstand para cuidar el agarre y SNC."
    },
    {
      dayNum: "Día 6",
      dayName: "Sábado",
      target: "BRAZOS Y CORE (Comodín)",
      color: "border-[#253745] bg-[#06141B] text-[#CCD0CF]",
      badgeBg: "bg-[#253745] text-[#CCD0CF] border-[#4A5C6A]",
      breakdown: [
        { label: "10 min", detail: "Handstand", type: "skill" },
        { label: "45 min", detail: "Fuerza", type: "strength" },
        { label: "30 min", detail: "Cardio LISS", type: "cardio" }
      ],
      desc: "Aislamiento hipertrófico de bíceps, tríceps y core + vaciado cardiovascular final de la semana."
    },
    {
      dayNum: "Día 7",
      dayName: "Domingo",
      target: "DESCANSO ACTIVO",
      color: "border-[#253745] bg-[#06141B] text-[#CCD0CF]",
      badgeBg: "bg-[#253745] text-[#CCD0CF] border-[#4A5C6A]",
      breakdown: [
        { label: "20 min", detail: "Movilidad Pesada (Flex)", type: "mobility" },
        { label: "NEAT", detail: "Caminata Ligera (10k-15k pasos)", type: "neat" }
      ],
      desc: "Descompresión articular, estiramientos pasivos profundos y caminata de flujo sanguíneo en Zona 2."
    }
  ];

  return (
    <div className="space-y-6 max-w-7xl mx-auto w-full">

      {/* Header Panel */}
      <div className="glass-panel p-6 rounded-2xl border border-[#253745] space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-[#9BA8AB] font-bold text-xs uppercase tracking-widest font-mono">
            <CalendarRange className="w-5 h-5 text-[#9BA8AB]" />
            Planificación Oficial PDF
          </div>
          <span className="text-[10px] font-bold bg-[#06141B] text-[#CCD0CF] border border-[#253745] px-3 py-1 rounded-full uppercase tracking-wider font-mono">
            7 Días Semanales
          </span>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold font-outfit text-white">
          Estructura Semanal
        </h2>
        <p className="text-xs md:text-sm text-slate-300">
          Rutinas diarias PPL + Híbrido: distribución precisa del tiempo de Handstand, Fuerza, Cardio LISS y Movilidad.
        </p>
      </div>

      {/* 7-Days Schedule Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {scheduleItems.map((item, idx) => (
          <div 
            key={idx} 
            className={`glass-panel p-5 rounded-2xl border ${item.color} space-y-4 hover:border-[#4A5C6A] transition-all duration-200 flex flex-col justify-between`}
          >
            <div className="space-y-3">
              {/* Day Header */}
              <div className="flex items-center justify-between border-b border-[#253745] pb-3">
                <div>
                  <span className="text-[10px] font-bold text-[#9BA8AB] uppercase tracking-widest block font-mono">
                    {item.dayNum} ({item.dayName})
                  </span>
                  <h3 className="text-base font-bold font-outfit text-white mt-0.5">
                    {item.target}
                  </h3>
                </div>
                <span className={`text-[10px] font-bold border px-2.5 py-1 rounded-lg uppercase ${item.badgeBg}`}>
                  {item.dayName}
                </span>
              </div>

              {/* Time Breakdown Bullets */}
              <div className="bg-[#06141B] p-3.5 rounded-xl border border-[#253745] space-y-2">
                <span className="text-[10px] font-bold text-[#4A5C6A] uppercase tracking-wider block font-mono">
                  Distribución del Bloque:
                </span>
                <ul className="space-y-1.5 text-xs text-slate-200 font-sans">
                  {item.breakdown.map((b, bIdx) => (
                    <li key={bIdx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#9BA8AB]"></span>
                      <span className="font-bold text-[#CCD0CF] font-mono">{b.label}</span>
                      <span className="text-slate-300">{b.detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Description */}
              <p className="text-xs text-slate-400 leading-relaxed pt-1">
                {item.desc}
              </p>
            </div>

            {/* Bottom Footer Indicator */}
            <div className="pt-3 border-t border-[#253745] text-[11px] font-medium text-slate-400 flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                Rutina Oficial
              </span>
              <span className="font-mono text-[10px] text-[#4A5C6A]">PDF Diana</span>
            </div>
          </div>
        ))}
      </div>

      {/* Summary Banner */}
      <div className="glass-panel p-5 rounded-2xl border border-[#253745] bg-[#06141B] flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-300">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-[#253745] border border-[#4A5C6A] rounded-xl shrink-0">
            <ShieldAlert className="w-5 h-5 text-amber-400" />
          </div>
          <div>
            <strong className="text-white block font-outfit text-sm">Regla de Distribución Neural:</strong>
            Los días de Cuádriceps (Miércoles) e Isquios/Glúteo (Viernes) eliminan la práctica previa de Handstand para reservar el 100% del Sistema Nervioso Central (SNC) y la fuerza de agarre antes de las cargas pesadas.
          </div>
        </div>
      </div>

    </div>
  );
}
