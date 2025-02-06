import React from 'react';
import { Users, Clock, MousePointer, MessageSquare } from 'lucide-react';

const metrics = [
  {
    label: 'Visitantes Totales',
    value: '2,345',
    change: 12.5,
    icon: Users,
  },
  {
    label: 'Tiempo Promedio',
    value: '4m 32s',
    change: 8.2,
    icon: Clock,
  },
  {
    label: 'Clics en Productos',
    value: '1,234',
    change: 15.3,
    icon: MousePointer,
  },
  {
    label: 'Formularios Enviados',
    value: '89',
    change: 5.9,
    icon: MessageSquare,
  },
];

const AdminDashboard = () => {
  return (
    <div className="bg-white p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">Panel Administrativo</h2>
      
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric) => {
          const Icon = metric.icon;
          return (
            <div
              key={metric.label}
              className="relative bg-white pt-5 px-4 pb-12 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden"
            >
              <div className="absolute bg-aqua/10 rounded-full p-3 right-4">
                <Icon className="h-6 w-6 text-aqua" />
              </div>
              <dt>
                <p className="text-sm font-medium text-gray-500 truncate">{metric.label}</p>
              </dt>
              <dd className="pb-6 flex items-baseline sm:pb-7">
                <p className="text-2xl font-semibold text-gray-900">{metric.value}</p>
                <p className={`ml-2 flex items-baseline text-sm font-semibold ${metric.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {metric.change >= 0 ? '↑' : '↓'} {Math.abs(metric.change)}%
                </p>
              </dd>
            </div>
          );
        })}
      </div>

      {/* Add more dashboard components here */}
    </div>
  );
};

export default AdminDashboard;