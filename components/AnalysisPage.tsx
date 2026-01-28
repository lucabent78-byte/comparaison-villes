import React from 'react';
import { Scale, ArrowUpFromLine, Hammer, Users, Image as ImageIcon, CheckCircle2, AlertTriangle } from 'lucide-react';

export const AnalysisPage: React.FC = () => {
  return (
    <div className="space-y-12 animate-fade-in pb-12 max-w-5xl mx-auto">
      
      {/* Title Section */}
      <div className="text-center space-y-4 py-8 border-b border-slate-200">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900">
          Comparaison Critique
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Deux modèles de développement urbain diamétralement opposés.
        </p>
      </div>

      {/* 1. Verticalité vs Horizontalité */}
      <section className="space-y-6">
        <div className="flex items-center gap-3 text-slate-900">
           <ArrowUpFromLine className="w-8 h-8 text-blue-600" />
           <h2 className="text-2xl font-bold">1. Morphologie : Verticale vs Horizontale</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
           {/* DUBAI */}
           <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden flex flex-col">
              <div className="h-48 bg-slate-100 relative border-b border-slate-100 flex items-center justify-center">
                 <img src="" alt="Skyline Dubaï gratte-ciels" className="absolute inset-0 w-full h-full object-cover opacity-0 z-10" />
                 <div className="text-center">
                    <ImageIcon className="w-8 h-8 text-slate-300 mx-auto mb-2" />
                    <span className="text-xs font-mono text-slate-400 bg-white px-2 py-1 rounded">IMAGE PDF : Skyline Dubaï</span>
                 </div>
              </div>
              <div className="p-6 flex-1">
                 <h3 className="font-bold text-lg mb-2 text-blue-600">Dubaï : La course au ciel</h3>
                 <p className="text-slate-600 text-sm">
                    Une ville d'objets iconiques verticaux. La rareté du sol n'est pas le moteur (il y a du désert), mais la volonté de <strong>visibilité mondiale</strong>. Le paysage est dominé par le Burj Khalifa (828m) et une forêt de tours le long de la Sheikh Zayed Road.
                 </p>
              </div>
           </div>
           {/* ZURICH */}
           <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden flex flex-col">
              <div className="h-48 bg-slate-100 relative border-b border-slate-100 flex items-center justify-center">
                 <img src="" alt="Vue toits Zurich hauteur limitée" className="absolute inset-0 w-full h-full object-cover opacity-0 z-10" />
                 <div className="text-center">
                    <ImageIcon className="w-8 h-8 text-slate-300 mx-auto mb-2" />
                    <span className="text-xs font-mono text-slate-400 bg-white px-2 py-1 rounded">IMAGE PDF : Toits Zurich</span>
                 </div>
              </div>
              <div className="p-6 flex-1">
                 <h3 className="font-bold text-lg mb-2 text-red-600">Zurich : L'échelle humaine</h3>
                 <p className="text-slate-600 text-sm">
                    Une ville horizontale. La réglementation stricte (plans de zones) et la volonté de préserver les cônes de vue sur le lac et les Alpes limitent la hauteur. Les rares tours (Prime Tower) sont l'exception, pas la règle.
                 </p>
              </div>
           </div>
        </div>
      </section>

      {/* 2. Chantier Permanent vs Ville Finie */}
      <section className="space-y-6">
        <div className="flex items-center gap-3 text-slate-900">
           <Hammer className="w-8 h-8 text-orange-600" />
           <h2 className="text-2xl font-bold">2. Dynamique : Chantier vs Préservation</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
           {/* DUBAI */}
           <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden flex flex-col">
              <div className="h-48 bg-slate-100 relative border-b border-slate-100 flex items-center justify-center">
                 <img src="" alt="Grues et construction Dubaï" className="absolute inset-0 w-full h-full object-cover opacity-0 z-10" />
                 <div className="text-center">
                    <ImageIcon className="w-8 h-8 text-slate-300 mx-auto mb-2" />
                    <span className="text-xs font-mono text-slate-400 bg-white px-2 py-1 rounded">IMAGE PDF : Grues / Chantier</span>
                 </div>
              </div>
              <div className="p-6 flex-1">
                 <div className="flex items-center gap-2 mb-2 text-orange-600 font-medium text-sm">
                    <AlertTriangle size={16} /> En construction permanente
                 </div>
                 <p className="text-slate-600 text-sm">
                    Le paysage est marqué par l'omniprésence des grues. La ville est en perpétuel devenir, avec des quartiers entiers sortant du sable en quelques années (ex: Creek Harbour). C'est l'esthétique de l'inachèvement rapide.
                 </p>
              </div>
           </div>
           {/* ZURICH */}
           <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden flex flex-col">
              <div className="h-48 bg-slate-100 relative border-b border-slate-100 flex items-center justify-center">
                 <img src="" alt="Rue calme Zurich bâtiment rénové" className="absolute inset-0 w-full h-full object-cover opacity-0 z-10" />
                 <div className="text-center">
                    <ImageIcon className="w-8 h-8 text-slate-300 mx-auto mb-2" />
                    <span className="text-xs font-mono text-slate-400 bg-white px-2 py-1 rounded">IMAGE PDF : Rue Préservée</span>
                 </div>
              </div>
              <div className="p-6 flex-1">
                 <div className="flex items-center gap-2 mb-2 text-emerald-600 font-medium text-sm">
                    <CheckCircle2 size={16} /> Stabilité & Rénovation
                 </div>
                 <p className="text-slate-600 text-sm">
                    Pas de chantiers pharaoniques. On rénove, on transforme (friches industrielles), mais on ne démolit pas le centre. Le paysage semble "fini", stable et apaisé, privilégiant la pérennité sur la nouveauté.
                 </p>
              </div>
           </div>
        </div>
      </section>

      {/* 3. Ségrégation vs Homogénéité */}
      <section className="space-y-6">
        <div className="flex items-center gap-3 text-slate-900">
           <Users className="w-8 h-8 text-purple-600" />
           <h2 className="text-2xl font-bold">3. Structure Sociale : Inégalités vs Mixité</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
           {/* DUBAI */}
           <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden flex flex-col">
              <div className="grid grid-cols-2 h-48 border-b border-slate-100">
                  <div className="bg-slate-50 relative flex items-center justify-center border-r border-slate-100">
                     <img src="" alt="Villa de luxe Palm Jumeirah" className="absolute inset-0 w-full h-full object-cover opacity-0 z-10" />
                     <span className="text-[10px] text-slate-400">PDF: Villa Luxe</span>
                  </div>
                  <div className="bg-slate-100 relative flex items-center justify-center">
                     <img src="" alt="Camp de travail Sonapur" className="absolute inset-0 w-full h-full object-cover opacity-0 z-10" />
                     <span className="text-[10px] text-slate-400">PDF: Camp Travail</span>
                  </div>
              </div>
              <div className="p-6 flex-1">
                 <h3 className="font-bold text-lg mb-2 text-purple-600">Dubaï : Mondes séparés</h3>
                 <p className="text-slate-600 text-sm">
                    Une ségrégation spatiale extrême. D'un côté, les gated communities et tours de luxe (Marina, Palm) pour les expatriés riches. De l'autre, les camps de travailleurs (Sonapur) cachés en périphérie industrielle. Les deux mondes ne se croisent pas.
                 </p>
              </div>
           </div>
           {/* ZURICH */}
           <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden flex flex-col">
              <div className="h-48 bg-slate-100 relative border-b border-slate-100 flex items-center justify-center">
                 <img src="" alt="Logements coopératifs Zurich ou quartier mixte" className="absolute inset-0 w-full h-full object-cover opacity-0 z-10" />
                 <div className="text-center">
                    <ImageIcon className="w-8 h-8 text-slate-300 mx-auto mb-2" />
                    <span className="text-xs font-mono text-slate-400 bg-white px-2 py-1 rounded">IMAGE PDF : Logement Mixte</span>
                 </div>
              </div>
              <div className="p-6 flex-1">
                 <h3 className="font-bold text-lg mb-2 text-emerald-600">Zurich : Tissu Homogène</h3>
                 <p className="text-slate-600 text-sm">
                    Il n'y a pas de "quartiers pauvres" ou de bidonvilles. Grâce à une politique sociale forte et aux coopératives d'habitation, la mixité est réelle. Le standard de logement est élevé partout, créant un paysage urbain socialement continu sans rupture violente.
                 </p>
              </div>
           </div>
        </div>
      </section>

    </div>
  );
};