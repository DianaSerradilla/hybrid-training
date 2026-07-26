// Structured data representing the training and nutrition macrocycle based exclusively on "Entrenamiento_Completo.pdf"

export const macrocycleWeeks = [
  {
    number: 1,
    mesocycle: 1,
    mesocycleName: "Rango Base de Hipertrofia (Neuromuscular y Mielinización)",
    focus: "Fase de adaptación (Microciclo 1). Las series de los ejercicios principales se trabajan en un rango de 8 a 10 repeticiones dejando un RIR 2. Las series de los accesorios se manejan a 12-14 repeticiones con RIR 2. Volumen moderado, lejos del fallo muscular. Mapeo del patrón motor.",
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
    focus: "Fase de intensificación (Microciclo 2). Mantienes el mismo rango de 8 a 10 repeticiones en los principales y 12-14 en accesorios, pero ajustas el peso para que todo el entrenamiento se ejecute a un RIR 1. Aumentamos el tonelaje y la palanca.",
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
    focus: "Descarga 1 - Menstruación: Disipación de fatiga sistémica. Se cortan las series totales a la mitad, se reduce la carga un 20% en el gimnasio (RIR 3 general) y regresión de palancas en calistenia. GTG de flexiones y dominadas estrictamente suspendido.",
    rirGeneral: 3,
    rirAccessories: 3,
    intensityLabel: "Descarga y Remodelación Tisular (RIR 3, -20% peso)",
    isDeload: true,
    isPeaking: false
  },
  {
    number: 4,
    mesocycle: 1,
    mesocycleName: "Rango Base de Hipertrofia (Neuromuscular y Mielinización)",
    focus: "Clímax del bloque (Microciclo 3): Semana de impacto máximo. Las series principales combinan esfuerzos de RIR 1 y RIR 0 (fallo técnico en calistenia) manteniéndose en 8-10 repeticiones. El trabajo accesorio llega al RIR 0 absoluto con Rest-Pause o DropSet en serie final.",
    rirGeneral: "1 - 0",
    rirAccessories: 0,
    intensityLabel: "Clímax Neural y Estructural (RIR 1-0 / RIR 0)",
    isDeload: false,
    isPeaking: false
  },
  {
    number: 5,
    mesocycle: 2,
    mesocycleName: "Rango de Hipertrofia Pesada y Densidad Contráctil",
    focus: "Fase de adaptación pesada (Semana 5). Esfuerzo neurológico a RIR 2. Principales bajan al bloque de 6 a 8 reps. Accesorios bajan a 10 a 12 reps a RIR 2. Introducción de Tiempos Bajo Tensión (TUT), Flexiones Pica con déficit y Fondos LML.",
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
    focus: "Fase de intensificación pesada (Semana 6). Las series principales (6 a 8 repeticiones) y los accesorios (10 a 12 repeticiones) se empujan a un RIR 1. Mecanotransducción profunda: explotar la rigidez de la titina como mecanosensor. Trabajo en LML.",
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
    focus: "Descarga 2: Idéntica a la Semana 3. Reducción de series a la mitad, reducción de tonelaje (20% menos) y RIR 3 general para recuperar articulaciones y tendones antes de las cargas máximas. GTG suspendido.",
    rirGeneral: 3,
    rirAccessories: 3,
    intensityLabel: "Descarga y Supercompensación Tisular (RIR 3, -20% peso)",
    isDeload: true,
    isPeaking: false
  },
  {
    number: 8,
    mesocycle: 2,
    mesocycleName: "Rango de Hipertrofia Pesada y Densidad Contráctil",
    focus: "Clímax pesado (Microciclo 6): Tanto los movimientos principales como los accesorios alcanzan el RIR 0 de forma constante. Máximo miotrauma tolerable. OBLIGATORIO: Drop Set o Rest-Pause SÓLO en la última serie de 2 o 3 ejercicios del Bloque 3.",
    rirGeneral: 0,
    rirAccessories: 0,
    intensityLabel: "Clímax Pesado (RIR 0 + DropSet/RestPause)",
    isDeload: false,
    isPeaking: false
  },
  {
    number: 9,
    mesocycle: 3,
    mesocycleName: "El Bloque de Fuerza Máxima",
    focus: "Adaptación a la Fuerza (Microciclo 7): Ejercicios principales bajan drásticamente (4 a 6 repeticiones o Método Cluster: micro-pausas de 15s) dejando RIR 2. Accesorios en 8-10 reps a RIR 1. Acostumbras al SNC a cargas muy pesadas sin fallo.",
    rirGeneral: 2,
    rirAccessories: 1,
    intensityLabel: "Adaptación a la Fuerza - Método Cluster (RIR 2/1)",
    isDeload: false,
    isPeaking: false
  },
  {
    number: 10,
    mesocycle: 3,
    mesocycleName: "El Bloque de Fuerza Máxima",
    focus: "Intensificación de Fuerza (Microciclo 8): Carga sube. En los principales te manejas en rangos de 5 reps a RIR 1 (o Clusters intensos) y algunos de 6 a 8 reps a RIR 0. Los accesorios llegan al fallo (RIR 0) en el rango de 8-10 reps.",
    rirGeneral: 1,
    rirAccessories: 0,
    intensityLabel: "Intensificación de Fuerza - Clusters (RIR 1/0)",
    isDeload: false,
    isPeaking: false
  },
  {
    number: 11,
    mesocycle: 3,
    mesocycleName: "El Bloque de Fuerza Máxima",
    focus: "Descarga 3 - Menstruación: Descanso estratégico antes del gran final. Cortás el volumen a la mitad y bajás los pesos un 30% a RIR 3 o 4, guardando toda la energía para la semana que viene. GTG suspendido.",
    rirGeneral: "3 - 4",
    rirAccessories: "3 - 4",
    intensityLabel: "Descarga 3 - Menstruación (RIR 3-4, -30% peso)",
    isDeload: true,
    isPeaking: false
  },
  {
    number: 12,
    mesocycle: 3,
    mesocycleName: "El Bloque de Fuerza Máxima",
    focus: "Clímax No Escrito - Peaking / EL EXAMEN: Disipación total de fatiga de Lunes a Viernes. El Sábado ejecutas el TEST OFICIAL (AMRAP): Test 1 Dominadas, Test 2 Fondos, Test 3 Flexiones Estándar, Test 4 Flexiones Pica.",
    rirGeneral: 0,
    rirAccessories: 0,
    intensityLabel: "Peaking -> SÁBADO: EL EXAMEN (TEST AMRAP)",
    isDeload: false,
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

export const cardioSchedule = {
  Lunes: {
    title: "Cardio: Lunes HIIT + LISS",
    machine: "Bici",
    protocol: "15 min HIIT (Protocolo 15/45) + 15 min LISS",
    reason: "Usás pura potencia de piernas en los sprints cortos para ganar explosividad, dejando tus hombros y pecho totalmente intactos para recuperarse del entrenamiento de la mañana."
  },
  Martes: {
    title: "Cardio: Martes + LISS",
    machine: "AirBike",
    protocol: "30 min LISS puro",
    reason: "A la tarde necesitás el 100% de tu fuerza de agarre y dorsales. Al hacer LISS suave en la AirBike, movés brazos y piernas oxigenando el cuerpo entero, pero sin generar ninguna fatiga local que arruine tu sesión de pesas posterior."
  },
  Miércoles: {
    title: "Cardio: Miércoles + LISS",
    machine: "Bici",
    protocol: "30 min LISS puro",
    reason: "El día de cuádriceps exige muchísimo al sistema nervioso y a las piernas. La Bici a ritmo de paseo lava el ácido láctico del día anterior, lubrica las rodillas y protege tu tanque de energía para las sentadillas de la tarde."
  },
  Jueves: {
    title: "Cardio: Jueves HIIT + LISS",
    machine: "AirBike",
    protocol: "15 min HIIT (Protocolo 30/30) + 15 min LISS",
    reason: "Tus cuádriceps están pesados por el miércoles y a la tarde te toca Tren Superior completo. La AirBike en modo HIIT reparte el daño periférico (empujás con todo el cuerpo), dándote un pico cardiovascular brutal sin fundir por completo ni los brazos ni las piernas."
  },
  Viernes: {
    title: "Cardio: Viernes LISS",
    machine: "Cinta con inclinación",
    protocol: "30 min LISS puro",
    reason: "Caminar con pendiente traslada el esfuerzo directamente a la cadena posterior (isquiotibiales, gemelos y glúteos). Es la pre-activación biomecánica perfecta para dejarte lista para la sesión de isquios de la tarde, evitando la fatiga lumbar y de agarre que te darían 30 minutos continuos de remo."
  },
  Sábado: {
    title: "Cardio: Sábado HIIT + LISS",
    machine: "Remo",
    protocol: "15 min HIIT + 15 min LISS",
    reason: "Es el último gran esfuerzo de la semana y ya no hay que guardar energía para otra sesión pesada. El Remo te permite usar toda la potencia que te queda en las piernas y la espalda para vaciar el tanque en esos intervalos explosivos."
  },
  Domingo: {
    title: "Cardio: Domingo LISS",
    machine: "Bici",
    protocol: "30 min LISS puro",
    reason: "Es el día de bajar revoluciones y resetear el sistema. Mantener un flujo de sangre constante, en Zona 2 estricta, sana las fibras musculares rotas y te deja lista física y mentalmente para arrancar la nueva semana."
  }
};

export const routinesByWeek = {
  // We structure the routines dynamically based on whether it is in Mesocycle 1 (W1-4), Mesocycle 2 (W5-8), Mesocycle 3 Load (W9-11), or Tapering/Peaking (W12)
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
            title: isDeload ? "Push - Descarga 1 (Menstruación)" : weekNumber === 4 ? "Push - Clímax Neural y Estructural" : "Push - Enfoque Empujes",
            blocks: [
              {
                name: "Bloque 1: Calistenia (Fuerza Relativa y Condicionamiento Neural)",
                exercises: [
                  { name: "Flexiones en Pica (Pike Push-ups)", sets: isDeload ? "2" : "3", reps: isDeload ? "6 (Inclinadas)" : weekNumber === 4 ? "Max (Obj 5+)" : weekNumber === 2 ? "4" : "3", rir: isDeload ? "3" : weekNumber === 4 ? "0" : weekNumber === 2 ? "1" : "2", note: "Tempo: 3 seg bajando, pausa 1 seg abajo. Elevación escapular máxima." },
                  { name: "Fondos en Paralelas (Dips)", sets: isDeload ? "2" : "3", reps: isDeload ? "6 (Asistidos en banco)" : weekNumber === 4 ? "Max (Obj 6-8)" : weekNumber === 2 ? "4-5" : "3-4", rir: isDeload ? "3" : weekNumber === 4 ? "0" : weekNumber === 2 ? "1" : "2", note: "Depresión escapular inquebrantable." }
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
                  { name: "Pushdown Clásico (Soga)", sets: isDeload ? "1-2" : "2-3", reps: "12-14", rir: isDeload ? "3" : rirAccVal, note: "Tríceps: Codo abajo." },
                  { name: "Rompecráneos en suelo o extensión tras nuca", sets: isDeload ? "1-2" : "2-3", reps: "12-14", rir: isDeload ? "3" : rirAccVal, note: "Tríceps: Innegociable para salud articular." },
                  { name: "Rueda Abdominal", sets: isDeload ? "1-2" : "2-3", reps: "12-14", rir: isDeload ? "3" : rirAccVal, note: "Core: Anti-extensión." }
                ],
                intensityTechnique: weekNumber === 4 ? "Rest-Pause o DropSet en la última serie" : null
              }
            ]
          };
        } else if (isMeso2) {
          return {
            title: isDeload ? "Push - Descarga 2 (Supercompensación Tisular)" : weekNumber === 8 ? "Push - Clímax Pesado" : "Push - Choque Excéntrico y Estiramiento",
            blocks: [
              {
                name: "Bloque 1: Calistenia (Fuerza Relativa y Condicionamiento Neural)",
                exercises: [
                  { name: "Flexiones en Pica con Déficit (Manos elevadas en discos/libros)", sets: isDeload ? "2" : "3", reps: isDeload ? "6-8 (Estándar suelo)" : weekNumber === 8 ? "Max (Obj 6-8+)" : weekNumber === 6 ? "5-7" : "4-6", rir: isDeload ? "3" : weekNumber === 8 ? "0" : weekNumber === 6 ? "1" : "2", note: "El déficit permite que la cabeza baje más, aumentando el estiramiento pasivo." },
                  { name: "Fondos en Paralelas con Parciales Alargadas (Dips LML)", sets: isDeload ? "2" : "3", reps: isDeload ? "8-10 (Fondos banco)" : weekNumber === 8 ? "Max (Obj 6-8)" : weekNumber === 6 ? "5-6" : "4-5", rir: isDeload ? "3" : weekNumber === 8 ? "0" : weekNumber === 6 ? "1" : "2", note: "Bajas al máximo estiramiento, subes solo a la mitad, vuelves a bajar al fondo y subes completo = 1 rep." }
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
                  { name: "Pushdown Clásico (Soga)", sets: isDeload ? "1-2" : "2-3", reps: "10-12", rir: isDeload ? "3" : rirAccVal, note: "Extensiones clásicas para cabezas lateral y medial." },
                  { name: "Rompecráneos en suelo o extensión tras nuca", sets: isDeload ? "1-2" : "2-3", reps: "10-12", rir: isDeload ? "3" : rirAccVal, note: "Innegociable para salud articular." }
                ],
                intensityTechnique: weekNumber === 8 ? "Drop Set o Rest-Pause en la serie final de 2-3 ejercicios del Bloque 3" : null
              }
            ]
          };
        } else if (isMeso3) {
          return {
            title: isDeload ? "Push - Descarga 3 (Menstruación)" : weekNumber === 10 ? "Push - Intensificación de Fuerza (Clusters)" : "Push - Adaptación a la Fuerza (Método Cluster)",
            blocks: [
              {
                name: "Bloque 1: Calistenia (Fuerza Relativa y Condicionamiento Neural)",
                exercises: [
                  { name: "Flexiones en Pica (Pike Push-ups)", sets: isDeload ? "2" : "3", reps: isDeload ? "6-8 (Suelo)" : weekNumber === 10 ? "Cluster (4 + 15s + 3)" : "Cluster (3 + 15s + 2)", rir: isDeload ? "3-4" : weekNumber === 10 ? "1" : "2", note: "Descanso de 15s en la micro-pausa intra-serie." },
                  { name: "Fondos en Paralelas (Dips)", sets: isDeload ? "2" : "3", reps: isDeload ? "8-10 (Banco)" : weekNumber === 10 ? "Cluster (6 + 15s + 4)" : "Cluster (5 + 15s + 3)", rir: isDeload ? "3-4" : weekNumber === 10 ? "1" : "2", note: "Técnica de competición estricta." }
                ]
              },
              {
                name: "Bloque 2: Gimnasio (Hipertrofia Miofibrilar Pesada - Compuestos)",
                exercises: [
                  { name: "Press en Máquina Convergente de Palancas", sets: isDeload ? "1-2" : "3", reps: isDeload ? "6-8" : weekNumber === 10 ? "5" : "4-6", rir: isDeload ? "3-4 (-30% kg)" : rirVal, note: "Fuerza máxima absoluta. Sin llegar al fallo en semanas de adaptación." },
                  { name: "Press Militar Libre (Mancuernas)", sets: isDeload ? "1-2" : "3", reps: isDeload ? "6-8" : weekNumber === 10 ? "5" : "4-6", rir: isDeload ? "3-4 (-30% kg)" : rirVal, note: "Fuerza de empuje vertical y estabilización máxima." }
                ]
              },
              {
                name: "Bloque 3: Gimnasio (Hipertrofia Regional y Aislamiento)",
                exercises: [
                  { name: "Aperturas Pec-Dec", sets: isDeload ? "1-2" : "2-3", reps: isDeload ? "10-12" : "8-10", rir: isDeload ? "3-4" : rirAccVal, note: "Aislamiento de fibras pectorales sin tríceps." },
                  { name: "Elevaciones Laterales (Máquina o Mancuernas)", sets: isDeload ? "1-2" : "2-3", reps: isDeload ? "10-12" : "8-10", rir: isDeload ? "3-4" : rirAccVal, note: "Haz lateral del hombro." },
                  { name: "Pushdown Clásico (Soga)", sets: isDeload ? "1-2" : "2-3", reps: isDeload ? "10-12" : "8-10", rir: isDeload ? "3-4" : rirAccVal, note: "Tríceps: Codo abajo." },
                  { name: "Rompecráneos en suelo o extensión tras nuca", sets: isDeload ? "1-2" : "2-3", reps: isDeload ? "10-12" : "8-10", rir: isDeload ? "3-4" : rirAccVal, note: "Cierre de sesión. Salud del codo." }
                ]
              }
            ]
          };
        } else { // Week 12 Peaking
          return {
            title: "Push - Peaking (Semana del Examen)",
            blocks: [
              {
                name: "Bloque 1: Calistenia (Pre-Activación Muy Suave)",
                exercises: [
                  { name: "Flexiones en Pica", sets: "2", reps: "2-3", rir: "3", note: "Mismo peso/postura, bajísimas reps para conservar 100% de energía para el sábado." },
                  { name: "Fondos en Paralelas", sets: "2", reps: "2-3", rir: "3", note: "Sin fatigar el tríceps ni el pectoral." }
                ]
              },
              {
                name: "Bloque 2: Gimnasio (Mismo Peso Pesado, Pocas Reps)",
                exercises: [
                  { name: "Press en Máquina Convergente de Palancas", sets: "2", reps: "2-3", rir: "3", note: "Conservar el patrón motor con peso alto pero sin fatiga." },
                  { name: "Press Militar Libre (Mancuernas)", sets: "2", reps: "2-3", rir: "3", note: "Activación neural previa al examen." }
                ]
              },
              {
                name: "Bloque 3: Gimnasio (Aislamiento Mínimo)",
                exercises: [
                  { name: "Aperturas Pec-Dec", sets: "1", reps: "6-8", rir: "2", note: "Mantenimiento de flujo sanguíneo." },
                  { name: "Elevaciones Laterales", sets: "1", reps: "6-8", rir: "2", note: "Sin generar ácido láctico." },
                  { name: "Pushdown Clásico", sets: "1", reps: "6-8", rir: "2", note: "Tríceps fresco." },
                  { name: "Rompecráneos en suelo o extensión tras nuca", sets: "1", reps: "6-8", rir: "2", note: "Salud articular." }
                ]
              }
            ]
          };
        }

      case "Martes":
        if (isMeso1) {
          return {
            title: isDeload ? "Pull - Descarga 1 (Menstruación)" : weekNumber === 4 ? "Pull - Clímax Neural y Estructural" : "Pull - Enfoque Tracción",
            blocks: [
              {
                name: "Bloque 1: Calistenia (Fuerza Relativa y Condicionamiento Neural)",
                exercises: [
                  { name: "Dominadas Pronas Estrictas (Pull-ups)", sets: isDeload ? "4" : "4", reps: isDeload ? "1-2 (con banda)" : weekNumber === 4 ? "Max (Obj 3-5)" : weekNumber === 2 ? "2-3" : "1-2", rir: isDeload ? "3" : weekNumber === 4 ? "0" : weekNumber === 2 ? "1" : "2", note: "Retracción escapular inicial para romper la inercia." },
                  { name: isDeload ? "Dominadas Australianas (Remos barra baja)" : "Dominadas Negativas", sets: "3", reps: isDeload ? "6-8" : weekNumber === 4 ? "5 (Agotamiento excéntrico total)" : weekNumber === 2 ? "4" : "3", rir: isDeload ? "3" : "0", note: isDeload ? "Opción liviana." : "Salta, bloquea arriba y resiste la bajada en 4-5 segundos." }
                ]
              },
              {
                name: "Bloque 2: Gimnasio (Hipertrofia Miofibrilar Pesada - Compuestos)",
                exercises: [
                  { name: "Remo con Pecho Apoyado (Palancas o Barra T)", sets: isDeload ? "1-2" : "3", reps: "8-10", rir: isDeload ? "3 (-20% kg)" : rirVal, note: "Vector horizontal para densidad. Mantener codos a 45°-60°." }
                ]
              },
              {
                name: "Bloque 3: Gimnasio (Hipertrofia Regional, Estrés Metabólico y Aislamiento)",
                exercises: [
                  { name: "Pullover en Polea o Máquina", sets: isDeload ? "1-2" : "2-3", reps: "12-14", rir: isDeload ? "3" : rirAccVal, note: "Aislamiento de dorsal. 2 series." },
                  { name: "Facepull", sets: isDeload ? "1-2" : "2-3", reps: "12-14", rir: isDeload ? "3" : rirAccVal, note: "Higiene articular innegociable. 2 series." },
                  { name: "Curl Inclinado con Mancuernas", sets: isDeload ? "1-2" : "2-3", reps: "12-14", rir: isDeload ? "3" : rirAccVal, note: "Bíceps: Codo atrás del torso para cabeza larga." },
                  { name: "Curl Martillo", sets: isDeload ? "1-2" : "2-3", reps: "12-14", rir: isDeload ? "3" : rirAccVal, note: "Bíceps: Agarre neutro." },
                  { name: "Extensión Lumbar", sets: isDeload ? "1-2" : "2-3", reps: "12-14", rir: isDeload ? "3" : rirAccVal, note: "Fortalecimiento de erectores espinales." }
                ],
                intensityTechnique: weekNumber === 4 ? "Rest-Pause o DropSet en la última serie" : null
              }
            ]
          };
        } else if (isMeso2) {
          return {
            title: isDeload ? "Pull - Descarga 2 (Supercompensación Tisular)" : weekNumber === 8 ? "Pull - Clímax Pesado" : "Pull - Choque Excéntrico y Estiramiento",
            blocks: [
              {
                name: "Bloque 1: Calistenia (Fuerza Relativa y Condicionamiento Neural)",
                exercises: [
                  { name: "Dominadas Pronas Estrictas (Pull-ups)", sets: isDeload ? "4" : "4", reps: isDeload ? "1-2 (con banda)" : weekNumber === 8 ? "Max (Obj 5-8)" : weekNumber === 6 ? "4-6" : "3-5", rir: isDeload ? "3" : weekNumber === 8 ? "0" : weekNumber === 6 ? "1" : "2", note: "Retracción escapular inicial estricta." },
                  { name: isDeload ? "Dominadas Australianas (Remos barra baja)" : "Dominadas Excéntricas con Pausa Isométrica (90°)", sets: "3", reps: isDeload ? "6-8" : weekNumber === 8 ? "Fallo Excéntrico (90°)" : weekNumber === 6 ? "4-5" : "3-4", rir: isDeload ? "3" : "0", note: isDeload ? "Descarga." : "Baja lento, congela 2 seg a mitad de recorrido (90°) sin rebotar, luego baja completo." }
                ]
              },
              {
                name: "Bloque 2: Gimnasio (Hipertrofia Pesada - Compuestos)",
                exercises: [
                  { name: "Remo con Pecho Apoyado (Palancas o Barra T)", sets: isDeload ? "1-2" : "3", reps: "6-8", rir: isDeload ? "3 (-20% kg)" : rirVal, note: "Densidad de espalda alta. Codos separados 45°-60°." }
                ]
              },
              {
                name: "Bloque 3: Gimnasio (Hipertrofia Regional, Estrés Metabólico y Aislamiento)",
                exercises: [
                  { name: "Pullover en Polea o Máquina", sets: isDeload ? "1-2" : "2-3", reps: "10-12", rir: isDeload ? "3" : rirAccVal, note: "Aislamiento total del dorsal sin interferencia de bíceps." },
                  { name: "Facepull", sets: isDeload ? "1-2" : "2-3", reps: "10-12", rir: isDeload ? "3" : rirAccVal, note: "Salud articular. Fortalece el manguito rotador." },
                  { name: "Curl Inclinado con Mancuernas", sets: isDeload ? "1-2" : "2-3", reps: "10-12", rir: isDeload ? "3" : rirAccVal, note: "Máximo estiramiento de la cabeza larga." },
                  { name: "Curl Martillo", sets: isDeload ? "1-2" : "2-3", reps: "10-12", rir: isDeload ? "3" : rirAccVal, note: "Grosor del brazo. Agarre neutro." },
                  { name: "Extensión Lumbar", sets: isDeload ? "1-2" : "2-3", reps: "10-12", rir: isDeload ? "3" : rirAccVal, note: "Salud lumbar." }
                ],
                intensityTechnique: weekNumber === 8 ? "Rest-Pause o DropSet en la última serie" : null
              }
            ]
          };
        } else if (isMeso3) {
          return {
            title: isDeload ? "Pull - Descarga 3 (Menstruación)" : weekNumber === 10 ? "Pull - Intensificación de Fuerza (Clusters)" : "Pull - Adaptación a la Fuerza (Método Cluster)",
            blocks: [
              {
                name: "Bloque 1: Calistenia (Fuerza Relativa y Condicionamiento Neural)",
                exercises: [
                  { name: "Dominadas Pronas Estrictas (Pull-ups)", sets: isDeload ? "4" : "4", reps: isDeload ? "1-2 (con banda)" : weekNumber === 10 ? "Cluster (4 + 15s + 3)" : "Cluster (3 + 15s + 2)", rir: isDeload ? "3-4" : weekNumber === 10 ? "1" : "2", note: "Pausa de 15 segundos entre micro-series." },
                  { name: isDeload ? "Dominadas Australianas" : "Dominadas Supinas (Chin-ups)", sets: "3", reps: isDeload ? "6-8" : weekNumber === 10 ? "Cluster (5 + 15s + 3)" : "Cluster (4 + 15s + 2)", rir: isDeload ? "3-4" : weekNumber === 10 ? "1" : "2", note: "Retracción controlada y estiramiento máximo." }
                ]
              },
              {
                name: "Bloque 2: Gimnasio (Hipertrofia Miofibrilar - Compuestos)",
                exercises: [
                  { name: "Remo con Pecho Apoyado (Palancas o Barra T)", sets: isDeload ? "1-2" : "2", reps: isDeload ? "6-8" : weekNumber === 10 ? "5" : "4-6", rir: isDeload ? "3-4 (-30% kg)" : rirVal, note: "Remo pesado con soporte. Sin tracción lumbar." }
                ]
              },
              {
                name: "Bloque 3: Gimnasio (Hipertrofia Regional y Aislamiento)",
                exercises: [
                  { name: "Pullover en Polea o Máquina", sets: isDeload ? "1-2" : "2-3", reps: isDeload ? "10-12" : "8-10", rir: isDeload ? "3-4" : rirAccVal, note: "Aislamiento de dorsal." },
                  { name: "Facepull", sets: isDeload ? "1-2" : "2-3", reps: isDeload ? "10-12" : "8-10", rir: isDeload ? "3-4" : rirAccVal, note: "Higiene y estabilidad escapular." },
                  { name: "Curl Inclinado con Mancuernas", sets: isDeload ? "1-2" : "2-3", reps: isDeload ? "10-12" : "8-10", rir: isDeload ? "3-4" : rirAccVal, note: "Cabeza larga de bíceps." },
                  { name: "Curl Martillo", sets: isDeload ? "1-2" : "2-3", reps: isDeload ? "10-12" : "8-10", rir: isDeload ? "3-4" : rirAccVal, note: "Grosor lateral del bíceps/antebrazo." },
                  { name: "Extensión Lumbar", sets: isDeload ? "1-2" : "2-3", reps: isDeload ? "10-12" : "8-10", rir: isDeload ? "3-4" : rirAccVal, note: "Densidad lumbar." }
                ]
              }
            ]
          };
        } else { // Week 12
          return {
            title: "Pull - Peaking (Semana del Examen)",
            blocks: [
              {
                name: "Bloque 1: Calistenia (Pre-Activación Muy Suave)",
                exercises: [
                  { name: "Dominadas Pronas Estrictas", sets: "2", reps: "2-3", rir: "3", note: "Cero fatiga. Solo marcar la retracción inicial." },
                  { name: "Dominadas Supinas", sets: "1", reps: "2-3", rir: "3", note: "Reserva 100% de fuerza para el sábado." }
                ]
              },
              {
                name: "Bloque 2: Gimnasio (Descarga Neural Mismo Peso)",
                exercises: [
                  { name: "Remo con Pecho Apoyado", sets: "2", reps: "2-3", rir: "3", note: "Mantenimiento del tono muscular sin microtrauma." }
                ]
              },
              {
                name: "Bloque 3: Gimnasio (Aislamiento Ligero)",
                exercises: [
                  { name: "Pullover en Polea", sets: "1", reps: "6-8", rir: "2", note: "Fluidez articular." },
                  { name: "Facepull", sets: "2", reps: "6-8", rir: "2", note: "Salud del manguito rotador." },
                  { name: "Curl Inclinado con Mancuernas", sets: "1", reps: "6-8", rir: "2", note: "Estiramiento suave." },
                  { name: "Curl Martillo", sets: "1", reps: "6-8", rir: "2", note: "Cero esfuerzo." },
                  { name: "Extensión Lumbar", sets: "1", reps: "6-8", rir: "2", note: "Movilidad lumbar." }
                ]
              }
            ]
          };
        }

      case "Miércoles":
        if (isW12) {
          return {
            title: "Legs 1 - Peaking (Semana del Examen)",
            blocks: [
              {
                name: "Bloque 1: Calistenia",
                exercises: [
                  { name: "Descanso / Sin estímulo neural", sets: "0", reps: "0", rir: "0", note: "Recuperación para el sábado." }
                ]
              },
              {
                name: "Bloque 1 (Inicial): Gimnasio (Pre-Fatiga Suave)",
                exercises: [
                  { name: "Sillón de Cuádriceps (Extensiones)", sets: "2", reps: "6-8", rir: "2", note: "Solo bombeo de sangre a la rodilla." },
                  { name: "Curl Femoral (Sentado o Tumbado)", sets: "2", reps: "6-8", rir: "2", note: "Flexión de rodilla ligera." }
                ]
              },
              {
                name: "Bloque 2: Gimnasio (Trabajo Mínimo)",
                exercises: [
                  { name: "Prensa Inclinada", sets: "2", reps: "3-4", rir: "2", note: "Mantenimiento del tono muscular." },
                  { name: "Sentadilla Búlgara", sets: "2", reps: "3-4", rir: "2", note: "Unilateral ligero." }
                ]
              },
              {
                name: "Bloque 3: Gimnasio (Aislamiento Continuación)",
                exercises: [
                  { name: "SUPERSET: Máquina Abductora + Aductora", sets: "1", reps: "8", rir: "2", note: "Movilidad pélvica." },
                  { name: "Elevaciones de Talón de Pie", sets: "1", reps: "8", rir: "2", note: "Sin fatiga." },
                  { name: "Crunch Abdominal", sets: "1", reps: "8", rir: "2", note: "Activación ligera." }
                ]
              }
            ]
          };
        }
        return {
          title: isDeload ? `Legs 1 - Descarga ${weekNumber === 3 ? '1 (Menstruación)' : weekNumber === 7 ? '2' : '3 (Menstruación)'}` : "Legs 1 - Foco Quads con Pre-Fatiga",
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
                { name: "Sillón de Cuádriceps (Extensiones)", sets: isDeload ? "1-2" : "2-3", reps: isMeso2 ? "10-12" : "12-14", rir: isDeload ? "3 (-20% kg)" : rirAccVal, note: "Aísla el recto femoral y bombea sangre a la rodilla." },
                { name: "Curl Femoral (Sentado o Tumbado)", sets: isDeload ? "1-2" : "2-3", reps: isMeso2 ? "10-12" : "12-14", rir: isDeload ? "3 (-20% kg)" : rirAccVal, note: "Flexión de rodilla para aislar cabeza corta." }
              ]
            },
            {
              name: "Bloque 2: Gimnasio (Hipertrofia Miofibrilar - Compuestos)",
              exercises: [
                { name: "Prensa Inclinada", sets: isDeload ? "1-2" : "3", reps: isMeso3 ? "4-6" : isMeso2 ? "6-8" : "8-10", rir: isDeload ? "3 (-20% kg)" : rirVal, note: "Empuje bilateral para vastos. Usando menos carga por la pre-fatiga." },
                { name: "Sentadilla Búlgara con Mancuernas", sets: isDeload ? "1-2" : "3", reps: isMeso3 ? "4-6" : isMeso2 ? "6-8" : "8-10", rir: isDeload ? "3 (-20% kg)" : rirVal, note: "Patrón unilateral. Torso erguido, rodilla pasando la punta del pie." }
              ]
            },
            {
              name: "Bloque 3 (Continuación): Gimnasio (Hipertrofia Regional y Core)",
              exercises: [
                { name: "SUPERSET: Máquina Abductora + Máquina Aductora", sets: isDeload ? "1-2" : "2-3", reps: isMeso2 ? "10-12" : "12-14", rir: isDeload ? "3" : rirAccVal, note: "Trabajo antagonista para glúteo medio y cara interna del muslo." },
                { name: "Elevaciones de Talón de Pie", sets: isDeload ? "1-2" : "2-3", reps: isMeso2 ? "10-12" : "12-14", rir: isDeload ? "3" : rirAccVal, note: "Gastrocnemio con rodilla bloqueada (recta)." },
                { name: "Crunch Abdominal", sets: isDeload ? "1-2" : "2-3", reps: isMeso2 ? "10-12" : "12-14", rir: isDeload ? "3" : rirAccVal, note: "Core: Flexión espinal pura contra resistencia." }
              ],
              intensityTechnique: weekNumber === 4 || weekNumber === 8 ? "Sillón de Cuádriceps ideal para Drop Set en la serie final" : null
            }
          ]
        };

      case "Jueves":
        if (isW12) {
          return {
            title: "Tren Superior - Peaking (Descarga Pre-Examen)",
            blocks: [
              {
                name: "Bloque 1: Calistenia (Activación Mínima)",
                exercises: [
                  { name: "Flexiones Estándar", sets: "2", reps: "5", rir: "3", note: "Soltar la musculatura." },
                  { name: "Remos Invertidos / Dominada Australiana", sets: "2", reps: "5", rir: "3", note: "Muy liviano." }
                ]
              },
              {
                name: "Bloque 2: Gimnasio (Mismo Peso Pesado, Pocas Reps)",
                exercises: [
                  { name: "Press Inclinado en Máquina Convergente", sets: "1", reps: "8-10", rir: "3 (peso liviano)", note: "Solo fluidez y técnica." }
                ]
              },
              {
                name: "Bloque 3: Gimnasio (Aislamiento Ligero)",
                exercises: [
                  { name: "Pájaros en banco", sets: "1", reps: "8-10", rir: "3", note: "Haz posterior del deltoides." },
                  { name: "Elevaciones Laterales", sets: "1", reps: "8-10", rir: "3", note: "Haz lateral del deltoides." },
                  { name: "Extensiones Tras Nuca (Polea)", sets: "1", reps: "8-10", rir: "3", note: "Tríceps cabeza larga." },
                  { name: "Curl Scott o Predicador", sets: "1", reps: "8-10", rir: "3", note: "Bíceps cabeza corta." }
                ]
              }
            ]
          };
        }
        return {
          title: isDeload ? `Tren Superior - Descarga ${weekNumber === 3 ? '1 (Menstruación)' : weekNumber === 7 ? '2' : '3 (Menstruación)'}` : "Tren Superior - Híbrido",
          blocks: [
            {
              name: "Bloque 1: Calistenia (Fuerza Relativa)",
              exercises: [
                {
                  name: weekNumber === 5 || weekNumber === 6 || weekNumber === 7 || weekNumber === 8 ? "Flexiones Declinadas (Pies elevados)" : "Flexiones Estándar (Push-ups)",
                  sets: isDeload ? "3" : "3",
                  reps: isDeload ? "5-6 (o 6-8)" : weekNumber === 10 ? "Cluster (10 + 15s + 5)" : weekNumber === 9 ? "Cluster (8 + 15s + 4)" : weekNumber === 8 ? "Max (Obj 10-12)" : weekNumber === 6 ? "8-10" : weekNumber === 5 ? "6-8" : weekNumber === 4 ? "Max (Obj 8-10)" : weekNumber === 2 ? "6-8" : "5-6",
                  rir: isDeload ? "3" : weekNumber === 8 || weekNumber === 4 ? "0" : rirVal,
                  note: "Protracción escapular al extender los codos."
                },
                {
                  name: isDeload ? "Dominadas Supinas con banda (Chin-ups)" : weekNumber === 9 ? "Remos Invertidos / Dominada Australiana" : weekNumber === 10 ? "Remos Invertidos" : weekNumber === 5 || weekNumber === 6 || weekNumber === 7 || weekNumber === 8 ? "Dominadas Supinas LML (Mitad inferior)" : "Dominadas Supinas (Chin-ups)",
                  sets: isDeload ? "3" : "3",
                  reps: isDeload ? "2-3" : weekNumber === 10 ? "Max (Obj 15+)" : weekNumber === 9 ? "10-12" : weekNumber === 8 ? "Max" : weekNumber === 6 ? "5-7" : weekNumber === 5 ? "4-6" : weekNumber === 4 ? "Max (Obj 4-6)" : weekNumber === 2 ? "2-3" : "2-3",
                  rir: isDeload ? "3" : weekNumber === 8 || weekNumber === 4 ? "0" : rirVal,
                  note: "Bíceps asisten en tracción vertical."
                },
                {
                  name: "Dead Hang con lastre",
                  sets: "2",
                  reps: "Al fallo técnico",
                  rir: isDeload ? "3" : "0",
                  note: "Aguantando pasivamente al fallo técnico de agarre."
                }
              ]
            },
            {
              name: "Bloque 2: Gimnasio (Hipertrofia Miofibrilar - Compuestos)",
              exercises: [
                {
                  name: "Press Inclinado en Máquina Convergente de Palancas",
                  sets: isDeload ? "1-2" : "3",
                  reps: isMeso3 ? "4-6" : isMeso2 ? "6-8" : "8-10",
                  rir: isDeload ? "3 (-20% kg)" : rirVal,
                  note: "Foco en porción clavicular del pectoral."
                },
                {
                  name: "Remo Bajo Iso Convergente",
                  sets: isDeload ? "1-2" : "3",
                  reps: isMeso3 ? "4-6" : isMeso2 ? "6-8" : "8-10",
                  rir: isDeload ? "3 (-20% kg)" : rirVal,
                  note: "Densidad con vector horizontal de estiramiento."
                }
              ]
            },
            {
              name: "Bloque 3: Gimnasio (Hipertrofia Regional y Aislamiento)",
              exercises: [
                { name: "Pájaros en banco", sets: isDeload ? "1-2" : "2-3", reps: isMeso2 ? "10-12" : "12-14", rir: isDeload ? "3" : rirAccVal, note: "Haz posterior del deltoides." },
                { name: "Elevaciones Laterales (Máquina o Mancuernas)", sets: isDeload ? "1-2" : "2-3", reps: isMeso2 ? "10-12" : "12-14", rir: isDeload ? "3" : rirAccVal, note: "Haz lateral del deltoides." },
                { name: "Extensiones Tras Nuca (Polea)", sets: isDeload ? "1-2" : "2-3", reps: isMeso2 ? "10-12" : "12-14", rir: isDeload ? "3" : rirAccVal, note: "Tríceps: Codo arriba." },
                { name: "Curl Scott o Predicador", sets: isDeload ? "1-2" : "2-3", reps: isMeso2 ? "10-12" : "12-14", rir: isDeload ? "3" : rirAccVal, note: "Bíceps: Codo adelante." }
              ],
              intensityTechnique: weekNumber === 4 || weekNumber === 8 ? "Rest-Pause o DropSet en serie final" : null
            }
          ]
        };

      case "Viernes":
        if (isW12) {
          return {
            title: "Legs 2 - Descanso Total Pre-Examen",
            blocks: [
              {
                name: "Recuperación Neural y Tisular Total",
                exercises: [
                  { name: "Descanso Total de Pesas y Calistenia", sets: "0", reps: "0", rir: "0", note: "Cero estímulo. Cero pesas. Acumulás energía para el sábado. Solo podés caminar o estirar suavemente." }
                ]
              }
            ]
          };
        }
        return {
          title: isDeload ? `Legs 2 - Descarga ${weekNumber === 3 ? '1 (Menstruación)' : weekNumber === 7 ? '2' : '3 (Menstruación)'}` : "Legs 2 - Foco Isquiosurales con Pre-Fatiga",
          blocks: [
            {
              name: "Bloque 1: Calistenia (Fuerza Relativa)",
              exercises: [
                { name: "Descanso / Sin estímulo neural en barras", sets: "0", reps: "0", rir: "0", note: "El SNC se preserva para el peso muerto rumano (RDL)." }
              ]
            },
            {
              name: "Bloque 1 (Inicial): Gimnasio (Aislamiento / Pre-Fatiga)",
              exercises: [
                { name: "Curl Femoral (Sentado o Tumbado)", sets: isDeload ? "1-2" : "2-3", reps: isMeso2 ? "10-12" : "12-14", rir: isDeload ? "3 (-20% kg)" : rirAccVal, note: "Flexión de rodilla para aislar cabeza corta." },
                { name: "Pistol Squat (Asistida con anillas/TRX)", sets: isDeload ? "2" : "2-3", reps: isDeload ? "4-5 (fáciles)" : "5-6", rir: isDeload ? "3" : rirAccVal, note: "Único quad del día. Sissy o Reverse Nordic como opción." }
              ]
            },
            {
              name: "Bloque 2: Gimnasio (Hipertrofia Miofibrilar - Compuestos)",
              exercises: [
                { name: "Peso Muerto Rumano (RDL)", sets: isDeload ? "1-2" : "3", reps: isMeso3 ? "4-6" : isMeso2 ? "6-8" : "8-10", rir: isDeload ? "3 (-20% kg)" : rirVal, note: "Bisagra de cadera. Al estar pre-fatigada, requieres menos peso externo, blindando tus lumbares." },
                { name: "Hip Thrust o Glute Bridge", sets: isDeload ? "1-2" : "3", reps: isMeso3 ? "4-6" : isMeso2 ? "6-8" : "8-10", rir: isDeload ? "3 (-20% kg)" : rirVal, note: "Empuje horizontal para glúteos." }
              ]
            },
            {
              name: "Bloque 3 (Continuación): Gimnasio (Hipertrofia Regional y Core)",
              exercises: [
                { name: "SUPERSET: Máquina Abductora + Máquina Aductora", sets: isDeload ? "1-2" : "2-3", reps: isMeso2 ? "10-12" : "12-14", rir: isDeload ? "3" : rirAccVal, note: "Estabilidad pélvica." },
                { name: "Elevaciones de Talón (Sóleo)", sets: isDeload ? "1-2" : "2-3", reps: isMeso2 ? "10-12" : "12-14", rir: isDeload ? "3" : rirAccVal, note: "Rodilla flexionada." },
                { name: "Extensión Lumbar", sets: isDeload ? "1-2" : "2-3", reps: isMeso2 ? "10-12" : "12-14", rir: isDeload ? "3" : rirAccVal, note: "Salud lumbar." }
              ],
              intensityTechnique: weekNumber === 4 || weekNumber === 8 ? "Curl Femoral ideal para Rest-Pause o Drop Set" : null
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
          title: isDeload ? `Brazos - Descarga ${weekNumber === 3 ? '1 (Menstruación)' : weekNumber === 7 ? '2' : '3 (Menstruación)'}` : "Brazos y Palanca de Core",
          blocks: [
            {
              name: "Bloque 1: Calistenia (Fuerza Relativa y Core)",
              exercises: [
                {
                  name: isDeload ? "Plancha Abdominal Tradicional" : weekNumber === 2 ? "Hollow Body Hold con balanceo (Hollow Rocks)" : weekNumber === 5 || weekNumber === 6 || weekNumber === 7 || weekNumber === 8 ? "Hollow Body Hold Lastrado" : "Hollow Body Hold (Suelo)",
                  sets: isDeload ? "2" : "3",
                  reps: isDeload ? "40 seg (Plancha trad.)" : weekNumber === 10 ? "60 seg" : weekNumber === 9 ? "45 seg" : weekNumber === 8 ? "Al fallo técnico" : weekNumber === 6 ? "30-40 seg (Lastrado)" : weekNumber === 5 ? "20-30 seg (Lastrado)" : weekNumber === 2 ? "10-12 reps" : "20-30 seg",
                  rir: isDeload ? "3" : "0",
                  note: "Retroversión pélvica absoluta. Zona lumbar aplastando el suelo."
                },
                {
                  name: isDeload ? "Elevación de piernas colgada (Hanging Leg Raises) a 90°" : weekNumber === 5 ? "Advanced Tuck Dragon Fly (Dinámico)" : weekNumber === 6 ? "Single-Leg Dragon Fly (Negativas lentas)" : weekNumber === 8 ? "Single-Leg Dragon Fly (Dinámico)" : weekNumber === 9 ? "Advanced Tuck Dragon Fly (Dinámico)" : weekNumber === 10 ? "Single-Leg Dragon Fly (Dinámico a 1 pierna)" : "Tuck Dragon Fly (Negativas)",
                  sets: isDeload ? "2" : "3",
                  reps: isDeload ? "8 reps" : weekNumber === 10 ? "3 reps por pierna" : weekNumber === 9 ? "5-6 reps" : weekNumber === 8 ? "2-3 reps por pierna" : weekNumber === 6 ? "3-4 reps" : weekNumber === 5 ? "3-5 reps" : weekNumber === 2 ? "3-4 reps" : "3-4 reps",
                  rir: isDeload ? "3" : "0",
                  note: isDeload ? "Descarga." : "Controlando la bajada."
                }
              ]
            },
            {
              name: "Bloque 2 y 3: Gimnasio (Aislamiento de Brazos y Corrección)",
              exercises: [
                { name: "Extensiones Tras Nuca (Polea)", sets: "2", reps: isMeso2 ? "10-12" : "12-14", rir: isDeload ? "3 (-20% kg)" : rirAccVal, note: "Tríceps: Codo arriba." },
                { name: "Pushdown Clásico", sets: "2", reps: isMeso2 ? "10-12" : "12-14", rir: isDeload ? "3 (-20% kg)" : rirAccVal, note: "Tríceps: Codo abajo." },
                { name: "Extensión Unilateral", sets: "2", reps: isMeso2 ? "10-12" : "12-14", rir: isDeload ? "3 (-20% kg)" : rirAccVal, note: "Tríceps: Fijo." },
                { name: "Curl Inclinado con Mancuernas", sets: "2", reps: isMeso2 ? "10-12" : "12-14", rir: isDeload ? "3 (-20% kg)" : rirAccVal, note: "Bíceps: Estiramiento." },
                { name: "Curl Predicador", sets: "2", reps: isMeso2 ? "10-12" : "12-14", rir: isDeload ? "3 (-20% kg)" : rirAccVal, note: "Bíceps: Contracción pico." },
                { name: "Curl Martillo", sets: "2", reps: isMeso2 ? "10-12" : "12-14", rir: isDeload ? "3 (-20% kg)" : rirAccVal, note: "Bíceps: Neutro." },
                { name: "Y-raises", sets: isDeload ? "1" : "2", reps: isMeso2 ? "10-12" : "12-14", rir: isDeload ? "3" : rirAccVal, note: "Higiene articular semanal doble." }
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
  newTips: [
    { id: 1, title: "Snack Proteico en Desayuno", desc: "Scoop de proteína distribuido en el desayuno reemplazando los huevos.", days: "Martes, Miércoles y Viernes", badge: "Obligatorio" },
    { id: 2, title: "Dos Frutas al Día", desc: "Consumir dos frutas diarias, idealmente dos cítricos para micronutrientes y recuperación.", days: "Diario", badge: "Cítricos" },
    { id: 3, title: "Consumo Racionado de Carne", desc: "Comer carne solo 3 a 4 veces por semana para controlar la densidad calórica y digestión.", days: "3 a 4 veces/semana", badge: "Control" },
    { id: 4, title: "Hidratación Pre-Entrenamiento", desc: "Tomar 2 litros de agua antes de llegar a entrenar para mantener el rendimiento muscular.", days: "Pre-Entreno", badge: "2 Litros" }
  ],
  colacionesMicroCaloricas: [
    { name: "1 huevo duro", desc: "Pura proteína y grasas saciantes", calories: "~70 kcal" },
    { name: "Medio scoop de proteína en polvo con agua", desc: "Frena el catabolismo y calma la ansiedad por lo dulce", calories: "~60 kcal" },
    { name: "Vegetales de volumen", desc: "Medio choclo hervido, un puñado de tomates cherry o bastones de zanahoria cruda. Mucha masticación, mínimo impacto.", calories: "~30 - 50 kcal" },
    { name: "1 manzana verde", desc: "Aporta fibra dura que retrasa el vaciado gástrico", calories: "~80 kcal" },
    { name: "1 infusión caliente (Té, café, matcha, mate)", desc: "Consumida sola o con un chorrito mínimo de leche proteica. Llena el estómago.", calories: "0 - 15 kcal" },
    { name: "2 galletas Cachafaz", desc: "Te dan el factor dulce y crujiente exacto para mantener la energía mental frente a la pantalla. Es tu límite de carbohidratos rápidos controlado a la perfección.", calories: "~133 kcal" },
    { name: "1 porción de gelatina light (sin azúcar)", desc: "Volumen puro a costo cero. Llena el estómago y engaña al cerebro con textura dulce sin generar ningún tipo de impacto calórico.", calories: "~10 kcal" },
    { name: "1 bocadito helado de yogur, proteína y frutos rojos", desc: "Tu salvavidas táctico congelado. Una micro-dosis de aminoácidos con textura de postre para matar la ansiedad al instante.", calories: "~18 kcal" },
    {
      name: "1 bocadito de Súper-Trufa de cacao y proteína",
      desc: "Bloque anabólico oscuro. Receta para 10 bocaditos: 1 scoop (30g) proteína Integralmedica, 40g cacao amargo sin azúcar, 70ml café negro frío / leche descremada, 1 cda (15g) Yogur Griego La Serenísima, edulcorante a gusto. (Congelar 15 min y cortar en 10 cuadraditos).",
      calories: "~31 kcal",
      macros: "P: ~4.4g | C: ~2.9g | G: ~1g"
    }
  ],
  superTrufaRecipe: {
    title: "Receta Táctica: Súper-Trufa de Cacao y Proteína",
    yield: "1 Bloque de 10 Bocaditos",
    perServingMacros: "Calorías: ~31 kcal | Proteínas: ~4.4g | Carbohidratos: ~2.9g | Grasas: ~1g",
    ingredients: [
      "1 scoop (30g) de proteína Integralmedica.",
      "40g de cacao amargo sin azúcar.",
      "70ml de café negro frío (o leche descremada).",
      "1 cucharada (15g) de Yogur Griego La Serenísima.",
      "Gotas de edulcorante a gusto."
    ],
    execution: [
      "1. Polvos: Mezcla en un bol el scoop de proteína y los 40g de cacao amargo.",
      "2. Hidratación: Agrega los 70ml de líquido muy de a poco mientras revuelves constantemente.",
      "3. El Cemento: Cuando esté casi integrado, suma el yogur griego y el edulcorante. Mezcla con fuerza hasta obtener una pasta súper espesa y pesada.",
      "4. El Moldeado: Pasa la mezcla a un trozo de papel film, cúbrela y dale forma de bloque cuadrado o rectangular con las manos.",
      "5. El Frío: Llévalo al freezer por 15 minutos o a la heladera hasta que solidifique.",
      "6. La División: Retira el film, espolvorea una pizca extra de cacao por encima y corta el bloque con un cuchillo en 10 cuadraditos exactos."
    ]
  },
  preWorkoutSnacks: [
    { name: "Dátiles", desc: "Consumir 2 o 3 dátiles. Son pura glucosa natural de absorción rapidísima." },
    { name: "Galleta de Arroz con Miel", desc: "1 o 2 galletas de arroz con una capa muy fina de miel o mermelada." },
    { name: "Cafeína Anhidra en Cápsulas", desc: "Una cápsula de 200mg consumida entre 45 y 60 minutos antes de la actividad. Su efecto dura hasta 4 o 5 horas, potencia el rendimiento, alivia la fatiga y disminuye la percepción del esfuerzo. Cero calorías", calories: "0 calorías" }
  ],
  bloque1: {
    title: "Bloque 1: Desayunos y Meriendas",
    options: [
      {
        id: "electrica",
        name: "Opción 1 (Eléctrica)",
        ingredients: [
          "1 rebanada (25g a 30g) de pan integral o artesano.",
          "1 huevo entero + 2 a 3 claras.",
          "Infusión de té.",
          "1 cucharada de queso untable (solo para sabor).",
          "1 puñado de nueces (30g)."
        ],
        macros: "Calorías: ~415 kcal | Proteínas: 21g | Carbohidratos: 20g | Grasas: 28g",
        extraNote: "1 rebanada de pan integral o artesano (25g a 30g) = 2 galletas de arroz y usar 2 huevos completos. (Si tomas té o café solo, mantén los agregados extra de proteína como los listaste: 1 huevo extra, 2 claras, 30g queso, 2 fetas jamón, 2 cdas ricota o ½ scoop de proteína)."
      },
      {
        id: "anabolica",
        name: "Opción 2 (Anabólica - Ajuste: Mitad de nueces)",
        ingredients: [
          "50g del mix de pancakes Granger preparados + 1 huevo + 40ml de leche.",
          "150cc de leche proteica en tu infusión.",
          "1 taza de frutos rojos y 1 cucharadita de miel (solo 1, estricta).",
          "1/2 puñado de nueces (15g)."
        ],
        macros: "Calorías: ~510 kcal | Proteínas: 33g | Carbohidratos: 52g | Grasas: 19g"
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
        name: "Opción 4 (Pancake proteico casero)",
        ingredients: [
          "1 huevo entero.",
          "1/2 scoop de proteína en polvo 15gr.",
          "50gr de Yogurt Griego.",
          "Esencia de Vainilla.",
          "Polvo para hornear.",
          "1 manzana verde y 1 cucharadita de miel.",
          "1/2 puñado de nueces (15g)."
        ],
        macros: "Calorías: ~350 kcal | Proteínas: 22g | Carbohidratos: 26g | Grasas: 18g"
      },
      {
        id: "falso_brownie",
        name: "Opción 5 (Falso Brownie - Receta Completa)",
        ingredients: [
          "2 bananas maduras.",
          "1 huevo.",
          "1/2 taza de cacao amargo.",
          "Leche (c/n).",
          "1 cdita de polvo de hornear.",
          "1 scoop de proteína.",
          "(Opcional: frutos secos, chips o lo que prefieras - no contabilizados en los macros base)."
        ],
        macros: "Calorías: ~509 kcal | Proteínas: 46.6g | Carbohidratos: 78g | Grasas: 12g",
        extraNote: "Nota de cálculo: Al prepararse en una budinera, estos números corresponden a la receta entera. Si la divides exactamente por la mitad para encajar en tus meriendas de déficit, cada porción te aportaría: Calorías: ~254 kcal | Proteínas: 22g | Carbohidratos: 39g | Grasas: 6g"
      }
    ]
  },
  bloque2: {
    title: "Bloque 2: Comidas Carbo-Proteicas (Almuerzos o Cenas de Carga)",
    rule: "Ideal para tu comida post-entrenamiento PPL",
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
          "180g de bife magro pesado en crudo.",
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
          "1 huevo entero + 2 claras y 1 feta (30g) de queso light por encima de las porciones.",
          "Ensalada libre de acompañamiento."
        ],
        macros: "Calorías: ~480 kcal | Proteínas: 32g | Carbohidratos: 61g | Grasas: 13g"
      },
      {
        id: "completa",
        name: "Opción 5 (Ensalada Completa)",
        ingredients: [
          "Base libre de ensalada de greens y tomate.",
          "1 lata de atún o 2 huevos con 1 feta (30g) de queso.",
          "1/2 palta chica.",
          "4 cucharadas soperas de garbanzos, lentejas, choclo, o 6 cucharadas de quinoa hervida."
        ],
        macros: "Calorías: ~400 kcal | Proteínas: 37g | Carbohidratos: 41g | Grasas: 11g"
      },
      {
        id: "atun_wrap",
        name: "Wrap XL Blindado (Post-Entreno)",
        ingredients: [
          "1 Rapidita Integral XL.",
          "120g de pechuga de pollo desmenuzada, carne magra a la plancha o 1 lata de atún al natural.",
          "Base libre de vegetales de volumen: lechuga crujiente, tomates cherry, pepino y zanahoria.",
          "Aderezo zero grasas: abundante salsa de yogur (natural o griego) con jugo de limón, sal, pimienta y cebolla de verdeo."
        ],
        macros: "Calorías: ~350 kcal | Proteínas: 32g | Carbohidratos: 35g | Grasas: 8g"
      },
      {
        id: "vegetariana_convertida",
        name: "Opción 2 (Vegetariana Ligera - Sin Calabaza)",
        ingredients: [
          "Omelette de 1 huevo entero y 2 claras.",
          "1 feta (30g) de queso magro o light.",
          "1/2 puñado de nueces (15g).",
          "Ensalada verde libre.",
          "150g de papa o camote (pesados en crudo)."
        ],
        macros: "Ajuste: Se eliminó la calabaza para esta variante."
      }
    ]
  },
  bloque3: {
    title: "Bloque 3: Comidas Solo Proteicas (Ajustado con Calabaza)",
    rule: "Ideal para la cena los días de tren superior o menor intensidad",
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
        name: "Opción 2 (Vegetariana Ligera - Ajuste de nueces)",
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
        id: "wrap_nube_blindado",
        name: "Wrap de Nube Blindado",
        ingredients: [
          "1 Rapidita en formato \"pan de nube\" (armada con 2 claras batidas a punto nieve y 1 yema, horneada).",
          "1 lata de atún al natural (120g escurrido).",
          "1/2 palta (aprox. 60g) cortada en láminas o en formato puré.",
          "Base libre de vegetales de volumen: lechuga, tomate, pepino y zanahoria.",
          "Aderezo fresco: abundante salsa de yogur natural con jugo de limón, pepino picado y cebolla."
        ],
        macros: "Calorías: ~340 kcal | Proteínas: 39g | Carbohidratos: 11g | Grasas: 15g"
      },
      {
        id: "lomo_nube",
        name: "Opción 5 - Sándwich Táctico (Lomo en Pan de Nube)",
        ingredients: [
          "150g de lomo magro a la plancha.",
          "2 tapas de pan de nube (armado con 3 claras a punto nieve, 2 yemas y 1 cda queso crema, horneadas).",
          "Lechuga y tomate libre.",
          "1 cda de aderezo zero (mostaza o salsa de yogur con limón y verdeo)."
        ],
        macros: "Calorías: ~445 kcal | Proteínas: 51g | Carbohidratos: 4g | Grasas: 23g"
      }
    ]
  }
};

export const gtgSchedule = {
  Lunes: {
    gymFocus: "Gym: Pull Pesado",
    movA: { name: "Ranita / Handstand", pauses: 4, desc: "4 pausas Pomodoro dedicadas a práctica de Ranita o Handstand." },
    movB: { name: "Flexiones", pauses: 4, desc: "4 pausas Pomodoro de 3 flexiones por serie (50% de máx evaluado)." },
    restriction: "Restricción respetada: Cero dominadas (día de Pull pesado en gym).",
    pullupsSuspended: true,
    pushupsSuspended: false
  },
  Martes: {
    gymFocus: "Gym: Push Pesado",
    movA: { name: "Ranita / Handstand", pauses: 4, desc: "4 pausas Pomodoro dedicadas a Ranita o Handstand." },
    movB: { name: "Dominadas", pauses: 4, desc: "4 pausas Pomodoro de 2 dominadas por serie (50% de máx evaluado)." },
    restriction: "Restricción respetada: Cero flexiones (día de Push pesado en gym).",
    pullupsSuspended: false,
    pushupsSuspended: true
  },
  Miércoles: {
    gymFocus: "Gym: Cuádriceps",
    movA: { name: "Descanso GtG", pauses: 0, desc: "Cero exigencia a las muñecas. Pura recuperación del sistema nervioso." },
    movB: { name: "Descanso GtG", pauses: 0, desc: "Descanso total de pausas Pomodoro de fuerza." },
    restriction: "Descanso total de GTG para recuperación articular y neural.",
    pullupsSuspended: true,
    pushupsSuspended: true
  },
  Jueves: {
    gymFocus: "Gym: Tren Superior Híbrido",
    movA: { name: "Ranita / Handstand", pauses: 4, desc: "4 pausas Pomodoro dedicadas a Ranita o Handstand." },
    movB: { name: "Compresiones de Flexores (Día 1 de 3)", pauses: 4, desc: "4 pausas Pomodoro de trabajo de pica/compresión de core." },
    restriction: "Restricción respetada: Cero dominadas y cero flexiones.",
    pullupsSuspended: true,
    pushupsSuspended: true
  },
  Viernes: {
    gymFocus: "Gym: Cadena Posterior (Isquios)",
    movA: { name: "Descanso GtG", pauses: 0, desc: "Recuperación total del SNC y articulaciones." },
    movB: { name: "Descanso GtG", pauses: 0, desc: "Sin estímulo de fuerza en pausas Pomodoro." },
    restriction: "Descanso total de GTG para recuperar cadera y muñecas.",
    pullupsSuspended: true,
    pushupsSuspended: true
  },
  Sábado: {
    gymFocus: "Gym: Brazos y Core",
    movA: { name: "Ranita / Handstand", pauses: 4, desc: "4 pausas Pomodoro de Ranita / Handstand." },
    movB: { name: "Compresiones de Flexores (Día 2 de 3)", pauses: 4, desc: "4 pausas de compresiones. (Opción: 2 pausas compresiones + 2 flexiones)." },
    restriction: "Volumen opcional de empuje si los hombros están frescos.",
    pullupsSuspended: true,
    pushupsSuspended: false
  },
  Domingo: {
    gymFocus: "Descanso total del Gym",
    movA: { name: "Ranita / Handstand", pauses: 4, desc: "4 pausas Pomodoro de Ranita / Handstand." },
    movB: { name: "Compresiones de Flexores (Día 3 de 3)", pauses: 4, desc: "4 pausas de compresiones. (Opción: reemplazar por dominadas si la espalda está fresca)." },
    restriction: "Acondicionamiento ligero y práctica de equilibrio.",
    pullupsSuspended: false,
    pushupsSuspended: true
  }
};

export const gtgRules = {
  definition: "El Método Grease the Groove (GTG) está diseñado para optimizar la coordinación del sistema neuromuscular mediante ejecuciones repetidas bajo frescura neurológica total (40%-60% de tu máximo).",
  rules: [
    { title: "Intensidad Estricta", desc: "2 dominadas y 3 flexiones por serie (50% de tu capacidad máxima evaluada). Cero fallo muscular." },
    { title: "Frecuencia Máxima", desc: "Máximo 8 series dispersas a lo largo de la jornada laboral de Pomodoro." },
    { title: "Suspensión en Descarga", desc: "Durante las semanas de descarga (Semanas 3, 7 y 11), el GTG de flexiones y dominadas queda ESTRICTAMENTE PROHIBIDO para disipar fatiga del SNC." },
    { title: "Restricción por Días Pesados", desc: "Días de Pull pesado en gym: dominadas suspendidas. Días de Push pesado en gym: flexiones suspendidas." }
  ]
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
