import { useState } from 'react';
import { Search } from 'lucide-react';

const products = [
  {
    id: '1',
    name: 'Ballerina Clásica',
    description: 'Elegante y cómoda para todo el día. Fabricada con cuero genuino y suela flexible que se adapta a tu paso.',
    price: 299,
    category: 'Casual',
    color: 'Rosa',
    imageUrl: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '2',
    name: 'Sandalia Moderna',
    description: 'Perfecta para ocasiones especiales. Diseño contemporáneo con detalles metálicos y tacón de 7cm.',
    price: 349,
    category: 'Formal',
    color: 'Turquesa',
    imageUrl: 'https://images.unsplash.com/photo-1562273138-f46be4ebdf33?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '3',
    name: 'Zapato Oxford',
    description: 'Clásico renovado con un toque moderno. Ideal para el trabajo y eventos formales. Cuero premium y plantilla acolchada.',
    price: 399,
    category: 'Formal',
    color: 'Negro',
    imageUrl: 'https://images.unsplash.com/photo-1449505278894-297fdb3edbc1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '4',
    name: 'Sneaker Urbano',
    description: 'Comodidad y estilo para el día a día. Suela de goma antideslizante y tecnología de amortiguación.',
    price: 329,
    category: 'Deportivo',
    color: 'Blanco',
    imageUrl: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '5',
    name: 'Sandalia Plataforma',
    description: 'Eleva tu estilo con esta sandalia de plataforma. Perfecta para el verano con su diseño fresco y moderno.',
    price: 279,
    category: 'Casual',
    color: 'Celeste',
    imageUrl: 'https://images.unsplash.com/photo-1573100925118-870b8efc799d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '6',
    name: 'Botín Elegante',
    description: 'Botín versátil para toda ocasión. Combina cuero de primera calidad con detalles artesanales.',
    price: 449,
    category: 'Formal',
    color: 'Marrón',
    imageUrl: 'https://scontent.flpb3-1.fna.fbcdn.net/v/t39.30808-6/474797048_1124405899222527_2089342442566467699_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=i5K-tqzTt08Q7kNvgFzUbp0&_nc_zt=23&_nc_ht=scontent.flpb3-1.fna&_nc_gid=AkobHm31AO3gXk0JIRXTnJg&oh=00_AYAIpELzjIGdIClK2mTNe7Mydx2wvPSbeS9sv6dOkxsK5w&oe=67AA7A14',
  },
  {
    id: '7',
    name: 'Mocasín Casual',
    description: 'El equilibrio perfecto entre comodidad y elegancia. Ideal para un look business casual.',
    price: 289,
    category: 'Casual',
    color: 'Azul',
    imageUrl: 'https://images.unsplash.com/photo-1595341888016-a392ef81b7de?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '8',
    name: 'Zapatilla Deportiva',
    description: 'Máximo rendimiento y estilo. Tecnología de ventilación y soporte para actividades físicas.',
    price: 379,
    category: 'Deportivo',
    color: 'Negro/Rosa',
    imageUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '9',
    name: 'Sandalia Minimalista',
    description: 'Diseño limpio y contemporáneo. Perfecta para eventos casuales y días de verano.',
    price: 259,
    category: 'Casual',
    color: 'Dorado',
    imageUrl: 'https://images.unsplash.com/photo-1621996659490-3275b4d0d951?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  }
];

const Products = () => {
  const [filter, setFilter] = useState('');
  
  const filteredProducts = products.filter(product => 
    product.name.toLowerCase().includes(filter.toLowerCase()) ||
    product.category.toLowerCase().includes(filter.toLowerCase()) ||
    product.color.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div id="products" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Nuestros Productos
          </h2>
          <p className="mt-4 text-xl text-gray-500 max-w-3xl mx-auto">
            Descubre nuestra exclusiva colección de calzado diseñado para combinar estilo, comodidad y calidad. 
            Cada par está cuidadosamente elaborado con los mejores materiales y atención al detalle.
          </p>
        </div>

        <div className="mt-8 max-w-xl mx-auto">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar por nombre, categoría o color..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-aqua focus:border-aqua"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            />
          </div>
          <div className="mt-2 text-sm text-gray-500 text-center">
            Categorías disponibles: Casual, Formal, Deportivo
          </div>
        </div>

        <div className="mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-w-4 aspect-h-3 bg-gray-200 rounded-lg overflow-hidden">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="object-cover object-center transform group-hover:scale-105 transition-transform duration-200"
                />
                {/* <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" /> */}
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>
                <p className="mt-1 text-sm text-gray-500">{product.description}</p>
                <p className="mt-2 text-lg font-medium text-aqua">Bs. {product.price}</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                    {product.category}
                  </span>
                  <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                    {product.color}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-500 max-w-2xl mx-auto">
            Todos nuestros productos cuentan con garantía de calidad y están disponibles en diferentes tallas. 
            Consulta disponibilidad en tienda o contáctanos para más información.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Products;