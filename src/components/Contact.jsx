import { useState } from 'react';
import { Mail, Github, Linkedin, MapPin } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes integrar un servicio como FormSubmit, Netlify Forms, etc.
    console.log(formData);
    alert('¡Gracias por tu mensaje! Pronto me pondré en contacto.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="section-title">Contacto</h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Formulario */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Envíame un mensaje</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Nombre</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                  placeholder="tu@email.com"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Mensaje</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                  placeholder="Tu mensaje..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition"
              >
                Enviar mensaje
              </button>
            </form>
          </div>

          {/* Información de contacto */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Otras formas de contactarme</h3>
            
            <div className="space-y-6">
              <a
                href="mailto:fabricio.damian.veliz@gmail.com"
                className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition"
              >
                <Mail className="text-blue-600" size={28} />
                <div>
                  <p className="font-medium text-gray-900">Email</p>
                  <p className="text-gray-600">fabricio.damian.veliz@gmail.com</p>
                </div>
              </a>

              <a
                href="https://linkedin.com/in/fabricio-damian-veliz"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition"
              >
                <Linkedin className="text-blue-600" size={28} />
                <div>
                  <p className="font-medium text-gray-900">LinkedIn</p>
                  <p className="text-gray-600">Fabricio Damian Veliz</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                <MapPin className="text-blue-600" size={28} />
                <div>
                  <p className="font-medium text-gray-900">Ubicación</p>
                  <p className="text-gray-600">Catamarca, Argentina</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}