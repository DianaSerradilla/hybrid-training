import React, { useState } from 'react';
import {
  BookOpen, Zap, Layers, Heart, Award, Sparkles, CheckCircle2,
  Bookmark, ChevronRight, Activity, Dumbbell, ShieldAlert, Target, Play
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

export default function WikiModule() {
  const [selectedModule, setSelectedModule] = useState(1);

  const modulesList = [
    { id: 1, title: "MÓDULO 1", label: "Fisiología Básica (El Motor)" },
    { id: 2, title: "MÓDULO 2", label: "Nutrición y Entorno Anabólico" },
    { id: 3, title: "MÓDULO 3", label: "El Código Biomecánico" },
    { id: 4, title: "MÓDULO 4", label: "Progresión, Programación y LML" },
    { id: 5, title: "MÓDULO 5", label: "Calistenia y Fuerza Relativa" },
    { id: 6, title: "MÓDULO 6", label: "Movilidad, Flexibilidad y Compresión" },
    { id: 7, title: "MÓDULO 7", label: "Base de Datos y Rutinas (El Archivo)" },
    { id: 8, title: "MÓDULO 8", label: "Fisiología Femenina y Periodización" },
    { id: 9, title: "MÓDULO 9", label: "La Fisiología de la Sesión Híbrida" },
    { id: 10, title: "MÓDULO 10", label: "Hacks de Ejecución y Secretos" },
  ];

  return (
    <div className="space-y-8 max-w-7xl mx-auto w-full text-slate-100 font-sans">

      {/* CABECERA ESTILO BLOG / REVISTA TÉCNICA */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-950/80 via-slate-950/90 to-slate-950 border border-indigo-500/30 p-6 md:p-10 shadow-2xl backdrop-blur-md glow-indigo">
        <div className="max-w-4xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 font-mono">
            <BookOpen className="w-4 h-4" />
            WIKI BLOG DE ENTRENAMIENTO — EL MANUAL DEFINITIVO
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold font-outfit text-white tracking-tight leading-tight">
            📚 WIKI DE ENTRENAMIENTO: EL MANUAL DEFINITIVO
          </h1>
          <p className="text-sm md:text-base text-slate-300 leading-relaxed font-sans">
            Guía maestra de fisiología humana, biomecánica avanzada, nutrición anabólica, calistenia de rendimiento y periodización femenina. Lee el compendio completo en formato blog paso a paso.
          </p>
        </div>
      </div>

      {/* TABLA DE CONTENIDOS (BLOG SIDEBAR / TOP NAVIGATION) */}
      <div className="glass-panel p-5 rounded-2xl glow-indigo space-y-3">
        <div className="flex items-center justify-between border-b border-slate-800 pb-2.5">
          <div className="flex items-center gap-2 text-indigo-400 font-bold text-xs font-mono uppercase tracking-wider">
            <Bookmark className="w-4 h-4" />
            Tabla de Contenidos del Blog (Navegación Rápida)
          </div>
          <span className="text-[11px] text-slate-400 font-mono">10 Capítulos Disponibles</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-10 gap-2 pt-1">
          {modulesList.map((m) => (
            <button
              key={m.id}
              onClick={() => setSelectedModule(m.id)}
              className={`p-2.5 rounded-xl border text-center transition-all duration-200 flex flex-col items-center justify-center gap-1 ${
                selectedModule === m.id
                  ? 'border-indigo-500 bg-indigo-600 text-white font-bold shadow-lg shadow-indigo-950/50 scale-105'
                  : 'border-slate-850 bg-slate-950/60 hover:bg-slate-900 text-slate-400 hover:text-slate-200'
              }`}
            >
              <span className="text-[9px] uppercase font-mono tracking-wider opacity-80">{m.title}</span>
              <span className="text-[10px] font-semibold leading-tight font-outfit line-clamp-1">{m.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* CUERPO PRINCIPAL DEL ARTÍCULO / BLOG */}
      <div className="space-y-8">

        {/* ========================================================================= */}
        {/* MÓDULO 1: FISIOLOGÍA BÁSICA (EL MOTOR) */}
        {/* ========================================================================= */}
        {selectedModule === 1 && (
          <article className="glass-panel p-6 md:p-10 rounded-3xl glow-indigo space-y-8 bg-slate-950/90 border border-slate-800">
            <header className="border-b border-slate-800 pb-5 space-y-2">
              <span className="text-xs font-mono font-bold text-indigo-400 uppercase tracking-widest bg-indigo-950/60 px-3 py-1 rounded-full border border-indigo-900">
                CAPÍTULO 1
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white font-outfit pt-2">
                🧬 MÓDULO 1: Fisiología Básica (El Motor)
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed italic">
                La hipertrofia muscular y la fuerza son dos adaptaciones fisiológicas distintas, aunque estrechamente interrelacionadas, que ocurren como respuesta al entrenamiento con cargas.
              </p>
            </header>

            {/* Secciones del Capítulo 1 */}
            <div className="space-y-8 text-sm text-slate-300 leading-relaxed">

              {/* 1. Fuerza vs Hipertrofia */}
              <section className="space-y-3 bg-slate-900/50 p-5 rounded-2xl border border-slate-850">
                <h3 className="text-lg font-bold text-white font-outfit flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                  1. Fuerza vs. Hipertrofia
                </h3>
                <div className="space-y-3 pl-2">
                  <p>
                    <strong className="text-indigo-300">Fuerza Muscular (Adaptación Neuromuscular):</strong> Los aumentos rápidos de fuerza al iniciar un programa se deben a que el sistema nervioso se vuelve más eficiente. Mejora su capacidad para reclutar más unidades motoras simultáneamente, sincronizar su activación y aumentar la frecuencia de los impulsos eléctricos enviados a los músculos.
                  </p>
                  <p>
                    <strong className="text-emerald-400">Hipertrofia Muscular (Adaptación Estructural):</strong> Consiste en el aumento del área de sección transversal de las fibras musculares (crecimiento físico). Ocurre por un aumento neto en la síntesis de proteínas contráctiles (actina y miosina) y estructurales dentro de la célula.
                  </p>
                </div>
              </section>

              {/* 2. Mecanismos de la Hipertrofia */}
              <section className="space-y-3 bg-slate-900/50 p-5 rounded-2xl border border-slate-850">
                <h3 className="text-lg font-bold text-white font-outfit flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                  2. Mecanismos de la Hipertrofia
                </h3>
                <p>Para que el músculo crezca, necesita estímulos específicos:</p>
                <div className="space-y-3 pl-2">
                  <p>
                    <strong className="text-amber-400">Tensión Mecánica (El factor primordial):</strong> Es la fuerza física que se ejerce sobre las fibras al contraerse o estirarse bajo resistencia. Es detectada por mecanosensores celulares que traducen el estímulo físico en señales químicas de crecimiento.
                  </p>
                  <p>
                    <strong className="text-fuchsia-400">Estrés Metabólico:</strong> Acumulación de subproductos (lactato, iones de hidrógeno, fosfato inorgánico) durante el ejercicio sostenido. Genera hinchazón celular (el famoso &quot;pump&quot;), estimulando factores de crecimiento adicionales.
                  </p>
                </div>
              </section>

              {/* 3. Vías de Señalización: mTOR */}
              <section className="space-y-3 bg-slate-900/50 p-5 rounded-2xl border border-slate-850">
                <h3 className="text-lg font-bold text-white font-outfit flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                  3. Vías de Señalización: mTOR
                </h3>
                <p>
                  El complejo <strong>mTOR (Mechanistic Target of Rapamycin)</strong> es el &quot;interruptor maestro&quot; del crecimiento celular.
                </p>
                <p className="pl-2">
                  <strong>Funcionamiento:</strong> Se activa ante una tensión mecánica elevada o una alta disponibilidad de aminoácidos (especialmente leucina). Al encenderse, ordena a los ribosomas ensamblar nuevas proteínas. Si esta síntesis supera a la degradación durante el descanso, hay hipertrofia.
                </p>
              </section>

              {/* 4. Tipos de Fibras Musculares y Reclutamiento */}
              <section className="space-y-4 bg-slate-900/50 p-5 rounded-2xl border border-slate-850">
                <h3 className="text-lg font-bold text-white font-outfit flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                  4. Tipos de Fibras Musculares y Reclutamiento
                </h3>
                <div className="space-y-3 pl-2">
                  <p>
                    <strong className="text-blue-400">Fibras Tipo I (Lentas u Oxidativas):</strong> Alta resistencia a la fatiga, mucha capacidad oxidativa, menor potencial de hipertrofia. Dominan en aeróbicos y postura.
                  </p>
                  <p>
                    <strong className="text-violet-400">Fibras Tipo II (Rápidas o Glucolíticas):</strong> Se fatigan rápido, dependen del glucógeno (anaeróbico), tienen el mayor potencial de hipertrofia y fuerza explosiva (Se dividen en IIa y IIx).
                  </p>
                  <p>
                    <strong className="text-amber-400">El Principio de Henneman:</strong> El cerebro recluta primero las unidades motoras pequeñas (Tipo I). A medida que la carga aumenta o aparece la fatiga, se ve obligado a reclutar progresivamente las unidades más grandes (Tipo II). Por eso, para crecer, debes entrenar intenso o llegar cerca del fallo.
                  </p>
                </div>

                <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-3 mt-4">
                  <h4 className="font-bold text-white text-base font-outfit">🧬 El Crecimiento de las Fibras: Tipo I vs. Tipo II</h4>
                  <p className="text-xs text-slate-300">
                    Aunque ambas fibras tienen la capacidad de aumentar su tamaño (área de sección transversal), la genética y la biología celular les han otorgado roles muy diferentes:
                  </p>
                  <div className="space-y-3 text-xs">
                    <div>
                      <strong className="text-indigo-300 font-bold block">1. Las Fibras Tipo II (Las &quot;Gigantes&quot; de la Hipertrofia)</strong>
                      <p className="text-slate-400 mt-1">• <strong>Capacidad de crecimiento:</strong> Tienen un potencial de hipertrofia masivo. Son las verdaderas responsables de que un músculo se vea grande y voluminoso.</p>
                      <p className="text-slate-400">• <strong>¿Por qué crecen tanto?</strong> Evolutivamente están diseñadas para generar mucha fuerza en poco tiempo (levantar algo muy pesado o huir de un peligro). Para generar más fuerza, la biología dicta que necesitan hacerse más gruesas.</p>
                      <p className="text-slate-400">• <strong>¿Cómo se estimulan?</strong> Responden de manera explosiva a la Tensión Mecánica. Se activan cuando levantas cargas pesadas (1 a 8 repeticiones) o cuando mueves cargas moderadas con máxima velocidad e intención.</p>
                    </div>

                    <div>
                      <strong className="text-emerald-400 font-bold block">2. Las Fibras Tipo I (Las &quot;Maratonistas&quot; Eficientes)</strong>
                      <p className="text-slate-400 mt-1">• <strong>Capacidad de crecimiento:</strong> Sí se hipertrofian, pero su potencial de crecimiento es muy limitado en comparación con las Tipo II.</p>
                      <p className="text-slate-400">• <strong>¿Por qué crecen poco?</strong> Su trabajo no es generar fuerza bruta, sino resistir. Si una fibra Tipo I se hiciera demasiado gruesa, el oxígeno y los nutrientes tardarían mucho en llegar al centro de la célula, lo que arruinaría su capacidad de resistir la fatiga. Por eso, en lugar de hacerse gigantes, se adaptan creando más mitocondrias (fábricas de energía) y más capilares sanguíneos a su alrededor.</p>
                      <p className="text-slate-400">• <strong>¿Cómo se estimulan?</strong> Responden al Estrés Metabólico y al tiempo bajo tensión. Se fatigan y se ven obligadas a crecer cuando haces series largas (15 a 30 repeticiones) o cuando mantienes isometrías (como aguantar una plancha).</p>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-amber-950/30 rounded-xl border border-amber-900/50 space-y-2 text-xs">
                  <strong className="text-amber-300 font-bold text-sm font-outfit block">💡 La Magia del Fallo Muscular (Cómo engrosar ambas a la vez)</strong>
                  <p className="text-slate-300 leading-relaxed">
                    Aquí es donde la ciencia del entrenamiento se vuelve fascinante. Gracias al Principio de Tamaño de Henneman, tu cuerpo es un ahorrador de energía y siempre activará primero las fibras Tipo I (porque gastan menos).
                  </p>
                  <p className="text-slate-300 font-semibold mt-2">¿Qué pasa cuando haces una serie de 15 repeticiones al fallo?</p>
                  <ul className="text-slate-300 space-y-1 list-disc pl-4">
                    <li><strong>Repeticiones 1 a 5:</strong> El peso se siente fácil. Tu cerebro solo activa las Fibras Tipo I para mover la carga. Las Tipo II están &quot;dormidas&quot;.</li>
                    <li><strong>Repeticiones 6 a 12:</strong> Las fibras Tipo I empiezan a quedarse sin energía y a fatigarse (empieza el ardor láctico). El cerebro se da cuenta de que necesita ayuda.</li>
                    <li><strong>Repeticiones 13 a 15 (Al borde del fallo):</strong> Como las Tipo I ya no dan más, el cerebro se ve obligado a despertar y reclutar a las &quot;gigantes&quot; Fibras Tipo II para que salven el día y eviten que el peso te aplaste.</li>
                  </ul>
                </div>
              </section>

              {/* Estímulo, Daño y Supercompensación */}
              <section className="space-y-4 bg-slate-900/50 p-5 rounded-2xl border border-slate-850">
                <h3 className="text-lg font-bold text-white font-outfit flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                  ⚡ El Proceso Fisiológico del Entrenamiento: Estímulo, Daño y Supercompensación
                </h3>
                <p>
                  Para entender qué pasa en tu cuerpo cuando entrenas, hay que cambiar un paradigma fundamental: el entrenamiento no construye músculo; el entrenamiento lo destruye.
                </p>
                <p>
                  El gimnasio no es el lugar donde creces, es el lugar donde le envías un &quot;mensaje&quot; urgente a tu cuerpo. Ese mensaje es lo que en fisiología llamamos el estímulo. Todo el proceso de hipertrofia y ganancia de fuerza se resume en cómo tu organismo reacciona para sobrevivir a ese mensaje.
                </p>
                <p>
                  Aquí tienes el desglose exacto de lo que ocurre en tu biología desde que levantas la primera pesa hasta que el músculo se vuelve más grande:
                </p>

                <div className="space-y-4 pt-2">
                  <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                    <strong className="text-indigo-300 font-bold text-sm block">1. ¿Qué es exactamente un &quot;Estímulo&quot;?</strong>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      El cuerpo humano opera bajo un principio llamado Homeostasis (el equilibrio y conservación de energía). El tejido muscular es metabólicamente muy caro de mantener; tu cuerpo no quiere cargar con músculo extra porque requiere muchas calorías diarias solo para existir.
                    </p>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Por lo tanto, para que el cuerpo decida invertir energía en crear músculo nuevo, necesita una razón de peso. Necesita una amenaza. El estímulo es esa amenaza. Cuando aplicas una tensión mecánica extrema (levantar peso) o un estrés metabólico alto (muchas repeticiones hasta el ardor), estás sacando a tu cuerpo de su zona de confort y enviándole una señal de alarma al Sistema Nervioso Central: &quot;El entorno exterior es demasiado pesado y hostil, si no nos volvemos más fuertes y grandes, no sobreviviremos la próxima vez&quot;.
                    </p>
                  </div>

                  <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-3">
                    <strong className="text-emerald-400 font-bold text-sm block">2. Las 3 Fases del Crecimiento (Síndrome General de Adaptación)</strong>
                    <p className="text-xs text-slate-300">El proceso biológico que ocurre en tu cuerpo sigue tres pasos innegociables:</p>
                    
                    <div className="space-y-3 text-xs pl-2">
                      <div className="p-3.5 bg-slate-900 rounded-lg border border-slate-800 space-y-1.5">
                        <strong className="text-red-400 font-bold block">Fase 1: La Fase de Alarma (Destrucción / Intra-entreno)</strong>
                        <p className="text-slate-300 font-semibold">Esto es lo que ocurre exactamente mientras estás entrenando:</p>
                        <p className="text-slate-400">• <strong>Miotrauma (Microdesgarros):</strong> La tensión de las pesas provoca literalmente micro-roturas en la estructura de las fibras musculares (específicamente en las líneas Z de los sarcómeros).</p>
                        <p className="text-slate-400">• <strong>Fatiga Neural:</strong> Tu cerebro agota los neurotransmisores intentando reclutar cada vez más unidades motoras.</p>
                        <p className="text-slate-400">• <strong>Agotamiento de Energía:</strong> Tus reservas de ATP y glucógeno caen en picada.</p>
                        <p className="text-slate-300 font-medium"><strong>Resultado:</strong> Al salir del gimnasio, eres más débil y tu tejido está dañado. Has aplicado el estímulo con éxito.</p>

                        <div className="p-3 bg-slate-950 rounded-lg border border-slate-850 space-y-2 mt-2 font-mono text-[11px]">
                          <strong className="text-amber-400 font-sans font-bold block">Las Reservas de ATP: La Moneda de Energía</strong>
                          <p className="text-slate-300">
                            El ATP (Adenosín Trifosfato) es la única molécula en todo tu cuerpo que las células pueden usar directamente como energía para contraerse. Piensa en el ATP como el dinero en efectivo que llevas en el bolsillo: es de acceso inmediato, pero se gasta rapidísimo.
                          </p>
                          <p className="text-slate-300 font-sans font-semibold">Cuando vas al gimnasio y levantas una carga muy pesada, ocurre lo siguiente:</p>
                          <p className="text-slate-400">• <strong>El Vaciamiento Rápido:</strong> Tus músculos tienen unas pequeñas reservas de ATP ya fabricadas y listas para usar. Pero son tan pequeñas que, en un esfuerzo máximo, se agotan en apenas 1 a 3 segundos.</p>
                          <p className="text-slate-400">• <strong>El Rescate (Fosfocreatina):</strong> Una vez que se acaba ese ATP, el cuerpo usa la fosfocreatina (por eso tomar creatina funciona) para reciclar el ATP gastado y darte unos 6 a 10 segundos más de fuerza explosiva.</p>
                          <p className="text-slate-400">• <strong>El Cambio de Combustible:</strong> Si la serie dura más de 10-15 segundos, el cuerpo se queda sin &quot;efectivo&quot; (ATP inmediato) y tiene que ir al &quot;banco&quot; a sacar más. Ahí es cuando empieza a romper el glucógeno (carbohidratos almacenados) y a generar ácido láctico para seguir produciendo ATP.</p>
                          <p className="text-slate-300 italic font-sans border-t border-slate-850 pt-1 mt-1">
                            En resumen: Cuando decimos &quot;vaciar las reservas de ATP&quot;, nos referimos a ese agotamiento celular inmediato que te impide sacar una repetición más, obligando al cuerpo a encender motores metabólicos de emergencia o a fallar.
                          </p>
                        </div>
                      </div>

                      <div className="p-3.5 bg-slate-900 rounded-lg border border-slate-800 space-y-1">
                        <strong className="text-amber-400 font-bold block">Fase 2: La Fase de Recuperación (Limpieza y Reparación / Post-entreno)</strong>
                        <p className="text-slate-300 font-semibold">Ocurre en las 24 a 48 horas posteriores (mientras comes y duermes):</p>
                        <p className="text-slate-400">• <strong>Inflamación Controlada:</strong> El cuerpo envía sangre llena de nutrientes y oxígeno al área dañada. Los glóbulos blancos (macrófagos) entran al tejido para &quot;comerse&quot; y limpiar los restos de las células musculares rotas.</p>
                        <p className="text-slate-400">• <strong>El Despertar de las Células Satélite:</strong> Alrededor de tus fibras musculares hay unas células &quot;dormidas&quot; llamadas células satélite. El daño muscular las despierta. Estas células viajan hacia la zona rota, se multiplican y fusionan sus núcleos con la fibra muscular dañada (activando la vía mTOR).</p>
                        <p className="text-slate-400">• <strong>Síntesis de Proteínas:</strong> Con la ayuda de los aminoácidos que comiste, los ribosomas comienzan a tejer nuevas proteínas contráctiles (actina y miosina) para tapar los &quot;baches&quot; que dejaron los microdesgarros.</p>
                      </div>

                      <div className="p-3.5 bg-slate-900 rounded-lg border border-slate-800 space-y-1">
                        <strong className="text-emerald-400 font-bold block">Fase 3: La Fase de Supercompensación (El Crecimiento Real)</strong>
                        <p className="text-slate-300 font-semibold">Aquí es donde ocurre la magia evolutiva. Tu cuerpo es inteligente; una vez que repara el daño de la Fase 2 para volver al punto de partida, dice: &quot;Para evitar que este daño vuelva a ocurrir, voy a construir un poco más de tejido del que teníamos antes&quot;.</p>
                        <p className="text-slate-400">• <strong>Blindaje:</strong> El área de sección transversal del músculo aumenta. Se añaden nuevos sarcómeros.</p>
                        <p className="text-slate-400">• <strong>Reservas ampliadas:</strong> El cuerpo almacena más glucógeno intramuscular por si vuelve a ocurrir un esfuerzo similar.</p>
                        <p className="text-slate-300 font-medium"><strong>Resultado:</strong> Te despiertas con un músculo fraccionalmente más grande y un sistema nervioso capaz de levantar un poco más de peso.</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                    <strong className="text-amber-400 font-bold text-sm block">3. La Trampa de la Adaptación (Por qué dejas de crecer)</strong>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Si repites exactamente el mismo estímulo (el mismo peso y las mismas repeticiones) durante un mes, tu cuerpo dejará de responder.
                    </p>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Como ya se &quot;supercompensó&quot; (se blindó) contra esos 10 kilos que levantaste, esos 10 kilos ya no representan una amenaza para su homeostasis. Ya no hay alarma, no hay necesidad de llamar a las células satélite, y no hay crecimiento.
                    </p>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Por esto, la regla de oro absoluta del entrenamiento es la <strong>Sobrecarga Progresiva</strong>. Para que el cuerpo siga creciendo indefinidamente, el estímulo debe ser cada vez mayor (más peso, más repeticiones, mejor técnica o mayor rango de movimiento) para obligarlo a entrar en la Fase de Alarma una y otra vez.
                    </p>
                  </div>

                  <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-3">
                    <strong className="text-indigo-400 font-bold text-sm block">4. La Variable Invisible: Por qué el Descanso es el Verdadero Constructor</strong>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Si el entrenamiento es el arquitecto que entrega los planos (el estímulo) y la nutrición aporta los materiales (la proteína y los carbohidratos), el descanso es el equipo de obreros que construye el edificio. Sin obreros, los ladrillos se quedan apilados en el suelo y los planos no sirven de nada.
                    </p>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Es un error gravísimo pensar que más entrenamiento equivale a más músculo. A nivel biológico, si no permites que la Fase de Reparación y la Fase de Supercompensación concluyan, el crecimiento jamás se materializa.
                    </p>
                    <p className="text-xs text-slate-300 font-semibold">Aquí te explico exactamente qué ocurre en las sombras mientras descansas:</p>
                    <div className="space-y-2 text-xs text-slate-400 pl-2">
                      <p>• <strong>El Reseteo del Sistema Nervioso Central (SNC):</strong> Tu cerebro y tu médula espinal son la &quot;batería&quot; que envía los impulsos eléctricos para que el músculo se contraiga. Un entrenamiento pesado fríe el SNC. Si no le das días de descanso (o semanas de descarga), la batería se agota. El resultado es que, aunque tu músculo esté recuperado, tu cerebro no puede enviar la señal eléctrica con suficiente potencia para reclutar las fibras Tipo II. Estarás físicamente bloqueado para levantar pesado.</p>
                      <p>• <strong>El Cóctel Hormonal Nocturno:</strong> El verdadero crecimiento ocurre cuando tienes los ojos cerrados. Durante las fases de sueño profundo (ondas lentas), tu cuerpo segrega picos masivos de Hormona de Crecimiento (GH) y Testosterona, las cuales aceleran la síntesis de proteínas.</p>
                      <p>• <strong>El Peligro del Cortisol:</strong> Si duermes mal o no tomas días de descanso, tu cuerpo entra en estado de estrés crónico y libera Cortisol. Esta hormona es altamente catabólica; su función es descomponer el tejido muscular para convertirlo en energía de emergencia, boicoteando literalmente todas las ganancias que lograste en el gimnasio.</p>
                      <p>• <strong>La Lucha de Tendones y Ligamentos:</strong> Los músculos tienen un riego sanguíneo masivo (por eso se &quot;bombean&quot;), lo que significa que reciben nutrientes rápido y se reparan en 24 a 48 horas. Sin embargo, los tendones, ligamentos y articulaciones son tejidos avasculares (tienen muy poca sangre). Tardan muchísimo más en sanar tras el estrés mecánico. Si entrenas el mismo patrón de movimiento todos los días, el músculo aguantará, pero el tendón acabará rompiéndose (tendinopatías), porque no respetaste su tiempo biológico de curación.</p>
                      <p>• <strong>Recarga de Glucógeno:</strong> El descanso (combinado con los carbohidratos) es el momento en que las células musculares reabsorben el agua y el glucógeno perdido, devolviéndole al músculo su aspecto &quot;lleno&quot; y preparando el combustible para la siguiente sesión.</p>
                    </div>

                    <div className="p-3 bg-red-950/30 rounded-lg border border-red-900/50 text-xs text-red-200 mt-2">
                      <strong>La Regla Clínica del Descanso:</strong> Entrenar rompe el tejido. El descanso lo repara y lo mejora. Si la frecuencia de tu entrenamiento (cuántas veces vas al gimnasio) supera la velocidad a la que tu fisiología puede limpiar el daño, entras en Sobrentrenamiento. Perderás fuerza, te estancarás y tu cuerpo se negará a crear un solo gramo de músculo nuevo por pura supervivencia.
                    </div>
                  </div>
                </div>
              </section>

            </div>
          </article>
        )}

        {/* ========================================================================= */}
        {/* MÓDULO 2: NUTRICIÓN Y ENTORNO ANABÓLICO */}
        {/* ========================================================================= */}
        {selectedModule === 2 && (
          <article className="glass-panel p-6 md:p-10 rounded-3xl glow-indigo space-y-8 bg-slate-950/90 border border-slate-800">
            <header className="border-b border-slate-800 pb-5 space-y-2">
              <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-900">
                CAPÍTULO 2
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white font-outfit pt-2">
                🍎 MÓDULO 2: Nutrición y Entorno Anabólico (El Combustible)
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed italic">
                Para construir la &quot;casa&quot; del músculo, la proteína son los ladrillos, pero los carbohidratos son los trabajadores y la electricidad.
              </p>
            </header>

            <div className="space-y-6 text-sm text-slate-300 leading-relaxed">
              <section className="space-y-3 bg-slate-900/50 p-5 rounded-2xl border border-slate-850">
                <h3 className="text-lg font-bold text-white font-outfit flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  1. El Rol de los Carbohidratos
                </h3>
                <div className="space-y-3 pl-2 text-xs">
                  <p>• <strong className="text-indigo-300">Efecto &quot;Ahorrador&quot; de Proteínas:</strong> La prioridad del cuerpo es la energía (glucosa). Si no hay carbohidratos, el cuerpo romperá tejido muscular (gluconeogénesis) para sobrevivir.</p>
                  <p>• <strong className="text-emerald-400">Combustible (Glucógeno):</strong> Las rutinas de alta tensión agotan el glucógeno. Incluso si cuentas con suplementación eficiente como whey protein, creatina y un buen stack de vitaminas, o utilizas combos orientados al Focus y Energía, si tus reservas de glucógeno están vacías, no podrás generar la tensión mecánica necesaria para crecer.</p>
                  <p>• <strong className="text-amber-400">El Poder de la Insulina:</strong> Es la hormona más anabólica y anticatabólica. Abre las células para empujar nutrientes (aminoácidos y glucosa) frenando la degradación muscular.</p>
                </div>
                <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800 text-xs text-slate-400 mt-2 font-mono">
                  <strong className="text-slate-200 font-sans block mb-1">Nota práctica:</strong>
                  Si tu dieta incluye enfoques variados o productos estilo Keto &amp; Waffles, es vital periodizar esos carbohidratos inteligentemente alrededor del entrenamiento para no vaciar las reservas que permiten el rendimiento en el gimnasio.
                </div>
              </section>

              <section className="space-y-3 bg-slate-900/50 p-5 rounded-2xl border border-slate-850">
                <h3 className="text-lg font-bold text-white font-outfit flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  2. El Mito de la &quot;Ventana Anabólica&quot;
                </h3>
                <p>Se creía que existía una ventana crítica de 30-60 minutos post-entreno. La ciencia moderna aclara:</p>
                <div className="space-y-2 text-xs pl-2">
                  <p>• <strong>Es más amplia:</strong> El estado anabólico permanece elevado entre 24 y 48 horas.</p>
                  <p>• <strong>El total diario es el rey:</strong> Importa la ingesta global de las 24 horas, no el minuto exacto.</p>
                  <p>• <strong>La comida previa cuenta:</strong> Los nutrientes ingeridos 1 o 2 horas antes siguen circulando en la sangre tras entrenar.</p>
                  <p>• <strong>¿Cuándo SÍ importa la inmediatez?</strong> Si entrenas en ayunas absoluto, o si eres atleta de élite entrenando dos veces al día (para reponer glucógeno rápido).</p>
                </div>
              </section>
            </div>
          </article>
        )}

        {/* ========================================================================= */}
        {/* MÓDULO 3: EL CÓDIGO BIOMECÁNICO */}
        {/* ========================================================================= */}
        {selectedModule === 3 && (
          <article className="glass-panel p-6 md:p-10 rounded-3xl glow-indigo space-y-8 bg-slate-950/90 border border-slate-800">
            <header className="border-b border-slate-800 pb-5 space-y-2">
              <span className="text-xs font-mono font-bold text-indigo-400 uppercase tracking-widest bg-indigo-950/60 px-3 py-1 rounded-full border border-indigo-900">
                CAPÍTULO 3
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white font-outfit pt-2">
                📐 MÓDULO 3: El Código Biomecánico (Reglas Inquebrantables)
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed italic">
                Si un programa omite estos vectores anatómicos, está incompleto.
              </p>
            </header>

            <div className="space-y-6 text-xs text-slate-300 leading-relaxed">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* Tríceps */}
                <div className="p-4 bg-slate-900/60 rounded-2xl border border-slate-850 space-y-2">
                  <strong className="text-indigo-400 font-bold text-sm block font-outfit">TRÍCEPS (La Regla de 2)</strong>
                  <p>• <strong>Codo arriba:</strong> Variantes tras nuca para máximo estiramiento de la cabeza larga.</p>
                  <p>• <strong>Codo abajo:</strong> Extensiones (pushdown) para cargar las cabezas lateral y medial.</p>
                </div>

                {/* Bíceps */}
                <div className="p-4 bg-slate-900/60 rounded-2xl border border-slate-850 space-y-2">
                  <strong className="text-emerald-400 font-bold text-sm block font-outfit">BÍCEPS (Los 3 Vectores)</strong>
                  <p>• <strong>Codo atrás:</strong> (Banco inclinado). Estiramiento extremo de la cabeza larga.</p>
                  <p>• <strong>Codo adelante:</strong> (Predicador/Scott). Pico de contracción de la cabeza corta.</p>
                  <p>• <strong>Agarre Neutro:</strong> (Martillo). Desarrolla el braquial para dar grosor frontal.</p>
                </div>

                {/* Hombros */}
                <div className="p-4 bg-slate-900/60 rounded-2xl border border-slate-850 space-y-2">
                  <strong className="text-amber-400 font-bold text-sm block font-outfit">HOMBROS (Cobertura 3D)</strong>
                  <p>• <strong>Frontal:</strong> Empujes verticales (Press).</p>
                  <p>• <strong>Lateral:</strong> Abducción pura contra gravedad (Elevaciones laterales).</p>
                  <p>• <strong>Posterior:</strong> Retracción/abducción horizontal (Facepulls, pájaros). El más importante para el look 3D.</p>
                </div>

                {/* Pecho */}
                <div className="p-4 bg-slate-900/60 rounded-2xl border border-slate-850 space-y-2">
                  <strong className="text-fuchsia-400 font-bold text-sm block font-outfit">PECHO (2 Patrones Clave)</strong>
                  <p>• <strong>Empuje:</strong> Presses pesados (plano, inclinado) para tensión mecánica máxima.</p>
                  <p>• <strong>Aducción:</strong> Aperturas/Cruces. Aísla la fibra eliminando al tríceps y cruza la línea media del cuerpo.</p>
                </div>

                {/* Espalda Alta */}
                <div className="p-4 bg-slate-900/60 rounded-2xl border border-slate-850 space-y-2">
                  <strong className="text-blue-400 font-bold text-sm block font-outfit">ESPALDA ALTA (La Regla de los 3 Vectores)</strong>
                  <p>• <strong>Vertical (Amplitud):</strong> Dominadas/Jalones para la forma en &quot;V&quot;.</p>
                  <p>• <strong>Horizontal (Grosor/Densidad):</strong> Remos. La Regla de Oro: Codos a 45°-60°, traccionar hacia el esternón, permitir estiramiento escapular al bajar y juntar escápulas con violencia al subir.</p>
                  <p>• <strong>Aislamiento (Extensión pura):</strong> Pullover. Rango completo sin limitación del bíceps.</p>
                </div>

                {/* Espalda Baja */}
                <div className="p-4 bg-slate-900/60 rounded-2xl border border-slate-850 space-y-2">
                  <strong className="text-indigo-300 font-bold text-sm block font-outfit">ESPALDA BAJA (Densidad Lumbar)</strong>
                  <p>• <strong>Vector:</strong> Extensión pura contra resistencia sin hiperextensión para construir los erectores espinales.</p>
                </div>

                {/* Cuádriceps */}
                <div className="p-4 bg-slate-900/60 rounded-2xl border border-slate-850 space-y-2">
                  <strong className="text-emerald-300 font-bold text-sm block font-outfit">CUÁDRICEPS (3 Patrones Obligatorios)</strong>
                  <p>• <strong>Empuje Bilateral:</strong> Prensa/Hack. Flexión máxima simultánea de rodilla y cadera (Vastos).</p>
                  <p>• <strong>Unilateral:</strong> Búlgara. Corrige desbalances y usa el glúteo medio como estabilizador.</p>
                  <p>• <strong>Aislamiento:</strong> Sillón (Extensiones). Única forma de estimular el recto femoral.</p>
                </div>

                {/* Isquiosurales */}
                <div className="p-4 bg-slate-900/60 rounded-2xl border border-slate-850 space-y-2">
                  <strong className="text-amber-300 font-bold text-sm block font-outfit">ISQUIOSURALES (2 Patrones Obligatorios)</strong>
                  <p>• <strong>Bisagra (Estiramiento):</strong> Peso muerto rumano. Altísima tensión mecánica.</p>
                  <p>• <strong>Flexión (Acortamiento):</strong> Curl femoral. Obligatorio porque la cabeza corta del isquio no cruza la cadera y no trabaja en el peso muerto.</p>
                </div>

                {/* Glúteos */}
                <div className="p-4 bg-slate-900/60 rounded-2xl border border-slate-850 space-y-2">
                  <strong className="text-fuchsia-300 font-bold text-sm block font-outfit">GLÚTEOS (3 Vectores)</strong>
                  <p>• <strong>Empuje Horizontal:</strong> Hip thrust (Acortamiento máximo).</p>
                  <p>• <strong>Tensión en estiramiento:</strong> Sentadillas profundas/Búlgaras (Freno excéntrico).</p>
                  <p>• <strong>Abducción:</strong> Máquina abductora/Patadas (Aspecto redondo y estabilidad pélvica).</p>
                </div>

                {/* Pantorrillas */}
                <div className="p-4 bg-slate-900/60 rounded-2xl border border-slate-850 space-y-2">
                  <strong className="text-slate-200 font-bold text-sm block font-outfit">PANTORRILLAS (2 Posiciones Articulares)</strong>
                  <p>• <strong>Rodilla Recta:</strong> Gemelo de pie (Gastrocnemio).</p>
                  <p>• <strong>Rodilla Flexionada:</strong> Gemelo sentado (Sóleo).</p>
                </div>

                {/* Core */}
                <div className="p-4 bg-slate-900/60 rounded-2xl border border-slate-850 space-y-2">
                  <strong className="text-red-400 font-bold text-sm block font-outfit">CORE (Recto Abdominal Puro)</strong>
                  <p>• <strong>Prohibido:</strong> Side bends y rotaciones pesadas (ensanchan la cintura).</p>
                  <p>• <strong>Obligatorio:</strong> Flexión espinal lineal (acercar esternón a pelvis).</p>
                </div>

                {/* Higiene Articular */}
                <div className="p-4 bg-slate-900/60 rounded-2xl border border-slate-850 space-y-2">
                  <strong className="text-teal-400 font-bold text-sm block font-outfit">HIGIENE ARTICULAR</strong>
                  <p>• <strong>Facepull:</strong> Innegociable. Rota externamente el húmero y sana el manguito rotador.</p>
                  <p>• <strong>Raises Fijos (Pájaros):</strong> Enseñan estabilización escapular.</p>
                </div>

              </div>
            </div>
          </article>
        )}

        {/* ========================================================================= */}
        {/* MÓDULO 4: PROGRESIÓN, PROGRAMACIÓN Y LML */}
        {/* ========================================================================= */}
        {selectedModule === 4 && (
          <article className="glass-panel p-6 md:p-10 rounded-3xl glow-indigo space-y-8 bg-slate-950/90 border border-slate-800">
            <header className="border-b border-slate-800 pb-5 space-y-2">
              <span className="text-xs font-mono font-bold text-fuchsia-400 uppercase tracking-widest bg-fuchsia-950/60 px-3 py-1 rounded-full border border-fuchsia-900">
                CAPÍTULO 4
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white font-outfit pt-2">
                📈 MÓDULO 4: Progresión, Programación y LML
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed italic">
                La Pirámide de la Hipertrofia Pura, LML y la gestión óptima del volumen.
              </p>
            </header>

            <div className="space-y-6 text-sm text-slate-300 leading-relaxed">
              <section className="space-y-3 bg-slate-900/50 p-5 rounded-2xl border border-slate-850">
                <h3 className="text-lg font-bold text-white font-outfit">La Pirámide de la Hipertrofia Pura</h3>
                <div className="space-y-2 text-xs pl-2">
                  <p>• <strong>Ejecución (Limpieza Absoluta):</strong> El músculo objetivo es el único motor. Cero inercia.</p>
                  <p>• <strong>ROM (Rango de Movimiento):</strong> Tensión mecánica en máximo estiramiento. Acortar el recorrido anula repeticiones.</p>
                  <p>• <strong>Tempo:</strong> Controlar la gravedad (excéntrica de 3-4s) con pausas isométricas de 1s para matar el rebote elástico.</p>
                  <p>• <strong>Rango de Repeticiones:</strong> Luchar por conquistar el techo del rango indicado (ej. llegar a 14 si el plan pide 10-14).</p>
                  <p>• <strong>Peso (La recompensa):</strong> Solo subes el peso al dominar los 4 pasos anteriores. Al subir, el ciclo se reinicia (limpiar técnica de nuevo).</p>
                </div>
              </section>

              <section className="space-y-3 bg-slate-900/50 p-5 rounded-2xl border border-slate-850">
                <h3 className="text-lg font-bold text-white font-outfit">LML (Long Muscle Length)</h3>
                <p className="text-xs">
                  Someter al músculo a estrés extremo en posición estirada. La proteína titina (estructuras elásticas) se tensa pasivamente. Sumado a la tensión contráctil activa, genera una respuesta anabólica violenta promoviendo la <strong>sarcomerogénesis</strong> (crecimiento longitudinal del músculo).
                </p>
              </section>

              <section className="space-y-3 bg-slate-900/50 p-5 rounded-2xl border border-slate-850">
                <h3 className="text-lg font-bold text-white font-outfit">VOLUMEN: Los 3 Semáforos del MEV (Minimum Effective Volume)</h3>
                <div className="space-y-2 text-xs pl-2">
                  <p>• <strong>Bombeo (Intra-entreno):</strong> El músculo debe sentirse lleno de sangre.</p>
                  <p>• <strong>Disrupción Muscular (Post-entreno):</strong> A las 24-48h debe haber &quot;pesadez&quot; o tensión al estirar.</p>
                  <p>• <strong>Rendimiento:</strong> Si puedes sumar 1 repetición o 1 kilo semana a semana, tu volumen es correcto. &quot;No lo toques si funciona&quot;.</p>
                  <p className="pt-2 italic text-slate-400 border-t border-slate-800 mt-2">
                    <strong>¿Cuándo subir series?</strong> En el mesociclo siguiente tras una semana de descarga, solo si te estancaste por completo, no hay fatiga y llegas fresco pero sin superar récords. Si sumas series a un músculo, quítalas de otro.
                  </p>
                </div>
              </section>
            </div>
          </article>
        )}

        {/* ========================================================================= */}
        {/* MÓDULO 5: CALISTENIA Y FUERZA RELATIVA */}
        {/* ========================================================================= */}
        {selectedModule === 5 && (
          <article className="glass-panel p-6 md:p-10 rounded-3xl glow-indigo space-y-8 bg-slate-950/90 border border-slate-800">
            <header className="border-b border-slate-800 pb-5 space-y-2">
              <span className="text-xs font-mono font-bold text-indigo-400 uppercase tracking-widest bg-indigo-950/60 px-3 py-1 rounded-full border border-indigo-900">
                CAPÍTULO 5
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white font-outfit pt-2">
                🤸‍♂️ MÓDULO 5: Calistenia y Fuerza Relativa
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed italic">
                Metodologías de progreso, ejes fisiológicos de estabilización, patrones vs. vectores y jerarquía de habilidades.
              </p>
            </header>

            <div className="space-y-6 text-sm text-slate-300 leading-relaxed">
              
              {/* 1. Metodologías de Progreso */}
              <section className="space-y-3 bg-slate-900/50 p-5 rounded-2xl border border-slate-850">
                <h3 className="text-lg font-bold text-white font-outfit flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                  1. Metodologías de Progreso
                </h3>
                <div className="space-y-2 text-xs pl-2">
                  <p>• <strong className="text-indigo-300">Manipulación Biomecánica (Torque):</strong> Modificar la palanca (ej. Tuck a Straddle) aleja el centro de masa de la articulación (fulcro), multiplicando la intensidad sin añadir kilos extra (<span className="font-mono text-indigo-200">τ = F · d · sin(θ)</span>).</p>
                  <p>• <strong className="text-emerald-400">Trabajo Excéntrico (Negativas):</strong> Bajar resistiendo la gravedad (4-5s) para reclutar unidades de alto umbral cuando aún no se tiene la fuerza concéntrica.</p>
                  <p>• <strong className="text-amber-400">Isometrías Estratégicas:</strong> Sostener contracciones (al final o en medio del recorrido) para sanar tendones (&quot;stress shielding&quot;).</p>
                  <p>• <strong className="text-fuchsia-400">Parciales Alargadas (LML):</strong> Trabajar el tercio inferior del rango en estiramiento máximo.</p>
                  <p>• <strong className="text-blue-400">Series Cluster:</strong> Micro-series de 1-2 reps con pausas de 10-15s para máximo tonelaje sin degradación técnica.</p>
                  <p>• <strong className="text-teal-400">Acomodación con Bandas:</strong> Alteran la curva de resistencia, ayudando más donde hay mayor desventaja mecánica (estiramiento).</p>
                  <p>• <strong className="text-rose-400">Método Piramidal:</strong> Acumulación de repeticiones ascendentes/descendentes manejando la fatiga.</p>
                </div>
              </section>

              {/* 2. Ejes Fisiológicos de Estabilización (El Puente) */}
              <section className="space-y-3 bg-slate-900/50 p-5 rounded-2xl border border-slate-850">
                <h3 className="text-lg font-bold text-white font-outfit flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  2. Ejes Fisiológicos de Estabilización (El Puente)
                </h3>
                <div className="space-y-3 text-xs pl-2">
                  <p>• <strong className="text-emerald-300">Inclinación Pélvica Posterior (Retroversión):</strong> Esconder el coxis, aplanando la lordosis lumbar (Glúteo + Abdomen). Innegociable en Hollow Body, Planche y Handstand para no partir la lumbar.</p>
                  <div className="space-y-1">
                    <p className="font-bold text-slate-200">• Retracción vs. Protracción Escapular:</p>
                    <p className="pl-3 text-slate-400"><strong className="text-indigo-300">Retracción:</strong> Juntar omóplatos. Usado en Front Lever y Remos. Fija el hombro.</p>
                    <p className="pl-3 text-slate-400"><strong className="text-indigo-300">Protracción:</strong> Separar omóplatos (Serrato). Usado en Planche y Push-ups. Empuja el suelo lejos.</p>
                  </div>
                  <div className="space-y-1">
                    <p className="font-bold text-slate-200">• Depresión vs. Elevación Escapular:</p>
                    <p className="pl-3 text-slate-400"><strong className="text-amber-300">Depresión:</strong> Hombros lejos de las orejas. Usado en Fondos y L-Sit. Evita el pinzamiento subacromial.</p>
                    <p className="pl-3 text-slate-400"><strong className="text-amber-300">Elevación:</strong> Encoger hombros. Usado en Handstand para bloquear la estructura ósea invertida.</p>
                  </div>
                </div>
              </section>

              {/* 3. Patrón de Movimiento vs. Vector de Fuerza */}
              <section className="space-y-4 bg-slate-900/50 p-5 rounded-2xl border border-slate-850">
                <h3 className="text-lg font-bold text-white font-outfit flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                  3. Patrón de Movimiento vs. Vector de Fuerza
                </h3>
                
                <div className="space-y-3 text-xs pl-2">
                  <div className="p-4 bg-slate-950/60 rounded-xl border border-slate-800 space-y-2">
                    <strong className="text-indigo-300 font-bold block text-sm font-outfit">Patrón de Movimiento (El &quot;Qué&quot; estás haciendo)</strong>
                    <p className="text-slate-300">Un patrón de movimiento es una categoría fundamental de movimiento humano. Se define por cómo se coordinan tus articulaciones y músculos para realizar una acción global. Es la forma en la que tu sistema nervioso organiza el movimiento.</p>
                    <p className="text-slate-400">La kinesiología clasifica casi todo lo que hacemos en unos pocos patrones básicos:</p>
                    <ul className="list-disc pl-5 space-y-1 text-slate-300">
                      <li><strong>Empuje (Push):</strong> Alejar un objeto de ti o alejarte tú del suelo (ej. Flexiones, Press de banca).</li>
                      <li><strong>Tracción (Pull):</strong> Acercar un objeto hacia ti o acercarte tú a un objeto (ej. Dominadas, Remos).</li>
                      <li><strong>Dominante de Rodilla (Squat):</strong> Doblar las rodillas y caderas simultáneamente (ej. Sentadillas, Prensa).</li>
                      <li><strong>Bisagra de Cadera (Hinge):</strong> Doblar el torso hacia adelante manteniendo las tibias casi verticales (ej. Peso Muerto).</li>
                      <li><strong>Rotación / Anti-rotación:</strong> Girar el torso o resistir un giro (ej. Planchas, giros).</li>
                    </ul>
                    <p className="text-slate-400 italic pt-1">En resumen: El patrón agrupa los ejercicios por la familia de movimiento y las articulaciones involucradas.</p>
                  </div>

                  <div className="p-4 bg-slate-950/60 rounded-xl border border-slate-800 space-y-2">
                    <strong className="text-emerald-400 font-bold block text-sm font-outfit">Vector de Fuerza (El &quot;Hacia Dónde&quot; va la resistencia)</strong>
                    <p className="text-slate-300">El vector es un concepto de física pura. Se refiere a la línea direccional exacta en la que se aplica la resistencia (ya sea la gravedad o el cable de una polea) en relación con tu cuerpo.</p>
                    <p className="text-slate-300">El vector es lo que determina qué porción exacta de un músculo se va a llevar la mayor tensión mecánica.</p>
                    <ul className="list-disc pl-5 space-y-1 text-slate-300">
                      <li><strong>Vector Vertical (de arriba a abajo / abajo a arriba):</strong> Mover el peso en línea con la gravedad estando de pie o sentado (ej. Press militar, Dominadas).</li>
                      <li><strong>Vector Horizontal (de adelante hacia atrás / atrás hacia adelante):</strong> Mover el peso perpendicular a tu cuerpo (ej. Press de banca, Remo Gironda).</li>
                      <li><strong>Vector Diagonal:</strong> Mover el peso en un ángulo intermedio (ej. Press inclinado a 45 grados).</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* 4. Categorización Jerárquica de Habilidades (Skills) en Calistenia */}
              <section className="space-y-5 bg-slate-900/50 p-5 rounded-2xl border border-slate-850">
                <h3 className="text-lg font-bold text-white font-outfit flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-fuchsia-500"></span>
                  4. Categorización Jerárquica de Habilidades (Skills) en Calistenia
                </h3>

                {/* 1. Vector de Empuje (PUSH) */}
                <div className="space-y-3">
                  <div className="border-b border-indigo-900/50 pb-2">
                    <strong className="text-indigo-400 font-bold block text-sm font-outfit">1. Vector de Empuje (PUSH)</strong>
                    <p className="text-xs text-slate-400">Movimientos donde las articulaciones de los hombros actúan como fulcro y el vector de fuerza aleja el centro de masa del punto de apoyo.</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                    <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
                      <div className="flex justify-between items-center"><strong className="text-indigo-300">Pike Push-ups</strong><span className="text-[10px] bg-slate-800 px-2 py-0.5 rounded text-slate-300">Básico</span></div>
                      <p className="text-slate-400"><strong>Prerrequisito:</strong> Dominio de 15 flexiones estándar.</p>
                      <p className="text-slate-400"><strong>Progresiones:</strong> Flexión inclinada → Flexión estándar → Pike Push-ups.</p>
                    </div>

                    <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
                      <div className="flex justify-between items-center"><strong className="text-indigo-300">Ring Support Hold</strong><span className="text-[10px] bg-slate-800 px-2 py-0.5 rounded text-slate-300">Básico-Intermedio</span></div>
                      <p className="text-slate-400"><strong>Prerrequisito:</strong> Dominio de 15 fondos en paralelas fijos.</p>
                      <p className="text-slate-400"><strong>Progresiones:</strong> Sostén isométrico en paralelas → Sostén en anillas con rotación externa.</p>
                    </div>

                    <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
                      <div className="flex justify-between items-center"><strong className="text-indigo-300">Ranita (Frog Stand) / Shoulder Stand</strong><span className="text-[10px] bg-amber-950/60 text-amber-300 border border-amber-900/50 px-2 py-0.5 rounded">Intermedio</span></div>
                      <p className="text-slate-400"><strong>Prerrequisito:</strong> 5 Pike Push-ups estrictas; adaptación tendinosa de muñecas.</p>
                      <p className="text-slate-400"><strong>Progresiones:</strong> Isometría de tríceps → Ranita (Meta: 20 seg) → Shoulder stand.</p>
                    </div>

                    <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
                      <div className="flex justify-between items-center"><strong className="text-indigo-300">Pseudo Planche Push-ups</strong><span className="text-[10px] bg-amber-950/60 text-amber-300 border border-amber-900/50 px-2 py-0.5 rounded">Intermedio</span></div>
                      <p className="text-slate-400"><strong>Prerrequisito:</strong> Ranita (20 seg) y protracción escapular activa.</p>
                      <p className="text-slate-400"><strong>Progresiones:</strong> Planche lean (Meta: 30 seg) → Pseudo planche push-ups (Meta: 8 reps).</p>
                    </div>

                    <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
                      <div className="flex justify-between items-center"><strong className="text-indigo-300">Elbow Lever</strong><span className="text-[10px] bg-amber-950/60 text-amber-300 border border-amber-900/50 px-2 py-0.5 rounded">Intermedio-Avanzado</span></div>
                      <p className="text-slate-400"><strong>Prerrequisito:</strong> Ranita y fuerza base en core posterior.</p>
                      <p className="text-slate-400"><strong>Progresiones:</strong> Isometría parcial apoyando codos en abdomen → Elbow lever (Meta: 15 seg).</p>
                    </div>

                    <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
                      <div className="flex justify-between items-center"><strong className="text-indigo-300">Handstand Push-Up (HSPU)</strong><span className="text-[10px] bg-rose-950/60 text-rose-300 border border-rose-900/50 px-2 py-0.5 rounded">Avanzado</span></div>
                      <p className="text-slate-400"><strong>Prerrequisito:</strong> Ranita a Handstand; elevación máxima de la cintura escapular.</p>
                      <p className="text-slate-400"><strong>Progresiones:</strong> Pike hold en cajón → Pino asistido en pared → Pino libre → Excéntricas HSPU → HSPU.</p>
                    </div>

                    <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1 col-span-1 md:col-span-2">
                      <div className="flex justify-between items-center"><strong className="text-fuchsia-300">Tuck Planche</strong><span className="text-[10px] bg-purple-950/80 text-purple-300 border border-purple-800 px-2 py-0.5 rounded font-bold">Élite</span></div>
                      <p className="text-slate-400"><strong>Prerrequisito:</strong> Pseudo Planche Lean; fuerza extrema en deltoides anterior y bíceps braquial.</p>
                      <p className="text-slate-400"><strong>Progresiones:</strong> Planche lean → Tuck Planche asistida con banda → Tuck Planche estricta.</p>
                    </div>
                  </div>
                </div>

                {/* 2. Vector de Tracción (PULL) */}
                <div className="space-y-3 pt-2">
                  <div className="border-b border-red-900/50 pb-2">
                    <strong className="text-red-400 font-bold block text-sm font-outfit">2. Vector de Tracción (PULL)</strong>
                    <p className="text-xs text-slate-400">Patrones donde el dorsal ancho, redondo mayor, deltoides posterior y flexores del codo actúan sinérgicamente para vencer la gravedad.</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                    <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
                      <div className="flex justify-between items-center"><strong className="text-red-300">Skin the Cat / German Hang</strong><span className="text-[10px] bg-slate-800 px-2 py-0.5 rounded text-slate-300">Básico</span></div>
                      <p className="text-slate-400"><strong>Prerrequisito:</strong> Dominio de colgado activo (retracción) y movilidad de hombro.</p>
                      <p className="text-slate-400"><strong>Progresiones:</strong> Colgado activo → Elevación de rodillas → Skin the cat → German Hang (Meta: 15 seg).</p>
                    </div>

                    <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
                      <div className="flex justify-between items-center"><strong className="text-red-300">Pull Over en barra</strong><span className="text-[10px] bg-amber-950/60 text-amber-300 border border-amber-900/50 px-2 py-0.5 rounded">Intermedio</span></div>
                      <p className="text-slate-400"><strong>Prerrequisito:</strong> Skin the cat; 8 dominadas estrictas.</p>
                      <p className="text-slate-400"><strong>Progresiones:</strong> Elevación de rodillas → Pies a la barra → Remo a la barra → Pull Over.</p>
                    </div>

                    <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
                      <div className="flex justify-between items-center"><strong className="text-red-300">Back Lever</strong><span className="text-[10px] bg-amber-950/60 text-amber-300 border border-amber-900/50 px-2 py-0.5 rounded">Intermedio-Avanzado</span></div>
                      <p className="text-slate-400"><strong>Prerrequisito:</strong> German Hang (15 seg); adaptación de la cabeza larga del bíceps.</p>
                      <p className="text-slate-400"><strong>Progresiones:</strong> German Hang → Tuck Back Lever → Advanced Tuck Back Lever → Back Lever.</p>
                    </div>

                    <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
                      <div className="flex justify-between items-center"><strong className="text-red-300">Front Lever</strong><span className="text-[10px] bg-rose-950/60 text-rose-300 border border-rose-900/50 px-2 py-0.5 rounded">Avanzado</span></div>
                      <p className="text-slate-400"><strong>Prerrequisito:</strong> 15 Dominadas al pecho; retracción y depresión escapular estricta.</p>
                      <p className="text-slate-400"><strong>Progresiones:</strong> Tuck Front Lever → Advanced Tuck → Straddle → Front Lever Raise → Front Lever.</p>
                    </div>

                    <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1 col-span-1 md:col-span-2">
                      <div className="flex justify-between items-center"><strong className="text-fuchsia-300">Muscle-Up Estricto</strong><span className="text-[10px] bg-purple-950/80 text-purple-300 border border-purple-800 px-2 py-0.5 rounded font-bold">Élite</span></div>
                      <p className="text-slate-400"><strong>Prerrequisito:</strong> Dominadas explosivas al pecho/abdomen; transición de retracción a depresión rápida.</p>
                      <p className="text-slate-400"><strong>Progresiones:</strong> Dominadas explosivas → Dominadas diagonales → Entrada asistida con salto → Muscle-up con banda → Estricto.</p>
                    </div>
                  </div>
                </div>

                {/* 3. Acondicionamiento de Estabilización / Core */}
                <div className="space-y-3 pt-2">
                  <div className="border-b border-amber-900/50 pb-2">
                    <strong className="text-amber-400 font-bold block text-sm font-outfit">3. Acondicionamiento de Estabilización / Core (El Puente Transmisor)</strong>
                    <p className="text-xs text-slate-400">El core actúa como el puente de transferencia de fuerza. Sin estas bases, las palancas colapsan, transfiriendo cizallamiento a las lumbares.</p>
                  </div>

                  <div className="space-y-2 text-xs">
                    <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
                      <strong className="text-amber-300 block mb-1">Hollow Body Hold</strong>
                      <p className="text-slate-400">La base de toda la tensión corporal en calistenia (Prerrequisito para cualquier plancha o palanca).</p>
                    </div>
                    <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
                      <strong className="text-amber-300 block mb-1">L-Sit / L-Sit Colgado (Objetivo: 20 seg)</strong>
                      <p className="text-slate-400"><strong>Progresiones:</strong> Rodillas al pecho en barra → Rodillas extendidas en barra → Dominadas en L → L-Sit / L-Sit colgado.</p>
                    </div>
                    <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
                      <strong className="text-amber-300 block mb-1">Dragon Fly (Dragon Flag)</strong>
                      <p className="text-slate-400">La cúspide de la fuerza del core anterior. <strong>Prerrequisito:</strong> Elevación de piernas extendidas en barra (Hanging leg raises).</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Desglose Integral de Ejercicios Dinámicos en Calistenia */}
              <section className="space-y-5 bg-slate-900/50 p-5 rounded-2xl border border-slate-850">
                <h3 className="text-lg font-bold text-white font-outfit flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-500"></span>
                  Desglose Integral de Ejercicios Dinámicos en Calistenia
                </h3>

                {/* 1. PATRÓN DE EMPUJE (PUSH) */}
                <div className="space-y-4">
                  <div className="border-b border-indigo-900/50 pb-2">
                    <strong className="text-indigo-400 font-bold block text-sm font-outfit">1. PATRÓN DE EMPUJE (PUSH)</strong>
                    <p className="text-xs text-slate-400">Trabajo de la cadena anterior: Pectoral mayor, deltoides anterior y tríceps braquial.</p>
                  </div>

                  {/* A. Empuje Horizontal */}
                  <div className="space-y-3">
                    <h4 className="text-xs font-bold text-indigo-300 uppercase tracking-wider font-mono">A. Empuje Horizontal (Familia de las Flexiones / Push-ups)</h4>
                    <p className="text-xs text-slate-400 italic">El vector empuja el centro de gravedad alejándolo del suelo o soporte.</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                      <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
                        <div className="flex justify-between items-center"><strong className="text-indigo-200">Flexión Inclinada (Manos en cajón)</strong><span className="text-[10px] bg-slate-800 px-2 py-0.5 rounded text-slate-300">Principiante</span></div>
                        <p className="text-slate-400"><strong>Prerrequisito Fisiológico:</strong> Estabilidad de core (Plancha tradicional).</p>
                        <p className="text-slate-400"><strong>Progresión Lógica:</strong> Bajar la altura del soporte progresivamente.</p>
                      </div>

                      <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
                        <div className="flex justify-between items-center"><strong className="text-indigo-200">Flexión con Rodillas</strong><span className="text-[10px] bg-slate-800 px-2 py-0.5 rounded text-slate-300">Principiante</span></div>
                        <p className="text-slate-400"><strong>Prerrequisito Fisiológico:</strong> Control del core anterior sin quebrar lumbares.</p>
                        <p className="text-slate-400"><strong>Progresión Lógica:</strong> Flexión Inclinada a nivel bajo.</p>
                      </div>

                      <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
                        <div className="flex justify-between items-center"><strong className="text-indigo-200">Flexión Estándar (Suelo)</strong><span className="text-[10px] bg-amber-950/60 text-amber-300 border border-amber-900/50 px-2 py-0.5 rounded">Intermedio</span></div>
                        <p className="text-slate-400"><strong>Prerrequisito Fisiológico:</strong> Depresión y protracción escapular al empujar.</p>
                        <p className="text-slate-400"><strong>Progresión Lógica:</strong> Flexión declinada o diamante.</p>
                      </div>

                      <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
                        <div className="flex justify-between items-center"><strong className="text-indigo-200">Flexión Diamante</strong><span className="text-[10px] bg-amber-950/60 text-amber-300 border border-amber-900/50 px-2 py-0.5 rounded">Intermedio</span></div>
                        <p className="text-slate-400"><strong>Prerrequisito Fisiológico:</strong> 15 Flexiones estándar (Alta tensión en tríceps).</p>
                        <p className="text-slate-400"><strong>Progresión Lógica:</strong> Flexión Arquera (Archer push-up).</p>
                      </div>

                      <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
                        <div className="flex justify-between items-center"><strong className="text-indigo-200">Flexión Declinada (Pies elevados)</strong><span className="text-[10px] bg-amber-950/60 text-amber-300 border border-amber-900/50 px-2 py-0.5 rounded">Intermedio</span></div>
                        <p className="text-slate-400"><strong>Prerrequisito Fisiológico:</strong> 15 Flexiones estándar (Enfatiza haz clavicular).</p>
                        <p className="text-slate-400"><strong>Progresión Lógica:</strong> Pike Push-ups.</p>
                      </div>

                      <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
                        <div className="flex justify-between items-center"><strong className="text-indigo-200">Flexión Arquera (Archer)</strong><span className="text-[10px] bg-amber-950/60 text-amber-300 border border-amber-900/50 px-2 py-0.5 rounded">Int-Avanzado</span></div>
                        <p className="text-slate-400"><strong>Prerrequisito Fisiológico:</strong> 20 Flexiones estándar (Sobrecarga unilateral).</p>
                        <p className="text-slate-400"><strong>Progresión Lógica:</strong> Flexiones a una mano asistidas.</p>
                      </div>

                      <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
                        <div className="flex justify-between items-center"><strong className="text-indigo-200">Flexiones en Anillas</strong><span className="text-[10px] bg-rose-950/60 text-rose-300 border border-rose-900/50 px-2 py-0.5 rounded">Avanzado</span></div>
                        <p className="text-slate-400"><strong>Prerrequisito Fisiológico:</strong> 20 Flexiones estándar; Ring Support Hold estabilizado.</p>
                        <p className="text-slate-400"><strong>Progresión Lógica:</strong> Rotación externa máxima en el punto alto (RTO).</p>
                      </div>

                      <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
                        <div className="flex justify-between items-center"><strong className="text-indigo-200">Aperturas en Anillas (Flies)</strong><span className="text-[10px] bg-rose-950/60 text-rose-300 border border-rose-900/50 px-2 py-0.5 rounded">Avanzado</span></div>
                        <p className="text-slate-400"><strong>Prerrequisito Fisiológico:</strong> Flexiones en anillas dominadas (Tensión extrema en pectoral y bíceps).</p>
                        <p className="text-slate-400"><strong>Progresión Lógica:</strong> Aumentar el rango de apertura / Bajar altura de anillas.</p>
                      </div>
                    </div>
                  </div>

                  {/* B. Empuje Vertical y Aislamiento */}
                  <div className="space-y-3 pt-2">
                    <h4 className="text-xs font-bold text-indigo-300 uppercase tracking-wider font-mono">B. Empuje Vertical y Aislamiento</h4>
                    <p className="text-xs text-slate-400 italic">El vector desplaza el cuerpo hacia arriba o hacia abajo en relación al eje longitudinal.</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                      <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
                        <div className="flex justify-between items-center"><strong className="text-indigo-200">Fondos en Banco (Pies en suelo)</strong><span className="text-[10px] bg-slate-800 px-2 py-0.5 rounded text-slate-300">Principiante</span></div>
                        <p className="text-slate-400"><strong>Prerrequisito Fisiológico:</strong> Movilidad de extensión de hombro.</p>
                        <p className="text-slate-400"><strong>Progresión Lógica:</strong> Fondos con pies elevados.</p>
                      </div>

                      <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
                        <div className="flex justify-between items-center"><strong className="text-indigo-200">Fondos en Paralelas (Dips)</strong><span className="text-[10px] bg-amber-950/60 text-amber-300 border border-amber-900/50 px-2 py-0.5 rounded">Int-Avanzado</span></div>
                        <p className="text-slate-400"><strong>Prerrequisito Fisiológico:</strong> 15 Flexiones; Depresión escapular máxima.</p>
                        <p className="text-slate-400"><strong>Progresión Lógica:</strong> Fondos lastrados / Fondos en anillas.</p>
                      </div>

                      <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
                        <div className="flex justify-between items-center"><strong className="text-indigo-200">Fondos en Anillas (Ring Dips)</strong><span className="text-[10px] bg-rose-950/60 text-rose-300 border border-rose-900/50 px-2 py-0.5 rounded">Avanzado</span></div>
                        <p className="text-slate-400"><strong>Prerrequisito Fisiológico:</strong> 15 Fondos en paralelas; Soporte en anillas (RTO) estable.</p>
                        <p className="text-slate-400"><strong>Progresión Lógica:</strong> Ring Dips búlgaros (mayor amplitud).</p>
                      </div>

                      <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
                        <div className="flex justify-between items-center"><strong className="text-indigo-200">Flexión en Pica (Pike Push-up)</strong><span className="text-[10px] bg-amber-950/60 text-amber-300 border border-amber-900/50 px-2 py-0.5 rounded">Intermedio</span></div>
                        <p className="text-slate-400"><strong>Prerrequisito Fisiológico:</strong> 15 Flexiones declinadas; Elevación escapular.</p>
                        <p className="text-slate-400"><strong>Progresión Lógica:</strong> Pike Push-up con pies elevados en cajón.</p>
                      </div>

                      <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
                        <div className="flex justify-between items-center"><strong className="text-indigo-200">Flexiones Pica en Anillas</strong><span className="text-[10px] bg-rose-950/60 text-rose-300 border border-rose-900/50 px-2 py-0.5 rounded">Avanzado</span></div>
                        <p className="text-slate-400"><strong>Prerrequisito Fisiológico:</strong> 10 Pike Push-ups en suelo; Estabilidad extrema de muñeca.</p>
                        <p className="text-slate-400"><strong>Progresión Lógica:</strong> Handstand Push-up asistido.</p>
                      </div>

                      <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
                        <div className="flex justify-between items-center"><strong className="text-indigo-200">Extensiones de Tríceps (Anillas/Barra)</strong><span className="text-[10px] bg-amber-950/60 text-amber-300 border border-amber-900/50 px-2 py-0.5 rounded">Intermedio</span></div>
                        <p className="text-slate-400"><strong>Prerrequisito Fisiológico:</strong> Fuerza tendinosa en el codo (Aísla cabeza larga).</p>
                        <p className="text-slate-400"><strong>Progresión Lógica:</strong> Alejar los pies del anclaje (mayor desventaja mecánica).</p>
                      </div>

                      <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1 col-span-1 md:col-span-2">
                        <div className="flex justify-between items-center"><strong className="text-indigo-200">Ext. de Hombros Frontales (Anillas)</strong><span className="text-[10px] bg-amber-950/60 text-amber-300 border border-amber-900/50 px-2 py-0.5 rounded">Int-Avanzado</span></div>
                        <p className="text-slate-400"><strong>Prerrequisito Fisiológico:</strong> Acondicionamiento del deltoides anterior (similar a elevación frontal).</p>
                        <p className="text-slate-400"><strong>Progresión Lógica:</strong> Mayor inclinación del cuerpo hacia el suelo.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 2. PATRÓN DE TRACCIÓN (PULL) */}
                <div className="space-y-4 pt-4">
                  <div className="border-b border-red-900/50 pb-2">
                    <strong className="text-red-400 font-bold block text-sm font-outfit">2. PATRÓN DE TRACCIÓN (PULL)</strong>
                    <p className="text-xs text-slate-400">Trabajo de la cadena posterior: Dorsal ancho, redondo mayor, romboides, trapecio y bíceps braquial.</p>
                  </div>

                  {/* A. Tracción Horizontal */}
                  <div className="space-y-3">
                    <h4 className="text-xs font-bold text-red-300 uppercase tracking-wider font-mono">A. Tracción Horizontal (Familia de los Remos)</h4>
                    <p className="text-xs text-slate-400 italic">El vector tira del cuerpo hacia un punto de anclaje frontal. Imprescindible para el grosor de la espalda y la salud del manguito rotador.</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                      <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
                        <div className="flex justify-between items-center"><strong className="text-red-200">Remo Invertido (Rodillas dobladas)</strong><span className="text-[10px] bg-slate-800 px-2 py-0.5 rounded text-slate-300">Principiante</span></div>
                        <p className="text-slate-400"><strong>Prerrequisito Fisiológico:</strong> Retracción escapular básica.</p>
                        <p className="text-slate-400"><strong>Progresión Lógica:</strong> Extender las piernas por completo.</p>
                      </div>

                      <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
                        <div className="flex justify-between items-center"><strong className="text-red-200">Dominada Australiana (Remo Extendido)</strong><span className="text-[10px] bg-amber-950/60 text-amber-300 border border-amber-900/50 px-2 py-0.5 rounded">Intermedio</span></div>
                        <p className="text-slate-400"><strong>Prerrequisito Fisiológico:</strong> Piernas extendidas; tracción al esternón.</p>
                        <p className="text-slate-400"><strong>Progresión Lógica:</strong> Bajar la altura de la barra/anillas.</p>
                      </div>

                      <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
                        <div className="flex justify-between items-center"><strong className="text-red-200">Dominada Australiana Invertida (Supina)</strong><span className="text-[10px] bg-amber-950/60 text-amber-300 border border-amber-900/50 px-2 py-0.5 rounded">Intermedio</span></div>
                        <p className="text-slate-400"><strong>Prerrequisito Fisiológico:</strong> Dominada australiana prona (Enfatiza bíceps).</p>
                        <p className="text-slate-400"><strong>Progresión Lógica:</strong> Elevar los pies a la altura de las manos.</p>
                      </div>

                      <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
                        <div className="flex justify-between items-center"><strong className="text-red-200">Remo en Anillas</strong><span className="text-[10px] bg-amber-950/60 text-amber-300 border border-amber-900/50 px-2 py-0.5 rounded">Intermedio</span></div>
                        <p className="text-slate-400"><strong>Prerrequisito Fisiológico:</strong> Permite rotación natural de muñeca (Prono a Supino).</p>
                        <p className="text-slate-400"><strong>Progresión Lógica:</strong> Remo Arquero en anillas (unilateral).</p>
                      </div>

                      <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1 col-span-1 md:col-span-2">
                        <div className="flex justify-between items-center"><strong className="text-red-200">Extensiones de Hombros (Anillas)</strong><span className="text-[10px] bg-amber-950/60 text-amber-300 border border-amber-900/50 px-2 py-0.5 rounded">Int-Avanzado</span></div>
                        <p className="text-slate-400"><strong>Prerrequisito Fisiológico:</strong> Tensión de estiramiento en haz posterior/dorsal.</p>
                        <p className="text-slate-400"><strong>Progresión Lógica:</strong> Transición hacia el Cristo de hierro (Iron Cross).</p>
                      </div>
                    </div>
                  </div>

                  {/* B. Tracción Vertical y Aislamiento */}
                  <div className="space-y-3 pt-2">
                    <h4 className="text-xs font-bold text-red-300 uppercase tracking-wider font-mono">B. Tracción Vertical y Aislamiento</h4>
                    <p className="text-xs text-slate-400 italic">El vector desplaza el cuerpo hacia arriba venciendo la gravedad pura. Construye la amplitud de la espalda (dorsal ancho).</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                      <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
                        <div className="flex justify-between items-center"><strong className="text-red-200">Dominada Negativa (Excéntrica)</strong><span className="text-[10px] bg-slate-800 px-2 py-0.5 rounded text-slate-300">Principiante</span></div>
                        <p className="text-slate-400"><strong>Prerrequisito Fisiológico:</strong> Soportar el peso corporal colgado.</p>
                        <p className="text-slate-400"><strong>Progresión Lógica:</strong> Control de bajada de 5 segundos → Dominada estricta.</p>
                      </div>

                      <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
                        <div className="flex justify-between items-center"><strong className="text-red-200">Dominada Supina (Chin-up)</strong><span className="text-[10px] bg-amber-950/60 text-amber-300 border border-amber-900/50 px-2 py-0.5 rounded">Intermedio</span></div>
                        <p className="text-slate-400"><strong>Prerrequisito Fisiológico:</strong> 5 Dominadas negativas (Ventaja mecánica del bíceps).</p>
                        <p className="text-slate-400"><strong>Progresión Lógica:</strong> Dominada Prona (Pull-up).</p>
                      </div>

                      <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
                        <div className="flex justify-between items-center"><strong className="text-red-200">Dominada Prona Estricta</strong><span className="text-[10px] bg-amber-950/60 text-amber-300 border border-amber-900/50 px-2 py-0.5 rounded">Intermedio</span></div>
                        <p className="text-slate-400"><strong>Prerrequisito Fisiológico:</strong> Retracción escapular inicial inquebrantable.</p>
                        <p className="text-slate-400"><strong>Progresión Lógica:</strong> Dominadas al pecho.</p>
                      </div>

                      <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
                        <div className="flex justify-between items-center"><strong className="text-red-200">Dominadas al Pecho / Explosivas</strong><span className="text-[10px] bg-rose-950/60 text-rose-300 border border-rose-900/50 px-2 py-0.5 rounded">Avanzado</span></div>
                        <p className="text-slate-400"><strong>Prerrequisito Fisiológico:</strong> 10 Dominadas estrictas.</p>
                        <p className="text-slate-400"><strong>Progresión Lógica:</strong> Muscle-Up estricto.</p>
                      </div>

                      <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1 col-span-1 md:col-span-2">
                        <div className="flex justify-between items-center"><strong className="text-red-200">Curl de Bíceps en Anillas</strong><span className="text-[10px] bg-amber-950/60 text-amber-300 border border-amber-900/50 px-2 py-0.5 rounded">Intermedio</span></div>
                        <p className="text-slate-400"><strong>Prerrequisito Fisiológico:</strong> Dominadas supinas (Aislamiento puro del bíceps tirando del cuerpo).</p>
                        <p className="text-slate-400"><strong>Progresión Lógica:</strong> Mayor inclinación (pies más adelante).</p>
                      </div>
                    </div>
                  </div>

                  {/* C. Tracción de Cadena Completa y Eje Rotacional */}
                  <div className="space-y-3 pt-2">
                    <h4 className="text-xs font-bold text-red-300 uppercase tracking-wider font-mono">C. Tracción de Cadena Completa y Eje Rotacional (Gimnásticos)</h4>
                    <p className="text-xs text-slate-400 italic">Movimientos complejos que integran tracción extrema, movilidad de hombros y core.</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                      <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
                        <div className="flex justify-between items-center"><strong className="text-red-200">Skin the Cat (Anillas / Barra)</strong><span className="text-[10px] bg-amber-950/60 text-amber-300 border border-amber-900/50 px-2 py-0.5 rounded">Intermedio</span></div>
                        <p className="text-slate-400"><strong>Prerrequisito Fisiológico:</strong> Elevación de rodillas colgado; flexión de hombros.</p>
                        <p className="text-slate-400"><strong>Progresión Lógica:</strong> German Hang (sostén isométrico al final).</p>
                      </div>

                      <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
                        <div className="flex justify-between items-center"><strong className="text-red-200">Pull Over (Barra / Anillas)</strong><span className="text-[10px] bg-amber-950/60 text-amber-300 border border-amber-900/50 px-2 py-0.5 rounded">Int-Avanzado</span></div>
                        <p className="text-slate-400"><strong>Prerrequisito Fisiológico:</strong> Skin the cat dominado; tracción abdominal.</p>
                        <p className="text-slate-400"><strong>Progresión Lógica:</strong> Muscle Up.</p>
                      </div>

                      <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1 col-span-1 md:col-span-2">
                        <div className="flex justify-between items-center"><strong className="text-red-200">Upside Down Deadlift (Anillas)</strong><span className="text-[10px] bg-rose-950/60 text-rose-300 border border-rose-900/50 px-2 py-0.5 rounded">Avanzado</span></div>
                        <p className="text-slate-400"><strong>Prerrequisito Fisiológico:</strong> Control de la inversión (Inverted Hang); fuerza de espalda baja e isquios.</p>
                        <p className="text-slate-400"><strong>Progresión Lógica:</strong> Transiciones a Back Lever / Front Lever.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Recordatorio Fisiológico Innegociable */}
                <div className="p-4 bg-red-950/40 rounded-2xl border border-red-900/60 text-xs text-red-200 space-y-2 mt-4 font-sans">
                  <strong className="text-red-300 font-bold block text-sm font-outfit">Recordatorio Fisiológico Innegociable:</strong>
                  <p>• <strong>El Límite de 15 (Fuerza vs. Resistencia):</strong> Superar las 15 repeticiones o 15 segundos estáticos elimina el estímulo hipertrófico y de fuerza para convertirse en resistencia pura. Al llegar a 15, el peso ya no te desafía; debes cambiar a una variación más difícil para someter al músculo a nueva tensión mecánica extrema.</p>
                  <p>• <strong>Ranita y Handstand (Tu Seguro Articular):</strong> Dominarlos desde el inicio es obligatorio para engrosar los tendones de tus muñecas y automatizar la estabilización escapular. Sin este blindaje estructural temprano, tu manguito rotador colapsará y se desgarrará al intentar palancas avanzadas en el futuro.</p>
                </div>
              </section>
            </div>
          </article>
        )}

        {/* ========================================================================= */}
        {/* MÓDULO 6: MOVILIDAD, FLEXIBILIDAD Y COMPRESIÓN */}
        {/* ========================================================================= */}
        {selectedModule === 6 && (
          <article className="glass-panel p-6 md:p-10 rounded-3xl glow-indigo space-y-8 bg-slate-950/90 border border-slate-800">
            <header className="border-b border-slate-800 pb-5 space-y-2">
              <span className="text-xs font-mono font-bold text-violet-400 uppercase tracking-widest bg-violet-950/60 px-3 py-1 rounded-full border border-violet-900">
                CAPÍTULO 6
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white font-outfit pt-2">
                🧘‍♀️ MÓDULO 6: Movilidad, Flexibilidad y Compresión
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed italic">
                Fundamentos clínicos, diferencias de timing y los Big 5.
              </p>
            </header>

            <div className="space-y-6 text-sm text-slate-300 leading-relaxed">
              <section className="space-y-3 bg-slate-900/50 p-5 rounded-2xl border border-slate-850">
                <h3 className="text-lg font-bold text-white font-outfit">1. Fundamentos Clínicos</h3>
                <div className="space-y-2 text-xs pl-2">
                  <p>• <strong>Movilidad (Rango Activo):</strong> Control motor propio sin fatiga extrema. Se hace PRE-entrenamiento o a diario.</p>
                  <p>• <strong>Flexibilidad (Rango Pasivo):</strong> Longitud máxima cediendo a una fuerza externa. El sistema nervioso (reflejo de estiramiento) limita esto, no el músculo. Se hace POST-entrenamiento (músculo caliente).</p>
                  <p>• <strong>Compresión (Fuerza Específica):</strong> Fuerza pura del psoas ilíaco y core contra los isquios. Genera altísima fatiga del SNC. 2-3 veces por semana.</p>
                </div>
              </section>

              <section className="space-y-3 bg-slate-900/50 p-5 rounded-2xl border border-slate-850">
                <h3 className="text-lg font-bold text-white font-outfit">2. Sistemas de Flexibilidad y los &quot;Big 5&quot;</h3>
                <p className="text-xs">Basado en engañar al sistema nervioso (Inhibición recíproca y Facilitación Neuromuscular - FNP).</p>
                <div className="space-y-1.5 text-xs pl-2 font-semibold">
                  <p>1. Pike (Pliegue frontal cerrado)</p>
                  <p>2. Pancake (Pliegue frontal abierto)</p>
                  <p>3. Front Split (Spagat frontal)</p>
                  <p>4. Middle Split (Spagat lateral)</p>
                  <p>5. Bridge (Extensión torácica)</p>
                </div>
              </section>
            </div>
          </article>
        )}

        {/* ========================================================================= */}
        {/* MÓDULO 7: BASE DE DATOS DE EJERCICIOS Y RUTINAS */}
        {/* ========================================================================= */}
        {selectedModule === 7 && (
          <article className="glass-panel p-6 md:p-10 rounded-3xl glow-indigo space-y-8 bg-slate-950/90 border border-slate-800">
            <header className="border-b border-slate-800 pb-5 space-y-2">
              <span className="text-xs font-mono font-bold text-indigo-400 uppercase tracking-widest bg-indigo-950/60 px-3 py-1 rounded-full border border-indigo-900">
                CAPÍTULO 7
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white font-outfit pt-2">
                🗄️ MÓDULO 7: Base de Datos de Ejercicios y Rutinas (El Archivo)
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed italic">
                El repositorio completo del plan de entrenamiento y movilidad.
              </p>
            </header>

            <div className="space-y-6 text-sm text-slate-300 leading-relaxed">
              <section className="space-y-3 bg-slate-900/50 p-5 rounded-2xl border border-slate-850">
                <h3 className="text-lg font-bold text-indigo-400 font-outfit">🔵 DÍA 1: PUSH (Empuje)</h3>
                <div className="text-xs space-y-1 pl-2">
                  <p>• <strong>Tríceps (Prioridad 1):</strong> Extensiones tras nuca (polea/mancuerna), Rompecráneos, Extensiones pushdown.</p>
                  <p>• <strong>Hombros (Prioridad 2):</strong> Elevaciones laterales, Y-Raises (pájaros), Press militar.</p>
                  <p>• <strong>Pecho (Prioridad 3):</strong> Cruces en polea, Pec-Dec, Press inclinado (mancuerna/Smith).</p>
                  <p className="text-amber-400 pt-1 font-mono">TIPS: En push-ups proyecta en diagonal. En aperturas, piensa en juntar los bíceps.</p>
                </div>
              </section>

              <section className="space-y-3 bg-slate-900/50 p-5 rounded-2xl border border-slate-850">
                <h3 className="text-lg font-bold text-red-400 font-outfit">🔴 DÍA 2: PULL (Tracción)</h3>
                <div className="text-xs space-y-1 pl-2">
                  <p>• <strong>Bíceps (Prioridad 1):</strong> Curl inclinado, Curl Bayesian, Curl Scott/Spider, Curl Martillo.</p>
                  <p>• <strong>Espalda Densidad (Prioridad 2):</strong> Remo en T (pecho apoyado), Remo Gironda, Remo con mancuerna, Jalón cerrado.</p>
                  <p>• <strong>Dorsal y Lumbar (Prioridad 3):</strong> Jalón amplio, Pullover, Facepull (obligatorio), Extensiones lumbares.</p>
                  <p className="text-amber-400 pt-1 font-mono">TIPS: En pullovers, tracciona llevando los codos a la cadera, no las manos. Frena la excéntrica.</p>
                </div>
              </section>

              <section className="space-y-3 bg-slate-900/50 p-5 rounded-2xl border border-slate-850">
                <h3 className="text-lg font-bold text-emerald-400 font-outfit">🟢 DÍA 3: LEGS 1 (Enfoque Cuádriceps)</h3>
                <div className="text-xs space-y-1 pl-2">
                  <p>• <strong>Vasto Interno (Prioridad 1):</strong> Sillón de cuádriceps, Sentadilla Sissy.</p>
                  <p>• <strong>Masa Base (Prioridad 2):</strong> Prensa, Sentadilla Hack/Pendular, Búlgara, Pistol/Dragon Squat.</p>
                  <p>• <strong>Gemelos (Prioridad 3):</strong> Elevaciones de pie (Gastrocnemio).</p>
                  <p className="text-amber-400 pt-1 font-mono">TIPS: En aductores, baja el peso y prioriza la profundidad.</p>
                </div>
              </section>

              <section className="space-y-3 bg-slate-900/50 p-5 rounded-2xl border border-slate-850">
                <h3 className="text-lg font-bold text-amber-400 font-outfit">🟡 DÍA 4: LEGS 2 (Enfoque Cadena Posterior)</h3>
                <div className="text-xs space-y-1 pl-2">
                  <p>• <strong>Isquios y Glúteos (Prioridad 1):</strong> Peso Muerto Rumano, Curl Femoral, Curl Nórdico, Hip Thrust, Máquina Abductora.</p>
                  <p>• <strong>Gemelos (Prioridad 2):</strong> Elevaciones sentado (Sóleo).</p>
                  <p>• <strong>Core (Prioridad 3):</strong> Crunch en polea, Ab-wheel, Plancha RKC.</p>
                </div>
              </section>

              <section className="space-y-3 bg-slate-900/50 p-5 rounded-2xl border border-slate-850">
                <h3 className="text-lg font-bold text-white font-outfit">📌 REPOSITORIO DE MOVILIDAD COMPLETO</h3>
                <p className="text-xs text-slate-400">Organizados por categoría para calentamiento o post-entreno:</p>
                <div className="space-y-2 text-xs pl-2">
                  <p>• <strong>Compresiones y Flexores de Cadera:</strong> Hip Flexor &amp; Handstand Prep, Compresiones en caja y completas, Hip Flexion Lifts &amp; Hip Flexor Pistol Squats, Banded Lying Hip Flexor March, Rutina Pancake - Compresión.</p>
                  <p>• <strong>Hombros, Pecho y Columna Torácica:</strong> Active Stretch in Bench Shoulder (Torácica), Banded Internal Rotation &amp; Distraction, Rotaciones Externas (Pesa/Banda/Suelo), Prone Chest Opener &amp; T-Spine Rotation.</p>
                  <p>• <strong>Cadera, Glúteos y Aductores:</strong> Adduction, Abduction, IR/ER Flexion, 90/90 Stretch, Transitions, Couch &amp; Pigeon, Copenhagen Holds, Clamshell, Hip Airplanes, Adductor Rockbacks, Kneeling Lunge, Heel Taps.</p>
                  <p>• <strong>Isquios y Preparación Pancake:</strong> Squat to Forward Fold &amp; Prone Posterior Lift, Rutina Pancake (Banda, Aperturas, Cadera, Piernas).</p>
                  <p>• <strong>Rodillas y Tobillos:</strong> Banded Terminal Knee Extension, Kneeling Hip Hinge, Deep Squat Ankle Prys &amp; Calf Raises.</p>
                  <p>• <strong>Flujos y Movilidad General:</strong> Movilidad Cuerpo Completo, World’s Greatest Stretch, Runner&apos;s Lunge, Squat Reach Twist.</p>
                </div>
              </section>
            </div>
          </article>
        )}

        {/* ========================================================================= */}
        {/* MÓDULO 8: FISIOLOGÍA FEMENINA Y PERIODIZACIÓN */}
        {/* ========================================================================= */}
        {selectedModule === 8 && (
          <article className="glass-panel p-6 md:p-10 rounded-3xl glow-indigo space-y-8 bg-slate-950/90 border border-slate-800">
            <header className="border-b border-slate-800 pb-5 space-y-2">
              <span className="text-xs font-mono font-bold text-fuchsia-400 uppercase tracking-widest bg-fuchsia-950/60 px-3 py-1 rounded-full border border-fuchsia-900">
                CAPÍTULO 8
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white font-outfit pt-2">
                🩸 MÓDULO 8: Fisiología Femenina y Periodización (El Reloj Biológico)
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed italic">
                Sincronización del entrenamiento y metabolismo con las 4 fases del ciclo menstrual.
              </p>
            </header>

            <div className="space-y-6 text-sm text-slate-300 leading-relaxed">
              <section className="space-y-2 bg-slate-900/50 p-5 rounded-2xl border border-slate-850">
                <h3 className="text-base font-bold text-amber-400 font-outfit">1. Fase Menstrual (Días 1 a 5) ➔ Semana 1: Introducción y Acumulación</h3>
                <p className="text-xs">• <strong>Qué pasa en tu cuerpo:</strong> Al inicio del sangrado, tus niveles de estrógeno y progesterona caen a su punto más bajo. Durante los primeros 1-2 días, es normal experimentar inflamación, calambres y una caída en la energía debido a la pérdida de sangre y la acción de las prostaglandinas. Sin embargo, a medida que avanzan los días, tus hormonas comienzan a estabilizarse en un perfil muy similar al masculino (bajas y estables).</p>
                <p className="text-xs">• <strong>El metabolismo:</strong> Tu cuerpo depende principalmente de los carbohidratos para obtener energía rápida.</p>
                <p className="text-xs">• <strong>Por qué entrenamos así:</strong> Esta es la Semana 1 de tu mesociclo. Vienes de una semana de descarga y tus hormonas se están reseteando. Es el momento perfecto para acumular volumen con pesos moderados, afianzar la técnica robótica que exige la hipertrofia y preparar el sistema nervioso para las semanas que vienen.</p>
              </section>

              <section className="space-y-2 bg-slate-900/50 p-5 rounded-2xl border border-slate-850">
                <h3 className="text-base font-bold text-indigo-400 font-outfit">2. Fase Folicular (Días 6 a 13) ➔ Semana 2: Intensificación</h3>
                <p className="text-xs">• <strong>Qué pasa en tu cuerpo:</strong> El estrógeno comienza a subir drásticamente hasta alcanzar su pico. El estrógeno es una hormona altamente anabólica y neuroprotectora.</p>
                <p className="text-xs">• <strong>El metabolismo:</strong> Tu sensibilidad a la insulina está en su punto máximo (los carbohidratos van directo al músculo para recargar glucógeno). Tu tolerancia al dolor aumenta, tu recuperación muscular es rapidísima y el daño muscular (miotrauma) se repara a una velocidad récord.</p>
                <p className="text-xs">• <strong>Por qué entrenamos así:</strong> Esta es la Semana 2. Tienes luz verde metabólica. Es el momento de aprovechar la alta sensibilidad a la insulina y el entorno anabólico para subir las cargas, empujar el volumen, someter al cuerpo a las posiciones de máximo estiramiento bajo carga (LML) y buscar la fatiga profunda en los bloques de hipertrofia.</p>
              </section>

              <section className="space-y-2 bg-slate-900/50 p-5 rounded-2xl border border-slate-850">
                <h3 className="text-base font-bold text-fuchsia-400 font-outfit">3. Fase Ovulatoria (Días 14 a 16) ➔ Semana 3: Clímax (Semana de Récords)</h3>
                <p className="text-xs">• <strong>Qué pasa en tu cuerpo:</strong> El estrógeno llega a su punto máximo absoluto y suele estar acompañado de un pequeño pero significativo pico de testosterona. Eres literalmente más fuerte y tu sistema nervioso central puede disparar los impulsos eléctricos con máxima violencia.</p>
                <p className="text-xs">• <strong>Peligro biomecánico:</strong> Durante la ovulación, el cuerpo libera una hormona llamada relaxina. Esto hace que tus ligamentos y tendones estén más laxos.</p>
                <p className="text-xs">• <strong>Por qué entrenamos así:</strong> Esta es tu Semana 3 (El pico del mesociclo). Es el momento de ir a por esa repetición extra, subir los pasadores de las máquinas y romper tus récords de peso. Atención con la movilidad: Dado que la relaxina afloja los ligamentos, debes tener especial control técnico en los estiramientos extremos (como los splits, el pancake o las compresiones profundas) para asegurarte de que estás estirando el vientre muscular y no desestabilizando la cápsula articular.</p>
              </section>

              <section className="space-y-2 bg-slate-900/50 p-5 rounded-2xl border border-slate-850">
                <h3 className="text-base font-bold text-blue-400 font-outfit">4. Fase Lútea (Días 17 a 28) ➔ Semana 4: Semana de Descarga</h3>
                <p className="text-xs">• <strong>Qué pasa en tu cuerpo:</strong> Tras ovular, el estrógeno cae y la progesterona toma el control. La progesterona es una hormona catabólica (destructora de tejido). Tu temperatura basal sube (haciendo que el ejercicio cardiovascular te fatigue mucho más rápido). Tu sensibilidad a la insulina disminuye (el cuerpo prefiere oxidar grasas en lugar de glucógeno) y tu recuperación neuronal se vuelve lenta y torpe. Las alteraciones en la serotonina pueden traer baja motivación o fatiga mental (síndrome premenstrual).</p>
                <p className="text-xs">• <strong>Por qué entrenamos así:</strong> Esta es exactamente tu Semana 4 (La Descarga). Empujar el sistema al fallo durante esta fase es un error clínico; el cuerpo no tiene el entorno hormonal para recuperarse del daño y solo acumularás fatiga basura. Al bajar el volumen (quitar series) y reducir las cargas, permites que tu cuerpo disipe toda la fatiga acumulada de las tres semanas anteriores. Mantienes el tejido activo, pero respetas la fisiología de reparación de la fase lútea.</p>
              </section>
            </div>
          </article>
        )}

        {/* ========================================================================= */}
        {/* MÓDULO 9: LA FISIOLOGÍA DE LA SESIÓN HÍBRIDA */}
        {/* ========================================================================= */}
        {selectedModule === 9 && (
          <article className="glass-panel p-6 md:p-10 rounded-3xl glow-indigo space-y-8 bg-slate-950/90 border border-slate-800">
            <header className="border-b border-slate-800 pb-5 space-y-2">
              <span className="text-xs font-mono font-bold text-indigo-400 uppercase tracking-widest bg-indigo-950/60 px-3 py-1 rounded-full border border-indigo-900">
                CAPÍTULO 9
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white font-outfit pt-2">
                🧩 MÓDULO 9: La Fisiología de la Sesión Híbrida (Calistenia + Hierros)
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed italic">
                Desglose biológico de los 4 bloques del entrenamiento híbrido.
              </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="p-4 bg-slate-900/60 rounded-xl border border-slate-850 space-y-1">
                <strong className="text-indigo-400 font-bold block text-sm font-outfit">Bloque 1 (Fuerza Relativa)</strong>
                <p className="text-slate-300">Calistenia pura. SNC fresco. Adaptación neural sin llegar al fallo total.</p>
              </div>
              <div className="p-4 bg-slate-900/60 rounded-xl border border-slate-850 space-y-1">
                <strong className="text-emerald-400 font-bold block text-sm font-outfit">Bloque 2 (Hipertrofia Miofibrilar)</strong>
                <p className="text-slate-300">Máquinas pesadas y compuestos. Se aprovecha la estabilidad guiada para generar daño muscular a pesar de la fatiga del SNC.</p>
              </div>
              <div className="p-4 bg-slate-900/60 rounded-xl border border-slate-850 space-y-1">
                <strong className="text-amber-400 font-bold block text-sm font-outfit">Bloque 3 (Aislamiento y Estrés Metabólico)</strong>
                <p className="text-slate-300">Fibras rápidas fatigadas. Acumulación de lactato, LML extremo. RIR al límite.</p>
              </div>
              <div className="p-4 bg-slate-900/60 rounded-xl border border-slate-850 space-y-1">
                <strong className="text-fuchsia-400 font-bold block text-sm font-outfit">Bloque 4 (Barrido Metabólico)</strong>
                <p className="text-slate-300">Cardio suave y movilidad para retorno venoso y limpieza de lactato.</p>
              </div>
            </div>
          </article>
        )}

        {/* ========================================================================= */}
        {/* MÓDULO 10: HACKS DE EJECUCIÓN Y SECRETOS DE ENTRENAMIENTO */}
        {/* ========================================================================= */}
        {selectedModule === 10 && (
          <article className="glass-panel p-6 md:p-10 rounded-3xl glow-indigo space-y-8 bg-slate-950/90 border border-slate-800">
            <header className="border-b border-slate-800 pb-5 space-y-2">
              <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest bg-amber-950/60 px-3 py-1 rounded-full border border-amber-900">
                CAPÍTULO 10
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white font-outfit pt-2">
                🎯 MÓDULO 10: Hacks de Ejecución y Secretos de Entrenamiento
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed italic">
                Secretos técnicos de aislamiento y enlaces de videoteca en Instagram.
              </p>
            </header>

            <div className="space-y-6 text-xs text-slate-300 leading-relaxed">

              {/* TRACCIÓN Y BÍCEPS */}
              <div className="p-5 bg-slate-900/60 rounded-2xl border border-slate-850 space-y-3">
                <strong className="text-red-400 font-bold text-base block font-outfit">💥 TRACCIÓN Y BÍCEPS</strong>
                <ul className="space-y-2.5 list-disc pl-4 text-xs">
                  <li><strong>Facepull:</strong> Polea por encima de los ojos. Tira hacia atrás, sostén la postura y aprieta 2 segundos.</li>
                  <li><strong>Espalda (Remos/Tirones):</strong> Foco en la bajada (excéntrica). Estira al máximo el músculo y luego aprieta fuerte al traccionar.</li>
                  <li>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <span><strong>Pullover:</strong> Pecho arriba y codos semi-fijos. Tracciona llevando los codos hacia la cadera (siente el dorsal), no empujes con las manos.</span>
                      <a href="https://www.instagram.com/reel/Db6yK1GJiBa/?igsh=bDNyNGd2bW0zNDM1" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-fuchsia-950/80 border border-fuchsia-800 text-fuchsia-300 font-bold hover:bg-fuchsia-900 transition-colors shrink-0">
                        <InstagramIcon className="w-3.5 h-3.5" />
                        <span>Ver Reel Pullover</span>
                      </a>
                    </div>
                  </li>
                  <li><strong>Bíceps:</strong> Frena el movimiento y aprieta el músculo 1 segundo arriba en cada repetición.</li>
                </ul>
              </div>

              {/* EMPUJES Y PECTORAL */}
              <div className="p-5 bg-slate-900/60 rounded-2xl border border-slate-850 space-y-3">
                <strong className="text-indigo-400 font-bold text-base block font-outfit">🔥 EMPUJES Y PECTORAL</strong>
                <ul className="space-y-2.5 list-disc pl-4 text-xs">
                  <li>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <span><strong>Push-ups:</strong> Proyecta el cuerpo en diagonal hacia adelante, no recto hacia abajo.</span>
                      <a href="https://www.instagram.com/reel/DXE0SgFuM4b/?igsh=MXBwa3o3enRpN3RnMg%3D%3D" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-950/80 border border-indigo-800 text-indigo-300 font-bold hover:bg-indigo-900 transition-colors shrink-0">
                        <InstagramIcon className="w-3.5 h-3.5" />
                        <span>Ver Reel Push-ups</span>
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <span><strong>Pec-Deck (Aperturas):</strong> Hombros abajo y pecho afuera. Codos hacia abajo. Piensa en juntar los bíceps, no las manos.</span>
                      <a href="https://www.instagram.com/reel/DYZxcCZsjKu/?igsh=MWYwcWxwM2VqeGxtdA%3D%3D" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-950/80 border border-indigo-800 text-indigo-300 font-bold hover:bg-indigo-900 transition-colors shrink-0">
                        <InstagramIcon className="w-3.5 h-3.5" />
                        <span>Ver Reel Pec-Deck</span>
                      </a>
                    </div>
                  </li>
                </ul>
              </div>

              {/* TREN INFERIOR */}
              <div className="p-5 bg-slate-900/60 rounded-2xl border border-slate-850 space-y-3">
                <strong className="text-emerald-400 font-bold text-base block font-outfit">🦵 TREN INFERIOR</strong>
                <ul className="space-y-2.5 list-disc pl-4 text-xs">
                  <li>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <span><strong>Aductores:</strong> Deja el ego, baja el peso. Apoya los pies más abajo en la plataforma para estirar más profundo.</span>
                      <a href="https://www.instagram.com/reel/DV1CdaMDOm_/?igsh=Y3h2ZWZhZ29kcDJ0" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-950/80 border border-emerald-800 text-emerald-300 font-bold hover:bg-emerald-900 transition-colors shrink-0">
                        <InstagramIcon className="w-3.5 h-3.5" />
                        <span>Ver Reel Aductores</span>
                      </a>
                    </div>
                  </li>
                </ul>
              </div>

            </div>
          </article>
        )}

      </div>

    </div>
  );
}
