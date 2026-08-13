import React, { useState } from 'react';
import {
  BookOpen, Bookmark, ChevronRight, ShieldAlert, Sun, Moon
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
  const [isDarkMode, setIsDarkMode] = useState(false); // Default to light mode (matches reference image)

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
      readTime: 8,
      cover: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80",
      subtitle: "La hipertrofia muscular y la fuerza son dos adaptaciones fisiológicas distintas, aunque estrechamente interrelacionadas, que ocurren como respuesta al entrenamiento con cargas.",
      date: "12 Agosto, 2026"
    },
    2: {
      category: "Nutrición & Macros",
      readTime: 6,
      cover: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1200&q=80",
      subtitle: "Para construir la casa del músculo, la proteína son los ladrillos, pero los carbohidratos son los trabajadores y la electricidad.",
      date: "12 Agosto, 2026"
    },
    3: {
      category: "Biomecánica Aplicada",
      readTime: 10,
      cover: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80",
      subtitle: "Si un programa omite estos vectores anatómicos inquebrantables, está biológicamente incompleto.",
      date: "12 Agosto, 2026"
    },
    4: {
      category: "Programación & LML",
      readTime: 7,
      cover: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1200&q=80",
      subtitle: "La pirámide de la hipertrofia pura, Long Muscle Length (LML) y la gestión óptima del volumen.",
      date: "12 Agosto, 2026"
    },
    5: {
      category: "Calistenia & Skills",
      readTime: 12,
      cover: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&w=1200&q=80",
      subtitle: "Metodologías de progreso, ejes fisiológicos de estabilización, patrones vs. vectores y jerarquía de habilidades.",
      date: "12 Agosto, 2026"
    },
    6: {
      category: "Movilidad & Flexibilidad",
      readTime: 7,
      cover: "https://images.unsplash.com/photo-1552196563-55cd4e45efb3?auto=format&fit=crop&w=1200&q=80",
      subtitle: "Fundamentos clínicos de flexibilidad activa vs. pasiva, compresión y el protocolo de los Big 5.",
      date: "12 Agosto, 2026"
    },
    7: {
      category: "Rutinas & Base de Datos",
      readTime: 15,
      cover: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=1200&q=80",
      subtitle: "El repositorio técnico completo del plan de entrenamiento Push/Pull/Legs y movilidad.",
      date: "12 Agosto, 2026"
    },
    8: {
      category: "Periodización Femenina",
      readTime: 9,
      cover: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80",
      subtitle: "Sincronización del entrenamiento e hipertrofia con las 4 fases biológicas del ciclo menstrual.",
      date: "12 Agosto, 2026"
    },
    9: {
      category: "Metodología Híbrida",
      readTime: 6,
      cover: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=1200&q=80",
      subtitle: "Desglose biológico de los 4 bloques del entrenamiento híbrido: calistenia + peso libre.",
      date: "12 Agosto, 2026"
    },
    10: {
      category: "Hacks & Secretos",
      readTime: 5,
      cover: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1200&q=80",
      subtitle: "Secretos técnicos de aislamiento neuromuscular y enlaces directos a la videoteca en Instagram.",
      date: "12 Agosto, 2026"
    }
  };

  const meta = moduleMeta[selectedModule] || moduleMeta[1];

  return (
    <div className="space-y-8 max-w-7xl mx-auto w-full text-slate-100 font-sans pb-12">

      {/* ========================================================================= */}
      {/* CABECERA GENERAL DE LA SECCIÓN WIKI (ESTILO NEAT BANNER) */}
      {/* ========================================================================= */}
      <header className="glass-panel p-6 md:p-8 rounded-3xl glow-indigo border border-slate-800 bg-slate-950/80 backdrop-blur-md flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
        <div className="space-y-2 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 font-mono">
            <BookOpen className="w-3.5 h-3.5" />
            WIKI BLOG DE ENTRENAMIENTO — CONOCIMIENTO TÉCNICO
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-outfit text-white tracking-tight leading-tight">
            Wiki de Entrenamiento &amp; Fisiología Aplicada
          </h1>
          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-sans">
            Manual técnico oficial: adaptaciones neuromusculares, hipertrofia muscular, entorno anabólico, calistenia de rendimiento y periodización femenina.
          </p>
        </div>

        <div className="hidden lg:flex flex-col items-center justify-center p-4 bg-slate-900/60 rounded-2xl border border-slate-800 shrink-0 min-w-[200px] text-center">
          <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest block mb-1">
            MANUAL OFICIAL
          </span>
          <span className="text-2xl font-extrabold text-indigo-400 font-outfit block">
            10 Módulos
          </span>
          <span className="text-[11px] text-slate-500 font-sans">
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
          <div className="glass-panel p-4 rounded-2xl border border-slate-900 space-y-3">
            <div className="flex items-center justify-between border-b border-slate-900 pb-2">
              <span className="text-[10px] font-bold font-mono text-indigo-400 uppercase tracking-widest flex items-center gap-1.5">
                <Bookmark className="w-3.5 h-3.5" />
                ÍNDICE DEL BLOG
              </span>
              <span className="text-[10px] font-mono text-slate-500">10 Mod.</span>
            </div>

            <div className="space-y-1 max-h-[460px] overflow-y-auto no-scrollbar">
              {modulesList.map((m) => (
                <button
                  key={m.id}
                  onClick={() => {
                    setSelectedModule(m.id);
                    document.getElementById('blog-article-start')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className={`w-full text-left px-3 py-2 rounded-xl text-xs transition-all duration-200 flex items-center justify-between ${
                    selectedModule === m.id
                      ? 'bg-indigo-600/20 text-white font-bold border-l-2 border-indigo-500'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/60'
                  }`}
                >
                  <span className="truncate pr-1 font-outfit">{m.title}: {m.label}</span>
                  {selectedModule === m.id && <ChevronRight className="w-3.5 h-3.5 text-indigo-400 shrink-0" />}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-slate-950 p-4 rounded-2xl border border-slate-900 space-y-2 text-xs text-slate-400">
            <div className="flex items-center gap-2 text-slate-300 font-semibold font-outfit">
              <ShieldAlert className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Contenido Oficial PDF</span>
            </div>
            <p className="text-[11px] text-slate-500">
              Estructura técnica organizada en formato editorial de blog para lectura cómoda en cualquier pantalla.
            </p>
          </div>
        </aside>

        {/* COLUMNA DERECHA: NOTA DE BLOG (ARTICLE) */}
        <main className="lg:col-span-9">
          <article className={`rounded-[2.5rem] p-6 sm:p-10 md:p-14 shadow-2xl transition-all duration-300 ${
            isDarkMode 
              ? 'bg-slate-950/90 border border-slate-800 text-slate-100' 
              : 'bg-white border border-slate-200/90 text-slate-900'
          }`}>
            
            {/* TOP BAR: CONTROL DE TEMA DEL BLOG */}
            <div className="flex items-center justify-between pb-6 border-b border-slate-100 dark:border-slate-800/80 mb-6">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className={`text-xs font-mono font-bold uppercase tracking-wider ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                  Nota del Blog — Módulo {selectedModule}
                </span>
              </div>

              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium border transition-colors flex items-center gap-1.5 ${
                  isDarkMode 
                    ? 'bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-800' 
                    : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                }`}
              >
                {isDarkMode ? (
                  <>
                    <Sun className="w-3.5 h-3.5 text-amber-400" />
                    <span>Ver Nota en Modo Claro</span>
                  </>
                ) : (
                  <>
                    <Moon className="w-3.5 h-3.5 text-indigo-600" />
                    <span>Ver Nota en Modo Oscuro</span>
                  </>
                )}
              </button>
            </div>

            {/* TÍTULO PRINCIPAL DE LA NOTA */}
            <h1 className={`text-3xl sm:text-4xl md:text-5xl font-extrabold font-outfit tracking-tight leading-[1.15] mb-4 ${
              isDarkMode ? 'text-white' : 'text-slate-900'
            }`}>
              {modulesList.find(m => m.id === selectedModule)?.label}
            </h1>

            {/* SUBTÍTULO */}
            <p className={`text-base md:text-lg leading-relaxed font-sans max-w-3xl mb-6 ${
              isDarkMode ? 'text-slate-300' : 'text-slate-600'
            }`}>
              {meta.subtitle}
            </p>

            {/* INSIGNIAS DE METADATOS */}
            <div className={`flex flex-wrap items-center gap-2 py-4 border-t border-b my-6 ${
              isDarkMode ? 'border-slate-800/80' : 'border-slate-100'
            }`}>
              <span className={`px-3.5 py-1 rounded-full border font-medium text-xs ${
                isDarkMode 
                  ? 'border-slate-800 bg-slate-900 text-slate-300' 
                  : 'border-slate-200 bg-slate-50 text-slate-700'
              }`}>
                Módulo {selectedModule} de 10
              </span>
              <span className={`px-3.5 py-1 rounded-full border font-medium text-xs ${
                isDarkMode 
                  ? 'border-slate-800 bg-slate-900 text-slate-300' 
                  : 'border-slate-200 bg-slate-50 text-slate-700'
              }`}>
                {meta.category}
              </span>
              <span className={`px-3.5 py-1 rounded-full border font-mono text-xs ${
                isDarkMode 
                  ? 'border-slate-800 bg-slate-900 text-slate-400' 
                  : 'border-slate-200 bg-slate-50 text-slate-500'
              }`}>
                {meta.readTime} min de lectura
              </span>
            </div>

            {/* IMAGEN DE PORTADA / HERO BANNER */}
            <div className={`overflow-hidden rounded-2xl md:rounded-3xl shadow-md border max-h-[380px] w-full my-8 ${
              isDarkMode ? 'border-slate-800' : 'border-slate-200/80'
            }`}>
              <img
                src={meta.cover}
                alt={modulesList.find(m => m.id === selectedModule)?.label}
                className="w-full h-full object-cover object-center max-h-[380px] hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* CONTENIDO PRINCIPAL DE LA NOTA (TEXTO EDITORIAL) */}
            <div className={`space-y-8 text-sm sm:text-base leading-relaxed ${
              isDarkMode ? 'text-slate-300' : 'text-slate-700'
            }`}>

              {/* ========================================================================= */}
              {/* CAPÍTULO 1 */}
              {/* ========================================================================= */}
              {selectedModule === 1 && (
                <div className="space-y-8">
                  <section className="space-y-3">
                    <h2 className={`text-xl md:text-2xl font-bold font-outfit mt-6 mb-3 tracking-tight ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                      1. Fuerza vs. Hipertrofia
                    </h2>
                    <p>
                      <strong className={isDarkMode ? 'text-indigo-300 font-bold' : 'text-slate-900 font-bold'}>Fuerza Muscular (Adaptación Neuromuscular):</strong> Los aumentos rápidos de fuerza al iniciar un programa se deben a que el sistema nervioso se vuelve más eficiente. Mejora su capacidad para reclutar más unidades motoras simultáneamente, sincronizar su activación y aumentar la frecuencia de los impulsos eléctricos enviados a los músculos.
                    </p>
                    <p>
                      <strong className={isDarkMode ? 'text-slate-100 font-bold' : 'text-slate-900 font-bold'}>Hipertrofia Muscular (Adaptación Estructural):</strong> Consiste en el aumento del área de sección transversal de las fibras musculares (crecimiento físico). Ocurre por un aumento neto en la síntesis de proteínas contráctiles (actina y miosina) y estructurales dentro de la célula.
                    </p>
                  </section>

                  <section className="space-y-3">
                    <h2 className={`text-xl md:text-2xl font-bold font-outfit mt-8 mb-3 tracking-tight ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                      2. Mecanismos Primordiales de la Hipertrofia
                    </h2>
                    <p>Para que el músculo crezca de manera sostenible, necesita estímulos fisiológicos específicos:</p>
                    <div className="space-y-3 pl-2">
                      <p>
                        • <strong className={isDarkMode ? 'text-indigo-300 font-bold' : 'text-indigo-600 font-bold'}>Tensión Mecánica (El factor primordial):</strong> Es la fuerza física que se ejerce sobre las fibras al contraerse o estirarse bajo resistencia. Es detectada por mecanosensores celulares que traducen el estímulo físico en señales químicas de crecimiento.
                      </p>
                      <p>
                        • <strong className={isDarkMode ? 'text-slate-100 font-bold' : 'text-slate-900 font-bold'}>Estrés Metabólico:</strong> Acumulación de subproductos (lactato, iones de hidrógeno, fosfato inorgánico) durante el ejercicio sostenido. Genera hinchazón celular (el famoso &quot;pump&quot;), estimulando factores de crecimiento adicionales.
                      </p>
                    </div>
                  </section>

                  <section className="space-y-3">
                    <h2 className={`text-xl md:text-2xl font-bold font-outfit mt-8 mb-3 tracking-tight ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                      3. Vías de Señalización: mTOR
                    </h2>
                    <p>
                      El complejo <strong className={isDarkMode ? 'text-slate-100 font-bold' : 'text-slate-900 font-bold'}>mTOR (Mechanistic Target of Rapamycin)</strong> es el &quot;interruptor maestro&quot; del crecimiento celular.
                    </p>
                    <p>
                      <strong>Funcionamiento:</strong> Se activa ante una tensión mecánica elevada o una alta disponibilidad de aminoácidos (especialmente leucina). Al encenderse, ordena a los ribosomas ensamblar nuevas proteínas. Si esta síntesis supera a la degradación durante el descanso, hay hipertrofia.
                    </p>
                  </section>

                  <section className="space-y-4">
                    <h2 className={`text-xl md:text-2xl font-bold font-outfit mt-8 mb-3 tracking-tight ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                      4. Tipos de Fibras Musculares y Reclutamiento
                    </h2>
                    <div className="space-y-3">
                      <p>• <strong className={isDarkMode ? 'text-indigo-300 font-bold' : 'text-indigo-600 font-bold'}>Fibras Tipo I (Lentas u Oxidativas):</strong> Alta resistencia a la fatiga, mucha capacidad oxidativa, menor potencial de hipertrofia.</p>
                      <p>• <strong className={isDarkMode ? 'text-slate-100 font-bold' : 'text-slate-900 font-bold'}>Fibras Tipo II (Rápidas o Glucolíticas):</strong> Se fatigan rápido, dependen del glucógeno y tienen el mayor potencial de hipertrofia y fuerza explosiva.</p>
                      <p>• <strong className={isDarkMode ? 'text-indigo-300 font-bold' : 'text-indigo-600 font-bold'}>El Principio de Henneman:</strong> El cerebro recluta primero las unidades motoras pequeñas (Tipo I). A medida que la carga aumenta o aparece la fatiga, se ve obligado a reclutar progresivamente las unidades más grandes (Tipo II).</p>
                    </div>

                    <div className={`p-6 rounded-2xl my-6 border ${
                      isDarkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-slate-50 border-slate-200'
                    }`}>
                      <h3 className={`font-bold text-lg font-outfit mb-2 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                        💡 Nota Técnica: Fallo Muscular e Hipertrofia Dual
                      </h3>
                      <p className="leading-relaxed text-sm">
                        En series llevadas cerca del fallo muscular, las Fibras Tipo I se fatigan en las repeticiones iniciales, forzando al sistema nervioso a activar las Fibras Tipo II al final de la serie para prevenir el colapso.
                      </p>
                    </div>
                  </section>
                </div>
              )}

              {/* ========================================================================= */}
              {/* CAPÍTULO 2 */}
              {/* ========================================================================= */}
              {selectedModule === 2 && (
                <div className="space-y-8">
                  <section className="space-y-3">
                    <h2 className={`text-xl md:text-2xl font-bold font-outfit mt-6 mb-3 tracking-tight ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                      1. El Rol Fundamental de los Carbohidratos
                    </h2>
                    <div className="space-y-3">
                      <p>• <strong className={isDarkMode ? 'text-indigo-300 font-bold' : 'text-indigo-600 font-bold'}>Efecto Ahorrador de Proteínas:</strong> La prioridad del cuerpo es la energía (glucosa). Si no hay carbohidratos, el cuerpo romperá tejido muscular (gluconeogénesis) para sobrevivir.</p>
                      <p>• <strong className={isDarkMode ? 'text-slate-100 font-bold' : 'text-slate-900 font-bold'}>Combustible de Glucógeno:</strong> Las rutinas de alta tensión agotan el glucógeno. Si tus reservas están vacías, no podrás generar la tensión mecánica necesaria para crecer.</p>
                      <p>• <strong className={isDarkMode ? 'text-indigo-300 font-bold' : 'text-indigo-600 font-bold'}>El Poder de la Insulina:</strong> Es la hormona más anabólica y anticatabólica. Abre las células para empujar nutrientes (aminoácidos y glucosa) frenando la degradación muscular.</p>
                    </div>
                  </section>

                  <section className="space-y-3">
                    <h2 className={`text-xl md:text-2xl font-bold font-outfit mt-8 mb-3 tracking-tight ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                      2. El Mito de la Ventana Anabólica
                    </h2>
                    <p>Se creía que existía una ventana crítica de 30-60 minutos post-entreno. La ciencia moderna aclara:</p>
                    <div className="space-y-2 pl-2">
                      <p>• <strong>Es más amplia:</strong> El estado anabólico permanece elevado entre 24 y 48 horas.</p>
                      <p>• <strong>El total diario es el rey:</strong> Importa la ingesta global de las 24 horas, no el minuto exacto.</p>
                      <p>• <strong>La comida previa cuenta:</strong> Los nutrientes ingeridos 1 o 2 horas antes siguen circulando en la sangre tras entrenar.</p>
                    </div>
                  </section>
                </div>
              )}

              {/* ========================================================================= */}
              {/* CAPÍTULO 3 */}
              {/* ========================================================================= */}
              {selectedModule === 3 && (
                <div className="space-y-8">
                  <h2 className={`text-xl md:text-2xl font-bold font-outfit mt-6 mb-3 tracking-tight ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                    1. Vectores Anatomobio-mecánicos Inquebrantables
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-4">
                    <div className={`p-5 rounded-2xl border ${isDarkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                      <strong className={`block text-base font-outfit mb-2 ${isDarkMode ? 'text-indigo-300' : 'text-indigo-700'}`}>TRÍCEPS (La Regla de 2)</strong>
                      <p className="text-xs leading-relaxed">• Codo arriba: Variantes tras nuca para estiramiento de la cabeza larga.<br/>• Codo abajo: Extensiones (pushdown) para cabezas lateral y medial.</p>
                    </div>

                    <div className={`p-5 rounded-2xl border ${isDarkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                      <strong className={`block text-base font-outfit mb-2 ${isDarkMode ? 'text-slate-100' : 'text-slate-900'}`}>BÍCEPS (Los 3 Vectores)</strong>
                      <p className="text-xs leading-relaxed">• Codo atrás: Banco inclinado (estiramiento).<br/>• Codo adelante: Predicador (contracción).<br/>• Agarre Neutro: Martillo (braquial).</p>
                    </div>

                    <div className={`p-5 rounded-2xl border ${isDarkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                      <strong className={`block text-base font-outfit mb-2 ${isDarkMode ? 'text-indigo-300' : 'text-indigo-700'}`}>HOMBROS (Cobertura 3D)</strong>
                      <p className="text-xs leading-relaxed">• Frontal: Press vertical.<br/>• Lateral: Elevaciones laterales.<br/>• Posterior: Facepulls / pájaros (look 3D).</p>
                    </div>

                    <div className={`p-5 rounded-2xl border ${isDarkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                      <strong className={`block text-base font-outfit mb-2 ${isDarkMode ? 'text-slate-100' : 'text-slate-900'}`}>PECHO (2 Patrones Clave)</strong>
                      <p className="text-xs leading-relaxed">• Empuje: Presses pesados.<br/>• Aducción: Aperturas y cruces en polea.</p>
                    </div>
                  </div>
                </div>
              )}

              {/* ========================================================================= */}
              {/* CAPÍTULO 4 */}
              {/* ========================================================================= */}
              {selectedModule === 4 && (
                <div className="space-y-8">
                  <section className="space-y-3">
                    <h2 className={`text-xl md:text-2xl font-bold font-outfit mt-6 mb-3 tracking-tight ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                      1. La Pirámide de la Hipertrofia Pura
                    </h2>
                    <div className="space-y-2">
                      <p>• <strong>Ejecución (Limpieza Absoluta):</strong> El músculo objetivo es el único motor. Cero inercia.</p>
                      <p>• <strong>ROM (Rango de Movimiento):</strong> Tensión mecánica en máximo estiramiento.</p>
                      <p>• <strong>Tempo:</strong> Controlar la excéntrica (3-4s) con pausas isométricas de 1s.</p>
                      <p>• <strong>Rango de Repeticiones:</strong> Luchar por conquistar el techo del rango indicado.</p>
                      <p>• <strong>Peso (La recompensa):</strong> Subir el peso solo al dominar la técnica robótica.</p>
                    </div>
                  </section>

                  <section className="space-y-3">
                    <h2 className={`text-xl md:text-2xl font-bold font-outfit mt-8 mb-3 tracking-tight ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                      2. Long Muscle Length (LML) y Sarcomerogénesis
                    </h2>
                    <p>
                      Someter al músculo a estrés extremo en posición estirada tensiona la proteína titina pasivamente. Sumado a la tensión activa, promueve la <strong className={isDarkMode ? 'text-indigo-300' : 'text-indigo-700'}>sarcomerogénesis</strong> (crecimiento longitudinal del músculo).
                    </p>
                  </section>
                </div>
              )}

              {/* ========================================================================= */}
              {/* CAPÍTULO 5 */}
              {/* ========================================================================= */}
              {selectedModule === 5 && (
                <div className="space-y-8">
                  <section className="space-y-3">
                    <h2 className={`text-xl md:text-2xl font-bold font-outfit mt-6 mb-3 tracking-tight ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                      1. Metodologías de Progreso en Calistenia
                    </h2>
                    <div className="space-y-2">
                      <p>• <strong className={isDarkMode ? 'text-indigo-300' : 'text-indigo-700'}>Manipulación Biomecánica (Torque):</strong> Modificar la palanca (ej. Tuck a Straddle) aleja el centro de masa multiplicando la intensidad sin kilos extra.</p>
                      <p>• <strong className={isDarkMode ? 'text-slate-100' : 'text-slate-900'}>Trabajo Excéntrico:</strong> Bajar en 4-5s para reclutar unidades de alto umbral.</p>
                      <p>• <strong className={isDarkMode ? 'text-indigo-300' : 'text-indigo-700'}>Isometrías Estratégicas:</strong> Sostener contracciones para sanar tendones.</p>
                    </div>
                  </section>

                  <section className="space-y-3">
                    <h2 className={`text-xl md:text-2xl font-bold font-outfit mt-8 mb-3 tracking-tight ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                      2. Ejes de Estabilización Escapular y Pélvica
                    </h2>
                    <p>• <strong>Retroversión Pélvica:</strong> Innegociable en Hollow Body, Planche y Handstand.</p>
                    <p>• <strong>Retracción vs Protracción:</strong> Omóplatos juntos en Remos/Front Lever; omóplatos separados en Planche/Pushups.</p>
                  </section>
                </div>
              )}

              {/* ========================================================================= */}
              {/* CAPÍTULOS 6 AL 10 */}
              {/* ========================================================================= */}
              {selectedModule === 6 && (
                <div className="space-y-6">
                  <h2 className={`text-xl md:text-2xl font-bold font-outfit mt-6 mb-3 tracking-tight ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                    1. Fundamentos Clínicos y los Big 5
                  </h2>
                  <p>• <strong>Movilidad Activa:</strong> Control motor sin fatiga previa (calentamiento).</p>
                  <p>• <strong>Flexibilidad Pasiva:</strong> Rango máximo post-entrenamiento en músculo caliente.</p>
                  <p>• <strong>Los Big 5:</strong> Pike, Pancake, Front Split, Middle Split, Bridge.</p>
                </div>
              )}

              {selectedModule === 7 && (
                <div className="space-y-6">
                  <h2 className={`text-xl md:text-2xl font-bold font-outfit mt-6 mb-3 tracking-tight ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                    1. Archivo de Rutinas Push / Pull / Legs
                  </h2>
                  <div className="space-y-3">
                    <p>• <strong>🔵 DÍA 1 PUSH:</strong> Extensiones tras nuca, Elevaciones laterales, Press inclinado, Aperturas.</p>
                    <p>• <strong>🔴 DÍA 2 PULL:</strong> Curl inclinado, Remo T, Remo Gironda, Jalón abierto, Facepull.</p>
                    <p>• <strong>🟢 DÍA 3 LEGS 1:</strong> Sillón de cuádriceps, Prensa, Sentadilla Hack, Búlgara.</p>
                    <p>• <strong>🟡 DÍA 4 LEGS 2:</strong> Peso muerto rumano, Curl femoral, Hip thrust, Gemelos.</p>
                  </div>
                </div>
              )}

              {selectedModule === 8 && (
                <div className="space-y-6">
                  <h2 className={`text-xl md:text-2xl font-bold font-outfit mt-6 mb-3 tracking-tight ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                    1. Periodización de 4 Fases Menstruales
                  </h2>
                  <div className="space-y-3">
                    <p>• <strong>Fase Menstrual (Semana 1):</strong> Acumulación de volumen con pesos moderados.</p>
                    <p>• <strong>Fase Folicular (Semana 2):</strong> Alta sensibilidad a la insulina. Intensificación y cargas altas.</p>
                    <p>• <strong>Fase Ovulatoria (Semana 3):</strong> Clímax de fuerza. Semana de récords personales.</p>
                    <p>• <strong>Fase Lútea (Semana 4):</strong> Progesterona elevada. Semana de descarga programada.</p>
                  </div>
                </div>
              )}

              {selectedModule === 9 && (
                <div className="space-y-6">
                  <h2 className={`text-xl md:text-2xl font-bold font-outfit mt-6 mb-3 tracking-tight ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                    1. Los 4 Bloques de la Sesión Híbrida
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                    <div className={`p-4 rounded-2xl border ${isDarkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                      <strong className="block text-indigo-600 font-bold mb-1 font-outfit">Bloque 1: Fuerza Relativa</strong>
                      <p className="text-xs">Calistenia pura con SNC fresco.</p>
                    </div>
                    <div className={`p-4 rounded-2xl border ${isDarkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                      <strong className="block text-slate-900 font-bold mb-1 font-outfit">Bloque 2: Hipertrofia Miofibrilar</strong>
                      <p className="text-xs">Máquinas pesadas y ejercicios compuestos.</p>
                    </div>
                    <div className={`p-4 rounded-2xl border ${isDarkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                      <strong className="block text-indigo-600 font-bold mb-1 font-outfit">Bloque 3: Estrés Metabólico</strong>
                      <p className="text-xs">Aislamiento y máximo bombeo muscular.</p>
                    </div>
                    <div className={`p-4 rounded-2xl border ${isDarkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                      <strong className="block text-slate-900 font-bold mb-1 font-outfit">Bloque 4: Barrido Metabólico</strong>
                      <p className="text-xs">Cardio suave y flujo de movilidad final.</p>
                    </div>
                  </div>
                </div>
              )}

              {selectedModule === 10 && (
                <div className="space-y-6">
                  <h2 className={`text-xl md:text-2xl font-bold font-outfit mt-6 mb-3 tracking-tight ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                    1. Hacks de Ejecución y Enlaces a Videoteca
                  </h2>
                  <div className="space-y-4">
                    <div className={`p-5 rounded-2xl border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 ${
                      isDarkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-slate-50 border-slate-200'
                    }`}>
                      <div>
                        <strong className="block font-bold text-slate-900 dark:text-white">Hack de Pullover en Polea</strong>
                        <p className="text-xs text-slate-500 dark:text-slate-400">Tracciona llevando los codos a la cadera en lugar de empujar con las manos.</p>
                      </div>
                      <a href="https://www.instagram.com/reel/Db6yK1GJiBa/?igsh=bDNyNGd2bW0zNDM1" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-600 text-white font-bold text-xs hover:bg-indigo-700 transition-colors shrink-0">
                        <InstagramIcon className="w-3.5 h-3.5" />
                        <span>Ver Reel Instagram</span>
                      </a>
                    </div>

                    <div className={`p-5 rounded-2xl border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 ${
                      isDarkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-slate-50 border-slate-200'
                    }`}>
                      <div>
                        <strong className="block font-bold text-slate-900 dark:text-white">Hack de Push-ups Diagonales</strong>
                        <p className="text-xs text-slate-500 dark:text-slate-400">Proyecta el cuerpo en diagonal hacia adelante para mayor activación pectoral.</p>
                      </div>
                      <a href="https://www.instagram.com/reel/DXE0SgFuM4b/?igsh=MXBwa3o3enRpN3RnMg%3D%3D" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-600 text-white font-bold text-xs hover:bg-indigo-700 transition-colors shrink-0">
                        <InstagramIcon className="w-3.5 h-3.5" />
                        <span>Ver Reel Instagram</span>
                      </a>
                    </div>
                  </div>
                </div>
              )}

            </div>

            {/* NAVEGACIÓN CAPÍTULO ANTERIOR / SIGUIENTE */}
            <div className={`flex flex-col sm:flex-row items-center justify-between gap-4 border-t pt-8 mt-12 ${
              isDarkMode ? 'border-slate-800' : 'border-slate-100'
            }`}>
              <button
                disabled={selectedModule === 1}
                onClick={() => {
                  if (selectedModule > 1) {
                    setSelectedModule(selectedModule - 1);
                    document.getElementById('blog-article-start')?.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className={`w-full sm:w-auto px-5 py-2.5 rounded-xl border text-xs font-bold font-mono uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                  selectedModule === 1
                    ? 'opacity-40 cursor-not-allowed border-slate-200 text-slate-400 bg-slate-50'
                    : isDarkMode
                    ? 'border-slate-800 bg-slate-900 hover:bg-slate-800 text-slate-200'
                    : 'border-slate-200 bg-slate-100 hover:bg-slate-200 text-slate-800'
                }`}
              >
                <span>←</span>
                <span>Módulo Anterior</span>
              </button>

              <span className={`text-xs font-mono font-bold uppercase tracking-widest ${
                isDarkMode ? 'text-slate-400' : 'text-slate-500'
              }`}>
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
                className={`w-full sm:w-auto px-5 py-2.5 rounded-xl border text-xs font-bold font-mono uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                  selectedModule === 10
                    ? 'opacity-40 cursor-not-allowed border-slate-200 text-slate-400 bg-slate-50'
                    : 'border-indigo-600/30 bg-indigo-600 text-white hover:bg-indigo-700 shadow-sm'
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
