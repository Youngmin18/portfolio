import { FaAngular, FaHtml5, FaJava, FaJs, FaMobileAlt, FaReact } from "react-icons/fa";
import { SiMaterialdesign, SiTailwindcss, SiTypescript } from "react-icons/si";
import "./cube.css" // 👉 on va créer ce fichier juste après

export default function About() {
	const skills = [
		{ icon: <FaHtml5 className="text-orange-500" />, label: "HTML5 & CSS3" },
		{ icon: <FaJs className="text-yellow-700" />, label: "JavaScript" },
		{ icon: <SiTypescript className="text-blue-500" />, label: "TypeScript" },
		{ icon: <SiTailwindcss className="text-cyan-500" />, label: "TailwindCSS" },
		{ icon: <SiMaterialdesign className="text-pink-500" />, label: "Angular Material" },
		{ icon: <FaAngular className="text-red-600" />, label: "Angular" },
		{ icon: <FaReact className="text-teal-700" />, label: "React" },
		{ icon: <FaJava className="text-blue-700" />, label: "Spring Boot" },
		{ icon: <FaMobileAlt className="text-green-600" />, label: "Responsive Design" }
	];

	return (
		<section id="about" className="bg-gray-950/95 py-20">
			<div className="container mx-auto px-6">
				<h2 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-br from-purple-500 to-blue-600">
					À propos de moi
				</h2>
				<div className="grid md:grid-cols-2 gap-12 items-center">
					{/* Texte */}
					<div className="text-justify px-2">
						<h3 className="text-2xl font-semibold mt-6 mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-teal-500 to-purple-600">Mon parcours ?</h3>
						<p className="text-slate-300 mb-4 ">
							Etudiante en 5ème année à l'Université d'Antananarivo. 
							Je me spécialise dans le développement web avec une forte affinité pour les technologies modernes comme Angular, 
							TypeScript, Spring Boot, TailwindCSS et Angular Material. J'aime concevoir des interfaces élégantes et fonctionnelles, 
							tout en assurant une architecture robuste côté back-end.
						</p>

						<h3 className="text-2xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-teal-500 to-purple-600">Ce qui me passionne ?</h3>
						<p className="text-slate-300 mb-4">
							Quand je ne code pas, je plonge dans des webtoons, j'écris des histoires, je transforme des images en illustrations toon avec 
							Photoshop. 
							Ces passions nourrissent ma créativité et influencent ma manière de concevoir des interfaces et des parcours utilisateurs.
						</p>

						<h3 className="text-2xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-teal-500 to-purple-600">Ce que je recherche ?</h3>
						<p className="text-slate-300 mb-6">
							Je suis toujours à la recherche de projets qui allient technologie et narration visuelle, et de collaborations qui me permettent 
							d'apprendre, de créer et d'innover. Pour moi, le développement web est un terrain de jeu où logique et imagination se rencontrent.
						</p>

						{/* Skills */}
						<div className="flex flex-wrap gap-3 mt-8">
							{skills.map((skill, index) => (
								<div
									key={index}
									className="flex items-center gap-2 bg-gradient-to-br from-slate-200 to-blue-300 px-4 py-2 rounded-full text-sm hover:scale-105 transition"
								>
									{skill.icon}
									<span>{skill.label}</span>
								</div>
							))}
						</div>
					</div>

					{/* Cube 3D */}
					<div className="flex justify-center mt-8 h-[400px]">
						<div className="cube">
							<div className="face front"><img src="https://res.cloudinary.com/daesjxlug/image/upload/v1758876466/cube_jptfll.png"  alt="face front" /></div>
							<div className="face back"><img src="https://res.cloudinary.com/daesjxlug/image/upload/v1758876436/projet1_3_3_mrrjqb.png"  alt="face back" /></div>
							<div className="face right"><img src="https://res.cloudinary.com/daesjxlug/image/upload/v1758879383/projet3_1_kkuy9p.png"  alt="face right" /></div>
							<div className="face left"><img src="https://res.cloudinary.com/daesjxlug/image/upload/v1758876376/projet1_3_2_gekq8x.png"  alt="face left" /></div>
							<div className="face top"><img src="https://res.cloudinary.com/daesjxlug/image/upload/v1758876403/projet1_6_zcjzl6.png"  alt="face top" /></div>
							<div className="face bottom"><img src="https://res.cloudinary.com/daesjxlug/image/upload/v1758876430/projet2_1_okcsli.png"  alt="face bottom" /></div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
