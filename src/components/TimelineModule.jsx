import React, { useState } from 'react';
import {
  ShieldAlert, Trophy, Zap, Layers, Activity, Flame, CheckCircle2
} from 'lucide-react';
import { macrocycleWeeks } from '../data/macrocycleData';

const gymMesoData = {
  1: {
    title: "Mesociclo 1: Rango Base de Hipertrofia (Semanas 1 a 4)",
    desc: "Bloque enfocado en establecer la base de volumen e hipertrofia. Las series de los ejercicios principales se trabajan a 8-10 repeticiones con RIR controlado para dominar el patrón biomecánico."
  },
  2: {
    title: "Mesociclo 2: Rango de Hipertrofia Pesada (Semanas 5 a 8)",
    desc: "Bloque enfocado en el aumento de la tensión mecánica y la sobrecarga progresiva. Bajamos a rangos de 6-8 repeticiones en compuestos grandes con foco en daño tisular profundo."
  },
  3: {
    title: "Mesociclo 3: El Bloque de Fuerza Máxima y Peaking (Semanas 9 a 12)",
    desc: "Bloque enfocado en la fuerza absoluta y peaking. Reducción drástica de repeticiones (4-6 / clusters) para reclutamiento neural máximo y búsqueda de récords personales (PR)."
  }
};

const calisthenicsMesoData = {
  1: {
    title: "Mesociclo 1: Acondicionamiento Neuromuscular y Mielinización (Semanas 1 a 4)",
    target: "Objetivo: Construir la autopista nerviosa y establecer los cerrojos biomecánicos (depresión, retracción y protracción escapular). Lograr 7 dominadas, 10 fondos, 12 flexiones."
  },
  2: {
    title: "Mesociclo 2: Sobrecarga Excéntrica y Densidad Contráctil (Semanas 5 a 8)",
    target: "Objetivo: Construcción del \"hardware\". Hipertrofia miofibrilar y consolidación de la fuerza base. Lograr 8-9 dominadas, 11 fondos, 14 flexiones, 2-3 pike push-ups."
  },
  3: {
    title: "Mesociclo 3: Intensificación, Tolerancia Láctica y Peaking (Semanas 9 a 12)",
    target: "Objetivo: Entrenar la vía glucolítica para exprimir repeticiones continuas, ejecutar el TEST OFICIAL y consolidar el rendimiento."
  }
};

const calisthenicsWeeksData = {
  1: {
    title: "Microciclo 1 (Semana 1 - Menstruación): Descarga y Resíntesis",
    desc: "Disipación de fatiga inicial y oxigenación del tejido conectivo.",
    methodology: "Metodología: Rango Completo Asistido (Bandas Pesadas). Ejecución súper fluida y terapéutica para bombear sangre sin estrés articular. RIR 3."
  },
  2: {
    title: "Microciclo 2 (Semana 2 - Fase Folicular): Adaptación Base",
    desc: "El SNC mapea el patrón motor con la energía en aumento.",
    methodology: "Metodología: Acomodación de Resistencia (Bandas Elásticas). Se busca acumular volumen limpio en rango completo asistiéndote solo en los puntos de mayor desventaja mecánica. RIR 2."
  },
  3: {
    title: "Microciclo 3 (Semana 3 - Fase Ovulatoria): Clímax Neural",
    desc: "Máximo estrés neurológico aprovechando el pico hormonal para forzar la supercompensación de la vaina de mielina.",
    methodology: "Metodología: Entrenamiento Excéntrico (Negativas Lentas). Fases excéntricas de 4-5 segundos al final de las series para reclutar las fibras de más alto umbral. RIR 0-1."
  },
  4: {
    title: "Microciclo 4 (Semana 4 - Fase Lútea): Expansión de Capacidad",
    desc: "Se educa a la placa motora a tolerar volumen bajo fatiga controlada (retención de líquidos/SPM).",
    methodology: "Metodología: Método Piramidal Sub-máximo. Series ascendentes y descendentes con descansos intermedios. Mantienes el volumen, pero sin tocar el fallo para proteger el SNC. RIR 1 estricto."
  },
  5: {
    title: "Microciclo 5 (Semana 5 - Menstruación): Descarga Tisular",
    desc: "Fusión de nuevos mionúcleos y consolidación de tejido denso.",
    methodology: "Metodología: Rango Completo Asistido. Volumen cortado al 50%, máxima asistencia. RIR 3."
  },
  6: {
    title: "Microciclo 6 (Semana 6 - Fase Folicular): Reinicio y Choque Isométrico",
    desc: "Introducción a tiempos bajo tensión (TUT) prolongados preparando el cuerpo para cargas pesadas.",
    methodology: "Metodología: Isometrías Estratégicas. Pausas estáticas de 2 segundos en los puntos de máxima contracción concéntrica para regenerar tejido conectivo y vencer el stress shielding. RIR 2."
  },
  7: {
    title: "Microciclo 7 (Semana 7 - Fase Ovulatoria): Clímax Estructural",
    desc: "Miotrauma absoluto. El máximo daño tisular tolerable de todo el mesociclo, escudado por tu ventana biológica dorada.",
    methodology: "Metodología: Negativas Puras Lastradas / Híbridas. Series llevadas al fallo técnico, rematando con excéntricas hiper-lentas controlando la gravedad al milímetro (con lastre si es necesario). RIR 0."
  },
  8: {
    title: "Microciclo 8 (Semana 8 - Fase Lútea): Mecanotransducción Profunda",
    desc: "Tensión muscular pura sin agotar el sistema nervioso central.",
    methodology: "Metodología: Parciales Alargadas (LML). Trabajo exclusivo en el tercio inferior del movimiento (máximo estiramiento pasivo) para inducir sarcomerogénesis y explotar la rigidez de la titina. RIR 1 estricto."
  },
  9: {
    title: "Microciclo 9 (Semana 9 - Menstruación): Tapering y Descarga Estratégica",
    desc: "Resíntesis masiva de glucógeno y erradicación total de la fatiga del trimestre antes de la gran prueba.",
    methodology: "Metodología: Movimiento Fluido Asistido. Bandas elásticas, volumen al 50%. Ningún esfuerzo que genere lactato. RIR 3-4."
  },
  10: {
    title: "Microciclo 10 (Semana 10 - Fase Folicular): Adaptación a la Densidad",
    desc: "Acostumbrar al cuerpo a cargas casi máximas sin colapsar el patrón motor.",
    methodology: "Metodología: Series Cluster Lastrado (Conglomerados). Micro-series de 1 o 2 repeticiones intercaladas con descansos de 15 segundos para reponer ATP y evadir la acidez extrema. RIR 2."
  },
  11: {
    title: "Microciclo 11 (Semana 11 - Fase Ovulatoria): TEST Y RENDIMIENTO ABSOLUTO (PEAKING)",
    desc: "El sistema está hiper-excitado, rebosante de energía y en su punto hormonal más fuerte.",
    methodology: "Metodología: AMRAP Oficial (As Many Reps As Possible). Sin metodologías intra-serie, sin pausas, sin bandas. Ejecución pura y estricta el día sábado para registrar los PRs (Récords Personales) oficiales del macrociclo. RIR 0 absoluto."
  },
  12: {
    title: "Microciclo 12 (Semana 12 - Fase Lútea): Expansión del Umbral Láctico",
    desc: "Tras haber roto tus marcas, consolidamos la resistencia a la fatiga mientras sobrellevamos la hinchazón celular (cell swelling).",
    methodology: "Metodología: Clusters Densos / Piramidal. Aumentamos las repeticiones dentro del clúster. El SNC se expone a altísima demanda metabólica y resistencia láctica, pero queda totalmente prohibido llegar al fallo técnico para no lesionarse al cierre del ciclo. RIR 1 estricto."
  }
};

const blocksFisiologia = [
  {
    num: 1,
    title: "Bloque 1: Fuerza Relativa y Condicionamiento Neural (Calistenia Básica)",
    color: "border-[#253745] text-[#CCD0CF] bg-[#06141B]",
    badgeColor: "bg-[#253745] text-[#CCD0CF] border-[#4A5C6A]",
    bioState: "Tu SNC está intacto y fresco. Los depósitos de ATP intracelular están al 100%.",
    fisiologia: "Adaptación neural, sincronización de unidades motoras y mielinización axónica. Aquí no buscamos \"bombear\" el músculo, buscamos que tu cerebro aprenda a reclutar la mayor cantidad de fibras musculares en una fracción de segundo para vencer tu peso corporal (fuerza relativa).",
    practica: "Realizarás progresiones de dominadas, flexiones y fondos. Es un trabajo de pura tensión mecánica en desventaja anatómica, donde los estabilizadores del core (retroversión pélvica) y las escápulas (depresión/retracción) están trabajando al máximo. Si hay fatiga previa, la técnica colapsa y el riesgo de lesión se dispara.",
    clinicaRule: "En este bloque NUNCA se busca el fallo muscular total (RIR 0) que comprometa la postura. Terminada la serie, el sistema nervioso debe sentirse \"encendido\", no frito."
  },
  {
    num: 2,
    title: "Bloque 2: Hipertrofia Miofibrilar Pesada (Gimnasio - Compuestos Grandes)",
    color: "border-[#253745] text-[#CCD0CF] bg-[#06141B]",
    badgeColor: "bg-[#253745] text-emerald-300 border-[#4A5C6A]",
    bioState: "El SNC tiene una ligera fatiga residual, pero el SNP (el músculo en sí) está pre-activado y listo para absorber toneladas de carga.",
    fisiologia: "Daño muscular localizado (miotrauma) a través de altos niveles de tensión mecánica y sobrecarga progresiva lineal.",
    practica: "Pasamos a las máquinas de palancas, jalones pesados y presses. Al utilizar respaldos o rieles guiados (como la máquina de palancas convergentes o el remo con apoyo al pecho), \"apagamos\" la necesidad de estabilizar el cuerpo. Esto permite que el músculo objetivo (pectoral o dorsal ancho) reciba un estímulo de hipertrofia absoluto y seguro, permitiéndote empujar pesos masivos incluso con la fatiga nerviosa arrastrada del Bloque 1.",
    clinicaRule: null
  },
  {
    num: 3,
    title: "Bloque 3: Hipertrofia Regional, Estrés Metabólico y Aislamiento (Gimnasio)",
    color: "border-[#253745] text-[#CCD0CF] bg-[#06141B]",
    badgeColor: "bg-[#253745] text-amber-300 border-[#4A5C6A]",
    bioState: "Las fibras de contracción rápida (Tipo II) están fatigadas. Se inicia la acumulación de metabolitos (lactato, iones de hidrógeno).",
    fisiologia: "Hipertrofia regional mediante entrenamiento a longitudes musculares largas (LML) y estrés metabólico (hinchazón celular o cell swelling).",
    practica: "Ejercicios analíticos obligatorios (sillón de cuádriceps, extensiones de tríceps, elevaciones laterales, curl de bíceps). Aquí manipulamos los vectores de aislamiento (como el codo atrás del torso para el tríceps/bíceps) para aplicar tensión en el punto de máximo estiramiento anatómico, un detonante biológico supremo para la sarcomerogénesis. Aquí el RIR debe ser empujado al límite (RIR 1 o 0) según dicte tu semana de mesociclo.",
    clinicaRule: null
  },
  {
    num: 4,
    title: "Bloque 4: Barrido Metabólico y Transición (Enfriamiento)",
    color: "border-[#253745] text-[#CCD0CF] bg-[#06141B]",
    badgeColor: "bg-[#253745] text-[#CCD0CF] border-[#4A5C6A]",
    bioState: "Entorno de hipoxia localizada, alta acidez intramuscular.",
    fisiologia: "Retorno venoso, clearance (limpieza) de metabolitos de desecho y transición hacia el sistema nervioso parasimpático (recuperación).",
    practica: "5 minutos de cardio (soga, remo o bici) y trabajo de movilidad activa (como el Skin the Cat para extender hombros). Este bloque acelera la llegada de sangre oxigenada a los tejidos castigados, mitigando las agujetas extremas y preparando el terreno para la síntesis de proteínas.",
    clinicaRule: null
  }
];

export default function TimelineModule() {
  const [selectedWeek, setSelectedWeek] = useState(1);

  const activeWeekObj = macrocycleWeeks.find(w => w.number === selectedWeek) || macrocycleWeeks[0];

  const getWeekColorClass = (w) => {
    if (w.number === selectedWeek) {
      return 'border-[#4A5C6A] bg-[#253745] text-white';
    }
    if (w.isDeload) {
      return 'border-[#253745] bg-[#06141B] text-amber-400 hover:bg-[#253745]/40';
    }
    if (w.number === 11) {
      return 'border-[#253745] bg-[#06141B] text-emerald-400 hover:bg-[#253745]/40';
    }
    if (w.number === 3 || w.number === 7) {
      return 'border-[#253745] bg-[#06141B] text-[#CCD0CF] hover:bg-[#253745]/40';
    }
    return 'border-[#253745] bg-[#06141B] hover:bg-[#253745]/40 text-[#9BA8AB]';
  };

  return (
    <div className="space-y-8 max-w-7xl mx-auto w-full">

      {/* 1. Línea de Tiempo Estratégica del Macrociclo (12 Semanas Grid) */}
      <div className="glass-panel p-6 rounded-2xl border border-[#253745] space-y-4">
        <div>
          <h2 className="text-xl md:text-2xl font-bold font-outfit text-white">
            Línea de Tiempo Estratégica del Macrociclo
          </h2>
          <p className="text-xs text-slate-400">
            12 Semanas: Sincronización Endocrina y Biomecánica (3 Descargas + 1 Peaking Test)
          </p>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 xl:grid-cols-12 gap-2.5">
          {macrocycleWeeks.map((w) => {
            const isSelected = w.number === selectedWeek;
            const isDeload = w.isDeload;
            const isTest = w.number === 11;
            const isClimax = w.number === 3 || w.number === 7;

            return (
              <button
                key={w.number}
                onClick={() => setSelectedWeek(w.number)}
                className={`py-3 px-2 rounded-xl text-center border font-semibold text-xs tracking-wider transition-all duration-200 flex flex-col items-center justify-between gap-1.5 ${getWeekColorClass(w)} ${isSelected ? 'scale-105 shadow-md' : ''}`}
              >
                <span>Semana</span>
                <span className="text-lg font-bold leading-none">{w.number}</span>
                <span className="text-[9px] uppercase font-bold tracking-normal opacity-80 font-mono">
                  {isTest ? 'Examen' : isDeload ? 'Descarga' : isClimax ? 'Clímax' : 'Carga'}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Week Detail Panel */}
        <div className="bg-[#06141B] border border-[#253745] rounded-xl p-5 mt-4 space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#253745] pb-3">
            <div>
              <span className="text-[10px] bg-[#11212D] text-[#CCD0CF] px-2 py-0.5 rounded border border-[#253745] font-bold uppercase tracking-wider font-mono">
                Mesociclo {activeWeekObj.mesocycle}
              </span>
              <h3 className="font-bold text-white text-base mt-1 font-outfit">
                Semana {activeWeekObj.number}: {activeWeekObj.intensityLabel}
              </h3>
            </div>
            <div className="text-xs text-slate-400 font-mono">
              RIR General: <span className="text-[#CCD0CF] font-bold">{activeWeekObj.rirGeneral}</span> | RIR Accesorios: <span className="text-[#CCD0CF] font-bold">{activeWeekObj.rirAccessories}</span>
            </div>
          </div>

          {/* Mesocycle Global Focus */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#9BA8AB] flex items-center gap-1.5 font-outfit">
              <Trophy className="w-4 h-4 text-[#9BA8AB]" />
              Objetivos Globales del Mesociclo {activeWeekObj.mesocycle}
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-[#11212D] border border-[#253745] p-4 rounded-xl space-y-1.5">
                <span className="text-[10px] font-bold text-[#4A5C6A] uppercase tracking-wide font-mono block">Gimnasio</span>
                <p className="text-xs font-bold text-slate-200 font-outfit">{gymMesoData[activeWeekObj.mesocycle].title}</p>
                <p className="text-[11px] text-slate-400 leading-relaxed mt-1">
                  {gymMesoData[activeWeekObj.mesocycle].desc}
                </p>
              </div>
              <div className="bg-[#11212D] border border-[#253745] p-4 rounded-xl space-y-1.5">
                <span className="text-[10px] font-bold text-[#4A5C6A] uppercase tracking-wide font-mono block">Calistenia</span>
                <p className="text-xs font-bold text-slate-200 font-outfit">{calisthenicsMesoData[activeWeekObj.mesocycle].title}</p>
                <p className="text-[11px] text-slate-400 leading-relaxed mt-1">
                  {calisthenicsMesoData[activeWeekObj.mesocycle].target}
                </p>
              </div>
            </div>
          </div>

          {/* Weekly Detail Focus */}
          <div className="space-y-3 border-t border-[#253745] pt-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#9BA8AB] flex items-center gap-1.5 font-outfit">
              <Zap className="w-4 h-4 text-[#9BA8AB]" />
              Plan de Trabajo Semanal (Semana {activeWeekObj.number})
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-[#11212D] border border-[#253745] p-4 rounded-xl space-y-1.5">
                <span className="text-[10px] font-bold text-[#9BA8AB] uppercase tracking-wide block font-mono">Gimnasio (Foco Semanal)</span>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {activeWeekObj.focus}
                </p>
              </div>
              <div className="bg-[#11212D] border border-[#253745] p-4 rounded-xl space-y-1.5">
                <span className="text-[10px] font-bold text-[#9BA8AB] uppercase tracking-wide block font-mono">Calistenia (Foco Semanal)</span>
                <p className="text-xs font-bold text-slate-200">{calisthenicsWeeksData[activeWeekObj.number].title}</p>
                <p className="text-xs text-slate-400 leading-relaxed">{calisthenicsWeeksData[activeWeekObj.number].desc}</p>
                <p className="text-xs text-emerald-400 font-medium border-t border-[#253745] pt-1 mt-1">{calisthenicsWeeksData[activeWeekObj.number].methodology}</p>
              </div>
            </div>
          </div>

          {/* Phase Alerts */}
          {(activeWeekObj.number === 1 || activeWeekObj.number === 5 || activeWeekObj.number === 9) && (
            <div className="bg-[#11212D] border border-amber-500/40 text-amber-300 p-4 rounded-xl text-xs space-y-1">
              <strong>Semana de Descarga Estratégica ({activeWeekObj.number}):</strong> Disipación de fatiga sistémica acumulada durante la menstruación. Se cortan las series totales a la mitad, se reduce la carga entre 20% y 30%, y se mantiene un RIR 3 general innegociable para regenerar el tejido conectivo y reponer depósitos de glucógeno.
            </div>
          )}
          {activeWeekObj.number === 11 && (
            <div className="bg-[#11212D] border border-[#4A5C6A] text-[#CCD0CF] p-4 rounded-xl text-xs space-y-1">
              <strong>Semana de PEAKING / EL GRAN TEST (Semana 11):</strong> Aprovechamos la ventana biológica de oro (fase ovulatoria). Llevas los ejercicios principales al RIR 0 absoluto (3 a 5 repeticiones). El día sábado se realiza el AMRAP Oficial de calistenia para registrar récords personales (PR).
            </div>
          )}
          {activeWeekObj.number === 12 && (
            <div className="bg-[#11212D] border border-[#253745] text-slate-300 p-4 rounded-xl text-xs space-y-1">
              <strong>Semana de Consolidación Post-Peaking (Semana 12):</strong> Tras haber roto tus marcas en la semana 11, mantenemos la carga altísima (4 a 5 repeticiones) a un RIR 1 innegociable (sin llegar al fallo técnico) para consolidar la fuerza ganada y blindar el sistema nervioso.
            </div>
          )}
        </div>
      </div>

      {/* BANNER CALISTENIA: OBJETIVOS Y REGLA METODOLÓGICA */}
      <div className="glass-panel p-6 rounded-2xl border border-[#253745] space-y-4">
        <div className="flex items-center gap-3 border-b border-[#253745] pb-3">
          <div className="p-2 bg-[#06141B] border border-[#253745] rounded-xl">
            <Trophy className="w-5 h-5 text-[#9BA8AB]" />
          </div>
          <div>
            <span className="text-[10px] font-bold text-[#9BA8AB] uppercase tracking-widest font-mono">ESTRUCTURA FISIOLÓGICA DE CALISTENIA</span>
            <h3 className="font-bold text-base md:text-lg text-white font-outfit">
              Objetivos Finales y Regla Metodológica Ondulante
            </h3>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div className="p-4 bg-[#06141B] rounded-xl border border-[#253745] space-y-1.5">
            <strong className="text-xs font-bold text-amber-400 uppercase font-mono block">
              🏆 Objetivo Final del Macrociclo (Calistenia):
            </strong>
            <p className="text-slate-300 leading-relaxed font-medium">
              10 dominadas strictly, 12 fondos, 15 flexiones, 5 pike push-ups y sostén de handstand libre.
            </p>
          </div>

          <div className="p-4 bg-[#06141B] rounded-xl border border-[#253745] space-y-1.5">
            <strong className="text-xs font-bold text-[#CCD0CF] uppercase font-mono block">
              ⚙️ Regla Metodológica Ondulante:
            </strong>
            <p className="text-slate-300 leading-relaxed">
              La rotación del estímulo es semanal (ondulante). Jamás se ejecuta la misma metodología durante todo un mes. Las técnicas de intensidad se sincronizan con las fluctuaciones del ciclo menstrual para proteger el SNC y maximizar la hipertrofia.
            </p>
          </div>
        </div>
      </div>

      {/* 2. LA FISIOLOGÍA DE TU SESIÓN HÍBRIDA: DESGLOSE POR BLOQUES */}
      <div className="glass-panel p-6 rounded-2xl space-y-6 border border-[#253745]">
        <div className="border-b border-[#253745] pb-4 flex items-center gap-3">
          <div className="p-2.5 bg-[#06141B] border border-[#253745] rounded-xl">
            <Layers className="w-6 h-6 text-[#9BA8AB]" />
          </div>
          <div>
            <span className="text-[10px] font-bold text-[#9BA8AB] uppercase tracking-widest font-mono">ARQUITECTURA BIOLÓGICA</span>
            <h3 className="font-bold text-lg md:text-2xl text-white font-outfit mt-0.5">
              La Fisiología de tu Sesión Híbrida: Desglose por Bloques
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              Principios neuromuscular/miofibrilar, focos biológicos y reglas clínicas de cada fase del entrenamiento.
            </p>
          </div>
        </div>

        {/* Grid de Bloques Fisiológicos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blocksFisiologia.map((block) => (
            <div
              key={block.num}
              className={`p-5 rounded-2xl border ${block.color} flex flex-col justify-between space-y-4 bg-[#06141B] shadow-xl`}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between border-b border-[#253745] pb-2.5">
                  <span className={`text-[9.5px] font-bold px-2.5 py-0.5 rounded border uppercase font-mono ${block.badgeColor}`}>
                    BLOQUE {block.num}
                  </span>
                  <span className="text-[10px] text-[#4A5C6A] font-mono">Desglose Fisiológico</span>
                </div>

                <h4 className="font-bold text-white text-sm md:text-base font-outfit leading-snug">
                  {block.title}
                </h4>

                <div className="space-y-2 text-xs">
                  <div className="p-3 bg-[#11212D] rounded-xl border border-[#253745] space-y-1">
                    <span className="text-[10px] font-bold text-[#9BA8AB] uppercase tracking-wider block font-mono">Estado Biológico:</span>
                    <p className="text-slate-300 leading-relaxed text-[11px]">{block.bioState}</p>
                  </div>

                  <div className="p-3 bg-[#11212D] rounded-xl border border-[#253745] space-y-1">
                    <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider block font-mono">Foco Fisiológico:</span>
                    <p className="text-slate-300 leading-relaxed text-[11px]">{block.fisiologia}</p>
                  </div>

                  <div className="p-3 bg-[#11212D] rounded-xl border border-[#253745] space-y-1">
                    <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider block font-mono">Ejecución Práctica:</span>
                    <p className="text-slate-300 leading-relaxed text-[11px]">{block.practica}</p>
                  </div>

                  {block.clinicaRule && (
                    <div className="p-3 bg-red-950/30 rounded-xl border border-red-900/50 space-y-1">
                      <span className="text-[10px] font-bold text-red-400 uppercase tracking-wider block font-mono">Regla Clínica:</span>
                      <p className="text-red-200/90 leading-relaxed text-[11px]">{block.clinicaRule}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
