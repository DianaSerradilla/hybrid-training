import React, { useState } from 'react';
import {
  BookOpen, Bookmark, ChevronRight, ExternalLink
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

  const moduleMeta = {
    1: {
      category: "Fisiología Muscular",
      readTime: 12,
      cover: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80",
      subtitle: "La hipertrofia muscular y la fuerza son dos adaptaciones fisiológicas distintas que responden al entrenamiento con cargas.",
      date: "12 Agosto, 2026"
    },
    2: {
      category: "Nutrición & Macros",
      readTime: 8,
      cover: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1200&q=80",
      subtitle: "Para construir la casa del músculo, la proteína son los ladrillos, pero los carbohidratos son los trabajadores y la electricidad.",
      date: "12 Agosto, 2026"
    },
    3: {
      category: "Biomecánica Aplicada",
      readTime: 12,
      cover: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80",
      subtitle: "Si un programa omite estos vectores anatómicos inquebrantables, está biológicamente incompleto.",
      date: "12 Agosto, 2026"
    },
    4: {
      category: "Programación & LML",
      readTime: 9,
      cover: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1200&q=80",
      subtitle: "La pirámide de la hipertrofia pura, Long Muscle Length (LML) y la gestión óptima del volumen.",
      date: "12 Agosto, 2026"
    },
    5: {
      category: "Calistenia & Skills",
      readTime: 15,
      cover: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&w=1200&q=80",
      subtitle: "Metodologías de progreso, ejes de estabilización, patrones vs. vectores y jerarquía de habilidades.",
      date: "12 Agosto, 2026"
    },
    6: {
      category: "Movilidad & Flexibilidad",
      readTime: 8,
      cover: "https://images.unsplash.com/photo-1552196563-55cd4e45efb3?auto=format&fit=crop&w=1200&q=80",
      subtitle: "Fundamentos clínicos de flexibilidad activa vs. pasiva, compresión y el protocolo de los Big 5.",
      date: "12 Agosto, 2026"
    },
    7: {
      category: "Rutinas & Base de Datos",
      readTime: 18,
      cover: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=1200&q=80",
      subtitle: "El repositorio técnico completo del plan de entrenamiento Push/Pull/Legs y movilidad.",
      date: "12 Agosto, 2026"
    },
    8: {
      category: "Periodización Femenina",
      readTime: 10,
      cover: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80",
      subtitle: "Sincronización del entrenamiento e hipertrofia con las 4 fases biológicas del ciclo menstrual.",
      date: "12 Agosto, 2026"
    },
    9: {
      category: "Metodología Híbrida",
      readTime: 7,
      cover: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=1200&q=80",
      subtitle: "Desglose biológico de los 4 bloques del entrenamiento híbrido: calistenia + peso libre.",
      date: "12 Agosto, 2026"
    },
    10: {
      category: "Hacks & Secretos",
      readTime: 6,
      cover: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1200&q=80",
      subtitle: "Secretos técnicos de aislamiento neuromuscular y enlaces directos a la videoteca en Instagram.",
      date: "12 Agosto, 2026"
    }
  };

  const meta = moduleMeta[selectedModule] || moduleMeta[1];

  return (
    <div className="space-y-8 max-w-7xl mx-auto w-full text-[#CCD0CF] font-sans pb-12">

      {/* ========================================================================= */}
      {/* CABECERA GENERAL DE LA SECCIÓN WIKI */}
      {/* ========================================================================= */}
      <header className="glass-panel p-6 md:p-8 rounded-3xl border border-[#253745] bg-[#11212D] backdrop-blur-md flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
        <div className="space-y-2 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#06141B] text-[#9BA8AB] border border-[#253745] font-mono">
            <BookOpen className="w-3.5 h-3.5" />
            📚 WIKI DE ENTRENAMIENTO: EL MANUAL DEFINITIVO
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-outfit text-white tracking-tight leading-tight">
            Wiki de Entrenamiento &amp; Fisiología Aplicada
          </h1>
          <p className="text-[#9BA8AB] text-xs sm:text-sm leading-relaxed font-sans">
            Información perfectamente estructurada y jerarquizada lista para organizar el flujo de tu entrenamiento. Todo ordenado para una lectura y consulta impecable.
          </p>
        </div>

        <div className="hidden lg:flex flex-col items-center justify-center p-4 bg-[#06141B] rounded-2xl border border-[#253745] shrink-0 min-w-[200px] text-center font-mono">
          <span className="text-[10px] font-bold text-[#4A5C6A] uppercase tracking-widest block mb-1">
            MANUAL OFICIAL
          </span>
          <span className="text-2xl font-extrabold text-[#CCD0CF] font-outfit block">
            10 Módulos
          </span>
          <span className="text-[11px] text-[#9BA8AB] font-sans">
            Fisiología &amp; Biomecánica
          </span>
        </div>
      </header>

      {/* ========================================================================= */}
      {/* GRID PRINCIPAL: SIDEBAR FLOTANTE + ARTÍCULO ESTILO NOTA DE BLOG */}
      {/* ========================================================================= */}
      <div id="blog-article-start" className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-2">

        {/* COLUMNA IZQUIERDA: SIDEBAR / ÍNDICE DEL BLOG */}
        <aside className="lg:col-span-3 space-y-6 lg:sticky lg:top-4 h-fit">
          <div className="glass-panel p-4 rounded-2xl border border-[#253745] space-y-3 bg-[#11212D]">
            <div className="flex items-center justify-between border-b border-[#253745] pb-2">
              <span className="text-[10px] font-bold font-mono text-[#9BA8AB] uppercase tracking-widest flex items-center gap-1.5">
                <Bookmark className="w-3.5 h-3.5" />
                ÍNDICE DEL BLOG
              </span>
              <span className="text-[10px] font-mono text-[#4A5C6A]">10 Mod.</span>
            </div>

            <div className="space-y-1 max-h-[460px] overflow-y-auto no-scrollbar">
              {modulesList.map((m) => (
                <button
                  key={m.id}
                  onClick={() => {
                    setSelectedModule(m.id);
                    document.getElementById('blog-article-start')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className={`w-full text-left px-3 py-2 rounded-xl text-xs transition-all duration-200 flex items-center justify-between ${selectedModule === m.id
                    ? 'bg-[#253745] text-white font-bold border-l-2 border-[#9BA8AB]'
                    : 'text-[#9BA8AB] hover:text-white hover:bg-[#253745]/40'
                    }`}
                >
                  <span className="truncate pr-1 font-outfit">{m.title}: {m.label}</span>
                  {selectedModule === m.id && <ChevronRight className="w-3.5 h-3.5 text-[#9BA8AB] shrink-0" />}
                </button>
              ))}
            </div>
          </div>
        </aside>

        {/* COLUMNA DERECHA: NOTA DE BLOG (ARTICLE) */}
        <main className="lg:col-span-9">
          <article className="rounded-[2.5rem] p-6 sm:p-10 md:p-14 shadow-2xl transition-all duration-300 bg-[#11212D] border border-[#253745] text-[#CCD0CF]">

            {/* TOP BAR DE LA NOTA */}
            <div className="flex items-center justify-between pb-6 border-b border-[#253745] mb-6">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#9BA8AB]">
                  Nota del Blog — Módulo {selectedModule}
                </span>
              </div>
            </div>

            {/* TÍTULO PRINCIPAL DE LA NOTA */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-outfit tracking-tight leading-[1.15] mb-4 text-[#CCD0CF]">
              {modulesList.find(m => m.id === selectedModule)?.label}
            </h1>

            {/* SUBTÍTULO */}
            <p className="text-base md:text-lg leading-relaxed font-sans max-w-3xl mb-6 text-[#9BA8AB]">
              {meta.subtitle}
            </p>

            {/* INSIGNIAS DE METADATOS */}
            <div className="flex flex-wrap items-center gap-2 py-4 border-t border-b border-[#253745] my-6">
              <span className="px-3.5 py-1 rounded-full border border-[#253745] bg-[#06141B] text-[#CCD0CF] font-medium text-xs">
                Módulo {selectedModule} de 10
              </span>
              <span className="px-3.5 py-1 rounded-full border border-[#253745] bg-[#06141B] text-[#CCD0CF] font-medium text-xs">
                {meta.category}
              </span>
              <span className="px-3.5 py-1 rounded-full border border-[#253745] bg-[#06141B] text-[#9BA8AB] font-mono text-xs">
                {meta.readTime} min de lectura
              </span>
            </div>

            {/* IMAGEN DE PORTADA / HERO BANNER */}
            <div className="overflow-hidden rounded-2xl md:rounded-3xl shadow-md border border-[#253745] max-h-[380px] w-full my-8">
              <img
                src={meta.cover}
                alt={modulesList.find(m => m.id === selectedModule)?.label}
                className="w-full h-full object-cover object-center max-h-[380px] hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* CONTENIDO PRINCIPAL DE LA NOTA (TEXTO EDITORIAL ESTRUCTURADO) */}
            <div className="space-y-8 text-sm sm:text-base leading-relaxed text-[#CCD0CF]">

              {/* ========================================================================= */}
              {/* MÓDULO 1 */}
              {/* ========================================================================= */}
              {selectedModule === 1 && (
                <div className="space-y-8">
                  <p className="text-base leading-relaxed">
                    La hipertrofia muscular y la fuerza son dos adaptaciones fisiológicas distintas, aunque estrechamente interrelacionadas, que ocurren como respuesta al entrenamiento con cargas.
                  </p>

                  <section className="space-y-3">
                    <h2 className="text-xl md:text-2xl font-bold font-outfit mt-6 mb-3 tracking-tight text-white">
                      1. Fuerza vs. Hipertrofia
                    </h2>
                    <p>
                      <strong className="text-[#9BA8AB] font-bold">Fuerza Muscular (Adaptación Neuromuscular):</strong> Los aumentos rápidos de fuerza al iniciar un programa se deben a que el sistema nervioso se vuelve más eficiente. Mejora su capacidad para reclutar más unidades motoras simultáneamente, sincronizar su activación y aumentar la frecuencia de los impulsos eléctricos enviados a los músculos.
                    </p>
                    <p>
                      <strong className="text-slate-100 font-bold">Hipertrofia Muscular (Adaptación Estructural):</strong> Consiste en el aumento del área de sección transversal de las fibras musculares (crecimiento físico). Ocurre por un aumento neto en la síntesis de proteínas contráctiles (actina y miosina) y estructurales dentro de la célula.
                    </p>
                  </section>

                  <section className="space-y-3">
                    <h2 className="text-xl md:text-2xl font-bold font-outfit mt-8 mb-3 tracking-tight text-white">
                      2. Mecanismos de la Hipertrofia
                    </h2>
                    <p>Para que el músculo crezca, necesita estímulos específicos:</p>
                    <div className="space-y-3 pl-2">
                      <p>
                        • <strong className="text-[#9BA8AB] font-bold">Tensión Mecánica (El factor primordial):</strong> Es la fuerza física que se ejerce sobre las fibras al contraerse o estirarse bajo resistencia. Es detectada por mecanosensores celulares que traducen el estímulo físico en señales químicas de crecimiento.
                      </p>
                      <p>
                        • <strong className="text-slate-100 font-bold">Estrés Metabólico:</strong> Acumulación de subproductos (lactato, iones de hidrógeno, fosfato inorgánico) durante el ejercicio sostenido. Genera hinchazón celular (el famoso &quot;pump&quot;), estimulando factores de crecimiento adicionales.
                      </p>
                    </div>
                  </section>

                  <section className="space-y-3">
                    <h2 className="text-xl md:text-2xl font-bold font-outfit mt-8 mb-3 tracking-tight text-white">
                      3. Vías de Señalización: mTOR
                    </h2>
                    <p>
                      El complejo <strong className="text-slate-100 font-bold">mTOR (Mechanistic Target of Rapamycin)</strong> es el &quot;interruptor maestro&quot; del crecimiento celular.
                    </p>
                    <p>
                      <strong>Funcionamiento:</strong> Se activa ante una tensión mecánica elevada o una alta disponibilidad de aminoácidos (especialmente leucina). Al encenderse, ordena a los ribosomas ensamblar nuevas proteínas. Si esta síntesis supera a la degradación durante el descanso, hay hipertrofia.
                    </p>
                  </section>

                  <section className="space-y-4">
                    <h2 className="text-xl md:text-2xl font-bold font-outfit mt-8 mb-3 tracking-tight text-white">
                      4. Tipos de Fibras Musculares y Reclutamiento
                    </h2>
                    <div className="space-y-3">
                      <p>• <strong className="text-[#9BA8AB] font-bold">Fibras Tipo I (Lentas u Oxidativas):</strong> Alta resistencia a la fatiga, mucha capacidad oxidativa, menor potencial de hipertrofia. Dominan en aeróbicos y postura.</p>
                      <p>• <strong className="text-slate-100 font-bold">Fibras Tipo II (Rápidas o Glucolíticas):</strong> Se fatigan rápido, dependen del glucógeno (anaeróbico), tienen el mayor potencial de hipertrofia y fuerza explosiva (Se dividen en IIa y IIx).</p>
                      <p>• <strong className="text-[#9BA8AB] font-bold">El Principio de Henneman:</strong> El cerebro recluta primero las unidades motoras pequeñas (Tipo I). A medida que la carga aumenta o aparece la fatiga, se ve obligado a reclutar progresivamente las unidades más grandes (Tipo II). Por eso, para crecer, debes entrenar intenso o llegar cerca del fallo.</p>
                    </div>
                  </section>

                  <section className="space-y-4">
                    <h2 className="text-xl md:text-2xl font-bold font-outfit mt-8 mb-3 tracking-tight text-white">
                      5. 🧬 El Crecimiento de las Fibras: Tipo I vs. Tipo II
                    </h2>
                    <p>
                      Aunque ambas fibras tienen la capacidad de aumentar su tamaño (área de sección transversal), la genética y la biología celular les han otorgado roles muy diferentes.
                    </p>
                    <div className="space-y-4 my-4">
                      <div className="p-5 rounded-2xl border bg-[#06141B]/60 border-[#253745] space-y-2">
                        <strong className="block text-base font-outfit text-[#CCD0CF]">Las Fibras Tipo II (Las &quot;Gigantes&quot; de la Hipertrofia):</strong>
                        <p className="text-sm">• <strong>Capacidad de crecimiento:</strong> Tienen un potencial de hipertrofia masivo. Son las verdaderas responsables de que un músculo se vea grande y voluminoso.</p>
                        <p className="text-sm">• <strong>¿Por qué crecen tanto?</strong> Evolutivamente están diseñadas para generar mucha fuerza en poco tiempo (levantar algo muy pesado o huir de un peligro). Para generar más fuerza, la biología dicta que necesitan hacerse más gruesas.</p>
                        <p className="text-sm">• <strong>¿Cómo se estimulan?</strong> Responden de manera explosiva a la Tensión Mecánica. Se activan cuando levantas cargas pesadas (1 a 8 repeticiones) o cuando mueves cargas moderadas con máxima velocidad e intención.</p>
                      </div>

                      <div className="p-5 rounded-2xl border bg-[#06141B]/60 border-[#253745] space-y-2">
                        <strong className="block text-base font-outfit text-[#9BA8AB]">Las Fibras Tipo I (Las &quot;Maratonistas&quot; Eficientes):</strong>
                        <p className="text-sm">• <strong>Capacidad de crecimiento:</strong> Sí se hipertrofian, pero su potencial de crecimiento es muy limitado en comparación con las Tipo II.</p>
                        <p className="text-sm">• <strong>¿Por qué crecen poco?</strong> Su trabajo no es generar fuerza bruta, sino resistir. Si una fibra Tipo I se hiciera demasiado gruesa, el oxígeno y los nutrientes tardarían mucho en llegar al centro de la célula, lo que arruinaría su capacidad de resistir la fatiga. Por eso, en lugar de hacerse gigantes, se adaptan creando más mitocondrias (fábricas de energía) y más capilares sanguíneos a su alrededor.</p>
                        <p className="text-sm">• <strong>¿Cómo se estimulan?</strong> Responden al Estrés Metabólico y al tiempo bajo tensión. Se fatigan y se ven obligadas a crecer cuando haces series largas (15 a 30 repeticiones) o cuando mantienes isometrías (como aguantar una plancha).</p>
                      </div>
                    </div>
                  </section>

                  <section className="space-y-4">
                    <div className="p-6 rounded-2xl my-6 border bg-[#06141B]/60 border-[#253745] space-y-3">
                      <h3 className="font-bold text-lg font-outfit text-white">
                        6. 💡 La Magia del Fallo Muscular (Cómo engrosar ambas a la vez)
                      </h3>
                      <p className="leading-relaxed text-sm text-[#CCD0CF]">
                        Aquí es donde la ciencia del entrenamiento se vuelve fascinante. Gracias al Principio de Tamaño de Henneman, tu cuerpo es un ahorrador de energía y siempre activará primero las fibras Tipo I (porque gastan menos). ¿Qué pasa cuando haces una serie de 15 repeticiones al fallo?
                      </p>
                      <ul className="space-y-1.5 text-xs sm:text-sm text-[#9BA8AB] font-mono">
                        <li>• <strong>Repeticiones 1 a 5:</strong> El peso se siente fácil. Tu cerebro solo activa las Fibras Tipo I para mover la carga. Las Tipo II están &quot;dormidas&quot;.</li>
                        <li>• <strong>Repeticiones 6 a 12:</strong> Las fibras Tipo I empiezan a quedarse sin energía y a fatigarse (empieza el ardor láctico). El cerebro se da cuenta de que necesita ayuda.</li>
                        <li>• <strong>Repeticiones 13 a 15 (Al borde del fallo):</strong> Como las Tipo I ya no dan más, el cerebro se ve obligado a despertar y reclutar a las &quot;gigantes&quot; Fibras Tipo II para que salven el día y eviten que el peso te aplaste.</li>
                      </ul>
                    </div>
                  </section>

                  <section className="space-y-3">
                    <h2 className="text-xl md:text-2xl font-bold font-outfit mt-8 mb-3 tracking-tight text-white">
                      7. ⚡ El Proceso Fisiológico del Entrenamiento: Estímulo, Daño y Supercompensación
                    </h2>
                    <p>
                      Para entender qué pasa en tu cuerpo cuando entrenas, hay que cambiar un paradigma fundamental: el entrenamiento no construye músculo; el entrenamiento lo destruye. El gimnasio no es el lugar donde creces, es el lugar donde le envías un &quot;mensaje&quot; urgente a tu cuerpo. Ese mensaje es lo que en fisiología llamamos el estímulo. Todo el proceso de hipertrofia y ganancia de fuerza se resume en cómo tu organismo reacciona para sobrevivir a ese mensaje.
                    </p>
                    <p>
                      <strong>¿Qué es exactamente un &quot;Estímulo&quot;?</strong> El cuerpo humano opera bajo un principio llamado Homeostasis (el equilibrio y conservación de energía). El tejido muscular es metabólicamente muy caro de mantener; tu cuerpo no quiere cargar con músculo extra porque requiere muchas calorías diarias solo para existir. Por lo tanto, para que el cuerpo decida invertir energía en crear músculo nuevo, necesita una razón de peso. Necesita una amenaza. El estímulo es esa amenaza. Cuando aplicas una tensión mecánica extrema (levantar peso) o un estrés metabólico alto (muchas repeticiones hasta el ardor), estás sacando a tu cuerpo de su zona de confort y enviándole una señal de alarma al Sistema Nervioso Central: &quot;El entorno exterior es demasiado pesado y hostil, si no nos volvemos más fuertes y grandes, no sobreviviremos la próxima vez&quot;.
                    </p>
                  </section>

                  <section className="space-y-4">
                    <h2 className="text-xl md:text-2xl font-bold font-outfit mt-8 mb-3 tracking-tight text-white">
                      8. Las 3 Fases del Crecimiento (Síndrome General de Adaptación)
                    </h2>
                    <p>El proceso biológico que ocurre en tu cuerpo sigue tres pasos innegociables:</p>

                    <div className="space-y-4 pl-2">
                      <div>
                        <strong className="text-white block mb-1">Fase 1: La Fase de Alarma (Destrucción / Intra-entreno)</strong>
                        <p className="text-sm">Esto es lo que ocurre exactamente mientras estás entrenando:</p>
                        <p className="text-xs sm:text-sm text-[#9BA8AB]">• <strong>Miotrauma (Microdesgarros):</strong> La tensión de las pesas provoca literalmente micro-roturas en la estructura de las fibras musculares (específicamente en las líneas Z de los sarcómeros).</p>
                        <p className="text-xs sm:text-sm text-[#9BA8AB]">• <strong>Fatiga Neural:</strong> Tu cerebro agota los neurotransmisores intentando reclutar cada vez más unidades motoras.</p>
                        <p className="text-xs sm:text-sm text-[#9BA8AB]">• <strong>Agotamiento de Energía:</strong> Tus reservas de ATP y glucógeno caen en picada.</p>
                        <p className="text-xs sm:text-sm text-slate-300 font-semibold mt-1">Resultado: Al salir del gimnasio, eres más débil y tu tejido está dañado. Has aplicado el estímulo con éxito.</p>
                      </div>

                      <div className="p-4 rounded-xl bg-[#06141B] border border-[#253745] text-xs leading-relaxed space-y-2">
                        <strong className="text-[#CCD0CF] font-bold block text-sm">Las Reservas de ATP: La Moneda de Energía (Dentro de la Fase 1)</strong>
                        <p>El ATP (Adenosín Trifosfato) es la única molécula en todo tu cuerpo que las células pueden usar directamente como energía para contraerse. Piensa en el ATP como el dinero en efectivo que llevas en el bolsillo: es de acceso inmediato, pero se gasta rapidísimo. Cuando vas al gimnasio y levantas una carga muy pesada, ocurre lo siguiente:</p>
                        <p>• <strong>El Vaciamiento Rápido:</strong> Tus músculos tienen unas pequeñas reservas de ATP ya fabricadas y listas para usar. Pero son tan pequeñas que, en un esfuerzo máximo, se agotan en apenas 1 a 3 segundos.</p>
                        <p>• <strong>El Rescate (Fosfocreatina):</strong> Una vez que se acaba ese ATP, el cuerpo usa la fosfocreatina (por eso tomar creatina funciona) para reciclar el ATP gastado y darte unos 6 a 10 segundos más de fuerza explosiva.</p>
                        <p>• <strong>El Cambio de Combustible:</strong> Si la serie dura más de 10-15 segundos, el cuerpo se queda sin &quot;efectivo&quot; (ATP inmediato) y tiene que ir al &quot;banco&quot; a sacar más. Ahí es cuando empieza a romper el glucógeno (carbohidratos almacenados) y a generar ácido láctico para seguir produciendo ATP.</p>
                        <p className="text-[#9BA8AB] italic">En resumen: Cuando decimos &quot;vaciar las reservas de ATP&quot;, nos referimos a ese agotamiento celular inmediato que te impide sacar una repetición más, obligando al cuerpo a encender motores metabólicos de emergencia o a fallar.</p>
                      </div>

                      <div>
                        <strong className="text-white block mb-1">Fase 2: La Fase de Recuperación (Limpieza y Reparación / Post-entreno)</strong>
                        <p className="text-sm">Ocurre en las 24 a 48 horas posteriores (mientras comes y duermes):</p>
                        <p className="text-xs sm:text-sm text-[#9BA8AB]">• <strong>Inflamación Controlada:</strong> El cuerpo envía sangre llena de nutrientes y oxígeno al área dañada. Los glóbulos blancos (macrófagos) entran al tejido para &quot;comerse&quot; y limpiar los restos de las células musculares rotas.</p>
                        <p className="text-xs sm:text-sm text-[#9BA8AB]">• <strong>El Despertar de las Células Satélite:</strong> Alrededor de tus fibras musculares hay unas células &quot;dormidas&quot; llamadas células satélite. El daño muscular las despierta. Estas células viajan hacia la zona rota, se multiplican y fusionan sus núcleos con la fibra muscular dañada (activando la vía mTOR).</p>
                        <p className="text-xs sm:text-sm text-[#9BA8AB]">• <strong>Síntesis de Proteínas:</strong> Con la ayuda de los aminoácidos que comiste, los ribosomas comienzan a tejer nuevas proteínas contráctiles (actina y miosina) para tapar los &quot;baches&quot; que dejaron los microdesgarros.</p>
                      </div>

                      <div>
                        <strong className="text-white block mb-1">Fase 3: La Fase de Supercompensación (El Crecimiento Real)</strong>
                        <p className="text-sm">Aquí es donde ocurre la magia evolutiva. Tu cuerpo es inteligente; una vez que repara el daño de la Fase 2 para volver al punto de partida, dice: &quot;Para evitar que este daño vuelva a ocurrir, voy a construir un poco más de tejido del que teníamos antes&quot;.</p>
                        <p className="text-xs sm:text-sm text-[#9BA8AB]">• <strong>Blindaje:</strong> El área de sección transversal del músculo aumenta. Se añaden nuevos sarcómeros.</p>
                        <p className="text-xs sm:text-sm text-[#9BA8AB]">• <strong>Reservas ampliadas:</strong> El cuerpo almacena más glucógeno intramuscular por si vuelve a ocurrir un esfuerzo similar.</p>
                        <p className="text-xs sm:text-sm text-emerald-400 font-semibold mt-1">Resultado: Te despiertas con un músculo fraccionalmente más grande y un sistema nervioso capaz de levantar un poco más de peso.</p>
                      </div>
                    </div>
                  </section>

                  <section className="space-y-3">
                    <h2 className="text-xl md:text-2xl font-bold font-outfit mt-8 mb-3 tracking-tight text-white">
                      9. La Trampa de la Adaptación (Por qué dejas de crecer)
                    </h2>
                    <p>
                      Si repites exactamente el mismo estímulo (el mismo peso y las mismas repeticiones) durante un mes, tu cuerpo dejará de responder. Como ya se &quot;supercompensó&quot; (se blindó) contra esos 10 kilos que levantaste, esos 10 kilos ya no representan una amenaza para su homeostasis. Ya no hay alarma, no hay necesidad de llamar a las células satélite, y no hay crecimiento. Por esto, la regla de oro absoluta del entrenamiento es la <strong>Sobrecarga Progresiva</strong>. Para que el cuerpo siga creciendo indefinidamente, el estímulo debe ser cada vez mayor (más peso, más repeticiones, mejor técnica o mayor rango de movimiento) para obligarlo a entrar en la Fase de Alarma una y otra vez.
                    </p>
                  </section>

                  <section className="space-y-4">
                    <h2 className="text-xl md:text-2xl font-bold font-outfit mt-8 mb-3 tracking-tight text-white">
                      10. La Variable Invisible: Por qué el Descanso es el Verdadero Constructor
                    </h2>
                    <p>
                      Si el entrenamiento es el arquitecto que entrega los planos (el estímulo) y la nutrición aporta los materiales (la proteína y los carbohidratos), el descanso es el equipo de obreros que construye el edificio. Sin obreros, los ladrillos se quedan apilados en el suelo y los planos no sirven de nada. Es un error gravísimo pensar que más entrenamiento equivale a más músculo. A nivel biológico, si no permites que la Fase de Reparación y la Fase de Supercompensación concluyan, el crecimiento jamás se materializa. Aquí te explico exactamente qué ocurre en las sombras mientras descansas:
                    </p>

                    <div className="space-y-3 pl-2">
                      <p>• <strong className="text-[#9BA8AB]">El Reseteo del Sistema Nervioso Central (SNC):</strong> Tu cerebro y tu médula espinal son la &quot;batería&quot; que envía los impulsos eléctricos para que el músculo se contraiga. Un entrenamiento pesado fríe el SNC. Si no le das días de descanso (o semanas de descarga), la batería se agota. El resultado es que, aunque tu músculo esté recuperado, tu cerebro no puede enviar la señal eléctrica con suficiente potencia para reclutar las fibras Tipo II. Estarás físicamente bloqueado para levantar pesado.</p>
                      <p>• <strong className="text-slate-100">El Cóctel Hormonal Nocturno:</strong> El verdadero crecimiento ocurre cuando tienes los ojos cerrados. Durante las fases de sueño profundo (ondas lentas), tu cuerpo segrega picos masivos de Hormona de Crecimiento (GH) y Testosterona, las cuales aceleran la síntesis de proteínas.</p>
                      <p>• <strong className="text-[#9BA8AB]">El Peligro del Cortisol:</strong> Si duermes mal o no tomas días de descanso, tu cuerpo entra en estado de estrés crónico y libera Cortisol. Esta hormona es altamente catabólica; su función es descomponer el tejido muscular para convertirlo en energía de emergencia, boicoteando literalmente todas las ganancias que lograste en el gimnasio.</p>
                      <p>• <strong className="text-slate-100">La Lucha de Tendones y Ligamentos:</strong> Los músculos tienen un riego sanguíneo masivo (por eso se &quot;bombean&quot;), lo que significa que reciben nutrientes rápido y se reparan en 24 a 48 horas. Sin embargo, los tendones, ligamentos y articulaciones son tejidos avasculares (tienen muy poca sangre). Tardan muchísimo más en sanar tras el estrés mecánico. Si entrenas el mismo patrón de movimiento todos los días, el músculo aguantará, pero el tendón acabará rompiéndose (tendinopatías), porque no respetaste su tiempo biológico de curación.</p>
                      <p>• <strong className="text-[#9BA8AB]">Recarga de Glucógeno:</strong> El descanso (combinado con los carbohidratos) es el momento en que las células musculares reabsorben el agua y el glucógeno perdido, devolviéndole al músculo su aspecto &quot;lleno&quot; y preparando el combustible para la siguiente sesión.</p>
                    </div>

                    <div className="p-5 rounded-2xl my-4 border bg-[#06141B]/60 border-[#253745]">
                      <h3 className="font-bold text-base font-outfit mb-1 text-white">
                        La Regla Clínica del Descanso
                      </h3>
                      <p className="leading-relaxed text-sm text-[#9BA8AB]">
                        Entrenar rompe el tejido. El descanso lo repara y lo mejora. Si la frecuencia de tu entrenamiento (cuántas veces vas al gimnasio) supera la velocidad a la que tu fisiología puede limpiar el daño, entras en Sobrentrenamiento. Perderás fuerza, te estancarás y tu cuerpo se negará a crear un solo gramo de músculo nuevo por pura supervivencia.
                      </p>
                    </div>
                  </section>
                </div>
              )}

              {/* ========================================================================= */}
              {/* MÓDULO 2 */}
              {/* ========================================================================= */}
              {selectedModule === 2 && (
                <div className="space-y-8">
                  <p className="text-base leading-relaxed">
                    Para construir la &quot;casa&quot; del músculo, la proteína son los ladrillos, pero los carbohidratos son los trabajadores y la electricidad.
                  </p>

                  <section className="space-y-3">
                    <h2 className="text-xl md:text-2xl font-bold font-outfit mt-6 mb-3 tracking-tight text-white">
                      1. El Rol de los Carbohidratos
                    </h2>
                    <div className="space-y-3">
                      <p>• <strong className="text-[#9BA8AB] font-bold">Efecto &quot;Ahorrador&quot; de Proteínas:</strong> La prioridad del cuerpo es la energía (glucosa). Si no hay carbohidratos, el cuerpo romperá tejido muscular (gluconeogénesis) para sobrevivir.</p>
                      <p>• <strong className="text-slate-100 font-bold">Combustible (Glucógeno):</strong> Las rutinas de alta tensión agotan el glucógeno. Incluso si cuentas con suplementación eficiente como whey protein, creatina y un buen stack de vitaminas, o utilizas combos orientados al Focus y Energía, si tus reservas de glucógeno están vacías, no podrás generar la tensión mecánica necesaria para crecer.</p>
                      <p>• <strong className="text-[#9BA8AB] font-bold">El Poder de la Insulina:</strong> Es la hormona más anabólica y anticatabólica. Abre las células para empujar nutrientes (aminoácidos y glucosa) frenando la degradación muscular.</p>
                    </div>
                    <div className="p-4 rounded-xl bg-[#06141B] border border-[#253745] text-xs text-[#9BA8AB] italic mt-3">
                      <strong>Nota práctica:</strong> Si tu dieta incluye enfoques variados o productos estilo Keto &amp; Waffles, es vital periodizar esos carbohidratos inteligentemente alrededor del entrenamiento para no vaciar las reservas que permiten el rendimiento en el gimnasio.
                    </div>
                  </section>

                  <section className="space-y-3">
                    <h2 className="text-xl md:text-2xl font-bold font-outfit mt-8 mb-3 tracking-tight text-white">
                      2. El Mito de la &quot;Ventana Anabólica&quot;
                    </h2>
                    <p>Se creía que existía una ventana crítica de 30-60 minutos post-entreno. La ciencia moderna aclara:</p>
                    <div className="space-y-2 pl-2">
                      <p>• <strong>Es más amplia:</strong> El estado anabólico permanece elevado entre 24 y 48 horas.</p>
                      <p>• <strong>El total diario es el rey:</strong> Importa la ingesta global de las 24 horas, no el minuto exacto.</p>
                      <p>• <strong>La comida previa cuenta:</strong> Los nutrientes ingeridos 1 o 2 horas antes siguen circulando en la sangre tras entrenar.</p>
                    </div>
                    <p className="text-xs text-[#CCD0CF] font-semibold mt-2">
                      <strong>¿Cuándo SÍ importa la inmediatez?</strong> Si entrenas en ayunas absoluto, o si eres atleta de élite entrenando dos veces al día (para reponer glucógeno rápido).
                    </p>
                  </section>
                </div>
              )}

              {/* ========================================================================= */}
              {/* MÓDULO 3 */}
              {/* ========================================================================= */}
              {selectedModule === 3 && (
                <div className="space-y-8">
                  <p className="text-base leading-relaxed">
                    Si un programa omite estos vectores anatómicos, está incompleto.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-4">
                    <div className="p-5 rounded-2xl border bg-[#06141B]/60 border-[#253745] space-y-2">
                      <strong className="block text-base font-outfit text-[#9BA8AB]">TRÍCEPS (La Regla de 2)</strong>
                      <p className="text-xs leading-relaxed">• <strong>Codo arriba:</strong> Variantes tras nuca para máximo estiramiento de la cabeza larga.</p>
                      <p className="text-xs leading-relaxed">• <strong>Codo abajo:</strong> Extensiones (pushdown) para cargar las cabezas lateral y medial.</p>
                    </div>

                    <div className="p-5 rounded-2xl border bg-[#06141B]/60 border-[#253745] space-y-2">
                      <strong className="block text-base font-outfit text-slate-100">BÍCEPS (Los 3 Vectores)</strong>
                      <p className="text-xs leading-relaxed">• <strong>Codo atrás:</strong> (Banco inclinado). Estiramiento extremo de la cabeza larga.</p>
                      <p className="text-xs leading-relaxed">• <strong>Codo adelante:</strong> (Predicador/Scott). Pico de contracción de la cabeza corta.</p>
                      <p className="text-xs leading-relaxed">• <strong>Agarre Neutro:</strong> (Martillo). Desarrolla el braquial para dar grosor frontal.</p>
                    </div>

                    <div className="p-5 rounded-2xl border bg-[#06141B]/60 border-[#253745] space-y-2">
                      <strong className="block text-base font-outfit text-[#9BA8AB]">HOMBROS (Cobertura 3D)</strong>
                      <p className="text-xs leading-relaxed">• <strong>Frontal:</strong> Empujes verticales (Press).</p>
                      <p className="text-xs leading-relaxed">• <strong>Lateral:</strong> Abducción pura contra gravedad (Elevaciones laterales).</p>
                      <p className="text-xs leading-relaxed">• <strong>Posterior:</strong> Retracción/abducción horizontal (Facepulls, pájaros). El más importante para el look 3D.</p>
                    </div>

                    <div className="p-5 rounded-2xl border bg-[#06141B]/60 border-[#253745] space-y-2">
                      <strong className="block text-base font-outfit text-slate-100">PECHO (2 Patrones Clave)</strong>
                      <p className="text-xs leading-relaxed">• <strong>Empuje:</strong> Presses pesados (plano, inclinado) para tensión mecánica máxima.</p>
                      <p className="text-xs leading-relaxed">• <strong>Aducción:</strong> Aperturas/Cruces. Aísla la fibra eliminando al tríceps y cruza la línea media del cuerpo.</p>
                    </div>

                    <div className="p-5 rounded-2xl border bg-[#06141B]/60 border-[#253745] space-y-2">
                      <strong className="block text-base font-outfit text-[#9BA8AB]">ESPALDA ALTA (La Regla de los 3 Vectores)</strong>
                      <p className="text-xs leading-relaxed">• <strong>Vertical (Amplitud):</strong> Dominadas/Jalones para la forma en &quot;V&quot;.</p>
                      <p className="text-xs leading-relaxed">• <strong>Horizontal (Grosor/Densidad):</strong> Remos. La Regla de Oro: Codos a 45°-60°, traccionar hacia el esternón, permitir estiramiento escapular al bajar y juntar escápulas con violencia al subir.</p>
                      <p className="text-xs leading-relaxed">• <strong>Aislamiento (Extensión pura):</strong> Pullover. Rango completo sin limitación del bíceps.</p>
                    </div>

                    <div className="p-5 rounded-2xl border bg-[#06141B]/60 border-[#253745] space-y-2">
                      <strong className="block text-base font-outfit text-slate-100">ESPALDA BAJA (Densidad Lumbar)</strong>
                      <p className="text-xs leading-relaxed">• <strong>Vector:</strong> Extensión pura contra resistencia sin hiperextensión para construir los erectores espinales.</p>
                    </div>

                    <div className="p-5 rounded-2xl border bg-[#06141B]/60 border-[#253745] space-y-2">
                      <strong className="block text-base font-outfit text-[#9BA8AB]">CUÁDRICEPS (3 Patrones Obligatorios)</strong>
                      <p className="text-xs leading-relaxed">• <strong>Empuje Bilateral:</strong> Prensa/Hack. Flexión máxima simultánea de rodilla y cadera (Vastos).</p>
                      <p className="text-xs leading-relaxed">• <strong>Unilateral:</strong> Búlgara. Corrige desbalances y usa el glúteo medio como estabilizador.</p>
                      <p className="text-xs leading-relaxed">• <strong>Aislamiento:</strong> Sillón (Extensiones). Única forma de estimular el recto femoral.</p>
                    </div>

                    <div className="p-5 rounded-2xl border bg-[#06141B]/60 border-[#253745] space-y-2">
                      <strong className="block text-base font-outfit text-slate-100">ISQUIOSURALES (2 Patrones Obligatorios)</strong>
                      <p className="text-xs leading-relaxed">• <strong>Bisagra (Estiramiento):</strong> Peso muerto rumano. Altísima tensión mecánica.</p>
                      <p className="text-xs leading-relaxed">• <strong>Flexión (Acortamiento):</strong> Curl femoral. Obligatorio porque la cabeza corta del isquio no cruza la cadera y no trabaja en el peso muerto.</p>
                    </div>

                    <div className="p-5 rounded-2xl border bg-[#06141B]/60 border-[#253745] space-y-2">
                      <strong className="block text-base font-outfit text-[#9BA8AB]">GLÚTEOS (3 Vectores)</strong>
                      <p className="text-xs leading-relaxed">• <strong>Empuje Horizontal:</strong> Hip thrust (Acortamiento máximo).</p>
                      <p className="text-xs leading-relaxed">• <strong>Tensión en estiramiento:</strong> Sentadillas profundas/Búlgaras (Freno excéntrico).</p>
                      <p className="text-xs leading-relaxed">• <strong>Abducción:</strong> Máquina abductora/Patadas (Aspecto redondo y estabilidad pélvica).</p>
                    </div>

                    <div className="p-5 rounded-2xl border bg-[#06141B]/60 border-[#253745] space-y-2">
                      <strong className="block text-base font-outfit text-slate-100">PANTORRILLAS &amp; CORE &amp; HIGIENE ARTICULAR</strong>
                      <p className="text-xs leading-relaxed">• <strong>Rodilla Recta:</strong> Gemelo de pie (Gastrocnemio).</p>
                      <p className="text-xs leading-relaxed">• <strong>Rodilla Flexionada:</strong> Gemelo sentado (Sóleo).</p>
                      <p className="text-xs leading-relaxed">• <strong>Core (Recto Abdominal):</strong> Prohibido side bends pesados. Obligatorio flexión espinal lineal (acercar esternón a pelvis).</p>
                      <p className="text-xs leading-relaxed">• <strong>Facepull (Higiene):</strong> Innegociable. Rota externamente el húmero y sana el manguito rotador.</p>
                    </div>
                  </div>
                </div>
              )}

              {/* ========================================================================= */}
              {/* MÓDULO 4 */}
              {/* ========================================================================= */}
              {selectedModule === 4 && (
                <div className="space-y-8">
                  <section className="space-y-3">
                    <h2 className="text-xl md:text-2xl font-bold font-outfit mt-6 mb-3 tracking-tight text-white">
                      1. La Pirámide de la Hipertrofia Pura
                    </h2>
                    <div className="space-y-2 pl-2">
                      <p>• <strong>Ejecución (Limpieza Absoluta):</strong> El músculo objetivo es el único motor. Cero inercia.</p>
                      <p>• <strong>ROM (Rango de Movimiento):</strong> Tensión mecánica en máximo estiramiento. Acortar el recorrido anula repeticiones.</p>
                      <p>• <strong>Tempo:</strong> Controlar la gravedad (excéntrica de 3-4s) con pausas isométricas de 1s para matar el rebote elástico.</p>
                      <p>• <strong>Rango de Repeticiones:</strong> Luchar por conquistar el techo del rango indicado (ej. llegar a 14 si el plan pide 10-14).</p>
                      <p>• <strong>Peso (La recompensa):</strong> Solo subes el peso al dominar los 4 pasos anteriores. Al subir, el ciclo se reinicia (limpiar técnica de nuevo).</p>
                    </div>
                  </section>

                  <section className="space-y-3">
                    <h2 className="text-xl md:text-2xl font-bold font-outfit mt-8 mb-3 tracking-tight text-white">
                      2. LML (Long Muscle Length)
                    </h2>
                    <p>
                      Someter al músculo a estrés extremo en posición estirada. La proteína titina (estructuras elásticas) se tensa pasivamente. Sumado a la tensión contráctil activa, genera una respuesta anabólica violenta promoviendo la <strong className="text-[#9BA8AB]">sarcomerogénesis</strong> (crecimiento longitudinal del músculo).
                    </p>
                  </section>

                  <section className="space-y-3">
                    <h2 className="text-xl md:text-2xl font-bold font-outfit mt-8 mb-3 tracking-tight text-white">
                      3. VOLUMEN: Los 3 Semáforos del MEV (Minimum Effective Volume)
                    </h2>
                    <div className="space-y-2 pl-2">
                      <p>• <strong>Bombeo (Intra-entreno):</strong> El músculo debe sentirse lleno de sangre.</p>
                      <p>• <strong>Disrupción Muscular (Post-entreno):</strong> A las 24-48h debe haber &quot;pesadez&quot; o tensión al estirar.</p>
                      <p>• <strong>Rendimiento:</strong> Si puedes sumar 1 repetición o 1 kilo semana a semana, tu volumen es correcto. &quot;No lo toques si funciona&quot;.</p>
                    </div>
                    <div className="p-4 rounded-xl bg-[#06141B] border border-[#253745] text-xs text-[#9BA8AB] italic mt-3">
                      <strong>¿Cuándo subir series?</strong> En el mesociclo siguiente tras una semana de descarga, solo si te estancaste por completo, no hay fatiga y llegas fresco pero sin superar récords. Si sumas series a un músculo, quítalas de otro.
                    </div>
                  </section>
                </div>
              )}

              {/* ========================================================================= */}
              {/* MÓDULO 5 */}
              {/* ========================================================================= */}
              {selectedModule === 5 && (
                <div className="space-y-8">
                  <section className="space-y-3">
                    <h2 className="text-xl md:text-2xl font-bold font-outfit mt-6 mb-3 tracking-tight text-white">
                      1. Metodologías de Progreso
                    </h2>
                    <div className="space-y-2 pl-2">
                      <p>• <strong className="text-[#9BA8AB]">Manipulación Biomecánica (Torque):</strong> Modificar la palanca (ej. Tuck a Straddle) aleja el centro de masa de la articulación (fulcro), multiplicando la intensidad sin añadir kilos extra (&tau;=F&middot;d&middot;sin(&theta;)).</p>
                      <p>• <strong className="text-slate-100">Trabajo Excéntrico (Negativas):</strong> Bajar resistiendo la gravedad (4-5s) para reclutar unidades de alto umbral cuando aún no se tiene la fuerza concéntrica.</p>
                      <p>• <strong className="text-[#9BA8AB]">Isometrías Estratégicas:</strong> Sostener contracciones (al final o en medio del recorrido) para sanar tendones (&quot;stress shielding&quot;).</p>
                      <p>• <strong className="text-slate-100">Parciales Alargadas (LML):</strong> Trabajar el tercio inferior del rango en estiramiento máximo.</p>
                      <p>• <strong className="text-[#9BA8AB]">Series Cluster:</strong> Micro-series de 1-2 reps con pausas de 10-15s para máximo tonelaje sin degradación técnica.</p>
                      <p>• <strong className="text-slate-100">Acomodación con Bandas:</strong> Alteran la curva de resistencia, ayudando más donde hay mayor desventaja mecánica (estiramiento).</p>
                      <p>• <strong className="text-[#9BA8AB]">Método Piramidal:</strong> Acumulación de repeticiones ascendentes/descendentes manejando la fatiga.</p>
                    </div>
                  </section>

                  <section className="space-y-3">
                    <h2 className="text-xl md:text-2xl font-bold font-outfit mt-8 mb-3 tracking-tight text-white">
                      2. Ejes Fisiológicos de Estabilización (El Puente)
                    </h2>
                    <p>
                      <strong className="text-[#CCD0CF]">Inclinación Pélvica Posterior (Retroversión):</strong> Esconder el coxis, aplanando la lordosis lumbar (Glúteo + Abdomen). Innegociable en Hollow Body, Planche y Handstand para no partir la lumbar.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-3 text-xs">
                      <div className="p-4 rounded-xl bg-[#06141B] border border-[#253745]">
                        <strong className="text-[#9BA8AB] block mb-1">Retracción vs. Protracción Escapular</strong>
                        <p>• <strong>Retracción:</strong> Juntar omóplatos. Usado en Front Lever y Remos. Fija el hombro.</p>
                        <p>• <strong>Protracción:</strong> Separar omóplatos (Serrato). Usado en Planche y Push-ups. Empuja el suelo lejos.</p>
                      </div>
                      <div className="p-4 rounded-xl bg-[#06141B] border border-[#253745]">
                        <strong className="text-white block mb-1">Depresión vs. Elevación Escapular</strong>
                        <p>• <strong>Depresión:</strong> Hombros lejos de las orejas. Usado en Fondos y L-Sit. Evita el pinzamiento subacromial.</p>
                        <p>• <strong>Elevación:</strong> Encoger hombros. Usado en Handstand para bloquear la estructura ósea invertida.</p>
                      </div>
                    </div>
                  </section>

                  <section className="space-y-3">
                    <h2 className="text-xl md:text-2xl font-bold font-outfit mt-8 mb-3 tracking-tight text-white">
                      3. Patrones de Movimiento vs. Vectores de Fuerza
                    </h2>
                    <div className="space-y-3">
                      <p>
                        <strong className="text-[#9BA8AB]">Patrón de Movimiento (El &quot;Qué&quot; estás haciendo):</strong> Es una categoría fundamental de movimiento humano coordinado por articulaciones y músculos (Empuje, Tracción, Dominante de Rodilla, Bisagra de Cadera, Rotación/Anti-rotación).
                      </p>
                      <p>
                        <strong className="text-slate-100">Vector de Fuerza (El &quot;Hacia Dónde&quot; va la resistencia):</strong> Es la línea direccional exacta en la que se aplica la resistencia (gravedad o polea) en relación con tu cuerpo (Vertical, Horizontal, Diagonal).
                      </p>
                    </div>
                  </section>

                  <section className="space-y-4">
                    <h2 className="text-xl md:text-2xl font-bold font-outfit mt-8 mb-3 tracking-tight text-white">
                      4. Categorización Jerárquica de Habilidades (Skills) en Calistenia
                    </h2>

                    <div className="space-y-4">
                      <div className="p-5 rounded-2xl border bg-[#06141B]/60 border-[#253745] space-y-2">
                        <strong className="block text-base font-outfit text-white">A. Vector de Empuje (PUSH)</strong>
                        <p className="text-xs text-slate-300">Pike Push-ups (Básico) &rarr; Ring Support Hold (Int) &rarr; Ranita / Shoulder Stand (Int) &rarr; Pseudo Planche Push-ups (Int) &rarr; Elbow Lever (Int-Av) &rarr; HSPU (Avanzado) &rarr; Tuck Planche (Élite).</p>
                      </div>

                      <div className="p-5 rounded-2xl border bg-[#06141B]/60 border-[#253745] space-y-2">
                        <strong className="block text-base font-outfit text-[#9BA8AB]">B. Vector de Tracción (PULL)</strong>
                        <p className="text-xs text-slate-300">Skin the Cat / German Hang (Básico) &rarr; Pull Over (Int) &rarr; Back Lever (Int-Av) &rarr; Front Lever (Avanzado) &rarr; Muscle-Up Estricto (Élite).</p>
                      </div>

                      <div className="p-5 rounded-2xl border bg-[#06141B]/60 border-[#253745] space-y-2">
                        <strong className="block text-base font-outfit text-slate-100">C. Acondicionamiento de Estabilización / Core</strong>
                        <p className="text-xs text-slate-300">Hollow Body Hold (Base) &rarr; L-Sit / L-Sit Colgado (Objetivo 20s) &rarr; Dragon Fly / Dragon Flag (Cúspide).</p>
                      </div>
                    </div>
                  </section>

                  <section className="space-y-3">
                    <h2 className="text-xl md:text-2xl font-bold font-outfit mt-8 mb-3 tracking-tight text-white">
                      5. Recordatorio Fisiológico Innegociable
                    </h2>
                    <div className="p-4 rounded-xl bg-[#06141B] border border-[#253745] text-xs text-[#9BA8AB] space-y-2">
                      <p>• <strong>El Límite de 15 (Fuerza vs. Resistencia):</strong> Superar las 15 repeticiones o 15 segundos estáticos elimina el estímulo hipertrófico y de fuerza para convertirse en resistencia pura. Al llegar a 15, debes cambiar a una variación más difícil.</p>
                      <p>• <strong>Ranita y Handstand (Tu Seguro Articular):</strong> Dominarlos desde el inicio es obligatorio para engrosar los tendones de tus muñecas y automatizar la estabilización escapular.</p>
                    </div>
                  </section>
                </div>
              )}

              {/* ========================================================================= */}
              {/* MÓDULO 6 */}
              {/* ========================================================================= */}
              {selectedModule === 6 && (
                <div className="space-y-8">
                  <section className="space-y-3">
                    <h2 className="text-xl md:text-2xl font-bold font-outfit mt-6 mb-3 tracking-tight text-white">
                      1. Fundamentos Clínicos
                    </h2>
                    <div className="space-y-2 pl-2">
                      <p>• <strong className="text-[#9BA8AB]">Movilidad (Rango Activo):</strong> Control motor propio sin fatiga extrema. Se hace PRE-entrenamiento o a diario.</p>
                      <p>• <strong className="text-slate-100">Flexibilidad (Rango Pasivo):</strong> Longitud máxima cediendo a una fuerza externa. El sistema nervioso (reflejo de estiramiento) limita esto, no el músculo. Se hace POST-entrenamiento (músculo caliente).</p>
                      <p>• <strong className="text-[#9BA8AB]">Compresión (Fuerza Específica):</strong> Fuerza pura del psoas ilíaco y core contra los isquios. Genera altísima fatiga del SNC. 2-3 veces por semana.</p>
                    </div>
                  </section>

                  <section className="space-y-3">
                    <h2 className="text-xl md:text-2xl font-bold font-outfit mt-8 mb-3 tracking-tight text-white">
                      2. Sistemas de Flexibilidad y los &quot;Big 5&quot;
                    </h2>
                    <p>Basado en engañar al sistema nervioso (Inhibición recíproca y Facilitación Neuromuscular - FNP).</p>
                    <div className="p-5 rounded-2xl border bg-[#06141B]/60 border-[#253745] mt-3 space-y-2">
                      <strong className="block text-base font-outfit text-white">Los Big 5:</strong>
                      <p className="text-xs sm:text-sm">1. <strong>Pike:</strong> Pliegue frontal cerrado.</p>
                      <p className="text-xs sm:text-sm">2. <strong>Pancake:</strong> Pliegue frontal abierto.</p>
                      <p className="text-xs sm:text-sm">3. <strong>Front Split:</strong> Spagat frontal.</p>
                      <p className="text-xs sm:text-sm">4. <strong>Middle Split:</strong> Spagat lateral.</p>
                      <p className="text-xs sm:text-sm">5. <strong>Bridge:</strong> Extensión torácica.</p>
                    </div>
                  </section>
                </div>
              )}

              {/* ========================================================================= */}
              {/* MÓDULO 7 */}
              {/* ========================================================================= */}
              {selectedModule === 7 && (
                <div className="space-y-8">
                  <section className="space-y-3">
                    <h2 className="text-xl md:text-2xl font-bold font-outfit mt-6 mb-3 tracking-tight text-white">
                      1. Archivo de Rutinas Push / Pull / Legs
                    </h2>
                    <div className="space-y-3">
                      <p>• <strong className="text-[#9BA8AB]">DÍA 1 PUSH:</strong> Extensiones tras nuca (polea/mancuerna), Rompecráneos, Extensiones pushdown. Elevaciones laterales, Y-Raises (pájaros), Press militar. Cruces en polea, Pec-Dec, Press inclinado.</p>
                      <p>• <strong className="text-slate-100">DÍA 2 PULL:</strong> Curl inclinado, Curl Bayesian, Curl Scott/Spider, Curl Martillo. Remo en T (pecho apoyado), Remo Gironda, Remo con mancuerna, Jalón cerrado. Jalón amplio, Pullover, Facepull (obligatorio), Extensiones lumbares.</p>
                      <p>• <strong className="text-[#9BA8AB]">DÍA 3 LEGS 1:</strong> Sillón de cuádriceps, Sentadilla Sissy. Prensa, Sentadilla Hack/Pendular, Búlgara, Pistol/Dragon Squat. Elevaciones de pie (Gastrocnemio).</p>
                      <p>• <strong className="text-slate-100">DÍA 4 LEGS 2:</strong> Peso Muerto Rumano, Curl Femoral, Curl Nórdico, Hip Thrust, Máquina Abductora. Elevaciones sentado (Sóleo). Crunch en polea, Ab-wheel, Plancha RKC.</p>
                    </div>
                  </section>

                  <section className="space-y-3">
                    <h2 className="text-xl md:text-2xl font-bold font-outfit mt-8 mb-3 tracking-tight text-white">
                      2. Repositorio de Movilidad Completo (Videoteca Oficial)
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                      <div className="p-4 rounded-xl bg-[#06141B] border border-[#253745] space-y-2">
                        <strong className="text-white font-bold block">Compresiones y Flexores de Cadera:</strong>
                        <p>• Hip Flexor &amp; Handstand Prep</p>
                        <p>• Compresiones en caja y completas</p>
                        <p>• Hip Flexion Lifts &amp; Hip Flexor Pistol Squats</p>
                        <p>• Banded Lying Hip Flexor March</p>
                        <p>• Rutina Pancake - Compresión</p>
                      </div>

                      <div className="p-4 rounded-xl bg-[#06141B] border border-[#253745] space-y-2">
                        <strong className="text-[#9BA8AB] font-bold block">Hombros, Pecho y Columna Torácica:</strong>
                        <p>• Active Stretch in Bench Shoulder (Torácica)</p>
                        <p>• Banded Internal Rotation &amp; Distraction</p>
                        <p>• Rotaciones Externas (Pesa/Banda/Suelo)</p>
                        <p>• Prone Chest Opener &amp; T-Spine Rotation</p>
                      </div>

                      <div className="p-4 rounded-xl bg-[#06141B] border border-[#253745] space-y-2">
                        <strong className="text-white font-bold block">Cadera, Glúteos y Aductores:</strong>
                        <p>• Adduction, Abduction, IR/ER Flexion</p>
                        <p>• 90/90 Stretch, Transitions, Couch &amp; Pigeon</p>
                        <p>• Copenhagen Holds, Clamshell, Hip Airplanes</p>
                        <p>• Adductor Rockbacks, Kneeling Lunge, Heel Taps</p>
                      </div>

                      <div className="p-4 rounded-xl bg-[#06141B] border border-[#253745] space-y-2">
                        <strong className="text-[#9BA8AB] font-bold block">Isquios, Tobillos y Flujos:</strong>
                        <p>• Squat to Forward Fold &amp; Prone Posterior Lift</p>
                        <p>• Banded Terminal Knee Extension &amp; Kneeling Hip Hinge</p>
                        <p>• Deep Squat Ankle Prys &amp; Calf Raises</p>
                        <p>• World&apos;s Greatest Stretch, Runner&apos;s Lunge, Squat Reach Twist</p>
                      </div>
                    </div>
                  </section>
                </div>
              )}

              {/* ========================================================================= */}
              {/* MÓDULO 8 */}
              {/* ========================================================================= */}
              {selectedModule === 8 && (
                <div className="space-y-8">
                  <p className="text-base leading-relaxed">
                    Sincronización endocrina del entrenamiento e hipertrofia con las 4 fases biológicas del ciclo menstrual.
                  </p>

                  <div className="space-y-4">
                    <div className="p-5 rounded-2xl border bg-[#06141B]/60 border-[#253745] space-y-2">
                      <strong className="block text-base font-outfit text-white">1. Fase Menstrual (Días 1 a 5) &rarr; Semana 1: Introducción y Acumulación</strong>
                      <p className="text-xs sm:text-sm text-slate-300">• <strong>Qué pasa en tu cuerpo:</strong> Al inicio del sangrado, tus niveles de estrógeno y progesterona caen a su punto más bajo. Durante los primeros 1-2 días, es normal experimentar inflamación y calambres. A medida que avanzan los días, tus hormonas se estabilizan.</p>
                      <p className="text-xs sm:text-sm text-slate-300">• <strong>El metabolismo:</strong> Tu cuerpo depende principalmente de los carbohidratos para obtener energía rápida.</p>
                      <p className="text-xs sm:text-sm text-[#9BA8AB]">• <strong>Por qué entrenamos así:</strong> Esta es la Semana 1 de tu mesociclo. Vienes de una descarga. Es el momento perfecto para acumular volumen con pesos moderados y afianzar la técnica robótica.</p>
                    </div>

                    <div className="p-5 rounded-2xl border bg-[#06141B]/60 border-[#253745] space-y-2">
                      <strong className="block text-base font-outfit text-[#9BA8AB]">2. Fase Folicular (Días 6 a 13) &rarr; Semana 2: Intensificación</strong>
                      <p className="text-xs sm:text-sm text-slate-300">• <strong>Qué pasa en tu cuerpo:</strong> El estrógeno sube drásticamente hasta alcanzar su pico. El estrógeno es una hormona altamente anabólica y neuroprotectora.</p>
                      <p className="text-xs sm:text-sm text-slate-300">• <strong>El metabolismo:</strong> Tu sensibilidad a la insulina está en su punto máximo. Tu tolerancia al dolor aumenta y la recuperación muscular es rapidísima.</p>
                      <p className="text-xs sm:text-sm text-[#9BA8AB]">• <strong>Por qué entrenamos así:</strong> Tienes luz verde metabólica. Es el momento de subir las cargas, empujar el volumen y buscar la fatiga profunda (LML).</p>
                    </div>

                    <div className="p-5 rounded-2xl border bg-[#06141B]/60 border-[#253745] space-y-2">
                      <strong className="block text-base font-outfit text-white">3. Fase Ovulatoria (Días 14 a 16) &rarr; Semana 3: Clímax (Semana de Récords)</strong>
                      <p className="text-xs sm:text-sm text-slate-300">• <strong>Qué pasa en tu cuerpo:</strong> El estrógeno llega a su punto máximo absoluto con un pequeño pico de testosterona. Eres más fuerte y el SNC dispara con máxima potencia.</p>
                      <p className="text-xs sm:text-sm text-amber-400">• <strong>Peligro biomecánico:</strong> Se libera la hormona relaxina, haciendo que tus ligamentos estén más laxos. Ten especial cuidado técnico en estiramientos extremos.</p>
                      <p className="text-xs sm:text-sm text-[#9BA8AB]">• <strong>Por qué entrenamos así:</strong> Es la Semana 3. Momento de buscar repeticiones extra, subir pasadores de máquinas y romper tus récords de peso.</p>
                    </div>

                    <div className="p-5 rounded-2xl border bg-[#06141B]/60 border-[#253745] space-y-2">
                      <strong className="block text-base font-outfit text-slate-100">4. Fase Lútea (Días 17 a 28) &rarr; Semana 4: Semana de Descarga</strong>
                      <p className="text-xs sm:text-sm text-slate-300">• <strong>Qué pasa en tu cuerpo:</strong> El estrógeno cae y la progesterona toma el control (hormona catabólica). Tu temperatura basal sube y la sensibilidad a la insulina disminuye.</p>
                      <p className="text-xs sm:text-sm text-[#9BA8AB]">• <strong>Por qué entrenamos así:</strong> Esta es tu Semana 4 (Descarga). Empujar al fallo aquí es un error. Al bajar el volumen y reducir cargas, permites disipar la fatiga acumulada.</p>
                    </div>
                  </div>
                </div>
              )}

              {/* ========================================================================= */}
              {/* MÓDULO 9 */}
              {/* ========================================================================= */}
              {selectedModule === 9 && (
                <div className="space-y-8">
                  <p className="text-base leading-relaxed">
                    Desglose biológico de los 4 bloques del entrenamiento híbrido: calistenia + peso libre.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                    <div className="p-5 rounded-2xl border bg-[#06141B]/60 border-[#253745] space-y-1.5">
                      <strong className="block text-[#9BA8AB] font-bold font-outfit text-base">Bloque 1 (Fuerza Relativa)</strong>
                      <p className="text-xs text-slate-300 leading-relaxed">Calistenia pura. SNC fresco. Adaptación neural sin llegar al fallo total.</p>
                    </div>
                    <div className="p-5 rounded-2xl border bg-[#06141B]/60 border-[#253745] space-y-1.5">
                      <strong className="block text-white font-bold font-outfit text-base">Bloque 2 (Hipertrofia Miofibrilar)</strong>
                      <p className="text-xs text-slate-300 leading-relaxed">Máquinas pesadas y compuestos. Se aprovecha la estabilidad guiada para generar daño muscular a pesar de la fatiga del SNC.</p>
                    </div>
                    <div className="p-5 rounded-2xl border bg-[#06141B]/60 border-[#253745] space-y-1.5">
                      <strong className="block text-[#9BA8AB] font-bold font-outfit text-base">Bloque 3 (Aislamiento y Estrés Metabólico)</strong>
                      <p className="text-xs text-slate-300 leading-relaxed">Fibras rápidas fatigadas. Acumulación de lactato, LML extremo. RIR al límite.</p>
                    </div>
                    <div className="p-5 rounded-2xl border bg-[#06141B]/60 border-[#253745] space-y-1.5">
                      <strong className="block text-white font-bold font-outfit text-base">Bloque 4 (Barrido Metabólico)</strong>
                      <p className="text-xs text-slate-300 leading-relaxed">Cardio suave y movilidad para retorno venoso y limpieza de lactato.</p>
                    </div>
                  </div>
                </div>
              )}

              {/* ========================================================================= */}
              {/* MÓDULO 10 */}
              {/* ========================================================================= */}
              {selectedModule === 10 && (
                <div className="space-y-8">
                  <h2 className="text-xl md:text-2xl font-bold font-outfit mt-6 mb-3 tracking-tight text-white">
                    Hacks de Ejecución y Secretos de Entrenamiento
                  </h2>

                  <div className="space-y-4">
                    {/* TRACCIÓN Y BÍCEPS */}
                    <div className="p-5 rounded-2xl border bg-[#06141B]/60 border-[#253745] space-y-3">
                      <strong className="block font-bold text-white text-base font-outfit">💥 TRACCIÓN Y BÍCEPS</strong>
                      <ul className="text-xs sm:text-sm text-slate-300 space-y-2 list-disc pl-4">
                        <li><strong>Facepull:</strong> Polea por encima de los ojos. Tira hacia atrás, sostén la postura y aprieta 2 segundos.</li>
                        <li><strong>Espalda (Remos/Tirones):</strong> Foco en la bajada (excéntrica). Estira al máximo el músculo y luego aprieta fuerte al traccionar.</li>
                        <li><strong>Bíceps:</strong> Frena el movimiento y aprieta el músculo 1 segundo arriba en cada repetición.</li>
                      </ul>
                      <div className="pt-2 border-t border-[#253745] flex items-center justify-between">
                        <span className="text-xs text-[#9BA8AB]"><strong>Hack de Pullover en Polea:</strong> Pecho arriba y codos semi-fijos. Tracciona llevando los codos a la cadera.</span>
                        <a href="https://www.instagram.com/reel/Db6yK1GJiBa/?igsh=bDNyNGd2bW0zNDM1" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#253745] border border-[#4A5C6A] text-[#CCD0CF] font-bold text-xs hover:bg-[#4A5C6A] transition-colors shrink-0">
                          <InstagramIcon className="w-3.5 h-3.5" />
                          <span>Ver Reel Instagram</span>
                        </a>
                      </div>
                    </div>

                    {/* EMPUJES Y PECTORAL */}
                    <div className="p-5 rounded-2xl border bg-[#06141B]/60 border-[#253745] space-y-3">
                      <strong className="block font-bold text-[#9BA8AB] text-base font-outfit">🔥 EMPUJES Y PECTORAL</strong>
                      <div className="space-y-2 text-xs sm:text-sm text-slate-300">
                        <div className="flex items-center justify-between">
                          <span>• <strong>Push-ups:</strong> Proyecta el cuerpo en diagonal hacia adelante, no recto hacia abajo.</span>
                          <a href="https://www.instagram.com/reel/DXE0SgFuM4b/?igsh=MXBwa3o3enRpN3RnMg%3D%3D" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#253745] border border-[#4A5C6A] text-[#CCD0CF] font-bold text-xs hover:bg-[#4A5C6A] transition-colors shrink-0">
                            <InstagramIcon className="w-3.5 h-3.5" />
                            <span>Ver Reel Push-ups</span>
                          </a>
                        </div>
                        <div className="flex items-center justify-between pt-2 border-t border-[#253745]">
                          <span>• <strong>Pec-Deck (Aperturas):</strong> Hombros abajo y pecho afuera. Codos hacia abajo. Piensa en juntar los bíceps, no las manos.</span>
                          <a href="https://www.instagram.com/reel/DYZxcCZsjKu/?igsh=MWYwcWxwM2VqeGxtdA%3D%3D" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#253745] border border-[#4A5C6A] text-[#CCD0CF] font-bold text-xs hover:bg-[#4A5C6A] transition-colors shrink-0">
                            <InstagramIcon className="w-3.5 h-3.5" />
                            <span>Ver Reel Pec-Deck</span>
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* TREN INFERIOR */}
                    <div className="p-5 rounded-2xl border bg-[#06141B]/60 border-[#253745] space-y-3">
                      <strong className="block font-bold text-white text-base font-outfit">🦵 TREN INFERIOR</strong>
                      <div className="flex items-center justify-between text-xs sm:text-sm text-slate-300">
                        <span>• <strong>Aductores:</strong> Deja el ego, baja el peso. Apoya los pies más abajo en la plataforma para estirar más profundo.</span>
                        <a href="https://www.instagram.com/reel/DV1CdaMDOm_/?igsh=Y3h2ZWZhZ29kcDJ0" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#253745] border border-[#4A5C6A] text-[#CCD0CF] font-bold text-xs hover:bg-[#4A5C6A] transition-colors shrink-0">
                          <InstagramIcon className="w-3.5 h-3.5" />
                          <span>Ver Reel Aductores</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              )}

            </div>

            {/* NAVEGACIÓN MÓDULO ANTERIOR / SIGUIENTE */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t pt-8 mt-12 border-[#253745]">
              <button
                disabled={selectedModule === 1}
                onClick={() => {
                  if (selectedModule > 1) {
                    setSelectedModule(selectedModule - 1);
                    document.getElementById('blog-article-start')?.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className={`w-full sm:w-auto px-5 py-2.5 rounded-xl border text-xs font-bold font-mono uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${selectedModule === 1
                  ? 'opacity-40 cursor-not-allowed border-[#253745] text-slate-500 bg-[#06141B]'
                  : 'border-[#253745] bg-[#06141B] hover:bg-[#253745] text-[#CCD0CF]'
                  }`}
              >
                <span>←</span>
                <span>Módulo Anterior</span>
              </button>

              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#9BA8AB]">
                MÓDULO {selectedModule} DE 10
              </span>

              <button
                disabled={selectedModule === 10}
                onClick={() => {
                  if (selectedModule < 10) {
                    setSelectedModule(selectedModule + 1);
                    document.getElementById('blog-article-start')?.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className={`w-full sm:w-auto px-5 py-2.5 rounded-xl border text-xs font-bold font-mono uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${selectedModule === 10
                  ? 'opacity-40 cursor-not-allowed border-[#253745] text-slate-500 bg-[#06141B]'
                  : 'border-[#4A5C6A] bg-[#253745] text-white hover:bg-[#4A5C6A] shadow-sm'
                  }`}
              >
                <span>Siguiente Módulo</span>
                <span>→</span>
              </button>
            </div>

          </article>
        </main>
      </div>

    </div>
  );
}
