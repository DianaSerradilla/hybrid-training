import React, { useState } from 'react';
import {
  Flame, Coffee, Apple, ShieldAlert, CheckCircle2,
  Info, Leaf, ChevronRight, Zap, Target, Droplet, Sparkles, ChefHat, Heart
} from 'lucide-react';
import { nutritionData } from '../data/macrocycleData';

export default function NutritionModule() {
  const [selectedBlock, setSelectedBlock] = useState('all');

  return (
    <div className="space-y-6 max-w-7xl mx-auto w-full">

      {/* Banner de Ajuste Nutricional */}
      <div className="glass-panel p-5 rounded-2xl glow-emerald flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-1.5 text-emerald-400 font-bold text-xs uppercase tracking-widest">
            <Target className="w-4.5 h-4.5" />
            Déficit Calórico de Precisión
          </div>
          <h2 className="text-xl font-bold font-outfit text-white">
            Planificación Semanal: {nutritionData.kcalTarget} kcal diarias
          </h2>
          <p className="text-xs text-slate-400">
            Diseño enfocado a proteger la masa muscular ({nutritionData.proteinMass}) mientras oxidamos grasa a un ritmo de {nutritionData.weightLossRate}.
          </p>
        </div>

        <div className="flex flex-col gap-2 w-full md:w-auto shrink-0">
          <div className="flex items-center gap-2 bg-slate-900 border border-slate-800 px-3.5 py-2 rounded-xl">
            <ShieldAlert className="w-4.5 h-4.5 text-emerald-400" />
            <span className="text-xs text-slate-300">
              <strong>Estructura:</strong> 2 de Bloque 1 + 1 de Bloque 2 + 1 de Bloque 3
            </span>
          </div>
          <div className="flex items-center gap-2 bg-slate-900 border border-slate-800 px-3.5 py-2 rounded-xl">
            <Droplet className="w-4.5 h-4.5 text-blue-400 fill-blue-400/10" />
            <span className="text-xs text-slate-300">
              <strong>Hidratación:</strong> 2 Litros de agua antes de entrenar
            </span>
          </div>
        </div>
      </div>

      {/* SECTION DE TIPS NUEVOS DE NUTRICION */}
      <div className="glass-panel p-5 rounded-2xl border border-indigo-500/30 glow-indigo space-y-4">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-indigo-400" />
            <h3 className="text-base font-bold font-outfit text-white">
              Tips Clave de Nutrición (Actualizados)
            </h3>
          </div>
          <span className="text-[10px] font-bold bg-indigo-950 text-indigo-300 border border-indigo-800 px-2.5 py-1 rounded-full uppercase">
            Actualización PDF
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
          {nutritionData.newTips.map(tip => (
            <div key={tip.id} className="p-3.5 bg-slate-950/80 rounded-xl border border-slate-800 flex items-start gap-3">
              <div className="p-2 bg-indigo-600/10 border border-indigo-500/20 rounded-lg shrink-0 mt-0.5">
                <CheckCircle2 className="w-4 h-4 text-indigo-400" />
              </div>
              <div className="space-y-1">
                <div className="flex items-center justify-between gap-2">
                  <strong className="text-xs text-slate-200 font-semibold">{tip.title}</strong>
                  <span className="text-[9px] bg-slate-900 text-slate-400 border border-slate-800 px-2 py-0.5 rounded-full font-mono">
                    {tip.days}
                  </span>
                </div>
                <p className="text-[11px] text-slate-400 leading-relaxed">{tip.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bloques de Alimentos Stack */}
      <div className="space-y-8">

        {/* Bloque 1 */}
        {(selectedBlock === 'all' || selectedBlock === 'block1') && (
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2">
              <h3 className="text-lg font-bold font-outfit text-white flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-indigo-500"></span>
                {nutritionData.bloque1.title}
              </h3>
              <span className="text-xs text-slate-400 font-medium">Café, té o meriendas ligeras</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {nutritionData.bloque1.options.map((opt, idx) => (
                <div key={opt.id} className="glass-card p-5 rounded-xl border border-slate-800 flex flex-col justify-between hover:border-indigo-500/40 transition-colors">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-bold text-slate-200">{opt.name}</h4>
                    </div>

                    <ul className="text-xs text-slate-300 space-y-1.5 list-disc pl-4 mb-4">
                      {opt.ingredients.map((ing, iIdx) => (
                        <li key={iIdx} className="leading-relaxed">{ing}</li>
                      ))}
                    </ul>

                    {opt.extraNote && (
                      <div className="text-[10px] bg-slate-900/80 border border-slate-800 p-2.5 rounded-lg text-slate-400 mb-3 italic">
                        <strong>Variante de proteína:</strong> {opt.extraNote}
                      </div>
                    )}
                  </div>

                  <div className="pt-3 border-t border-slate-850 text-xs font-semibold text-indigo-300">
                    {opt.macros}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Bloque 2 */}
        {(selectedBlock === 'all' || selectedBlock === 'block2') && (
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-800 pb-2 gap-2">
              <h3 className="text-lg font-bold font-outfit text-white flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                {nutritionData.bloque2.title}
              </h3>
              <span className="bg-emerald-950 text-emerald-400 border border-emerald-900 text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider self-start sm:self-center flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                {nutritionData.bloque2.rule}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {nutritionData.bloque2.options.map((opt, idx) => (
                <div key={opt.id} className="glass-card p-5 rounded-xl border border-slate-800 flex flex-col justify-between hover:border-emerald-500/40 transition-colors">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-bold text-slate-200">{opt.name}</h4>
                    </div>

                    <ul className="text-xs text-slate-300 space-y-1.5 list-disc pl-4 mb-4">
                      {opt.ingredients.map((ing, iIdx) => (
                        <li key={iIdx} className="leading-relaxed">{ing}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-3 border-t border-slate-850 text-xs font-semibold text-emerald-300">
                    {opt.macros}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Bloque 3 */}
        {(selectedBlock === 'all' || selectedBlock === 'block3') && (
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-800 pb-2 gap-2">
              <h3 className="text-lg font-bold font-outfit text-white flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
                {nutritionData.bloque3.title}
              </h3>
              <span className="bg-amber-950/40 text-amber-300 border border-amber-900/60 text-[10px] font-semibold px-2.5 py-1 rounded-md self-start sm:self-center">
                {nutritionData.bloque3.rule}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {nutritionData.bloque3.options.map((opt, idx) => (
                <div key={opt.id} className="glass-card p-5 rounded-xl border border-slate-800 flex flex-col justify-between hover:border-amber-500/40 transition-colors">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-bold text-slate-200">{opt.name}</h4>
                    </div>

                    <ul className="text-xs text-slate-300 space-y-1.5 list-disc pl-4 mb-4">
                      {opt.ingredients.map((ing, iIdx) => (
                        <li key={iIdx} className="leading-relaxed">{ing}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-3 border-t border-slate-850 text-xs font-semibold text-amber-300 flex items-center justify-between">
                    <span>{opt.macros}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Bloque 4: Postres */}
        {(selectedBlock === 'all' || selectedBlock === 'block4' || selectedBlock === 'postres') && (
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-800 pb-2 gap-2">
              <h3 className="text-lg font-bold font-outfit text-white flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse"></span>
                {nutritionData.bloquePostres ? nutritionData.bloquePostres.title : "Bloque 4: Postres"}
              </h3>
              <span className="bg-amber-950/60 text-amber-300 border border-amber-800/60 text-[10px] font-semibold px-2.5 py-1 rounded-md self-start sm:self-center">
                {nutritionData.bloquePostres ? nutritionData.bloquePostres.rule : "Postres Anabólicos Micro-Calóricos"}
              </span>
            </div>

            {/* Card de la Receta Táctica: Súper-Trufa de Cacao y Proteína (Idéntica al Screenshot) */}
            <div className="glass-panel p-6 rounded-2xl border border-amber-500/40 glow-amber space-y-5">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest bg-amber-950/80 px-3 py-1 rounded-md border border-amber-800/80">
                    RECETA ESPECIAL
                  </span>
                  <span className="text-xs text-slate-400 font-mono font-semibold">10 Bocaditos</span>
                </div>
                <h3 className="font-bold text-lg md:text-xl text-white font-outfit mt-2 flex items-center gap-2">
                  <ChefHat className="w-5 h-5 text-amber-400" />
                  Receta Táctica: Súper-Trufa de Cacao y Proteína
                </h3>
                <p className="text-xs md:text-sm text-amber-400 font-bold tracking-wide">
                  Calorías: ~31 kcal | Proteínas: ~4.4g | Carbohidratos: ~2.9g | Grasas: ~1g
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                {/* INGREDIENTES */}
                <div className="bg-slate-950/80 p-4 rounded-2xl border border-slate-800 space-y-2.5">
                  <strong className="text-white font-bold block text-xs uppercase tracking-wider">
                    INGREDIENTES:
                  </strong>
                  <ul className="text-slate-300 space-y-2 text-xs list-disc pl-4 leading-relaxed">
                    <li>1 scoop (30g) de proteína Integralmedica.</li>
                    <li>40g de cacao amargo sin azúcar.</li>
                    <li>70ml de café negro frío (o leche descremada).</li>
                    <li>1 cucharada (15g) de Yogur Griego La Serenísima.</li>
                    <li>Gotas de edulcorante a gusto.</li>
                  </ul>
                </div>

                {/* PASOS DE PREPARACIÓN */}
                <div className="bg-slate-950/80 p-4 rounded-2xl border border-slate-800 space-y-2.5">
                  <strong className="text-white font-bold block text-xs uppercase tracking-wider">
                    PASOS DE PREPARACIÓN:
                  </strong>
                  <ol className="text-slate-300 space-y-2 text-xs leading-relaxed">
                    <li><strong>1. Polvos:</strong> Mezcla en un bol el scoop de proteína y los 40g de cacao amargo.</li>
                    <li><strong>2. Hidratación:</strong> Agrega los 70ml de líquido muy de a poco mientras revuelves constantemente.</li>
                    <li><strong>3. El Cemento:</strong> Cuando esté casi integrado, suma el yogur griego y el edulcorante. Mezcla con fuerza hasta obtener una pasta súper espesa y pesada.</li>
                    <li><strong>4. El Moldeado:</strong> Pasa la mezcla a un trozo de papel film, cúbrela y dale forma de bloque cuadrado o rectangular con las manos.</li>
                    <li><strong>5. El Frío:</strong> Llévalo al freezer por 15 minutos o a la heladera hasta que solidifique.</li>
                    <li><strong>6. La División:</strong> Retira el film, espolvorea una pizca extra de cacao por encima y corta el bloque con un cuchillo en 10 cuadraditos exactos.</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Bloque 5: Pre-Entrenamiento */}
        {(selectedBlock === 'all' || selectedBlock === 'block5' || selectedBlock === 'preworkout') && (
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-800 pb-2 gap-2">
              <h3 className="text-lg font-bold font-outfit text-white flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-indigo-500"></span>
                {nutritionData.bloquePreworkout ? nutritionData.bloquePreworkout.title : "Bloque 5: Pre-Entrenamiento"}
              </h3>
              <span className="bg-indigo-950/60 text-indigo-300 border border-indigo-800/60 text-[10px] font-semibold px-2.5 py-1 rounded-md self-start sm:self-center">
                {nutritionData.bloquePreworkout ? nutritionData.bloquePreworkout.rule : "Opciones de Rápida Asimilación Glucídica"}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {nutritionData.preWorkoutSnacks.map((item, idx) => (
                <div key={idx} className="glass-card p-5 rounded-xl border border-slate-800 flex flex-col justify-between hover:border-indigo-500/40 transition-colors">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-bold text-slate-200 flex items-center gap-2">
                        <Zap className="w-4 h-4 text-indigo-400 fill-indigo-400" />
                        {item.name}
                      </h4>
                      {item.calories && (
                        <span className="text-[10px] bg-indigo-950 text-indigo-400 border border-indigo-900 px-2 py-0.5 rounded font-mono font-semibold">
                          {item.calories}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed mb-4">{item.desc}</p>
                  </div>
                  <div className="pt-3 border-t border-slate-850 text-[11px] font-medium text-indigo-300">
                    Rápida absorción glucídica pre-sesión
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Bloque 6: Colaciones Micro-Calóricas */}
        {(selectedBlock === 'all' || selectedBlock === 'block6' || selectedBlock === 'colaciones') && (
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-800 pb-2 gap-2">
              <h3 className="text-lg font-bold font-outfit text-white flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-fuchsia-500"></span>
                {nutritionData.bloqueColaciones ? nutritionData.bloqueColaciones.title : "Bloque 6: Colaciones Micro-Calóricas"}
              </h3>
              <span className="bg-fuchsia-950/60 text-fuchsia-300 border border-fuchsia-800/60 text-[10px] font-semibold px-2.5 py-1 rounded-md self-start sm:self-center">
                {nutritionData.bloqueColaciones ? nutritionData.bloqueColaciones.rule : "Para engañar al estómago sin perforar el déficit"}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {nutritionData.colacionesMicroCaloricas.map((snack, idx) => (
                <div key={idx} className="glass-card p-5 rounded-xl border border-slate-800 flex flex-col justify-between hover:border-fuchsia-500/40 transition-colors">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-bold text-slate-200 flex items-center gap-2 text-sm">
                        <Apple className="w-4 h-4 text-fuchsia-400 shrink-0" />
                        {snack.name}
                      </h4>
                      <span className="text-[10px] bg-fuchsia-950 text-fuchsia-400 border border-fuchsia-900 px-2 py-0.5 rounded font-mono font-bold shrink-0">
                        {snack.calories}
                      </span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed mb-3">{snack.desc}</p>
                  </div>
                  {snack.macros && (
                    <div className="pt-3 border-t border-slate-850 text-[11px] font-semibold text-fuchsia-300 font-mono">
                      {snack.macros}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="bg-slate-950/80 border border-slate-800 p-3.5 rounded-xl text-xs text-slate-400 italic leading-relaxed flex items-center gap-2">
              <Info className="w-4 h-4 text-fuchsia-400 shrink-0" />
              <span><strong>Nota Biomecánica:</strong> Mantén estas colaciones a mano cerca de tu estación de trabajo para regular la ansiedad sin salirte del déficit.</span>
            </div>
          </div>
        )}

      </div>

    </div>
  );
}
