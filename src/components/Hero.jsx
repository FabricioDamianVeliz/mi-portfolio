import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 md:py-32">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Hola, soy Fabricio
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-blue-100">
          Power Platform Developer Jr | Data Scientist
        </p>
        <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
          Especializado en Microsoft Power Platform, automatización empresarial y análisis de datos. Apasionado por crear soluciones innovadoras que impulsen la transformación digital.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="#projects"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-blue-50 transition flex items-center gap-2"
          >
            Ver proyectos <ArrowRight size={20} />
          </a>
          <a
            href="#contact"
            className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition"
          >
            Contactame
          </a>
        </div>
      </div>
    </section>
  );
}