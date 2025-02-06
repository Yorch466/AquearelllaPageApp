import React from 'react';
import { Heart, Shield, Sparkles, Award, Truck, Clock } from 'lucide-react';

const About = () => {
  const values = [
    {
      title: 'Calidad Premium',
      description: 'Utilizamos los mejores materiales importados y técnicas artesanales para garantizar durabilidad y confort excepcional en cada par.',
      icon: Shield,
    },
    {
      title: 'Diseño Innovador',
      description: 'Nuestro equipo de diseñadores crea tendencias que combinan estilo contemporáneo con funcionalidad, siguiendo las últimas tendencias globales.',
      icon: Sparkles,
    },
    {
      title: 'Compromiso',
      description: 'Nos dedicamos a la satisfacción total de nuestros clientes, ofreciendo servicio personalizado y garantía en todos nuestros productos.',
      icon: Heart,
    },
    {
      title: 'Reconocimiento',
      description: 'Más de 20 años de experiencia nos respaldan, siendo líderes en el mercado boliviano de calzado de calidad.',
      icon: Award,
    },
    {
      title: 'Envíos Seguros',
      description: 'Realizamos envíos a todo el país con packaging especial para proteger tu calzado durante el transporte.',
      icon: Truck,
    },
    {
      title: 'Atención Rápida',
      description: 'Respuesta inmediata a tus consultas y proceso de compra ágil para tu comodidad.',
      icon: Clock,
    },
  ];

  return (
    <div id="about" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Sobre Nosotros
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-500">
            AQUARELLA, una marca de Bata Bolivia, representa la fusión perfecta entre el estilo contemporáneo y la tradición en calzado. 
            Con más de dos décadas de experiencia, nos hemos convertido en sinónimo de calidad y elegancia en el mercado boliviano.
          </p>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-500">
            Nuestra misión es proporcionar calzado que no solo luzca extraordinario, sino que también ofrezca la máxima comodidad. 
            Cada par de zapatos AQUARELLA es el resultado de un cuidadoso proceso de diseño y fabricación, 
            utilizando los mejores materiales y técnicas artesanales.
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div key={value.title} className="pt-6">
                  <div className="flow-root bg-white rounded-lg px-6 pb-8 h-full">
                    <div className="-mt-6">
                      <div>
                        <span className="inline-flex items-center justify-center p-3 bg-aqua rounded-md shadow-lg">
                          <Icon className="h-6 w-6 text-white" aria-hidden="true" />
                        </span>
                      </div>
                      <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                        {value.title}
                      </h3>
                      <p className="mt-5 text-base text-gray-500">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-500 max-w-3xl mx-auto">
            En AQUARELLA, entendemos que cada paso es importante. Por eso, nos esforzamos constantemente 
            en innovar y mejorar nuestros productos, manteniendo siempre los más altos estándares de calidad 
            y servicio al cliente.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;