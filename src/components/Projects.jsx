import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'Sistema de Gestión de Emergencias',
      description: 'App Power Apps para gestión integral de emergencias con flujos de Power Automate y integración con SharePoint.',
      tech: ['Power Apps', 'Power Automate', 'SharePoint', 'Power BI'],
      link: '#',
      github: '#',
      image: 'bg-red-500',
    },
    {
      title: 'Bot Copilot Studio - ServiceNow',
      description: 'Asistente inteligente con Copilot Studio para crear, editar y consultar tickets de incidentes en ServiceNow.',
      tech: ['Copilot Studio', 'Power Automate', 'ServiceNow', 'AI'],
      link: '#',
      github: '#',
      image: 'bg-purple-500',
    },
    {
      title: 'App Gestión de Viajes Corporativos',
      description: 'Solución Power Apps para automatizar solicitudes y seguimiento de viajes con notificaciones por correo.',
      tech: ['Power Apps', 'Power Automate', 'SharePoint', 'Email'],
      link: '#',
      github: '#',
      image: 'bg-green-500',
    },
    {
      title: 'Modelo Predictivo - Retención Clientes',
      description: 'Modelo de Machine Learning para anticipar deserción de clientes en telecomunicaciones con Python.',
      tech: ['Python', 'ML', 'Data Science', 'Analytics'],
      link: '#',
      github: '#',
      image: 'bg-orange-500',
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="section-title">Proyectos Destacados</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition">
              {/* Imagen placeholder */}
              <div className={`${project.image} h-48 flex items-center justify-center text-white text-2xl font-bold`}>
                {project.title.charAt(0)}
              </div>

              {/* Contenido */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href={project.link}
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Ver más <ExternalLink size={18} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}