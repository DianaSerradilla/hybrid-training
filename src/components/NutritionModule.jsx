import React, { useState } from 'react';
import {
  Flame, Coffee, Apple, ShieldAlert, CheckCircle2,
  Info, Leaf, ChevronRight, Zap, Target, Droplet, Sparkles, ChefHat, Heart
} from 'lucide-react';
import { nutritionData } from '../data/macrocycleData';

export default function NutritionModule() {
  const [selectedBlock, setSelectedBlock] = useState('all'); // all, block1, block2, block3

  return (
    <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">

      {/* Main Nutrition Content (3/4 column) */}
      <div className="xl:col-span-3 space-y-6">

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

        {/* Bloques de Alimentos Grid */}
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

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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

        </div>
      </div>

      {/* Sidebar: Snacking & Recipe Panel (1/4 column) */}
      <div className="space-y-6">

        {/* RECETA TÁCTICA: SÚPER-TRUFA DE CACAO Y PROTEÍNA */}
        {nutritionData.superTrufaRecipe && (
          <div className="glass-panel p-5 rounded-2xl border border-amber-500/40 glow-amber space-y-4">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest bg-amber-950/60 px-2 py-0.5 rounded border border-amber-900">
                  Receta Especial
                </span>
                <span className="text-[10px] text-slate-400 font-mono">10 Bocaditos</span>
              </div>
              <h3 className="font-bold text-sm text-slate-100 font-outfit mt-1.5 flex items-center gap-1.5">
                <ChefHat className="w-4 h-4 text-amber-400" />
                {nutritionData.superTrufaRecipe.title}
              </h3>
              <p className="text-[11px] text-amber-300 font-semibold mt-1">
                {nutritionData.superTrufaRecipe.perServingMacros}
              </p>
            </div>

            <div className="space-y-3 text-xs">
              <div className="bg-slate-950 p-3 rounded-xl border border-slate-850 space-y-1.5">
                <strong className="text-slate-300 font-semibold block text-[11px] uppercase tracking-wider">Ingredientes:</strong>
                <ul className="text-slate-400 space-y-1 text-[11px] list-disc pl-3.5">
                  {nutritionData.superTrufaRecipe.ingredients.map((ing, i) => (
                    <li key={i}>{ing}</li>
                  ))}
                </ul>
              </div>

              <div className="bg-slate-950 p-3 rounded-xl border border-slate-850 space-y-1.5">
                <strong className="text-slate-300 font-semibold block text-[11px] uppercase tracking-wider">Pasos de Preparación:</strong>
                <ol className="text-slate-400 space-y-1.5 text-[10px] leading-relaxed">
                  {nutritionData.superTrufaRecipe.execution.map((step, i) => (
                    <li key={i}>{step}</li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        )}

        {/* Pre-workout Energy Options */}
        <div className="glass-panel p-5 rounded-2xl glow-indigo space-y-4">
          <div>
            <h3 className="font-bold text-sm text-slate-200 uppercase tracking-wider flex items-center gap-1.5">
              <Zap className="w-4.5 h-4.5 text-indigo-400 fill-indigo-400" />
              Pre-Entrenamiento
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">Opciones de rápida asimilación glucídica</p>
          </div>

          <div className="space-y-3">
            {nutritionData.preWorkoutSnacks.map((item, idx) => (
              <div key={idx} className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-xs space-y-1">
                <div className="flex items-center justify-between">
                  <strong className="text-slate-200 font-semibold">{item.name}</strong>
                  {item.calories && (
                    <span className="text-[10px] bg-slate-900 text-slate-400 px-1.5 py-0.5 rounded border border-slate-800">
                      {item.calories}
                    </span>
                  )}
                </div>
                <p className="text-slate-400 leading-normal text-[11px]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Lateral Snacks List */}
        <div className="glass-panel p-5 rounded-2xl glow-fuchsia space-y-4">
          <div>
            <h3 className="font-bold text-sm text-slate-200 uppercase tracking-wider flex items-center gap-1.5">
              <Apple className="w-4.5 h-4.5 text-fuchsia-400" />
              Colaciones Micro-Calóricas
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">Para engañar al estómago sin perforar el déficit</p>
          </div>

          <div className="space-y-3">
            {nutritionData.colacionesMicroCaloricas.map((snack, idx) => (
              <div key={idx} className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-xs space-y-1">
                <div className="flex items-center justify-between">
                  <strong className="text-slate-200 font-semibold">{snack.name}</strong>
                  <span className="text-[10px] bg-fuchsia-950 text-fuchsia-400 px-1.5 py-0.5 rounded font-bold">
                    {snack.calories}
                  </span>
                </div>
                <p className="text-slate-400 leading-normal text-[11px]">{snack.desc}</p>
                {snack.macros && (
                  <span className="text-[10px] text-indigo-400 font-mono block pt-0.5">
                    {snack.macros}
                  </span>
                )}
              </div>
            ))}
          </div>

          <div className="bg-slate-950/80 border border-slate-800 p-3 rounded-xl text-[10px] text-slate-500 italic leading-relaxed">
            <strong>Nota Biomecánica:</strong> Mantén estas colaciones a mano cerca de tu teclado mientras diseñas/trabajas para regular la ansiedad.
          </div>
        </div>

      </div>

    </div>
  );
}
