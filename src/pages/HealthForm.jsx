import React from 'react';
import { useForm } from 'react-hook-form';
import { createFile } from '../services/services';

const HealthForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await createFile(data);
      console.log(response);
    } catch (e) {
      console.error("ERROR", e);
    }
  };

  return (
    <div>
        <div className="mx-auto bg-white h-2 p-8 rounded-lg shadow-lg block md:hidden flex justify-center items-center">
            <h2 className="text-2xl font-bold mb-6">Ficha de salud</h2>
        </div>
        <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md block md:hidden my-5">            
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block text-gray-700">Grupo Sanguíneo</label>
            <input 
              type="text" 
              {...register('grupo_sanguineo', { required: true })} 
              className="w-full px-3 py-2 border rounded-lg" 
            />
            {errors.grupoSanguineo && <span className="text-red-500">Este campo es obligatorio</span>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Medicamentos que toma actualmente</label>
            <input 
              type="text" 
              {...register('medicamentos_actuales', { required: true })} 
              className="w-full px-3 py-2 border rounded-lg" 
            />
            {errors.medicamentos && <span className="text-red-500">Este campo es obligatorio</span>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Alergias</label>
            <input 
              type="text" 
              {...register('alergias_medicamentos', { required: true })} 
              className="w-full px-3 py-2 border rounded-lg" 
            />
            {errors.alergias && <span className="text-red-500">Este campo es obligatorio</span>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Alergia a medicamentos</label>
            <input 
              type="text" 
              {...register('nombre', { required: true })} 
              className="w-full px-3 py-2 border rounded-lg" 
            />
            {errors.nombre && <span className="text-red-500">Este campo es obligatorio</span>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Diabetes</label>
            <input 
              type="checkbox" 
              {...register('diabetes')} 
              className="mr-2" 
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Marcapasos</label>
            <input 
              type="checkbox" 
              {...register('marcapasos')} 
              className="mr-2" 
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Epilepsia</label>
            <input 
              type="checkbox" 
              {...register('epilepsia')} 
              className="mr-2" 
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Enfermedades cardiacas</label>
            <input 
              type="checkbox" 
              {...register('enfermedades_cardiacas')} 
              className="mr-2" 
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Enfermedades respiratorias</label>
            <input 
              type="checkbox" 
              {...register('enfermedades_respiratorias')} 
              className="mr-2" 
            />
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg">Guardar</button>
        </form>
        </div>
    </div>
  );
};

export default HealthForm;
