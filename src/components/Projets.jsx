import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { ExternalLink, Github } from "lucide-react";

import "swiper/css"
import "swiper/css/pagination"

export default function Projets() {
    const projets = [
        {
            titre : "Site vitrine de Blu Azur",
            images : [
                "https://res.cloudinary.com/daesjxlug/image/upload/v1759377797/projet4_zj0ure.jpg"
            ],
            description: "Un site vitrine moderne et responsive développé pour un test technique de pré-embauche. Avec intégration de composants réutilisables (Header, Hero, Footer, Sections dynamiques), mise en place d'un design responsive mobile-first, gestion du code avec Git/GitHub et déploiement et mise en ligne sur GitHub Pages.",
            tags : ["React.js", "TailwindCSS", "GitHub Pages", "Vite"],
            githubUrl: "https://github.com/Youngmin18/blu-azur-site",
            liveUrl: "https://youngmin18.github.io/blu-azur-site"
        },
        {
            titre : "Application de gestion de bibliothèque",
            images : [
                "https://res.cloudinary.com/daesjxlug/image/upload/v1758879383/projet3_1_kkuy9p.png",
            ],
            description: "Plateforme web de gestion de bibliothèque avec gestion des rôles (admin, bibliothécaire, membre), authentification sécurisée, catalogue des livres, réservation et historique de lecture, recommandations personnalisées, et interface responsive.",
            tags : ["Angular", "Spring Boot", "TailwindCSS", "MySQL", "API REST", "Angular Material", "Cloudinary"]
        },
        {
            titre : "Plateforme de tourisme en ligne",
            images : [
                "https://res.cloudinary.com/daesjxlug/image/upload/v1758877081/projet1_1_obmdag.png",
                "https://res.cloudinary.com/daesjxlug/image/upload/v1758876466/cube_jptfll.png",
                "https://res.cloudinary.com/daesjxlug/image/upload/v1758876273/projet1_2_cod73b.png",
                "https://res.cloudinary.com/daesjxlug/image/upload/v1758876303/projet1_2_1_ofm7nt.png",
                "https://res.cloudinary.com/daesjxlug/image/upload/v1758876313/projet1_3_ubt1gn.png",
                "https://res.cloudinary.com/daesjxlug/image/upload/v1758876368/projet1_3_1_umqhwo.png",
                "https://res.cloudinary.com/daesjxlug/image/upload/v1758876376/projet1_3_2_gekq8x.png",
                "https://res.cloudinary.com/daesjxlug/image/upload/v1758876436/projet1_3_3_mrrjqb.png",
                "https://res.cloudinary.com/daesjxlug/image/upload/v1758876351/projet1_4_osgdmk.png",
                "https://res.cloudinary.com/daesjxlug/image/upload/v1758876428/projet1_5_rpyim6.png",
                "https://res.cloudinary.com/daesjxlug/image/upload/v1758876403/projet1_6_zcjzl6.png"

            ],
            description: "Plateforme web moderne et responsive dédiée à la valorisation du patrimoine naturel et culturel de Madagascar avec un système de réservation intégré.",
            tags : ["Angular", "Spring Boot","TailwindCSS", "Angular Material", "MySQL", "API REST", "EmailJS", "MapLibreGL", "ngx-mask", "Swiper"]
        },
        {
            titre : "Dashboard d'analyse comportementale E-commerce",
            images : [
                "https://res.cloudinary.com/daesjxlug/image/upload/v1758876430/projet2_1_okcsli.png",
                "https://res.cloudinary.com/daesjxlug/image/upload/v1758876455/projet2_2_emqlax.png",
                "https://res.cloudinary.com/daesjxlug/image/upload/v1758876321/projet2_3_c5z9iq.png",
                "https://res.cloudinary.com/daesjxlug/image/upload/v1758877046/projet2_4_wupbvy.png",
            ],
            description: "Outil d'aide à la stratégie marketing avec une visualisation interactive, filtres par segment/période, export Excel & PNG, thème sombre, comparaison de segments.",
            tags : ["Python 3.11", "tkcalendar", "MongoDB", "Tkinter", "ttk",  "Pandas", "Numpy", "Matplotlib", "Scikit-learn", "Seaborn"]
        }

    ];

    return (
        <section id="projets" className="bg-gray-950/95 py-20">
            <div className="container mx-auto px-6 space-y-6">
                <h2 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-br from-purple-500 to-blue-600">
                    Projets Récents
                </h2>
                <p className="text-slate-300 text-xl text-center mt-6 mb-12">
                    Découvrez une sélection de mes réalisations les plus récentes et innovantes
                </p>

                <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory md:grid md:grid-cols-2 lg:grid-cols-3 md:overflow-visible md:gap-8">
                    {projets.map((projet, idx) => (
                        <div
                            key={idx}
                            className="w-80 md:w-auto border border-gray-500/50 rounded-xl shadow-inner shadow-sky-600 overflow-hidden transform hover:scale-105 transition-transform duration-300 flex-shrink-0 snap-center"    
                        >
                            <div className="relative overflow-hidden">
                                <Swiper
                                    modules={[Pagination, Autoplay]}
                                    pagination={{ clickable: true }}
                                    autoplay={{ delay: 5000 }}
                                    loop
                                    spaceBetween={10}
                                    className="w-full h-64"
                                >
                                    {projet.images.map((img, i) => (
                                        <SwiperSlide key={i}>
                                            <img 
                                                src={img} 
                                                alt={`${projet.titre} - image${i + 1}`} 
                                                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110" 
                                            />

                                            {projet.liveUrl && projet.githubUrl  && (
                                                <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">                                    
                                                    {/* Lien live demo */}
                                                    {projet.liveUrl && (
                                                        <a href={projet.liveUrl} target="_blank" className="px-4 py-2 rounded-lg bg-gradient-to-br from-purple-700 to-blue-500 text-white font-semibold shadow hover:scale-105 cursor-pointer flex items-center">
                                                            <ExternalLink className="w-4 h-4 mr-2" />
                                                            Voir 
                                                        </a>
                                                    )}

                                                    {/* Lien  */}
                                                    {projet.githubUrl  && (
                                                        <a 
                                                            href={projet.githubUrl}  
                                                            target="_blank"
                                                            className="px-4 py-2 rounded-lg bg-indigo-950 text-white font-semibold hover:border border-white cursor-pointer flex items-center">
                                                            
                                                            <Github className="w-4 h-4 mr-2" />
                                                            Code
                                                        </a>
                                                    )}
                                                </div>
                                            ) }

                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>

                            <div className="px-8 pb-4">
                                <h3 className="text-2xl font-semibold my-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-teal-500 to-sky-900">{projet.titre}</h3>
                                <p className="text-slate-300 mb-4 text-justify">{projet.description}</p>

                                <div className="flex flex-wrap gap-2">
                                    {projet.tags.map((tag, t) => (
                                        <span 
                                        key={t}
                                        className="bg-gray-800 text-sm text-slate-300 font-medium px-4 py-1 rounded-full"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
