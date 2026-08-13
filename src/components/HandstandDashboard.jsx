import React from 'react';
import {
  Sparkles, Target, Dumbbell, AlertTriangle
} from 'lucide-react';

function InstagramIcon({ className }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      style={{ display: 'inline-block', verticalAlign: 'middle', width: '1em', height: '1em' }}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

export default function HandstandDashboard() {
  const pdfReels = [
    {
      title: "Reel 1: Ranita & Técnica de Pérdida de Miedo",
      desc: "Demostración oficial de Ranita (Crow Pose) y salida segura.",
      url: "https://www.instagram.com/reel/DYc540mBqqZ/?igsh=MTZzaXJ3N3p4ZGpsYQ=="
    },
    {
      title: "Reel 2: Drills de Alineación y Chest to Wall",
      desc: "Activación de hombros, postura de cuerpo hueco y alineación contra pared.",
      url: "https://www.instagram.com/reel/DatA144P4-T/?igsh=czRpZ3dxNGo2aXRs"
    }
  ];

  return (
    <div className="space-y-8 animate-fade-in text-slate-100 max-w-7xl mx-auto px-1">

      {/* BANNER CABECERA MAESTRA */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-violet-950/60 via-indigo-950/60 to-slate-950/80 border border-slate-900 p-6 md:p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 backdrop-blur-md">
        <div className="space-y-3 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            Habilidad Neurológica Brutal
          </div>
          <h2 className="text-2xl md:text-4xl font-extrabold font-outfit text-white tracking-tight leading-tight">
            Manual Maestro de Handstand (Pino / Vertical)
          </h2>
          <p className="text-xs md:text-sm text-slate-300 leading-relaxed font-sans italic border-l-2 border-indigo-500 pl-3">
            &ldquo;El Handstand es una habilidad neurológica brutal que encaja a la perfección con tu trabajo en la barra de calistenia. A diferencia de la hipertrofia, aquí no buscas fatigar el músculo, sino instalar un software en tu cerebro para encontrar el punto de equilibrio.&rdquo;
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-2 shrink-0 self-start md:self-center">
          <a
            href={pdfReels[0].url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-semibold text-xs tracking-wider uppercase transition-all shadow-lg shadow-violet-950/40 font-outfit"
          >
            <InstagramIcon className="w-4 h-4 text-fuchsia-300" />
            Ver Reel 1
          </a>
          <a
            href={pdfReels[1].url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-850 text-indigo-300 border border-indigo-800 font-semibold text-xs tracking-wider uppercase transition-all font-outfit"
          >
            <InstagramIcon className="w-4 h-4 text-fuchsia-300" />
            Ver Reel 2
          </a>
        </div>
      </div>

      {/* GRID DE MÓDULOS DEL MANUAL */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">

        {/* COLUMNA IZQUIERDA (7 COLS): Cues y Progresiones */}
        <div className="lg:col-span-7 space-y-6">

          {/* MÓDULO 1: LOS CUES DE ORO (BIOMECÁNICA Y EQUILIBRIO) */}
          <div className="glass-panel border border-slate-800 rounded-2xl p-6 space-y-5 glow-indigo">
            <div className="flex items-center gap-3 pb-3 border-b border-slate-800">
              <div className="p-2.5 bg-amber-500/10 border border-amber-500/20 rounded-xl">
                <AlertTriangle className="w-5 h-5 text-amber-400" />
              </div>
              <div>
                <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest font-mono">MÓDULO 1</span>
                <h3 className="font-bold text-base text-white font-outfit">Los &ldquo;Cues&rdquo; de Oro (Biomecánica y Equilibrio)</h3>
                <p className="text-xs text-slate-400">Reglas inquebrantables antes de patear hacia la pared o en libre</p>
              </div>
            </div>

            <div className="space-y-4">
              {/* Cue 1: Control del Balance */}
              <div className="bg-slate-950/80 border border-slate-850 rounded-xl p-4 space-y-2">
                <div className="flex items-center justify-between border-b border-slate-900 pb-2">
                  <strong className="text-sm font-bold text-indigo-300 font-outfit">1. El control del balance (Acelerador y Freno)</strong>
                  <span className="text-[10px] font-mono text-slate-400 bg-slate-900 px-2 py-0.5 rounded">Tus manos son tus pies</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  • <strong>Si sientes que te vas hacia adelante (hacia la espalda/caída):</strong> Empuja el suelo clavando las yemas de los dedos.
                </p>
                <p className="text-xs text-slate-300 leading-relaxed">
                  • <strong>Si sientes que te vas hacia atrás (hacia los pies):</strong> Empuja el suelo con la palma/talón de la mano.
                </p>
              </div>

              {/* Cue 2: Bloqueo Estructural */}
              <div className="bg-slate-950/80 border border-slate-850 rounded-xl p-4 space-y-1.5">
                <strong className="text-sm font-bold text-emerald-400 font-outfit block border-b border-slate-900 pb-2">2. Bloqueo estructural (Hombros a orejas)</strong>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Los hombros deben estar pegados a las orejas (<strong>Elevación activa</strong>). Esto hace que el peso recaiga sobre la estructura ósea y no sobre los músculos, evitando que los tríceps colapsen.
                </p>
              </div>

              {/* Cue 3: La Mirada */}
              <div className="bg-slate-950/80 border border-slate-850 rounded-xl p-4 space-y-1.5">
                <strong className="text-sm font-bold text-amber-400 font-outfit block border-b border-slate-900 pb-2">3. La Mirada (Triángulo Visual)</strong>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Busca un punto fijo en el suelo <strong>entre tus manos</strong> (formando un triángulo con tus pulgares). No escondas la cabeza por completo ni estires el cuello en exceso hacia adelante.
                </p>
              </div>
            </div>
          </div>

          {/* MÓDULO 2: PROGRESIONES Y MIEDOS (LA ESCALERA DE DIFICULTAD) */}
          <div className="glass-panel border border-slate-800 rounded-2xl p-6 space-y-5 glow-emerald">
            <div className="flex items-center gap-3 pb-3 border-b border-slate-800">
              <div className="p-2.5 bg-indigo-500/10 border border-indigo-500/20 rounded-xl">
                <Dumbbell className="w-5 h-5 text-indigo-400" />
              </div>
              <div>
                <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest font-mono">MÓDULO 2</span>
                <h3 className="font-bold text-base text-white font-outfit">Progresiones y Miedos (La Escalera de Dificultad)</h3>
                <p className="text-xs text-slate-400">Ruta de evolución para vencer la gravedad sin miedo a caer</p>
              </div>
            </div>

            <div className="space-y-4">
              {/* Progresión 1: Ranita */}
              <div className="bg-slate-950/80 border border-slate-850 rounded-xl p-4 space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-900 pb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold bg-indigo-950 text-indigo-300 px-2 py-0.5 rounded border border-indigo-800">PASO 1</span>
                    <h4 className="font-bold text-sm text-white font-outfit">Ranita (Crow Pose / Frog Stand)</h4>
                  </div>
                  <a
                    href={pdfReels[0].url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-violet-400 font-bold hover:underline font-outfit"
                  >
                    <InstagramIcon className="w-3.5 h-3.5 text-fuchsia-400" />
                    <span>Ver Reel Ranita</span>
                  </a>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Acumular <strong>20 segundos sostenidos</strong> aquí. Te enseña a equilibrar el peso en las manos y a usar las yemas de los dedos estando muy cerca del suelo.
                </p>
              </div>

              {/* Progresión 2: Aprender a Caer */}
              <div className="bg-slate-950/80 border border-slate-850 rounded-xl p-4 space-y-1.5">
                <div className="flex items-center gap-2 border-b border-slate-900 pb-2">
                  <span className="text-xs font-mono font-bold bg-slate-900 text-slate-400 px-2 py-0.5 rounded border border-slate-800">PASO 0</span>
                  <h4 className="font-bold text-sm text-white font-outfit">Aprender a Caer (Bailing)</h4>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Es el paso cero innegociable. Practicar la rueda lateral (<em>cartwheel bail</em>) o girar la cadera cuando te pasas de fuerza. Sin miedo a caer, el cerebro te permite empujar con fuerza real.
                </p>
              </div>

              {/* Progresión 3: Posición de Pika */}
              <div className="bg-slate-950/80 border border-slate-850 rounded-xl p-4 space-y-1.5">
                <div className="flex items-center gap-2 border-b border-slate-900 pb-2">
                  <span className="text-xs font-mono font-bold bg-slate-900 text-slate-400 px-2 py-0.5 rounded border border-slate-800">PASO 2</span>
                  <h4 className="font-bold text-sm text-white font-outfit">Posición de Pika (Pike Hold en Suelo)</h4>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Transfiere la carga directamente a los hombros replicando el ángulo exacto de la vertical pero manteniendo los pies seguros en el suelo.
                </p>
              </div>

              {/* Progresión 4: Posición de Pika Elevado */}
              <div className="bg-slate-950/80 border border-slate-850 rounded-xl p-4 space-y-1.5">
                <div className="flex items-center gap-2 border-b border-slate-900 pb-2">
                  <span className="text-xs font-mono font-bold bg-slate-900 text-slate-400 px-2 py-0.5 rounded border border-slate-800">PASO 3</span>
                  <h4 className="font-bold text-sm text-white font-outfit">Posición de Pika Elevado (Box Pike Hold)</h4>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Con los pies sobre un cajón o silla formando una &ldquo;L&rdquo; invertida. Coloca el <strong>100% de tu peso</strong> sobre las muñecas y hombros.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* COLUMNA DERECHA (5 COLS): Estructura de Sesión & Programación 12 Semanas */}
        <div className="lg:col-span-5 space-y-6">

          {/* MÓDULO 3: ESTRUCTURA DE TU SESIÓN LARGA DE HANDSTAND */}
          <div className="glass-panel border border-slate-800 rounded-2xl p-6 space-y-5 glow-indigo">
            <div className="flex items-center gap-3 pb-3 border-b border-slate-800">
              <div className="p-2.5 bg-indigo-500/10 border border-indigo-500/20 rounded-xl">
                <Target className="w-5 h-5 text-indigo-400" />
              </div>
              <div>
                <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest font-mono">MÓDULO 3</span>
                <h3 className="font-bold text-base text-white font-outfit">Estructura de tu Sesión Larga</h3>
                <p className="text-xs text-slate-400">1 o 2 veces por semana (Estando fresca / Inicio de sesión)</p>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed bg-slate-950 p-3 rounded-xl border border-slate-850 italic">
              Esta práctica debe hacerse idealmente estando fresca y cuando ya tengamos dominada la ranita (al inicio de un entrenamiento o en un día separado). Puede ser una o dos veces a la semana.
            </p>

            <div className="space-y-3">
              <div className="p-3.5 bg-slate-950/80 rounded-xl border border-slate-850 space-y-1">
                <strong className="text-xs font-bold text-amber-400 font-outfit block">Fase 1: Calentamiento de Muñecas</strong>
                <p className="text-[11px] text-slate-400 leading-relaxed">Vital para evitar lesiones y sobrecarga en los tendones del antebrazo.</p>
              </div>

              <div className="p-3.5 bg-slate-950/80 rounded-xl border border-slate-850 space-y-1">
                <strong className="text-xs font-bold text-indigo-300 font-outfit block">Fase 2: Activación de Pino</strong>
                <p className="text-[11px] text-slate-400 leading-relaxed">Trabajo de alineación postural (cuerpo hueco / hollow) y empuje activo de hombros contra la pared.</p>
              </div>

              <div className="p-3.5 bg-slate-950/80 rounded-xl border border-slate-850 space-y-1">
                <strong className="text-xs font-bold text-emerald-400 font-outfit block">Fase 3: Práctica (Acumular Segundos)</strong>
                <p className="text-[11px] text-slate-400 leading-relaxed">Intentos de equilibrio (pateos a la pared, intentos libres o ranita). Aquí no buscas hacer repeticiones, buscas sumar <em>&ldquo;tiempo de vuelo&rdquo;</em>.</p>
              </div>
            </div>
          </div>

          {/* PROGRAMACIÓN 12 SEMANAS DE HANDSTAND */}
          <div className="glass-panel border border-indigo-500/30 rounded-2xl p-6 space-y-5 glow-indigo">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div className="flex items-center gap-2.5">
                <div className="p-2 bg-indigo-600/20 rounded-xl">
                  <Sparkles className="w-5 h-5 text-indigo-400" />
                </div>
                <div>
                  <h3 className="font-bold text-base text-white font-outfit">Rutina 12 Semanas</h3>
                  <span className="text-[10px] text-slate-400 block mt-0.5">Programación oficial paso a paso</span>
                </div>
              </div>
              <span className="text-[10px] font-bold bg-indigo-950 text-indigo-300 border border-indigo-800 px-2.5 py-1 rounded-full font-mono uppercase">
                1-2x / Semana
              </span>
            </div>

            <div className="space-y-4">
              {/* Bloque 1: Semanas 1 a 4 */}
              <div className="p-4 bg-slate-950/90 rounded-xl border border-slate-850 space-y-2">
                <div className="flex items-center justify-between border-b border-slate-900 pb-1.5">
                  <strong className="text-xs font-bold text-indigo-400 uppercase font-mono">Semana 1 a 4</strong>
                  <span className="text-[9.5px] bg-slate-900 text-slate-400 px-2 py-0.5 rounded font-mono">Fase 1</span>
                </div>
                <ul className="text-xs text-slate-300 space-y-1 list-disc pl-4">
                  <li>Ranita</li>
                  <li>Pike Holds - 3 series x 30&apos;</li>
                </ul>
              </div>

              {/* Bloque 2: Semanas 5 a 8 */}
              <div className="p-4 bg-slate-950/90 rounded-xl border border-slate-850 space-y-2">
                <div className="flex items-center justify-between border-b border-slate-900 pb-1.5">
                  <strong className="text-xs font-bold text-indigo-400 uppercase font-mono">Semana 5 a 8</strong>
                  <span className="text-[9.5px] bg-slate-900 text-slate-400 px-2 py-0.5 rounded font-mono">Fase 2</span>
                </div>
                <ul className="text-xs text-slate-300 space-y-1 list-disc pl-4">
                  <li>Ranita</li>
                  <li>Chest to wall hold - 3 series x 60&apos;</li>
                </ul>
              </div>

              {/* Bloque 3: Semanas 9 a 12 */}
              <div className="p-4 bg-slate-950/90 rounded-xl border border-slate-850 space-y-2">
                <div className="flex items-center justify-between border-b border-slate-900 pb-1.5">
                  <strong className="text-xs font-bold text-indigo-400 uppercase font-mono">Semana 9 a 12</strong>
                  <span className="text-[9.5px] bg-slate-900 text-slate-400 px-2 py-0.5 rounded font-mono">Fase 3</span>
                </div>
                <ul className="text-xs text-slate-300 space-y-1 list-disc pl-4">
                  <li>Ranita</li>
                  <li>Toe Pulls - 5 series x 3</li>
                  <li>Heel Pulls - 5 series x 3</li>
                  <li>Kick ups to the wall - 10/día</li>
                </ul>
              </div>
            </div>
          </div>

          {/* VIDEOS DE REFERENCIA */}
          <div className="glass-panel border border-slate-800 rounded-2xl p-6 space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-outfit">
              Videos de Referencia Oficiales
            </h4>
            <div className="space-y-2.5">
              {pdfReels.map((reel, idx) => (
                <a
                  key={idx}
                  href={reel.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-850 flex items-center justify-between gap-3 hover:border-violet-500/40 transition-colors group"
                >
                  <div className="space-y-0.5">
                    <strong className="text-xs font-bold text-slate-200 group-hover:text-violet-300 transition-colors block">
                      {reel.title}
                    </strong>
                    <p className="text-[10px] text-slate-400">{reel.desc}</p>
                  </div>
                  <InstagramIcon className="w-4 h-4 text-fuchsia-400 shrink-0" />
                </a>
              ))}
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
