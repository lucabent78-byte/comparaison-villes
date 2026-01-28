import React from 'react';
import { 
  Landmark, 
  Leaf, 
  Wallet,
  Map,
  Vote,
  TrendingUp,
  Image as ImageIcon
} from 'lucide-react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

// Données démographiques approximatives pour Zurich (Ville) montrant la stabilité
const zurichPopulationData = [
  { year: '1970', population: 422000 },
  { year: '1980', population: 369000 },
  { year: '1990', population: 365000 },
  { year: '2000', population: 363000 },
  { year: '2010', population: 385000 },
  { year: '2015', population: 410000 },
  { year: '2022', population: 427000 },
];

export const ZurichPage: React.FC = () => {
  return (
    <div className="space-y-6 animate-fade-in pb-12">
      {/* Header Section */}
      <header className="space-y-2">
        <h1 className="text-4xl font-bold text-slate-900">Zurich, Suisse</h1>
        <p className="text-lg text-slate-600 max-w-2xl">
          L'incarnation de la stabilité historique. Une métropole gérée par le consensus démocratique.
        </p>
      </header>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[minmax(180px,auto)]">

        {/* 1. Localisation & Situation (Large Card - Matching Dubai) */}
        <div className="col-span-1 md:col-span-2 row-span-2 bg-white p-6 rounded-3xl shadow-sm border border-slate-100 flex flex-col gap-4">
          <div className="flex items-center gap-2 text-blue-600 mb-2">
            <Map className="w-6 h-6" />
            <h2 className="text-xl font-semibold">Localisation & Situation</h2>
          </div>
          <div className="prose text-slate-600 mb-2">
            <p className="mb-2">
              <strong className="text-slate-900">Situation :</strong> Située au cœur de l'Europe, au nord de la Suisse. Ville lacustre à l'extrémité nord du lac de Zurich, traversée par la Limmat.
            </p>
            <p>
              <strong className="text-slate-900">Cadre :</strong> Un environnement contraint par la topographie (collines, lac) qui limite naturellement l'étalement urbain, contrairement au désert ouvert de Dubaï.
            </p>
          </div>
          
          {/* IMAGE CONTAINER */}
          <div className="mt-auto h-64 bg-slate-50 rounded-xl overflow-hidden relative group border-2 border-dashed border-slate-300 flex flex-col items-center justify-center p-4 text-center">
             {/* COMMENTAIRE: Insérer ici l'image carte ou vue aérienne globale de Zurich */}
             <img 
               src="" 
               alt="Vue aérienne de Zurich montrant le lac et la densité urbaine contrainte par les collines" 
               className="absolute inset-0 w-full h-full object-cover opacity-0 z-10"
             />
             <ImageIcon className="w-8 h-8 text-slate-400 mb-2" />
             <span className="text-xs font-mono bg-slate-200 text-slate-600 px-2 py-1 rounded mb-1">IMAGE PDF : Vue Aérienne / Carte</span>
          </div>
        </div>

        {/* 2. Démographie (Chart Card - Replacing History) */}
        <div className="col-span-1 md:col-span-2 row-span-2 bg-white p-6 rounded-3xl shadow-sm border border-slate-100 flex flex-col">
          <div className="flex items-center gap-2 text-purple-600 mb-4">
            <TrendingUp className="w-6 h-6" />
            <h2 className="text-xl font-semibold">Stabilité Démographique</h2>
          </div>
          <p className="text-slate-500 text-sm mb-4">
            Population 2022 : ~427k. Une croissance lente et maîtrisée, contrastant avec l'explosion de Dubaï.
          </p>
          <div className="flex-1 min-h-[250px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={zurichPopulationData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <XAxis 
                  dataKey="year" 
                  tick={{fontSize: 12, fill: '#64748b'}} 
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis 
                  domain={[300000, 450000]}
                  tick={{fontSize: 12, fill: '#64748b'}} 
                  axisLine={false}
                  tickLine={false}
                  tickFormatter={(value) => `${(value / 1000).toFixed(0)}k`}
                />
                <Tooltip 
                  cursor={{fill: '#f1f5f9'}}
                  contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'}}
                />
                <Bar 
                  dataKey="population" 
                  fill="#7c3aed" 
                  radius={[4, 4, 0, 0]}
                  animationDuration={1500}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* 3. Économie (Small Card - Matching Dubai) */}
        <div className="col-span-1 md:col-span-1 bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
          <div className="flex items-center gap-2 text-emerald-600 mb-3">
            <Wallet className="w-6 h-6" />
            <h2 className="text-lg font-semibold">Économie</h2>
          </div>
          <div className="text-xl font-bold text-slate-800 mb-1">Haute Valeur</div>
          <div className="text-sm font-medium text-slate-500 mb-4">Finance & Services</div>
          <p className="text-sm text-slate-600 leading-relaxed">
            Siège de l'UBS et du CS. Pôle mondial de la banque privée et de l'assurance.
          </p>
        </div>

        {/* 4. Qualité de Vie (Small Card - Matching Dubai Logistics) */}
        <div className="col-span-1 md:col-span-1 bg-gradient-to-br from-emerald-900 to-emerald-800 text-white p-6 rounded-3xl shadow-lg flex flex-col justify-between">
          <div>
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Leaf className="w-5 h-5" /> Cadre de Vie
            </h2>
            <p className="text-sm text-emerald-100">
               Régulièrement élue ville offrant la meilleure qualité de vie au monde. Mobilité douce, propreté et sécurité.
            </p>
          </div>
          {/* IMAGE CONTAINER */}
          <div className="mt-4 h-20 w-full bg-white/10 rounded-lg overflow-hidden relative border border-white/10 flex items-center justify-center">
             <img 
               src="" 
               alt="Parc urbain ou bord du lac avec des gens se baignant, illustrant la qualité de vie" 
               className="absolute inset-0 w-full h-full object-cover opacity-0 z-10" 
             />
             <div className="text-[10px] text-emerald-200/70 text-center px-1">
               IMAGE PDF<br/>Bord du Lac
             </div>
          </div>
        </div>

        {/* 5. Régime Politique (Large - Matching Dubai Regime slot) */}
        <div className="col-span-1 md:col-span-2 bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
           <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2 text-orange-600">
                <Vote className="w-6 h-6" />
                <h2 className="text-lg font-semibold">Régime Politique</h2>
              </div>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-4 text-sm text-slate-600">
                 <p>
                    <strong className="text-slate-900 block mb-1">Démocratie Directe :</strong> 
                    Zurich fonctionne selon un système fédéral (Suisse). Le pouvoir est horizontal ("Bottom-Up"). Les citoyens votent sur les projets d'urbanisme majeurs.
                 </p>
                 <p>
                    <strong className="text-slate-900 block mb-1">Consensus :</strong> 
                    Ce processus garantit la stabilité et l'acceptation sociale, mais ralentit considérablement la vitesse de transformation urbaine par rapport à Dubaï.
                 </p>
              </div>
              
              {/* IMAGE CONTAINER: POLITIQUE */}
              <div className="h-40 bg-slate-50 rounded-xl relative overflow-hidden border-2 border-dashed border-slate-300 flex items-center justify-center">
                 {/* COMMENTAIRE: Insérer ici image Hôtel de Ville ou vote populaire */}
                 <img 
                   src="" 
                   alt="Hôtel de ville de Zurich (Rathaus) ou scène de votation populaire" 
                   className="absolute inset-0 w-full h-full object-cover opacity-0 z-10" 
                 />
                 <div className="text-center p-2">
                    <Landmark className="text-slate-300 w-6 h-6 mx-auto mb-1" />
                    <span className="text-[10px] text-slate-400 block">IMAGE PDF : Rathaus / Démocratie</span>
                 </div>
              </div>
           </div>
        </div>

      </div>
    </div>
  );
};