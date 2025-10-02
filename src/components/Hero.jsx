import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-scroll";

const Hero = () => {
	return (
		<section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
			{/* Background avec image et overlay */}
			<div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: "url('https://res.cloudinary.com/daesjxlug/image/upload/v1758877465/heroImage_fv4foe.jpg')"}} ></div>

			{/* Gradient overlay */}
			<div className="absolute inset-0 bg-gradient-to-b from-purple-800/75 to-sky-400/25 backdrop-blur-sm"></div>

			{/* Contenu principal */}
			<div className="relative z-10 text-center max-w-4xl mx-auto px-6">
				<h1 className="text-5xl md:text-6xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 via-sky-400 to-purple-600">
					<span className="text-white">Bonjour, je suis</span> <br />
					<span className="typewriter">
						<Typewriter
							words={["Laetitia RAMANANTSOA", "Développeuse Web Full-Stack"]}
							loop
							cursor
							cursorStyle="|"
							typeSpeed={80}
							deleteSpeed={50}
							delaySpeed={2000}
						/>

					</span>
				</h1>

				<p className="mt-6 text-xl md:text-2xl text-slate-200 mb-8">
					Créateur d'expériences web modernes et performantes
				</p>

				<div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
					<Link to="portfolio" smooth className="px-10 py-3 rounded-lg bg-gradient-to-br from-purple-700 to-blue-500 text-white font-semibold shadow hover:scale-105 cursor-pointer">
						Voir mes projets
					</Link>

					<Link to="contact" smooth className="px-10 py-3 rounded-lg bg-indigo-950 text-white font-semibold hover:bg-white/20 hover:border border-white cursor-pointer">
						Me contacter
					</Link>
				</div>
			</div>

		</section>
	);
};

export default Hero;
