import { useState, useEffect } from 'react';
import {
  AlertTriangle, Play, RotateCcw,
  Lock, Target, Dumbbell, Sparkles
} from 'lucide-react';

// Custom SVG Icons for external platforms
function YoutubeIcon({ className }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      style={{ display: 'inline-block', verticalAlign: 'middle', width: '1em', height: '1em' }}
    >
      <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.517 3.545 12 3.545 12 3.545s-7.517 0-9.388.508a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.871.507 9.388.507 9.388.507s7.517 0 9.388-.507a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function PinterestIcon({ className }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      style={{ display: 'inline-block', verticalAlign: 'middle', width: '1em', height: '1em' }}
    >
      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.966 1.406-5.966s-.359-.72-.359-1.781c0-1.663.967-2.907 2.17-2.907 1.02 0 1.513.769 1.513 1.686 0 1.029-.652 2.561-.99 3.984-.282 1.196.597 2.17 1.777 2.17 2.133 0 3.772-2.249 3.772-5.493 0-2.873-2.064-4.882-5.005-4.882-3.41 0-5.41 2.561-5.41 5.202 0 1.03.399 2.137.896 2.738.098.119.112.224.083.342l-.333 1.36c-.053.22-.172.269-.399.163-1.495-.699-2.43-2.899-2.43-4.667 0-3.8 2.761-7.299 7.971-7.299 4.183 0 7.438 2.977 7.438 6.968 0 4.161-2.624 7.509-6.264 7.509-1.22 0-2.368-.63-2.76-1.37l-.752 2.859c-.272 1.053-.997 2.378-1.492 3.189C10.05 23.834 11.017 24 12.017 24c6.622 0 11.988-5.371 11.988-11.995C24.005 5.367 18.639 0 12.017 0z" />
    </svg>
  );
}

export default function HandstandDashboard() {
  // Stopwatch state for Crow Pose practice
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [timerGoalReached, setTimerGoalReached] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => {
          const nextSec = prevSeconds + 1;
          if (nextSec >= 20) {
            setTimerGoalReached(true);
          }
          return nextSec;
        });
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  const startTimer = () => {
    setIsActive(true);
  };

  const pauseTimer = () => {
    setIsActive(false);
  };

  const resetTimer = () => {
    setIsActive(false);
    setSeconds(0);
    setTimerGoalReached(false);
  };

  // Video dataset strictly from PDF
  const videos = {
    master: {
      title: "Rutina Maestra de Handstand",
      desc: "Eje central de la práctica. Cubre calentamiento, alineación, acumulación de segundos y fortalecimiento.",
      url: "https://www.youtube.com/watch?v=QezdZIqmd1k",
      id: "QezdZIqmd1k"
    },
    sequential: [
      {
        title: "Fundamentos y Alineación (Episodio 5)",
        desc: "Teoría de alineación en cuerpo hueco (hollow body) y empuje activo.",
        url: "https://www.youtube.com/watch?v=Z9BV5DrOd3U&list=PLUL8ojOR1JePbJ6bayWO6DNPu85SdigZ1&index=5",
        id: "Z9BV5DrOd3U"
      },
      {
        title: "Avanzado y Correcciones (Episodio 15)",
        desc: "Correcciones posturales específicas y técnicas de balance avanzadas.",
        url: "https://www.youtube.com/watch?v=ddLdv0wQq1Q&list=PLUL8ojOR1JePbJ6bayWO6DNPu85SdigZ1&index=15&t=6s",
        id: "ddLdv0wQq1Q"
      }
    ],
    complementary: [
      {
        title: "Tutorial de Caídas y Balance (A)",
        desc: "Comprensión del pateo, la corrección del centro de masa y el giro de cadera.",
        url: "https://www.youtube.com/watch?v=aXDxa79u0xQ",
        id: "aXDxa79u0xQ"
      },
      {
        title: "Alineación y Control de Caídas (B)",
        desc: "Ejercicios para perder el miedo a caer de espaldas y controlar el eje.",
        url: "https://www.youtube.com/watch?v=2-3wv5kLNnw",
        id: "2-3wv5kLNnw"
      },
      {
        title: "Jefferson Curl & Compresión",
        desc: "Tutorial técnico del Jefferson Curl y fuerza en rangos acortados.",
        url: "https://www.youtube.com/watch?v=G1_EoDs-G7E",
        id: "G1_EoDs-G7E"
      }
    ],
    pinterest: [
      {
        title: "Alineación e Intentos (Pinterest 1)",
        desc: "Ficha visual rápida para estructurar la acumulación de segundos.",
        url: "https://ar.pinterest.com/pin/906630968736938065/"
      },
      {
        title: "Drills de Compresión (Pinterest 2)",
        desc: "Guía de postura y ejercicios cortos para flexores e isquios.",
        url: "https://ar.pinterest.com/pin/905293962593911650/"
      }
    ]
  };

  return (
    <div className="space-y-8 animate-fade-in text-slate-100 max-w-6xl mx-auto px-1">

      {/* Cabecera / Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-violet-950/40 via-indigo-950/40 to-slate-950/60 border border-indigo-500/20 p-6 md:p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 shadow-2xl backdrop-blur-md">
        <div className="space-y-2 max-w-2xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
            <Sparkles className="w-3.5 h-3.5" />
            Habilidad Neurológica
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold font-outfit text-white tracking-tight leading-tight">
            Manual Maestro de Handstand
          </h2>
          <p className="text-sm text-slate-400 leading-relaxed font-sans">
            &ldquo;Aquí no buscas fatigar el músculo, sino instalar un software en tu cerebro para encontrar el punto de equilibrio.&rdquo;
          </p>
        </div>
        <a
          href={videos.master.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs tracking-wider uppercase transition-all duration-200 shadow-lg shadow-indigo-600/25 active:scale-95 group shrink-0"
        >
          <YoutubeIcon className="w-4 h-4" />
          Ver Rutina Maestra
        </a>
      </div>

      {/* Grid General */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">

        {/* COLUMNA IZQUIERDA: Práctica, Cues y Progresiones (8 cols) */}
        <div className="lg:col-span-7 space-y-6">

          {/* 1. MÓDULO 1: Los Cues de Oro (Tips Biomecánicos) */}
          <div className="glass-panel border border-slate-900 rounded-2xl p-5 md:p-6 space-y-5">
            <div className="flex items-center gap-2.5 pb-3 border-b border-slate-900">
              <div className="p-2 bg-amber-500/10 border border-amber-500/20 rounded-xl">
                <AlertTriangle className="w-5 h-5 text-amber-400" />
              </div>
              <div>
                <h3 className="font-bold text-base text-white leading-none">Cues de Oro</h3>
                <span className="text-[10px] text-amber-400/80 font-medium block mt-1">Reglas inquebrantables de biomecánica</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Cue 1: Balance */}
              <div className="bg-slate-950/40 border border-slate-900/80 rounded-xl p-4 space-y-2 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest block mb-1">Acelerador/Freno</span>
                  <h4 className="font-bold text-xs text-white">Control del Balance</h4>
                  <p className="text-[11px] text-slate-400 leading-relaxed mt-1.5">
                    Tus manos son tus pies:
                  </p>
                  <ul className="text-[10px] text-slate-400 leading-relaxed space-y-1 mt-1">
                    <li>• <span className="text-white font-medium">Hacia espalda:</span> Clava las yemas de los dedos.</li>
                    <li>• <span className="text-white font-medium">Hacia pies:</span> Empuja con el talón de la mano.</li>
                  </ul>
                </div>
              </div>

              {/* Cue 2: Hombros */}
              <div className="bg-slate-950/40 border border-slate-900/80 rounded-xl p-4 space-y-2 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest block mb-1">Estructura Escapular</span>
                  <h4 className="font-bold text-xs text-white">Hombros a Orejas</h4>
                  <p className="text-[11px] text-slate-400 leading-relaxed mt-1.5">
                    Mantén una <span className="text-white font-semibold">elevación activa</span>. Esto transfiere el peso a los huesos y evita que colapsen los tríceps.
                  </p>
                </div>
              </div>

              {/* Cue 3: La Mirada */}
              <div className="bg-slate-950/40 border border-slate-900/80 rounded-xl p-4 space-y-2 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest block mb-1">Foco Visual</span>
                  <h4 className="font-bold text-xs text-white">Triángulo Visual</h4>
                  <p className="text-[11px] text-slate-400 leading-relaxed mt-1.5">
                    Mira un punto fijo en el suelo <span className="text-white font-semibold">entre tus manos</span>, formando un triángulo con tus pulgares. No escondas la cabeza.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 2. MÓDULO 3: Estructura de tu Sesión */}
          <div className="glass-panel border border-slate-900 rounded-2xl p-5 md:p-6 space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-slate-900">
              <div className="flex items-center gap-2.5">
                <div className="p-2 bg-indigo-500/10 border border-indigo-500/20 rounded-xl">
                  <Target className="w-5 h-5 text-indigo-400" />
                </div>
                <div>
                  <h3 className="font-bold text-base text-white leading-none">Estructura de la Sesión</h3>
                  <span className="text-[10px] text-slate-400 block mt-1">Realizar idealmente estando fresca (inicio de sesión)</span>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              {/* Fase 1 */}
              <div className="p-4 rounded-xl border bg-slate-950/30 border-slate-900 hover:border-slate-800 transition-all duration-200">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 flex items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-400 font-bold text-xs shrink-0 mt-0.5">
                    01
                  </div>
                  <div className="flex-grow space-y-1">
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-xs text-white">Fase 1: Calentamiento de Muñecas</span>
                      <span className="text-[9px] font-bold text-emerald-400 bg-emerald-950/60 px-1.5 py-0.5 rounded border border-emerald-900/60 uppercase">Vital</span>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Calentamiento minucioso de flexores, extensores y tendones para evitar molestias.
                    </p>
                  </div>
                </div>
              </div>

              {/* Fase 2 */}
              <div className="p-4 rounded-xl border bg-slate-950/30 border-slate-900 hover:border-slate-800 transition-all duration-200">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 flex items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-400 font-bold text-xs shrink-0 mt-0.5">
                    02
                  </div>
                  <div className="flex-grow space-y-1">
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-xs text-white">Fase 2: Activación de Pino</span>
                      <span className="text-[9px] font-bold text-indigo-400 bg-indigo-950/60 px-1.5 py-0.5 rounded border border-indigo-900/60 uppercase">Alineación</span>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Trabajo de alineación postural (cuerpo hueco / hollow body) y empuje activo de hombros contra la pared.
                    </p>
                  </div>
                </div>
              </div>

              {/* Fase 3 */}
              <div className="p-4 rounded-xl border bg-slate-950/30 border-slate-900 hover:border-slate-800 transition-all duration-200">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 flex items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-400 font-bold text-xs shrink-0 mt-0.5">
                    03
                  </div>
                  <div className="flex-grow space-y-1">
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-xs text-white">Fase 3: Práctica de Acumulación</span>
                      <span className="text-[9px] font-bold text-indigo-400 bg-indigo-950/60 px-1.5 py-0.5 rounded border border-indigo-900/60 uppercase">Vuelo</span>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Intentos de equilibrio (pateos a la pared, intentos libres o ranita). Suma segundos de tiempo de vuelo en lugar de contar repeticiones.
                    </p>
                  </div>
                </div>
              </div>

              {/* Fase 4 */}
              <div className="p-4 rounded-xl border bg-slate-950/30 border-slate-900 hover:border-slate-800 transition-all duration-200">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 flex items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-400 font-bold text-xs shrink-0 mt-0.5">
                    04
                  </div>
                  <div className="flex-grow space-y-1">
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-xs text-white">Fase 4: Fortalecimiento y Acondicionamiento</span>
                      <span className="text-[9px] font-bold text-violet-400 bg-violet-950/60 px-1.5 py-0.5 rounded border border-violet-900/60 uppercase">2-3 Series</span>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Trabajo de compresión abdominal (Active Pancake, L-Sits) y fortalecimiento de antebrazos y muñecas.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 3. MÓDULO 2: Progresiones y Miedos (La Escalera de Dificultad) */}
          <div className="glass-panel border border-slate-900 rounded-2xl p-5 md:p-6 space-y-5">
            <div className="flex items-center gap-2.5 pb-3 border-b border-slate-900">
              <div className="p-2 bg-indigo-500/10 border border-indigo-500/20 rounded-xl">
                <Dumbbell className="w-5 h-5 text-indigo-400" />
              </div>
              <div>
                <h3 className="font-bold text-base text-white leading-none">Escalera de Progresiones</h3>
                <span className="text-[10px] text-slate-400 block mt-1">Supera el miedo y progresa paso a paso</span>
              </div>
            </div>

            <div className="space-y-4">

              {/* Progresión 1 */}
              <div className="bg-slate-950/30 border border-slate-900 hover:border-slate-800/80 rounded-xl p-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 transition-all">
                <div className="space-y-1.5 flex-grow">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-xs text-slate-500">Paso 0</span>
                    <h4 className="font-bold text-xs text-white">Aprender a Caer (Bailing)</h4>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-relaxed pl-1">
                    Practica la &ldquo;rueda lateral&rdquo; (cartwheel bail) o gira la cadera cuando te pasas de fuerza. Eliminar el miedo a la caída permite que el cerebro empuje al 100%.
                  </p>
                </div>
                <div className="pl-1 md:pl-0 shrink-0 flex gap-2">
                  <a
                    href={videos.complementary[0].url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-indigo-500/20 hover:border-indigo-500/40 bg-indigo-500/5 hover:bg-indigo-500/10 text-indigo-400 text-[10px] font-semibold transition-all"
                  >
                    <YoutubeIcon className="w-3.5 h-3.5" />
                    Video Caídas
                  </a>
                </div>
              </div>

              {/* Progresión 2: Ranita (CON STOPWATCH INTERACTIVO) */}
              <div className="bg-slate-950/30 border border-slate-900 hover:border-slate-800/80 rounded-xl p-4 flex flex-col gap-4 transition-all">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <div className="space-y-1.5 flex-grow">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-xs text-slate-500">Paso 1</span>
                      <h4 className="font-bold text-xs text-white">Ranita (Crow Pose / Frog Stand)</h4>
                      <span className="text-[9px] text-amber-400 font-bold bg-amber-950/60 px-1.5 py-0.5 rounded border border-amber-900/60">Meta: 20s</span>
                    </div>
                    <p className="text-[11px] text-slate-400 leading-relaxed pl-1">
                      Te enseña a equilibrar el peso en las manos y a usar las yemas de los dedos estando cerca del suelo.
                    </p>
                  </div>
                  <div className="pl-1 md:pl-0 shrink-0 flex gap-2">
                    <a
                      href={videos.sequential[0].url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-indigo-500/20 hover:border-indigo-500/40 bg-indigo-500/5 hover:bg-indigo-500/10 text-indigo-400 text-[10px] font-semibold transition-all"
                    >
                      <YoutubeIcon className="w-3.5 h-3.5" />
                      Video Ranita
                    </a>
                  </div>
                </div>


              </div>

              {/* Progresión 3 */}
              <div className="bg-slate-950/30 border border-slate-900 hover:border-slate-800/80 rounded-xl p-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 transition-all">
                <div className="space-y-1.5 flex-grow">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-xs text-slate-500">Paso 2</span>
                    <h4 className="font-bold text-xs text-white">Posición de Pika (Pike Hold)</h4>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-relaxed pl-1">
                    Realizado en el suelo. Transfiere el peso de tu cuerpo a los hombros replicando el ángulo de la vertical pero manteniendo los pies seguros en el suelo.
                  </p>
                </div>
                <div className="pl-1 md:pl-0 shrink-0 flex gap-2">
                  <a
                    href={videos.sequential[0].url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-indigo-500/20 hover:border-indigo-500/40 bg-indigo-500/5 hover:bg-indigo-500/10 text-indigo-400 text-[10px] font-semibold transition-all"
                  >
                    <YoutubeIcon className="w-3.5 h-3.5" />
                    Video Alineación
                  </a>
                </div>
              </div>

              {/* Progresión 4 */}
              <div className="bg-slate-950/30 border border-slate-900 hover:border-slate-800/80 rounded-xl p-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 transition-all">
                <div className="space-y-1.5 flex-grow">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-xs text-slate-500">Paso 3</span>
                    <h4 className="font-bold text-xs text-white">Posición de Pika Elevada (Box Pike Hold)</h4>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-relaxed pl-1">
                    Coloca los pies sobre un cajón o silla formando una &ldquo;L&rdquo; invertida. Transfiere el <span className="text-white font-semibold">100% del peso</span> directamente sobre las muñecas y hombros.
                  </p>
                </div>
                <div className="pl-1 md:pl-0 shrink-0 flex gap-2">
                  <a
                    href={videos.sequential[1].url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-indigo-500/20 hover:border-indigo-500/40 bg-indigo-500/5 hover:bg-indigo-500/10 text-indigo-400 text-[10px] font-semibold transition-all"
                  >
                    <YoutubeIcon className="w-3.5 h-3.5" />
                    Video Corrección
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* COLUMNA DERECHA: Compresión y Videoteca (5 cols) */}
        <div className="lg:col-span-5 space-y-6">

          {/* MÓDULO 3: El Trabajo de Compresión (Fuerza Pura) */}
          <div className="glass-panel border border-slate-900 rounded-2xl p-5 md:p-6 space-y-5">
            <div className="flex items-center gap-2.5 pb-3 border-b border-slate-900">
              <div className="p-2 bg-indigo-500/10 border border-indigo-500/20 rounded-xl">
                <Dumbbell className="w-5 h-5 text-indigo-400" />
              </div>
              <div>
                <h3 className="font-bold text-base text-white leading-none">Trabajo de Compresión</h3>
                <span className="text-[10px] text-slate-400 block mt-1">Puente entre flexibilidad y fuerza activa</span>
              </div>
            </div>

            <div className="bg-slate-950/40 border border-slate-900/60 rounded-xl p-4 space-y-4">
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-400">Frecuencia recomendada:</span>
                <span className="font-bold text-indigo-300 bg-indigo-950/40 border border-indigo-900/50 px-2 py-0.5 rounded-full">2-3 veces por semana</span>
              </div>

              <div className="text-[11px] text-slate-400 bg-slate-900/50 p-2.5 rounded border border-slate-800/80">
                <span className="text-white font-medium block mb-1">Prescripción habitual:</span>
                Martes y Sábados al finalizar el entrenamiento principal.
              </div>

              <div className="space-y-4 pt-2">
                {/* Ejercicio 1 */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-xs text-white">1. Pike Compression Hold / Seated Leg Lifts</h4>
                    <a
                      href={videos.pinterest[1].url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[9px] text-rose-400 font-semibold hover:underline flex items-center gap-1"
                    >
                      <PinterestIcon className="w-2.5 h-2.5" />
                      Pin Guía
                    </a>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    Espalda recta completamente apoyada contra la pared. Levanta las piernas rectas.
                  </p>
                  <div className="text-[10px] text-slate-300 font-medium">
                    Dosis: Sostener 5-8 seg x 3 veces + 6-8 reps dinámicas.
                  </div>
                  <p className="text-[10px] text-amber-500/80 leading-relaxed italic">
                    Tip: Si falta rango, elévate sentándote sobre un bloque de yoga.
                  </p>
                </div>

                <hr className="border-slate-900" />

                {/* Ejercicio 2 */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-xs text-white">2. Jefferson Curl</h4>
                    <a
                      href={videos.complementary[2].url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[9px] text-indigo-400 font-semibold hover:underline flex items-center gap-1"
                    >
                      <YoutubeIcon className="w-2.5 h-2.5" />
                      Tutorial
                    </a>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    Trabajo excéntrico para elongar la cadena posterior mientras se genera fuerza bajo carga progresiva.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* MÓDULO 4: Videoteca Categorizada (Links a mano) */}
          <div className="glass-panel border border-slate-900 rounded-2xl p-5 md:p-6 space-y-4">
            <div className="flex items-center gap-2.5 pb-2 border-b border-slate-900">
              <div className="p-2 bg-indigo-500/10 border border-indigo-500/20 rounded-xl">
                <YoutubeIcon className="w-5 h-5 text-indigo-400" />
              </div>
              <div>
                <h3 className="font-bold text-base text-white leading-none">Videoteca de Handstand</h3>
                <span className="text-[10px] text-slate-400 block mt-1">Enlaces exactos del documento técnico</span>
              </div>
            </div>

            <div className="space-y-3.5">
              {/* Sección A: Rutina Central */}
              <div className="space-y-2">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block">Rutina Maestra</span>
                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-900 flex justify-between items-center gap-3">
                  <div className="space-y-1">
                    <h4 className="font-bold text-xs text-white">Rutina Central</h4>
                    <span className="text-[10px] text-slate-500 block">Eje central de la práctica</span>
                  </div>
                  <a
                    href={videos.master.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-indigo-600/10 hover:bg-indigo-600 text-indigo-400 hover:text-white transition-all text-xs font-semibold flex items-center gap-1 shrink-0"
                  >
                    <Play className="w-3.5 h-3.5" />
                    Abrir
                  </a>
                </div>
              </div>

              {/* Sección B: Progresiones */}
              <div className="space-y-2">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block">Serie Secuencial</span>
                <div className="space-y-2">
                  {videos.sequential.map((video, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-slate-950/40 border border-slate-900 flex justify-between items-center gap-3">
                      <div className="space-y-0.5">
                        <h4 className="font-semibold text-xs text-white">{video.title}</h4>
                        <p className="text-[10px] text-slate-500 line-clamp-1">{video.desc}</p>
                      </div>
                      <a
                        href={video.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors shrink-0"
                      >
                        <Play className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sección C: Tutoriales Complementarios */}
              <div className="space-y-2">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block">Complementarios</span>
                <div className="space-y-2">
                  {videos.complementary.map((video, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-slate-950/40 border border-slate-900 flex justify-between items-center gap-3">
                      <div className="space-y-0.5">
                        <h4 className="font-semibold text-xs text-white">{video.title}</h4>
                        <p className="text-[10px] text-slate-500 line-clamp-1">{video.desc}</p>
                      </div>
                      <a
                        href={video.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors shrink-0"
                      >
                        <Play className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sección D: Pinterest Pins */}
              <div className="space-y-2">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block">Referencias Pinterest</span>
                <div className="space-y-2">
                  {videos.pinterest.map((pin, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-slate-950/40 border border-slate-900 flex justify-between items-center gap-3">
                      <div className="space-y-0.5">
                        <h4 className="font-semibold text-xs text-white">{pin.title}</h4>
                        <p className="text-[10px] text-slate-500 line-clamp-1">{pin.desc}</p>
                      </div>
                      <a
                        href={pin.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded bg-slate-900 hover:bg-slate-800 text-rose-400 hover:text-rose-300 border border-slate-800 transition-colors shrink-0"
                      >
                        <PinterestIcon className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
