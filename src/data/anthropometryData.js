// Datos fijos e históricos de antropometría de Diana Serradilla
export const personalProfile = {
  name: "Diana Serradilla",
  heightCm: 166.0,
  baseAge: 27, // Edad al inicio del macrociclo
  somaticType: {
    endo: 4.6, // Valor de Junio (4.7 en Mayo)
    meso: 6.3,
    ecto: 1.5  // Valor de Junio (1.4 en Mayo)
  },
  somaticTypeName: "Endo-Mesomorfo",
  bmrKcal: 1393 // Promedio o valor de Junio (~1393-1395 kcal)
};

export const anthropometryGoals = {
  targetFatPercentage: 20.0,
  startingMuscleMassKg: 29.925 // Masa muscular inicial en Mayo
};

export const anthropometryHistory = [
  {
    measurementNumber: 1,
    date: "2026-05-28",
    displayDate: "28 May 2026",
    age: 27.24,
    weightKg: 66.70,
    fatMass: {
      percentage: 31.16,
      kg: 20.784
    },
    muscleMass: {
      percentage: 44.87,
      kg: 29.925
    },
    boneMass: {
      percentage: 10.03,
      kg: 6.691
    },
    residualMass: {
      percentage: 8.99,
      kg: 5.996
    },
    skinMass: {
      percentage: 4.95,
      kg: 3.303
    },
    somatotype: {
      endo: 4.7,
      meso: 6.3,
      ecto: 1.4
    },
    bmrKcal: 1395.82
  },
  {
    measurementNumber: 2,
    date: "2026-06-25",
    displayDate: "25 Jun 2026",
    age: 27.32,
    weightKg: 65.80,
    fatMass: {
      percentage: 30.70,
      kg: 20.203
    },
    muscleMass: {
      percentage: 45.25,
      kg: 29.774
    },
    boneMass: {
      percentage: 10.17,
      kg: 6.691
    },
    residualMass: {
      percentage: 8.89,
      kg: 5.848
    },
    skinMass: {
      percentage: 4.99,
      kg: 3.284
    },
    somatotype: {
      endo: 4.6,
      meso: 6.3,
      ecto: 1.5
    },
    bmrKcal: 1393.30
  }
];
