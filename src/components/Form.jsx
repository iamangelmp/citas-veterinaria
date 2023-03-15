import Error from './Error';
import { useState, useEffect} from 'react';

function Form({patients, setPatients}) {
  const [nombreMascota, setNombreMascota] = useState('');
  const [nombreProp, setNombreProp] = useState('');
  const [email, setEmail] = useState('');
  const [fecha, setFecha] = useState('');
  const [sintomas, setSintomas] = useState('');
  const [error, setErrores] = useState(false);

  function generateId(){
    const random = Math.random().toString(36).substr(2);
    const fecha = Date.now().toString(36);

    return random + fecha;
  }

  function handleSubmit(e){
    e.preventDefault();
    if([nombreMascota,nombreProp,email,fecha,sintomas].includes('')){
      console.log('revisa que el formulario este completo');
      return setErrores(true);
    }

    const dataObj ={
      id: generateId(),
      nombreMascota,
      nombreProp,
      email,
      fecha,
      sintomas
    }

    setErrores(false);
    setPatients([...patients, dataObj]);

  }

  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Seguimiento pacientes</h2>

      <p className="text-lg mt-5 text-center mb-10">
        Añade Pacientes y {""}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>

      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg py-10 px-5 mb-10 mx-5">
        {error && <Error msj='Todos los campos son obligatorios'/>}

        <div className="mb-5">
          <label htmlFor="nombre_mascota" className="block text-gray-700 font-bold uppercase">
            Nombre Mascota
          </label>
          <input
            id="nombre_mascota"
            type="text"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Nombre de la Mascota"
            value={nombreMascota}
            onChange={(e)=>{setNombreMascota(e.target.value)}}
            
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
            value={nombreProp}
            onChange={(e)=>{setNombreProp(e.target.value)}}
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
            value={email}
            onChange={(e)=>{setEmail(e.target.value)}}
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
            value={fecha}
            onChange={(e)=>{setFecha(e.target.value)}}
          />
        </div>

        <div className="mb-5">
          <label htmlFor="sintomas" className="block text-gray-700 font-bold uppercase">
            Sintomas
          </label>
          <textarea id="sintomas" rows="5" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Describe los sintomas"
            value={sintomas}
            onChange={(e=>{setSintomas(e.target.value)})}
          />
        </div>

        <input type="submit" className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all" id="" />

      </form>
    </div>
  );
}

export default Form;
