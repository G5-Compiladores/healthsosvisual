import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = data => {
    console.log(data);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#4F93ED] text-white">
      <button 
            className="ml-4 bg-white text-[#4F93ED] p-2 rounded-lg flex items-center relative right-[12rem] bottom-[17rem]"
            onClick={() => navigate(-1)}
          >
            <i className="fas fa-arrow-left"></i>
      </button>
      <h2 className="text-2xl font-bold text-center">Iniciar Sesión</h2>
      <div className="w-full max-w-md p-8 space-y-6 bg-transparent rounded">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Correo electrónico</label>
            <input
              type="email"
              {...register('email', { required: 'Este campo es obligatorio' })}
              className="w-full px-3 py-2 mt-1 border bg-[#B3CDF0] rounded-[30px] shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
            {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium">Contraseña</label>
            <input
              type="password"
              {...register('password', { required: 'Este campo es obligatorio' })}
              className="w-full px-3 py-2 mt-1 border bg-[#B3CDF0] rounded-[30px] shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
            {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>}
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 font-bold text-white bg-[#5BF0AF] rounded-[30px] hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Acceder
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
