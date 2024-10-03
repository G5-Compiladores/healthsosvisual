import React from 'react';

const Dashboard = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white relative">
            <img 
        src="/src/assets/logohealthSOS.png" 
        alt="HealthSOS Logo" 
        className="w-40 h-auto mb-6"
      />
      <div className="grid grid-cols-2 gap-4">
        <img 
          src="/src/assets/button-eye.png" 
          alt="Ver mi ficha" 
          className="w-40 h-auto"
        />
        <img 
          src="/src/assets/button-edit.png" 
          alt="Editar" 
          className="w-40 h-auto"
        />
        <img 
          src="/src/assets/button-qr.png" 
          alt="Mi QR" 
          className="w-40 h-auto"
        />
        <img 
          src="/src/assets/button-settings.png" 
          alt="Configuración" 
          className="w-40 h-auto"
        />
      </div>
      <img 
        src="/src/assets/button-help.png" 
        alt="Ayuda" 
        className="w-30 h-auto absolute bottom-4 right-4"
      />
    </div>
  );
}
export default Dashboard;