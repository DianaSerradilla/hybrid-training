import React, { useState } from 'react';
import {
  ShieldAlert, Eye, Trophy, Info,
  HelpCircle, ChevronRight, Zap, CheckCircle,
  Calendar, Award, PlayCircle, Video
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
    title: "Mesociclo 3: El Bloque de Fuerza Máxima (Semanas 9 a 12)",
    desc: "Bloque enfocado en la fuerza absoluta y peaking. Reducción drástica de repeticiones (4-6 / clusters) para reclutamiento neural máximo y búsqueda de récords personales (PR)."
  }
};

const calisthenicsMesoData = {
  1: {
    title: "Mesociclo 1: Acondicionamiento Neuromuscular y Mielinización (Semanas 1 a 4)",
    global: "Objetivo Global: Construir la autopista nerviosa. En esta fase, las ganancias de fuerza no provienen de músculos más grandes, sino de una mayor sincronización de las unidades motoras y el engrosamiento de la vaina de mielina de los axones."
  },
  2: {
    title: "Mesociclo 2: Sobrecarga Excéntrica y Densidad Contráctil (Semanas 5 a 8)",
    global: "Objetivo Global: Construcción del \"hardware\". Una vez que el sistema nervioso sabe enviar la señal de fuerza, necesitamos que las fibras musculares sean más gruesas (hipertrofia miofibrilar) para ejecutarla. Nos enfocaremos en el daño muscular a través de las fases excéntricas lentas."
  },
  3: {
    title: "Mesociclo 3: Intensificación, Tolerancia Láctica y Peaking (Semanas 9 a 12)",
    global: "Objetivo Global: Resistencia Anaeróbica y Fuerza Absoluta. Tienes los nervios (M1) y tienes el músculo (M2); ahora debes entrenar a la célula para que recicle el ATP a máxima velocidad y tolere el ácido láctico para poder exprimir esas 15 a 20 repeticiones continuas."
  }
};

const calisthenicsWeeksData = {
  1: "Microciclo 1 - Adaptación Base: Establecer los cerrojos biomecánicos (depresión, retracción y protracción escapular) bajo carga inicial. El sistema nervioso central (SNC) mapea el patrón motor. Volumen moderado, lejos del fallo muscular.",
  2: "Microciclo 2 - Expansión de Capacidad de Trabajo: Incrementar el tonelaje total tolerado por la placa motora. Se fuerza a las fibras de contracción lenta y rápida a trabajar en sinergia sin llegar a la acidez extrema.",
  3: "Microciclo 3 - Clímax Neural (Overreaching): Máximo estrés neurológico. Empujamos el sistema al límite de la eficiencia técnica para forzar la supercompensación. Es la semana de mayor fatiga sistémica.",
  4: "Microciclo 4 - Descarga y Resíntesis (Deload): Disipación total de la fatiga del SNC y fase aguda de reparación celular. El colágeno tipo I en los tendones de tus codos y hombros comienza su remodelación estructural tras el estrés de las semanas previas. Volumen cortado a la mitad.",
  5: "Microciclo 5 - Choque Excéntrico: Introducción de Tiempos Bajo Tensión (TUT) prolongados. Las contracciones excéntricas lentas inducen microdesgarros masivos en el sarcolema y las líneas Z, activando las células satélite para la expansión mionuclear.",
  6: "Microciclo 6 - Mecanotransducción Profunda: Explotar la rigidez de la titina como mecanosensor. Trabajo intenso en longitudes musculares largas (LML), como aguantar la porción más baja de un fondo o el estiramiento máximo de una dominada.",
  7: "Microciclo 7 - Clímax Estructural: Máximo daño tisular tolerable (Miotrauma). Llevamos la musculatura al fallo técnico mediante el control extremo de la gravedad.",
  8: "Microciclo 8 - Descarga y Supercompensación Tisular: Mitigación del fenómeno de protección contra el estrés (Stress Shielding) en los tendones mediante isometrías ligeras. El cuerpo fusiona los nuevos mionúcleos, consolidando tejido contráctil denso y funcional.",
  9: "Microciclo 9 - Adaptación a la Densidad (Clusters): Entrenar la vía glucolítica anaeróbica. Uso de metodologías Cluster (micro-series con descansos de 10-15 segundos) para acumular un gran volumen de repeticiones de alta calidad antes de que la acumulación de iones de hidrógeno bloquee la contracción.",
  10: "Microciclo 10 - Expansión del Umbral Láctico: Soportar el estrés metabólico extremo y la hinchazón celular (cell swelling). El músculo aprende a contraerse incluso en un entorno de hipoxia y alta acidez.",
  11: "Microciclo 11 - Clímax de Rendimiento Absoluto: Exposición del sistema a la máxima demanda. Acercamiento al fallo volitivo puro (AMRAP submáximo) para preparar psicológicamente y fisiológicamente al cuerpo para el examen final.",
  12: "Microciclo 12 - Tapering (Descarga Definitiva) y TEST (AMRAP): Efecto Peaking. Se erradica por completo la fatiga residual del trimestre. Los músculos están rebosantes de glucógeno y el sistema nervioso está hiper-excitado. Al final de esta semana, ejecutas el TEST OFICIAL (AMRAP) para registrar tus 15 dominadas, 20 flexiones, 20 fondos y 5 pike push-ups."
};

export default function TimelineModule() {
  const [selectedWeek, setSelectedWeek] = useState(1);

  const activeWeekObj = macrocycleWeeks.find(w => w.number === selectedWeek) || macrocycleWeeks[0];

  // Helper for week tag styling
  const getWeekColorClass = (w) => {
    if (w.number === 4 || w.number === 8) {
      return 'border-amber-600 bg-amber-950/40 text-amber-400 hover:bg-amber-900/40';
    }
    if (w.number === 11) {
      return 'border-fuchsia-600 bg-fuchsia-950/40 text-fuchsia-400 hover:bg-fuchsia-900/40';
    }
    if (w.number === 12) {
      return 'border-blue-600 bg-blue-950/40 text-blue-400 hover:bg-blue-900/40';
    }
    if (w.number === selectedWeek) {
      return 'border-indigo-500 bg-indigo-600 text-white';
    }
    return 'border-slate-800 bg-slate-950 hover:bg-slate-900 text-slate-300';
  };

  return (
    <div className="space-y-6">

      {/* 1. Interactive 12-Week Timeline Grid */}
      <div className="glass-panel p-6 rounded-2xl glow-indigo space-y-4">
        <div>
          <h2 className="text-lg font-bold font-outfit text-white">Línea de Tiempo Estratégica del Macrociclo</h2>
          <p className="text-xs text-slate-400">12 Semanas: 8 Semanas de Carga + 3 de Descarga + 1 de Peaking (Fuerza Máxima)</p>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 xl:grid-cols-12 gap-2.5">
          {macrocycleWeeks.map((w) => {
            const isSelected = w.number === selectedWeek;
            const isDeload = w.number === 4 || w.number === 8;
            const isTest = w.number === 12;
            const isPR = w.number === 11;

            return (
              <button
                key={w.number}
                onClick={() => setSelectedWeek(w.number)}
                className={`py-3 px-2 rounded-xl text-center border font-semibold text-xs tracking-wider transition-all duration-200 flex flex-col items-center justify-between gap-1.5 ${getWeekColorClass(w)} ${isSelected ? 'scale-105 shadow-md shadow-indigo-950/50' : ''}`}
              >
                <span>Semana</span>
                <span className="text-lg font-bold leading-none">{w.number}</span>
                <span className="text-[9px] uppercase font-bold tracking-normal opacity-80">
                  {isTest ? 'Test' : isDeload ? 'Descarga' : isPR ? 'Récord' : 'Carga'}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Week Detail Panel */}
        <div className="bg-slate-950/60 border border-slate-800 rounded-xl p-5 mt-4 space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-900 pb-3">
            <div>
              <span className="text-[10px] bg-slate-900 text-slate-400 px-2 py-0.5 rounded border border-slate-800 font-bold uppercase tracking-wider">
                Mesociclo {activeWeekObj.mesocycle}
              </span>
              <h3 className="font-bold text-white text-base mt-1">
                Semana {activeWeekObj.number}: {activeWeekObj.intensityLabel}
              </h3>
            </div>
            <div className="text-xs text-slate-400">
              RIR General: <span className="text-indigo-400 font-bold">{activeWeekObj.rirGeneral}</span> | RIR Accesorios: <span className="text-indigo-400 font-bold">{activeWeekObj.rirAccessories}</span>
            </div>
          </div>

          {/* Mesocycle Global Focus */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-400 flex items-center gap-1.5">
              <Trophy className="w-3.5 h-3.5" />
              Objetivos Globales del Mesociclo {activeWeekObj.mesocycle}
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-slate-900/40 border border-slate-850 p-3.5 rounded-xl space-y-1">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wide">Gimnasio</span>
                <p className="text-xs font-semibold text-slate-200">{gymMesoData[activeWeekObj.mesocycle].title}</p>
                <p className="text-[11px] text-slate-400 leading-relaxed mt-1">
                  {gymMesoData[activeWeekObj.mesocycle].desc}
                </p>
              </div>
              <div className="bg-slate-900/40 border border-slate-850 p-3.5 rounded-xl space-y-1">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wide">Calistenia</span>
                <p className="text-xs font-semibold text-slate-200">{calisthenicsMesoData[activeWeekObj.mesocycle].title}</p>
                <p className="text-[11px] text-slate-400 leading-relaxed mt-1">
                  {calisthenicsMesoData[activeWeekObj.mesocycle].global}
                </p>
              </div>
            </div>
          </div>

          {/* Weekly Detail Focus */}
          <div className="space-y-3 border-t border-slate-900 pt-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-400 flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-indigo-400" />
              Plan de Trabajo Semanal (Semana {activeWeekObj.number})
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-slate-900/20 border border-slate-900 p-3.5 rounded-xl space-y-1">
                <span className="text-[10px] font-bold text-indigo-500 uppercase tracking-wide block">Gimnasio (Foco Semanal)</span>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {activeWeekObj.focus}
                </p>
              </div>
              <div className="bg-slate-900/20 border border-slate-900 p-3.5 rounded-xl space-y-1">
                <span className="text-[10px] font-bold text-indigo-500 uppercase tracking-wide block">Calistenia (Foco Semanal)</span>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {calisthenicsWeeksData[activeWeekObj.number]}
                </p>
              </div>
            </div>
          </div>

          {/* Color-Coded Phase Alerts */}
          {activeWeekObj.number === 4 && (
            <div className="bg-amber-950/20 border border-amber-900/50 text-amber-300 p-3.5 rounded-xl text-xs">
              <strong>Alerta de Descarga (Semana 4):</strong> Disipación de fatiga sistémica. Regresión de palancas y reducción del 20% de volumen/cargas. El colágeno en los codos se remodela tras 3 semanas de carga.
            </div>
          )}
          {activeWeekObj.number === 8 && (
            <div className="bg-amber-950/20 border border-amber-900/50 text-amber-300 p-3.5 rounded-xl text-xs">
              <strong>Alerta de Descarga (Semana 8):</strong> Deload del segundo bloque. Reducción de series a la mitad y tonelaje para recuperar articulaciones y tendones antes del bloque de fuerza máxima.
            </div>
          )}
          {activeWeekObj.number === 11 && (
            <div className="bg-fuchsia-950/20 border border-fuchsia-900/50 text-fuchsia-300 p-3.5 rounded-xl text-xs">
              <strong>Alerta de Peaking (Semana 11):</strong> Clímax de rendimiento absoluto. Lleva los ejercicios principales al RIR 0. Evaluamos records personales en empujes y calistenia.
            </div>
          )}
          {activeWeekObj.number === 12 && (
            <div className="bg-blue-950/20 border border-blue-900/50 text-blue-300 p-3.5 rounded-xl text-xs">
              <strong>Alerta de Descarga Definitiva / Test Oficial (Semana 12):</strong> Tapering final. Después del límite en la semana 11, cortas el volumen a la mitad y bajas el peso un 30%. Sábado de TEST OFICIAL (entrenamiento fuerte un solo día).
            </div>
          )}
        </div>
      </div>

      {/* Estructura Semanal y Pirámide de la Hipertrofia Pura */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Estructura Semanal */}
        <div className="glass-panel p-6 rounded-2xl glow-indigo space-y-5">
          <div>
            <h3 className="font-bold text-sm text-slate-200 uppercase tracking-wider flex items-center gap-1.5">
              <Calendar className="w-4.5 h-4.5 text-indigo-400" />
              Estructura Semanal y Horarios
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">Distribución diaria del doble turno e intensidades híbridas</p>
          </div>

          <div className="space-y-2.5 lg:max-h-[360px] lg:overflow-y-auto pr-1">
            {[
              { day: "LUNES", am: "8:00 AM — Fuerza Push (Empuje)", pm: "Cardio + HS (Verticales) PM" },
              { day: "MARTES", am: "10:00 AM — Cardio + HS (Verticales)", pm: "17:00 PM — Fuerza Pull (Tracción)" },
              { day: "MIÉRCOLES", am: "7:00 AM — Cardio LISS", pm: "18:00 PM — Legs Quads (Foco Cuádriceps)" },
              { day: "JUEVES", am: "10:00 AM — Cardio + HS (Verticales)", pm: "17:00 PM — Tren Superior Híbrido" },
              { day: "VIERNES", am: "7:00 AM — Cardio + HS (Verticales)", pm: "18:00 PM — Legs Isquios (Cadena Posterior)" },
              { day: "SÁBADO", am: "9:00 AM — Brazos", pm: "17:00 PM — Cardio LISS" },
              { day: "DOMINGO", am: "9:00 AM — Cardio LISS + HS (Verticales)", pm: "Descanso Activo" }
            ].map((d, idx) => (
              <div key={idx} className="p-3 bg-slate-950/80 border border-slate-900 rounded-xl flex items-center justify-between gap-3 hover:border-slate-800 transition-colors">
                <div className="space-y-0.5">
                  <span className="text-xs font-bold text-indigo-400 block">{d.day}</span>
                  <span className="text-[11px] text-slate-300 block">{d.am}</span>
                  <span className="text-[11px] text-slate-400 block">{d.pm}</span>
                </div>
                <div className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse shrink-0" />
              </div>
            ))}
          </div>

          <div className="bg-slate-950 border border-slate-900 rounded-xl p-3.5 space-y-2 text-[11px]">
            <div className="flex items-center gap-1.5 text-indigo-300 font-semibold uppercase tracking-wider text-[10px]">
              <Video className="w-3.5 h-3.5 text-indigo-400" />
              Auditoría Biomecánica
            </div>
            <p className="text-slate-400 leading-normal">
              <strong>Importante:</strong> Se debe grabar cada serie principal para autoevaluar técnica y detectar fugas de tensión.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 pt-1.5 border-t border-slate-900 text-indigo-400">
              <a href="https://www.youtube.com/watch?v=pgCGm6-q2G8" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-1">
                <PlayCircle className="w-3.5 h-3.5" /> Rutina Mañanera 1
              </a>
              <span className="hidden sm:inline text-slate-600">|</span>
              <a href="https://www.youtube.com/watch?v=XrhCzu1oufA" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-1">
                <PlayCircle className="w-3.5 h-3.5" /> Rutina Mañanera 2
              </a>
            </div>
          </div>
        </div>

        {/* Pirámide de la Hipertrofia Pura */}
        <div className="glass-panel p-6 rounded-2xl glow-fuchsia space-y-5">
          <div>
            <h3 className="font-bold text-sm text-slate-200 uppercase tracking-wider flex items-center gap-1.5">
              <Award className="w-4.5 h-4.5 text-fuchsia-400" />
              La Pirámide de la Hipertrofia Pura
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">Los 5 pilares ordenados por prioridad de ejecución en tu entrenamiento</p>
          </div>

          <div className="space-y-2.5 lg:max-h-[480px] lg:overflow-y-auto pr-1">
            {/* Level 5 */}
            <div className="bg-amber-950/20 border border-amber-900/30 p-3.5 rounded-xl space-y-1 hover:border-amber-500/20 transition-colors">
              <div className="flex items-center justify-between">
                <span className="text-[9px] bg-amber-900/40 text-amber-300 px-1.5 py-0.5 rounded border border-amber-800 font-bold uppercase tracking-wider">5. Cúspide</span>
                <strong className="text-xs font-bold text-amber-200">Peso (Carga Mecánica)</strong>
              </div>
              <p className="text-[11px] text-slate-400 leading-normal">
                Subir la carga es la consecuencia lógica de haber conquistado los niveles anteriores. Si dominas las repeticiones máximas de un rango, subes el peso.
              </p>
            </div>

            {/* Level 4 */}
            <div className="bg-rose-950/20 border border-rose-900/30 p-3.5 rounded-xl space-y-1 hover:border-rose-500/20 transition-colors">
              <div className="flex items-center justify-between">
                <span className="text-[9px] bg-rose-900/40 text-rose-300 px-1.5 py-0.5 rounded border border-rose-800 font-bold uppercase tracking-wider">4. Progresión</span>
                <strong className="text-xs font-bold text-rose-200">Rango de Repeticiones</strong>
              </div>
              <p className="text-[11px] text-slate-400 leading-normal">
                Lucha por conquistar el extremo superior del rango de repeticiones de tu rutina (ej. llegar a 14 repeticiones a RIR exigido) antes de agregar más peso.
              </p>
            </div>

            {/* Level 3 */}
            <div className="bg-pink-950/20 border border-pink-900/30 p-3.5 rounded-xl space-y-1 hover:border-pink-500/20 transition-colors">
              <div className="flex items-center justify-between">
                <span className="text-[9px] bg-pink-900/40 text-pink-300 px-1.5 py-0.5 rounded border border-pink-800 font-bold uppercase tracking-wider">3. Control</span>
                <strong className="text-xs font-bold text-pink-200">Tempo Bajo Tensión (TUT)</strong>
              </div>
              <p className="text-[11px] text-slate-400 leading-normal">
                Frenar la fase excéntrica durante 3 o 4 segundos y realizar una pausa isométrica de 1 segundo en el estiramiento máximo para disipar inercias y rebotes.
              </p>
            </div>

            {/* Level 2 */}
            <div className="bg-fuchsia-950/20 border border-fuchsia-900/30 p-3.5 rounded-xl space-y-1 hover:border-fuchsia-500/20 transition-colors">
              <div className="flex items-center justify-between">
                <span className="text-[9px] bg-fuchsia-900/40 text-fuchsia-300 px-1.5 py-0.5 rounded border border-fuchsia-800 font-bold uppercase tracking-wider">2. Rango</span>
                <strong className="text-xs font-bold text-fuchsia-200">ROM (Estiramiento Máximo)</strong>
              </div>
              <p className="text-[11px] text-slate-400 leading-normal">
                Tensión mecánica profunda en longitudes musculares largas (LML). Si acortas el rango de movimiento para meter más repeticiones, la repetición es nula.
              </p>
            </div>

            {/* Level 1 */}
            <div className="bg-indigo-950/30 border border-indigo-900/40 p-3.5 rounded-xl space-y-1 hover:border-indigo-500/20 transition-colors">
              <div className="flex items-center justify-between">
                <span className="text-[9px] bg-indigo-900/40 text-indigo-300 px-1.5 py-0.5 rounded border border-indigo-800 font-bold uppercase tracking-wider">1. Base</span>
                <strong className="text-xs font-bold text-indigo-200">Ejecución (Limpieza Técnica)</strong>
              </div>
              <p className="text-[11px] text-slate-400 leading-normal">
                Cero inercias, cero balanceos y cero compensación muscular. La repetición número 1 y la número 10 deben verse visualmente idénticas en biomecánica.
              </p>
            </div>
          </div>
        </div>
      </div>



    </div>
  );
}
