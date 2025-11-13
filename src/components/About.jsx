export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="section-title">Sobre mí</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Soy un desarrollador especializado en Microsoft Power Platform, con una fuerte pasión por la innovación y la transformación digital. Actualmente trabajo en Practia Global como Power Platform Developer Jr, donde desarrollo aplicaciones empresariales robustas.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Me impulsa el deseo constante de aprender, crecer y superarme, explorando nuevas herramientas, lenguajes y tendencias en el mundo de la informática. Me esfuerzo por desarrollar habilidades sólidas tanto técnicas como personales que me permitan afrontar desafíos reales y aportar soluciones eficientes.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Creo firmemente en el compromiso, la perseverancia y la dedicación como pilares fundamentales para alcanzar mis metas. Avanzo con la convicción de contribuir al desarrollo de una industria que no deja de evolucionar, mientras construyo un futuro profesional y personal lleno de propósito.
            </p>
            
            <div className="mt-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Datos clave</h3>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Especialista en Microsoft Power Platform</li>
                <li>✓ Experiencia en Data Science y IA</li>
                <li>✓ 2+ años en desarrollo de soluciones empresariales</li>
                <li>✓ Certificaciones: Power Apps, Mendix, Copilot Studio</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Experiencia</h3>
            <div className="space-y-6">
              <div className="border-l-4 border-blue-600 pl-4">
                <h4 className="font-bold text-gray-900">Power Platform Developer Jr</h4>
                <p className="text-sm text-gray-600">Practia Global | Ene 2024 - Actualidad</p>
                <p className="text-gray-700 mt-2">Desarrollo de apps con Power Apps, automatización con Power Automate y integración SharePoint</p>
              </div>
              <div className="border-l-4 border-blue-600 pl-4">
                <h4 className="font-bold text-gray-900">Data Scientist</h4>
                <p className="text-sm text-gray-600">Practia Global | Ago 2023 - Ene 2024</p>
                <p className="text-gray-700 mt-2">Modelos predictivos, chatbots con GPT y automatización con IA</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}