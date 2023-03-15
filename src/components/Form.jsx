import { useState, useEffect} from 'react';

function Form() {
  const [nombre, setNombre] = useState('Alexis');

  console.log(nombre);
  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Seguimiento pacientes</h2>

      <p className="text-lg mt-5 text-center mb-10">
        Añade Pacientes y {""}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>

      <form action="" className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
        <div className="mb-5">
          <label htmlFor="nombre_mascota" className="block text-gray-700 font-bold uppercase">
            Nombre Mascota
          </label>
          <input
            id="nombre_mascota"
            type="text"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Nombre de la Mascota"
          />
        </div>

        <div className="mb-5">
          <label htmlFor="nombre_propietario" className="block text-gray-700 font-bold uppercase">
            Nombre Propietario
          </label>
          <input
            id="nombre_propietario"
            type="text"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Nombre del Propietario"
          />
        </div>

        <div className="mb-5">
          <label htmlFor="email" className="block text-gray-700 font-bold uppercase">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Email de Contacto"
          />
        </div>

        <div className="mb-5">
          <label htmlFor="fecha_alta" className="block text-gray-700 font-bold uppercase">
            Alta
          </label>
          <input
            id="fecha_alta"
            type="date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          />
        </div>

        <div className="mb-5">
          <label htmlFor="sintomas" className="block text-gray-700 font-bold uppercase">
            Sintomas
          </label>
          <textarea id="sintomas" rows="5" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Describe los sintomas"></textarea>
        </div>

        <input type="submit" className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all" id="" />

      </form>
    </div>
  );
}

export default Form;
