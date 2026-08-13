// Structured data representing the training and nutrition macrocycle based exclusively on "Rutina_Diana.pdf"

export const macrocycleWeeks = [
  {
    number: 1,
    mesocycle: 1,
    mesocycleName: "Mesociclo 1: Acondicionamiento Neuromuscular y Mielinización (Semanas 1 a 4)",
    focus: "Semana 1: Descarga y Resíntesis (Menstruación)\nRegla Biomecánica y Metodología de la Semana: Entramos en la fase crítica de disipación de fatiga. Tu cuerpo está lidiando con la caída de estrógenos, por lo que la recuperación y la protección articular son la prioridad absoluta.\nCalistenia: Metodología de Rango Completo Asistido (Bandas Pesadas). El objetivo es oxigenar los tejidos; ejecución fluida usando la máxima asistencia elástica para no generar lactato.\nGimnasio: Se cortan las series totales a la mitad (si tenías 3, haces 1 o 2; si tenías 2, haces 1), se reduce la carga un 20% respecto a lo que venías usando en la Semana 2, y se establece un RIR 3 general innegociable.",
    rirGeneral: 3,
    rirAccessories: 3,
    intensityLabel: "Descarga y Resíntesis (Menstruación) - RIR 3, -20% peso",
    isDeload: true,
    isPeaking: false
  },
  {
    number: 2,
    mesocycle: 1,
    mesocycleName: "Mesociclo 1: Acondicionamiento Neuromuscular y Mielinización (Semanas 1 a 4)",
    focus: "Semana 2: Fase de Adaptación Estructural y Neural\nRegla Biomecánica de la Semana: Ejecución robótica. Todo el trabajo de calistenia se hace con banda elástica para asegurar el rango completo. En el gimnasio, cortas la serie sabiendo que podías hacer 2 repeticiones más con postura perfecta (RIR 2 general). (Nota clínica: Si esta semana coincide con la menstruación, aplicar reglas de descarga: series a la mitad, -20% de peso, RIR 3).",
    rirGeneral: 2,
    rirAccessories: 2,
    intensityLabel: "Fase de Adaptación Estructural y Neural (RIR 2)",
    isDeload: false,
    isPeaking: false
  },
  {
    number: 3,
    mesocycle: 1,
    mesocycleName: "Mesociclo 1: Acondicionamiento Neuromuscular y Mielinización (Semanas 1 a 4)",
    focus: "Semana 3: Clímax Neural y Estructural\nRegla Biomecánica y Fisiológica de la Semana: Máximo estrés neurológico y muscular para forzar la supercompensación antes de cambiar de mesociclo.\nCalistenia: Metodología de Entrenamiento Excéntrico (Negativas Lentas). Ejecutas tus repeticiones normales y, en la última o dos últimas repeticiones de la serie, resistes la fase excéntrica (bajada) durante 4 a 5 segundos. Llegas a un RIR 0-1.\nGimnasio: Las series principales combinan esfuerzos de RIR 1 y RIR 0 (fallo) manteniéndose en 8-10 repeticiones. Los ejercicios accesorios llegan al fallo absoluto (RIR 0).\nMetodologías de Intensidad: Única y exclusivamente en la última serie de los ejercicios accesorios de gimnasio, aplicarás un Drop Set (bajar el peso un 20% y seguir hasta el fallo) o un Rest-Pause (descansar 10 segundos y sacar 2-3 reps extra).",
    rirGeneral: "1 - 0",
    rirAccessories: 0,
    intensityLabel: "Clímax Neural y Estructural (RIR 1-0 / RIR 0)",
    isDeload: false,
    isPeaking: false
  },
  {
    number: 4,
    mesocycle: 1,
    mesocycleName: "Mesociclo 1: Acondicionamiento Neuromuscular y Mielinización (Semanas 1 a 4)",
    focus: "Semana 4: Fase de intensificación.\nRegla Biomecánica: Mantienes el mismo rango de 8 a 10 repeticiones en los ejercicios principales y de 12 a 14 repeticiones en los accesorios, pero ajustas el peso de forma milimétrica para que todo el entrenamiento se ejecute a un RIR 1 estricto. El sistema nervioso central transita hacia una mayor densidad de carga, obligándote a reclutar unidades motoras de alto umbral bajo fatiga controlada, pero sin tocar el fallo absoluto (RIR 0).",
    rirGeneral: 1,
    rirAccessories: 1,
    intensityLabel: "Fase de intensificación (RIR 1 estricto)",
    isDeload: false,
    isPeaking: false
  },
  {
    number: 5,
    mesocycle: 2,
    mesocycleName: "Mesociclo 2: Rango de Hipertrofia Pesada (Semanas 5 a 8)",
    focus: "Semana 5 : Descarga y Resíntesis (Menstruación)\nRegla Biomecánica y Metodología de la Semana: Entramos en la fase crítica de disipación de fatiga. Tu cuerpo está lidiando con la caída de estrógenos, por lo que la recuperación y la protección articular son la prioridad absoluta.\n\nCalistenia: Metodología de Rango Completo Asistido (Bandas Pesadas). El objetivo es oxigenar los tejidos; ejecución fluida usando la máxima asistencia elástica para no generar lactato.\nGimnasio: Se cortan las series totales a la mitad (si tenías 3, haces 1 o 2; si tenías 2, haces 1), se reduce la carga un 20% respecto a lo que venías usando en la Semana 2, y se establece un RIR 3 general innegociable.",
    rirGeneral: 3,
    rirAccessories: 3,
    intensityLabel: "Descarga y Resíntesis (Menstruación) - RIR 3, -20% peso",
    isDeload: true,
    isPeaking: false
  },
  {
    number: 6,
    mesocycle: 2,
    mesocycleName: "Mesociclo 2: Rango de Hipertrofia Pesada (Semanas 5 a 8)",
    focus: "Semana 6: Reinicio y Choque Isométrico (Adaptación Pesada)\nRegla Biomecánica y Fisiológica de la Semana: Vienes de masacrar tu sistema en la semana de clímax anterior, por lo que reseteamos la fatiga del Sistema Nervioso Central volviendo strictly a un RIR 2 general.\n\nCalistenia: Metodología de Isometrías Estratégicas. Introducimos Tiempos Bajo Tensión (TUT) prolongados. Harás una pausa estricta de 2 segundos en el punto de máxima contracción concéntrica de cada repetición. Esto regenera el tejido conectivo, vence el stress shielding y consolida la fuerza pura.\nGimnasio: Fase de Adaptación Pesada. Aumentamos los kilos en la barra/máquina. Los ejercicios principales bajan al rango de 6 a 8 repeticiones. Los ejercicios accesorios bajan al rango de 10 a 12 repeticiones.",
    rirGeneral: 2,
    rirAccessories: 2,
    intensityLabel: "Reinicio y Choque Isométrico (Adaptación Pesada - RIR 2)",
    isDeload: false,
    isPeaking: false
  },
  {
    number: 7,
    mesocycle: 2,
    mesocycleName: "Mesociclo 2: Rango de Hipertrofia Pesada (Semanas 5 a 8)",
    focus: "Semana 7: Clímax Estructural y Miotrauma Controlado\nRegla Biomecánica y Fisiológica de la Semana: El máximo daño tisular y estrés neurológico tolerable del mesociclo 2.\n\nCalistenia: Metodología de Negativas Puras Lastradas. Omites la fase de subida (saltas o te asistes) y te enfocas exclusivamente en resistir la bajada durante 4-5 segundos exactos, utilizando chaleco o lastre para asegurar que alcanzas el fallo excéntrico absoluto (RIR 0).\nGimnasio: Clímax Pesado. Mantienes los pesos altos (6 a 8 repeticiones en principales, 10 a 12 en accesorios), pero empujas cada serie hasta un RIR 0 innegociable.\nMetodologías de Intensidad: Única y exclusivamente en la última serie de los accesorios de gimnasio aplicarás un Drop Set (bajar peso y seguir al fallo) o un Rest-Pause (descansar 10 seg y sacar reps extra).",
    rirGeneral: 0,
    rirAccessories: 0,
    intensityLabel: "Clímax Estructural y Miotrauma Controlado (RIR 0)",
    isDeload: false,
    isPeaking: false
  },
  {
    number: 8,
    mesocycle: 2,
    mesocycleName: "Mesociclo 2: Rango de Hipertrofia Pesada (Semanas 5 a 8)",
    focus: "Semana 8: Mecanotransducción Profunda e Intensificación Pesada\nRegla Biomecánica y Fisiológica de la Semana: El sistema nervioso ya asimiló las cargas pesadas en la Semana 5; ahora empujamos esa carga hacia la fatiga controlada.\n\nCalistenia: Metodología de Parciales Alargadas (LML - Long Muscle Length). Todo el trabajo se ejecuta exclusivamente en el tercio inferior del movimiento (el punto de máximo estiramiento). No hay bloqueo ni extensión completa. Esto explota la rigidez de la titina (proteína muscular) como mecanosensor, induciendo sarcomerogénesis (crecimiento de nuevas fibras en serie). RIR 1 estricto.\nGimnasio: Fase de Intensificación Pesada. Mantienes los pesos altos y los rangos de la semana anterior (6-8 repeticiones principales, 10-12 accesorios), pero empujas cada serie hasta un RIR 1 innegociable.",
    rirGeneral: 1,
    rirAccessories: 1,
    intensityLabel: "Mecanotransducción Profunda e Intensificación Pesada (RIR 1)",
    isDeload: false,
    isPeaking: false
  },
  {
    number: 9,
    mesocycle: 3,
    mesocycleName: "Mesociclo 3: El Bloque de Fuerza Máxima (Semanas 9 a 12)",
    focus: "Semana 9: Descarga y Resíntesis (Menstruación)\nRegla Biomecánica y Metodología de la Semana: Entramos en la fase crítica de disipación de fatiga. Tu cuerpo está lidiando con la caída de estrógenos, por lo que la recuperación y la protección articular son la prioridad absoluta.\n\nCalistenia: Metodología de Rango Completo Asistido (Bandas Pesadas). El objetivo es oxigenar los tejidos; ejecución fluida usando la máxima asistencia elástica para no generar lactato.\nGimnasio: Se cortan las series totales a la mitad (si tenías 3, haces 1 o 2; si tenías 2, haces 1), se reduce la carga un 20% respecto a lo que venías usando en la Semana 2, y se establece un RIR 3 general innegociable.",
    rirGeneral: 3,
    rirAccessories: 3,
    intensityLabel: "Descarga y Resíntesis (Menstruación) - RIR 3, -20% peso",
    isDeload: true,
    isPeaking: false
  },
  {
    number: 10,
    mesocycle: 3,
    mesocycleName: "Mesociclo 3: El Bloque de Fuerza Máxima (Semanas 9 a 12)",
    focus: "Semana 10: Adaptación a la Densidad y Fuerza Máxima\nRegla Biomecánica y Fisiológica de la Semana: Entrenar la vía anaeróbica láctica y acostumbrar al sistema nervioso a mover cargas casi máximas sin llegar al fallo, protegiendo el patrón motor.\n\nCalistenia: Metodología de Series Cluster Lastrado (Conglomerados). En lugar de hacer una serie continua de 6 repeticiones, harás micro-series de 1 o 2 repeticiones intercaladas con descansos de 15 segundos (Ejemplo: 2 reps + 15 seg pausa + 2 reps + 15 seg pausa + 2 reps = 1 Serie Cluster completa). Esto repone el ATP, evade la acidez extrema y permite usar lastre manteniendo una técnica inmaculada. RIR 2 estricto.\nGimnasio: Adaptación a la Fuerza. Los ejercicios principales (grandes empujes y tracciones) bajan drásticamente al rango de 4 a 6 repeticiones, dejando un RIR 2. Los ejercicios accesorios cambian al rango de 8 a 10 repeticiones a un RIR 1.",
    rirGeneral: 2,
    rirAccessories: 1,
    intensityLabel: "Adaptación a la Densidad y Fuerza Máxima (RIR 2 / RIR 1)",
    isDeload: false,
    isPeaking: false
  },
  {
    number: 11,
    mesocycle: 3,
    mesocycleName: "Mesociclo 3: El Bloque de Fuerza Máxima (Semanas 9 a 12)",
    focus: "Semana 11: TEST y Rendimiento Absoluto (Tapering Agresivo)\nRegla Biomecánica y Fisiológica de la Semana: El sistema se prepara para su pico de rendimiento (Peaking).\n\nCalistenia (Lunes a Jueves): Activación Neural. Solo 2 series explosivas de 2-3 repeticiones, RIR 3-4. Cero fatiga.\nGimnasio (Principales Lunes a Viernes): Prueba de fuerza. Manejas el rango pesado de 3 a 5 repeticiones. Buscas levantar la carga máxima de tu ciclo.\nGimnasio (Accesorios Lunes a Viernes): Castración de Volumen. Todos los accesorios se reducen a 2 series estrictas. Quedan prohibidos los Drop Sets, Rest-Pause y el RIR 0. Todo el aislamiento se ejecuta a un RIR 2 para no generar inflamación periférica.\n\nSÁBADO (EL GRAN TEST): AMRAP puro en Calistenia a RIR 0, seguido de la destrucción metabólica total de los brazos en el gimnasio.",
    rirGeneral: 0,
    rirAccessories: 2,
    intensityLabel: "TEST y Rendimiento Absoluto / PEAKING (RIR 0 en Test)",
    isDeload: false,
    isPeaking: true
  },
  {
    number: 12,
    mesocycle: 3,
    mesocycleName: "Mesociclo 3: El Bloque de Fuerza Máxima (Semanas 9 a 12)",
    focus: "Semana 12: Expansión del Umbral Láctico e Intensificación de Fuerza\nRegla Biomecánica y Fisiológica de la Semana (Fase Lútea Tardía): Soportar la hinchazón celular (cell swelling) sin colapsar el sistema nervioso.\n\nCalistenia: Metodología de Clusters Densos. Aumentamos las repeticiones dentro de cada micro-serie del cluster. El SNC se expone a una alta demanda de resistencia, pero queda terminantemente prohibido llegar al fallo en los movimientos en barra/suelo. RIR 1 estricto.\nGimnasio (Principales): La carga sube a su punto máximo. Te manejas estrictamente en 4 a 5 repeticiones dejando un RIR 1 innegociable; queda prohibido el RIR 0 en grandes empujes y tracciones para proteger tu columna y sistema nervioso.\nGimnasio (Accesorios): Destrucción metabólica. Todos los accesorios van al RIR 0 (fallo absoluto) en el rango de 8 a 10 repeticiones. Utilización obligatoria de metodologías de intensidad (Rest-Pause o Drop Sets) única y exclusivamente en la última serie de los accesorios.",
    rirGeneral: 1,
    rirAccessories: 0,
    intensityLabel: "Expansión del Umbral Láctico e Intensificación (RIR 1 / RIR 0 Acc)",
    isDeload: false,
    isPeaking: false
  }
];

export const weeklySchedule = [
  { day: "Lunes", label: "PUSH: 10 min HS + 60 min Fuerza + 20 min Cardio LISS", target: "Push" },
  { day: "Martes", label: "PULL: 10 min HS + 60 min Fuerza + 20 min Cardio LISS", target: "Pull" },
  { day: "Miércoles", label: "LEGS 1 (Quads): 5 min Calentamiento + 60 min Fuerza + 20 min Movilidad Pesada", target: "Legs1" },
  { day: "Jueves", label: "TREN SUPERIOR HÍBRIDO: 10 min HS + 60 min Fuerza + 20 min Cardio LISS", target: "Upper" },
  { day: "Viernes", label: "LEGS 2 (Isquios/Glúteo): 5 min Calentamiento + 60 min Fuerza + 20 min Movilidad Pesada", target: "Legs2" },
  { day: "Sábado", label: "BRAZOS Y CORE (Comodín): 10 min HS + 45 min Fuerza + 30 min Cardio LISS", target: "Arms" },
  { day: "Domingo", label: "DESCANSO ACTIVO: 20 min Movilidad Pesada + Caminata Ligera (NEAT)", target: "Recovery" }
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

const meso1Routines = {
  1: {
    Lunes: {
      title: "LUNES: Día 1 - PUSH (Enfoque Empujes) - Descarga y Resíntesis",
      blocks: [
        {
          name: "Bloque 0: Neural (15 Minutos)",
          exercises: [
            { name: "Movilidad de activación", sets: "1", reps: "5 min", rir: "N/A", note: "Movilidad articular" },
            { name: "Práctica de Handstand", sets: "1", reps: "5 min", rir: "N/A", note: "Calentamiento de muñecas, 1 serie de activación core." },
            { name: "Ranita", sets: "1", reps: "3 min", rir: "N/A", note: "Posición isometría" },
            { name: "Pike Holds", sets: "3", reps: "30 seg", rir: "N/A", note: "3 series x 30’" }
          ]
        },
        {
          name: "Bloque 1: Calistenia (Rango Completo Asistido / RIR 3)",
          exercises: [
            { name: "Flexiones en Pica (Pike Push-ups)", sets: "1-2", reps: "5-6", rir: "3", note: "Ejecución terapéutica. Si sientes pesadez, apoyas las rodillas en un cajón." },
            { name: "Fondos en Paralelas (Dips) con Banda Pesada", sets: "1-2", reps: "6-8", rir: "3", note: "Bajas controlando y subes fluido, sin forzar el esternón." },
            { name: "Hollow Body Hold (Suelo)", sets: "1-2", reps: "15-20 seg", rir: "3", note: "Retroversión pélvica, cortas antes de sentir ardor." }
          ]
        },
        {
          name: "Bloque 2: Gimnasio - Músculos Grandes (-20% Peso / RIR 3)",
          exercises: [
            { name: "Press en Banca (Máquina)", sets: "1-2", reps: "8-10", rir: "3", note: "-20% Peso" },
            { name: "Press Militar con Mancuernas", sets: "1", reps: "8-10", rir: "3", note: "-20% Peso" }
          ]
        },
        {
          name: "Bloque 3: Gimnasio - Aislamiento (-20% Peso / RIR 3)",
          exercises: [
            { name: "Aperturas Pec-Dec", sets: "1", reps: "12-14", rir: "3", note: "-20% Peso" },
            { name: "Elevaciones Laterales", sets: "1-2", reps: "12-14", rir: "3", note: "-20% Peso" },
            { name: "Pushdown Clásico (Soga)", sets: "1", reps: "12-14", rir: "3", note: "-20% Peso" },
            { name: "Extensiones Tras Nuca (Polea)", sets: "1", reps: "12-14", rir: "3", note: "-20% Peso" }
          ]
        },
        {
          name: "Cierre",
          exercises: [
            { name: "Cardio LISS", sets: "1", reps: "20 min", rir: "N/A", note: "20 minutos de Cardio LISS." }
          ]
        }
      ]
    },
    Martes: {
      title: "MARTES: Día 2 - PULL (Enfoque Tracción) - Descarga y Resíntesis",
      blocks: [
        {
          name: "Bloque 0: Neural (15 Minutos)",
          exercises: [
            { name: "Movilidad de activación", sets: "1", reps: "5 min", rir: "N/A", note: "Movilidad articular" },
            { name: "Práctica de Handstand", sets: "1", reps: "5 min", rir: "N/A", note: "Calentamiento de muñecas, 1 serie de activación core." },
            { name: "Ranita", sets: "1", reps: "3 min", rir: "N/A", note: "Posición isometría" },
            { name: "Pike Holds", sets: "3", reps: "30 seg", rir: "N/A", note: "3 series x 30’" }
          ]
        },
        {
          name: "Bloque 1: Calistenia (Rango Completo Asistido / RIR 3)",
          exercises: [
            { name: "Dominadas Pronas (Pull-ups) con Banda Pesada", sets: "1-2", reps: "6-8", rir: "3", note: "La banda debe hacer el trabajo pesado; concéntrate 100% en la retracción escapular." },
            { name: "Dominadas Australianas (Remos barra baja)", sets: "1-2", reps: "8-10", rir: "3", note: "RIR 3" },
            { name: "Dragon Flag Asistido con Banda", sets: "1-2", reps: "4-6", rir: "3", note: "Rotación Semanal 3: La banda asiste en la fase de máximo estiramiento para proteger la lumbar. https://www.instagram.com/reel/DbH3l7FI3Vj/?igsh=OWFkeHVieGQydjhz" }
          ]
        },
        {
          name: "Bloque 2: Gimnasio - Músculos Grandes (-20% Peso / RIR 3)",
          exercises: [
            { name: "Remo con Pecho Apoyado (Palancas/Barra T)", sets: "1", reps: "8-10", rir: "3", note: "-20% Peso" }
          ]
        },
        {
          name: "Bloque 3: Gimnasio - Aislamiento y Agarre (-20% Peso / RIR 3)",
          exercises: [
            { name: "Pullover en Polea o Máquina", sets: "1", reps: "12-14", rir: "3", note: "-20% Peso" },
            { name: "Facepull", sets: "1", reps: "12-14", rir: "3", note: "-20% Peso" },
            { name: "Curl Inclinado con Mancuernas", sets: "1", reps: "12-14", rir: "3", note: "-20% Peso" },
            { name: "Curl Martillo", sets: "1", reps: "12-14", rir: "3", note: "-20% Peso" },
            { name: "Fuerza de Agarre: Dead Hang (Colgado pasivo en barra)", sets: "1", reps: "Moderado", rir: "3", note: "1 serie x tiempo tolerable moderado. (Solo para descomprimir columna)." }
          ]
        },
        {
          name: "Cierre",
          exercises: [
            { name: "Cardio LISS", sets: "1", reps: "20 min", rir: "N/A", note: "20 minutos de Cardio LISS." }
          ]
        }
      ]
    },
    Miércoles: {
      title: "MIÉRCOLES: Día 3 - LEGS 1 (Foco Cuádriceps Aislado) - Descarga y Resíntesis",
      blocks: [
        {
          name: "Bloque 0: Activación Articular (5 Minutos)",
          exercises: [
            { name: "Rotaciones 90/90, Couch Stretch y Dorsiflexión", sets: "1", reps: "5 min", rir: "N/A", note: "Prohibido el trabajo de Handstand para resetear el SNC." }
          ]
        },
        {
          name: "Bloque 1: Gimnasio - Tensión Mecánica Pura (-20% Peso / RIR 3)",
          exercises: [
            { name: "Sillón de Cuádriceps (Extensiones)", sets: "1-2", reps: "10-12", rir: "3", note: "-20% Peso" },
            { name: "Prensa Inclinada / Sentadilla Hack", sets: "1-2", reps: "8-10", rir: "3", note: "-20% Peso" },
            { name: "Sentadillas Búlgaras en Smith", sets: "1", reps: "8-10", rir: "3", note: "Torso erguido, sin forzar la profundidad máxima. -20% Peso" },
            { name: "Aductores", sets: "1", reps: "12-14", rir: "3", note: "-20% Peso" },
            { name: "Elevaciones de Talón de Pie", sets: "1-2", reps: "12-14", rir: "3", note: "-20% Peso" }
          ]
        },
        {
          name: "Cierre",
          exercises: [
            { name: "Movilidad Pesada", sets: "1", reps: "20 min", rir: "N/A", note: "20 minutos de Movilidad Pesada (Clase de Flex / Spagat / Pancake)." }
          ]
        }
      ]
    },
    Jueves: {
      title: "JUEVES: Día 4 - TREN SUPERIOR HÍBRIDO - Descarga y Resíntesis",
      blocks: [
        {
          name: "Bloque 0: Neural (15 Minutos)",
          exercises: [
            { name: "Movilidad de activación", sets: "1", reps: "5 min", rir: "N/A", note: "Movilidad articular" },
            { name: "Práctica de Handstand", sets: "1", reps: "5 min", rir: "N/A", note: "Calentamiento de muñecas, 1 serie de activación core." },
            { name: "Ranita", sets: "1", reps: "3 min", rir: "N/A", note: "Posición isometría" },
            { name: "Pike Holds", sets: "3", reps: "30 seg", rir: "N/A", note: "3 series x 30’" }
          ]
        },
        {
          name: "Bloque 1: Calistenia (Rango Completo Asistido / RIR 3)",
          exercises: [
            { name: "Flexiones Estándar (Push-ups) Asistidas con Banda", sets: "1-2", reps: "8-10", rir: "3", note: "RIR 3" },
            { name: "Dominadas Supinas (Chin-ups) con Banda Pesada", sets: "1-2", reps: "6-8", rir: "3", note: "RIR 3" },
            { name: "L-sit (Isometría asistida o en Tuck)", sets: "1-2", reps: "5-10 seg", rir: "3", note: "Versión agrupada o apoyando talones levemente, RIR 3. https://www.instagram.com/reel/DX9rBbjRvLB/?igsh=aGlxdGN6dGxmNDBn" }
          ]
        },
        {
          name: "Bloque 2: Gimnasio - Músculos Grandes (-20% Peso / RIR 3)",
          exercises: [
            { name: "Press Inclinado (Máquina Convergente)", sets: "1-2", reps: "8-10", rir: "3", note: "-20% Peso" },
            { name: "Remo Cable Polea con agarre abierto", sets: "1-2", reps: "8-10", rir: "3", note: "-20% Peso" }
          ]
        },
        {
          name: "Bloque 3: Gimnasio - Aislamiento y Agarre (-20% Peso / RIR 3)",
          exercises: [
            { name: "Pájaros en banco (Haz posterior)", sets: "1", reps: "12-14", rir: "3", note: "-20% Peso" },
            { name: "Elevaciones Laterales", sets: "1", reps: "12-14", rir: "3", note: "-20% Peso" },
            { name: "Extensiones Tras Nuca (Polea)", sets: "1", reps: "12-14", rir: "3", note: "-20% Peso" },
            { name: "Curl Scott o Predicador", sets: "1", reps: "12-14", rir: "3", note: "-20% Peso" },
            { name: "Fuerza de Agarre: Plate Pinch", sets: "1", reps: "Moderado", rir: "3", note: "1 serie x tiempo moderado." }
          ]
        },
        {
          name: "Cierre",
          exercises: [
            { name: "Cardio LISS", sets: "1", reps: "20 min", rir: "N/A", note: "20 minutos de Cardio LISS." }
          ]
        }
      ]
    },
    Viernes: {
      title: "VIERNES: Día 5 - LEGS 2 (Foco Isquiosurales y Glúteo) - Descarga y Resíntesis",
      blocks: [
        {
          name: "Bloque 0: Activación Articular (5 Minutos)",
          exercises: [
            { name: "Rotaciones 90/90, Couch Stretch y Dorsiflexión", sets: "1", reps: "5 min", rir: "N/A", note: "Prohibido el trabajo de Handstand para resetear el SNC." }
          ]
        },
        {
          name: "Bloque 1: Gimnasio - Tensión Mecánica Pura (-20% Peso / RIR 3)",
          exercises: [
            { name: "Peso Muerto Rumano (RDL)", sets: "2", reps: "8-10", rir: "3", note: "Movimiento terapéutico para oxigenar la cadena posterior." },
            { name: "Hip Thrust o Glute Bridge", sets: "1-2", reps: "8-10", rir: "3", note: "-20% Peso" }
          ]
        },
        {
          name: "Bloque 2: Gimnasio - Aislamiento y Rehabilitación (-20% Peso / RIR 3)",
          exercises: [
            { name: "Curl Femoral (Sentado preferentemente)", sets: "1", reps: "12-15", rir: "3", note: "-20% Peso" },
            { name: "Abductores", sets: "1", reps: "12-14", rir: "3", note: "-20% Peso" },
            { name: "Elevaciones de Talón Sentado", sets: "1-2", reps: "12-14", rir: "3", note: "-20% Peso" }
          ]
        },
        {
          name: "Cierre",
          exercises: [
            { name: "Movilidad Pesada", sets: "1", reps: "20 min", rir: "N/A", note: "20 minutos de Movilidad Pesada (Clase de Flex / Isquiotibiales)." }
          ]
        }
      ]
    },
    Sábado: {
      title: "SÁBADO: Día 6 - BRAZOS (Comodín Analítico) - Descarga y Resíntesis",
      blocks: [
        {
          name: "Bloque 0: Neural (15 Minutos)",
          exercises: [
            { name: "Movilidad de activación", sets: "1", reps: "5 min", rir: "N/A", note: "Este día es puramente periférico. Si fallas, el macrociclo no sufre daños." },
            { name: "Práctica de Handstand", sets: "1", reps: "5 min", rir: "N/A", note: "Calentamiento de muñecas, 1 serie de activación core." },
            { name: "Ranita", sets: "1", reps: "3 min", rir: "N/A", note: "Posición isometría" },
            { name: "Pike Holds", sets: "3", reps: "30 seg", rir: "N/A", note: "3 series x 30’" }
          ]
        },
        {
          name: "Bloque 1: Gimnasio - Aislamiento Total (-20% Peso / RIR 3)",
          exercises: [
            { name: "Extensiones Tras Nuca (Polea)", sets: "1-2", reps: "12-14", rir: "3", note: "-20% Peso" },
            { name: "Pushdown Clásico (Soga)", sets: "1-2", reps: "12-14", rir: "3", note: "-20% Peso" },
            { name: "Extensión Unilateral", sets: "1", reps: "12-14", rir: "3", note: "-20% Peso" },
            { name: "Curl Inclinado con Mancuernas", sets: "1-2", reps: "12-14", rir: "3", note: "-20% Peso" },
            { name: "Curl Predicador", sets: "1-2", reps: "12-14", rir: "3", note: "-20% Peso" },
            { name: "Curl Martillo", sets: "1", reps: "12-14", rir: "3", note: "-20% Peso" },
            { name: "Y-raises (Higiene Articular)", sets: "1-2", reps: "12-14", rir: "3", note: "-20% Peso" }
          ]
        },
        {
          name: "Cierre",
          exercises: [
            { name: "Cardio LISS", sets: "1", reps: "30 min", rir: "N/A", note: "30 minutos de Cardio LISS." }
          ]
        }
      ]
    }
  },
  2: {
    Lunes: {
      title: "LUNES: Día 1 - PUSH (Enfoque Empujes) - Adaptación Estructural y Neural",
      blocks: [
        {
          name: "Bloque 0: Neural (15 Minutos)",
          exercises: [
            { name: "Movilidad de activación", sets: "1", reps: "5 min", rir: "N/A", note: "Movilidad articular" },
            { name: "Práctica de Handstand", sets: "1", reps: "5 min", rir: "N/A", note: "Calentamiento de muñecas, 1 serie de activación core." },
            { name: "Ranita", sets: "1", reps: "3 min", rir: "N/A", note: "Posición isometría" },
            { name: "Pike Holds", sets: "3", reps: "30 seg", rir: "N/A", note: "3 series x 30’" }
          ]
        },
        {
          name: "Bloque 1: Calistenia (Acomodación de Resistencia)",
          exercises: [
            { name: "Flexiones en Pica (Pike Push-ups)", sets: "2", reps: "5-6", rir: "2", note: "Ejecución estricta, elevación escapular máxima. Si no llegas con buena técnica, apoya rodillas en un cajón." },
            { name: "Fondos en Paralelas (Dips) con Banda Elástica", sets: "3", reps: "6-8", rir: "2", note: "La banda te asiste en la parte más profunda para cuidar el esternón. Depresión escapular inquebrantable." },
            { name: "Hollow Body Hold (Suelo)", sets: "3", reps: "20-30 seg", rir: "2", note: "Retroversión pélvica absoluta." }
          ]
        },
        {
          name: "Bloque 2: Gimnasio - Músculos Grandes (RIR 2)",
          exercises: [
            { name: "Press en Banca (Máquina)", sets: "3", reps: "8-10", rir: "2", note: "Cortas la serie sabiendo que podías hacer 2 repeticiones más con postura perfecta." },
            { name: "Press Militar con Mancuernas", sets: "2", reps: "8-10", rir: "2", note: "RIR 2" }
          ]
        },
        {
          name: "Bloque 3: Gimnasio - Aislamiento (RIR 2)",
          exercises: [
            { name: "Aperturas Pec-Dec", sets: "2", reps: "12-14", rir: "2", note: "Aducción pura." },
            { name: "Elevaciones Laterales", sets: "3", reps: "12-14", rir: "2", note: "RIR 2" },
            { name: "Pushdown Clásico (Soga)", sets: "2", reps: "12-14", rir: "2", note: "Tríceps: Codo abajo." },
            { name: "Extensiones Tras Nuca (Polea)", sets: "2", reps: "12-14", rir: "2", note: "Tríceps: Codo arriba." }
          ]
        },
        {
          name: "Cierre",
          exercises: [
            { name: "Cardio LISS", sets: "1", reps: "20 min", rir: "N/A", note: "20 minutos de Cardio LISS." }
          ]
        }
      ]
    },
    Martes: {
      title: "MARTES: Día 2 - PULL (Enfoque Tracción) - Adaptación Estructural y Neural",
      blocks: [
        {
          name: "Bloque 0: Neural (15 Minutos)",
          exercises: [
            { name: "Movilidad de activación", sets: "1", reps: "5 min", rir: "N/A", note: "Movilidad articular" },
            { name: "Práctica de Handstand", sets: "1", reps: "5 min", rir: "N/A", note: "Calentamiento de muñecas, 1 serie de activación core." },
            { name: "Ranita", sets: "1", reps: "3 min", rir: "N/A", note: "Posición isometría" },
            { name: "Pike Holds", sets: "3", reps: "30 seg", rir: "N/A", note: "3 series x 30’" }
          ]
        },
        {
          name: "Bloque 1: Calistenia (Acomodación de Resistencia)",
          exercises: [
            { name: "Dominadas Pronas (Pull-ups) con Banda Elástica", sets: "2", reps: "6-8", rir: "2", note: "Garantiza que la barbilla pase la barra y la retracción escapular sea perfecta." },
            { name: "Dominadas Australianas (Remos barra baja)", sets: "2", reps: "8-10", rir: "2", note: "RIR 2" },
            { name: "Dragon Flag Negativas (Excentricas)", sets: "3", reps: "3-4", rir: "2", note: "Bajando en 4-5 segundos. Aprovechando que el dorsal ya está pre-activado para estabilizar el torso." }
          ]
        },
        {
          name: "Bloque 2: Gimnasio - Músculos Grandes (RIR 2)",
          exercises: [
            { name: "Remo con Pecho Apoyado (Palancas/Barra T)", sets: "2", reps: "8-10", rir: "2", note: "RIR 2" }
          ]
        },
        {
          name: "Bloque 3: Gimnasio - Aislamiento y Agarre (RIR 2)",
          exercises: [
            { name: "Pullover en Polea o Máquina", sets: "2", reps: "12-14", rir: "2", note: "RIR 2" },
            { name: "Facepull", sets: "2", reps: "12-14", rir: "2", note: "Polea alta hacia los ojos, rotación externa." },
            { name: "Curl Inclinado con Mancuernas", sets: "2", reps: "12-14", rir: "2", note: "Bíceps: Estiramiento extremo." },
            { name: "Curl Martillo", sets: "2", reps: "12-14", rir: "2", note: "Bíceps: Agarre neutro." },
            { name: "Fuerza de Agarre: Dead Hang (Colgado pasivo en barra)", sets: "2", reps: "Max tiempo", rir: "2", note: "2 series x máximo tiempo tolerable. (Para descomprimir columna)." }
          ]
        },
        {
          name: "Cierre",
          exercises: [
            { name: "Cardio LISS", sets: "1", reps: "20 min", rir: "N/A", note: "20 minutos de Cardio LISS. (Auditoría de volumen: Espalda 8 series, Bíceps directo 4 series, Hombro posterior 2 series)." }
          ]
        }
      ]
    },
    Miércoles: {
      title: "MIÉRCOLES: Día 3 - LEGS 1 (Foco Cuádriceps Aislado) - Adaptación Estructural y Neural",
      blocks: [
        {
          name: "Bloque 0: Activación Articular (5 Minutos)",
          exercises: [
            { name: "Rotaciones 90/90, Couch Stretch y Dorsiflexión", sets: "1", reps: "5 min", rir: "N/A", note: "Prohibido el trabajo de Handstand para resetear el SNC." }
          ]
        },
        {
          name: "Bloque 1: Gimnasio - Tensión Mecánica Pura (RIR 2)",
          exercises: [
            { name: "Sillón de Cuádriceps (Extensiones)", sets: "3", reps: "10-12", rir: "2", note: "Aísla el recto femoral con ligera rotación externa." },
            { name: "Prensa Inclinada / Sentadilla Hack", sets: "3", reps: "8-10", rir: "2", note: "Pies juntos y en la parte inferior de la plataforma para anular el glúteo y mutar la carga hacia los vastos." },
            { name: "Sentadillas Búlgaras en Smith", sets: "2", reps: "8-10", rir: "2", note: "Para que la Sentadilla Búlgara no active el glúteo, tu torso debe permanecer 100% erguido como una tabla y la rodilla debe viajar lo más adelante posible por encima de la punta del pie." },
            { name: "Aductores", sets: "2", reps: "12-14", rir: "2", note: "RIR 2" },
            { name: "Elevaciones de Talón de Pie", sets: "3", reps: "12-14", rir: "2", note: "Gastrocnemio." }
          ]
        },
        {
          name: "Cierre",
          exercises: [
            { name: "Movilidad Pesada", sets: "1", reps: "20 min", rir: "N/A", note: "20 minutos de Movilidad Pesada (Clase de Flex / Spagat / Pancake). (Auditoría de volumen: Cuádriceps 8 series, Aductores 2 series, Gemelos 3 series)." }
          ]
        }
      ]
    },
    Jueves: {
      title: "JUEVES: Día 4 - TREN SUPERIOR HÍBRIDO - Adaptación Estructural y Neural",
      blocks: [
        {
          name: "Bloque 0: Neural (15 Minutos)",
          exercises: [
            { name: "Movilidad de activación", sets: "1", reps: "5 min", rir: "N/A", note: "Movilidad articular" },
            { name: "Práctica de Handstand", sets: "1", reps: "5 min", rir: "N/A", note: "Calentamiento de muñecas, 1 serie de activación core." },
            { name: "Ranita", sets: "1", reps: "3 min", rir: "N/A", note: "Posición isometría" },
            { name: "Pike Holds", sets: "3", reps: "30 seg", rir: "N/A", note: "3 series x 30’" }
          ]
        },
        {
          name: "Bloque 1: Calistenia (Acomodación de Resistencia)",
          exercises: [
            { name: "Flexiones Estándar (Push-ups) Asistidas con Banda", sets: "3", reps: "8-10", rir: "2", note: "Banda anclada arriba cruzando tu cadera para aligerar el peso y asegurar protracción máxima." },
            { name: "Dominadas Supinas (Chin-ups) con Banda Elástica", sets: "3", reps: "6-8", rir: "2", note: "RIR 2" },
            { name: "L-sit", sets: "3", reps: "Max tiempo", rir: "2", note: "Progresiones primero rodillas al pecho, luego l-sit de a una pierna y luego negativas." }
          ]
        },
        {
          name: "Bloque 2: Gimnasio - Músculos Grandes (RIR 2)",
          exercises: [
            { name: "Press Inclinado (Máquina Convergente)", sets: "3", reps: "8-10", rir: "2", note: "RIR 2" },
            { name: "Remo Cable Polea con agarre abierto", sets: "3", reps: "8-10", rir: "2", note: "RIR 2" }
          ]
        },
        {
          name: "Bloque 3: Gimnasio - Aislamiento y Agarre (RIR 2)",
          exercises: [
            { name: "Pájaros en banco (Haz posterior)", sets: "2", reps: "12-14", rir: "2", note: "RIR 2" },
            { name: "Elevaciones Laterales", sets: "2", reps: "12-14", rir: "2", note: "RIR 2" },
            { name: "Triceps sentado", sets: "2", reps: "12-14", rir: "2", note: "RIR 2" },
            { name: "Curl Scott o Predicador", sets: "2", reps: "12-14", rir: "2", note: "RIR 2" },
            { name: "Fuerza de Agarre: Plate Pinch", sets: "2", reps: "Max tiempo", rir: "2", note: "Sostener discos por el borde con los dedos. 2 series x máximo tiempo tolerable." }
          ]
        },
        {
          name: "Cierre",
          exercises: [
            { name: "Cardio LISS", sets: "1", reps: "20 min", rir: "N/A", note: "20 minutos de Cardio LISS. (Auditoría de volumen: Pecho 6 series, Espalda 6 series, Hombros 4 series, Brazos 4 series directas)." }
          ]
        }
      ]
    },
    Viernes: {
      title: "VIERNES: Día 5 - LEGS 2 (Foco Isquiosurales y Glúteo) - Adaptación Estructural y Neural",
      blocks: [
        {
          name: "Bloque 0: Activación Articular (5 Minutos)",
          exercises: [
            { name: "Rotaciones 90/90, Couch Stretch y Dorsiflexión", sets: "1", reps: "5 min", rir: "N/A", note: "Prohibido el trabajo de Handstand para resetear el SNC." }
          ]
        },
        {
          name: "Bloque 1: Gimnasio - Tensión Mecánica Pura (RIR 2)",
          exercises: [
            { name: "Peso Muerto Rumano (RDL)", sets: "4", reps: "8-10", rir: "2", note: "Tu constructor principal de masa. Bisagra de cadera pura, máxima tensión en estiramiento." },
            { name: "Hip Thrust o Glute Bridge", sets: "3", reps: "8-10", rir: "2", note: "Empuje horizontal." }
          ]
        },
        {
          name: "Bloque 2: Gimnasio - Aislamiento y Rehabilitación (RIR 2)",
          exercises: [
            { name: "Curl Femoral (Sentado preferentemente)", sets: "2", reps: "12-15", rir: "2", note: "Peso ligero. El objetivo es irrigar sangre a la fosa poplítea. Subida controlada, pausa de 1 segundo arriba, bajada de 3 a 4 segundos." },
            { name: "Abductores", sets: "2", reps: "12-14", rir: "2", note: "RIR 2" },
            { name: "Elevaciones de Talón Sentado", sets: "3", reps: "12-14", rir: "2", note: "Aislamiento de sóleo." }
          ]
        },
        {
          name: "Cierre",
          exercises: [
            { name: "Movilidad Pesada", sets: "1", reps: "20 min", rir: "N/A", note: "20 minutos de Movilidad Pesada (Clase de Flex / Isquiotibiales). (Auditoría de volumen: Isquiosurales 6 series, Glúteos 3 series, Abductores 2 series, Gemelos 3 series)." }
          ]
        }
      ]
    },
    Sábado: {
      title: "SÁBADO: Día 6 - BRAZOS (Comodín Analítico) - Adaptación Estructural y Neural",
      blocks: [
        {
          name: "Bloque 0: Neural (15 Minutos)",
          exercises: [
            { name: "Movilidad de activación", sets: "1", reps: "5 min", rir: "N/A", note: "Este día es puramente periférico. Si fallas, el macrociclo no sufre daños." },
            { name: "Práctica de Handstand", sets: "1", reps: "5 min", rir: "N/A", note: "Calentamiento de muñecas, 1 serie de activación core." },
            { name: "Ranita", sets: "1", reps: "3 min", rir: "N/A", note: "Posición isometría" },
            { name: "Pike Holds", sets: "3", reps: "30 seg", rir: "N/A", note: "3 series x 30’" }
          ]
        },
        {
          name: "Bloque 1: Gimnasio - Aislamiento Total (RIR 2)",
          exercises: [
            { name: "Extensiones Tras Nuca (Polea)", sets: "3", reps: "12-14", rir: "2", note: "RIR 2" },
            { name: "Pushdown Clásico (Soga)", sets: "3", reps: "12-14", rir: "2", note: "RIR 2" },
            { name: "Extensión Unilateral", sets: "2", reps: "12-14", rir: "2", note: "Probar hacer de costado https://www.instagram.com/reel/DY5lI0YOKrO/?igsh=NXB1b3lidXloZWk5" },
            { name: "Curl Inclinado con Mancuernas", sets: "3", reps: "12-14", rir: "2", note: "RIR 2" },
            { name: "Curl Predicador", sets: "3", reps: "12-14", rir: "2", note: "RIR 2" },
            { name: "Curl Martillo", sets: "2", reps: "12-14", rir: "2", note: "RIR 2" },
            { name: "Y-raises (Higiene Articular)", sets: "3", reps: "12-14", rir: "2", note: "RIR 2" }
          ]
        },
        {
          name: "Cierre",
          exercises: [
            { name: "Cardio LISS", sets: "1", reps: "30 min", rir: "N/A", note: "30 minutos de Cardio LISS. (Auditoría de volumen: Tríceps 8 series, Bíceps 8 series)." }
          ]
        }
      ]
    }
  },
  3: {
    Lunes: {
      title: "LUNES: Día 1 - PUSH (Enfoque Empujes) - Clímax Neural y Estructural",
      blocks: [
        {
          name: "Bloque 0: Neural (15 Minutos)",
          exercises: [
            { name: "Movilidad de activación", sets: "1", reps: "5 min", rir: "N/A", note: "Movilidad articular" },
            { name: "Práctica de Handstand", sets: "1", reps: "5 min", rir: "N/A", note: "Calentamiento de muñecas, 1 serie de activación core." },
            { name: "Ranita", sets: "1", reps: "3 min", rir: "N/A", note: "Posición isometría" },
            { name: "Pike Holds", sets: "3", reps: "30 seg", rir: "N/A", note: "3 series x 30’" }
          ]
        },
        {
          name: "Bloque 1: Calistenia (Sobrecarga Excéntrica / RIR 0-1)",
          exercises: [
            { name: "Flexiones en Pica (Pike Push-ups) Excéntricas", sets: "3", reps: "4-5", rir: "0-1", note: "Te asistes con las rodillas para volver a subir. Bajas en 5 segundos con elevación escapular máxima. Añade chaleco de lastre si es necesario." },
            { name: "Fondos en Paralelas (Dips) - Negativas Lastradas", sets: "3", reps: "4-5", rir: "0-1", note: "Saltas a la posición de bloqueo superior. Resistes la bajada en 5 segundos controlando el esternón. Lastre obligatorio si tu peso corporal no te lleva al fallo excéntrico." },
            { name: "Hollow Body Hold (Suelo)", sets: "3", reps: "Max tiempo", rir: "0", note: "Tiemblas hasta que literalmente no puedas sostener la retroversión." }
          ]
        },
        {
          name: "Bloque 2: Gimnasio - Músculos Grandes (RIR 1 a RIR 0)",
          exercises: [
            { name: "Press en Banca (Máquina)", sets: "3", reps: "8-10", rir: "1-0", note: "La última serie debe ser RIR 0." },
            { name: "Press Militar con Mancuernas", sets: "2", reps: "8-10", rir: "1-0", note: "RIR 0 en la última." }
          ]
        },
        {
          name: "Bloque 3: Gimnasio - Aislamiento (RIR 0 + Metodologías)",
          exercises: [
            { name: "Aperturas Pec-Dec", sets: "2", reps: "12-14", rir: "0", note: "Última serie: Drop Set al fallo." },
            { name: "Elevaciones Laterales", sets: "3", reps: "12-14", rir: "0", note: "Última serie: Drop Set al fallo." },
            { name: "Pushdown Clásico (Soga)", sets: "2", reps: "12-14", rir: "0", note: "Última serie: Rest-Pause." },
            { name: "Extensiones Tras Nuca (Polea)", sets: "2", reps: "12-14", rir: "0", note: "Última serie: Rest-Pause." }
          ],
          intensityTechnique: "Drop Set en Aperturas Pec-Dec y Elevaciones Laterales; Rest-Pause en Pushdown Clásico y Extensiones Tras Nuca."
        },
        {
          name: "Cierre",
          exercises: [
            { name: "Cardio LISS", sets: "1", reps: "20 min", rir: "N/A", note: "20 minutos de Cardio LISS." }
          ]
        }
      ]
    },
    Martes: {
      title: "MARTES: Día 2 - PULL (Enfoque Tracción) - Clímax Neural y Estructural",
      blocks: [
        {
          name: "Bloque 0: Neural (15 Minutos)",
          exercises: [
            { name: "Movilidad de activación", sets: "1", reps: "5 min", rir: "N/A", note: "Movilidad articular" },
            { name: "Práctica de Handstand", sets: "1", reps: "5 min", rir: "N/A", note: "Calentamiento de muñecas, 1 serie de activación core." },
            { name: "Ranita", sets: "1", reps: "3 min", rir: "N/A", note: "Posición isometría" },
            { name: "Pike Holds", sets: "3", reps: "30 seg", rir: "N/A", note: "3 series x 30’" }
          ]
        },
        {
          name: "Bloque 1: Calistenia (Sobrecarga Excéntrica / RIR 0-1)",
          exercises: [
            { name: "Dominadas Pronas (Pull-ups) - Negativas Lastradas", sets: "3", reps: "4-5", rir: "0-1", note: "Usas un cajón para posicionar la barbilla sobre la barra. Bajas en 5 segundos con retracción escapular perfecta. Añades lastre al cinturón o chaleco para garantizar el RIR 0-1." },
            { name: "Dominadas Australianas (Remos barra baja) Excéntricas", sets: "3", reps: "6-8", rir: "0-1", note: "Te impulsas con las piernas para subir al pecho, bajas en 5 segundos estrictos. Usa chaleco de lastre si resulta fácil." },
            { name: "Dragon Flag a Una Pierna (Excéntricas)", sets: "3", reps: "4-6", rir: "0-1", note: "Rotación Semanal 4: Extiendes una pierna, subes agrupada y resistes la bajada controlando la gravedad hasta el fallo técnico." }
          ]
        },
        {
          name: "Bloque 2: Gimnasio - Músculos Grandes (RIR 1 a RIR 0)",
          exercises: [
            { name: "Remo con Pecho Apoyado (Palancas/Barra T)", sets: "2", reps: "8-10", rir: "1-0", note: "RIR 0 en la última serie." }
          ]
        },
        {
          name: "Bloque 3: Gimnasio - Aislamiento y Agarre (RIR 0 + Metodologías)",
          exercises: [
            { name: "Pullover en Polea o Máquina", sets: "2", reps: "12-14", rir: "0", note: "Última serie: Drop Set." },
            { name: "Facepull", sets: "2", reps: "12-14", rir: "0", note: "Fallo técnico, sin deformar la rotación externa." },
            { name: "Curl Inclinado con Mancuernas", sets: "2", reps: "12-14", rir: "0", note: "Última serie: Rest-Pause." },
            { name: "Curl Martillo", sets: "2", reps: "12-14", rir: "0", note: "Última serie: Rest-Pause." },
            { name: "Fuerza de Agarre: Dead Hang (Colgado pasivo en barra)", sets: "2", reps: "Max tiempo", rir: "0", note: "2 series x Máximo tiempo posible hasta que se abran las manos." }
          ],
          intensityTechnique: "Drop Set en Pullover; Rest-Pause en Curl Inclinado y Curl Martillo."
        },
        {
          name: "Cierre",
          exercises: [
            { name: "Cardio LISS", sets: "1", reps: "20 min", rir: "N/A", note: "20 minutos de Cardio LISS." }
          ]
        }
      ]
    },
    Miércoles: {
      title: "MIÉRCOLES: Día 3 - LEGS 1 (Foco Cuádriceps Aislado) - Clímax Neural y Estructural",
      blocks: [
        {
          name: "Bloque 0: Activación Articular (5 Minutos)",
          exercises: [
            { name: "Rotaciones 90/90, Couch Stretch y Dorsiflexión", sets: "1", reps: "5 min", rir: "N/A", note: "Prohibido el trabajo de Handstand para resetear el SNC." }
          ]
        },
        {
          name: "Bloque 1: Gimnasio - Tensión Mecánica Pura (RIR 1 a RIR 0)",
          exercises: [
            { name: "Sillón de Cuádriceps (Extensiones)", sets: "3", reps: "10-12", rir: "1-0", note: "Última serie: Drop Set brutal." },
            { name: "Prensa Inclinada / Sentadilla Hack", sets: "3", reps: "8-10", rir: "1-0", note: "RIR 0 en la última serie." },
            { name: "Sentadillas Búlgaras en Smith o Mancuernas", sets: "2", reps: "8-10", rir: "1", note: "RIR 1 estricto, no vayas al fallo absoluto aquí para proteger rodilla." },
            { name: "Aductores", sets: "2", reps: "12-14", rir: "0", note: "Última serie: Rest-Pause." },
            { name: "Elevaciones de Talón de Pie", sets: "3", reps: "12-14", rir: "0", note: "Última serie: Drop Set." }
          ],
          intensityTechnique: "Drop Set en Sillón de Cuádriceps y Elevaciones de Talón; Rest-Pause en Aductores."
        },
        {
          name: "Cierre",
          exercises: [
            { name: "Movilidad Pesada", sets: "1", reps: "20 min", rir: "N/A", note: "20 minutos de Movilidad Pesada (Clase de Flex / Spagat / Pancake)." }
          ]
        }
      ]
    },
    Jueves: {
      title: "JUEVES: Día 4 - TREN SUPERIOR HÍBRIDO - Clímax Neural y Estructural",
      blocks: [
        {
          name: "Bloque 0: Neural (15 Minutos)",
          exercises: [
            { name: "Movilidad de activación", sets: "1", reps: "5 min", rir: "N/A", note: "Movilidad articular" },
            { name: "Práctica de Handstand", sets: "1", reps: "5 min", rir: "N/A", note: "Calentamiento de muñecas, 1 serie de activación core." },
            { name: "Ranita", sets: "1", reps: "3 min", rir: "N/A", note: "Posición isometría" },
            { name: "Pike Holds", sets: "3", reps: "30 seg", rir: "N/A", note: "3 series x 30’" }
          ]
        },
        {
          name: "Bloque 1: Calistenia (Sobrecarga Excéntrica / RIR 0-1)",
          exercises: [
            { name: "Flexiones Estándar (Push-ups) Excéntricas", sets: "3", reps: "5-6", rir: "0-1", note: "Omites la subida apoyando rodillas. Bajas en 5 segundos como una tabla. Chaleco o disco en la espalda si no llegas al fallo." },
            { name: "Dominadas Supinas (Chin-ups) - Negativas Lastradas", sets: "3", reps: "4-5", rir: "0-1", note: "Salto al bloqueo superior y bajada hiper-lenta de 5 segundos resistiendo con el bíceps y el dorsal." },
            { name: "L-sit (Isometría)", sets: "3", reps: "Max tiempo", rir: "0", note: "Sostienes hasta que los cuádriceps o el psoas colapsen." }
          ]
        },
        {
          name: "Bloque 2: Gimnasio - Músculos Grandes (RIR 1 a RIR 0)",
          exercises: [
            { name: "Press Inclinado (Máquina Convergente)", sets: "3", reps: "8-10", rir: "1-0", note: "RIR 0 en la última." },
            { name: "Remo Cable Polea con agarre abierto", sets: "3", reps: "8-10", rir: "1-0", note: "RIR 0 en la última." }
          ]
        },
        {
          name: "Bloque 3: Gimnasio - Aislamiento y Agarre (RIR 0 + Metodologías)",
          exercises: [
            { name: "Pájaros en banco (Haz posterior)", sets: "2", reps: "12-14", rir: "0", note: "Última serie: Drop Set." },
            { name: "Elevaciones Laterales", sets: "2", reps: "12-14", rir: "0", note: "Última serie: Drop Set." },
            { name: "Extensiones Tras Nuca (Polea)", sets: "2", reps: "12-14", rir: "0", note: "Última serie: Rest-Pause." },
            { name: "Curl Scott o Predicador", sets: "2", reps: "12-14", rir: "0", note: "Última serie: Rest-Pause." },
            { name: "Fuerza de Agarre: Plate Pinch", sets: "2", reps: "Max tiempo", rir: "0", note: "2 series x Máximo tiempo hasta que el disco caiga." }
          ],
          intensityTechnique: "Drop Set en Pájaros y Elevaciones Laterales; Rest-Pause en Extensiones Tras Nuca y Curl Scott."
        },
        {
          name: "Cierre",
          exercises: [
            { name: "Cardio LISS", sets: "1", reps: "20 min", rir: "N/A", note: "20 minutos de Cardio LISS." }
          ]
        }
      ]
    },
    Viernes: {
      title: "VIERNES: Día 5 - LEGS 2 (Foco Isquiosurales y Glúteo) - Clímax Neural y Estructural",
      blocks: [
        {
          name: "Bloque 0: Activación Articular (5 Minutos)",
          exercises: [
            { name: "Rotaciones 90/90, Couch Stretch y Dorsiflexión", sets: "1", reps: "5 min", rir: "N/A", note: "Prohibido el trabajo de Handstand para resetear el SNC." }
          ]
        },
        {
          name: "Bloque 1: Gimnasio - Tensión Mecánica Pura (RIR 1 a RIR 0)",
          exercises: [
            { name: "Peso Muerto Rumano (RDL)", sets: "4", reps: "8-10", rir: "1", note: "RIR 1 máximo. Prohibido el fallo absoluto en RDL para no freír la lumbar." },
            { name: "Hip Thrust o Glute Bridge", sets: "3", reps: "8-10", rir: "1-0", note: "RIR 0 en la última, máxima contracción." }
          ]
        },
        {
          name: "Bloque 2: Gimnasio - Aislamiento y Rehabilitación (RIR 0 + Metodologías)",
          exercises: [
            { name: "Curl Femoral (Sentado preferentemente)", sets: "2", reps: "12-15", rir: "0", note: "Última serie: Drop Set." },
            { name: "Abductores", sets: "2", reps: "12-14", rir: "0", note: "Última serie: Rest-Pause." },
            { name: "Elevaciones de Talón Sentado", sets: "3", reps: "12-14", rir: "0", note: "Última serie: Drop Set." }
          ],
          intensityTechnique: "Drop Set en Curl Femoral y Elevaciones de Talón Sentado; Rest-Pause en Abductores."
        },
        {
          name: "Cierre",
          exercises: [
            { name: "Movilidad Pesada", sets: "1", reps: "20 min", rir: "N/A", note: "20 minutos de Movilidad Pesada (Clase de Flex / Isquiotibiales)." }
          ]
        }
      ]
    },
    Sábado: {
      title: "SÁBADO: Día 6 - BRAZOS (Comodín Analítico) - Clímax Neural y Estructural",
      blocks: [
        {
          name: "Bloque 0: Neural (15 Minutos)",
          exercises: [
            { name: "Movilidad de activación", sets: "1", reps: "5 min", rir: "N/A", note: "Este día es puramente periférico. Se masacra el tejido sin riesgo sistémico." },
            { name: "Práctica de Handstand", sets: "1", reps: "5 min", rir: "N/A", note: "Calentamiento de muñecas, 1 serie de activación core." },
            { name: "Ranita", sets: "1", reps: "3 min", rir: "N/A", note: "Posición isometría" },
            { name: "Pike Holds", sets: "3", reps: "30 seg", rir: "N/A", note: "3 series x 30’" }
          ]
        },
        {
          name: "Bloque 1: Gimnasio - Aislamiento Total (RIR 0 + Metodologías)",
          exercises: [
            { name: "Extensiones Tras Nuca (Polea)", sets: "3", reps: "12-14", rir: "0", note: "Última serie: Drop Set." },
            { name: "Pushdown Clásico (Soga)", sets: "3", reps: "12-14", rir: "0", note: "Última serie: Drop Set." },
            { name: "Extensión Unilateral", sets: "2", reps: "12-14", rir: "0", note: "Fallo absoluto." },
            { name: "Curl Inclinado con Mancuernas", sets: "3", reps: "12-14", rir: "0", note: "Última serie: Rest-Pause." },
            { name: "Curl Predicador", sets: "3", reps: "12-14", rir: "0", note: "Última serie: Drop Set." },
            { name: "Curl Martillo", sets: "2", reps: "12-14", rir: "0", note: "Fallo absoluto." },
            { name: "Y-raises (Higiene Articular)", sets: "3", reps: "12-14", rir: "0", note: "RIR 0 técnico." }
          ],
          intensityTechnique: "Drop Set en Extensiones Tras Nuca, Pushdown Clásico y Curl Predicador; Rest-Pause en Curl Inclinado."
        },
        {
          name: "Cierre",
          exercises: [
            { name: "Cardio LISS", sets: "1", reps: "30 min", rir: "N/A", note: "30 minutos de Cardio LISS." }
          ]
        }
      ]
    }
  },
  4: {
    Lunes: {
      title: "LUNES: Día 1 - PUSH (Enfoque Empujes) - Fase de intensificación",
      blocks: [
        {
          name: "Bloque 0: Neural (15 Minutos)",
          exercises: [
            { name: "Movilidad de activación", sets: "1", reps: "5 min", rir: "N/A", note: "Movilidad articular" },
            { name: "Práctica de Handstand", sets: "1", reps: "5 min", rir: "N/A", note: "Calentamiento de muñecas, 1 serie de activación core." },
            { name: "Ranita", sets: "1", reps: "3 min", rir: "N/A", note: "Posición isometría" },
            { name: "Pike Holds", sets: "3", reps: "30 seg", rir: "N/A", note: "3 series x 30’" }
          ]
        },
        {
          name: "Bloque 1: Calistenia (Acomodación de Resistencia)",
          exercises: [
            { name: "Flexiones en Pica (Pike Push-ups)", sets: "1 Pirámide", reps: "1-2-3-4-3-2-1", rir: "1", note: "Descansos cortos de 15 a 20 segundos entre cada escalón. Elevación escapular máxima innegociable." },
            { name: "Fondos en Paralelas (Dips)", sets: "1 Pirámide", reps: "1-2-3-4-5-4-3-2-1", rir: "1", note: "Si aún no tienes la fuerza para hacer la pirámide estricta sin banda, utilizas la banda elástica para completar toda la pirámide." },
            { name: "Hollow Body Hold (Suelo)", sets: "3", reps: "Max tiempo", rir: "1", note: "Dejando un RIR 1 (cortas 1 o 2 segundos antes de perder la retroversión pélvica)." }
          ]
        },
        {
          name: "Bloque 2: Gimnasio - Músculos Grandes (RIR 1)",
          exercises: [
            { name: "Press en Banca (Máquina)", sets: "3", reps: "8-10", rir: "1", note: "RIR 1 estricto" },
            { name: "Press Militar con Mancuernas", sets: "2", reps: "8-10", rir: "1", note: "RIR 1 estricto" }
          ]
        },
        {
          name: "Bloque 3: Gimnasio - Aislamiento (RIR 1)",
          exercises: [
            { name: "Aperturas Pec-Dec", sets: "2", reps: "12-14", rir: "1", note: "Aducción pura." },
            { name: "Elevaciones Laterales", sets: "3", reps: "12-14", rir: "1", note: "RIR 1 estricto" },
            { name: "Pushdown Clásico (Soga)", sets: "2", reps: "12-14", rir: "1", note: "Tríceps: Codo abajo." },
            { name: "Extensiones Tras Nuca (Polea)", sets: "2", reps: "12-14", rir: "1", note: "Tríceps: Codo arriba." }
          ]
        },
        {
          name: "Cierre",
          exercises: [
            { name: "Cardio LISS", sets: "1", reps: "20 min", rir: "N/A", note: "20 minutos de Cardio LISS." }
          ]
        }
      ]
    },
    Martes: {
      title: "MARTES: Día 2 - PULL (Enfoque Tracción) - Fase de intensificación",
      blocks: [
        {
          name: "Bloque 0: Neural (15 Minutos)",
          exercises: [
            { name: "Movilidad de activación", sets: "1", reps: "5 min", rir: "N/A", note: "Movilidad articular" },
            { name: "Práctica de Handstand", sets: "1", reps: "5 min", rir: "N/A", note: "Calentamiento de muñecas, 1 serie de activación core." },
            { name: "Ranita", sets: "1", reps: "3 min", rir: "N/A", note: "Posición isometría" },
            { name: "Pike Holds", sets: "3", reps: "30 seg", rir: "N/A", note: "3 series x 30’" }
          ]
        },
        {
          name: "Bloque 1: Calistenia (Acomodación de Resistencia)",
          exercises: [
            { name: "Dominadas Pronas (Pull-ups)", sets: "1 Pirámide", reps: "1-2-3-2-1", rir: "1", note: "Asistidas con banda si es necesario para mantener la retracción escapular perfecta en el pico de la pirámide." },
            { name: "Dominadas Australianas (Remos barra baja)", sets: "1 Pirámide", reps: "2-4-6-8-6-4-2", rir: "1", note: "Descansos de 20 segundos entre escalones." },
            { name: "Dragon Flag Elevaciones Bottom-Up con Isometría", sets: "3", reps: "4-5", rir: "1", note: "Sosteniendo 1 segundo en isometria. Bajada controlada en 4 segundos, frenando exactamente en RIR 1 antes de que la técnica colapse. https://www.instagram.com/p/DWjKvTGDG5O/?igsh=aXZrbnhiMHRqd3U3" }
          ]
        },
        {
          name: "Bloque 2: Gimnasio - Músculos Grandes (RIR 1)",
          exercises: [
            { name: "Remo con Pecho Apoyado (Palancas/Barra T)", sets: "2", reps: "8-10", rir: "1", note: "RIR 1 estricto" }
          ]
        },
        {
          name: "Bloque 3: Gimnasio - Aislamiento y Agarre (RIR 1)",
          exercises: [
            { name: "Pullover en Polea o Máquina", sets: "2", reps: "12-14", rir: "1", note: "RIR 1 estricto" },
            { name: "Facepull", sets: "2", reps: "12-14", rir: "1", note: "Polea alta hacia los ojos, rotación externa." },
            { name: "Curl Inclinado con Mancuernas", sets: "2", reps: "12-14", rir: "1", note: "Bíceps: Estiramiento extremo." },
            { name: "Curl Martillo", sets: "2", reps: "12-14", rir: "1", note: "Bíceps: Agarre neutro." },
            { name: "Fuerza de Agarre: Dead Hang (Colgado pasivo en barra)", sets: "2", reps: "Max tiempo", rir: "1", note: "2 series x máximo tiempo tolerable. (Para descomprimir columna)." }
          ]
        },
        {
          name: "Cierre",
          exercises: [
            { name: "Cardio LISS", sets: "1", reps: "20 min", rir: "N/A", note: "20 minutos de Cardio LISS. (Auditoría de volumen: Espalda 8 series, Bíceps directo 4 series, Hombro posterior 2 series)." }
          ]
        }
      ]
    },
    Miércoles: {
      title: "MIÉRCOLES: Día 3 - LEGS 1 (Foco Cuádriceps Aislado) - Fase de intensificación",
      blocks: [
        {
          name: "Bloque 0: Activación Articular (5 Minutos)",
          exercises: [
            { name: "Rotaciones 90/90, Couch Stretch y Dorsiflexión", sets: "1", reps: "5 min", rir: "N/A", note: "Prohibido el trabajo de Handstand para resetear el SNC." }
          ]
        },
        {
          name: "Bloque 1: Gimnasio - Tensión Mecánica Pura (RIR 1)",
          exercises: [
            { name: "Sillón de Cuádriceps (Extensiones)", sets: "3", reps: "10-12", rir: "1", note: "Aísla el recto femoral con ligera rotación externa." },
            { name: "Prensa Inclinada / Sentadilla Hack", sets: "3", reps: "8-10", rir: "1", note: "Pies juntos y en la parte inferior de la plataforma para anular el glúteo y mutar la carga hacia los vastos." },
            { name: "Sentadillas Búlgaras en Smith", sets: "2", reps: "8-10", rir: "1", note: "Para que la Sentadilla Búlgara no active el glúteo, tu torso debe permanecer 100% erguido como una tabla y la rodilla debe viajar lo más adelante posible por encima de la punta del pie." },
            { name: "Aductores", sets: "2", reps: "12-14", rir: "1", note: "RIR 1 estricto" },
            { name: "Elevaciones de Talón de Pie", sets: "3", reps: "12-14", rir: "1", note: "Gastrocnemio." }
          ]
        },
        {
          name: "Cierre",
          exercises: [
            { name: "Movilidad Pesada", sets: "1", reps: "20 min", rir: "N/A", note: "20 minutos de Movilidad Pesada (Clase de Flex / Spagat / Pancake). (Auditoría de volumen: Cuádriceps 8 series, Aductores 2 series, Gemelos 3 series)." }
          ]
        }
      ]
    },
    Jueves: {
      title: "JUEVES: Día 4 - TREN SUPERIOR HÍBRIDO - Fase de intensificación",
      blocks: [
        {
          name: "Bloque 0: Neural (15 Minutos)",
          exercises: [
            { name: "Movilidad de activación", sets: "1", reps: "5 min", rir: "N/A", note: "Movilidad articular" },
            { name: "Práctica de Handstand", sets: "1", reps: "5 min", rir: "N/A", note: "Calentamiento de muñecas, 1 serie de activación core." },
            { name: "Ranita", sets: "1", reps: "3 min", rir: "N/A", note: "Posición isometría" },
            { name: "Pike Holds", sets: "3", reps: "30 seg", rir: "N/A", note: "3 series x 30’" }
          ]
        },
        {
          name: "Bloque 1: Calistenia (Acomodación de Resistencia)",
          exercises: [
            { name: "Flexiones Estándar (Push-ups)", sets: "1 Pirámide", reps: "2-4-6-8-6-4-2", rir: "1", note: "Protracción escapular máxima al bloquear los codos." },
            { name: "Dominadas Supinas (Chin-ups)", sets: "1 Pirámide", reps: "1-2-3-4-3-2-1", rir: "1", note: "RIR 1 estricto" },
            { name: "L-sit (Isometría en Suelo o Paralelas)", sets: "3", reps: "Tiempo Sub-máximo", rir: "1", note: "Frena la serie justo antes de que tus piernas caigan por fatiga del psoas o pierdas la depresión escapular (progresiones primero rodillas al pecho, luego l-sit de a una pierna y luego negativas)." }
          ]
        },
        {
          name: "Bloque 2: Gimnasio - Músculos Grandes (RIR 1)",
          exercises: [
            { name: "Press Inclinado (Máquina Convergente)", sets: "3", reps: "8-10", rir: "1", note: "RIR 1 estricto" },
            { name: "Remo Cable Polea con agarre abierto", sets: "3", reps: "8-10", rir: "1", note: "RIR 1 estricto" }
          ]
        },
        {
          name: "Bloque 3: Gimnasio - Aislamiento y Agarre (RIR 1)",
          exercises: [
            { name: "Pájaros en banco (Haz posterior)", sets: "2", reps: "12-14", rir: "1", note: "RIR 1 estricto" },
            { name: "Elevaciones Laterales", sets: "2", reps: "12-14", rir: "1", note: "RIR 1 estricto" },
            { name: "Extensiones Tras Nuca (Polea)", sets: "2", reps: "12-14", rir: "1", note: "RIR 1 estricto" },
            { name: "Curl Scott o Predicador", sets: "2", reps: "12-14", rir: "1", note: "RIR 1 estricto" },
            { name: "Fuerza de Agarre: Plate Pinch", sets: "2", reps: "Max tiempo", rir: "1", note: "Sostener discos por el borde con los dedos. 2 series x máximo tiempo tolerable." }
          ]
        },
        {
          name: "Cierre",
          exercises: [
            { name: "Cardio LISS", sets: "1", reps: "20 min", rir: "N/A", note: "20 minutos de Cardio LISS. (Auditoría de volumen: Pecho 6 series, Espalda 6 series, Hombros 4 series, Brazos 4 series directas)." }
          ]
        }
      ]
    },
    Viernes: {
      title: "VIERNES: Día 5 - LEGS 2 (Foco Isquiosurales y Glúteo) - Fase de intensificación",
      blocks: [
        {
          name: "Bloque 0: Activación Articular (5 Minutos)",
          exercises: [
            { name: "Rotaciones 90/90, Couch Stretch y Dorsiflexión", sets: "1", reps: "5 min", rir: "N/A", note: "Prohibido el trabajo de Handstand para resetear el SNC." }
          ]
        },
        {
          name: "Bloque 1: Gimnasio - Tensión Mecánica Pura (RIR 1)",
          exercises: [
            { name: "Peso Muerto Rumano (RDL)", sets: "4", reps: "8-10", rir: "1", note: "Tu constructor principal de masa. Bisagra de cadera pura, máxima tensión en estiramiento." },
            { name: "Hip Thrust o Glute Bridge", sets: "3", reps: "8-10", rir: "1", note: "Empuje horizontal." }
          ]
        },
        {
          name: "Bloque 2: Gimnasio - Aislamiento y Rehabilitación (RIR 1)",
          exercises: [
            { name: "Curl Femoral (Sentado preferentemente)", sets: "2", reps: "12-15", rir: "1", note: "Peso ligero. El objetivo es irrigar sangre a la fosa poplítea. Subida controlada, pausa de 1 segundo arriba, bajada de 3 a 4 segundos." },
            { name: "Abductores", sets: "2", reps: "12-14", rir: "1", note: "RIR 1 estricto" },
            { name: "Elevaciones de Talón Sentado", sets: "3", reps: "12-14", rir: "1", note: "Aislamiento de sóleo." }
          ]
        },
        {
          name: "Cierre",
          exercises: [
            { name: "Movilidad Pesada", sets: "1", reps: "20 min", rir: "N/A", note: "20 minutos de Movilidad Pesada (Clase de Flex / Isquiotibiales). (Auditoría de volumen: Isquiosurales 6 series, Glúteos 3 series, Abductores 2 series, Gemelos 3 series)." }
          ]
        }
      ]
    },
    Sábado: {
      title: "SÁBADO: Día 6 - BRAZOS (Comodín Analítico) - Fase de intensificación",
      blocks: [
        {
          name: "Bloque 0: Neural (15 Minutos)",
          exercises: [
            { name: "Movilidad de activación", sets: "1", reps: "5 min", rir: "N/A", note: "Este día es puramente periférico. Si fallas, el macrociclo no sufre daños." },
            { name: "Práctica de Handstand", sets: "1", reps: "5 min", rir: "N/A", note: "Calentamiento de muñecas, 1 serie de activación core." },
            { name: "Ranita", sets: "1", reps: "3 min", rir: "N/A", note: "Posición isometría" },
            { name: "Pike Holds", sets: "3", reps: "30 seg", rir: "N/A", note: "3 series x 30’" }
          ]
        },
        {
          name: "Bloque 1: Gimnasio - Aislamiento Total (RIR 1)",
          exercises: [
            { name: "Extensiones Tras Nuca (Polea)", sets: "3", reps: "12-14", rir: "1", note: "RIR 1 estricto" },
            { name: "Pushdown Clásico (Soga)", sets: "3", reps: "12-14", rir: "1", note: "RIR 1 estricto" },
            { name: "Extensión Unilateral", sets: "2", reps: "12-14", rir: "1", note: "RIR 1 estricto" },
            { name: "Curl Inclinado con Mancuernas", sets: "3", reps: "12-14", rir: "1", note: "RIR 1 estricto" },
            { name: "Curl Predicador", sets: "3", reps: "12-14", rir: "1", note: "RIR 1 estricto" },
            { name: "Curl Martillo", sets: "2", reps: "12-14", rir: "1", note: "RIR 1 estricto" },
            { name: "Y-raises (Higiene Articular)", sets: "3", reps: "12-14", rir: "1", note: "RIR 1 estricto" }
          ]
        },
        {
          name: "Cierre",
          exercises: [
            { name: "Cardio LISS", sets: "1", reps: "30 min", rir: "N/A", note: "30 minutos de Cardio LISS. (Auditoría de volumen: Tríceps 8 series, Bíceps 8 series)." }
          ]
        }
      ]
    }
  }
};

const meso2Routines = {
  5: {
    Lunes: {
      title: "LUNES: Día 1 - PUSH (Enfoque Empujes) - Descarga y Resíntesis",
      blocks: [
        {
          name: "Bloque 0: Neural (15 Minutos)",
          exercises: [
            { name: "Movilidad de activación", sets: "1", reps: "5 min", rir: "N/A", note: "Movilidad articular" },
            { name: "Práctica de Handstand", sets: "1", reps: "5 min", rir: "N/A", note: "Calentamiento de muñecas, 1 serie de activación core." },
            { name: "Ranita", sets: "1", reps: "3 min", rir: "N/A", note: "Posición isometría" },
            { name: "Chest to wall hold", sets: "3", reps: "60 seg", rir: "N/A", note: "3 series x 60’" }
          ]
        },
        {
          name: "Bloque 1: Calistenia (Rango Completo Asistido / RIR 3)",
          exercises: [
            { name: "Flexiones en Pica (Pike Push-ups)", sets: "1-2", reps: "5-6", rir: "3", note: "Ejecución terapéutica. Si sientes pesadez, apoyas las rodillas en un cajón." },
            { name: "Fondos en Paralelas (Dips) con Banda Pesada", sets: "1-2", reps: "6-8", rir: "3", note: "Bajas controlando y subes fluido, sin forzar el esternón." },
            { name: "Hollow Body Hold (Suelo)", sets: "1-2", reps: "15-20 seg", rir: "3", note: "Retroversión pélvica, cortas antes de sentir ardor." }
          ]
        },
        {
          name: "Bloque 2: Gimnasio - Músculos Grandes (-20% Peso / RIR 3)",
          exercises: [
            { name: "Press en Banca (Máquina)", sets: "1-2", reps: "8-10", rir: "3", note: "-20% Peso" },
            { name: "Press Militar con Mancuernas", sets: "1", reps: "8-10", rir: "3", note: "-20% Peso" }
          ]
        },
        {
          name: "Bloque 3: Gimnasio - Aislamiento (-20% Peso / RIR 3)",
          exercises: [
            { name: "Aperturas Pec-Dec", sets: "1", reps: "12-14", rir: "3", note: "-20% Peso" },
            { name: "Elevaciones Laterales", sets: "1-2", reps: "12-14", rir: "3", note: "-20% Peso" },
            { name: "Pushdown Clásico (Soga)", sets: "1", reps: "12-14", rir: "3", note: "-20% Peso" },
            { name: "Extensiones Tras Nuca (Polea)", sets: "1", reps: "12-14", rir: "3", note: "-20% Peso" }
          ]
        },
        {
          name: "Cierre",
          exercises: [
            { name: "Cardio LISS", sets: "1", reps: "20 min", rir: "N/A", note: "20 minutos de Cardio LISS." }
          ]
        }
      ]
    },
    Martes: {
      title: "MARTES: Día 2 - PULL (Enfoque Tracción) - Descarga y Resíntesis",
      blocks: [
        {
          name: "Bloque 0: Neural (15 Minutos)",
          exercises: [
            { name: "Movilidad de activación", sets: "1", reps: "5 min", rir: "N/A", note: "Movilidad articular" },
            { name: "Práctica de Handstand", sets: "1", reps: "5 min", rir: "N/A", note: "Calentamiento de muñecas, 1 serie de activación core." },
            { name: "Ranita", sets: "1", reps: "3 min", rir: "N/A", note: "Posición isometría" },
            { name: "Chest to wall hold", sets: "3", reps: "60 seg", rir: "N/A", note: "3 series x 60’" }
          ]
        },
        {
          name: "Bloque 1: Calistenia (Rango Completo Asistido / RIR 3)",
          exercises: [
            { name: "Dominadas Pronas (Pull-ups) con Banda Pesada", sets: "1-2", reps: "6-8", rir: "3", note: "La banda debe hacer el trabajo pesado; concéntrate 100% en la retracción escapular." },
            { name: "Dominadas Australianas (Remos barra baja)", sets: "1-2", reps: "8-10", rir: "3", note: "RIR 3" },
            { name: "Dragon Flag Asistido con Banda", sets: "1-2", reps: "4-6", rir: "3", note: "Rotación Semanal 3: La banda asiste en la fase de máximo estiramiento para proteger la lumbar." }
          ]
        },
        {
          name: "Bloque 2: Gimnasio - Músculos Grandes (-20% Peso / RIR 3)",
          exercises: [
            { name: "Remo con Pecho Apoyado (Palancas/Barra T)", sets: "1", reps: "8-10", rir: "3", note: "-20% Peso" }
          ]
        },
        {
          name: "Bloque 3: Gimnasio - Aislamiento y Agarre (-20% Peso / RIR 3)",
          exercises: [
            { name: "Pullover en Polea o Máquina", sets: "1", reps: "12-14", rir: "3", note: "-20% Peso" },
            { name: "Facepull", sets: "1", reps: "12-14", rir: "3", note: "-20% Peso" },
            { name: "Curl Inclinado con Mancuernas", sets: "1", reps: "12-14", rir: "3", note: "-20% Peso" },
            { name: "Curl Martillo", sets: "1", reps: "12-14", rir: "3", note: "-20% Peso" },
            { name: "Fuerza de Agarre: Dead Hang (Colgado pasivo en barra)", sets: "1", reps: "Tiempo tolerable", rir: "3", note: "1 serie x tiempo tolerable moderado. (Solo para descomprimir columna)." }
          ]
        },
        {
          name: "Cierre",
          exercises: [
            { name: "Cardio LISS", sets: "1", reps: "20 min", rir: "N/A", note: "20 minutos de Cardio LISS." }
          ]
        }
      ]
    },
    Miércoles: {
      title: "MIÉRCOLES: Día 3 - LEGS 1 (Foco Cuádriceps Aislado) - Descarga y Resíntesis",
      blocks: [
        {
          name: "Bloque 0: Activación Articular (5 Minutos)",
          exercises: [
            { name: "Rotaciones 90/90, Couch Stretch y Dorsiflexión", sets: "1", reps: "5 min", rir: "N/A", note: "Prohibido el trabajo de Handstand para resetear el SNC." }
          ]
        },
        {
          name: "Bloque 1: Gimnasio - Tensión Mecánica Pura (-20% Peso / RIR 3)",
          exercises: [
            { name: "Sillón de Cuádriceps (Extensiones)", sets: "1-2", reps: "10-12", rir: "3", note: "-20% Peso" },
            { name: "Prensa Inclinada / Sentadilla Hack", sets: "1-2", reps: "8-10", rir: "3", note: "-20% Peso" },
            { name: "Sentadillas Búlgaras en Smith", sets: "1", reps: "8-10", rir: "3", note: "Torso erguido, sin forzar la profundidad máxima." },
            { name: "Aductores", sets: "1", reps: "12-14", rir: "3", note: "-20% Peso" },
            { name: "Elevaciones de Talón de Pie", sets: "1-2", reps: "12-14", rir: "3", note: "-20% Peso" }
          ]
        },
        {
          name: "Cierre",
          exercises: [
            { name: "Movilidad Pesada", sets: "1", reps: "20 min", rir: "N/A", note: "20 minutos de Movilidad Pesada (Clase de Flex / Spagat / Pancake)." }
          ]
        }
      ]
    },
    Jueves: {
      title: "JUEVES: Día 4 - TREN SUPERIOR HÍBRIDO - Descarga y Resíntesis",
      blocks: [
        {
          name: "Bloque 0: Neural (15 Minutos)",
          exercises: [
            { name: "Movilidad de activación", sets: "1", reps: "5 min", rir: "N/A", note: "Movilidad articular" },
            { name: "Práctica de Handstand", sets: "1", reps: "5 min", rir: "N/A", note: "Calentamiento de muñecas, 1 serie de activación core." },
            { name: "Ranita", sets: "1", reps: "3 min", rir: "N/A", note: "Posición isometría" },
            { name: "Chest to wall hold", sets: "3", reps: "60 seg", rir: "N/A", note: "3 series x 60’" }
          ]
        },
        {
          name: "Bloque 1: Calistenia (Rango Completo Asistido / RIR 3)",
          exercises: [
            { name: "Flexiones Estándar (Push-ups) Asistidas con Banda", sets: "1-2", reps: "8-10", rir: "3", note: "RIR 3" },
            { name: "Dominadas Supinas (Chin-ups) con Banda Pesada", sets: "1-2", reps: "6-8", rir: "3", note: "RIR 3" },
            { name: "L-sit (Isometría asistida o en Tuck)", sets: "1-2", reps: "5-10 seg", rir: "3", note: "Versión agrupada o apoyando talones levemente, RIR 3." }
          ]
        },
        {
          name: "Bloque 2: Gimnasio - Músculos Grandes (-20% Peso / RIR 3)",
          exercises: [
            { name: "Press Inclinado (Máquina Convergente)", sets: "1-2", reps: "8-10", rir: "3", note: "-20% Peso" },
            { name: "Remo Cable Polea con agarre abierto", sets: "1-2", reps: "8-10", rir: "3", note: "-20% Peso" }
          ]
        },
        {
          name: "Bloque 3: Gimnasio - Aislamiento y Agarre (-20% Peso / RIR 3)",
          exercises: [
            { name: "Pájaros en banco (Haz posterior)", sets: "1", reps: "12-14", rir: "3", note: "-20% Peso" },
            { name: "Elevaciones Laterales", sets: "1", reps: "12-14", rir: "3", note: "-20% Peso" },
            { name: "Extensiones Tras Nuca (Polea)", sets: "1", reps: "12-14", rir: "3", note: "-20% Peso" },
            { name: "Curl Scott o Predicador", sets: "1", reps: "12-14", rir: "3", note: "-20% Peso" },
            { name: "Fuerza de Agarre: Plate Pinch", sets: "1", reps: "Tiempo moderado", rir: "3", note: "1 serie x tiempo moderado." }
          ]
        },
        {
          name: "Cierre",
          exercises: [
            { name: "Cardio LISS", sets: "1", reps: "20 min", rir: "N/A", note: "20 minutos de Cardio LISS." }
          ]
        }
      ]
    },
    Viernes: {
      title: "VIERNES: Día 5 - LEGS 2 (Foco Isquiosurales y Glúteo) - Descarga y Resíntesis",
      blocks: [
        {
          name: "Bloque 0: Activación Articular (5 Minutos)",
          exercises: [
            { name: "Rotaciones 90/90, Couch Stretch y Dorsiflexión", sets: "1", reps: "5 min", rir: "N/A", note: "Prohibido el trabajo de Handstand para resetear el SNC." }
          ]
        },
        {
          name: "Bloque 1: Gimnasio - Tensión Mecánica Pura (-20% Peso / RIR 3)",
          exercises: [
            { name: "Peso Muerto Rumano (RDL)", sets: "2", reps: "8-10", rir: "3", note: "Movimiento terapéutico para oxigenar la cadena posterior." },
            { name: "Hip Thrust o Glute Bridge", sets: "1-2", reps: "8-10", rir: "3", note: "-20% Peso" }
          ]
        },
        {
          name: "Bloque 2: Gimnasio - Aislamiento y Rehabilitación (-20% Peso / RIR 3)",
          exercises: [
            { name: "Curl Femoral (Sentado preferentemente)", sets: "1", reps: "12-15", rir: "3", note: "-20% Peso" },
            { name: "Abductores", sets: "1", reps: "12-14", rir: "3", note: "-20% Peso" },
            { name: "Elevaciones de Talón Sentado", sets: "1-2", reps: "12-14", rir: "3", note: "-20% Peso" }
          ]
        },
        {
          name: "Cierre",
          exercises: [
            { name: "Movilidad Pesada", sets: "1", reps: "20 min", rir: "N/A", note: "20 minutos de Movilidad Pesada (Clase de Flex / Isquiotibiales)." }
          ]
        }
      ]
    },
    Sábado: {
      title: "SÁBADO: Día 6 - BRAZOS (Comodín Analítico) - Descarga y Resíntesis",
      blocks: [
        {
          name: "Bloque 0: Neural (15 Minutos)",
          exercises: [
            { name: "Movilidad de activación", sets: "1", reps: "5 min", rir: "N/A", note: "Este día es puramente periférico. Si fallas, el macrociclo no sufre daños." },
            { name: "Práctica de Handstand", sets: "1", reps: "5 min", rir: "N/A", note: "Calentamiento de muñecas, 1 serie de activación core." },
            { name: "Ranita", sets: "1", reps: "3 min", rir: "N/A", note: "Posición isometría" },
            { name: "Chest to wall hold", sets: "3", reps: "60 seg", rir: "N/A", note: "3 series x 60’" }
          ]
        },
        {
          name: "Bloque 1: Gimnasio - Aislamiento Total (-20% Peso / RIR 3)",
          exercises: [
            { name: "Extensiones Tras Nuca (Polea)", sets: "1-2", reps: "12-14", rir: "3", note: "-20% Peso" },
            { name: "Pushdown Clásico (Soga)", sets: "1-2", reps: "12-14", rir: "3", note: "-20% Peso" },
            { name: "Extensión Unilateral", sets: "1", reps: "12-14", rir: "3", note: "-20% Peso" },
            { name: "Curl Inclinado con Mancuernas", sets: "1-2", reps: "12-14", rir: "3", note: "-20% Peso" },
            { name: "Curl Predicador", sets: "1-2", reps: "12-14", rir: "3", note: "-20% Peso" },
            { name: "Curl Martillo", sets: "1", reps: "12-14", rir: "3", note: "-20% Peso" },
            { name: "Y-raises (Higiene Articular)", sets: "1-2", reps: "12-14", rir: "3", note: "-20% Peso" }
          ]
        },
        {
          name: "Cierre",
          exercises: [
            { name: "Cardio LISS", sets: "1", reps: "30 min", rir: "N/A", note: "30 minutos de Cardio LISS." }
          ]
        }
      ]
    }
  },
  6: {
    Lunes: {
      title: "LUNES: Día 1 - PUSH (Enfoque Empujes) - Reinicio y Choque Isométrico",
      blocks: [
        {
          name: "Bloque 0: Neural (15 Minutos)",
          exercises: [
            { name: "Movilidad de activación", sets: "1", reps: "5 min", rir: "N/A", note: "Movilidad articular" },
            { name: "Práctica de Handstand", sets: "1", reps: "5 min", rir: "N/A", note: "Calentamiento de muñecas, 1 serie de activación core." },
            { name: "Ranita", sets: "1", reps: "3 min", rir: "N/A", note: "Posición isometría" },
            { name: "Chest to wall hold", sets: "3", reps: "60 seg", rir: "N/A", note: "3 series x 60’" }
          ]
        },
        {
          name: "Bloque 1: Calistenia (Isometrías Estratégicas / RIR 2)",
          exercises: [
            { name: "Flexiones en Pica (Pike Push-ups)", sets: "2", reps: "5-6", rir: "2", note: "Pausa de 2 segundos arriba, bloqueando los codos y empujando el suelo para máxima elevación escapular." },
            { name: "Fondos en Paralelas (Dips)", sets: "3", reps: "6-8", rir: "2", note: "Pausa de 2 segundos arriba en el bloqueo, con depresión escapular inquebrantable." },
            { name: "Hollow Body Hold (Suelo)", sets: "3", reps: "20-30 seg", rir: "2", note: "Retroversión pélvica absoluta." }
          ]
        },
        {
          name: "Bloque 2: Gimnasio - Músculos Grandes (Pesado / RIR 2)",
          exercises: [
            { name: "Press en Banca (Máquina)", sets: "3", reps: "6-8", rir: "2", note: "Pesado / RIR 2" },
            { name: "Press Militar con Mancuernas", sets: "2", reps: "6-8", rir: "2", note: "Pesado / RIR 2" }
          ]
        },
        {
          name: "Bloque 3: Gimnasio - Aislamiento (RIR 2)",
          exercises: [
            { name: "Aperturas Pec-Dec", sets: "2", reps: "10-12", rir: "2", note: "RIR 2" },
            { name: "Elevaciones Laterales", sets: "3", reps: "10-12", rir: "2", note: "RIR 2" },
            { name: "Pushdown Clásico (Soga)", sets: "2", reps: "10-12", rir: "2", note: "RIR 2" },
            { name: "Extensiones Tras Nuca (Polea)", sets: "2", reps: "10-12", rir: "2", note: "RIR 2" }
          ]
        },
        {
          name: "Cierre",
          exercises: [
            { name: "Cardio LISS", sets: "1", reps: "20 min", rir: "N/A", note: "20 minutos de Cardio LISS." }
          ]
        }
      ]
    },
    Martes: {
      title: "MARTES: Día 2 - PULL (Enfoque Tracción) - Reinicio y Choque Isométrico",
      blocks: [
        {
          name: "Bloque 0: Neural (15 Minutos)",
          exercises: [
            { name: "Movilidad de activación", sets: "1", reps: "5 min", rir: "N/A", note: "Movilidad articular" },
            { name: "Práctica de Handstand", sets: "1", reps: "5 min", rir: "N/A", note: "Calentamiento de muñecas, 1 serie de activación core." },
            { name: "Ranita", sets: "1", reps: "3 min", rir: "N/A", note: "Posición isometría" },
            { name: "Chest to wall hold", sets: "3", reps: "60 seg", rir: "N/A", note: "3 series x 60’" }
          ]
        },
        {
          name: "Bloque 1: Calistenia (Isometrías Estratégicas / RIR 2)",
          exercises: [
            { name: "Dominadas Pronas (Pull-ups)", sets: "2", reps: "5-6", rir: "2", note: "Pausa de 2 segundos arriba con la barbilla sobre la barra, retracción total." },
            { name: "Dominadas Australianas (Remos barra baja)", sets: "2", reps: "8-10", rir: "2", note: "Pausa de 2 segundos tocando la barra con el pecho." },
            { name: "Dragon Flag (Negativas Excéntricas)", sets: "3", reps: "3-4", rir: "2", note: "Reinicio del ciclo de rotación abdominal. Subes y resistes la bajada en 4-5 segundos, dejando 2 repeticiones en el tanque." }
          ]
        },
        {
          name: "Bloque 2: Gimnasio - Músculos Grandes (Pesado / RIR 2)",
          exercises: [
            { name: "Remo con Pecho Apoyado (Palancas/Barra T)", sets: "2", reps: "6-8", rir: "2", note: "Pesado / RIR 2" }
          ]
        },
        {
          name: "Bloque 3: Gimnasio - Aislamiento y Agarre (RIR 2)",
          exercises: [
            { name: "Pullover en Polea o Máquina", sets: "2", reps: "10-12", rir: "2", note: "RIR 2" },
            { name: "Facepull", sets: "2", reps: "10-12", rir: "2", note: "RIR 2" },
            { name: "Curl Inclinado con Mancuernas", sets: "2", reps: "10-12", rir: "2", note: "RIR 2" },
            { name: "Curl Martillo", sets: "2", reps: "10-12", rir: "2", note: "RIR 2" },
            { name: "Fuerza de Agarre: Dead Hang (Colgado pasivo en barra)", sets: "2", reps: "Tiempo tolerable", rir: "2", note: "2 series x tiempo tolerable." }
          ]
        },
        {
          name: "Cierre",
          exercises: [
            { name: "Cardio LISS", sets: "1", reps: "20 min", rir: "N/A", note: "20 minutos de Cardio LISS." }
          ]
        }
      ]
    },
    Miércoles: {
      title: "MIÉRCOLES: Día 3 - LEGS 1 (Foco Cuádriceps Aislado) - Reinicio y Choque Isométrico",
      blocks: [
        {
          name: "Bloque 0: Activación Articular (5 Minutos)",
          exercises: [
            { name: "Rotaciones 90/90, Couch Stretch y Dorsiflexión", sets: "1", reps: "5 min", rir: "N/A", note: "Prohibido el trabajo de Handstand para resetear el SNC." }
          ]
        },
        {
          name: "Bloque 1: Gimnasio - Tensión Mecánica Pura (Pesado / RIR 2)",
          exercises: [
            { name: "Sillón de Cuádriceps (Extensiones)", sets: "3", reps: "10-12", rir: "2", note: "Aislamiento puro." },
            { name: "Prensa Inclinada / Sentadilla Hack", sets: "3", reps: "6-8", rir: "2", note: "Carga mayor, controlando la excéntrica." },
            { name: "Sentadillas Búlgaras en Smith o Mancuernas", sets: "2", reps: "6-8", rir: "2", note: "Torso erguido." },
            { name: "Aductores", sets: "2", reps: "10-12", rir: "2", note: "RIR 2" },
            { name: "Elevaciones de Talón de Pie", sets: "3", reps: "10-12", rir: "2", note: "RIR 2" }
          ]
        },
        {
          name: "Cierre",
          exercises: [
            { name: "Movilidad Pesada", sets: "1", reps: "20 min", rir: "N/A", note: "20 minutos de Movilidad Pesada (Clase de Flex / Spagat / Pancake)." }
          ]
        }
      ]
    },
    Jueves: {
      title: "JUEVES: Día 4 - TREN SUPERIOR HÍBRIDO - Reinicio y Choque Isométrico",
      blocks: [
        {
          name: "Bloque 0: Neural (15 Minutos)",
          exercises: [
            { name: "Movilidad de activación", sets: "1", reps: "5 min", rir: "N/A", note: "Movilidad articular" },
            { name: "Práctica de Handstand", sets: "1", reps: "5 min", rir: "N/A", note: "Calentamiento de muñecas, 1 serie de activación core." },
            { name: "Ranita", sets: "1", reps: "3 min", rir: "N/A", note: "Posición isometría" },
            { name: "Chest to wall hold", sets: "3", reps: "60 seg", rir: "N/A", note: "3 series x 60’" }
          ]
        },
        {
          name: "Bloque 1: Calistenia (Isometrías Estratégicas / RIR 2)",
          exercises: [
            { name: "Flexiones Estándar (Push-ups)", sets: "3", reps: "8-10", rir: "2", note: "Pausa de 2 segundos arriba, máxima protracción." },
            { name: "Dominadas Supinas (Chin-ups)", sets: "3", reps: "5-6", rir: "2", note: "Pausa de 2 segundos arriba, máxima flexión de bíceps." },
            { name: "L-sit (Isometría)", sets: "3", reps: "10-15 seg", rir: "2", note: "Compresión pura, RIR 2." }
          ]
        },
        {
          name: "Bloque 2: Gimnasio - Músculos Grandes (Pesado / RIR 2)",
          exercises: [
            { name: "Press Inclinado (Máquina Convergente)", sets: "3", reps: "6-8", rir: "2", note: "Pesado / RIR 2" },
            { name: "Remo Cable Polea con agarre abierto", sets: "3", reps: "6-8", rir: "2", note: "Pesado / RIR 2" }
          ]
        },
        {
          name: "Bloque 3: Gimnasio - Aislamiento y Agarre (RIR 2)",
          exercises: [
            { name: "Pájaros en banco (Haz posterior)", sets: "2", reps: "10-12", rir: "2", note: "RIR 2" },
            { name: "Elevaciones Laterales", sets: "2", reps: "10-12", rir: "2", note: "RIR 2" },
            { name: "Extensiones Tras Nuca (Polea)", sets: "2", reps: "10-12", rir: "2", note: "RIR 2" },
            { name: "Curl Scott o Predicador", sets: "2", reps: "10-12", rir: "2", note: "RIR 2" },
            { name: "Fuerza de Agarre: Plate Pinch", sets: "2", reps: "Tiempo tolerable", rir: "2", note: "2 series x tiempo tolerable." }
          ]
        },
        {
          name: "Cierre",
          exercises: [
            { name: "Cardio LISS", sets: "1", reps: "20 min", rir: "N/A", note: "20 minutos de Cardio LISS." }
          ]
        }
      ]
    },
    Viernes: {
      title: "VIERNES: Día 5 - LEGS 2 (Foco Isquiosurales y Glúteo) - Reinicio y Choque Isométrico",
      blocks: [
        {
          name: "Bloque 0: Activación Articular (5 Minutos)",
          exercises: [
            { name: "Rotaciones 90/90, Couch Stretch y Dorsiflexión", sets: "1", reps: "5 min", rir: "N/A", note: "Prohibido el trabajo de Handstand para resetear el SNC." }
          ]
        },
        {
          name: "Bloque 1: Gimnasio - Tensión Mecánica Pura (Pesado / RIR 2)",
          exercises: [
            { name: "Peso Muerto Rumano (RDL)", sets: "4", reps: "6-8", rir: "2", note: "Tu motor de hipertrofia. Carga pesada, bisagra estricta." },
            { name: "Hip Thrust o Glute Bridge", sets: "3", reps: "6-8", rir: "2", note: "Pesado / RIR 2" }
          ]
        },
        {
          name: "Bloque 2: Gimnasio - Aislamiento y Rehabilitación (RIR 2)",
          exercises: [
            { name: "Curl Femoral (Sentado preferentemente)", sets: "2", reps: "10-12", rir: "2", note: "Enfoque en bombeo de la fosa poplítea." },
            { name: "Abductores", sets: "2", reps: "10-12", rir: "2", note: "RIR 2" },
            { name: "Elevaciones de Talón Sentado", sets: "3", reps: "10-12", rir: "2", note: "RIR 2" }
          ]
        },
        {
          name: "Cierre",
          exercises: [
            { name: "Movilidad Pesada", sets: "1", reps: "20 min", rir: "N/A", note: "20 minutos de Movilidad Pesada (Clase de Flex / Isquiotibiales)." }
          ]
        }
      ]
    },
    Sábado: {
      title: "SÁBADO: Día 6 - BRAZOS (Comodín Analítico) - Reinicio y Choque Isométrico",
      blocks: [
        {
          name: "Bloque 0: Neural (15 Minutos)",
          exercises: [
            { name: "Movilidad de activación", sets: "1", reps: "5 min", rir: "N/A", note: "Día puramente periférico." },
            { name: "Práctica de Handstand", sets: "1", reps: "5 min", rir: "N/A", note: "Calentamiento de muñecas, 1 serie de activación core." },
            { name: "Ranita", sets: "1", reps: "3 min", rir: "N/A", note: "Posición isometría" },
            { name: "Chest to wall hold", sets: "3", reps: "60 seg", rir: "N/A", note: "3 series x 60’" }
          ]
        },
        {
          name: "Bloque 1: Gimnasio - Aislamiento Total (RIR 2)",
          exercises: [
            { name: "Extensiones Tras Nuca (Polea)", sets: "3", reps: "10-12", rir: "2", note: "RIR 2" },
            { name: "Pushdown Clásico (Soga)", sets: "3", reps: "10-12", rir: "2", note: "RIR 2" },
            { name: "Extensión Unilateral", sets: "2", reps: "10-12", rir: "2", note: "RIR 2" },
            { name: "Curl Inclinado con Mancuernas", sets: "3", reps: "10-12", rir: "2", note: "RIR 2" },
            { name: "Curl Predicador", sets: "3", reps: "10-12", rir: "2", note: "RIR 2" },
            { name: "Curl Martillo", sets: "2", reps: "10-12", rir: "2", note: "RIR 2" },
            { name: "Y-raises (Higiene Articular)", sets: "3", reps: "10-12", rir: "2", note: "RIR 2" }
          ]
        },
        {
          name: "Cierre",
          exercises: [
            { name: "Cardio LISS", sets: "1", reps: "30 min", rir: "N/A", note: "30 minutos de Cardio LISS." }
          ]
        }
      ]
    }
  },
  7: {
    Lunes: {
      title: "LUNES: Día 1 - PUSH (Enfoque Empujes) - Clímax Estructural y Miotrauma Controlado",
      blocks: [
        {
          name: "Bloque 0: Neural (15 Minutos)",
          exercises: [
            { name: "Movilidad de activación", sets: "1", reps: "5 min", rir: "N/A", note: "Movilidad articular" },
            { name: "Práctica de Handstand", sets: "1", reps: "5 min", rir: "N/A", note: "Calentamiento de muñecas, 1 serie de activación core." },
            { name: "Ranita", sets: "1", reps: "3 min", rir: "N/A", note: "Posición isometría" },
            { name: "Chest to wall hold", sets: "3", reps: "60 seg", rir: "N/A", note: "3 series x 60’" }
          ]
        },
        {
          name: "Bloque 1: Calistenia (Negativas Puras Lastradas / RIR 0)",
          exercises: [
            { name: "Flexiones en Pica (Pike Push-ups) Excéntricas", sets: "2", reps: "4-5", rir: "0", note: "Te asistes para subir. Bajas en 5 segundos con elevación escapular máxima. Añade chaleco si es necesario." },
            { name: "Fondos en Paralelas (Dips) - Negativas Lastradas", sets: "3", reps: "4-5", rir: "0", note: "Saltas al bloqueo superior. Resistes la bajada en 5 segundos. Lastre obligatorio si no alcanzas el fallo." },
            { name: "Hollow Body Hold (Suelo)", sets: "3", reps: "Max tiempo", rir: "0", note: "Sostienes la retroversión hasta el colapso técnico." }
          ]
        },
        {
          name: "Bloque 2: Gimnasio - Músculos Grandes (Pesado / RIR 0)",
          exercises: [
            { name: "Press en Banca (Máquina)", sets: "3", reps: "6-8", rir: "0", note: "Última serie RIR 0 absoluto." },
            { name: "Press Militar con Mancuernas", sets: "2", reps: "6-8", rir: "0", note: "Fallo técnico en la última." }
          ]
        },
        {
          name: "Bloque 3: Gimnasio - Aislamiento (RIR 0 + Metodologías)",
          exercises: [
            { name: "Aperturas Pec-Dec", sets: "2", reps: "10-12", rir: "0", note: "Última serie: Drop Set al fallo." },
            { name: "Elevaciones Laterales", sets: "3", reps: "10-12", rir: "0", note: "Última serie: Drop Set al fallo." },
            { name: "Pushdown Clásico (Soga)", sets: "2", reps: "10-12", rir: "0", note: "Última serie: Rest-Pause." },
            { name: "Extensiones Tras Nuca (Polea)", sets: "2", reps: "10-12", rir: "0", note: "Última serie: Rest-Pause." }
          ],
          intensityTechnique: "Drop Set en Aperturas Pec-Dec y Elevaciones Laterales; Rest-Pause en Pushdown Clásico y Extensiones Tras Nuca."
        },
        {
          name: "Cierre",
          exercises: [
            { name: "Cardio LISS", sets: "1", reps: "20 min", rir: "N/A", note: "20 minutos de Cardio LISS." }
          ]
        }
      ]
    },
    Martes: {
      title: "MARTES: Día 2 - PULL (Enfoque Tracción) - Clímax Estructural y Miotrauma Controlado",
      blocks: [
        {
          name: "Bloque 0: Neural (15 Minutos)",
          exercises: [
            { name: "Movilidad de activación", sets: "1", reps: "5 min", rir: "N/A", note: "Movilidad articular" },
            { name: "Práctica de Handstand", sets: "1", reps: "5 min", rir: "N/A", note: "Calentamiento de muñecas, 1 serie de activación core." },
            { name: "Ranita", sets: "1", reps: "3 min", rir: "N/A", note: "Posición isometría" },
            { name: "Chest to wall hold", sets: "3", reps: "60 seg", rir: "N/A", note: "3 series x 60’" }
          ]
        },
        {
          name: "Bloque 1: Calistenia (Negativas Puras Lastradas / RIR 0)",
          exercises: [
            { name: "Dominadas Pronas (Pull-ups) - Negativas Lastradas", sets: "2", reps: "4-5", rir: "0", note: "Cajón para subir. Bajas en 5 segundos con lastre garantizando el fallo excéntrico." },
            { name: "Dominadas Australianas (Remos barra baja) Excéntricas", sets: "2", reps: "6-8", rir: "0", note: "Te impulsas, bajas hiper-lento." },
            { name: "Dragon Flag (Negativas a Una Pierna)", sets: "3", reps: "4-6", rir: "0", note: "Rotación Semanal 8: El máximo miotrauma. Extiendes una pierna, subes agrupada y bajas controlando la palanca máxima hasta el fallo. RIR 0." }
          ]
        },
        {
          name: "Bloque 2: Gimnasio - Músculos Grandes (Pesado / RIR 0)",
          exercises: [
            { name: "Remo con Pecho Apoyado (Palancas/Barra T)", sets: "2", reps: "6-8", rir: "0", note: "Última serie RIR 0." }
          ]
        },
        {
          name: "Bloque 3: Gimnasio - Aislamiento y Agarre (RIR 0 + Metodologías)",
          exercises: [
            { name: "Pullover en Polea o Máquina", sets: "2", reps: "10-12", rir: "0", note: "Última serie: Drop Set." },
            { name: "Facepull", sets: "2", reps: "10-12", rir: "0", note: "Fallo técnico sin perder rotación externa." },
            { name: "Curl Inclinado con Mancuernas", sets: "2", reps: "10-12", rir: "0", note: "Última serie: Rest-Pause." },
            { name: "Curl Martillo", sets: "2", reps: "10-12", rir: "0", note: "Última serie: Rest-Pause." },
            { name: "Fuerza de Agarre: Dead Hang (Colgado pasivo en barra)", sets: "2", reps: "Max tiempo", rir: "0", note: "2 series x Máximo tiempo (hasta soltar la barra)." }
          ],
          intensityTechnique: "Drop Set en Pullover; Rest-Pause en Curl Inclinado y Curl Martillo."
        },
        {
          name: "Cierre",
          exercises: [
            { name: "Cardio LISS", sets: "1", reps: "20 min", rir: "N/A", note: "20 minutos de Cardio LISS." }
          ]
        }
      ]
    },
    Miércoles: {
      title: "MIÉRCOLES: Día 3 - LEGS 1 (Foco Cuádriceps Aislado) - Clímax Estructural y Miotrauma Controlado",
      blocks: [
        {
          name: "Bloque 0: Activación Articular (5 Minutos)",
          exercises: [
            { name: "Rotaciones 90/90, Couch Stretch y Dorsiflexión", sets: "1", reps: "5 min", rir: "N/A", note: "Prohibido el trabajo de Handstand para resetear el SNC." }
          ]
        },
        {
          name: "Bloque 1: Gimnasio - Tensión Mecánica Pura (Pesado / RIR 0)",
          exercises: [
            { name: "Sillón de Cuádriceps (Extensiones)", sets: "3", reps: "10-12", rir: "0", note: "Última serie: Drop Set brutal." },
            { name: "Prensa Inclinada / Sentadilla Hack", sets: "3", reps: "6-8", rir: "0", note: "Última serie RIR 0." },
            { name: "Sentadillas Búlgaras en Smith o Mancuernas", sets: "2", reps: "6-8", rir: "1", note: "RIR 1 estricto. Regla clínica: prohibido el fallo absoluto aquí para proteger rodilla." },
            { name: "Aductores", sets: "2", reps: "10-12", rir: "0", note: "Última serie: Rest-Pause." },
            { name: "Elevaciones de Talón de Pie", sets: "3", reps: "10-12", rir: "0", note: "Última serie: Drop Set." }
          ],
          intensityTechnique: "Drop Set en Sillón de Cuádriceps y Elevaciones de Talón; Rest-Pause en Aductores."
        },
        {
          name: "Cierre",
          exercises: [
            { name: "Movilidad Pesada", sets: "1", reps: "20 min", rir: "N/A", note: "20 minutos de Movilidad Pesada (Clase de Flex / Spagat / Pancake)." }
          ]
        }
      ]
    },
    Jueves: {
      title: "JUEVES: Día 4 - TREN SUPERIOR HÍBRIDO - Clímax Estructural y Miotrauma Controlado",
      blocks: [
        {
          name: "Bloque 0: Neural (15 Minutos)",
          exercises: [
            { name: "Movilidad de activación", sets: "1", reps: "5 min", rir: "N/A", note: "Movilidad articular" },
            { name: "Práctica de Handstand", sets: "1", reps: "5 min", rir: "N/A", note: "Calentamiento de muñecas, 1 serie de activación core." },
            { name: "Ranita", sets: "1", reps: "3 min", rir: "N/A", note: "Posición isometría" },
            { name: "Chest to wall hold", sets: "3", reps: "60 seg", rir: "N/A", note: "3 series x 60’" }
          ]
        },
        {
          name: "Bloque 1: Calistenia (Negativas Puras Lastradas / RIR 0)",
          exercises: [
            { name: "Flexiones Estándar (Push-ups) Excéntricas", sets: "3", reps: "5-6", rir: "0", note: "Apoyas rodillas para subir, bajas en 5 segundos estrictos. Lastre en espalda si es necesario." },
            { name: "Dominadas Supinas (Chin-ups) - Negativas Lastradas", sets: "3", reps: "4-5", rir: "0", note: "Salto al bloqueo y bajada hiper-lenta de 5 segundos." },
            { name: "L-sit (Isometría)", sets: "3", reps: "Max tiempo", rir: "0", note: "Hasta colapsar cuádriceps/psoas." }
          ]
        },
        {
          name: "Bloque 2: Gimnasio - Músculos Grandes (Pesado / RIR 0)",
          exercises: [
            { name: "Press Inclinado (Máquina Convergente)", sets: "3", reps: "6-8", rir: "0", note: "Última serie RIR 0." },
            { name: "Remo Cable Polea con agarre abierto", sets: "3", reps: "6-8", rir: "0", note: "Última serie RIR 0." }
          ]
        },
        {
          name: "Bloque 3: Gimnasio - Aislamiento y Agarre (RIR 0 + Metodologías)",
          exercises: [
            { name: "Pájaros en banco (Haz posterior)", sets: "2", reps: "10-12", rir: "0", note: "Última serie: Drop Set." },
            { name: "Elevaciones Laterales", sets: "2", reps: "10-12", rir: "0", note: "Última serie: Drop Set." },
            { name: "Extensiones Tras Nuca (Polea)", sets: "2", reps: "10-12", rir: "0", note: "Última serie: Rest-Pause." },
            { name: "Curl Scott o Predicador", sets: "2", reps: "10-12", rir: "0", note: "Última serie: Rest-Pause." },
            { name: "Fuerza de Agarre: Plate Pinch", sets: "2", reps: "Max tiempo", rir: "0", note: "2 series x Máximo tiempo hasta que el disco caiga." }
          ],
          intensityTechnique: "Drop Set en Pájaros y Elevaciones Laterales; Rest-Pause en Extensiones Tras Nuca y Curl Scott."
        },
        {
          name: "Cierre",
          exercises: [
            { name: "Cardio LISS", sets: "1", reps: "20 min", rir: "N/A", note: "20 minutos de Cardio LISS." }
          ]
        }
      ]
    },
    Viernes: {
      title: "VIERNES: Día 5 - LEGS 2 (Foco Isquiosurales y Glúteo) - Clímax Estructural y Miotrauma Controlado",
      blocks: [
        {
          name: "Bloque 0: Activación Articular (5 Minutos)",
          exercises: [
            { name: "Rotaciones 90/90, Couch Stretch y Dorsiflexión", sets: "1", reps: "5 min", rir: "N/A", note: "Prohibido el trabajo de Handstand para resetear el SNC." }
          ]
        },
        {
          name: "Bloque 1: Gimnasio - Tensión Mecánica Pura (Pesado / RIR 0)",
          exercises: [
            { name: "Peso Muerto Rumano (RDL)", sets: "4", reps: "6-8", rir: "1", note: "RIR 1 máximo. Prohibido el fallo absoluto en RDL para no exponer los discos lumbares." },
            { name: "Hip Thrust o Glute Bridge", sets: "3", reps: "6-8", rir: "0", note: "RIR 0 en la última." }
          ]
        },
        {
          name: "Bloque 2: Gimnasio - Aislamiento y Rehabilitación (RIR 0 + Metodologías)",
          exercises: [
            { name: "Curl Femoral (Sentado preferentemente)", sets: "2", reps: "10-12", rir: "0", note: "Última serie: Drop Set." },
            { name: "Abductores", sets: "2", reps: "10-12", rir: "0", note: "Última serie: Rest-Pause." },
            { name: "Elevaciones de Talón Sentado", sets: "3", reps: "10-12", rir: "0", note: "Última serie: Drop Set." }
          ],
          intensityTechnique: "Drop Set en Curl Femoral y Elevaciones de Talón Sentado; Rest-Pause en Abductores."
        },
        {
          name: "Cierre",
          exercises: [
            { name: "Movilidad Pesada", sets: "1", reps: "20 min", rir: "N/A", note: "20 minutos de Movilidad Pesada (Clase de Flex / Isquiotibiales)." }
          ]
        }
      ]
    },
    Sábado: {
      title: "SÁBADO: Día 6 - BRAZOS (Comodín Analítico) - Clímax Estructural y Miotrauma Controlado",
      blocks: [
        {
          name: "Bloque 0: Neural (15 Minutos)",
          exercises: [
            { name: "Movilidad de activación", sets: "1", reps: "5 min", rir: "N/A", note: "Movilidad articular" },
            { name: "Práctica de Handstand", sets: "1", reps: "5 min", rir: "N/A", note: "Calentamiento de muñecas, 1 serie de activación core." },
            { name: "Ranita", sets: "1", reps: "3 min", rir: "N/A", note: "Posición isometría" },
            { name: "Chest to wall hold", sets: "3", reps: "60 seg", rir: "N/A", note: "3 series x 60’" }
          ]
        },
        {
          name: "Bloque 1: Gimnasio - Aislamiento Total (RIR 0 + Metodologías)",
          exercises: [
            { name: "Extensiones Tras Nuca (Polea)", sets: "3", reps: "10-12", rir: "0", note: "Última serie: Drop Set." },
            { name: "Pushdown Clásico (Soga)", sets: "3", reps: "10-12", rir: "0", note: "Última serie: Drop Set." },
            { name: "Extensión Unilateral", sets: "2", reps: "10-12", rir: "0", note: "Fallo absoluto." },
            { name: "Curl Inclinado con Mancuernas", sets: "3", reps: "10-12", rir: "0", note: "Última serie: Rest-Pause." },
            { name: "Curl Predicador", sets: "3", reps: "10-12", rir: "0", note: "Última serie: Drop Set." },
            { name: "Curl Martillo", sets: "2", reps: "10-12", rir: "0", note: "Fallo absoluto." },
            { name: "Y-raises (Higiene Articular)", sets: "3", reps: "10-12", rir: "0", note: "RIR 0 técnico." }
          ],
          intensityTechnique: "Drop Set en Extensiones Tras Nuca, Pushdown Clásico y Curl Predicador; Rest-Pause en Curl Inclinado."
        },
        {
          name: "Cierre",
          exercises: [
            { name: "Cardio LISS", sets: "1", reps: "30 min", rir: "N/A", note: "30 minutos de Cardio LISS." }
          ]
        }
      ]
    }
  },
  8: {
    Lunes: {
      title: "LUNES: Día 1 - PUSH (Enfoque Empujes) - Mecanotransducción Profunda e Intensificación Pesada",
      blocks: [
        {
          name: "Bloque 0: Neural (15 Minutos)",
          exercises: [
            { name: "Movilidad de activación", sets: "1", reps: "5 min", rir: "N/A", note: "Movilidad articular" },
            { name: "Práctica de Handstand", sets: "1", reps: "5 min", rir: "N/A", note: "Calentamiento de muñecas, 1 serie de activación core." },
            { name: "Ranita", sets: "1", reps: "3 min", rir: "N/A", note: "Posición isometría" },
            { name: "Chest to wall hold", sets: "3", reps: "60 seg", rir: "N/A", note: "3 series x 60’" }
          ]
        },
        {
          name: "Bloque 1: Calistenia (Parciales Alargadas / RIR 1)",
          exercises: [
            { name: "Flexiones en Pica (Pike Push-ups)", sets: "2", reps: "6-8 medias reps", rir: "1", note: "Bajas hasta rozar el suelo con la cabeza y subes solo hasta la mitad del recorrido. No bloqueas los codos." },
            { name: "Fondos en Paralelas (Dips)", sets: "3", reps: "8-10 medias reps", rir: "1", note: "Bajas al punto de máximo estiramiento del pectoral y subes solo hasta que los codos formen un ángulo de 90 grados." },
            { name: "Hollow Body Hold (Suelo)", sets: "3", reps: "Max tiempo", rir: "1", note: "Máximo tiempo tolerable dejando 1-2 segundos en reserva (RIR 1)." }
          ]
        },
        {
          name: "Bloque 2: Gimnasio - Músculos Grandes (Pesado / RIR 1)",
          exercises: [
            { name: "Press en Banca (Máquina)", sets: "3", reps: "6-8", rir: "1", note: "Pesado / RIR 1" },
            { name: "Press Militar con Mancuernas", sets: "2", reps: "6-8", rir: "1", note: "Pesado / RIR 1" }
          ]
        },
        {
          name: "Bloque 3: Gimnasio - Aislamiento (RIR 1)",
          exercises: [
            { name: "Aperturas Pec-Dec", sets: "2", reps: "10-12", rir: "1", note: "RIR 1" },
            { name: "Elevaciones Laterales", sets: "3", reps: "10-12", rir: "1", note: "RIR 1" },
            { name: "Pushdown Clásico (Soga)", sets: "2", reps: "10-12", rir: "1", note: "RIR 1" },
            { name: "Extensiones Tras Nuca (Polea)", sets: "2", reps: "10-12", rir: "1", note: "RIR 1" }
          ]
        },
        {
          name: "Cierre",
          exercises: [
            { name: "Cardio LISS", sets: "1", reps: "20 min", rir: "N/A", note: "20 minutos de Cardio LISS." }
          ]
        }
      ]
    },
    Martes: {
      title: "MARTES: Día 2 - PULL (Enfoque Tracción) - Mecanotransducción Profunda e Intensificación Pesada",
      blocks: [
        {
          name: "Bloque 0: Neural (15 Minutos)",
          exercises: [
            { name: "Movilidad de activación", sets: "1", reps: "5 min", rir: "N/A", note: "Movilidad articular" },
            { name: "Práctica de Handstand", sets: "1", reps: "5 min", rir: "N/A", note: "Calentamiento de muñecas, 1 serie de activación core." },
            { name: "Ranita", sets: "1", reps: "3 min", rir: "N/A", note: "Posición isometría" },
            { name: "Chest to wall hold", sets: "3", reps: "60 seg", rir: "N/A", note: "3 series x 60’" }
          ]
        },
        {
          name: "Bloque 1: Calistenia (Parciales Alargadas / RIR 1)",
          exercises: [
            { name: "Dominadas Pronas (Pull-ups)", sets: "2", reps: "6-8 medias reps", rir: "1", note: "Arrancas desde colgado estirado, haces la retracción escapular, flexionas los brazos hasta la mitad y vuelves a bajar. La barbilla nunca pasa la barra hoy." },
            { name: "Dominadas Australianas (Remos barra baja)", sets: "2", reps: "10-12 medias reps", rir: "1", note: "Desde brazos completamente estirados hasta la mitad del tirón." },
            { name: "Dragon Flag Raise (Elevaciones Bottom-Up con Isometría)", sets: "3", reps: "4-6", rir: "1", note: "Rotación Semanal 6: Arrancas acostada plana en el suelo. Generas tensión pura para despegar la lumbar y la pelvis, sostienes la postura del Dragon Flag en el aire 2 segundos, y vuelves al suelo. RIR 1." }
          ]
        },
        {
          name: "Bloque 2: Gimnasio - Músculos Grandes (Pesado / RIR 1)",
          exercises: [
            { name: "Remo con Pecho Apoyado (Palancas/Barra T)", sets: "2", reps: "6-8", rir: "1", note: "Pesado / RIR 1" }
          ]
        },
        {
          name: "Bloque 3: Gimnasio - Aislamiento y Agarre (RIR 1)",
          exercises: [
            { name: "Pullover en Polea o Máquina", sets: "2", reps: "10-12", rir: "1", note: "RIR 1" },
            { name: "Facepull", sets: "2", reps: "10-12", rir: "1", note: "RIR 1" },
            { name: "Curl Inclinado con Mancuernas", sets: "2", reps: "10-12", rir: "1", note: "RIR 1" },
            { name: "Curl Martillo", sets: "2", reps: "10-12", rir: "1", note: "RIR 1" },
            { name: "Fuerza de Agarre: Dead Hang (Colgado pasivo en barra)", sets: "2", reps: "Tiempo sub-máximo", rir: "1", note: "2 series x tiempo sub-máximo (hasta que los dedos empiecen a ceder levemente)." }
          ]
        },
        {
          name: "Cierre",
          exercises: [
            { name: "Cardio LISS", sets: "1", reps: "20 min", rir: "N/A", note: "20 minutos de Cardio LISS." }
          ]
        }
      ]
    },
    Miércoles: {
      title: "MIÉRCOLES: Día 3 - LEGS 1 (Foco Cuádriceps Aislado) - Mecanotransducción Profunda e Intensificación Pesada",
      blocks: [
        {
          name: "Bloque 0: Activación Articular (5 Minutos)",
          exercises: [
            { name: "Rotaciones 90/90, Couch Stretch y Dorsiflexión", sets: "1", reps: "5 min", rir: "N/A", note: "Prohibido el trabajo de Handstand para resetear el SNC." }
          ]
        },
        {
          name: "Bloque 1: Gimnasio - Tensión Mecánica Pura (Pesado / RIR 1)",
          exercises: [
            { name: "Sillón de Cuádriceps (Extensiones)", sets: "3", reps: "10-12", rir: "1", note: "RIR 1" },
            { name: "Prensa Inclinada / Sentadilla Hack", sets: "3", reps: "6-8", rir: "1", note: "RIR 1" },
            { name: "Sentadillas Búlgaras en Smith o Mancuernas", sets: "2", reps: "6-8", rir: "1", note: "Rodilla viajando al máximo hacia adelante, frenando a RIR 1." },
            { name: "Aductores", sets: "2", reps: "10-12", rir: "1", note: "RIR 1" },
            { name: "Elevaciones de Talón de Pie", sets: "3", reps: "10-12", rir: "1", note: "RIR 1" }
          ]
        },
        {
          name: "Cierre",
          exercises: [
            { name: "Movilidad Pesada", sets: "1", reps: "20 min", rir: "N/A", note: "20 minutos de Movilidad Pesada (Clase de Flex / Spagat / Pancake)." }
          ]
        }
      ]
    },
    Jueves: {
      title: "JUEVES: Día 4 - TREN SUPERIOR HÍBRIDO - Mecanotransducción Profunda e Intensificación Pesada",
      blocks: [
        {
          name: "Bloque 0: Neural (15 Minutos)",
          exercises: [
            { name: "Movilidad de activación", sets: "1", reps: "5 min", rir: "N/A", note: "Movilidad articular" },
            { name: "Práctica de Handstand", sets: "1", reps: "5 min", rir: "N/A", note: "Calentamiento de muñecas, 1 serie de activación core." },
            { name: "Ranita", sets: "1", reps: "3 min", rir: "N/A", note: "Posición isometría" },
            { name: "Chest to wall hold", sets: "3", reps: "60 seg", rir: "N/A", note: "3 series x 60’" }
          ]
        },
        {
          name: "Bloque 1: Calistenia (Parciales Alargadas / RIR 1)",
          exercises: [
            { name: "Flexiones Estándar (Push-ups)", sets: "3", reps: "8-10 medias reps", rir: "1", note: "Desde el pecho rozando el suelo hasta la mitad de la extensión. Mantienes tensión constante en el pectoral." },
            { name: "Dominadas Supinas (Chin-ups)", sets: "3", reps: "6-8 medias reps", rir: "1", note: "Desde estiramiento total hasta que los codos formen 90 grados." },
            { name: "L-sit (Isometría)", sets: "3", reps: "Tiempo Sub-máximo", rir: "1", note: "Cortas la serie 1-2 segundos antes de que tus piernas caigan por fatiga." }
          ]
        },
        {
          name: "Bloque 2: Gimnasio - Músculos Grandes (Pesado / RIR 1)",
          exercises: [
            { name: "Press Inclinado (Máquina Convergente)", sets: "3", reps: "6-8", rir: "1", note: "Pesado / RIR 1" },
            { name: "Remo Cable Polea con agarre abierto", sets: "3", reps: "6-8", rir: "1", note: "Pesado / RIR 1" }
          ]
        },
        {
          name: "Bloque 3: Gimnasio - Aislamiento y Agarre (RIR 1)",
          exercises: [
            { name: "Pájaros en banco (Haz posterior)", sets: "2", reps: "10-12", rir: "1", note: "RIR 1" },
            { name: "Elevaciones Laterales", sets: "2", reps: "10-12", rir: "1", note: "RIR 1" },
            { name: "Extensiones Tras Nuca (Polea)", sets: "2", reps: "10-12", rir: "1", note: "RIR 1" },
            { name: "Curl Scott o Predicador", sets: "2", reps: "10-12", rir: "1", note: "RIR 1" },
            { name: "Fuerza de Agarre: Plate Pinch", sets: "2", reps: "Tiempo sub-máximo", rir: "1", note: "2 series x tiempo sub-máximo." }
          ]
        },
        {
          name: "Cierre",
          exercises: [
            { name: "Cardio LISS", sets: "1", reps: "20 min", rir: "N/A", note: "20 minutos de Cardio LISS." }
          ]
        }
      ]
    },
    Viernes: {
      title: "VIERNES: Día 5 - LEGS 2 (Foco Isquiosurales y Glúteo) - Mecanotransducción Profunda e Intensificación Pesada",
      blocks: [
        {
          name: "Bloque 0: Activación Articular (5 Minutos)",
          exercises: [
            { name: "Rotaciones 90/90, Couch Stretch y Dorsiflexión", sets: "1", reps: "5 min", rir: "N/A", note: "Prohibido el trabajo de Handstand para resetear el SNC." }
          ]
        },
        {
          name: "Bloque 1: Gimnasio - Tensión Mecánica Pura (Pesado / RIR 1)",
          exercises: [
            { name: "Peso Muerto Rumano (RDL)", sets: "4", reps: "6-8", rir: "1", note: "Exigencia absoluta de core. RIR 1 estricto." },
            { name: "Hip Thrust o Glute Bridge", sets: "3", reps: "6-8", rir: "1", note: "Pesado / RIR 1" }
          ]
        },
        {
          name: "Bloque 2: Gimnasio - Aislamiento y Rehabilitación (RIR 1)",
          exercises: [
            { name: "Curl Femoral (Sentado preferentemente)", sets: "2", reps: "10-12", rir: "1", note: "RIR 1" },
            { name: "Abductores", sets: "2", reps: "10-12", rir: "1", note: "RIR 1" },
            { name: "Elevaciones de Talón Sentado", sets: "3", reps: "10-12", rir: "1", note: "RIR 1" }
          ]
        },
        {
          name: "Cierre",
          exercises: [
            { name: "Movilidad Pesada", sets: "1", reps: "20 min", rir: "N/A", note: "20 minutos de Movilidad Pesada (Clase de Flex / Isquiotibiales)." }
          ]
        }
      ]
    },
    Sábado: {
      title: "SÁBADO: Día 6 - BRAZOS (Comodín Analítico) - Mecanotransducción Profunda e Intensificación Pesada",
      blocks: [
        {
          name: "Bloque 0: Neural (15 Minutos)",
          exercises: [
            { name: "Movilidad de activación", sets: "1", reps: "5 min", rir: "N/A", note: "Día puramente periférico." },
            { name: "Práctica de Handstand", sets: "1", reps: "5 min", rir: "N/A", note: "Calentamiento de muñecas, 1 serie de activación core." },
            { name: "Ranita", sets: "1", reps: "3 min", rir: "N/A", note: "Posición isometría" },
            { name: "Chest to wall hold", sets: "3", reps: "60 seg", rir: "N/A", note: "3 series x 60’" }
          ]
        },
        {
          name: "Bloque 1: Gimnasio - Aislamiento Total (RIR 1)",
          exercises: [
            { name: "Extensiones Tras Nuca (Polea)", sets: "3", reps: "10-12", rir: "1", note: "RIR 1" },
            { name: "Pushdown Clásico (Soga)", sets: "3", reps: "10-12", rir: "1", note: "RIR 1" },
            { name: "Extensión Unilateral", sets: "2", reps: "10-12", rir: "1", note: "RIR 1" },
            { name: "Curl Inclinado con Mancuernas", sets: "3", reps: "10-12", rir: "1", note: "RIR 1" },
            { name: "Curl Predicador", sets: "3", reps: "10-12", rir: "1", note: "RIR 1" },
            { name: "Curl Martillo", sets: "2", reps: "10-12", rir: "1", note: "RIR 1" },
            { name: "Y-raises (Higiene Articular)", sets: "3", reps: "10-12", rir: "1", note: "RIR 1" }
          ]
        },
        {
          name: "Cierre",
          exercises: [
            { name: "Cardio LISS", sets: "1", reps: "30 min", rir: "N/A", note: "30 minutos de Cardio LISS." }
          ]
        }
      ]
    }
  }
};

const meso3Routines = {
  9: {
    Lunes: {
      title: "LUNES: Día 1 - PUSH (Enfoque Empujes) - Descarga y Resíntesis",
      blocks: [
        {
          name: "Bloque 0: Neural (15 Minutos)",
          exercises: [
            { name: "Movilidad de activación", sets: "1", reps: "5 min", rir: "N/A", note: "Movilidad articular" },
            { name: "Práctica de Handstand", sets: "1", reps: "5 min", rir: "N/A", note: "Calentamiento de muñecas, 1 serie de activación core." },
            { name: "Toe Pulls", sets: "5", reps: "3", rir: "N/A", note: "5 series x 3" },
            { name: "Hell Pulls", sets: "5", reps: "3", rir: "N/A", note: "5 series x 3" },
            { name: "Kick ups to the wall", sets: "1", reps: "10/day", rir: "N/A", note: "10 por día" }
          ]
        },
        {
          name: "Bloque 1: Calistenia (Rango Completo Asistido / RIR 3)",
          exercises: [
            { name: "Flexiones en Pica (Pike Push-ups)", sets: "1-2", reps: "5-6", rir: "3", note: "Ejecución terapéutica. Si sientes pesadez, apoyas las rodillas en un cajón." },
            { name: "Fondos en Paralelas (Dips) con Banda Pesada", sets: "1-2", reps: "6-8", rir: "3", note: "Bajas controlando y subes fluido, sin forzar el esternón." },
            { name: "Hollow Body Hold (Suelo)", sets: "1-2", reps: "15-20 seg", rir: "3", note: "Retroversión pélvica, cortas antes de sentir ardor." }
          ]
        },
        {
          name: "Bloque 2: Gimnasio - Músculos Grandes (-20% Peso / RIR 3)",
          exercises: [
            { name: "Press en Banca (Máquina)", sets: "1-2", reps: "8-10", rir: "3", note: "-20% Peso" },
            { name: "Press Militar con Mancuernas", sets: "1", reps: "8-10", rir: "3", note: "-20% Peso" }
          ]
        },
        {
          name: "Bloque 3: Gimnasio - Aislamiento (-20% Peso / RIR 3)",
          exercises: [
            { name: "Aperturas Pec-Dec", sets: "1", reps: "12-14", rir: "3", note: "-20% Peso" },
            { name: "Elevaciones Laterales", sets: "1-2", reps: "12-14", rir: "3", note: "-20% Peso" },
            { name: "Pushdown Clásico (Soga)", sets: "1", reps: "12-14", rir: "3", note: "-20% Peso" },
            { name: "Extensiones Tras Nuca (Polea)", sets: "1", reps: "12-14", rir: "3", note: "-20% Peso" }
          ]
        },
        {
          name: "Cierre",
          exercises: [
            { name: "Cardio LISS", sets: "1", reps: "20 min", rir: "N/A", note: "20 minutos de Cardio LISS." }
          ]
        }
      ]
    },
    Martes: {
      title: "MARTES: Día 2 - PULL (Enfoque Tracción) - Descarga y Resíntesis",
      blocks: [
        {
          name: "Bloque 0: Neural (15 Minutos)",
          exercises: [
            { name: "Movilidad de activación", sets: "1", reps: "5 min", rir: "N/A", note: "Movilidad articular" },
            { name: "Práctica de Handstand", sets: "1", reps: "5 min", rir: "N/A", note: "Calentamiento de muñecas, 1 serie de activación core." },
            { name: "Toe Pulls", sets: "5", reps: "3", rir: "N/A", note: "5 series x 3" },
            { name: "Hell Pulls", sets: "5", reps: "3", rir: "N/A", note: "5 series x 3" },
            { name: "Kick ups to the wall", sets: "1", reps: "10/day", rir: "N/A", note: "10 por día" }
          ]
        },
        {
          name: "Bloque 1: Calistenia (Rango Completo Asistido / RIR 3)",
          exercises: [
            { name: "Dominadas Pronas (Pull-ups) con Banda Pesada", sets: "1-2", reps: "6-8", rir: "3", note: "La banda debe hacer el trabajo pesado; concéntrate 100% en la retracción escapular." },
            { name: "Dominadas Australianas (Remos barra baja)", sets: "1-2", reps: "8-10", rir: "3", note: "RIR 3" },
            { name: "Dragon Flag Asistido con Banda", sets: "1-2", reps: "4-6", rir: "3", note: "Rotación Semanal 3: La banda asiste en la fase de máximo estiramiento para proteger la lumbar." }
          ]
        },
        {
          name: "Bloque 2: Gimnasio - Músculos Grandes (-20% Peso / RIR 3)",
          exercises: [
            { name: "Remo con Pecho Apoyado (Palancas/Barra T)", sets: "1", reps: "8-10", rir: "3", note: "-20% Peso" }
          ]
        },
        {
          name: "Bloque 3: Gimnasio - Aislamiento y Agarre (-20% Peso / RIR 3)",
          exercises: [
            { name: "Pullover en Polea o Máquina", sets: "1", reps: "12-14", rir: "3", note: "-20% Peso" },
            { name: "Facepull", sets: "1", reps: "12-14", rir: "3", note: "-20% Peso" },
            { name: "Curl Inclinado con Mancuernas", sets: "1", reps: "12-14", rir: "3", note: "-20% Peso" },
            { name: "Curl Martillo", sets: "1", reps: "12-14", rir: "3", note: "-20% Peso" },
            { name: "Fuerza de Agarre: Dead Hang (Colgado pasivo en barra)", sets: "1", reps: "Tiempo tolerable", rir: "3", note: "1 serie x tiempo tolerable moderado. (Solo para descomprimir columna)." }
          ]
        },
        {
          name: "Cierre",
          exercises: [
            { name: "Cardio LISS", sets: "1", reps: "20 min", rir: "N/A", note: "20 minutos de Cardio LISS." }
          ]
        }
      ]
    },
    Miércoles: {
      title: "MIÉRCOLES: Día 3 - LEGS 1 (Foco Cuádriceps Aislado) - Descarga y Resíntesis",
      blocks: [
        {
          name: "Bloque 0: Activación Articular (5 Minutos)",
          exercises: [
            { name: "Rotaciones 90/90, Couch Stretch y Dorsiflexión", sets: "1", reps: "5 min", rir: "N/A", note: "Prohibido el trabajo de Handstand para resetear el SNC." }
          ]
        },
        {
          name: "Bloque 1: Gimnasio - Tensión Mecánica Pura (-20% Peso / RIR 3)",
          exercises: [
            { name: "Sillón de Cuádriceps (Extensiones)", sets: "1-2", reps: "10-12", rir: "3", note: "-20% Peso" },
            { name: "Prensa Inclinada / Sentadilla Hack", sets: "1-2", reps: "8-10", rir: "3", note: "-20% Peso" },
            { name: "Sentadillas Búlgaras en Smith", sets: "1", reps: "8-10", rir: "3", note: "Torso erguido, sin forzar la profundidad máxima." },
            { name: "Aductores", sets: "1", reps: "12-14", rir: "3", note: "-20% Peso" },
            { name: "Elevaciones de Talón de Pie", sets: "1-2", reps: "12-14", rir: "3", note: "-20% Peso" }
          ]
        },
        {
          name: "Cierre",
          exercises: [
            { name: "Movilidad Pesada", sets: "1", reps: "20 min", rir: "N/A", note: "20 minutos de Movilidad Pesada (Clase de Flex / Spagat / Pancake)." }
          ]
        }
      ]
    },
    Jueves: {
      title: "JUEVES: Día 4 - TREN SUPERIOR HÍBRIDO - Descarga y Resíntesis",
      blocks: [
        {
          name: "Bloque 0: Neural (15 Minutos)",
          exercises: [
            { name: "Movilidad de activación", sets: "1", reps: "5 min", rir: "N/A", note: "Movilidad articular" },
            { name: "Práctica de Handstand", sets: "1", reps: "5 min", rir: "N/A", note: "Calentamiento de muñecas, 1 serie de activación core." },
            { name: "Toe Pulls", sets: "5", reps: "3", rir: "N/A", note: "5 series x 3" },
            { name: "Hell Pulls", sets: "5", reps: "3", rir: "N/A", note: "5 series x 3" },
            { name: "Kick ups to the wall", sets: "1", reps: "10/day", rir: "N/A", note: "10 por día" }
          ]
        },
        {
          name: "Bloque 1: Calistenia (Rango Completo Asistido / RIR 3)",
          exercises: [
            { name: "Flexiones Estándar (Push-ups) Asistidas con Banda", sets: "1-2", reps: "8-10", rir: "3", note: "RIR 3" },
            { name: "Dominadas Supinas (Chin-ups) con Banda Pesada", sets: "1-2", reps: "6-8", rir: "3", note: "RIR 3" },
            { name: "L-sit (Isometría asistida o en Tuck)", sets: "1-2", reps: "5-10 seg", rir: "3", note: "Versión agrupada o apoyando talones levemente, RIR 3." }
          ]
        },
        {
          name: "Bloque 2: Gimnasio - Músculos Grandes (-20% Peso / RIR 3)",
          exercises: [
            { name: "Press Inclinado (Máquina Convergente)", sets: "1-2", reps: "8-10", rir: "3", note: "-20% Peso" },
            { name: "Remo Cable Polea con agarre abierto", sets: "1-2", reps: "8-10", rir: "3", note: "-20% Peso" }
          ]
        },
        {
          name: "Bloque 3: Gimnasio - Aislamiento y Agarre (-20% Peso / RIR 3)",
          exercises: [
            { name: "Pájaros en banco (Haz posterior)", sets: "1", reps: "12-14", rir: "3", note: "-20% Peso" },
            { name: "Elevaciones Laterales", sets: "1", reps: "12-14", rir: "3", note: "-20% Peso" },
            { name: "Extensiones Tras Nuca (Polea)", sets: "1", reps: "12-14", rir: "3", note: "-20% Peso" },
            { name: "Curl Scott o Predicador", sets: "1", reps: "12-14", rir: "3", note: "-20% Peso" },
            { name: "Fuerza de Agarre: Plate Pinch", sets: "1", reps: "Tiempo moderado", rir: "3", note: "1 serie x tiempo moderado." }
          ]
        },
        {
          name: "Cierre",
          exercises: [
            { name: "Cardio LISS", sets: "1", reps: "20 min", rir: "N/A", note: "20 minutos de Cardio LISS." }
          ]
        }
      ]
    },
    Viernes: {
      title: "VIERNES: Día 5 - LEGS 2 (Foco Isquiosurales y Glúteo) - Descarga y Resíntesis",
      blocks: [
        {
          name: "Bloque 0: Activación Articular (5 Minutos)",
          exercises: [
            { name: "Rotaciones 90/90, Couch Stretch y Dorsiflexión", sets: "1", reps: "5 min", rir: "N/A", note: "Prohibido el trabajo de Handstand para resetear el SNC." }
          ]
        },
        {
          name: "Bloque 1: Gimnasio - Tensión Mecánica Pura (-20% Peso / RIR 3)",
          exercises: [
            { name: "Peso Muerto Rumano (RDL)", sets: "2", reps: "8-10", rir: "3", note: "Movimiento terapéutico para oxigenar la cadena posterior." },
            { name: "Hip Thrust o Glute Bridge", sets: "1-2", reps: "8-10", rir: "3", note: "-20% Peso" }
          ]
        },
        {
          name: "Bloque 2: Gimnasio - Aislamiento y Rehabilitación (-20% Peso / RIR 3)",
          exercises: [
            { name: "Curl Femoral (Sentado preferentemente)", sets: "1", reps: "12-15", rir: "3", note: "-20% Peso" },
            { name: "Abductores", sets: "1", reps: "12-14", rir: "3", note: "-20% Peso" },
            { name: "Elevaciones de Talón Sentado", sets: "1-2", reps: "12-14", rir: "3", note: "-20% Peso" }
          ]
        },
        {
          name: "Cierre",
          exercises: [
            { name: "Movilidad Pesada", sets: "1", reps: "20 min", rir: "N/A", note: "20 minutos de Movilidad Pesada (Clase de Flex / Isquiotibiales)." }
          ]
        }
      ]
    },
    Sábado: {
      title: "SÁBADO: Día 6 - BRAZOS (Comodín Analítico) - Descarga y Resíntesis",
      blocks: [
        {
          name: "Bloque 0: Neural (15 Minutos)",
          exercises: [
            { name: "Movilidad de activación", sets: "1", reps: "5 min", rir: "N/A", note: "Este día es puramente periférico. Si fallas, el macrociclo no sufre daños." },
            { name: "Práctica de Handstand", sets: "1", reps: "5 min", rir: "N/A", note: "Calentamiento de muñecas, 1 serie de activación core." },
            { name: "Toe Pulls", sets: "5", reps: "3", rir: "N/A", note: "5 series x 3" },
            { name: "Hell Pulls", sets: "5", reps: "3", rir: "N/A", note: "5 series x 3" },
            { name: "Kick ups to the wall", sets: "1", reps: "10/day", rir: "N/A", note: "10 por día" }
          ]
        },
        {
          name: "Bloque 1: Gimnasio - Aislamiento Total (-20% Peso / RIR 3)",
          exercises: [
            { name: "Extensiones Tras Nuca (Polea)", sets: "1-2", reps: "12-14", rir: "3", note: "-20% Peso" },
            { name: "Pushdown Clásico (Soga)", sets: "1-2", reps: "12-14", rir: "3", note: "-20% Peso" },
            { name: "Extensión Unilateral", sets: "1", reps: "12-14", rir: "3", note: "-20% Peso" },
            { name: "Curl Inclinado con Mancuernas", sets: "1-2", reps: "12-14", rir: "3", note: "-20% Peso" },
            { name: "Curl Predicador", sets: "1-2", reps: "12-14", rir: "3", note: "-20% Peso" },
            { name: "Curl Martillo", sets: "1", reps: "12-14", rir: "3", note: "-20% Peso" },
            { name: "Y-raises (Higiene Articular)", sets: "1-2", reps: "12-14", rir: "3", note: "-20% Peso" }
          ]
        },
        {
          name: "Cierre",
          exercises: [
            { name: "Cardio LISS", sets: "1", reps: "30 min", rir: "N/A", note: "30 minutos de Cardio LISS." }
          ]
        }
      ]
    }
  },
  10: {
    Lunes: {
      title: "LUNES: Día 1 - PUSH (Enfoque Empujes) - Adaptación a la Densidad y Fuerza Máxima",
      blocks: [
        {
          name: "Bloque 0: Neural (15 Minutos)",
          exercises: [
            { name: "Movilidad de activación", sets: "1", reps: "5 min", rir: "N/A", note: "Movilidad articular" },
            { name: "Práctica de Handstand", sets: "1", reps: "5 min", rir: "N/A", note: "Calentamiento de muñecas, 1 serie de activación core." },
            { name: "Toe Pulls", sets: "5", reps: "3", rir: "N/A", note: "5 series x 3" },
            { name: "Hell Pulls", sets: "5", reps: "3", rir: "N/A", note: "5 series x 3" },
            { name: "Kick ups to the wall", sets: "1", reps: "10/day", rir: "N/A", note: "10 por día" }
          ]
        },
        {
          name: "Bloque 1: Calistenia (Series Cluster / RIR 2)",
          exercises: [
            { name: "Flexiones en Pica con Pies Elevados (Decline Pike Push-ups)", sets: "3 Cluster", reps: "2 + 15s + 2 + 15s + 1", rir: "2", note: "Elevación escapular perfecta en cada micro-serie. La altura del cajón debe ser suficiente para que sientas la carga pesada, respetando el RIR 2 general." },
            { name: "Fondos en Paralelas (Dips) Lastrados", sets: "3 Cluster", reps: "2 + 15s + 2 (8 reps+ obj)", rir: "2", note: "Usa cinturón o chaleco. Micro-series de 2 repeticiones con descansos de 15s hasta completar tu objetivo de la serie." },
            { name: "Hollow Body Hold (Suelo)", sets: "3", reps: "Tiempo Sub-máximo", rir: "2", note: "RIR 2" }
          ]
        },
        {
          name: "Bloque 2: Gimnasio - Músculos Grandes (Fuerza / RIR 2)",
          exercises: [
            { name: "Press en Banca (Máquina)", sets: "3", reps: "4-6", rir: "2", note: "Carga muy pesada, pero control absoluto." },
            { name: "Press Militar con Mancuernas", sets: "2", reps: "4-6", rir: "2", note: "RIR 2" }
          ]
        },
        {
          name: "Bloque 3: Gimnasio - Aislamiento (RIR 1)",
          exercises: [
            { name: "Aperturas Pec-Dec", sets: "2", reps: "8-10", rir: "1", note: "RIR 1" },
            { name: "Elevaciones Laterales", sets: "3", reps: "8-10", rir: "1", note: "RIR 1" },
            { name: "Pushdown Clásico (Soga)", sets: "2", reps: "8-10", rir: "1", note: "RIR 1" },
            { name: "Extensiones Tras Nuca (Polea)", sets: "2", reps: "8-10", rir: "1", note: "RIR 1" }
          ]
        },
        {
          name: "Cierre",
          exercises: [
            { name: "Cardio LISS", sets: "1", reps: "20 min", rir: "N/A", note: "20 minutos de Cardio LISS." }
          ]
        }
      ]
    },
    Martes: {
      title: "MARTES: Día 2 - PULL (Enfoque Tracción) - Adaptación a la Densidad y Fuerza Máxima",
      blocks: [
        {
          name: "Bloque 0: Neural (15 Minutos)",
          exercises: [
            { name: "Movilidad de activación", sets: "1", reps: "5 min", rir: "N/A", note: "Movilidad articular" },
            { name: "Práctica de Handstand", sets: "1", reps: "5 min", rir: "N/A", note: "Calentamiento de muñecas, 1 serie de activación core." },
            { name: "Toe Pulls", sets: "5", reps: "3", rir: "N/A", note: "5 series x 3" },
            { name: "Hell Pulls", sets: "5", reps: "3", rir: "N/A", note: "5 series x 3" },
            { name: "Kick ups to the wall", sets: "1", reps: "10/day", rir: "N/A", note: "10 por día" }
          ]
        },
        {
          name: "Bloque 1: Calistenia (Series Cluster / RIR 2)",
          exercises: [
            { name: "Dominadas Pronas (Pull-ups) Lastradas", sets: "2 Cluster", reps: "1-2 reps + 15s (4-6 tot)", rir: "2", note: "Micro-series de 1-2 repeticiones, descansando 15s colgando o en el suelo, hasta sumar 4-6 repeticiones totales por serie." },
            { name: "Dominadas Australianas (Remos barra baja) Lastradas", sets: "2 Cluster", reps: "Cluster", rir: "2", note: "Series Cluster lastradas." },
            { name: "Dragon Flag a Una Pierna (Clusters)", sets: "3 Cluster", reps: "2 reps x pierna + 15s + 2 reps", rir: "2", note: "Adaptación a la densidad: 2 reps por pierna, pausa 15s, 2 reps, pausa 15s. Máxima tensión sin colapso lumbar." }
          ]
        },
        {
          name: "Bloque 2: Gimnasio - Músculos Grandes (Fuerza / RIR 2)",
          exercises: [
            { name: "Remo con Pecho Apoyado (Palancas/Barra T)", sets: "2", reps: "4-6", rir: "2", note: "RIR 2" }
          ]
        },
        {
          name: "Bloque 3: Gimnasio - Aislamiento y Agarre (RIR 1)",
          exercises: [
            { name: "Pullover en Polea o Máquina", sets: "2", reps: "8-10", rir: "1", note: "RIR 1" },
            { name: "Facepull", sets: "2", reps: "8-10", rir: "1", note: "RIR 1" },
            { name: "Curl Inclinado con Mancuernas", sets: "2", reps: "8-10", rir: "1", note: "RIR 1" },
            { name: "Curl Martillo", sets: "2", reps: "8-10", rir: "1", note: "RIR 1" },
            { name: "Fuerza de Agarre: Dead Hang (Colgado pasivo en barra)", sets: "2", reps: "Tiempo tolerable", rir: "1", note: "2 series x tiempo tolerable." }
          ]
        },
        {
          name: "Cierre",
          exercises: [
            { name: "Cardio LISS", sets: "1", reps: "20 min", rir: "N/A", note: "20 minutos de Cardio LISS." }
          ]
        }
      ]
    },
    Miércoles: {
      title: "MIÉRCOLES: Día 3 - LEGS 1 (Foco Cuádriceps Aislado) - Adaptación a la Densidad y Fuerza Máxima",
      blocks: [
        {
          name: "Bloque 0: Activación Articular (5 Minutos)",
          exercises: [
            { name: "Rotaciones 90/90, Couch Stretch y Dorsiflexión", sets: "1", reps: "5 min", rir: "N/A", note: "Prohibido el trabajo de Handstand para resetear el SNC." }
          ]
        },
        {
          name: "Bloque 1: Gimnasio - Tensión Mecánica Pura (Fuerza y Aislamiento)",
          exercises: [
            { name: "Sillón de Cuádriceps (Extensiones)", sets: "3", reps: "8-10", rir: "1", note: "Accesorio RIR 1." },
            { name: "Prensa Inclinada / Sentadilla Hack", sets: "3", reps: "4-6", rir: "2", note: "Motor principal pesado RIR 2." },
            { name: "Sentadillas Búlgaras en Smith o Mancuernas", sets: "2", reps: "8-10", rir: "1", note: "RIR 1" },
            { name: "Aductores", sets: "2", reps: "8-10", rir: "1", note: "RIR 1" },
            { name: "Elevaciones de Talón de Pie", sets: "3", reps: "8-10", rir: "1", note: "RIR 1" }
          ]
        },
        {
          name: "Cierre",
          exercises: [
            { name: "Movilidad Pesada", sets: "1", reps: "20 min", rir: "N/A", note: "20 minutos de Movilidad Pesada (Clase de Flex / Spagat / Pancake)." }
          ]
        }
      ]
    },
    Jueves: {
      title: "JUEVES: Día 4 - TREN SUPERIOR HÍBRIDO - Adaptación a la Densidad y Fuerza Máxima",
      blocks: [
        {
          name: "Bloque 0: Neural (15 Minutos)",
          exercises: [
            { name: "Movilidad de activación", sets: "1", reps: "5 min", rir: "N/A", note: "Movilidad articular" },
            { name: "Práctica de Handstand", sets: "1", reps: "5 min", rir: "N/A", note: "Calentamiento de muñecas, 1 serie de activación core." },
            { name: "Toe Pulls", sets: "5", reps: "3", rir: "N/A", note: "5 series x 3" },
            { name: "Hell Pulls", sets: "5", reps: "3", rir: "N/A", note: "5 series x 3" },
            { name: "Kick ups to the wall", sets: "1", reps: "10/day", rir: "N/A", note: "10 por día" }
          ]
        },
        {
          name: "Bloque 1: Calistenia (Series Cluster / RIR 2)",
          exercises: [
            { name: "Flexiones Estándar (Push-ups) Lastradas", sets: "3 Cluster", reps: "Cluster", rir: "2", note: "Disco en la espalda o banda pesada. Micro-series separadas por 15s de descanso." },
            { name: "Dominadas Supinas (Chin-ups) Lastradas", sets: "3 Cluster", reps: "1-2 reps strictly", rir: "2", note: "Micro-series de 1 o 2 reps estrictas." },
            { name: "L-sit (Isometría)", sets: "3", reps: "Tiempo Sub-máximo", rir: "2", note: "RIR 2" }
          ]
        },
        {
          name: "Bloque 2: Gimnasio - Músculos Grandes (Fuerza / RIR 2)",
          exercises: [
            { name: "Press Inclinado (Máquina Convergente)", sets: "3", reps: "4-6", rir: "2", note: "RIR 2" },
            { name: "Remo Cable Polea con agarre abierto", sets: "3", reps: "4-6", rir: "2", note: "RIR 2" }
          ]
        },
        {
          name: "Bloque 3: Gimnasio - Aislamiento y Agarre (RIR 1)",
          exercises: [
            { name: "Pájaros en banco (Haz posterior)", sets: "2", reps: "8-10", rir: "1", note: "RIR 1" },
            { name: "Elevaciones Laterales", sets: "2", reps: "8-10", rir: "1", note: "RIR 1" },
            { name: "Extensiones Tras Nuca (Polea)", sets: "2", reps: "8-10", rir: "1", note: "RIR 1" },
            { name: "Curl Scott o Predicador", sets: "2", reps: "8-10", rir: "1", note: "RIR 1" },
            { name: "Fuerza de Agarre: Plate Pinch", sets: "2", reps: "Tiempo tolerable", rir: "1", note: "2 series x tiempo tolerable." }
          ]
        },
        {
          name: "Cierre",
          exercises: [
            { name: "Cardio LISS", sets: "1", reps: "20 min", rir: "N/A", note: "20 minutos de Cardio LISS." }
          ]
        }
      ]
    },
    Viernes: {
      title: "VIERNES: Día 5 - LEGS 2 (Foco Isquiosurales y Glúteo) - Adaptación a la Densidad y Fuerza Máxima",
      blocks: [
        {
          name: "Bloque 0: Activación Articular (5 Minutos)",
          exercises: [
            { name: "Rotaciones 90/90, Couch Stretch y Dorsiflexión", sets: "1", reps: "5 min", rir: "N/A", note: "Prohibido el trabajo de Handstand para resetear el SNC." }
          ]
        },
        {
          name: "Bloque 1: Gimnasio - Tensión Mecánica Pura (Fuerza y Aislamiento)",
          exercises: [
            { name: "Peso Muerto Rumano (RDL)", sets: "4", reps: "4-6", rir: "2", note: "Sobrecarga sistémica masiva, bisagra controlada." },
            { name: "Hip Thrust o Glute Bridge", sets: "3", reps: "4-6", rir: "2", note: "RIR 2" }
          ]
        },
        {
          name: "Bloque 2: Gimnasio - Aislamiento y Rehabilitación (RIR 1)",
          exercises: [
            { name: "Curl Femoral (Sentado preferentemente)", sets: "2", reps: "8-10", rir: "1", note: "RIR 1" },
            { name: "Abductores", sets: "2", reps: "8-10", rir: "1", note: "RIR 1" },
            { name: "Elevaciones de Talón Sentado", sets: "3", reps: "8-10", rir: "1", note: "RIR 1" }
          ]
        },
        {
          name: "Cierre",
          exercises: [
            { name: "Movilidad Pesada", sets: "1", reps: "20 min", rir: "N/A", note: "20 minutos de Movilidad Pesada (Clase de Flex / Isquiotibiales)." }
          ]
        }
      ]
    },
    Sábado: {
      title: "SÁBADO: Día 6 - BRAZOS (Comodín Analítico) - Adaptación a la Densidad y Fuerza Máxima",
      blocks: [
        {
          name: "Bloque 0: Neural (15 Minutos)",
          exercises: [
            { name: "Movilidad de activación", sets: "1", reps: "5 min", rir: "N/A", note: "Día puramente periférico. RIR 1 general." },
            { name: "Práctica de Handstand", sets: "1", reps: "5 min", rir: "N/A", note: "Calentamiento de muñecas, 1 serie de activación core." },
            { name: "Toe Pulls", sets: "5", reps: "3", rir: "N/A", note: "5 series x 3" },
            { name: "Hell Pulls", sets: "5", reps: "3", rir: "N/A", note: "5 series x 3" },
            { name: "Kick ups to the wall", sets: "1", reps: "10/day", rir: "N/A", note: "10 por día" }
          ]
        },
        {
          name: "Bloque 1: Gimnasio - Aislamiento Total (RIR 1)",
          exercises: [
            { name: "Extensiones Tras Nuca (Polea)", sets: "3", reps: "8-10", rir: "1", note: "RIR 1" },
            { name: "Pushdown Clásico (Soga)", sets: "3", reps: "8-10", rir: "1", note: "RIR 1" },
            { name: "Extensión Unilateral", sets: "2", reps: "8-10", rir: "1", note: "RIR 1" },
            { name: "Curl Inclinado con Mancuernas", sets: "3", reps: "8-10", rir: "1", note: "RIR 1" },
            { name: "Curl Predicador", sets: "3", reps: "8-10", rir: "1", note: "RIR 1" },
            { name: "Curl Martillo", sets: "2", reps: "8-10", rir: "1", note: "RIR 1" },
            { name: "Y-raises (Higiene Articular)", sets: "3", reps: "8-10", rir: "1", note: "RIR 1" }
          ]
        },
        {
          name: "Cierre",
          exercises: [
            { name: "Cardio LISS", sets: "1", reps: "30 min", rir: "N/A", note: "30 minutos de Cardio LISS." }
          ]
        }
      ]
    }
  },
  11: {
    Lunes: {
      title: "LUNES: Día 1 - PUSH (Enfoque Empujes) - TEST y Rendimiento Absoluto",
      blocks: [
        {
          name: "Bloque 0: Neural (15 Minutos)",
          exercises: [
            { name: "Movilidad de activación", sets: "1", reps: "5 min", rir: "N/A", note: "Movilidad articular" },
            { name: "Práctica de Handstand", sets: "1", reps: "5 min", rir: "N/A", note: "Calentamiento de muñecas, 1 serie de activación core." },
            { name: "Toe Pulls", sets: "5", reps: "3", rir: "N/A", note: "5 series x 3" },
            { name: "Hell Pulls", sets: "5", reps: "3", rir: "N/A", note: "5 series x 3" },
            { name: "Kick ups to the wall", sets: "1", reps: "10/day", rir: "N/A", note: "10 por día" }
          ]
        },
        {
          name: "Bloque 1: Calistenia (Activación Neural / Cero Fatiga)",
          exercises: [
            { name: "Flexiones en Pica (Pike Push-ups)", sets: "2", reps: "2-3", rir: "3-4", note: "Súper explosivas. RIR 3-4." },
            { name: "Fondos en Paralelas (Dips)", sets: "2", reps: "2-3", rir: "3-4", note: "Súper explosivas. RIR 3-4." },
            { name: "Hollow Body Hold (Suelo)", sets: "2", reps: "15 seg", rir: "3-4", note: "Solo activación." }
          ]
        },
        {
          name: "Bloque 2: Gimnasio - Músculos Grandes (TEST DE FUERZA)",
          exercises: [
            { name: "Press en Banca (Máquina)", sets: "3", reps: "3-5", rir: "1", note: "Carga récord de este ciclo." },
            { name: "Press Militar con Mancuernas", sets: "2", reps: "3-5", rir: "1", note: "TEST DE FUERZA" }
          ]
        },
        {
          name: "Bloque 3: Gimnasio - Aislamiento (Tapering / RIR 2 - Sin Metodologías)",
          exercises: [
            { name: "Aperturas Pec-Dec", sets: "2", reps: "8-10", rir: "2", note: "RIR 2 estricto. Sin metodologías." },
            { name: "Elevaciones Laterales", sets: "2", reps: "8-10", rir: "2", note: "RIR 2 estricto. Sin metodologías." },
            { name: "Pushdown Clásico (Soga)", sets: "2", reps: "8-10", rir: "2", note: "RIR 2 estricto. Sin metodologías." },
            { name: "Extensiones Tras Nuca (Polea)", sets: "2", reps: "8-10", rir: "2", note: "RIR 2 estricto. Sin metodologías." }
          ]
        },
        {
          name: "Cierre",
          exercises: [
            { name: "Cardio LISS", sets: "1", reps: "20 min", rir: "N/A", note: "20 minutos de Cardio LISS." }
          ]
        }
      ]
    },
    Martes: {
      title: "MARTES: Día 2 - PULL (Enfoque Tracción) - TEST y Rendimiento Absoluto",
      blocks: [
        {
          name: "Bloque 0: Neural (15 Minutos)",
          exercises: [
            { name: "Movilidad de activación", sets: "1", reps: "5 min", rir: "N/A", note: "Movilidad articular" },
            { name: "Práctica de Handstand", sets: "1", reps: "5 min", rir: "N/A", note: "Calentamiento de muñecas, 1 serie de activación core." },
            { name: "Toe Pulls", sets: "5", reps: "3", rir: "N/A", note: "5 series x 3" },
            { name: "Hell Pulls", sets: "5", reps: "3", rir: "N/A", note: "5 series x 3" },
            { name: "Kick ups to the wall", sets: "1", reps: "10/day", rir: "N/A", note: "10 por día" }
          ]
        },
        {
          name: "Bloque 1: Calistenia (Activación Neural / Cero Fatiga)",
          exercises: [
            { name: "Dominadas Pronas (Pull-ups)", sets: "2", reps: "2-3", rir: "3-4", note: "Tirón explosivo. RIR 3-4." },
            { name: "Dominadas Australianas (Remos barra baja)", sets: "2", reps: "3-4", rir: "3-4", note: "RIR 3-4" },
            { name: "Dragon Flag Completas (Activación)", sets: "2", reps: "2-3", rir: "2", note: "Pruebas la palanca completa, pero cortas mucho antes del fallo. RIR 2." }
          ]
        },
        {
          name: "Bloque 2: Gimnasio - Músculos Grandes (TEST DE FUERZA)",
          exercises: [
            { name: "Remo con Pecho Apoyado (Palancas/Barra T)", sets: "3", reps: "3-5", rir: "1", note: "Carga récord." }
          ]
        },
        {
          name: "Bloque 3: Gimnasio - Aislamiento y Agarre (Tapering / RIR 2 - Sin Metodologías)",
          exercises: [
            { name: "Pullover en Polea o Máquina", sets: "2", reps: "8-10", rir: "2", note: "RIR 2" },
            { name: "Facepull", sets: "2", reps: "8-10", rir: "2", note: "RIR 2" },
            { name: "Curl Inclinado con Mancuernas", sets: "2", reps: "8-10", rir: "2", note: "RIR 2" },
            { name: "Curl Martillo", sets: "2", reps: "8-10", rir: "2", note: "RIR 2" },
            { name: "Fuerza de Agarre: Dead Hang", sets: "2", reps: "20 seg", rir: "2", note: "2 series de solo 20 segundos (descompresión)." }
          ]
        },
        {
          name: "Cierre",
          exercises: [
            { name: "Cardio LISS", sets: "1", reps: "20 min", rir: "N/A", note: "20 minutos de Cardio LISS." }
          ]
        }
      ]
    },
    Miércoles: {
      title: "MIÉRCOLES: Día 3 - LEGS 1 (Foco Cuádriceps Aislado) - TEST y Rendimiento Absoluto",
      blocks: [
        {
          name: "Bloque 0: Activación Articular (5 Minutos)",
          exercises: [
            { name: "Rotaciones 90/90, Couch Stretch y Dorsiflexión", sets: "1", reps: "5 min", rir: "N/A", note: "Prohibido el trabajo de Handstand." }
          ]
        },
        {
          name: "Bloque 1: Gimnasio - Tensión Mecánica Pura (TEST Y TAPERING)",
          exercises: [
            { name: "Sillón de Cuádriceps (Extensiones)", sets: "2", reps: "8-10", rir: "2", note: "RIR 2 estricto." },
            { name: "Prensa Inclinada / Sentadilla Hack", sets: "3", reps: "3-5", rir: "0", note: "TEST OFICIAL. Carga máxima." },
            { name: "Sentadillas Búlgaras en Smith o Mancuernas", sets: "2", reps: "8-10", rir: "2", note: "RIR 2. Cero estrés en rodilla." },
            { name: "Aductores", sets: "2", reps: "8-10", rir: "2", note: "RIR 2" },
            { name: "Elevaciones de Talón de Pie", sets: "2", reps: "8-10", rir: "2", note: "RIR 2" }
          ]
        },
        {
          name: "Cierre",
          exercises: [
            { name: "Movilidad Pesada", sets: "1", reps: "20 min", rir: "N/A", note: "20 minutos de Movilidad Pesada." }
          ]
        }
      ]
    },
    Jueves: {
      title: "JUEVES: Día 4 - TREN SUPERIOR HÍBRIDO - TEST y Rendimiento Absoluto",
      blocks: [
        {
          name: "Bloque 0: Neural (15 Minutos)",
          exercises: [
            { name: "Movilidad de activación", sets: "1", reps: "5 min", rir: "N/A", note: "Movilidad articular" },
            { name: "Práctica de Handstand", sets: "1", reps: "5 min", rir: "N/A", note: "Calentamiento de muñecas, 1 serie de activación core." },
            { name: "Toe Pulls", sets: "5", reps: "3", rir: "N/A", note: "5 series x 3" },
            { name: "Hell Pulls", sets: "5", reps: "3", rir: "N/A", note: "5 series x 3" },
            { name: "Kick ups to the wall", sets: "1", reps: "10/day", rir: "N/A", note: "10 por día" }
          ]
        },
        {
          name: "Bloque 1: Calistenia (Activación Neural / Cero Fatiga)",
          exercises: [
            { name: "Flexiones Estándar (Push-ups)", sets: "2", reps: "3-4", rir: "3-4", note: "Empuje explosivo, RIR 3-4." },
            { name: "Dominadas Supinas (Chin-ups)", sets: "2", reps: "2-3", rir: "3-4", note: "Tirón explosivo, RIR 3-4." },
            { name: "L-sit", sets: "2", reps: "10 seg", rir: "3-4", note: "Solo activación, sin llegar al temblor muscular." }
          ]
        },
        {
          name: "Bloque 2: Gimnasio - Músculos Grandes (TEST DE FUERZA)",
          exercises: [
            { name: "Press Inclinado (Máquina Convergente)", sets: "3", reps: "3-5", rir: "1", note: "Carga récord." },
            { name: "Remo Cable Polea con agarre abierto", sets: "3", reps: "3-5", rir: "1", note: "Carga récord." }
          ]
        },
        {
          name: "Bloque 3: Gimnasio - Aislamiento (Tapering / RIR 2 - Sin Metodologías)",
          exercises: [
            { name: "Pájaros en banco (Haz posterior)", sets: "2", reps: "8-10", rir: "2", note: "RIR 2" },
            { name: "Elevaciones Laterales", sets: "2", reps: "8-10", rir: "2", note: "RIR 2" },
            { name: "Extensiones Tras Nuca (Polea)", sets: "2", reps: "8-10", rir: "2", note: "RIR 2" },
            { name: "Curl Scott o Predicador", sets: "2", reps: "8-10", rir: "2", note: "RIR 2" }
          ]
        },
        {
          name: "Cierre",
          exercises: [
            { name: "Cardio LISS", sets: "1", reps: "20 min", rir: "N/A", note: "20 minutos de Cardio LISS." }
          ]
        }
      ]
    },
    Viernes: {
      title: "VIERNES: Día 5 - LEGS 2 (Foco Isquiosurales y Glúteo) - TEST y Rendimiento Absoluto",
      blocks: [
        {
          name: "Bloque 0: Activación Articular (5 Minutos)",
          exercises: [
            { name: "Rotaciones 90/90, Couch Stretch y Dorsiflexión", sets: "1", reps: "5 min", rir: "N/A", note: "Prohibido el trabajo de Handstand." }
          ]
        },
        {
          name: "Bloque 1: Gimnasio - Tensión Mecánica Pura (TEST Y TAPERING)",
          exercises: [
            { name: "Peso Muerto Rumano (RDL)", sets: "3", reps: "3-5", rir: "1-2", note: "Carga récord, pero mantienes un RIR 1-2 por seguridad de la columna antes del sábado." },
            { name: "Hip Thrust o Glute Bridge", sets: "3", reps: "3-5", rir: "0", note: "TEST OFICIAL. Carga máxima." }
          ]
        },
        {
          name: "Bloque 2: Gimnasio - Aislamiento (Tapering / RIR 2 - Sin Metodologías)",
          exercises: [
            { name: "Curl Femoral (Sentado preferentemente)", sets: "2", reps: "8-10", rir: "2", note: "RIR 2" },
            { name: "Abductores", sets: "2", reps: "8-10", rir: "2", note: "RIR 2" },
            { name: "Elevaciones de Talón Sentado", sets: "2", reps: "8-10", rir: "2", note: "RIR 2" }
          ]
        },
        {
          name: "Cierre",
          exercises: [
            { name: "Movilidad Pesada", sets: "1", reps: "20 min", rir: "N/A", note: "20 minutos de Movilidad Pesada." }
          ]
        }
      ]
    },
    Sábado: {
      title: "SÁBADO: Día 6 - EL GRAN TEST DE CALISTENIA + Destrucción de Brazos",
      blocks: [
        {
          name: "Bloque 1: TEST OFICIAL (AMRAP - As Many Reps As Possible)",
          exercises: [
            { name: "Dominadas Pronas Estrictas (Pull-ups)", sets: "1", reps: "Max (RIR 0)", rir: "0", note: "1 única serie al fallo absoluto (RIR 0). Anota tu PR. Descansa 3 a 5 min entre intentos." },
            { name: "Fondos en Paralelas (Dips)", sets: "1", reps: "Max (RIR 0)", rir: "0", note: "1 única serie al fallo absoluto (RIR 0). Anota tu PR. Descansa 3 a 5 min entre intentos." },
            { name: "Dominadas Supinas (Chin-ups)", sets: "1", reps: "Max (RIR 0)", rir: "0", note: "1 única serie al fallo absoluto (RIR 0). Anota tu PR. Descansa 3 a 5 min entre intentos." },
            { name: "Flexiones en Pica (Pike Push-ups)", sets: "1", reps: "Max (RIR 0)", rir: "0", note: "1 única serie al fallo absoluto (RIR 0). Anota tu PR. Descansa 3 a 5 min entre intentos." },
            { name: "L-sit (TEST OFICIAL)", sets: "1", reps: "Tiempo Máximo (RIR 0)", rir: "0", note: "1 única serie a Tiempo Máximo (RIR 0)." },
            { name: "Dragon Flag Completas (TEST OFICIAL)", sets: "1", reps: "Max reps (RIR 0)", rir: "0", note: "1 única serie a Máximas repeticiones (RIR 0)." }
          ]
        },
        {
          name: "Bloque 2: Gimnasio - Aislamiento Total (RIR 0 + Metodologías al fin liberadas)",
          exercises: [
            { name: "Extensiones Tras Nuca (Polea)", sets: "3", reps: "8-10", rir: "0", note: "Última serie: Drop Set." },
            { name: "Pushdown Clásico (Soga)", sets: "3", reps: "8-10", rir: "0", note: "Última serie: Drop Set." },
            { name: "Extensión Unilateral", sets: "2", reps: "8-10", rir: "0", note: "Fallo absoluto." },
            { name: "Curl Inclinado con Mancuernas", sets: "3", reps: "8-10", rir: "0", note: "Última serie: Rest-Pause." },
            { name: "Curl Predicador", sets: "3", reps: "8-10", rir: "0", note: "Última serie: Drop Set." },
            { name: "Curl Martillo", sets: "2", reps: "8-10", rir: "0", note: "Fallo absoluto." },
            { name: "Y-raises (Higiene Articular)", sets: "3", reps: "8-10", rir: "0", note: "RIR 0 técnico." }
          ]
        },
        {
          name: "Cierre",
          exercises: [
            { name: "Cardio LISS", sets: "1", reps: "30 min", rir: "N/A", note: "30 minutos de Cardio LISS." }
          ]
        }
      ]
    }
  },
  12: {
    Lunes: {
      title: "LUNES: Día 1 - PUSH (Enfoque Empujes) - Expansión del Umbral Láctico",
      blocks: [
        {
          name: "Bloque 0: Neural (15 Minutos)",
          exercises: [
            { name: "Movilidad de activación", sets: "1", reps: "5 min", rir: "N/A", note: "Movilidad articular" },
            { name: "Práctica de Handstand", sets: "1", reps: "5 min", rir: "N/A", note: "Calentamiento de muñecas, 1 serie de activación core." },
            { name: "Toe Pulls", sets: "5", reps: "3", rir: "N/A", note: "5 series x 3" },
            { name: "Hell Pulls", sets: "5", reps: "3", rir: "N/A", note: "5 series x 3" },
            { name: "Kick ups to the wall", sets: "1", reps: "10/day", rir: "N/A", note: "10 por día" }
          ]
        },
        {
          name: "Bloque 1: Calistenia (Clusters Densos / RIR 1)",
          exercises: [
            { name: "Flexiones en Pica con Pies Elevados (Decline Pike Push-ups)", sets: "3 Cluster", reps: "3 + 15s + 3 + 15s + 2", rir: "1", note: "Series Cluster Densas. RIR 1 al final del cluster." },
            { name: "Fondos en Paralelas (Dips) Lastrados o Libres", sets: "3 Cluster", reps: "Cluster Denso", rir: "1", note: "Aumenta el volumen de repeticiones dentro de los 15s de pausa, sin llegar al fallo." },
            { name: "Hollow Body Hold (Suelo)", sets: "3", reps: "Tiempo Sub-máximo", rir: "1", note: "Cortas 1-2 segundos antes de perder la forma, RIR 1." }
          ]
        },
        {
          name: "Bloque 2: Gimnasio - Músculos Grandes (Fuerza Pura / RIR 1)",
          exercises: [
            { name: "Press en Banca (Máquina)", sets: "3", reps: "4-5", rir: "1", note: "Carga extrema, RIR 1 innegociable." },
            { name: "Press Militar con Mancuernas", sets: "2", reps: "4-5", rir: "1", note: "RIR 1 innegociable." }
          ]
        },
        {
          name: "Bloque 3: Gimnasio - Aislamiento (RIR 0 + Metodologías)",
          exercises: [
            { name: "Aperturas Pec-Dec", sets: "2", reps: "8-10", rir: "0", note: "Última serie: Drop Set al fallo absoluto." },
            { name: "Elevaciones Laterales", sets: "3", reps: "8-10", rir: "0", note: "Última serie: Drop Set al fallo absoluto." },
            { name: "Pushdown Clásico (Soga)", sets: "2", reps: "8-10", rir: "0", note: "Última serie: Rest-Pause." },
            { name: "Extensiones Tras Nuca (Polea)", sets: "2", reps: "8-10", rir: "0", note: "Última serie: Rest-Pause." }
          ]
        },
        {
          name: "Cierre",
          exercises: [
            { name: "Cardio LISS", sets: "1", reps: "20 min", rir: "N/A", note: "20 minutos de Cardio LISS." }
          ]
        }
      ]
    },
    Martes: {
      title: "MARTES: Día 2 - PULL (Enfoque Tracción) - Expansión del Umbral Láctico",
      blocks: [
        {
          name: "Bloque 0: Neural (10 Minutos)",
          exercises: [
            { name: "Práctica de Handstand", sets: "1", reps: "10 min", rir: "N/A", note: "Calentamiento y 5 minutos de intentos sub-máximos." }
          ]
        },
        {
          name: "Bloque 1: Calistenia (Clusters Densos / RIR 1)",
          exercises: [
            { name: "Dominadas Pronas (Pull-ups) Lastradas o Libres", sets: "2 Cluster", reps: "2-3 reps + 15s pausa", rir: "1", note: "Buscas exprimir 2 o 3 repeticiones por micro-serie antes de soltarte a descansar los 15s." },
            { name: "Dominadas Australianas (Remos barra baja) Lastradas", sets: "2 Cluster", reps: "Cluster Denso", rir: "1", note: "Series Cluster Densas." },
            { name: "Dragon Flag a Una Pierna (Volumen Alto)", sets: "3", reps: "6-8", rir: "1", note: "Empujas el volumen a una pierna al límite del RIR 1 estricto, soportando el ácido láctico en el core." }
          ]
        },
        {
          name: "Bloque 2: Gimnasio - Músculos Grandes (Fuerza Pura / RIR 1)",
          exercises: [
            { name: "Remo con Pecho Apoyado (Palancas/Barra T)", sets: "2", reps: "4-5", rir: "1", note: "RIR 1 innegociable." }
          ]
        },
        {
          name: "Bloque 3: Gimnasio - Aislamiento y Agarre (RIR 0 + Metodologías)",
          exercises: [
            { name: "Pullover en Polea o Máquina", sets: "2", reps: "8-10", rir: "0", note: "Última serie: Drop Set." },
            { name: "Facepull", sets: "2", reps: "8-10", rir: "0", note: "Fallo técnico." },
            { name: "Curl Inclinado con Mancuernas", sets: "2", reps: "8-10", rir: "0", note: "Última serie: Rest-Pause." },
            { name: "Curl Martillo", sets: "2", reps: "8-10", rir: "0", note: "Última serie: Rest-Pause." },
            { name: "Fuerza de Agarre: Dead Hang (Colgado pasivo en barra)", sets: "2", reps: "Tiempo moderado", rir: "1", note: "Solo para descomprimir." }
          ]
        },
        {
          name: "Cierre",
          exercises: [
            { name: "Cardio LISS", sets: "1", reps: "20 min", rir: "N/A", note: "20 minutos de Cardio LISS." }
          ]
        }
      ]
    },
    Miércoles: {
      title: "MIÉRCOLES: Día 3 - LEGS 1 (Foco Cuádriceps Aislado) - Expansión del Umbral Láctico",
      blocks: [
        {
          name: "Bloque 0: Activación Articular (5 Minutos)",
          exercises: [
            { name: "Rotaciones 90/90, Couch Stretch y Dorsiflexión", sets: "1", reps: "5 min", rir: "N/A", note: "Prohibido el trabajo de Handstand para resetear el SNC." }
          ]
        },
        {
          name: "Bloque 1: Gimnasio - Tensión Mecánica Pura (Híbrido)",
          exercises: [
            { name: "Sillón de Cuádriceps (Extensiones)", sets: "3", reps: "8-10", rir: "0", note: "Última serie: Drop Set RIR 0." },
            { name: "Prensa Inclinada / Sentadilla Hack", sets: "3", reps: "4-5", rir: "1", note: "Motor principal. RIR 1 innegociable." },
            { name: "Sentadillas Búlgaras en Smith o Mancuernas", sets: "2", reps: "8-10", rir: "1", note: "RIR 1 estricto para proteger la rodilla." },
            { name: "Aductores", sets: "2", reps: "8-10", rir: "0", note: "Última serie: Rest-Pause al fallo." },
            { name: "Elevaciones de Talón de Pie", sets: "3", reps: "8-10", rir: "0", note: "Última serie: Drop Set." }
          ]
        },
        {
          name: "Cierre",
          exercises: [
            { name: "Movilidad Pesada", sets: "1", reps: "20 min", rir: "N/A", note: "20 minutos de Movilidad Pesada (Clase de Flex / Spagat / Pancake)." }
          ]
        }
      ]
    },
    Jueves: {
      title: "JUEVES: Día 4 - TREN SUPERIOR HÍBRIDO - Expansión del Umbral Láctico",
      blocks: [
        {
          name: "Bloque 0: Neural (10 Minutos)",
          exercises: [
            { name: "Práctica de Handstand", sets: "1", reps: "10 min", rir: "N/A", note: "Calentamiento y 5 minutos de intentos sub-máximos." }
          ]
        },
        {
          name: "Bloque 1: Calistenia (Clusters Densos / RIR 1)",
          exercises: [
            { name: "Flexiones Estándar (Push-ups) Lastradas", sets: "3 Cluster", reps: "Cluster Denso", rir: "1", note: "Disco en la espalda, agrupando mayor volumen por micro-serie." },
            { name: "Dominadas Supinas (Chin-ups) Lastradas o Libres", sets: "3 Cluster", reps: "Cluster Denso", rir: "1", note: "Series Cluster Densas." },
            { name: "L-sit (Isometría)", sets: "3", reps: "Tiempo Sub-máximo", rir: "1", note: "Cortas justo antes del colapso." }
          ]
        },
        {
          name: "Bloque 2: Gimnasio - Músculos Grandes (Fuerza Pura / RIR 1)",
          exercises: [
            { name: "Press Inclinado (Máquina Convergente)", sets: "3", reps: "4-5", rir: "1", note: "RIR 1 innegociable." },
            { name: "Remo Cable Polea con agarre abierto", sets: "3", reps: "4-5", rir: "1", note: "RIR 1 innegociable." }
          ]
        },
        {
          name: "Bloque 3: Gimnasio - Aislamiento y Agarre (RIR 0 + Metodologías)",
          exercises: [
            { name: "Pájaros en banco (Haz posterior)", sets: "2", reps: "8-10", rir: "0", note: "Última serie: Drop Set." },
            { name: "Elevaciones Laterales", sets: "2", reps: "8-10", rir: "0", note: "Última serie: Drop Set." },
            { name: "Extensiones Tras Nuca (Polea)", sets: "2", reps: "8-10", rir: "0", note: "Última serie: Rest-Pause." },
            { name: "Curl Scott o Predicador", sets: "2", reps: "8-10", rir: "0", note: "Última serie: Rest-Pause." },
            { name: "Fuerza de Agarre: Plate Pinch", sets: "2", reps: "Tiempo tolerable", rir: "1", note: "2 series x tiempo tolerable." }
          ]
        },
        {
          name: "Cierre",
          exercises: [
            { name: "Cardio LISS", sets: "1", reps: "20 min", rir: "N/A", note: "20 minutos de Cardio LISS." }
          ]
        }
      ]
    },
    Viernes: {
      title: "VIERNES: Día 5 - LEGS 2 (Foco Isquiosurales y Glúteo) - Expansión del Umbral Láctico",
      blocks: [
        {
          name: "Bloque 0: Activación Articular (5 Minutos)",
          exercises: [
            { name: "Rotaciones 90/90, Couch Stretch y Dorsiflexión", sets: "1", reps: "5 min", rir: "N/A", note: "Prohibido el trabajo de Handstand para resetear el SNC." }
          ]
        },
        {
          name: "Bloque 1: Gimnasio - Tensión Mecánica Pura (Híbrido)",
          exercises: [
            { name: "Peso Muerto Rumano (RDL)", sets: "4", reps: "4-5", rir: "1", note: "Sobrecarga de fuerza. RIR 1 innegociable para blindar lumbares." },
            { name: "Hip Thrust o Glute Bridge", sets: "3", reps: "4-5", rir: "1", note: "RIR 1 innegociable." }
          ]
        },
        {
          name: "Bloque 2: Gimnasio - Aislamiento y Rehabilitación (RIR 0 + Metodologías)",
          exercises: [
            { name: "Curl Femoral (Sentado preferentemente)", sets: "2", reps: "8-10", rir: "0", note: "Última serie: Drop Set." },
            { name: "Abductores", sets: "2", reps: "8-10", rir: "0", note: "Última serie: Rest-Pause." },
            { name: "Elevaciones de Talón Sentado", sets: "3", reps: "8-10", rir: "0", note: "Última serie: Drop Set." }
          ]
        },
        {
          name: "Cierre",
          exercises: [
            { name: "Movilidad Pesada", sets: "1", reps: "20 min", rir: "N/A", note: "20 minutos de Movilidad Pesada (Clase de Flex / Isquiotibiales)." }
          ]
        }
      ]
    },
    Sábado: {
      title: "SÁBADO: Día 6 - BRAZOS (Comodín Analítico) - Expansión del Umbral Láctico",
      blocks: [
        {
          name: "Bloque 0: Neural (10 Minutos)",
          exercises: [
            { name: "Práctica de Handstand", sets: "1", reps: "10 min", rir: "N/A", note: "Calentamiento y 5 minutos de intentos sub-máximos." }
          ]
        },
        {
          name: "Bloque 1: Gimnasio - Aislamiento Total (RIR 0 + Metodologías)",
          exercises: [
            { name: "Extensiones Tras Nuca (Polea)", sets: "3", reps: "8-10", rir: "0", note: "Última serie: Drop Set." },
            { name: "Pushdown Clásico (Soga)", sets: "3", reps: "8-10", rir: "0", note: "Última serie: Drop Set." },
            { name: "Extensión Unilateral", sets: "2", reps: "8-10", rir: "0", note: "Fallo absoluto." },
            { name: "Curl Inclinado con Mancuernas", sets: "3", reps: "8-10", rir: "0", note: "Última serie: Rest-Pause." },
            { name: "Curl Predicador", sets: "3", reps: "8-10", rir: "0", note: "Última serie: Drop Set." },
            { name: "Curl Martillo", sets: "2", reps: "8-10", rir: "0", note: "Fallo absoluto." },
            { name: "Y-raises (Higiene Articular)", sets: "3", reps: "8-10", rir: "0", note: "RIR 0 técnico." }
          ]
        },
        {
          name: "Cierre",
          exercises: [
            { name: "Cardio LISS", sets: "1", reps: "30 min", rir: "N/A", note: "30 minutos de Cardio LISS." }
          ]
        }
      ]
    }
  }
};

export const routinesByWeek = {
  // We structure the routines dynamically based on whether it is in Mesocycle 1 (W1-4), Mesocycle 2 (W5-8), Mesocycle 3 Load (W9-11), or Tapering/Peaking (W12)
  getWorkout: (weekNumber, dayName) => {
    const isMeso1 = weekNumber >= 1 && weekNumber <= 4;
    const isMeso2 = weekNumber >= 5 && weekNumber <= 8;
    const isMeso3 = weekNumber >= 9 && weekNumber <= 12;

    if (isMeso1 && meso1Routines[weekNumber]?.[dayName]) {
      return meso1Routines[weekNumber][dayName];
    }
    if (isMeso2 && meso2Routines[weekNumber]?.[dayName]) {
      return meso2Routines[weekNumber][dayName];
    }
    if (isMeso3 && meso3Routines[weekNumber]?.[dayName]) {
      return meso3Routines[weekNumber][dayName];
    }

    const getRawWorkout = () => {
      switch (dayName) {
      case "Lunes":
        if (false) {
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
        if (weekNumber === 11) {
          return {
            title: "Legs 2 - Peaking / Tapering (Isquios y Glúteo - Pre-Test)",
            blocks: [
              {
                name: "Bloque 0: Activación Articular (5 Minutos)",
                exercises: [
                  { name: "Rotaciones 90/90, Couch Stretch y Dorsiflexión", sets: "1", reps: "5 min", rir: "N/A", note: "Prohibido el trabajo de Handstand para resetear el SNC." }
                ]
              },
              {
                name: "Bloque 1: Gimnasio - Tensión Mecánica Pura (TEST Y TAPERING)",
                exercises: [
                  { name: "Peso Muerto Rumano (RDL)", sets: "3", reps: "3-5", rir: "1-2", note: "Carga récord, pero mantienes RIR 1-2 por seguridad de columna antes del sábado." },
                  { name: "Hip Thrust o Glute Bridge", sets: "3", reps: "3-5", rir: "1", note: "TEST OFICIAL. Carga máxima." }
                ]
              },
              {
                name: "Bloque 2: Gimnasio - Aislamiento (Tapering / RIR 2 - Sin Metodologías)",
                exercises: [
                  { name: "Curl Femoral (Sentado preferentemente)", sets: "2", reps: "8-10", rir: "2", note: "Sin Drop Set hoy." },
                  { name: "Abductores", sets: "2", reps: "8-10", rir: "2", note: "RIR 2." },
                  { name: "Elevaciones de Talón Sentado", sets: "2", reps: "8-10", rir: "2", note: "RIR 2." }
                ]
              }
            ]
          };
        }
        return {
          title: isDeload ? `Legs 2 - Descarga ${weekNumber === 1 ? '1' : weekNumber === 5 ? '2' : '3'} (Menstruación)` : "Legs 2 - Foco Isquiosurales y Glúteo",
          blocks: [
            {
              name: "Bloque 0: Activación Articular (5 Minutos)",
              exercises: [
                { name: "Rotaciones 90/90, Couch Stretch y Dorsiflexión", sets: "1", reps: "5 min", rir: "N/A", note: "Prohibido el trabajo de Handstand para resetear el SNC." }
              ]
            },
            {
              name: `Bloque 1: Gimnasio - Tensión Mecánica Pura (${isDeload ? '-20% Peso / RIR 3' : 'RIR 1-2'})`,
              exercises: [
                { name: "Peso Muerto Rumano (RDL)", sets: isDeload ? "2" : "4", reps: isMeso3 ? "4-5" : isMeso2 ? "6-8" : "8-10", rir: isDeload ? "3" : "1", note: "Bisagra de cadera pura, máxima tensión en estiramiento. Prohibido el fallo absoluto en RDL para no freír la lumbar." },
                { name: "Hip Thrust o Glute Bridge", sets: isDeload ? "1-2" : "3", reps: isMeso3 ? "4-5" : isMeso2 ? "6-8" : "8-10", rir: isDeload ? "3" : weekNumber === 3 || weekNumber === 7 ? "0 (en última)" : rirVal, note: "Empuje horizontal para glúteos." }
              ]
            },
            {
              name: `Bloque 2: Gimnasio - Aislamiento y Rehabilitación (${isDeload ? '-20% Peso / RIR 3' : weekNumber === 3 || weekNumber === 7 || weekNumber === 12 ? 'RIR 0 + Metodologías' : 'RIR 1-2'})`,
              exercises: [
                { name: "Curl Femoral (Sentado preferentemente)", sets: isDeload ? "1" : "2", reps: isMeso3 ? "8-10" : isMeso2 ? "10-12" : "12-15", rir: isDeload ? "3" : weekNumber === 3 || weekNumber === 7 || weekNumber === 12 ? "0" : rirAccVal, note: "Subida controlada, pausa 1s arriba, bajada 3-4s." },
                { name: "Abductores en máquina", sets: isDeload ? "1" : "2", reps: isMeso3 ? "8-10" : isMeso2 ? "10-12" : "12-14", rir: isDeload ? "3" : weekNumber === 3 || weekNumber === 7 || weekNumber === 12 ? "0" : rirAccVal, note: "Trabajo de glúteo medio." },
                { name: "Elevaciones de Talón Sentado", sets: isDeload ? "1-2" : "3", reps: isMeso3 ? "8-10" : isMeso2 ? "10-12" : "12-14", rir: isDeload ? "3" : weekNumber === 3 || weekNumber === 7 || weekNumber === 12 ? "0" : rirAccVal, note: "Aislamiento del sóleo (rodilla doblada)." }
              ],
              intensityTechnique: (weekNumber === 3 || weekNumber === 7 || weekNumber === 12) ? "Drop Set en Curl Femoral y Talón Sentado; Rest-Pause en Abductores" : null
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
    };

    const workout = getRawWorkout();

    const getBlock0 = (day) => {
      switch (day) {
        case "Lunes":
          return {
            name: "Bloque 0: Activación Articular y Handstand (10 Minutos)",
            exercises: [
              { name: "Práctica de Handstand (Cues de Oro: Acelerador/Freno, Hollow Body, Mirada) + Lubricación de Muñecas y Hombros", sets: "1", reps: "10 min", rir: "N/A", note: "Sin llegar a la fatiga. Trabajo neuromuscular puro de frescura." }
            ]
          };
        case "Martes":
          return {
            name: "Bloque 0: Activación Articular y Handstand (10 Minutos)",
            exercises: [
              { name: "Práctica de Handstand (Cues de Oro) + Calentamiento de Muñecas y Retracción Escapular", sets: "1", reps: "10 min", rir: "N/A", note: "Foco en la depresión escapular y activación de core." }
            ]
          };
        case "Miércoles":
          return {
            name: "Bloque 0: Activación Articular (5 Minutos)",
            exercises: [
              { name: "Rotaciones 90/90, Couch Stretch y Dorsiflexión de Tobillo", sets: "1", reps: "5 min", rir: "N/A", note: "Preparación de cadera y tobillo para sentadilla profunda." }
            ]
          };
        case "Jueves":
          return {
            name: "Bloque 0: Activación Articular y Handstand (10 Minutos)",
            exercises: [
              { name: "Práctica de Handstand (Cues de Oro) + Movilidad Torácica y Hombros", sets: "1", reps: "10 min", rir: "N/A", note: "Activación escapular y apertura pectoral." }
            ]
          };
        case "Viernes":
          return {
            name: "Bloque 0: Activación Articular (5 Minutos)",
            exercises: [
              { name: "Rotaciones 90/90, Couch Stretch y Dorsiflexión", sets: "1", reps: "5 min", rir: "N/A", note: "Prohibido el trabajo de Handstand para resetear el SNC antes del Peso Muerto Rumano (RDL)." }
            ]
          };
        case "Sábado":
          return {
            name: "Bloque 0: Activación Articular y Handstand (10 Minutos)",
            exercises: [
              { name: "Práctica de Handstand (Cues de Oro) + Movilidad de Muñecas y Codos", sets: "1", reps: "10 min", rir: "N/A", note: "Calentamiento minucioso de flexores de muñeca." }
            ]
          };
        case "Domingo":
        default:
          return {
            name: "Bloque 0: Movilidad y Descompresión (20 Minutos)",
            exercises: [
              { name: "Rutina de Movilidad y Elongación Pasiva General", sets: "1", reps: "20 min", rir: "N/A", note: "Recuperación de tejido conectivo y caminata ligera (NEAT)." }
            ]
          };
      }
    };

    if (workout && workout.blocks) {
      const hasBlock0 = workout.blocks.some(b => b.name.toLowerCase().includes("bloque 0"));
      if (!hasBlock0) {
        workout.blocks.unshift(getBlock0(dayName));
      }
    }

    return workout;
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
  },
  bloquePostres: {
    title: "Bloque 4: Postres Anabólicos Tácticos",
    rule: "Disfrute Micro-Calórico para Control de Ansiedad y Antojo Dulce"
  },
  bloquePreworkout: {
    title: "Bloque 5: Pre-Entrenamiento",
    rule: "Opciones de Rápida Asimilación Glucídica Pre-Sesión"
  },
  bloqueColaciones: {
    title: "Bloque 6: Colaciones Micro-Calóricas",
    rule: "Para Engañar al Estómago sin Perforar el Déficit Calórico"
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
