import { FaCode, FaLightbulb, FaMobileAlt } from "react-icons/fa";

export default function Services() {
    const services = [
        { icon: <FaCode className="text-4xl text-blue-600 mb-4" />, titre: "Code Clean", description: "Écriture de code maintenable et évolutif avec les meilleures pratiques." },
        { icon: <FaMobileAlt className="text-4xl text-blue-600 mb-4" />, titre: "Responsive Design", description: "Création d'interfaces intuitives et accessibles sur tous les appareils (desktop, tablette, mobile)." },
        { icon: <FaLightbulb className="text-4xl text-blue-600 mb-4" />, titre: "Innovation", description: "Veille technologique constante et adoption des technologies émergentes." },
    ];
    
    return (
        <section id="services" className="bg-gray-900 py-20">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-br from-purple-500 to-blue-600">
                    Mes Services
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {services.map((service, idx) => (
                        <div 
                            key={idx}
                            className="border border-gray-500/50 mt-6 mb-4 p-6 rounded-xl shadow-inner shadow-sky-600 hover:bg-gradient-to-b from-slate-950 to-blue-950 hover:shadow-blue-800 hover:scale-105 hover:shadow-lg transition text-justify"
                            >
                                <div className="flex gap-2 text-2xl font-semibold my-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-teal-500 to-purple-600">
                                    {service.icon}
                                    <h3>
                                        {service.titre}
                                    </h3>
                                </div>
                                
                                <p className="text-slate-300 mb-4 px-2 text-base leading-relaxed">{service.description}</p>

                        </div>
                    ))};
                    
                </div>
            </div>
        </section>
    );
}