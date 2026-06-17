import { useState } from 'react';
import {
  BookOpen, X,
  ExternalLink, Sun, Clock
} from 'lucide-react';

// Custom SVG Icons for brands not available in the local Lucide package
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
  // UI States
  const [isWikiOpen, setIsWikiOpen] = useState(false);
  const [selectedWarmup, setSelectedWarmup] = useState('empuje'); // empuje, traccion, piernas
  const [completedStretches, setCompletedStretches] = useState({});
  const [videoFilter, setVideoFilter] = useState('all'); // all, cat1, cat2, cat3, cat4, cat5
  const [expandedWikiSection, setExpandedWikiSection] = useState('wiki'); // wiki, compression, rutinas
  const [selectedCoreExercise, setSelectedCoreExercise] = useState('');

  // Toggle dynamic checkboxes for warmups
  const toggleStretchCompleted = (id) => {
    setCompletedStretches(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // Reset checklist helper
  const resetChecklist = (type) => {
    const prefix = `${type}-`;
    setCompletedStretches(prev => {
      const updated = { ...prev };
      Object.keys(updated).forEach(key => {
        if (key.startsWith(prefix)) {
          updated[key] = false;
        }
      });
      return updated;
    });
  };

  // Protocols data (Módulo 2 y Módulo 5)
  const sessionProtocols = {
    empuje: {
      title: "Sesión de Empuje (Lunes y Jueves)",
      focusPre: "Foco Pre: Lubricación articular y control escapular + Activación de Core.",
      focusPost: "Foco Post: Liberación de la musculatura anterior y descompresión de muñecas.",
      pre: [
        {
          id: "empuje-pre-1",
          name: "Movilidad de Muñecas y Círculos de Brazo",
          desc: "Rotaciones continuas en planos frontal y sagital",
          sets: "1x15 repeticiones",
          type: "mobility"
        },
        {
          id: "empuje-pre-2",
          name: "Dislocaciones de Hombro con Banda o Bastón",
          desc: "Mantener brazos rectos controlando la apertura escapular",
          sets: "1x12 repeticiones",
          type: "mobility"
        },
        {
          id: "empuje-pre-3",
          name: "Scapular Push-ups & Planche Lean",
          desc: "Activación neural del serrato anterior e isometría básica",
          sets: "2x10 repeticiones + 10-15 seg",
          type: "mobility"
        },
        {
          id: "empuje-core-1",
          name: "Full Range Reverse Crunch",
          desc: "Bottom-up flexion - Flexión de cadera y abdomen bajo",
          sets: "2 series x 10-15 reps",
          type: "core"
        },
        {
          id: "empuje-core-2",
          name: "Torso Rotation",
          desc: "Rotation - Movilidad rotacional controlada del torso",
          sets: "2 series x 10-15 reps",
          type: "core"
        },
        {
          id: "empuje-core-3",
          name: "QL Extension",
          desc: "Lateral flexion - Estiramiento y fuerza del cuadrado lumbar",
          sets: "2 series x 10-15 reps",
          type: "core"
        },
        {
          id: "empuje-core-4",
          name: "Plank Pull Thru",
          desc: "Anti-rotation / stabilization - Anti-rotación isométrica en plancha",
          sets: "2 series x 10-15 reps",
          type: "core"
        }
      ],
      post: [
        {
          id: "empuje-post-1",
          name: "Estiramiento de Pectoral Sentado o en Pared",
          desc: "Ancla tu antebrazo o mano y rota suavemente tu torso hacia el lado contrario para abrir el pecho y hombro anterior.",
          sets: "3 series x 30 seg (por lado)"
        },
        {
          id: "empuje-post-2",
          name: "Estiramiento de Tríceps por encima de la cabeza",
          desc: "Eleva un brazo por encima de tu cabeza y dobla el codo. Con la mano libre, tira suavemente del codo hacia atrás.",
          sets: "3 series x 30 seg (por lado)"
        },
        {
          id: "empuje-post-3",
          name: "Estiramientos de Muñeca (Flexores y Extensores)",
          desc: "Brazo al frente. Dobla la mano abajo presionando con la otra mano (extensores); luego palma arriba tirando dedos abajo (flexores).",
          sets: "3 series x 30 seg"
        }
      ]
    },
    traccion: {
      title: "Sesión de Tracción (Martes y Sábado)",
      focusPre: "Foco Pre: Depresión escapular y preparación de tendones + Activación de Core.",
      focusPost: "Foco Post: Alivio de tensión y rigidez acumulada en espalda, trapecios e inserciones de codo.",
      pre: [
        {
          id: "traccion-pre-1",
          name: "Rotaciones Articulares de Codo y Muñeca",
          desc: "Movimiento controlado para calentar el túnel carpiano y tendones",
          sets: "15 repeticiones",
          type: "mobility"
        },
        {
          id: "traccion-pre-2",
          name: "Straight-Arm Pulldowns con Banda & Gato-Camello",
          desc: "Activación del dorsal ancho y movilidad intervertebral completa",
          sets: "Pulldowns (1x15) | Gato-Camello (1x10)",
          type: "mobility"
        },
        {
          id: "traccion-pre-3",
          name: "Scapular Pull-ups (Colgado activo/pasivo)",
          desc: "Retracción y depresión de escápulas en barra fija",
          sets: "2x8-10 repeticiones",
          type: "mobility"
        },
        {
          id: "traccion-core-1",
          name: "Full Range Reverse Crunch",
          desc: "Bottom-up flexion - Flexión de cadera y abdomen bajo",
          sets: "2 series x 10-15 reps",
          type: "core"
        },
        {
          id: "traccion-core-2",
          name: "Torso Rotation",
          desc: "Rotation - Movilidad rotacional controlada del torso",
          sets: "2 series x 10-15 reps",
          type: "core"
        },
        {
          id: "traccion-core-3",
          name: "QL Extension",
          desc: "Lateral flexion - Estiramiento y fuerza del cuadrado lumbar",
          sets: "2 series x 10-15 reps",
          type: "core"
        },
        {
          id: "traccion-core-4",
          name: "Plank Pull Thru",
          desc: "Anti-rotation / stabilization - Anti-rotación isométrica en plancha",
          sets: "2 series x 10-15 reps",
          type: "core"
        }
      ],
      post: [
        {
          id: "traccion-post-1",
          name: "Postura del Niño (Child's Pose) / Estiramiento de Dorsales",
          desc: "De rodillas, siéntate sobre los talones. Desliza las manos hacia adelante lo más lejos posible y deja caer el pecho y la frente.",
          sets: "3 series x 30 seg"
        },
        {
          id: "traccion-post-2",
          name: "Rotación Torácica (Libro Abierto)",
          desc: "Tumbado de costado con rodillas a 90 grados, extiende ambos brazos al frente y gira el superior intentando tocar el suelo atrás.",
          sets: "3 series x 30 seg (por lado)"
        },
        {
          id: "traccion-post-3",
          name: "Estiramiento de Bíceps en Pared",
          desc: "Extiende el brazo lateralmente con la palma en la pared a la altura del hombro. Gira el torso en dirección opuesta.",
          sets: "3 series x 30 seg (por lado)"
        }
      ]
    },
    piernas: {
      title: "Sesión de Piernas (Miércoles y Viernes)",
      focusPre: "Foco Pre: Bisagra de cadera y dorsiflexión profunda + Activación de Core.",
      focusPost: "Foco Post: Devolución de la elasticidad a las caderas, rodillas y tobillos para prevenir acortamientos.",
      pre: [
        {
          id: "piernas-pre-1",
          name: "Círculos de Cadera y Movilidad de Tobillo",
          desc: "Rotación interna/externa de cadera y círculos para el tendón de Aquiles",
          sets: "10 repeticiones",
          type: "mobility"
        },
        {
          id: "piernas-pre-2",
          name: "90/90 Hip Swivels Dinámicos",
          desc: "Rotación de cadera sentado manteniendo glúteos en contacto con el suelo",
          sets: "1x8 repeticiones",
          type: "mobility"
        },
        {
          id: "piernas-pre-3",
          name: "World's Greatest Stretch & Dorsiflexión Tobillo",
          desc: "Zancada profunda con rotación torácica y empuje de rodilla contra pared",
          sets: "WGS (1x5) | Tobillo (1x10 seg)",
          type: "mobility"
        },
        {
          id: "piernas-core-1",
          name: "Full Range Reverse Crunch",
          desc: "Bottom-up flexion - Flexión de cadera y abdomen bajo",
          sets: "2 series x 10-15 reps",
          type: "core"
        },
        {
          id: "piernas-core-2",
          name: "Torso Rotation",
          desc: "Rotation - Movilidad rotacional controlada del torso",
          sets: "2 series x 10-15 reps",
          type: "core"
        },
        {
          id: "piernas-core-3",
          name: "QL Extension",
          desc: "Lateral flexion - Estiramiento y fuerza del cuadrado lumbar",
          sets: "2 series x 10-15 reps",
          type: "core"
        },
        {
          id: "piernas-core-4",
          name: "Plank Pull Thru",
          desc: "Anti-rotation / stabilization - Anti-rotación isométrica en plancha",
          sets: "2 series x 10-15 reps",
          type: "core"
        }
      ],
      post: [
        {
          id: "piernas-post-1",
          name: "Estiramiento del Sofá (Couch Stretch)",
          desc: "Espinilla trasera contra la pared y rodilla en suelo, pierna delantera en zancada. Contrae el glúteo y endereza el torso.",
          sets: "3 series x 30 seg (por pierna)"
        },
        {
          id: "piernas-post-2",
          name: "Estiramiento FNP de Isquiotibiales",
          desc: "Tumbado boca arriba, usa una banda en la planta del pie de la pierna estirada. Empuja 8s contra ella y luego relaja y estira pasivamente.",
          sets: "3 series x 30 seg (por pierna)"
        },
        {
          id: "piernas-post-3",
          name: "Estiramiento Piramidal (Figura de 4)",
          desc: "Tumbado boca arriba, cruza un tobillo sobre la rodilla contraria formando un '4' y tira del muslo de la pierna apoyada hacia el pecho.",
          sets: "3 series x 30 seg (por lado)"
        }
      ]
    }
  };

  const coreExercises = sessionProtocols[selectedWarmup].pre.filter(e => e.type === 'core');
  const activeCoreExercise = coreExercises.find(e => e.id === selectedCoreExercise) || coreExercises[0];

  // Video Library organized by category from PDF (Módulo 5)
  const videoCategories = [
    {
      id: "cat1",
      categoryName: "CATEGORÍA 1: Compresión, Core Profundo y Control Escapular (Fuerza Activa)",
      desc: "Entrena la capacidad del abdomen y flexores profundos de cadera para cerrar el ángulo corporal bajo tensión.",
      videos: [
        { name: "Pike Compression Hold (Estático de Referencia)", url: "https://ar.pinterest.com/pin/752453050284881057/", duration: "Estático", source: "pinterest" },
        { name: "Jefferson Curl & Mecánica de Compresión", url: "https://www.youtube.com/watch?v=G1_EoDs-G7E", duration: "5 Minutos", source: "youtube" },
        { name: "Activación y Control de Escápulas", url: "https://www.youtube.com/watch?v=1EzTwT1sjTI", duration: "6 Minutos", source: "youtube" },
        { name: "Entrenamiento de Core Profundo (22 Minutos)", url: "https://www.youtube.com/watch?v=Un2uT__Kggc", duration: "22 Minutos", source: "youtube" },
        { name: "Entrenamiento de Core General (25 Minutos)", url: "https://www.youtube.com/watch?v=scFiiKqWNvc", duration: "25 Minutos", source: "youtube" }
      ]
    },
    {
      id: "cat2",
      categoryName: "CATEGORÍA 2: Tren Superior Localizado (Hombros, Espalda Alta y Muñecas)",
      desc: "Ideal para realizar al terminar tus días de empuje o tracción, o de forma aislada para higiene articular.",
      videos: [
        { name: "Posture Correction | 3 Exercises", url: "https://www.instagram.com/p/DVrP3c7CAxh/", duration: "5-10 Minutos", source: "instagram" },
        { name: "Posture & Upper Back Pain", url: "https://www.instagram.com/p/DXo_HR-CC51/?img_index=4", duration: "5-10 Minutos", source: "instagram" },
        { name: "Movilidad de Hombros Express (5 Minutos)", url: "https://www.youtube.com/watch?v=1iIGtD_tZro", duration: "5 Minutos", source: "youtube" },
        { name: "Movilidad y Fortalecimiento de Muñecas (10 Minutos)", url: "https://www.youtube.com/watch?v=T9iDur3uxso", duration: "10 Minutos", source: "youtube" },
        { name: "Movilidad de Hombros Completa (15 Minutos)", url: "https://www.youtube.com/watch?v=xTZ5WDmGtbo", duration: "15 Minutos", source: "youtube" },
        { name: "Rutina Completa para Tren Superior (20 Minutos)", url: "https://www.youtube.com/watch?v=ZjSgc1qM0xQ", duration: "20 Minutos", source: "youtube" },
        { name: "Posture | Upper Back Pain (5 Minutos)", url: "https://www.instagram.com/p/DZkRCRKoQeX/", duration: "5 Minutos", source: "instagram" },
        { name: "Postura (5 Minutos)", url: "https://www.instagram.com/p/DZU2a-lIl9g/", duration: "5 Minutos", source: "instagram" },
        { name: "Posture | Stiff Upper Back (5 Minutos)", url: "https://www.instagram.com/p/DZNsozXI0Tk/", duration: "5 Minutos", source: "instagram" },
        { name: "Posture & Upper Back Pain (Variante)", url: "https://www.instagram.com/p/DYos2fVIizU/", duration: "5-10 Minutos", source: "instagram" },
        { name: "Posture | Upper Back Strength & Mobility", url: "https://www.instagram.com/p/DW1MUGpCL67/?img_index=4", duration: "5-10 Minutos", source: "instagram" },
        { name: "Spine  | Upper Mobility", url: "https://www.instagram.com/p/DXX7pQXjiBh/ ", duration: "5-10 Minutos", source: "instagram" },
        { name: "Full Upper  | Upper Mobility", url: "https://www.instagram.com/p/DY0rRJvuZk4/", duration: "5-10 Minutos", source: "instagram" }
      ]
    },
    {
      id: "cat3",
      categoryName: "CATEGORÍA 3: Tren Inferior Localizado (Cadera, Isquios, Cuádriceps y Pancake)",
      desc: "Sesiones de aislamiento. Las de menor duración sirven como pre-entreno; las más largas van post-sesión o en descanso.",
      videos: [
        { name: "HIPS | Mobility Routine", url: "https://www.instagram.com/p/DXsXDfyjhz5/", duration: "5-10 Minutos", source: "instagram" },
        { name: "Stiff Hips | Mobility Routine", url: "https://www.instagram.com/p/DWtvQsBiNXd/", duration: "5-10 Minutos", source: "instagram" },
        { name: "Stiff Hips | Mobility Routine (Variante)", url: "https://www.instagram.com/p/DWpHQK5CHlX/?img_index=2", duration: "5-10 Minutos", source: "instagram" },
        { name: "Low Back Pain | 4 Exercises", url: "https://www.instagram.com/p/DWUsftCiNaO/", duration: "5-10 Minutos", source: "instagram" },
        { name: "Knee Pain | Knee Strength Routine (10 Minutos)", url: "https://www.instagram.com/p/DYm5V9TobYo/", duration: "10 Minutos", source: "instagram" },
        { name: "Hip Mobility (10 Minutos)", url: "https://www.instagram.com/p/DYKzmqriCex/?img_index=1", duration: "10 Minutos", source: "instagram" },
        { name: "Fortalecimiento de Rodillas (5 Minutos)", url: "https://www.instagram.com/p/DZXc-S3ICp1/", duration: "5 Minutos", source: "instagram" },
        { name: "HIP Mobility (Apertura)", url: "https://www.instagram.com/p/DXCHU4bCJaL/", duration: "5-10 Minutos", source: "instagram" },
        { name: "STIFF HIPS | MOBILITY ROUTINE (Aislado)", url: "https://www.instagram.com/p/DVhCs_cCPPd/", duration: "5-10 Minutos", source: "instagram" },
        { name: "Knee Pain | Knee Stability Routine", url: "https://www.instagram.com/p/DW89wn9CPkN/?img_index=3", duration: "5-10 Minutos", source: "instagram" },
        { name: "Rutina Pélvica", url: "https://www.instagram.com/p/DZSUByCId8A/", duration: "5-10 Minutos", source: "instagram" },
        { name: "HIP Mobility (Control)", url: "https://www.instagram.com/p/DZKuHAno-wJ/", duration: "5-10 Minutos", source: "instagram" },
        { name: "HIP Mobility (10 Minutos - B)", url: "https://www.instagram.com/p/DZINnMoCGjL/?img_index=6", duration: "10 Minutos", source: "instagram" },
        { name: "HIP Mobility (5 Minutos)", url: "https://www.instagram.com/p/DZFQ1m0I7Mx/", duration: "5 Minutos", source: "instagram" },
        { name: "Movilidad y Alivio de Cadera (10 Minutos)", url: "https://www.youtube.com/watch?v=KL5vZzohxlU", duration: "10 Minutos", source: "youtube" },
        { name: "Isquiotibiales Focalizado (10 Minutos)", url: "https://www.youtube.com/watch?v=Qp3Vl7b_y6o", duration: "10 Minutos", source: "youtube" },
        { name: "Rutina Completa de Cuádriceps (15 Minutos)", url: "https://www.youtube.com/watch?v=AGymH_bI-WI", duration: "15 Minutos", source: "youtube" },
        { name: "Flexibilidad de Isquiotibiales - Variante A (15 Minutos)", url: "https://www.youtube.com/watch?v=u4Yx0Y_voQE", duration: "15 Minutos", source: "youtube" },
        { name: "Flexibilidad de Isquiotibiales - Variante B (15 Minutos)", url: "https://www.youtube.com/watch?v=3Ymjw7TSzrE", duration: "15 Minutos", source: "youtube" },
        { name: "Apertura y Bisagra en Pancake (15 Minutos)", url: "https://www.youtube.com/watch?v=bs63okrxH8E", duration: "15 Minutos", source: "youtube" },
        { name: "Flexibilidad de Piernas e Isquios General (17 Minutos)", url: "https://www.youtube.com/watch?v=-E-rsL1KOwE", duration: "17 Minutos", source: "youtube" },
        { name: "Movilidad Profunda de Cadera (20 Minutos)", url: "https://www.youtube.com/watch?v=efSYxLyAAlw", duration: "20 Minutos", source: "youtube" }
      ]
    },
    {
      id: "cat4",
      categoryName: "CATEGORÍA 4: El Bloque Maestro \"Full Body\"",
      desc: "Todas las rutinas completas de cuerpo entero organizadas por duración y objetivo.",
      videos: [
        { name: "Full Body Express I (Instagram)", url: "https://www.instagram.com/p/DZc5VcRCL5H/?img_index=6", duration: "5 Minutos", source: "instagram" },
        { name: "Full Body Express (5 Minutos)", url: "https://www.youtube.com/watch?v=cacwri2wio4", duration: "5 Minutos", source: "youtube" },
        { name: "Full Body Dinámico y Fluido (15 Minutos)", url: "https://www.youtube.com/watch?v=0VrLgzwTmTg", duration: "15 Minutos", source: "youtube" },
        { name: "Full Body Intermedio - Variante A (15 Minutos)", url: "https://www.youtube.com/watch?v=L_xrDAtykMI", duration: "15 Minutos", source: "youtube" },
        { name: "Full Body Intermedio - Variante B (15 Minutos)", url: "https://www.youtube.com/watch?v=QR0JKN1NmV8", duration: "15 Minutos", source: "youtube" },
        { name: "Full Body Intermedio - Variante C (15 Minutos)", url: "https://www.youtube.com/watch?v=QJeW83kIn4A", duration: "15 Minutos", source: "youtube" },
        { name: "Full Body General de Recuperación/Descarga (15 Minutos)", url: "https://www.youtube.com/watch?v=d4ZJXhCmORA", duration: "15 Minutos", source: "youtube" },
        { name: "Full Body de Flexibilidad con Marcas de Tiempo (20 Minutos)", url: "https://www.youtube.com/watch?v=DCdKTMlatYw&t=19s", duration: "20 Minutos", source: "youtube" },
        { name: "Full Body de Flexibilidad Estándar (20 Minutos)", url: "https://www.youtube.com/watch?v=DCdKTMlatYw", duration: "20 Minutos", source: "youtube" },
        { name: "Full Body Estructural y Postural (20 Minutos)", url: "https://www.youtube.com/watch?v=lPKRiU9u_Hc", duration: "20 Minutos", source: "youtube" },
        { name: "Full Body de Flexibilidad Activa - Opción 1 (25 Minutos)", url: "https://www.youtube.com/watch?v=OjcN6RzWFWs", duration: "25 Minutos", source: "youtube" },
        { name: "Full Body de Flexibilidad Activa - Opción 2 (25 Minutos)", url: "https://www.youtube.com/watch?v=FSggBLhXpXw", duration: "25 Minutos", source: "youtube" },
        { name: "Full Body Avanzado de Rangos Máximos - Opción 1 (30 Minutos)", url: "https://www.youtube.com/watch?v=vOvVg0EIi6w", duration: "30 Minutos", source: "youtube" },
        { name: "Full Body Avanzado de Rangos Máximos - Opción 2 (30 Minutos)", url: "https://www.youtube.com/watch?v=nKVIAzcU7Bw", duration: "30 Minutos", source: "youtube" },
        { name: "Full Body de Alta Inmersión y Tejido Conectivo (45 Minutos)", url: "https://www.youtube.com/watch?v=enSIG1rTjJA", duration: "45 Minutos", source: "youtube" },
        { name: "Full Body de Flexibilidad Estructural Pesada (50 Minutos)", url: "https://www.youtube.com/watch?v=rCjKTy9NWM0", duration: "50 Minutos", source: "youtube" },
        { name: "Sesión Maestra Completa de Flexibilidad - Tipo A (60 Minutos)", url: "https://www.youtube.com/watch?v=hC5O4fEaik0", duration: "60 Minutos", source: "youtube" },
        { name: "Sesión Maestra Completa de Flexibilidad - Tipo B (60 Minutos)", url: "https://www.youtube.com/watch?v=DJfjSLVdUMo", duration: "60 Minutos", source: "youtube" },
        { name: "Colección de Rutinas para Principiantes (Rutinas Beginner)", url: "https://www.youtube.com/watch?v=VdlN7kUfZZ4", duration: "Colección", source: "youtube" },
        { name: "Sesión Full Body de Relajación, Estiramiento Pasivo y Descompresión (15 Minutos)", url: "https://www.youtube.com/watch?v=1u30bEkE2dE", duration: "15 Minutos", source: "youtube" }
      ]
    },
    {
      id: "cat5",
      categoryName: "CATEGORÍA 5: Estiramientos Aislados y Micro-Dosis (\"Snacks\" de Movilidad)",
      desc: "Ejercicios sueltos o rutinas ultra cortas ideales para romper posiciones sedentarias durante el día.",
      videos: [
        { name: "Estiramiento Aislado de Cadena Posterior - Ejercicio 1", url: "https://www.youtube.com/watch?v=jkZ4m1h0qes", duration: "5 Minutos", source: "youtube" },
        { name: "Estiramiento Aislado de Cadena Anterior/Apertura - Ejercicio 2", url: "https://www.youtube.com/watch?v=sgno4lXGjJA", duration: "5 Minutos", source: "youtube" },
        { name: "Snack de Movilidad Global Diaria (Apto todos los días)", url: "https://www.youtube.com/watch?v=75h76-gfXSM", duration: "8 Minutos", source: "youtube" },
        { name: "Snack de Elongación Pasiva General (Apto todos los días)", url: "https://www.youtube.com/watch?v=LPnaVXUqG4A", duration: "10 Minutos", source: "youtube" }
      ]
    }
  ];

  return (
    <div className="space-y-6">

      {/* HEADER SUPERIOR */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-900 pb-4">
        <div>
          <span className="text-xs font-bold text-violet-400 uppercase tracking-widest font-outfit">Sección Independiente</span>
          <h2 className="text-2xl font-bold font-outfit text-white mt-1">Flexibilidad y Movilidad</h2>
          <p className="text-xs text-slate-400 mt-1 max-w-xl">
            Preparación y recuperación muscular para optimizar tus entrenamientos del macrociclo de 12 semanas.
          </p>
        </div>

        {/* BOTON WIKI (VISIBILIDAD SECUNDARIA) */}
        <button
          onClick={() => setIsWikiOpen(true)}
          className="flex items-center gap-2 px-5 py-3 rounded-xl bg-violet-600 hover:bg-violet-500 font-semibold text-white text-xs tracking-wider uppercase transition-all shadow-lg shadow-violet-950/40 hover:shadow-violet-600/20 active:scale-95 self-start md:self-center font-outfit border border-violet-500/20"
        >
          <BookOpen className="w-4.5 h-4.5" />
          Ver Wiki Teórica
        </button>
      </div>

      {/* MAQUETACIÓN DE PANTALLA PRINCIPAL (VISIBILIDAD PRIMARIA) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* COLUMNA IZQUIERDA: 1. PROTOCOLOS DE MOVILIDAD PRE-ENTRENAMIENTO */}
        <div className="lg:col-span-2 space-y-6">

          {/* TARJETA DESTACADA: PROTOCOLOS DE MOVILIDAD Y FLEXIBILIDAD */}
          <div className="glass-panel p-6 rounded-2xl glow-indigo space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
              <div className="flex items-center gap-2.5">
                <div className="p-2 bg-amber-500/10 border border-amber-500/20 rounded-xl">
                  <Sun className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-slate-200 uppercase tracking-wider font-outfit">
                    Protocolos de Movilidad y Flexibilidad
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">Dinámica pre-entreno y recuperación post-sesión</p>
                </div>
              </div>

              {/* Selector de Protocolo */}
              <div className="flex bg-slate-950 p-1 rounded-xl border border-slate-900 self-start sm:self-center shrink-0">
                {['empuje', 'traccion', 'piernas'].map((type) => (
                  <button
                    key={type}
                    onClick={() => setSelectedWarmup(type)}
                    className={`px-3.5 py-1.5 text-[10px] font-bold rounded-lg uppercase transition-all font-outfit ${selectedWarmup === type ? 'bg-violet-600 text-white' : 'text-slate-500 hover:text-slate-350'}`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-1">
              <h4 className="text-sm font-bold text-violet-400 font-outfit uppercase tracking-wider">
                {sessionProtocols[selectedWarmup].title}
              </h4>
            </div>

            {/* SECTORES: PRE Y POST ENTRENAMIENTO */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

              {/* BLOQUE PRE-ENTRENAMIENTO */}
              <div className="p-4 rounded-xl border border-slate-850 bg-slate-950/20 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 border-b border-slate-900 pb-2 mb-2">
                    <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                    <span className="text-[11px] font-bold text-slate-200 uppercase tracking-wider font-outfit">Pre-Entrenamiento (Rango Activo)</span>
                  </div>
                  <span className="text-[10px] text-slate-400 block mb-3 font-medium">
                    {sessionProtocols[selectedWarmup].focusPre}
                  </span>

                  <div className="space-y-4">
                    {/* Movilidad Articular */}
                    <div>
                      <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block border-b border-slate-900 pb-1 mb-2 font-outfit">
                        1. Movilidad Articular
                      </span>
                      <div className="divide-y divide-slate-900 bg-slate-950/25 p-2 rounded-xl border border-slate-900/60">
                        {sessionProtocols[selectedWarmup].pre.filter(e => e.type === 'mobility').map((phase) => (
                          <div key={phase.id} className="py-2.5 px-1.5 space-y-1">
                            <strong className="text-xs font-bold text-slate-250 block font-outfit">
                              {phase.name}
                            </strong>
                            <p className="text-[10px] text-slate-500 leading-relaxed">
                              {phase.desc}
                            </p>
                            <span className="inline-block mt-1 bg-slate-950 border border-slate-850/60 px-2 py-0.5 rounded text-[9px] text-slate-400 font-bold font-outfit">
                              Dosis: {phase.sets}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Activación de Core */}
                    <div className="space-y-3">
                      <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block border-b border-slate-900 pb-1 font-outfit">
                        2. Activación de Abdominales
                      </span>
                      <div className="space-y-2">
                        {/* Selector Dropdown */}
                        <select
                          value={activeCoreExercise?.id || ''}
                          onChange={(e) => setSelectedCoreExercise(e.target.value)}
                          className="w-full bg-slate-950 border border-slate-850 text-xs text-slate-300 rounded-xl px-3 py-2.5 focus:outline-none focus:border-violet-500 font-outfit cursor-pointer"
                        >
                          {coreExercises.map((phase) => (
                            <option key={phase.id} value={phase.id} className="bg-slate-950 text-slate-350">
                              {phase.name}
                            </option>
                          ))}
                        </select>

                        {/* Detalles del ejercicio de Core seleccionado */}
                        {activeCoreExercise && (
                          <div className="p-3 bg-slate-950/40 rounded-xl border border-slate-900/60 space-y-1.5">
                            <div className="flex justify-between items-start gap-3">
                              <strong className="text-xs font-bold text-violet-400 font-outfit">
                                {activeCoreExercise.name}
                              </strong>
                              <span className="bg-slate-950 border border-slate-850 px-2 py-0.5 rounded text-[9px] text-slate-400 font-bold font-outfit shrink-0">
                                Dosis: {activeCoreExercise.sets}
                              </span>
                            </div>
                            <p className="text-[10px] text-slate-500 leading-relaxed">
                              {activeCoreExercise.desc}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* BLOQUE POST-ENTRENAMIENTO */}
              <div className="p-4 rounded-xl border border-slate-850 bg-slate-950/20 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 border-b border-slate-900 pb-2 mb-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                    <span className="text-[11px] font-bold text-slate-200 uppercase tracking-wider font-outfit">Post-Entrenamiento (Flexibilidad Pasiva)</span>
                  </div>
                  <span className="text-[10px] text-slate-400 block mb-3 font-medium">
                    {sessionProtocols[selectedWarmup].focusPost}
                  </span>

                  <div className="divide-y divide-slate-900">
                    {sessionProtocols[selectedWarmup].post.map((phase) => (
                      <div key={phase.id} className="py-2.5 space-y-1">
                        <strong className="text-xs font-bold text-slate-200 block font-outfit">
                          {phase.name}
                        </strong>
                        <p className="text-[10px] text-slate-500 leading-relaxed">
                          {phase.desc}
                        </p>
                        <span className="inline-block mt-1 bg-slate-950 border border-slate-850/60 px-2 py-0.5 rounded text-[9px] text-slate-400 font-bold font-outfit">
                          Dosis: {phase.sets}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* SUBSECCIÓN 2: RUTINAS DE FLEXIBILIDAD (VIDEOTECA COMPLETA) */}
          <div className="glass-panel p-6 rounded-2xl glow-emerald space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
              <div>
                <h3 className="font-bold text-sm text-slate-200 uppercase tracking-wider font-outfit">
                  Rutinas de Flexibilidad
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">Colección completa indexada para recuperación y flexibilidad</p>
              </div>

              {/* Filter Tabs for Categories */}
              <div className="flex flex-wrap gap-1.5 self-start sm:self-center shrink-0">
                {[
                  { id: 'all', label: 'Todos' },
                  { id: 'cat1', label: 'Compresión/Core' },
                  { id: 'cat2', label: 'Tren Sup' },
                  { id: 'cat3', label: 'Tren Inf' },
                  { id: 'cat4', label: 'Full Body' },
                  { id: 'cat5', label: 'Snacks' }
                ].map((btn) => (
                  <button
                    key={btn.id}
                    onClick={() => setVideoFilter(btn.id)}
                    className={`px-2.5 py-1 text-[9.5px] rounded-lg font-bold border transition-all ${videoFilter === btn.id ? 'bg-violet-600 border-violet-550 text-white' : 'bg-slate-950 border-slate-850 text-slate-400 hover:text-slate-200'}`}
                  >
                    {btn.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Video visual grid gallery */}
            <div className="space-y-6 max-h-[450px] overflow-y-auto pr-1">
              {videoCategories
                .filter(cat => videoFilter === 'all' || cat.id === videoFilter)
                .map((catBlock) => (
                  <div key={catBlock.id} className="space-y-3">
                    <div className="border-b border-slate-900 pb-1">
                      <h4 className="font-bold text-violet-400 text-xs tracking-wide uppercase font-outfit">{catBlock.categoryName}</h4>
                      <p className="text-[10px] text-slate-500 leading-normal mt-0.5">{catBlock.desc}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                      {catBlock.videos.map((vid, vIdx) => (
                        <div key={vIdx} className="p-3.5 bg-slate-950/60 rounded-xl border border-slate-900 flex flex-col justify-between gap-3 hover:border-slate-850 transition-colors">
                          <span className="text-xs font-semibold text-slate-300 leading-snug block">{vid.name}</span>
                          <div className="flex flex-wrap items-center gap-2 mt-auto">
                            <a
                              href={vid.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center justify-center gap-1.5 py-2 px-3 bg-slate-900 hover:bg-slate-850 rounded-lg text-[10px] font-bold text-violet-400 border border-slate-800 transition-colors shrink-0 font-outfit"
                            >
                              <span>
                                {vid.source === 'pinterest' ? 'Ver Pinterest' : vid.source === 'instagram' ? 'Ver Instagram' : 'Ver YouTube'}
                              </span>
                              <ExternalLink className="w-3.5 h-3.5 text-violet-400" />
                            </a>
                            <span className="inline-flex items-center gap-1.5 text-[9px] text-slate-400 font-bold bg-slate-900/60 px-2.5 py-1.5 rounded-lg border border-slate-850 shrink-0">
                              {vid.source === 'instagram' && <InstagramIcon className="w-3.5 h-3.5 text-fuchsia-400" />}
                              {vid.source === 'youtube' && <YoutubeIcon className="w-3.5 h-3.5 text-red-500" />}
                              {vid.source === 'pinterest' && <Clock className="w-3.5 h-3.5 text-violet-400" />}
                              <span>{vid.duration}</span>
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>

        {/* COLUMNA DERECHA: DESPERTAR FÍSICO & WIKI MANUAL */}
        <div className="space-y-6">

          {/* DESPERTAR FÍSICO: RUTINAS DE GOOD MORNING */}
          <div className="glass-panel p-6 rounded-2xl glow-indigo space-y-4">
            <div>
              <div className="flex items-center gap-2 text-amber-400 font-semibold text-xs tracking-wider uppercase font-outfit">
                <Sun className="w-4.5 h-4.5 text-amber-400" />
                <span>Despertar Físico</span>
              </div>
              <h3 className="text-base font-bold font-outfit text-white mt-1">Rutinas Diarias</h3>
              <p className="text-[10px] text-slate-505 mt-0.5">Ejecutar de forma dinámica apenas te levantas de la cama para activar articulaciones:</p>
            </div>

            <div className="space-y-3">
              <a
                href="https://www.youtube.com/watch?v=pgCGm6-q2G8"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between px-4 py-3.5 rounded-xl bg-violet-955/15 hover:bg-violet-600/20 border border-violet-850 hover:border-violet-500/40 text-xs font-bold text-slate-200 transition-all text-left group"
              >
                <span className="flex flex-col">
                  <span className="text-white group-hover:text-violet-350 transition-colors">Ver Rutina Good Morning 1</span>
                  <span className="text-[9.5px] text-slate-550 font-normal mt-0.5">Movimientos dinámicos en cama</span>
                </span>
                <ExternalLink className="w-4 h-4 text-violet-400 shrink-0" />
              </a>

              <a
                href="https://www.youtube.com/watch?v=XrhCzu1oufA"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between px-4 py-3.5 rounded-xl bg-violet-955/15 hover:bg-violet-600/20 border border-violet-850 hover:border-violet-500/40 text-xs font-bold text-slate-200 transition-all text-left group"
              >
                <span className="flex flex-col">
                  <span className="text-white group-hover:text-violet-350 transition-colors">Ver Rutina Good Morning 2</span>
                  <span className="text-[9.5px] text-slate-550 font-normal mt-0.5">Activación articular complementaria</span>
                </span>
                <ExternalLink className="w-4 h-4 text-violet-400 shrink-0" />
              </a>

              <a
                href="https://www.youtube.com/watch?v=75h76-gfXSM"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between px-4 py-3.5 rounded-xl bg-violet-955/15 hover:bg-violet-600/20 border border-violet-850 hover:border-violet-500/40 text-xs font-bold text-slate-200 transition-all text-left group"
              >
                <span className="flex flex-col">
                  <span className="text-white group-hover:text-violet-350 transition-colors">Ver Snack Movilidad Global</span>
                  <span className="text-[9.5px] text-slate-555 font-normal mt-0.5">Apto para realizar todos los días</span>
                </span>
                <ExternalLink className="w-4 h-4 text-violet-400 shrink-0" />
              </a>

              <a
                href="https://www.youtube.com/watch?v=LPnaVXUqG4A"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between px-4 py-3.5 rounded-xl bg-violet-955/15 hover:bg-violet-600/20 border border-violet-850 hover:border-violet-500/40 text-xs font-bold text-slate-200 transition-all text-left group"
              >
                <span className="flex flex-col">
                  <span className="text-white group-hover:text-violet-350 transition-colors">Ver Snack Elongación Pasiva</span>
                  <span className="text-[9.5px] text-slate-555 font-normal mt-0.5">Estiramiento general de silla</span>
                </span>
                <ExternalLink className="w-4 h-4 text-violet-400 shrink-0" />
              </a>
            </div>
          </div>

          {/* WIKI TRIGGER CARD */}
          <div className="glass-panel p-6 rounded-2xl glow-fuchsia space-y-4">
            <div>
              <div className="flex items-center gap-2 text-violet-400 font-semibold text-xs tracking-wider uppercase font-outfit">
                <BookOpen className="w-4.5 h-4.5" />
                <span>Biblioteca de Flexibilidad</span>
              </div>
              <h3 className="text-base font-bold font-outfit text-white mt-1">Wiki & Manual de Movilidad</h3>
              <p className="text-[11px] text-slate-400 leading-relaxed leading-normal">
                Encuentra detalles teóricos obligatorios, las explicaciones de la compresión abdominal, las metodologías de los \"Big 5\" y la colección completa indexada de videos de Diana.
              </p>
            </div>

            <button
              onClick={() => setIsWikiOpen(true)}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-violet-650/10 hover:bg-violet-600/20 border border-violet-550/20 hover:border-violet-550/40 text-xs font-bold text-white transition-all duration-300 font-outfit tracking-wider uppercase"
            >
              <span>Ingresar a la Wiki</span>
              <span className="text-violet-400">→</span>
            </button>
          </div>
        </div>
      </div>

      {/* ========================================== */}
      {/* PANEL LATERAL DE LA WIKI (OFF-CANVAS DRAWER) */}
      {/* ========================================== */}
      {isWikiOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">

          {/* BACKGROUND BLUR OVERLAY */}
          <div
            onClick={() => setIsWikiOpen(false)}
            className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm transition-opacity"
          />

          {/* DRAWER PANEL */}
          <div className="relative w-full max-w-2xl h-full bg-[#050b18] border-l border-slate-850 shadow-2xl flex flex-col z-10 transition-transform duration-300 transform translate-x-0">

            {/* Header Drawer */}
            <div className="p-6 border-b border-slate-900 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <BookOpen className="w-5.5 h-5.5 text-violet-400" />
                <div>
                  <h3 className="font-bold text-base text-white font-outfit uppercase tracking-wider">Subsección: Wiki</h3>
                  <span className="text-[10px] text-slate-500 block mt-0.5">Manual teórico de Fundamentos y Sistemas de Flexibilidad</span>
                </div>
              </div>
              <button
                onClick={() => setIsWikiOpen(false)}
                className="p-2 text-slate-400 hover:text-white bg-slate-900 rounded-xl transition-colors hover:bg-slate-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Inner Content scrollable */}
            <div className="flex-grow p-6 overflow-y-auto space-y-6">

              {/* TABS DE SUBSECCIONES REQUERIDAS */}
              <div className="flex bg-slate-950 p-1 rounded-xl border border-slate-900 w-full mb-2">
                <button
                  onClick={() => setExpandedWikiSection('wiki')}
                  className={`flex-1 text-center py-2.5 text-[11px] font-bold rounded-lg uppercase transition-all font-outfit ${expandedWikiSection === 'wiki' ? 'bg-violet-650 text-white' : 'text-slate-550 hover:text-slate-350'}`}
                >
                  Sub Sección Wiki
                </button>
                <button
                  onClick={() => setExpandedWikiSection('compression')}
                  className={`flex-1 text-center py-2.5 text-[11px] font-bold rounded-lg uppercase transition-all font-outfit ${expandedWikiSection === 'compression' ? 'bg-violet-650 text-white' : 'text-slate-550 hover:text-slate-350'}`}
                >
                  Sub Sección Compression
                </button>
                <button
                  onClick={() => setExpandedWikiSection('rutinas')}
                  className={`flex-1 text-center py-2.5 text-[11px] font-bold rounded-lg uppercase transition-all font-outfit ${expandedWikiSection === 'rutinas' ? 'bg-violet-650 text-white' : 'text-slate-550 hover:text-slate-350'}`}
                >
                  Sub Sección Rutinas Flexibilidad
                </button>
              </div>

              {/* RENDERIZADO CONDICIONAL DE SUBSECCIONES */}
              <div className="space-y-4">

                {/* A. SUB SECCIÓN WIKI: Fundamentos y diferencias clínicas, sistemas de flexibilidad */}
                {expandedWikiSection === 'wiki' && (
                  <div className="space-y-5">
                    <div className="p-4 bg-slate-950/60 border border-slate-850 rounded-xl space-y-4">
                      <div>
                        <h4 className="text-sm font-bold text-white font-outfit">Módulo 1: Fundamentos y Diferencias Clínicas</h4>
                        <p className="text-[11px] text-slate-505 mt-0.5">La regla rectora para categorizar tu entrenamiento físico</p>
                      </div>

                      <div className="space-y-3.5 text-[11px] text-slate-300">
                        <div className="p-3.5 rounded-lg border border-slate-900 bg-slate-950/80 space-y-1">
                          <span className="text-violet-400 font-bold block">1. Movilidad (Rango Activo)</span>
                          <p className="text-slate-400">Es la capacidad de tus articulaciones de moverse libremente y bajo tu propio control motor. No fatiga en exceso.</p>
                          <span className="text-[9.5px] text-slate-500 block pt-1 font-semibold">Cuándo: Estrictamente PRE-entrenamiento o a primera hora (5 a 15 min) | Frecuencia: Diaria.</span>
                        </div>

                        <div className="p-3.5 rounded-lg border border-slate-900 bg-slate-950/80 space-y-1">
                          <span className="text-emerald-400 font-bold block">2. Flexibilidad (Rango Pasivo)</span>
                          <p className="text-slate-400">Es la longitud máxima que pueden alcanzar tus tejidos cediendo a una fuerza externa (gravedad o peso). El sistema nervioso es quien limita este rango.</p>
                          <span className="text-[9.5px] text-slate-500 block pt-1 font-semibold">Cuándo: Estrictamente POST-entrenamiento o en descanso activo | Frecuencia: 1 a 3 veces por semana.</span>
                        </div>

                        <div className="p-3.5 rounded-lg border border-slate-900 bg-slate-950/80 space-y-1">
                          <span className="text-fuchsia-400 font-bold block">3. Compresión (Fuerza Específica)</span>
                          <p className="text-slate-400">Es la fuerza pura de tus flexores de cadera (Psoas ilíaco) y core para cerrar el ángulo entre el pecho y las piernas venciendo los isquios.</p>
                          <span className="text-[9.5px] text-slate-500 block pt-1 font-semibold">Cuándo: Al inicio (como activación suave) o al final (como fuerza de core) | Frecuencia: 2 a 3 veces por semana.</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 bg-slate-950/60 border border-slate-850 rounded-xl space-y-4">
                      <div>
                        <h4 className="text-sm font-bold text-white font-outfit">Módulo 4: Sistemas de Flexibilidad ("Los Big 5")</h4>
                        <p className="text-[11px] text-slate-505 mt-0.5">Principios científicos para engañar al sistema nervioso</p>
                      </div>

                      <div className="space-y-3 text-[11px] text-slate-350">
                        <div className="space-y-1">
                          <span className="text-slate-250 font-bold block">Principios Fisiológicos:</span>
                          <ul className="list-disc pl-4 space-y-2 text-slate-400">
                            <li><strong>Inhibición Recíproca:</strong> Si contraes el cuádriceps muy fuerte, el isquiotibial (antagonista) se relaja neurológicamente de forma obligada.</li>
                            <li><strong>FNP (Facilitación Neuromuscular Propioceptiva):</strong> Al llegar al punto de estiramiento, contraer el músculo estirado contra resistencia por 3 segundos, relajar y exhalar.</li>
                            <li><strong>Tasking:</strong> Fijar un objetivo motriz físico (como tocar un bloque con la frente) para desviar el enfoque mental del dolor a la resolución.</li>
                          </ul>
                        </div>

                        <div className="border-t border-slate-900 pt-3.5 space-y-2">
                          <span className="text-slate-200 font-bold block">Los 5 Reyes (Big 5):</span>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-[11px]">
                            <div className="p-2.5 bg-slate-950 border border-slate-900 rounded-lg">
                              <strong className="text-violet-400 block font-semibold">1. Pike</strong>
                              <p className="text-slate-400 text-[10px] mt-0.5">Pliegue frontal con piernas juntas (Isquios y zona lumbar).</p>
                            </div>
                            <div className="p-2.5 bg-slate-950 border border-slate-900 rounded-lg">
                              <strong className="text-violet-400 block font-semibold">2. Pancake</strong>
                              <p className="text-slate-400 text-[10px] mt-0.5">Pliegue frontal con piernas abiertas. Clave: rotación de la pelvis.</p>
                            </div>
                            <div className="p-2.5 bg-slate-950 border border-slate-900 rounded-lg">
                              <strong className="text-violet-400 block font-semibold">3. Front Split</strong>
                              <p className="text-slate-400 text-[10px] mt-0.5">Spagat frontal (apertura longitudinal de piernas).</p>
                            </div>
                            <div className="p-2.5 bg-slate-950 border border-slate-900 rounded-lg">
                              <strong className="text-violet-400 block font-semibold">4. Middle Split</strong>
                              <p className="text-slate-400 text-[10px] mt-0.5">Spagat lateral (apertura lateral completa).</p>
                            </div>
                            <div className="p-2.5 bg-slate-950 border border-slate-900 rounded-lg sm:col-span-2">
                              <strong className="text-violet-400 block font-semibold">5. Bridge (Puente)</strong>
                              <p className="text-slate-400 text-[10px] mt-0.5">Extensión torácica y apertura de flexores de cadera y hombro.</p>
                            </div>
                          </div>
                        </div>

                        <a
                          href="https://www.youtube.com/watch?v=_XPgMzk7mTA"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between p-3.5 bg-violet-955/15 border border-violet-900/35 rounded-xl text-xs font-bold text-violet-300 mt-2 hover:bg-violet-900/10 transition-colors"
                        >
                          <span>Ver Video de Referencia (Los Big 5 - Tom Merrick)</span>
                          <ExternalLink className="w-4 h-4 text-violet-400" />
                        </a>
                      </div>
                    </div>
                  </div>
                )}

                {/* B. SUB SECCIÓN COMPRESSION: El trabajo de compresión, Seated Leg Lifts, Jefferson Curl */}
                {expandedWikiSection === 'compression' && (
                  <div className="p-4 bg-slate-950/60 border border-slate-850 rounded-xl space-y-4 text-xs">
                    <div>
                      <h4 className="text-sm font-bold text-white font-outfit">Módulo 3: El Trabajo de Compresión (Fuerza Pura)</h4>
                      <p className="text-[11px] text-slate-505 mt-0.5">El puente entre la flexibilidad y la fuerza real</p>
                    </div>

                    <div className="space-y-4 text-[11px] text-slate-350 leading-relaxed">
                      <p>
                        La compresión entrena la capacidad del abdomen, transverso y flexores profundos de la cadera para cerrar el ángulo del cuerpo bajo tensión. Cuando se acalambra el cuádriceps al intentar levantar las piernas rectas, significa insuficiencia activa del psoas en su rango más corto.
                      </p>

                      <div className="bg-slate-950 p-4 rounded-xl border border-slate-900 space-y-3.5">
                        <strong className="text-violet-400 font-bold block uppercase tracking-wider text-[10px] font-outfit">Frecuencia y Dosificación:</strong>
                        <p className="text-slate-400">2 a 3 veces por semana (ej: Martes y Sábados al terminar el entrenamiento).</p>

                        <div className="space-y-3 pt-2 border-t border-slate-900">
                          <div>
                            <span className="text-slate-205 font-semibold block">Ejercicios Clave:</span>
                          </div>

                          <div className="p-3 rounded-lg border border-slate-850 bg-slate-950/60 space-y-1">
                            <span className="text-slate-200 font-bold block">Pike Compression / Seated Leg Lifts</span>
                            <p className="text-slate-450 text-[10px]">
                              Espalda recta contra la pared. Levantar las piernas rectas del suelo apoyando las yemas de los dedos.
                            </p>
                            <span className="text-[9.5px] text-slate-500 block mt-1">Dosis: Sostener 5-8 seg x 3 veces, luego 6-8 repeticiones dinámicas.</span>
                          </div>

                          <div className="p-3 rounded-lg border border-slate-850 bg-slate-950/60 space-y-1">
                            <span className="text-slate-200 font-bold block">Jefferson Curl</span>
                            <p className="text-slate-450 text-[10px]">
                              Trabajo excéntrico para estirar la cadena posterior mientras se fortalece la columna bajo carga externa.
                            </p>
                            <span className="text-[9.5px] text-slate-500 block mt-1">Dosis: Ejecutar de manera extremadamente lenta, bajando y subiendo vértebra a vértebra.</span>
                          </div>
                        </div>
                      </div>

                      <a
                        href="https://www.youtube.com/watch?v=G1_EoDs-G7E"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-3.5 bg-violet-955/15 border border-violet-900/35 rounded-xl text-xs font-bold text-violet-300 hover:bg-violet-900/10 transition-colors"
                      >
                        <span>Ver Video Tutorial: Jefferson Curl & Mecánica de Compresión</span>
                        <ExternalLink className="w-4 h-4 text-violet-400" />
                      </a>
                    </div>
                  </div>
                )}

                {/* C. SUB SECCIÓN RUTINAS FLEXIBILIDAD: Videoteca categorizada completa */}
                {expandedWikiSection === 'rutinas' && (
                  <div className="p-4 bg-slate-950/60 border border-slate-850 rounded-xl space-y-4">
                    <div>
                      <h4 className="text-sm font-bold text-white font-outfit">Módulo 5: Videoteca Categorizada Completa</h4>
                      <p className="text-[11px] text-slate-505 mt-0.5">Elige tu rutina en base al tiempo que dispongas y tu grupo muscular</p>
                    </div>

                    {/* Filter category tags */}
                    <div className="flex flex-wrap gap-1.5 border-b border-slate-900 pb-3">
                      {[
                        { id: 'all', label: 'Todos' },
                        { id: 'cat1', label: 'Compresión/Core' },
                        { id: 'cat2', label: 'Tren Sup' },
                        { id: 'cat3', label: 'Tren Inf' },
                        { id: 'cat4', label: 'Full Body' },
                        { id: 'cat5', label: 'Snacks' }
                      ].map((btn) => (
                        <button
                          key={btn.id}
                          onClick={() => setVideoFilter(btn.id)}
                          className={`px-2.5 py-1 text-[10px] rounded-lg font-semibold border transition-all ${videoFilter === btn.id ? 'bg-violet-600 border-violet-550 text-white' : 'bg-slate-950 border-slate-850 text-slate-400 hover:text-slate-205'}`}
                        >
                          {btn.label}
                        </button>
                      ))}
                    </div>

                    {/* Display categorized list */}
                    <div className="space-y-6 max-h-[380px] overflow-y-auto pr-1">
                      {videoCategories
                        .filter(cat => videoFilter === 'all' || cat.id === videoFilter)
                        .map((catBlock) => (
                          <div key={catBlock.id} className="space-y-3">
                            <div>
                              <h5 className="font-bold text-violet-400 text-xs tracking-wide">{catBlock.categoryName}</h5>
                              <p className="text-[10px] text-slate-500 leading-normal mt-0.5">{catBlock.desc}</p>
                            </div>
                            <div className="space-y-1.5">
                              {catBlock.videos.map((vid, vIdx) => (
                                <div key={vIdx} className="flex items-center justify-between p-2.5 bg-slate-950 border border-slate-900 text-[11px] hover:border-slate-800 transition-colors gap-3">
                                  <span className="text-slate-350 leading-tight">{vid.name}</span>
                                  <div className="flex items-center gap-2.5 shrink-0">
                                    <span className="inline-flex items-center gap-1 text-[9.5px] text-slate-450 font-semibold bg-slate-900/40 px-2 py-0.5 rounded border border-slate-850">
                                      {vid.source === 'instagram' && <InstagramIcon className="w-3 h-3 text-fuchsia-400" />}
                                      {vid.source === 'youtube' && <YoutubeIcon className="w-3 h-3 text-red-500" />}
                                      {vid.source === 'pinterest' && <Clock className="w-3 h-3 text-violet-400" />}
                                      <span>{vid.duration}</span>
                                    </span>
                                    <a
                                      href={vid.url}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="flex items-center gap-1 font-bold text-violet-400 hover:text-violet-300 text-[10px] uppercase"
                                    >
                                      <span>{vid.source === 'pinterest' ? 'Pinterest' : vid.source === 'instagram' ? 'Instagram' : 'Ver Video'}</span>
                                      <ExternalLink className="w-3.5 h-3.5" />
                                    </a>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                )}

              </div>

            </div>

            {/* Footer Drawer */}
            <div className="p-4 border-t border-slate-900 bg-slate-950 text-[10px] text-slate-550 flex items-center justify-between">
              <span>Ficha Técnica Diana - Movilidad</span>
              <span className="text-slate-500 font-semibold uppercase tracking-wider">Solo Lectura / Manual</span>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
