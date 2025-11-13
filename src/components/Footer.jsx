import { Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center">
          <p className="flex items-center justify-center gap-2">
            Hecho con <Heart size={18} className="text-red-500" /> por Fabricio Veliz
          </p>
          <p className="text-gray-400 mt-2">© {currentYear} Fabricio Veliz. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}