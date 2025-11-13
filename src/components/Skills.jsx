export default function Skills() {
  const skillCategories = [
    {
      category: 'Microsoft Power Platform',
      skills: ['Power Apps', 'Power Automate', 'Power BI', 'SharePoint', 'Copilot Studio', 'AI Builder']
    },
    {
      category: 'Low-Code / No-Code',
      skills: ['Mendix', 'ServiceNow', 'Integrations', 'API REST', 'Workflows', 'Automations']
    },
    {
      category: 'Data & IA',
      skills: ['Python', 'Data Analytics', 'Machine Learning', 'AI Generativa', 'Modelos Predictivos', 'SQL']
    },
    {
      category: 'Herramientas',
      skills: ['Git/GitHub', 'VS Code', 'Office 365', 'Teams', 'Agile', 'Problem Solving']
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="section-title">Skills & Tecnologías</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((cat, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4">{cat.category}</h3>
              <ul className="space-y-2">
                {cat.skills.map((skill, i) => (
                  <li key={i} className="text-gray-700 flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}