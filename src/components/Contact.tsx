
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div id="contact" className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Contáctanos
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Estamos aquí para ayudarte
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-aqua focus:ring-aqua"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-aqua focus:ring-aqua"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-aqua focus:ring-aqua"
                />
              </div>
              <button
                type="submit"
                className="w-full flex justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-white bg-aqua hover:bg-aqua-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-aqua"
              >
                Enviar Mensaje
                <Send className="ml-2 h-4 w-4" />
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-medium text-gray-900">Información de Contacto</h3>
              <dl className="mt-4 space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <Phone className="h-6 w-6 text-aqua" />
                  </div>
                  <div className="ml-3 text-base text-gray-500">
                    <p>+591 2 123 4567</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <Mail className="h-6 w-6 text-aqua" />
                  </div>
                  <div className="ml-3 text-base text-gray-500">
                    <p>contacto@aquarella.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <MapPin className="h-6 w-6 text-aqua" />
                  </div>
                  <div className="ml-3 text-base text-gray-500">
                    <p>La Paz, Bolivia</p>
                    <p className="mt-1">Av. Principal #123</p>
                  </div>
                </div>
              </dl>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-900">Síguenos en Redes Sociales</h3>
              <div className="mt-4 flex space-x-6">
                {/* Add social media icons/links here */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;