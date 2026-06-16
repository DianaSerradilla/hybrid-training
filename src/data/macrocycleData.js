// Structured data representing the training and nutrition macrocycle based exclusively on "Entrenamiento_Completo.pdf"

export const macrocycleWeeks = [
  {
    number: 1,
    mesocycle: 1,
    mesocycleName: "Rango Base de Hipertrofia (Neuromuscular y Mielinización)",
    focus: "Fase de adaptación. Las series de los ejercicios principales se trabajan en un rango de 8 a 10 repeticiones dejando un RIR 2. Las series de los accesorios se manejan a 12-14 repeticiones con RIR 2. Volumen moderado, lejos del fallo muscular. Mapeo del patrón motor.",
    rirGeneral: 2,
    rirAccessories: 2,
    intensityLabel: "Adaptación Base (RIR 2)",
    isDeload: false,
    isPeaking: false
  },
  {
    number: 2,
    mesocycle: 1,
    mesocycleName: "Rango Base de Hipertrofia (Neuromuscular y Mielinización)",
    focus: "Fase de intensificación. Mantienes el mismo rango de 8 a 10 repeticiones en los principales y 12-14 en accesorios, pero ajustas el peso para que todo el entrenamiento se ejecute a un RIR 1. Aumentamos el tonelaje y la palanca.",
    rirGeneral: 1,
    rirAccessories: 1,
    intensityLabel: "Intensificación (RIR 1)",
    isDeload: false,
    isPeaking: false
  },
  {
    number: 3,
    mesocycle: 1,
    mesocycleName: "Rango Base de Hipertrofia (Neuromuscular y Mielinización)",
    focus: "Clímax del bloque. Las series principales combinan esfuerzos de RIR 1 y RIR 0 (fallo) manteniéndose en las 8-10 repeticiones. El trabajo accesorio llega al RIR 0 absoluto. Utilización de metodologías en accesorios. Máximo estrés neurológico, mayor fatiga sistémica. Si la postura en barras colapsa, la serie termina.",
    rirGeneral: "1 - 0",
    rirAccessories: 0,
    intensityLabel: "Clímax Neural (RIR 1-0)",
    isDeload: false,
    isPeaking: false
  },
  {
    number: 4,
    mesocycle: 1,
    mesocycleName: "Rango Base de Hipertrofia (Neuromuscular y Mielinización)",
    focus: "Descarga y Resíntesis (Deload 1): Disipación de fatiga. Se cortan las series totales a la mitad, se reduce la carga un 20% en el gimnasio y se establece un RIR 3 general. Regresión de palancas en calistenia. El colágeno en tendones de codos y hombros comienza su remodelación estructural.",
    rirGeneral: 3,
    rirAccessories: 3,
    intensityLabel: "Descarga y Resíntesis (RIR 3, -20% peso)",
    isDeload: true,
    isPeaking: false
  },
  {
    number: 5,
    mesocycle: 2,
    mesocycleName: "Rango de Hipertrofia Pesada y Densidad Contráctil",
    focus: "Nueva adaptación pesada. Las repeticiones en los ejercicios principales bajan al bloque de 6 a 8 y el esfuerzo neurológico se reinicia a un RIR 2. Los ejercicios accesorios bajan al rango de 10 a 12 repeticiones, también a RIR 2. Introducción de Tiempos Bajo Tensión (TUT) prolongados e inducción de microdesgarros masivos.",
    rirGeneral: 2,
    rirAccessories: 2,
    intensityLabel: "Choque Excéntrico y Estiramiento (RIR 2)",
    isDeload: false,
    isPeaking: false
  },
  {
    number: 6,
    mesocycle: 2,
    mesocycleName: "Rango de Hipertrofia Pesada y Densidad Contráctil",
    focus: "Intensificación pesada. Las series principales (6 a 8 repeticiones) y los accesorios (10 a 12 repeticiones) se empujan a un RIR 1. Mecanotransducción profunda: explotar la rigidez de la titina como mecanosensor. Trabajo intenso en longitudes musculares largas (LML).",
    rirGeneral: 1,
    rirAccessories: 1,
    intensityLabel: "Mecanotransducción Profunda (RIR 1)",
    isDeload: false,
    isPeaking: false
  },
  {
    number: 7,
    mesocycle: 2,
    mesocycleName: "Rango de Hipertrofia Pesada y Densidad Contráctil",
    focus: "Clímax pesado. Tanto los movimientos principales como los accesorios alcanzan el RIR 0 de forma constante en sus respectivos rangos. Máximo daño tisular tolerable (Miotrauma). Fallo técnico en calistenia y fallo total (RIR 0) en gimnasio con Drop-Sets o Rest-Pause en accesorios.",
    rirGeneral: 0,
    rirAccessories: 0,
    intensityLabel: "Clímax Estructural (RIR 0)",
    isDeload: false,
    isPeaking: false
  },
  {
    number: 8,
    mesocycle: 2,
    mesocycleName: "Rango de Hipertrofia Pesada y Densidad Contráctil",
    focus: "Descarga 2: Idéntica a la Semana 4. Reducción de series a la mitad, reducción de tonelaje (20% menos) y RIR 3 para recuperar articulaciones y tendones antes de las cargas máximas. Mitigación del fenómeno de protección contra el estrés en los tendones.",
    rirGeneral: 3,
    rirAccessories: 3,
    intensityLabel: "Descarga y Supercompensación Tisular (RIR 3, -20% peso)",
    isDeload: true,
    isPeaking: false
  },
  {
    number: 9,
    mesocycle: 3,
    mesocycleName: "El Bloque de Fuerza Máxima",
    focus: "Adaptación a la Fuerza. Los ejercicios principales bajan drásticamente de repeticiones (4 a 6 repeticiones o Clusters) dejando un RIR 2. Acostumbras al sistema nervioso a mover cargas muy pesadas sin llegar al fallo. Accesorios en 8-10 repeticiones a RIR 1. Entrenamiento de la vía glucolítica anaeróbica.",
    rirGeneral: 2,
    rirAccessories: 1,
    intensityLabel: "Adaptación a la Densidad - Método Cluster (RIR 2/1)",
    isDeload: false,
    isPeaking: false
  },
  {
    number: 10,
    mesocycle: 3,
    mesocycleName: "El Bloque de Fuerza Máxima",
    focus: "Intensificación de Fuerza. En los principales te manejas en rangos de 5 repeticiones a RIR 1, y algunos de 6 a 8 repeticiones llegando al RIR 0. Los accesorios llegan al fallo (RIR 0) en el rango de 8-10 repeticiones. Expansión del umbral láctico y tolerancia a la hipoxia y alta acidez.",
    rirGeneral: 1,
    rirAccessories: 0,
    intensityLabel: "Expansión del Umbral Láctico - Clusters Intensos (RIR 1/0)",
    isDeload: false,
    isPeaking: false
  },
  {
    number: 11,
    mesocycle: 3,
    mesocycleName: "El Bloque de Fuerza Máxima",
    focus: "Clímax de Rendimiento Absoluto (Peaking). Llevas los ejercicios principales al RIR 0 en rangos de 3 a 5 repeticiones. Es la semana para probar tus récords personales (PR) en las máquinas pesadas o empujes. Modo AMRAP submáximo (hasta que la técnica falle o no puedas más). Exposición a la máxima demanda metabólica.",
    rirGeneral: 0,
    rirAccessories: 0,
    intensityLabel: "Clímax de Rendimiento Absoluto - PRs (RIR 0 / AMRAP)",
    isDeload: false,
    isPeaking: true
  },
  {
    number: 12,
    mesocycle: 3,
    mesocycleName: "El Bloque de Fuerza Máxima",
    focus: "Descarga Definitiva / Tapering: Después de llevar tu sistema nervioso central al límite absoluto, cortas el volumen a la mitad y bajas los pesos un 30% a RIR 3 o 4. Se erradica por completo la fatiga residual del trimestre. El sábado ejecutas el TEST OFICIAL (AMRAP).",
    rirGeneral: "3 - 4",
    rirAccessories: "3 - 4",
    intensityLabel: "Tapering y TEST OFICIAL (RIR 3-4, -30% peso)",
    isDeload: true,
    isPeaking: true
  }
];

export const weeklySchedule = [
  { day: "Lunes", label: "Fuerza Push (8:00 AM) / Cardio + HS (PM)", target: "Push" },
  { day: "Martes", label: "Cardio + HS (10:00 AM) / Pull (17:00 PM)", target: "Pull" },
  { day: "Miércoles", label: "Cardio (7:00 AM) / Legs Quads (18:00 PM)", target: "Legs1" },
  { day: "Jueves", label: "Cardio + HS (10:00 AM) / Tren Superior (17:00 PM)", target: "Upper" },
  { day: "Viernes", label: "Cardio + HS (7:00 AM) / Legs Isquios (18:00 PM)", target: "Legs2" },
  { day: "Sábado", label: "Brazos (9:00 AM) / Cardio (17:00 PM)", target: "Arms" },
  { day: "Domingo", label: "Cardio LISS + HS (9:00 AM)", target: "Recovery" }
];

export const routinesByWeek = {
  // We structure the routines dynamically based on whether it is in Mesocycle 1 (W1-4), Mesocycle 2 (W5-8), Mesocycle 3 Load (W9-11), or Tapering (W12)
  getWorkout: (weekNumber, dayName) => {
    const isMeso1 = weekNumber >= 1 && weekNumber <= 4;
    const isMeso2 = weekNumber >= 5 && weekNumber <= 8;
    const isMeso3 = weekNumber >= 9 && weekNumber <= 11;
    const isW12 = weekNumber === 12;

    const currentWeekObj = macrocycleWeeks.find(w => w.number === weekNumber);
    const rirVal = currentWeekObj?.rirGeneral ?? 2;
    const rirAccVal = currentWeekObj?.rirAccessories ?? 2;
    const isDeload = currentWeekObj?.isDeload ?? false;
    const isPeaking = currentWeekObj?.isPeaking ?? false;

    // Helper for generating standard workouts
    switch (dayName) {
      case "Lunes":
        if (isMeso1) {
          return {
            title: isDeload ? "Push - Descarga y Remodelación Tisular" : "Push - Enfoque Empujes",
            blocks: [
              {
                name: "Bloque 1: Calistenia (Fuerza Relativa y Condicionamiento Neural)",
                exercises: [
                  { name: "Flexiones en Pica (Pike Push-ups)", sets: isDeload ? "2" : "3", reps: isDeload ? "6" : weekNumber === 3 ? "Max (Obj 5+)" : weekNumber === 2 ? "4" : "3", rir: isDeload ? "3" : weekNumber === 3 ? "0" : weekNumber === 2 ? "1" : "2", note: "Tempo: 3 seg bajando, pausa 1 seg abajo. Elevación escapular máxima." },
                  { name: "Fondos en Paralelas (Dips)", sets: isDeload ? "2" : "3", reps: isDeload ? "6 (Asistidos)" : weekNumber === 3 ? "Max (Obj 6-8)" : weekNumber === 2 ? "4-5" : "3-4", rir: isDeload ? "3" : weekNumber === 3 ? "0" : weekNumber === 2 ? "1" : "2", note: "Depresión escapular inquebrantable." }
                ]
              },
              {
                name: "Bloque 2: Gimnasio (Hipertrofia Miofibrilar Pesada - Compuestos)",
                exercises: [
                  { name: "Press en Máquina Convergente de Palancas", sets: isDeload ? "1-2" : "3", reps: "8-10", rir: isDeload ? "3" : rirVal, note: "Empuje principal de pecho. Foco en tensión mecánica." },
                  { name: "Press Militar Libre (Mancuernas)", sets: isDeload ? "1-2" : "3", reps: "8-10", rir: isDeload ? "3" : rirVal, note: "Foco en estabilización para transferencia a calistenia." }
                ]
              },
              {
                name: "Bloque 3: Gimnasio (Hipertrofia Regional, Estrés Metabólico y Aislamiento)",
                exercises: [
                  { name: "Aperturas Pec-Dec", sets: isDeload ? "1-2" : "2-3", reps: "12-14", rir: isDeload ? "3" : rirAccVal, note: "Aducción pura. Contracción pico máxima." },
                  { name: "Elevaciones Laterales (Máquina o Mancuernas)", sets: isDeload ? "1-2" : "2-3", reps: "12-14", rir: isDeload ? "3" : rirAccVal, note: "Abducción del deltoides lateral." },
                  { name: "Pushdown Clásico (Barra recta o V)", sets: isDeload ? "1-2" : "2-3", reps: "12-14", rir: isDeload ? "3" : rirAccVal, note: "Tríceps: Codo abajo para cabezas lateral y medial." },
                  { name: "Extensión Unilateral Supina en Polea", sets: isDeload ? "1-2" : "2-3", reps: "12-14", rir: isDeload ? "3" : rirAccVal, note: "Tríceps: Palma hacia arriba. Innegociable para salud articular." }
                ],
                intensityTechnique: weekNumber === 3 ? "Rest-Pause o DropSet en la última serie" : null
              }
            ]
          };
        } else if (isMeso2) {
          return {
            title: isDeload ? "Push - Descarga y Supercompensación Tisular" : "Push - Choque Excéntrico y Estiramiento",
            blocks: [
              {
                name: "Bloque 1: Calistenia (Fuerza Relativa y Condicionamiento Neural)",
                exercises: [
                  { name: "Flexiones en Pica con Déficit (Manos elevadas en discos/libros)", sets: isDeload ? "2" : "3", reps: isDeload ? "6-8 (Suelo)" : weekNumber === 7 ? "Max (Obj 6-8+)" : weekNumber === 6 ? "5-7" : "4-6", rir: isDeload ? "3" : weekNumber === 7 ? "0" : weekNumber === 6 ? "1" : "2", note: "El déficit permite que la cabeza baje más, aumentando el estiramiento pasivo." },
                  { name: "Fondos en Paralelas con Parciales Alargadas (Dips LML)", sets: isDeload ? "2" : "3", reps: isDeload ? "8-10 (Bancos)" : weekNumber === 7 ? "Max (Obj 6-8)" : weekNumber === 6 ? "5-6" : "4-5", rir: isDeload ? "3" : weekNumber === 7 ? "0" : weekNumber === 6 ? "1" : "2", note: "Bajas al máximo estiramiento, subes solo a la mitad, vuelves a bajar al fondo y subes completo = 1 rep." }
                ]
              },
              {
                name: "Bloque 2: Gimnasio (Hipertrofia Miofibrilar Pesada - Compuestos)",
                exercises: [
                  { name: "Press en Máquina Convergente de Palancas", sets: isDeload ? "1-2" : "3", reps: "6-8", rir: isDeload ? "3" : rirVal, note: "Rango pesado. Foco en tensión mecánica brutal." },
                  { name: "Press Militar Libre (Mancuernas)", sets: isDeload ? "1-2" : "3", reps: "6-8", rir: isDeload ? "3" : rirVal, note: "Estabilización de hombros con cargas elevadas." }
                ]
              },
              {
                name: "Bloque 3: Gimnasio (Hipertrofia Regional, Estrés Metabólico y Aislamiento)",
                exercises: [
                  { name: "Aperturas Pec-Dec", sets: isDeload ? "1-2" : "2-3", reps: "10-12", rir: isDeload ? "3" : rirAccVal, note: "Aducción pura. Foco en sarcomerogénesis (estiramiento)." },
                  { name: "Elevaciones Laterales (Máquina o Mancuernas)", sets: isDeload ? "1-2" : "2-3", reps: "10-12", rir: isDeload ? "3" : rirAccVal, note: "Abducción del deltoides lateral." },
                  { name: "Pushdown Clásico (Barra recta o V)", sets: isDeload ? "1-2" : "2-3", reps: "10-12", rir: isDeload ? "3" : rirAccVal, note: "Extensiones clásicas para cabezas lateral y medial." },
                  { name: "Extensión Unilateral Supina en Polea", sets: isDeload ? "1-2" : "2-3", reps: "10-12", rir: isDeload ? "3" : rirAccVal, note: "Aislamiento y protección articular unilateral." }
                ],
                intensityTechnique: weekNumber === 7 ? "Drop Set o Rest-Pause en la serie final de 2-3 ejercicios del Bloque 3" : null
              }
            ]
          };
        } else if (isMeso3) {
          return {
            title: isW12 ? "Push - Descarga Activa" : "Push - Adaptación a la Densidad (Método Cluster)",
            blocks: [
              {
                name: "Bloque 1: Calistenia (Fuerza Relativa y Condicionamiento Neural)",
                exercises: [
                  { name: "Flexiones en Pica (Pike Push-ups)", sets: "3", reps: weekNumber === 11 ? "AMRAP (Obj total 12+ reps)" : weekNumber === 10 ? "Cluster (4 + 15s + 3)" : "Cluster (3 + 15s + 2)", rir: weekNumber === 11 ? "0 (Fallo Técnico)" : rirVal, note: "Descanso de 15s en la micro-pausa intra-serie." },
                  { name: "Fondos en Paralelas (Dips)", sets: "3", reps: weekNumber === 11 ? "AMRAP (Obj total 35+ reps)" : weekNumber === 10 ? "Cluster (6 + 15s + 4)" : "Cluster (5 + 15s + 3)", rir: weekNumber === 11 ? "0 (Fallo Técnico)" : rirVal, note: "Técnica de competición estricta." }
                ]
              },
              {
                name: "Bloque 2: Gimnasio (Hipertrofia Miofibrilar Pesada - Compuestos)",
                exercises: [
                  { name: "Press en Máquina Convergente de Palancas", sets: "3", reps: weekNumber === 11 ? "3-5" : weekNumber === 10 ? "5" : "4-6", rir: rirVal, note: "Fuerza máxima absoluta. Sin llegar al fallo en semanas de adaptación." },
                  { name: "Press Militar Libre (Mancuernas)", sets: "3", reps: weekNumber === 11 ? "3-5" : weekNumber === 10 ? "5" : "4-6", rir: rirVal, note: "Fuerza de empuje vertical y estabilización máxima." }
                ]
              },
              {
                name: "Bloque 3: Gimnasio (Hipertrofia Regional y Aislamiento)",
                exercises: [
                  { name: "Aperturas Pec-Dec", sets: "2-3", reps: weekNumber === 11 ? "8-10" : "8-10", rir: rirAccVal, note: "Aislamiento de fibras pectorales sin tríceps." },
                  { name: "Elevaciones Laterales (Máquina o Mancuernas)", sets: "2-3", reps: weekNumber === 11 ? "8-10" : "8-10", rir: rirAccVal, note: "Haz lateral del hombro." },
                  { name: "Pushdown Clásico (Barra recta o V)", sets: "2-3", reps: weekNumber === 11 ? "8-10" : "8-10", rir: rirAccVal, note: "Tríceps: Codo abajo." },
                  { name: "Extensión Unilateral Supina en Polea", sets: "2-3", reps: weekNumber === 11 ? "8-10" : "8-10", rir: rirAccVal, note: "Cierre de sesión. Salud del codo." }
                ]
              }
            ]
          };
        } else { // Week 12 Tapering
          return {
            title: "Push - Descarga Activa Total (-30% Peso)",
            blocks: [
              {
                name: "Bloque 1: Calistenia (Volumen al 50%)",
                exercises: [
                  { name: "Flexiones Inclinadas", sets: "2", reps: "8", rir: "3-4", note: "Descarga activa. Foco en la técnica pura." },
                  { name: "Fondos Asistidos", sets: "2", reps: "8", rir: "3-4", note: "Banda elástica o apoyo para disipar fatiga articular." }
                ]
              },
              {
                name: "Bloque 2: Gimnasio (Descarga -30% Carga)",
                exercises: [
                  { name: "Press en Máquina Convergente de Palancas", sets: "1-2", reps: "3-5", rir: "3-4", note: "Disminución del 30% del peso en crudo." },
                  { name: "Press Militar Libre (Mancuernas)", sets: "1-2", reps: "3-5", rir: "3-4", note: "Carga reducida para resíntesis neural." }
                ]
              },
              {
                name: "Bloque 3: Gimnasio (Aislamiento Ligero)",
                exercises: [
                  { name: "Aperturas Pec-Dec", sets: "1-2", reps: "8-10", rir: "3-4", note: "Estiramiento suave." },
                  { name: "Elevaciones Laterales", sets: "1-2", reps: "8-10", rir: "3-4", note: "Flujo sanguíneo sin carga." },
                  { name: "Pushdown Clásico", sets: "1-2", reps: "8-10", rir: "3-4", note: "Codos calientes, sin estrés." },
                  { name: "Extensión Unilateral Supina", sets: "1-2", reps: "8-10", rir: "3-4", note: "Regenerativo." }
                ]
              }
            ]
          };
        }

      case "Martes":
        if (isMeso1) {
          return {
            title: isDeload ? "Pull - Descarga y Remodelación Tisular" : "Pull - Enfoque Tracción",
            blocks: [
              {
                name: "Bloque 1: Calistenia (Fuerza Relativa y Condicionamiento Neural)",
                exercises: [
                  { name: "Dominadas Pronas Estrictas (Pull-ups)", sets: isDeload ? "3 (Australianas)" : "4", reps: isDeload ? "6-8" : weekNumber === 3 ? "Max (Obj 3-5)" : weekNumber === 2 ? "2-3" : "1-2", rir: isDeload ? "3" : weekNumber === 3 ? "0" : weekNumber === 2 ? "1" : "2", note: "Retracción escapular inicial para romper la inercia." },
                  { name: "Dominadas Negativas", sets: isDeload ? "0 (Eliminadas)" : "3", reps: weekNumber === 3 ? "5 (Excéntrico total)" : weekNumber === 2 ? "4" : "3", rir: weekNumber === 3 ? "0" : "2", note: "Salta, bloquea arriba y resiste la bajada en 4-5 segundos." }
                ]
              },
              {
                name: "Bloque 2: Gimnasio (Hipertrofia Miofibrilar Pesada - Compuestos)",
                exercises: [
                  { name: "Remo con Pecho Apoyado (Palancas o Barra T)", sets: isDeload ? "1-2" : "3", reps: "8-10", rir: isDeload ? "3" : rirVal, note: "Vector horizontal para densidad. Mantener codos a 45°-60°." },
                  { name: "Jalón al Pecho", sets: isDeload ? "1-2" : "3", reps: "8-10", rir: isDeload ? "3" : rirVal, note: "Vector vertical para amplitud del dorsal ancho." }
                ]
              },
              {
                name: "Bloque 3: Gimnasio (Hipertrofia Regional, Estrés Metabólico y Aislamiento)",
                exercises: [
                  { name: "Pullover en Polea o Máquina", sets: isDeload ? "1-2" : "2-3", reps: "12-14", rir: isDeload ? "3" : rirAccVal, note: "Aislamiento de dorsal. Rango completo de estiramiento." },
                  { name: "Facepull", sets: isDeload ? "1-2" : "2-3", reps: "12-14", rir: isDeload ? "3" : rirAccVal, note: "Higiene articular innegociable. Rota externamente el húmero." },
                  { name: "Curl Inclinado con Mancuernas", sets: isDeload ? "1-2" : "2-3", reps: "12-14", rir: isDeload ? "3" : rirAccVal, note: "Bíceps: Codo atrás del torso para cabeza larga." },
                  { name: "Curl Martillo", sets: isDeload ? "1-2" : "2-3", reps: "12-14", rir: isDeload ? "3" : rirAccVal, note: "Bíceps: Agarre neutro. Desarrolla braquial y supinador." }
                ],
                intensityTechnique: weekNumber === 3 ? "Rest-Pause o DropSet en la última serie" : null
              }
            ]
          };
        } else if (isMeso2) {
          return {
            title: isDeload ? "Pull - Descarga y Supercompensación Tisular" : "Pull - Choque Excéntrico y Estiramiento",
            blocks: [
              {
                name: "Bloque 1: Calistenia (Fuerza Relativa y Condicionamiento Neural)",
                exercises: [
                  { name: "Dominadas Pronas Estrictas (Pull-ups)", sets: isDeload ? "3 (Australianas)" : "4", reps: isDeload ? "8 (Altura cadera)" : weekNumber === 7 ? "Max (Obj 5-8)" : weekNumber === 6 ? "4-6" : "3-5", rir: isDeload ? "3" : weekNumber === 7 ? "0" : weekNumber === 6 ? "1" : "2", note: "Retracción escapular inicial estricta." },
                  { name: "Dominadas Excéntricas con Pausa Isométrica (90°)", sets: isDeload ? "0 (Eliminadas)" : "3", reps: weekNumber === 7 ? "Fallo Excéntrico" : weekNumber === 6 ? "4-5" : "3-4", rir: weekNumber === 7 ? "0" : "2", note: "Baja lento, congela 2 seg a mitad de recorrido (90°) sin rebotar, luego baja completo. Supera el 'Stress Shielding'." }
                ]
              },
              {
                name: "Bloque 2: Gimnasio (Hipertrofia Pesada - Compuestos)",
                exercises: [
                  { name: "Remo con Pecho Apoyado (Palancas o Barra T)", sets: isDeload ? "1-2" : "3", reps: "6-8", rir: isDeload ? "3" : rirVal, note: "Densidad de espalda alta. Codos separados 45°-60°." },
                  { name: "Jalón al Pecho", sets: isDeload ? "1-2" : "3", reps: "6-8", rir: isDeload ? "3" : rirVal, note: "Amplitud dorsal. Mantener el torso erguido." }
                ]
              },
              {
                name: "Bloque 3: Gimnasio (Hipertrofia Regional, Estrés Metabólico y Aislamiento)",
                exercises: [
                  { name: "Pullover en Polea o Máquina", sets: isDeload ? "1-2" : "2-3", reps: "10-12", rir: isDeload ? "3" : rirAccVal, note: "Aislamiento total del dorsal sin interferencia de bíceps." },
                  { name: "Facepull", sets: isDeload ? "1-2" : "2-3", reps: "10-12", rir: isDeload ? "3" : rirAccVal, note: "Salud articular. Fortalece el manguito rotador." },
                  { name: "Curl Inclinado con Mancuernas", sets: isDeload ? "1-2" : "2-3", reps: "10-12", rir: isDeload ? "3" : rirAccVal, note: "Máximo estiramiento de la cabeza larga." },
                  { name: "Curl Martillo", sets: isDeload ? "1-2" : "2-3", reps: "10-12", rir: isDeload ? "3" : rirAccVal, note: "Grosor del brazo. Agarre neutro." }
                ],
                intensityTechnique: weekNumber === 7 ? "Rest-Pause o DropSet en la última serie" : null
              }
            ]
          };
        } else if (isMeso3) {
          return {
            title: isW12 ? "Pull - Descarga Activa" : "Pull - Adaptación a la Densidad (Método Cluster)",
            blocks: [
              {
                name: "Bloque 1: Calistenia (Fuerza Relativa y Condicionamiento Neural)",
                exercises: [
                  { name: "Dominadas Pronas Estrictas (Pull-ups)", sets: "4", reps: weekNumber === 11 ? "AMRAP (Fallo técnico)" : weekNumber === 10 ? "Cluster (4 + 15s + 3)" : "Cluster (3 + 15s + 2)", rir: weekNumber === 11 ? "0" : rirVal, note: "Pausa de 15 segundos entre micro-series." },
                  { name: "Dominadas Supinas (Chin-ups)", sets: "3", reps: weekNumber === 11 ? "AMRAP" : weekNumber === 10 ? "Cluster (5 + 15s + 3)" : "Cluster (4 + 15s + 2)", rir: weekNumber === 11 ? "0" : rirVal, note: "Retracción controlada y estiramiento máximo." }
                ]
              },
              {
                name: "Bloque 2: Gimnasio (Hipertrofia Miofibrilar - Compuestos)",
                exercises: [
                  { name: "Remo con Pecho Apoyado (Palancas o Barra T)", sets: "3", reps: weekNumber === 11 ? "3-5" : weekNumber === 10 ? "5" : "4-6", rir: rirVal, note: "Remo pesado con soporte. Sin tracción lumbar." },
                  { name: "Jalón al Pecho", sets: "3", reps: weekNumber === 11 ? "3-5" : weekNumber === 10 ? "5" : "4-6", rir: rirVal, note: "Jalón con agarre neutro amplio." }
                ]
              },
              {
                name: "Bloque 3: Gimnasio (Hipertrofia Regional y Aislamiento)",
                exercises: [
                  { name: "Pullover en Polea o Máquina", sets: "2-3", reps: "8-10", rir: rirAccVal, note: "Aislamiento de dorsal." },
                  { name: "Facepull", sets: "2-3", reps: "8-10", rir: rirAccVal, note: "Higiene y estabilidad escapular." },
                  { name: "Curl Inclinado con Mancuernas", sets: "2-3", reps: "8-10", rir: rirAccVal, note: "Cabeza larga de bíceps." },
                  { name: "Curl Martillo", sets: "2-3", reps: "8-10", rir: rirAccVal, note: "Grosor lateral del bíceps/antebrazo." }
                ]
              }
            ]
          };
        } else { // Week 12
          return {
            title: "Pull - Descarga Activa Total (-30% Peso)",
            blocks: [
              {
                name: "Bloque 1: Calistenia (Volumen al 50%)",
                exercises: [
                  { name: "Dominadas Australianas", sets: "3", reps: "8", rir: "3-4", note: "Cero dominadas colgadas para sanar tendón flexor." }
                ]
              },
              {
                name: "Bloque 2: Gimnasio (Descarga -30% Carga)",
                exercises: [
                  { name: "Remo con Pecho Apoyado", sets: "1-2", reps: "3-5", rir: "3-4", note: "Peso reducido un 30%." },
                  { name: "Jalón al Pecho", sets: "1-2", reps: "3-5", rir: "3-4", note: "Enfoque en tracción suave." }
                ]
              },
              {
                name: "Bloque 3: Gimnasio (Aislamiento Ligero)",
                exercises: [
                  { name: "Pullover en Polea", sets: "1-2", reps: "8-10", rir: "3-4", note: "Movimiento fluido." },
                  { name: "Facepull", sets: "1-2", reps: "8-10", rir: "3-4", note: "Salud articular del hombro." },
                  { name: "Curl Inclinado con Mancuernas", sets: "1-2", reps: "8-10", rir: "3-4", note: "Estiramiento regenerativo del bíceps." },
                  { name: "Curl Martillo", sets: "1-2", reps: "8-10", rir: "3-4", note: "Agarre neutro ligero." }
                ]
              }
            ]
          };
        }

      case "Miércoles":
        return {
          title: isDeload ? "Legs 1 - Descarga Quads" : "Legs 1 - Foco Quads con Pre-Fatiga",
          blocks: [
            {
              name: "Bloque 1: Calistenia (Fuerza Relativa)",
              exercises: [
                { name: "Descanso / Sin estímulo neural en barras", sets: "0", reps: "0", rir: "0", note: "El SNC se reserva para el empuje bilateral pesado en prensa." }
              ]
            },
            {
              name: "Bloque 3 (Inicial): Gimnasio (Aislamiento / Pre-Fatiga)",
              exercises: [
                { name: "Sillón de Cuádriceps (Extensiones)", sets: isDeload ? "1-2" : "2-3", reps: isMeso2 ? "10-12" : "12-14", rir: isDeload ? "3" : rirAccVal, note: "Aísla el recto femoral y bombea sangre a la rodilla." },
                { name: "Curl Nórdico (Negativas)", sets: isDeload ? "2 (Asistidas)" : "3", reps: isDeload ? "3" : isMeso2 ? "4-6" : "3-5", rir: isDeload ? "3" : weekNumber === 7 ? "0 (Fallo Técnico)" : rirAccVal, note: "Excéntricas de 4-5 seg. Único isquio del día. Fuerza extrema." }
              ]
            },
            {
              name: "Bloque 2: Gimnasio (Hipertrofia Miofibrilar - Compuestos)",
              exercises: [
                { name: "Prensa Inclinada", sets: isDeload ? "1-2" : "3", reps: isMeso3 ? "4-6" : isMeso2 ? "6-8" : "8-10", rir: isDeload ? "3" : rirVal, note: "Empuje bilateral para vastos. Usando menos carga por la pre-fatiga." },
                { name: "Sentadilla Búlgara con Mancuernas", sets: isDeload ? "1-2" : "3", reps: isMeso3 ? "4-6" : isMeso2 ? "6-8" : "8-10", rir: isDeload ? "3" : rirVal, note: "Patrón unilateral. Torso erguido, rodilla pasando la punta del pie." }
              ]
            },
            {
              name: "Bloque 3 (Continuación): Gimnasio (Hipertrofia Regional y Core)",
              exercises: [
                { name: "SUPERSET: Máquina Abductora + Máquina Aductora", sets: isDeload ? "1-2" : "2-3", reps: isMeso2 ? "10-12" : "12-14", rir: isDeload ? "3" : rirAccVal, note: "Trabajo antagonista para glúteo medio y cara interna del muslo." },
                { name: "Elevaciones de Talón de Pie", sets: isDeload ? "1-2" : "2-3", reps: isMeso2 ? "10-12" : "12-14", rir: isDeload ? "3" : rirAccVal, note: "Gastrocnemio con rodilla bloqueada (recta)." },
                { name: "Crunches Pesados en Polea/Máquina", sets: isDeload ? "1-2" : "2-3", reps: isMeso2 ? "10-12" : "12-14", rir: isDeload ? "3" : rirAccVal, note: "Core: Flexión espinal pura contra resistencia." }
              ],
              intensityTechnique: weekNumber === 3 || weekNumber === 7 ? "Sillón de Cuádriceps ideal para Drop Set en la serie final" : null
            }
          ]
        };

      case "Jueves":
        if (isDeload && isW12) {
          return {
            title: "Tren Superior - Descarga Activa Total (-30% Peso)",
            blocks: [
              {
                name: "Bloque 1: Calistenia (Volumen al 50%)",
                exercises: [
                  { name: "Colgado Activo (Retracción escapular)", sets: "3", reps: "20 seg", rir: "3-4", note: "Descompresión espinal." },
                  { name: "Plancha Abdominal", sets: "2", reps: "30 seg", rir: "3-4", note: "Estabilidad del core sin carga." }
                ]
              },
              {
                name: "Bloque 2: Gimnasio (Descarga -30% Carga)",
                exercises: [
                  { name: "Press Inclinado (Mancuernas)", sets: "1-2", reps: "3-5", rir: "3-4", note: "Fuerza clavicular suave." },
                  { name: "Remo Bajo Convergente ", sets: "1-2", reps: "3-5", rir: "3-4", note: "Tracción horizontal ligera." }
                ]
              },
              {
                name: "Bloque 3: Gimnasio (Aislamiento)",
                exercises: [
                  { name: "Vuelo Invertido Pec Dec", sets: "1-2", reps: "8-10", rir: "3-4", note: "Hombro posterior." },
                  { name: "Elevaciones Laterales", sets: "1-2", reps: "8-10", rir: "3-4", note: "Deltoides lateral." },
                  { name: "Extensiones Tras Nuca", sets: "1-2", reps: "8-10", rir: "3-4", note: "Tríceps cabeza larga." },
                  { name: "Curl Scott", sets: "1-2", reps: "8-10", rir: "3-4", note: "Bíceps cabeza corta." }
                ]
              }
            ]
          };
        }
        return {
          title: isDeload ? "Tren Superior - Descarga Híbrida" : "Tren Superior - Híbrido",
          blocks: [
            {
              name: "Bloque 1: Calistenia (Fuerza Relativa)",
              exercises: [
                { name: "Flexiones Estándar (Push-ups)", sets: isDeload ? "2" : "3", reps: isDeload ? "6-8" : weekNumber === 11 ? "AMRAP" : weekNumber === 10 ? "Cluster (10 + 15s + 5)" : weekNumber === 9 ? "Cluster (8 + 15s + 4)" : weekNumber === 7 ? "Max (Obj 10-12)" : weekNumber === 6 ? "8-10" : weekNumber === 5 ? "6-8 (Declinadas)" : weekNumber === 3 ? "Max (Obj 8-10)" : weekNumber === 2 ? "6-8" : "5-6", rir: isDeload ? "3" : weekNumber === 11 || weekNumber === 7 || weekNumber === 3 ? "0" : rirVal, note: "Protracción escapular al extender los codos." },
                { name: "Dominadas Supinas (Chin-ups)", sets: isDeload ? "2 (Australianas)" : "3", reps: isDeload ? "6-8" : weekNumber === 11 ? "Isométrica (Max tiempo)" : weekNumber === 10 ? "Max (Obj 15+)" : weekNumber === 9 ? "10-12" : weekNumber === 7 ? "Max" : weekNumber === 6 ? "5-7" : weekNumber === 5 ? "4-6 (LML Mitad Inferior)" : weekNumber === 3 ? "Max (Obj 4-6)" : weekNumber === 2 ? "3-4" : "2-3", rir: isDeload ? "3" : weekNumber === 11 || weekNumber === 7 || weekNumber === 3 ? "0" : rirVal, note: "Bíceps asisten en tracción vertical." }
              ]
            },
            {
              name: "Bloque 2: Gimnasio (Hipertrofia Miofibrilar - Compuestos)",
              exercises: [
                { name: "Press Inclinado (Mancuernas)", sets: isDeload ? "1-2" : "3", reps: isMeso3 ? "4-6" : isMeso2 ? "6-8" : "8-10", rir: isDeload ? "3" : rirVal, note: "Foco en porción clavicular del pectoral." },
                { name: "Remo Bajo Convergente  en Polea Baja", sets: isDeload ? "1-2" : "3", reps: isMeso3 ? "4-6" : isMeso2 ? "6-8" : "8-10", rir: isDeload ? "3" : rirVal, note: "Densidad con vector horizontal. Tirar al esternón, codos a 45°-60°." }
              ]
            },
            {
              name: "Bloque 3: Gimnasio (Hipertrofia Regional y Aislamiento)",
              exercises: [
                { name: "Vuelo Invertido Pec Dec", sets: isDeload ? "1-2" : "2-3", reps: isMeso2 ? "10-12" : "12-14", rir: isDeload ? "3" : rirAccVal, note: "Haz posterior del deltoides. Efecto visual 3D." },
                { name: "Elevaciones Laterales (Máquina o Mancuernas)", sets: isDeload ? "1-2" : "2-3", reps: isMeso2 ? "10-12" : "12-14", rir: isDeload ? "3" : rirAccVal, note: "Haz lateral del deltoides." },
                { name: "Extensiones Tras Nuca (Mancuerna)", sets: isDeload ? "1-2" : "2-3", reps: isMeso2 ? "10-12" : "12-14", rir: isDeload ? "3" : rirAccVal, note: "Tríceps: Codo arriba para máximo estiramiento de cabeza larga." },
                { name: "Curl Scott o Predicador", sets: isDeload ? "1-2" : "2-3", reps: isMeso2 ? "10-12" : "12-14", rir: isDeload ? "3" : rirAccVal, note: "Bíceps: Codo adelante del torso para cabeza corta." }
              ],
              intensityTechnique: weekNumber === 3 || weekNumber === 7 ? "Curl Scott ideal para Rest-Pause o Drop Set" : null
            }
          ]
        };

      case "Viernes":
        return {
          title: isDeload ? "Legs 2 - Descarga Isquios" : "Legs 2 - Foco Isquiosurales con Pre-Fatiga",
          blocks: [
            {
              name: "Bloque 1: Calistenia (Fuerza Relativa)",
              exercises: [
                { name: isDeload ? "Descanso Absoluto (Tapering)" : "Descanso / Sin estímulo neural en barras", sets: "0", reps: "0", rir: "0", note: "El SNC se preserva para el peso muerto rumano (RDL)." }
              ]
            },
            {
              name: "Bloque 3 (Inicial): Gimnasio (Aislamiento / Pre-Fatiga)",
              exercises: [
                { name: "Curl Femoral (Sentado o Tumbado)", sets: isDeload ? "1-2" : "2-3", reps: "12-14", rir: isDeload ? "3" : rirAccVal, note: "Flexión de rodilla para aislar cabeza corta de los isquios." },
                { name: "Pistol Squat (Asistida con anillas/TRX)", sets: isDeload ? "2" : "2-3", reps: isDeload ? "5 (Asistida fácil)" : "5-6", rir: isDeload ? "3" : rirAccVal, note: "Único quad del día. Fuerza unilateral." }
              ]
            },
            {
              name: "Bloque 2: Gimnasio (Hipertrofia Miofibrilar - Compuestos)",
              exercises: [
                { name: "Peso Muerto Rumano (RDL)", sets: isDeload ? "1-2" : "3", reps: isMeso3 ? "4-6" : isMeso2 ? "6-8" : "8-10", rir: isDeload ? "3" : rirVal, note: "Bisagra de cadera. Al estar pre-fatigada, requieres menos peso externo, blindando tus lumbares." },
                { name: "Hip Thrust o Glute Bridge", sets: isDeload ? "1-2" : "3", reps: isMeso3 ? "4-6" : isMeso2 ? "6-8" : "8-10", rir: isDeload ? "3" : rirVal, note: "Empuje horizontal para glúteos. Acortamiento máximo." }
              ]
            },
            {
              name: "Bloque 3 (Continuación): Gimnasio (Hipertrofia Regional y Core)",
              exercises: [
                { name: "SUPERSET: Máquina Abductora + Máquina Aductora", sets: isDeload ? "1-2" : "2-3", reps: isMeso2 ? "10-12" : "12-14", rir: isDeload ? "3" : rirAccVal, note: "Estabilidad pélvica general." },
                { name: "Elevaciones de Talón Sentado", sets: isDeload ? "1-2" : "2-3", reps: isMeso2 ? "10-12" : "12-14", rir: isDeload ? "3" : rirAccVal, note: "Sóleo con rodilla flexionada." },
                { name: "Rueda Abdominal (Ab-wheel)", sets: isDeload ? "1-2" : "2-3", reps: isMeso2 ? "10-12" : "12-14", rir: isDeload ? "3" : rirAccVal, note: "Core: Anti-extensión de columna. Evitar cizallamiento." }
              ],
              intensityTechnique: weekNumber === 3 || weekNumber === 7 ? "Curl Femoral ideal para Rest-Pause o Drop Set" : null
            }
          ]
        };

      case "Sábado":
        if (isW12) {
          return {
            title: "SÁBADO: EL EXAMEN (TEST AMRAP)",
            blocks: [
              {
                name: "Evaluación Final de Calistenia (Día Exclusivo)",
                exercises: [
                  { name: "TEST 1: Dominadas Pronas Estrictas", sets: "1", reps: "Max (Objetivo final del Macrociclo: 15)", rir: "0 (Fallo)", note: "Técnica de competición. Barbilla pasa la barra." },
                  { name: "TEST 2: Fondos en Paralelas", sets: "1", reps: "Max (Objetivo final del Macrociclo: 20)", rir: "0 (Fallo)", note: "Bloqueo completo de codos abajo." },
                  { name: "TEST 3: Flexiones Estándar", sets: "1", reps: "Max (Objetivo final del Macrociclo: 20)", rir: "0 (Fallo)", note: "Mantener retroversión pélvica estricta." },
                  { name: "TEST 4: Flexiones en Pica", sets: "1", reps: "Max (Objetivo final del Macrociclo: 5)", rir: "0 (Fallo)", note: "Control de hombro y empuje vertical." }
                ],
                customWarning: "Día exclusivo de evaluación. Sin trabajo de gimnasio. Descansos obligatorios de 5 minutos entre ejercicios."
              }
            ]
          };
        }
        return {
          title: isDeload ? "Brazos - Descarga" : "Brazos y Palanca de Core",
          blocks: [
            {
              name: "Bloque 1: Calistenia (Fuerza Relativa y Core)",
              exercises: [
                { name: "Hollow Body Hold (Suelo)", sets: isDeload ? "2" : "3", reps: isDeload ? "30 seg (Plancha trad.)" : weekNumber === 11 ? "Al fallo técnico" : weekNumber === 10 ? "60 seg" : weekNumber === 9 ? "45 seg" : weekNumber === 7 ? "Al fallo técnico" : weekNumber === 6 ? "30-40 seg (Lastrado)" : weekNumber === 5 ? "20-30 seg (Lastrado)" : weekNumber === 2 ? "10-12 reps (Hollow Rocks)" : "20-30 seg", rir: isDeload ? "3" : "0", note: "Retroversión pélvica absoluta. Zona lumbar aplastando el suelo." },
                { name: isDeload ? "Postura del Insecto Muerto (Dead bug)" : "Tuck Dragon Fly (Negativas)", sets: isDeload ? "2" : "3", reps: isDeload ? "10-12 por lado" : weekNumber === 11 ? "2-3 (Dragon Fly excéntrico completo)" : weekNumber === 10 ? "3 por pierna (Dinámico 1 pierna)" : weekNumber === 9 ? "3 (Dragon Fly)" : weekNumber === 7 ? "2-3 por pierna (Dinámico)" : weekNumber === 6 ? "3-4 (Negativas lentas)" : weekNumber === 5 ? "3-5 (Dinámico)" : weekNumber === 2 ? "3-4 (Advanced Tuck)" : "3-4", rir: isDeload ? "3" : "0", note: isDeload ? "Alineación lumbar sin palanca." : "Rodillas al pecho, elevas cadera y bajas controlando en 4 seg." }
              ]
            },
            {
              name: "Bloque 2 y 3: Gimnasio (Aislamiento de Brazos y Corrección)",
              exercises: [
                { name: "Press Francés Tumbado", sets: "2", reps: isMeso2 ? "10-12" : "12-14", rir: isDeload ? "3" : rirAccVal, note: "Tríceps: Codo arriba." },
                { name: "Pushdown Clásico", sets: "2", reps: isMeso2 ? "10-12" : "12-14", rir: isDeload ? "3" : rirAccVal, note: "Tríceps: Codo abajo." },
                { name: "Extensión Unilateral Supina", sets: "2", reps: isMeso2 ? "10-12" : "12-14", rir: isDeload ? "3" : rirAccVal, note: "Tríceps: Fijo." },
                { name: "Curl Inclinado con Mancuernas", sets: "2", reps: isMeso2 ? "10-12" : "12-14", rir: isDeload ? "3" : rirAccVal, note: "Bíceps: Estiramiento." },
                { name: "Curl Predicador", sets: "2", reps: isMeso2 ? "10-12" : "12-14", rir: isDeload ? "3" : rirAccVal, note: "Bíceps: Contracción pico." },
                { name: "Curl Martillo", sets: "2", reps: isMeso2 ? "10-12" : "12-14", rir: isDeload ? "3" : rirAccVal, note: "Bíceps: Neutro." },
                { name: "Facepull", sets: isDeload ? "1" : "2", reps: isMeso2 ? "10-12" : "12-14", rir: isDeload ? "3" : rirAccVal, note: "Higiene articular semanal doble." }
              ]
            }
          ]
        };

      case "Domingo":
      default:
        return {
          title: "Descanso Activo / Cardio LISS + HS",
          blocks: [
            {
              name: "Cardio y Habilidades de Calistenia (Recuperación Activa)",
              exercises: [
                { name: "Cardio LISS (Caminadora)", sets: "1", reps: "30 min", rir: "0", note: "Mantiene el NEAT sumando 3k a 4k pasos sin impacto articular." },
                { name: "Práctica de Verticales / Ranita", sets: "1", reps: "20-30 min", rir: "0", note: "Lubricación de muñecas y alineación de hombros." }
              ]
            }
          ]
        };
    }
  }
};

export const nutritionData = {
  kcalTarget: 1700,
  proteinMass: "29,925 kg",
  weightLossRate: "0.5 kg por semana",
  colacionesMicroCaloricas: [
    { name: "1 huevo duro", desc: "Pura proteína y grasas saciantes", calories: "~70 kcal" },
    { name: "Medio scoop de proteína en polvo con agua", desc: "Frena el catabolismo y calma la ansiedad por lo dulce", calories: "~60 kcal" },
    { name: "Vegetales de volumen", desc: "Medio choclo hervido, un puñado de tomates cherry o bastones de zanahoria cruda. Mucha masticación, mínimo impacto.", calories: "~30 - 50 kcal" },
    { name: "1 manzana verde", desc: "Aporta fibra dura que retrasa el vaciado gástrico", calories: "~80 kcal" },
    { name: "1 infusión caliente (Té, café, matcha, mate)", desc: "Consumida sola o con un chorrito mínimo de leche proteica. Llena el estómago.", calories: "0 - 15 kcal" },
    { name: "2 galletas Cachafaz", desc: "Te dan el factor dulce y crujiente exacto para mantener la energía mental frente a la pantalla. Es tu límite de carbohidratos rápidos controlado a la perfección.", calories: "133 kcal" },
    { name: "1 porción de gelatina light", desc: "Volumen puro a costo cero. Llena el estómago y engaña al cerebro con textura dulce sin generar ningún tipo de impacto calórico.", calories: "0 - 10 kcal" },
    { name: "1 bocadito helado de yogur, proteína y frutos rojos", desc: "Tu salvavidas táctico congelado. Una micro-dosis de aminoácidos con textura de postre para matar la ansiedad al instante.", calories: "18 kcal" }
  ],
  preWorkoutSnacks: [
    { name: "Dátiles", desc: "Consumir 2 o 3 dátiles. Son pura glucosa natural de absorción rapidísima." },
    { name: "Galleta de Arroz con Miel", desc: "1 o 2 galletas de arroz con una capa muy fina de miel o mermelada." },
    { name: "Cafeína Anhidra en Cápsulas", desc: "Una cápsula de 200mg consumida entre 45 y 60 minutos antes de la actividad. Potencia el rendimiento, alivia la fatiga y disminuye la percepción del esfuerzo.", calories: "0 calorías" }
  ],
  bloque1: {
    title: "Bloque 1: Desayunos y Meriendas",
    options: [
      {
        id: "electrica",
        name: "Opción 1 (Eléctrica)",
        ingredients: [
          "1 rebanada (25g a 30g) de pan integral o artesano (o 2 galletas de arroz).",
          "1 huevo entero.",
          "150cc de leche proteica en tu café o té.",
          "1 cucharada de queso untable (solo para sabor).",
          "1 puñado de nueces (30g)."
        ],
        macros: "Calorías: ~390 kcal | Proteínas: 21g | Carbohidratos: 24g | Grasas: 25g",
        extraNote: "Si tomas té o café solo, mantén los agregados extra de proteína: 1 huevo extra, 2 claras, 30g queso, 2 fetas jamón, 2 cdas ricota o ½ scoop de proteína."
      },
      {
        id: "anabolica",
        name: "Opción 2 (Anabólica)",
        ingredients: [
          "30g del mix de pancakes Granger preparados.",
          "150cc de leche proteica en tu infusión.",
          "1 taza de frutos rojos y 1 cucharadita de miel (solo 1, estricta).",
          "1/2 puñado de nueces (15g)."
        ],
        macros: "Calorías: ~400 kcal | Proteínas: 20g | Carbohidratos: 47g | Grasas: 16g"
      },
      {
        id: "rapida",
        name: "Opción 3 (Rápida)",
        ingredients: [
          "1 pote de yogur natural entero (150cc a 180cc).",
          "1/2 scoop de proteína en polvo.",
          "2 cucharadas soperas de quinoa pop.",
          "1 manzana y 1 cucharadita de miel.",
          "15g de nueces o 1/2 cucharada (10g) de pasta de maní."
        ],
        macros: "Calorías: ~390 kcal | Proteínas: 19g | Carbohidratos: 47g | Grasas: 15g"
      },
      {
        id: "casera",
        name: "Opción 4 (Pancackes Proteicos Casero)",
        ingredients: [
          "50gr de Yogurt  griego",
          "1 huevo entero.",
          "1/2 scoop de proteína en polvo (15gr)",
          "Esencia de Vainilla",
          "Polvo para hornear",
          "1 manzana verde y 1 cucharadita de miel.",
          "1/2 puñado de nueces (15g)."
        ],
        macros: "Calorías: ~385 kcal | Proteínas: 20g | Carbohidratos: 43g | Grasas: 15g"
      }
      ,
      {
        id: "rápida",
        name: "Opción 5",
        ingredients: [
          "1 Scoop Proteina XTRENGHT",
          "200ml leche protéica",
          "2 galletas Cachafaz",
        ],
        macros: "Calorías: ~345 kcal | Proteínas: 38g | Carbohidratos: 30g | Grasas: 8g"
      }
      ,
      {
        id: "rápida",
        name: "Opción 5",
        ingredients: [
          "1 Scoop NutreMax",
          "2 huevos enteros",
        ],
        macros: "Calorías: ~360 kcal | Proteínas: 24g | Carbohidratos: 43g | Grasas: 10g"
      }
    ]
  },
  bloque2: {
    title: "Bloque 2: Comidas Carbo-Proteicas (Almuerzos o Cenas de Carga)",
    rule: "Siempre incluir después del entrenamiento intenso",
    options: [
      {
        id: "clasica",
        name: "Opción 1 (Clásica)",
        ingredients: [
          "180g de suprema de pollo pesada en crudo.",
          "1 unidad chica de papa o camote (batata) hervido o al horno.",
          "1/2 palta chica.",
          "Porción libre de lechuga y tomate."
        ],
        macros: "Calorías: ~435 kcal | Proteínas: 47g | Carbohidratos: 40g | Grasas: 9g"
      },
      {
        id: "limpia",
        name: "Opción 2 (Densidad Limpia)",
        ingredients: [
          "180g de bife magro pesado en crudo (trae grasa intramuscular).",
          "1 unidad chica de papa o camote.",
          "1/4 de palta chica o 1/2 cucharada sopera (7.5cc) de aceite de oliva.",
          "Porción libre de ensalada verde."
        ],
        macros: "Calorías: ~475 kcal | Proteínas: 42g | Carbohidratos: 40g | Grasas: 16g"
      },
      {
        id: "pescado",
        name: "Opción 3 (Pescado/Lípido)",
        ingredients: [
          "1 lata de atún al natural y 1 huevo duro.",
          "30g en crudo (o 4 cucharadas soperas cocidas) de arroz integral.",
          "1 cucharada sopera (15cc) de aceite de oliva en crudo.",
          "Porción libre de tomate y pepino."
        ],
        macros: "Calorías: ~475 kcal | Proteínas: 36g | Carbohidratos: 33g | Grasas: 22g"
      },
      {
        id: "pizza",
        name: "Opción 4 (Pizza)",
        ingredients: [
          "2 porciones de masa de pizza.",
          "1 huevo entero + 2 claras y 1 feta (30g) de queso light por encima.",
          "Ensalada libre de acompañamiento."
        ],
        macros: "Calorías: ~480 kcal | Proteínas: 32g | Carbohidratos: 61g | Grasas: 13g"
      },
      {
        id: "completa",
        name: "Opción 5 (Ensalada Completa)",
        ingredients: [
          "Base libre de ensalada de verdes y tomate.",
          "1 lata de atún o 2 huevos con 1 feta (30g) de queso.",
          "1/2 palta chica.",
          "4 cucharadas soperas de garbanzos, lentejas, choclo, o 6 cdas de quinoa hervida."
        ],
        macros: "Calorías: ~400 kcal | Proteínas: 37g | Carbohidratos: 41g | Grasas: 11g"
      }
    ]
  },
  bloque3: {
    title: "Bloque 3: Comidas Solo Proteicas (Ajustado con Calabaza)",
    rule: "Ideal para la cena los días de menor intensidad",
    options: [
      {
        id: "basica_pumpkin",
        name: "Opción 1 (Básica)",
        ingredients: [
          "180g de suprema de pollo pesada en crudo.",
          "1/2 palta chica o 1 cucharada (15cc) de aceite de oliva.",
          "Ensalada libre.",
          "250g de calabaza (hervida, al horno o en puré)."
        ],
        macros: "Calorías: ~375 kcal | Proteínas: 45g | Carbohidratos: 25g | Grasas: 9g"
      },
      {
        id: "vegetariana_pumpkin",
        name: "Opción 2 (Vegetariana Ligera)",
        ingredients: [
          "Omelette de 1 huevo entero y 2 claras.",
          "1 feta (30g) de queso magro o light.",
          "1/2 puñado de nueces (15g).",
          "Ensalada verde libre.",
          "250g de calabaza (hervida, al horno o en puré)."
        ],
        macros: "Calorías: ~370 kcal | Proteínas: 23g | Carbohidratos: 23g | Grasas: 19g"
      },
      {
        id: "carne_pumpkin",
        name: "Opción 3 (Carne y Cero Almidón)",
        ingredients: [
          "180g de bife magro pesado en crudo.",
          "1/2 palta chica o 1 cucharada (15cc) de aceite de oliva.",
          "Ensalada de verdes libre.",
          "250g de calabaza (hervida, al horno o en puré)."
        ],
        macros: "Calorías: ~465 kcal | Proteínas: 40g | Carbohidratos: 21g | Grasas: 24g"
      },
      {
        id: "clasica_convertida",
        name: "Opción 4 (Clásica Convertida)",
        ingredients: [
          "180g de suprema de pollo.",
          "1/2 palta chica.",
          "Ensalada libre.",
          "250g de calabaza."
        ],
        macros: "Proteína + Grasas + Calabaza"
      },
      {
        id: "limpia_convertida",
        name: "Opción 5 (Densidad Limpia Convertida)",
        ingredients: [
          "180g de bife magro.",
          "1/4 palta o 1/2 cda de aceite.",
          "Ensalada verde libre.",
          "250g de calabaza."
        ],
        macros: "Proteína + Grasas + Calabaza"
      },
      {
        id: "pescado_convertida",
        name: "Opción 6 (Pescado/Lípido Convertido)",
        ingredients: [
          "1 lata de atún al natural.",
          "1 huevo duro.",
          "1 cda de aceite de oliva.",
          "Tomate/pepino libre.",
          "250g de calabaza."
        ],
        macros: "Proteína + Grasas + Calabaza"
      }
    ]
  }
};

export const wikiBiomechanics = [
  {
    muscleGroup: "Tríceps",
    ruleName: "La Regla de 3",
    vectors: [
      { title: "Codo arriba", desc: "Variantes tras nuca o copa para lograr el máximo estiramiento anatómico de la cabeza larga." },
      { title: "Codo abajo", desc: "Extensiones clásicas en polea (pushdown) para cargar mecánicamente la cabeza lateral y medial." },
      { title: "Fijo Innegociable", desc: "Extensión unilateral con agarre supino en polea. Aísla el tríceps, previene tendinitis y garantiza una contracción pico sin compensación de hombros." }
    ]
  },
  {
    muscleGroup: "Bíceps",
    ruleName: "Los 3 Vectores de Flexión",
    vectors: [
      { title: "Codo atrás del torso", desc: "Curl en banco inclinado. Somete a la cabeza larga a un estiramiento extremo bajo carga (mayor estímulo para hipertrofia)." },
      { title: "Codo adelante del torso", desc: "Curl Scott o Predicador. Elimina cualquier inercia y enfoca el trabajo en el pico de contracción de la cabeza corta." },
      { title: "Agarre Neutro", desc: "Curl Martillo. Desarrolla el músculo braquial y el braquiorradial (dan grosor al brazo visto de frente)." }
    ]
  },
  {
    muscleGroup: "Hombros (Deltoides)",
    ruleName: "Cobertura Tridimensional",
    vectors: [
      { title: "Haz Frontal", desc: "Movimientos de empuje vertical (Press militar o de hombros)." },
      { title: "Haz Lateral", desc: "Abducción pura contra la gravedad (Elevaciones laterales en polea o mancuerna)." },
      { title: "Haz Posterior", desc: "Retracción y abducción horizontal (Facepulls, pájaros). Clave para el efecto visual de hombro 3D." }
    ]
  },
  {
    muscleGroup: "Pecho (Pectoral)",
    ruleName: "Los 2 Patrones Clave",
    vectors: [
      { title: "Empuje (Presses)", desc: "Movimientos compuestos (Press plano, inclinado, máquinas convergentes) para manejar cargas altas y aplicar máxima tensión mecánica." },
      { title: "Aducción (Aperturas)", desc: "Cruces en polea o máquina Pec-Dec. Aísla las fibras pectorales eliminando al tríceps de la ecuación y permite cruzar las manos en el centro." }
    ]
  },
  {
    muscleGroup: "Espalda",
    ruleName: "La Regla de los 3 Vectores",
    vectors: [
      { title: "Tirón Vertical (Amplitud)", desc: "Dominadas o Jalones al pecho. Trabaja principalmente la amplitud del dorsal ancho ('Forma de V')." },
      { title: "Tirón Horizontal (Grosor/Densidad)", desc: "Remos (con barra, máquina, banco). Recluta trapecios, romboides y musculatura profunda de la espalda alta." },
      { title: "Aislamiento de Dorsal (Extensión de hombro)", desc: "Pullover en polea o máquina. Rango completo de estiramiento y contracción sin interferencia del bíceps." }
    ],
    goldenRules: [
      { title: "Ángulo de los Codos", desc: "Para densidad, los codos deben viajar separados del torso, a unos 45 a 60 grados (no pegados a las costillas)." },
      { title: "Destino de la Carga", desc: "Traccionar apuntando hacia tu esternón o la parte baja del pecho, no hacia tu ombligo." },
      { title: "Movimiento Escapular", desc: "En la fase excéntrica, deja que tus hombros vayan hacia adelante y las escápulas se separen al máximo. Al traccionar, junta primero las escápulas antes de flexionar los brazos." }
    ]
  },
  {
    muscleGroup: "Cuádriceps",
    ruleName: "Los 3 Patrones Obligatorios",
    vectors: [
      { title: "Empuje Bilateral Pesado (Cadena Cerrada)", desc: "Prensa inclinada o Sentadilla Hack. Cargas altas con gran flexión simultánea de rodilla y cadera para el desarrollo de los vastos." },
      { title: "Patrón Unilateral (Estabilidad)", desc: "Sentadilla Búlgara. Indispensable para igualar desbalances, estiramiento profundo y estabilidad de la pelvis por el glúteo medio." },
      { title: "Aislamiento Biomecánico (Extensión pura)", desc: "Sillón de Cuádriceps (Extensiones). Único ejercicio que estimula el recto femoral (que cruza la cadera)." }
    ]
  },
  {
    muscleGroup: "Isquiosurales (Femoral)",
    ruleName: "Los 2 Patrones Obligatorios",
    vectors: [
      { title: "Bisagra de Cadera (Estiramiento)", desc: "Peso Muerto Rumano (RDL) o Buenos Días. Altísima tensión mecánica en su punto de máximo estiramiento." },
      { title: "Flexión de Rodilla (Acortamiento)", desc: "Curl femoral (sentado o tumbado). Innegociable para activar la cabeza corta del bíceps femoral (que no cruza la cadera)." }
    ]
  },
  {
    muscleGroup: "Glúteos",
    ruleName: "Los 3 Vectores de Activación",
    vectors: [
      { title: "Empuje Horizontal (Acortamiento Máximo)", desc: "Hip Thrust o Glute Bridge. Aísla el glúteo mayor en el punto de contracción máxima." },
      { title: "Tensión en Estiramiento", desc: "Sentadillas profundas o Búlgaras. El glúteo trabaja como estabilizador primario frenando la carga abajo." },
      { title: "Abducción (Trabajo de Glúteo Medio)", desc: "Máquina abductora o patadas laterales en polea. Estabiliza la pelvis y da aspecto redondo." }
    ]
  },
  {
    muscleGroup: "Pantorrillas (Gemelos)",
    ruleName: "Las 2 Posiciones Articulares",
    vectors: [
      { title: "Rodilla Recta (Gastrocnemio)", desc: "Elevaciones de talón de pie. Estimula el gastrocnemio visible en forma de corazón." },
      { title: "Rodilla Flexionada (Sóleo)", desc: "Elevaciones de talón sentado. El gastrocnemio se relaja y el trabajo recae en el sóleo (grosor lateral)." }
    ]
  },
  {
    muscleGroup: "Abdomen (Core)",
    ruleName: "Dinámica, Estabilidad y Regla del Recto Abdominal Puro",
    vectors: [
      { title: "Flexión Espinal", desc: "Crunches pesados en polea o máquina. Necesita flexionarse contra resistencia lineal para hipertrofia visible." },
      { title: "Anti-Extensión", desc: "Rueda abdominal (Ab-wheel) o Plancha RKC. Enseña al core a actuar como una pared protegiendo las lumbares." },
      { title: "Lo Prohibido (Estética de cintura)", desc: "Vetados los side bends (inclinaciones laterales con DB), giros rusos pesados y rotaciones de torso. Ensancharían la cintura." }
    ]
  }
];

export const calisthenicsSkills = [
  {
    vector: "Empuje (PUSH)",
    skills: [
      { name: "Pike Push-ups", difficulty: "Básico", prereq: "Dominio de 15 flexiones estándar", route: "Flexión inclinada → Flexión estándar → Pike Push-ups" },
      { name: "Ring Support Hold", difficulty: "Básico-Intermedio", prereq: "Dominio de 15 fondos en paralelas fijos", route: "Sostén isométrico en paralelas → Sostén en anillas con rotación externa" },
      { name: "Ranita (Frog Stand) / Shoulder Stand", difficulty: "Intermedio", prereq: "5 Pike Push-ups estrictas; adaptación de muñecas", route: "Isometría de tríceps → Ranita (Objetivo: 20 seg) → Shoulder stand" },
      { name: "Pseudo Planche Push-ups", difficulty: "Intermedio", prereq: "Ranita (20 seg) y protractura escapular activa", route: "Planche lean (Objetivo: 30 seg) → Pseudo planche push-ups (8 reps)" },
      { name: "Elbow Lever", difficulty: "Intermedio-Avanzado", prereq: "Ranita y fuerza base en core posterior", route: "Isometría parcial apoyando codos en abdomen → Elbow lever (15 seg)" },
      { name: "Handstand Push-Up (HSPU)", difficulty: "Avanzado", prereq: "Ranita a Handstand; elevación máxima de cintura escapular", route: "Pike hold en cajón → Pino asistido en pared → Pino libre → Excéntricas HSPU → HSPU" },
      { name: "Tuck Planche", difficulty: "Élite", prereq: "Pseudo Planche Lean; fuerza extrema en deltoides anterior", route: "Planche lean → Tuck Planche asistida con banda → Tuck Planche estricta" }
    ]
  },
  {
    vector: "Tracción (PULL)",
    skills: [
      { name: "Skin the Cat / German Hang", difficulty: "Básico", prereq: "Dominio de colgado activo y movilidad de hombro", route: "Colgado activo → Elevación de rodillas → Skin the cat → German Hang (15 seg)" },
      { name: "Pull Over en barra", difficulty: "Intermedio", prereq: "Skin the cat; 8 dominadas estrictas", route: "Elevación de rodillas → Pies a la barra → Remo a la barra → Pull Over" },
      { name: "Back Lever", difficulty: "Intermedio-Avanzado", prereq: "German Hang (15 seg); adaptación de cabeza larga de bíceps", route: "German Hang → Tuck Back Lever → Advanced Tuck Back Lever → Back Lever" },
      { name: "Front Lever", difficulty: "Avanzado", prereq: "15 Dominadas al pecho; retracción y depresión escapular estricta", route: "Tuck Front Lever → Advanced Tuck → Straddle → Front Lever Raise → Front Lever" },
      { name: "Muscle-Up Estricto", difficulty: "Élite", prereq: "Dominadas explosivas al pecho/abdomen; transición de retracción a depresión rápida", route: "Dominadas explosivas → Dominadas diagonales → Entrada asistida con salto → Muscle-up con banda → Estricto" }
    ]
  },
  {
    vector: "Estabilización / Core (Puente Transmisor)",
    skills: [
      { name: "Hollow Body Hold", difficulty: "Básico", prereq: "Base de toda tensión corporal en calistenia", route: "Suelo con lumbares aplastadas. Prerrequisito para plancha/palanca." },
      { name: "L-Sit / L-Sit Colgado", difficulty: "Intermedio", prereq: "Objetivo: 20 seg", route: "Rodillas al pecho en barra → Rodillas extendidas en barra → Dominadas en L → L-Sit" },
      { name: "Dragon Fly (Dragon Flag)", difficulty: "Avanzado", prereq: "Elevación de piernas extendidas en barra (Hanging leg raises)", route: "Cúspide de la fuerza del core anterior. Negativas → Dinámico → Completo." }
    ]
  }
];

export const biomechanicsAnchorSummary = {
  retroversionPelvica: {
    name: "Inclinación Pélvica Posterior (Retroversion)",
    desc: "Rotar la pelvis hacia atrás, 'escondiendo' el coxis y aplanando la curvatura lumbar natural. Se contraen glúteo mayor y recto abdominal.",
    app: "Hollow Body Hold, Planche, Front Lever, Handstand. Evita la sobrecarga y cizallamiento en discos L4-L5."
  },
  escapularAnchor: {
    retraccion: "Juntar las escápulas: Activación de romboides y trapecio medio. Obligatorio en dominadas (fase inicial), remos y Front Lever. Protege el bíceps.",
    protraccion: "Separar las escápulas: Activación de serrato anterior. Obligatorio en Planche, Pseudo Planche Push-ups y bloqueo de flexión.",
    depresion: "Bajar los hombros: Activación de trapecio inferior y dorsal. Obligatorio en Fondos (Dips), L-Sit y Muscle-ups. Previene pinzamiento subacromial.",
    elevacion: "Subir los hombros: Activación de trapecio superior. Obligatorio en Pino (Handstand) y Pike Push-ups. Bloquea la estructura ósea."
  }
};
