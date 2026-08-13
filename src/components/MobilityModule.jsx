import React, { useState } from 'react';
import {
  Sun, Clock, ExternalLink, Layers, ShieldCheck, Flame, BookOpen
} from 'lucide-react';

// Custom SVG Icons for brands
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

export default function MobilityModule() {
  const [selectedWarmup, setSelectedWarmup] = useState('empuje'); // empuje, traccion, piernas

  // Protocols data (Section 1) - Read Only & Exact PDF Content
  const sessionProtocols = {
    empuje: {
      title: "🔴 DÍAS DE EMPUJE (Push: Lunes y Jueves)",
      focusPre: "Foco Pre-Entreno: Lubricación articular, control escapular y preparación de hombros/muñecas.",
      focusPost: "Foco Post-Entreno: Liberar acortamientos en pectoral, hombro anterior, tríceps y descomprimir muñecas.",
      preFases: [
        {
          faseName: "Fase 1 (Articular)",
          items: [
            { name: "Rotaciones de muñeca y cuello", sets: "1 min" },
            { name: "Arm Circles", sets: "15 adelante / 15 atrás" },
            { name: "Aperturas", sets: "1x15", video: "https://www.instagram.com/reel/DZZfr_lAR8S/?igsh=MTlzcnBpOHY3YnZ5bw%3D%3D" }
          ]
        },
        {
          faseName: "Fase 2 (Elásticos / Movilidad)",
          items: [
            { name: "Dislocación de hombro", sets: "1x12", video: "https://www.instagram.com/reel/DZZfr_lAR8S/?igsh=MTlzcnBpOHY3YnZ5bw%3D%3D" },
            { name: "Dislocación de hombro unilateral", sets: "1x12", video: "https://www.instagram.com/reel/DZZfr_lAR8S/?igsh=MTlzcnBpOHY3YnZ5bw%3D%3D" },
            { name: "Banded Pass Through", sets: "1x12", video: "https://www.instagram.com/reel/Dac9ebRiOCF/?igsh=MTJubTR3YThlN3FiNA%3D%3D" },
            { name: "Band Pull-Aparts", sets: "1x15" }
          ]
        },
        {
          faseName: "Fase 3 (Neural)",
          items: [
            { name: "Scapular Push-ups", sets: "2x10" },
            { name: "Planche Lean Isométrico", sets: "2x10-15 seg" }
          ]
        }
      ],
      post: [
        {
          name: "Estiramiento de Pectoral Sentado o en Pared",
          desc: "Colócate junto a un marco de puerta o sentado en una silla. Ancla tu antebrazo o mano y rota suavemente tu torso hacia el lado contrario para abrir el pecho. Mantén la posición estática sintiendo el estiramiento en el pectoral y el hombro anterior.",
          sets: "2x45 seg / lado"
        },
        {
          name: "Estiramiento de Tríceps por encima de la cabeza",
          desc: "Eleva un brazo por encima de tu cabeza y dobla el codo intentando tocar la parte alta de tu espalda. Con la mano libre, tira suavemente del codo hacia atrás. Mantén la tensión y respira profundamente.",
          sets: "2x45 seg"
        },
        {
          name: "Deslizamientos en Pared (Wall Slides)",
          desc: "Para relajar y reeducar las escápulas tras ejercicios pesados, apoya la cabeza, la espalda alta y la zona lumbar contra una pared. Con los brazos a 90 grados formando una 'W' contra la pared, deslízalos lentamente hacia arriba formando una 'Y' y vuelve a bajar sin despegar el cuerpo.",
          sets: "2x10 reps"
        },
        {
          name: "Estiramientos de Muñeca (Flexores y Extensores)",
          desc: "Extiende el brazo frente a ti. Primero, dobla la mano hacia abajo y con la otra mano aplica una suave presión para estirar el dorso (extensores). Luego, pon la palma hacia arriba y tira suavemente de los dedos hacia el suelo para estirar los flexores y la musculatura del antebrazo.",
          sets: "2x40 seg / lado"
        }
      ]
    },
    traccion: {
      title: "🔵 DÍAS DE TRACCIÓN (Pull: Martes y Sábado)",
      focusPre: "Foco Pre-Entreno: Depresión escapular, activación profunda del manguito rotador y preparación de tendones.",
      focusPost: "Foco Post-Entreno: Aliviar la rigidez en espalda, trapecios, romboides y flexores del codo (bíceps).",
      preFases: [
        {
          faseName: "Fase 1 (Articular)",
          items: [
            { name: "Rotaciones de muñeca, codos y hombros", sets: "1 min" },
            { name: "Gato-Camello", sets: "1x10" }
          ]
        },
        {
          faseName: "Fase 2 (Activación de Manguito y Elásticos)",
          items: [
            { name: "Straight-Arm Pulldown", sets: "1x15" },
            { name: "External Rotation", sets: "1x12", video: "https://www.instagram.com/reel/Dac9ebRiOCF/?igsh=MTJubTR3YThlN3FiNA%3D%3D" },
            { name: "Banded W", sets: "1x12", video: "https://www.instagram.com/reel/Dac9ebRiOCF/?igsh=MTJubTR3YThlN3FiNA%3D%3D" },
            { name: "Banded T", sets: "1x12", video: "https://www.instagram.com/reel/Dac9ebRiOCF/?igsh=MTJubTR3YThlN3FiNA%3D%3D" },
            { name: "Banded A - Single", sets: "1x12", video: "https://www.instagram.com/reel/Dac9ebRiOCF/?igsh=MTJubTR3YThlN3FiNA%3D%3D" },
            { name: "Banded Y - Single", sets: "1x12", video: "https://www.instagram.com/reel/Dac9ebRiOCF/?igsh=MTJubTR3YThlN3FiNA%3D%3D" },
            { name: "Banded Diagonal", sets: "1x12", video: "https://www.instagram.com/reel/Dac9ebRiOCF/?igsh=MTJubTR3YThlN3FiNA%3D%3D" },
            { name: "Banded Alternating Diagonal", sets: "1x12", video: "https://www.instagram.com/reel/Dac9ebRiOCF/?igsh=MTJubTR3YThlN3FiNA%3D%3D" }
          ]
        },
        {
          faseName: "Fase 3 (Neural)",
          items: [
            { name: "Scapular Pull-ups", sets: "2x8-10" },
            { name: "Planche Lean Isométrico", sets: "1x15 seg" }
          ]
        }
      ],
      post: [
        {
          name: "Postura del Niño (Child's Pose) / Estiramiento de Dorsales",
          desc: "De rodillas, siéntate sobre tus talones. Desliza las manos por el suelo hacia adelante lo más lejos que puedas y deja caer el pecho y la frente hacia el suelo. Esto estira profundamente los músculos dorsales y la zona lumbar.",
          sets: "2x60 seg"
        },
        {
          name: "El Gato-Camello (Cat-Cow)",
          desc: "En posición de cuadrupedia, exhala mientras redondeas la espalda hacia el techo metiendo la barbilla hacia el pecho. Luego, inhala mientras dejas caer el abdomen hacia el suelo y levantas la cabeza. Esto ayuda a liberar la tensión de los músculos erectores de la columna.",
          sets: "2x10 reps"
        },
        {
          name: "Rotación Torácica (Libro Abierto)",
          desc: "Tumbado de costado, flexiona las rodillas y caderas a 90 grados. Extiende ambos brazos al frente y, lentamente, levanta el brazo superior hacia el techo, girando el pecho para intentar tocar el suelo detrás de ti. Sigue tu mano con la mirada para estirar el pecho y movilizar la columna torácica.",
          sets: "2x10 reps / lado"
        },
        {
          name: "Estiramiento de Bíceps en Pared",
          desc: "Extiende el brazo lateralmente apoyando la palma de la mano en la pared a la altura del hombro. Gira tu torso lentamente en dirección opuesta al brazo anclado hasta sentir el estiramiento a lo largo del bíceps y el pecho.",
          sets: "2x45 seg / lado"
        }
      ]
    },
    piernas: {
      title: "🟢 DÍAS DE PIERNAS (Legs: Miércoles y Viernes)",
      focusPre: "Foco Pre-Entreno: Bisagra de cadera, rotación interna/externa y dorsiflexión.",
      focusPost: "Foco Post-Entreno: Devolver la elasticidad a caderas, rodillas y tobillos (cuádriceps, isquios, glúteos y gemelos).",
      preFases: [
        {
          faseName: "Fase 1 (Articular y Flujo en Suelo)",
          items: [
            { name: "Círculos de cadera, rodilla y tobillo", sets: "10x lado" },
            { name: "Frog rolls", sets: "3x10", video: "https://www.instagram.com/reel/DbdZZzMst9s/?igsh=d3drbDRqMm82bXVy" }
          ]
        },
        {
          faseName: "Fase 2 (Movilidad Dinámica)",
          items: [
            { name: "Rotación 90-90 (90/90 Hip Swivel)", sets: "3x10 por lado", video: "https://www.instagram.com/reel/DbdZZzMst9s/?igsh=d3drbDRqMm82bXVy" },
            { name: "World’s greatest stretch", sets: "3x10", video: "https://www.instagram.com/reel/DbdZZzMst9s/?igsh=d3drbDRqMm82bXVy" },
            { name: "Piramidal tumbada", sets: "2x8 por lado", video: "https://www.instagram.com/reel/DbdZZzMst9s/?igsh=d3drbDRqMm82bXVy" },
            { name: "Media mariposa en torsión", sets: "2x8 por lado", video: "https://www.instagram.com/reel/DbdZZzMst9s/?igsh=d3drbDRqMm82bXVy" }
          ]
        },
        {
          faseName: "Fase 3 (ROM y Activación)",
          items: [
            { name: "Dorsiflexión contra pared", sets: "1x10" },
            { name: "Monster Walks", sets: "1x15" }
          ]
        }
      ],
      post: [
        {
          name: "El Mejor Estiramiento del Mundo (World's Greatest Stretch)",
          desc: "Empieza en posición de zancada profunda, con un pie apoyado por fuera de tus manos. Intenta bajar el codo de ese lado hacia el suelo (estirando la ingle y los flexores), luego rota el torso elevando ese mismo brazo hacia el techo. Finalmente, estira la pierna delantera elevando las caderas para estirar los isquiotibiales.",
          sets: "2x45 seg / lado"
        },
        {
          name: "Estiramiento del Sofá (Couch Stretch)",
          desc: "Coloca la espinilla de la pierna trasera vertical contra la pared (con la rodilla en el suelo) y la pierna delantera en zancada. Contrae el glúteo de la pierna trasera e intenta enderezar el torso sin arquear la zona lumbar. Es el estiramiento más potente para el psoas y el recto femoral (cuádriceps) tras hacer sentadillas.",
          sets: "2x45 seg / lado"
        },
        {
          name: "Estiramiento FNP de Isquiotibiales",
          desc: "Tumbado boca arriba, utiliza una banda o toalla en la planta del pie de una pierna estirada hacia arriba. Para usar la técnica FNP y ganar rango rápido, empuja tu pie contra la banda durante 8 segundos (contracción). Relaja la pierna, respira hondo y tira pasivamente para llevar la pierna un poco más cerca de tu cuerpo.",
          sets: "3x45 seg"
        },
        {
          name: "Estiramiento Piramidal (Figura de 4)",
          desc: "Tumbado boca arriba, cruza un tobillo por encima de la rodilla contraria formando un '4'. Entrelaza tus manos detrás del muslo de la pierna que está apoyada y tira de ella hacia tu pecho para estirar profundamente el glúteo y los rotadores externos.",
          sets: "2x45 seg / lado"
        },
        {
          name: "Dorsiflexión contra la Pared (Gemelos / Sóleo)",
          desc: "De pie frente a una pared, apoya las manos. Deja una pierna estirada atrás con el talón pegado al suelo y flexiona la rodilla de la pierna delantera empujando las caderas hacia adelante. Mantén 30 segundos para estirar el gemelo.",
          sets: "2x30 seg / lado"
        }
      ]
    }
  };

  // LAS RUTINAS DE FLEX (PROGRAMACIÓN) - 2 BLOQUES POR RUTINA (3 A 4 SERIES POR EJERCICIO)
  const rutinasFlex = [
    {
      id: 1,
      title: "RUTINA 1: Hombros y Espalda Alta",
      focus: "Corrección Postural y Flexibilidad Torácica",
      freq: "2 a 3 veces/semana (Post-Empuje o Post-Tracción)",
      bloque1: {
        name: "Bloque 1: Rango Activo & Movilidad Torácica",
        exercises: [
          { name: "Dislocaciones pasivas con bastón o banda", sets: "3-4 x 15 reps", video: "https://www.instagram.com/p/DVrP3c7CAxh/", source: "instagram" },
          { name: "Scapular Push-ups & Planche Lean", sets: "3-4 x 10 reps", video: "https://www.instagram.com/p/DXo_HR-CC51/", source: "instagram" }
        ]
      },
      bloque2: {
        name: "Bloque 2: Elongación Pasiva de Torso",
        exercises: [
          { name: "Estiramiento pectoral unilateral en pared", sets: "3-4 x 45 seg", video: "https://www.instagram.com/p/DZkRCRKoQeX/", source: "instagram" },
          { name: "Puppy Pose con manos en apoyo elevado", sets: "3-4 x 45 seg", video: "https://www.instagram.com/p/DZU2a-lIl9g/", source: "instagram" }
        ]
      }
    },
    {
      id: 2,
      title: "RUTINA 2: Apertura de Cadera y Pelvis",
      focus: "Liberación de Psoas, Rotadores e Inclinación Pélvica",
      freq: "3 veces/semana",
      bloque1: {
        name: "Bloque 1: Movilización Dinámica 90/90",
        exercises: [
          { name: "90/90 Isometría y pliegue sobre rodilla", sets: "3-4 x 10 reps", video: "https://www.instagram.com/p/DXsXDfyjhz5/", source: "instagram" },
          { name: "Desplazamientos cosacos de movilidad", sets: "3-4 x 10 reps", video: "https://www.instagram.com/p/DWtvQsBiNXd/", source: "instagram" }
        ]
      },
      bloque2: {
        name: "Bloque 2: Flexibilidad Pasiva de Cadera",
        exercises: [
          { name: "Couch Stretch pasivo profundo contra pared", sets: "3-4 x 45 seg", video: "https://www.instagram.com/p/DWpHQK5CHlX/", source: "instagram" },
          { name: "Frog Pose (Postura de la rana)", sets: "3-4 x 45 seg", video: "https://www.instagram.com/p/DWUsftCiNaO/", source: "instagram" }
        ]
      }
    },
    {
      id: 3,
      title: "RUTINA 3: Cadena Posterior y Pike",
      focus: "Pliegue Frontal (Isquiosurales y Lumbares)",
      freq: "2 a 3 veces/semana",
      bloque1: {
        name: "Bloque 1: Fuerza Específica & FNP",
        exercises: [
          { name: "Jefferson Curl ultra lento con mancuerna", sets: "3-4 x 8 reps", video: "https://www.youtube.com/watch?v=_XPgMzk7mTA", source: "youtube" },
          { name: "Seated Leg Lifts (Compresión de Pike)", sets: "3-4 x 8 seg", video: "https://www.youtube.com/shorts/rodpZpzwvbA", source: "youtube" }
        ]
      },
      bloque2: {
        name: "Bloque 2: Elongación Pasiva de Pike",
        exercises: [
          { name: "Pike sentada en suelo con banda", sets: "3-4 x 60 seg", video: "https://www.instagram.com/p/DYm5V9TobYo/", source: "instagram" },
          { name: "Pliegue de pie asistido con bloques", sets: "3-4 x 45 seg", video: "https://www.instagram.com/p/DYKzmqriCex/", source: "instagram" }
        ]
      }
    },
    {
      id: 4,
      title: "RUTINA 4: Pancake y Aductores",
      focus: "Apertura Straddle y Anteversión Pélvica",
      freq: "2 veces/semana",
      bloque1: {
        name: "Bloque 1: Activación Dinámica Straddle",
        exercises: [
          { name: "Pancake dinámico buscando alcance", sets: "3-4 x 10 reps", video: "https://www.instagram.com/p/DXCHU4bCJaL/", source: "instagram" },
          { name: "Contracción FNP empujando suelo 3s", sets: "3-4 x 5 seg", video: "https://www.instagram.com/p/DVhCs_cCPPd/", source: "instagram" }
        ]
      },
      bloque2: {
        name: "Bloque 2: Flexibilidad Pasiva Pancake",
        exercises: [
          { name: "Pancake sentado con disco en cadera", sets: "3-4 x 60 seg", video: "https://www.instagram.com/p/DW89wn9CPkN/", source: "instagram" },
          { name: "Estiramiento de mariposa asistido", sets: "3-4 x 45 seg", video: "https://www.instagram.com/p/DZSUByCId8A/", source: "instagram" }
        ]
      }
    },
    {
      id: 5,
      title: "RUTINA 5: Front Split (Spagat Longitudinal)",
      focus: "Psoas / Flexores & Isquiotibial Delantero",
      freq: "2 veces/semana",
      bloque1: {
        name: "Bloque 1: Pre-Activación de Spagat",
        exercises: [
          { name: "Lunge bajo empujando cadera adelante", sets: "3-4 x 10 reps", video: "https://www.instagram.com/p/DZKuHAno-wJ/", source: "instagram" },
          { name: "Half Split extendiendo pierna frontal", sets: "3-4 x 10 reps", video: "https://www.instagram.com/p/DZINnMoCGjL/", source: "instagram" }
        ]
      },
      bloque2: {
        name: "Bloque 2: Isometría Pasiva Front Split",
        exercises: [
          { name: "Front Split asistido con bloques", sets: "3-4 x 45 seg", video: "https://www.instagram.com/p/DZFQ1m0I7Mx/", source: "instagram" },
          { name: "Contracción de glúteo trasero en Split", sets: "3-4 x 30 seg", video: "https://www.instagram.com/p/DZc5VcRCL5H/", source: "instagram" }
        ]
      }
    },
    {
      id: 6,
      title: "RUTINA 6: Middle Split (Spagat Lateral)",
      focus: "Aductores Profundos y Cápsula Coxofemoral",
      freq: "2 veces/semana",
      bloque1: {
        name: "Bloque 1: Apertura Coxofemoral Activa",
        exercises: [
          { name: "Half Middle Split dinámico en suelo", sets: "3-4 x 10 reps", video: "https://www.instagram.com/p/DXsXDfyjhz5/", source: "instagram" },
          { name: "Cosacos profundos sostenidos", sets: "3-4 x 10 reps", video: "https://www.instagram.com/p/DWtvQsBiNXd/", source: "instagram" }
        ]
      },
      bloque2: {
        name: "Bloque 2: Isometría Pasiva Middle Split",
        exercises: [
          { name: "Middle Split contra la pared", sets: "3-4 x 45 seg", video: "https://www.instagram.com/p/DXCHU4bCJaL/", source: "instagram" },
          { name: "Middle Split de pie con apoyo elevado", sets: "3-4 x 45 seg", video: "https://www.instagram.com/p/DVhCs_cCPPd/", source: "instagram" }
        ]
      }
    },
    {
      id: 7,
      title: "RUTINA 7: Caderas Profundas y Pelvis (El Trabajo Sucio)",
      focus: "Rotación Interna/Externa y Basculación Pélvica",
      freq: "2 a 3 veces/semana",
      bloque1: {
        name: "Bloque 1: Movilización Pélvica & Agarre",
        exercises: [
          { name: "Basculación pélvica anteversión/retroversión", sets: "3-4 x 12 reps", video: "https://www.instagram.com/p/DZSUByCId8A/", source: "instagram" },
          { name: "Rotaciones internas de cadera en suelo", sets: "3-4 x 10 reps", video: "https://www.instagram.com/p/DZKuHAno-wJ/", source: "instagram" }
        ]
      },
      bloque2: {
        name: "Bloque 2: Elongación Pélvica Profunda",
        exercises: [
          { name: "Paloma profunda / Piramidal en suelo", sets: "3-4 x 45 seg", video: "https://www.instagram.com/p/DZINnMoCGjL/", source: "instagram" },
          { name: "Estiramiento de ingle e isquio profundo", sets: "3-4 x 45 seg", video: "https://www.instagram.com/p/DZFQ1m0I7Mx/", source: "instagram" }
        ]
      }
    },
    {
      id: 8,
      title: "RUTINA 8: Rodillas y Tobillos (Estabilidad & Movilidad)",
      focus: "Salud Tendón Patelar y Dorsiflexión de Tobillo",
      freq: "3 veces/semana",
      bloque1: {
        name: "Bloque 1: Fortalecimiento y Rango Patelar",
        exercises: [
          { name: "Poliquin Step-ups en elevación", sets: "3-4 x 12 reps", video: "https://www.instagram.com/p/DYm5V9TobYo/", source: "instagram" },
          { name: "Tibialis Raise contra la pared", sets: "3-4 x 15 reps", video: "https://www.instagram.com/p/DW89wn9CPkN/", source: "instagram" }
        ]
      },
      bloque2: {
        name: "Bloque 2: Estiramiento y Flexibilidad de Tobillo",
        exercises: [
          { name: "Estiramiento de sóleo y gemelo en bloque", sets: "3-4 x 45 seg", video: "https://www.instagram.com/p/DYKzmqriCex/", source: "instagram" },
          { name: "Dorsiflexión de tobillo con carga", sets: "3-4 x 12 reps", video: "https://www.instagram.com/p/DZXc-S3ICp1/", source: "instagram" }
        ]
      }
    },
    {
      id: 9,
      title: "RUTINA 9: Rutina Expresa Full Body (5 Minutos)",
      focus: "Mantenimiento General y Descompresión Rápida",
      freq: "Diaria / Al terminar la jornada de trabajo",
      bloque1: {
        name: "Bloque 1: Descompresión Articular Expresa",
        exercises: [
          { name: "Cat-Cow dinámico continuo", sets: "3-4 x 10 reps", video: "https://www.instagram.com/p/DZc5VcRCL5H/", source: "instagram" },
          { name: "Downward Dog (Perro boca abajo)", sets: "3-4 x 45 seg", video: "https://www.youtube.com/watch?v=_XPgMzk7mTA", source: "youtube" }
        ]
      },
      bloque2: {
        name: "Bloque 2: Elongación Global Rápida",
        exercises: [
          { name: "Couch Stretch express por lado", sets: "3-4 x 30 seg", video: "https://www.instagram.com/p/DXsXDfyjhz5/", source: "instagram" },
          { name: "Colgado pasivo en barra o puerta", sets: "3-4 x 60 seg", video: "https://www.youtube.com/shorts/rodpZpzwvbA", source: "youtube" }
        ]
      }
    }
  ];

  return (
    <div className="space-y-8 max-w-7xl mx-auto w-full text-[#CCD0CF]">

      {/* HEADER SUPERIOR DEL MÓDULO */}
      <div className="glass-panel p-6 rounded-2xl border border-[#253745] space-y-2">
        <div className="flex items-center gap-2 text-[#9BA8AB] font-bold text-xs uppercase tracking-widest font-mono">
          <Sun className="w-5 h-5 text-amber-400" />
          <span>Sección Oficial del PDF</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold font-outfit text-white">
          Movilidad y Flexibilidad
        </h2>
        <p className="text-xs md:text-sm text-slate-300">
          Protocolos de movilidad pre-entreno, estiramientos pasivos post-sesión y la programación de las 9 Rutinas de Flex.
        </p>
      </div>

      {/* ========================================================================= */}
      {/* SECCIÓN 1: PROTOCOLOS DE MOVILIDAD Y FLEXIBILIDAD (EXACT DATA PDF) */}
      {/* ========================================================================= */}
      <div className="glass-panel p-6 rounded-2xl border border-[#253745] space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#253745] pb-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-[#06141B] border border-[#253745] rounded-xl">
              <Sun className="w-6 h-6 text-amber-400" />
            </div>
            <div>
              <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest font-mono">SECCIÓN 1</span>
              <h3 className="font-bold text-lg md:text-xl text-white font-outfit">
                Protocolos de Movilidad y Flexibilidad
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                Dinámica pre-entreno y recuperación post-sesión
              </p>
            </div>
          </div>

          {/* Selector de Protocolos */}
          <div className="flex bg-[#06141B] p-1.5 rounded-xl border border-[#253745] self-start sm:self-center shrink-0">
            {[
              { id: 'empuje', label: 'Empuje (L-J)' },
              { id: 'traccion', label: 'Tracción (M-S)' },
              { id: 'piernas', label: 'Piernas (X-V)' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedWarmup(tab.id)}
                className={`px-4 py-2 text-xs font-bold rounded-lg uppercase transition-all font-outfit ${selectedWarmup === tab.id ? 'bg-[#253745] text-white shadow' : 'text-[#9BA8AB] hover:text-white'}`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between">
          <h4 className="text-base font-bold text-[#9BA8AB] font-outfit uppercase tracking-wider">
            {sessionProtocols[selectedWarmup].title}
          </h4>
        </div>

        {/* SECTORES: PRE-ENTRENO (CON FASES) Y POST-ENTRENO (CON DESCRIPCIONES DETALLADAS) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* BLOQUE PRE-ENTRENAMIENTO (RANGO ACTIVO CON FASES 1, 2 Y 3) */}
          <div className="p-5 rounded-2xl border border-[#253745] bg-[#06141B] flex flex-col justify-between space-y-4">
            <div className="space-y-4">
              <div className="border-b border-[#253745] pb-2.5">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
                  <span className="text-xs font-bold text-white uppercase tracking-wider font-outfit">
                    PRE-ENTRENAMIENTO (Calentamiento)
                  </span>
                </div>
                <p className="text-xs text-amber-300/90 mt-1 font-medium leading-relaxed font-sans">
                  {sessionProtocols[selectedWarmup].focusPre}
                </p>
              </div>

              {/* Display Fases */}
              <div className="space-y-4">
                {sessionProtocols[selectedWarmup].preFases.map((fase, fIdx) => (
                  <div key={fIdx} className="space-y-2">
                    <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider block font-mono border-b border-[#253745]/60 pb-1">
                      {fase.faseName}
                    </span>
                    <div className="space-y-2">
                      {fase.items.map((item, idx) => (
                        <div key={idx} className="p-3 bg-[#11212D] rounded-xl border border-[#253745] flex flex-col justify-between gap-1.5 text-xs">
                          <div className="flex items-center justify-between gap-2">
                            <strong className="text-slate-200 text-xs">{item.name}</strong>
                            <span className="text-[10px] bg-[#06141B] text-[#CCD0CF] border border-[#253745] px-2 py-0.5 rounded font-mono font-bold shrink-0">
                              {item.sets}
                            </span>
                          </div>
                          {item.video && (
                            <a
                              href={item.video}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 text-[10.5px] text-[#9BA8AB] hover:text-white font-semibold font-outfit mt-0.5 self-start"
                            >
                              <InstagramIcon className="w-3.5 h-3.5 text-[#CCD0CF]" />
                              <span>Ver Video Reel</span>
                              <ExternalLink className="w-3 h-3 text-[#9BA8AB]" />
                            </a>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* BLOQUE POST-ENTRENAMIENTO (VUELTA A LA CALMA DETALLADA) */}
          <div className="p-5 rounded-2xl border border-[#253745] bg-[#06141B] flex flex-col justify-between space-y-4">
            <div className="space-y-4">
              <div className="border-b border-[#253745] pb-2.5">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
                  <span className="text-xs font-bold text-white uppercase tracking-wider font-outfit">
                    POST-ENTRENAMIENTO (Vuelta a la calma)
                  </span>
                </div>
                <p className="text-xs text-emerald-300/90 mt-1 font-medium leading-relaxed font-sans">
                  {sessionProtocols[selectedWarmup].focusPost}
                </p>
              </div>

              <div className="space-y-3">
                {sessionProtocols[selectedWarmup].post.map((item, idx) => (
                  <div key={idx} className="p-3.5 bg-[#11212D] rounded-xl border border-[#253745] space-y-1.5">
                    <div className="flex items-center justify-between gap-2">
                      <strong className="text-xs font-bold text-slate-200 font-outfit">{item.name}</strong>
                      <span className="text-[10px] bg-[#06141B] text-emerald-300 border border-[#253745] px-2 py-0.5 rounded font-mono font-bold shrink-0">
                        {item.sets}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-400 leading-relaxed font-normal">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ========================================================================= */}
      {/* SECCIÓN 2: LAS RUTINAS DE FLEX (PROGRAMACIÓN) */}
      {/* ========================================================================= */}
      <div className="glass-panel p-6 rounded-2xl border border-[#253745] space-y-6">
        <div className="flex items-center gap-3 border-b border-[#253745] pb-4">
          <div className="p-2.5 bg-[#06141B] border border-[#253745] rounded-xl">
            <Layers className="w-6 h-6 text-[#9BA8AB]" />
          </div>
          <div>
            <span className="text-[10px] font-bold text-[#9BA8AB] uppercase tracking-widest font-mono">SECCIÓN 2</span>
            <h3 className="font-bold text-lg md:text-xl text-white font-outfit">
              LAS RUTINAS DE FLEX (PROGRAMACIÓN)
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              Programación de las 9 Rutinas con Bloque 1 (Activo) y Bloque 2 (Pasivo) — Dosis: 3 a 4 Series por Ejercicio + Enlace de Video
            </p>
          </div>
        </div>

        {/* 9 Rutinas de Flex Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rutinasFlex.map((rutina) => (
            <div
              key={rutina.id}
              className="glass-card p-5 rounded-2xl border border-[#253745] flex flex-col justify-between hover:border-[#4A5C6A] transition-all duration-200 space-y-5 bg-[#06141B]"
            >
              <div className="space-y-4">
                {/* Rutina Header */}
                <div className="flex items-center justify-between border-b border-[#253745] pb-3">
                  <div>
                    <span className="text-[10px] font-bold text-[#9BA8AB] uppercase font-mono">RUTINA #{rutina.id}</span>
                    <h4 className="font-bold text-white text-base font-outfit mt-0.5">{rutina.title}</h4>
                  </div>
                </div>

                <div className="bg-[#11212D] p-3 rounded-xl border border-[#253745] text-xs space-y-1">
                  <span className="text-[10px] font-bold text-[#4A5C6A] uppercase tracking-wider block font-mono">Enfoque & Frecuencia:</span>
                  <p className="text-slate-200 font-semibold">{rutina.focus}</p>
                  <p className="text-[11px] text-slate-400 mt-0.5 font-mono">{rutina.freq}</p>
                </div>

                {/* BLOQUE 1 */}
                <div className="space-y-2">
                  <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider block font-mono border-b border-[#253745] pb-1">
                    {rutina.bloque1.name}
                  </span>
                  <div className="space-y-2">
                    {rutina.bloque1.exercises.map((ex, idx) => (
                      <div key={idx} className="p-2.5 bg-[#11212D] rounded-xl border border-[#253745] flex flex-col justify-between gap-2 text-xs">
                        <div className="flex items-center justify-between gap-2">
                          <strong className="text-slate-200 text-xs leading-snug">{ex.name}</strong>
                          <span className="text-[9.5px] bg-[#06141B] text-amber-300 px-2 py-0.5 rounded font-mono font-bold shrink-0 border border-[#253745]">
                            {ex.sets}
                          </span>
                        </div>
                        <a
                          href={ex.video}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-[10.5px] text-[#9BA8AB] hover:text-white font-semibold font-outfit mt-1 self-start"
                        >
                          {ex.source === 'instagram' && <InstagramIcon className="w-3.5 h-3.5 text-[#CCD0CF]" />}
                          {ex.source === 'youtube' && <YoutubeIcon className="w-3.5 h-3.5 text-red-400" />}
                          <span>Ver Video del Ejercicio</span>
                          <ExternalLink className="w-3 h-3 text-[#9BA8AB]" />
                        </a>
                      </div>
                    ))}
                  </div>
                </div>

                {/* BLOQUE 2 */}
                <div className="space-y-2">
                  <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider block font-mono border-b border-[#253745] pb-1">
                    {rutina.bloque2.name}
                  </span>
                  <div className="space-y-2">
                    {rutina.bloque2.exercises.map((ex, idx) => (
                      <div key={idx} className="p-2.5 bg-[#11212D] rounded-xl border border-[#253745] flex flex-col justify-between gap-2 text-xs">
                        <div className="flex items-center justify-between gap-2">
                          <strong className="text-slate-200 text-xs leading-snug">{ex.name}</strong>
                          <span className="text-[9.5px] bg-[#06141B] text-emerald-300 px-2 py-0.5 rounded font-mono font-bold shrink-0 border border-[#253745]">
                            {ex.sets}
                          </span>
                        </div>
                        <a
                          href={ex.video}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-[10.5px] text-[#9BA8AB] hover:text-white font-semibold font-outfit mt-1 self-start"
                        >
                          {ex.source === 'instagram' && <InstagramIcon className="w-3.5 h-3.5 text-[#CCD0CF]" />}
                          {ex.source === 'youtube' && <YoutubeIcon className="w-3.5 h-3.5 text-red-400" />}
                          <span>Ver Video del Ejercicio</span>
                          <ExternalLink className="w-3 h-3 text-[#9BA8AB]" />
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
