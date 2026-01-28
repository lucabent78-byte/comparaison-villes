import React from 'react';
import { Scale, ArrowUpFromLine, Hammer, Users, Image as ImageIcon, CheckCircle2, AlertTriangle } from 'lucide-react';

const AnalysisPage: React.FC = () => {
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
                 <img src="/dubai-skyline.jpg" alt="Skyline Dubaï" className="absolute inset-0 w-full h-full object-cover z-10" onError={(e) => (e.currentTarget.style.display = 'none')} />
                 <div className="text-center">
                    <ImageIcon className="w-8 h-8 text-slate-300 mx-auto mb-2" />
                    <span className="text-xs font-mono text-slate-400 bg-white px-2 py-1 rounded">IMAGE : Skyline Dubaï</span>
                 </div>
              </div>
              <div className="p-6 flex-1">
                 <h3 className="font-bold text-lg mb-2 text-blue-600">Dubaï : La course au ciel</h3>
                 <p className="text-slate-600 text-sm">
                    Une volonté de <strong>visibilité mondiale</strong>. Le paysage est dominé par le Burj Khalifa et une forêt de tours le long de la Sheikh Zayed Road.
                 </p>
              </div>
           </div>
           {/* ZURICH */}
           <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden flex flex-col">
              <div className="h-48 bg-slate-100 relative border-b border-slate-100 flex items-center justify-center">
                 <img src="/zurich-roofs.jpg" alt="Toits Zurich" className="absolute inset-0 w-full h-full object-cover z-10" onError={(e) => (e.currentTarget.style.display = 'none')} />
                 <div className="text-center">
                    <ImageIcon className="w-8 h-8 text-slate-300 mx-auto mb-2" />
                    <span className="text-xs font-mono text-slate-400 bg-white px-2 py-1 rounded">IMAGE : Toits Zurich</span>
                 </div>
              </div>
              <div className="p-6 flex-1">
                 <h3 className="font-bold text-lg mb-2 text-red-600">Zurich : L'échelle humaine</h3>
                 <p className="text-slate-600 text-sm">
                    Une ville horizontale. La réglementation stricte préserve les cônes de vue sur le lac et les Alpes. Les tours sont l'exception.
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
                 <img src="/dubai-cranes.jpg" alt="Chantier Dubaï" className="absolute inset-0 w-full h-full object-cover z-10" onError={(e) => (e.currentTarget.style.display = 'none')} />
                 <div className="text-center">
                    <ImageIcon className="w-8 h-8 text-slate-300 mx-auto mb-2" />
                    <span className="text-xs font-mono text-slate-400 bg-white px-2 py-1 rounded">IMAGE : Grues / Chantier</span>
                 </div>
              </div>
              <div className="p-6 flex-1">
                 <div className="flex items-center gap-2 mb-2 text-orange-600 font-medium text-sm">
                    <AlertTriangle size={16} /> En construction permanente
                 </div>
                 <p className="text-slate-600 text-sm">
                    La ville est en perpétuel devenir. C'est l'esthétique de l'inachèvement rapide, où des quartiers sortent du sable en quelques années.
                 </p>
              </div>
           </div>
           {/* ZURICH */}
           <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden flex flex-col">
              <div className="h-48 bg-slate-100 relative border-b border-slate-100 flex items-center justify-center">
                 <img src="/zurich-street.jpg" alt="Rue Zurich" className="absolute inset-0 w-full h-full object-cover z-10" onError={(e) => (e.currentTarget.style.display = 'none')} />
                 <div className="text-center">
                    <ImageIcon className="w-8 h-8 text-slate-300 mx-auto mb-2" />
                    <span className="text-xs font-mono text-slate-400 bg-white px-2 py-1 rounded">IMAGE : Rue Préservée</span>
                 </div>
              </div>
              <div className="p-6 flex-1">
                 <div className="flex items-center gap-2 mb-2 text-emerald-600 font-medium text-sm">
                    <CheckCircle2 size={16} /> Stabilité & Rénovation
                 </div>
                 <p className="text-slate-600 text-sm">
                    On transforme les friches, mais on ne démolit pas le centre. Le paysage semble "fini", privilégiant la pérennité sur la nouveauté.
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
                     <img src="/dubai-luxury.jpg" alt="Luxe Dubaï" className="absolute inset-0 w-full h-full object-cover z-10" onError={(e) => (e.currentTarget.style.display = 'none')} />
                     <span className="text-[10px] text-slate-400">Luxe</span>
                  </div>
                  <div className="bg-slate-100 relative flex items-center justify-center">
                     <img src="/dubai-labor.jpg" alt="Camp travail" className="absolute inset-0 w-full h-full object-cover z-10" onError={(e) => (e.currentTarget.style.display = 'none')} />
                     <span className="text-[10px] text-slate-400">Travail</span>
                  </div>
              </div>
              <div className="p-6 flex-1">
                 <h3 className="font-bold text-lg mb-2 text-purple-600">Dubaï : Mondes séparés</h3>
                 <p className="text-slate-600 text-sm">
                    Ségrégation spatiale extrême entre les tours de luxe et les camps de travailleurs en périphérie. Les deux mondes ne se croisent pas.
                 </p>
              </div>
           </div>
           {/* ZURICH */}
           <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden flex flex-col">
              <div className="h-48 bg-slate-100 relative border-b border-slate-100 flex items-center justify-center">
                 <img src="/zurich-coop.jpg" alt="Coopérative Zurich" className="absolute inset-0 w-full h-full object-cover z-10" onError={(e) => (e.currentTarget.style.display = 'none')} />
                 <div className="text-center">
                    <ImageIcon className="w-8 h-8 text-slate-300 mx-auto mb-2" />
                    <span className="text-xs font-mono text-slate-400 bg-white px-2 py-1 rounded">IMAGE : Logement Mixte</span>
                 </div>
              </div>
              <div className="p-6 flex-1">
                 <h3 className="font-bold text-lg mb-2 text-emerald-600">Zurich : Tissu Homogène</h3>
                 <p className="text-slate-600 text-sm">
                    Grâce aux coopératives d'habitation, la mixité est réelle. Le paysage urbain est socialement continu sans rupture violente.
                 </p>
              </div>
           </div>
        </div>
      </section>

    </div>
  );
};

export default AnalysisPage;
