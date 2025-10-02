import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
        .sendForm('service_f56e99q', 'template_jc1hjeh', form.current, {
            publicKey: 'TSMk-cCWChSCive4K', /* Account > API Keys > Public Keys */
        })
        .then(
            () => {
                console.log('SUCCESS !');
            },
            (error) => {
                console.log('FAILED...', error.text);
            }
        );
    }

    const contact = [
        { icon: Mail, Titre: "Email", value: "minolaetitia@gmail.com"},
        { icon: Phone, Titre: "Phone", value: "+261 33 34 804 20"},
        { icon: MapPin, Titre: "Location", value: "Antananarivo, Madagascar"},
    ];

    return(
        <section id="contact" className="bg-gray-900 py-20">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-br from-purple-500 to-blue-600">
                    Travaillons Ensemble
                </h2>
                <p className="text-slate-300 text-xl text-center mt-4 mb-12">
                    Une idée de projet ? Une opportunité ? N'hésitez pas à me contacter !
                </p>

                <div className="grid md:grid-cols-2 gap-24 text-justify text-slate-100">                   
                    {/* Informations de contact */}
                    <div className="space-y-6">
                        <h3 className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-teal-500 to-purple-600 font-semibold">Informations de contact</h3>

                        {contact.map((contact, idx) => {
                            const IconComponent = contact.icon;

                            return (
                                <div key={idx} className="my-4 flex gap-4 items-center">
                                    <div className="w-14 h-14 text-white flex justify-center items-center bg-gradient-to-br from-purple-700 to-blue-500 rounded-full shadow-inner shadow-fuchsia-800">
                                        <IconComponent className=" w-6 h-6" />
                                    </div>
                                    
                                    <div className="font-semibold">
                                        <h5 className="text-lg text-transparent text-white">{contact.Titre}</h5>
                                        <p className="text-sm font-normal text-slate-400">{contact.value}</p>
                                    </div>

                                </div>
                            );
                        })}
                        <h4 className="font-medium text-xl mt-12 my-2">Disponibilité</h4>
                        <p className="font-normal text-slate-400 text-base leading-relaxed">
                            Je suis actuellement disponible pour de nouveaux projets. 
                            N'hésitez pas à me contacter pour discuter de vos besoins et voir comment nous pouvons collaborer.
                        </p>

                    </div>

                    {/* Formulaire de contact */}
                    <div className="p-8 space-y-4 border border-gray-500/50 text-white rounded-lg shadow-inner shadow-sky-600">
                        <h3 className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-teal-500 to-sky-900 font-semibold">Envoyez-moi un message</h3>
                        <form ref={form} onSubmit={sendEmail} className="space-y-4">                           

                            <div className="grid md:grid-cols-2 gap-4">
                                {/* Nom */}
                                <div>
                                    <label className="text-sm font-semibold">Nom</label>
                                    <input type="text" name="user_name" placeholder="Votre nom" className="w-full mt-2 px-4 py-2 bg-gray-950/25 border border-slate-700/55 focus:outline-purple-950/90 rounded-md focus:ring-4 focus:ring-purple-700" required />
                                </div>
                                
                                {/* Adresse email */}
                                <div>
                                    <label className="text-sm font-semibold">Email</label>
                                    <input type="email" name="user_email" placeholder="votre@gmail.com" className="w-full mt-2 px-4 py-2 bg-gray-950/25 border border-slate-700/55 focus:outline-purple-950/90 rounded-md focus:ring-4 focus:ring-purple-700"  required />                              
                                </div>
                            </div>

                            {/* Sujet */}
                            <div>
                                <label className="text-sm font-semibold">Sujet</label>
                                <input type="text" name="subject" placeholder="votre@gmail.com" className="w-full mt-2 px-4 py-2 bg-gray-950/25 border border-slate-700/55 focus:outline-purple-950/90 rounded-md focus:ring-4 focus:ring-purple-700"  required />
                            </div>

                            {/* Message */}
                            <div>
                                <label className="text-sm font-semibold">Message</label>
                                <textarea name="message" rows={3} placeholder="Décrivez votre projet..." className="w-full mt-2 px-4 py-2 bg-gray-950/25 border border-slate-700/55 focus:outline-purple-950/90 rounded-md focus:ring-4 focus:ring-purple-700" required />
                            </div> 

                            <input type="submit" value="Envoyer le message" className="px-10 py-3 rounded-lg bg-gradient-to-br from-purple-700 to-blue-500 text-white font-semibold hover:shadow-md hover:shadow-sky-400 w-full" />
                        </form>
                    </div>
                </div>
                

            </div>
        </section>
    );
}