function Patient({ patient, setPatient }) {

  const { nombreMascota, nombreProp, email, fecha, sintomas } = patient;
  return (
    <div>
      <div className="m-3 bg-white shadow-md px-5 py-10 rounded-md">
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Nombre: {""}
          <span className="font-normal normal-case">{nombreMascota}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">
          Propietario: {""}
          <span className="font-normal normal-case">{nombreProp}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">
          Email: {""}
          <span className="font-normal normal-case">{email}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">
          Fecha: {""}
          <span className="font-normal normal-case">{fecha}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">
          Sintoma s: {""}
          <span className="font-normal normal-case">{sintomas}</span>
        </p>

        <div className="flex justify-between mt-10">
          <button
            className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-md"
            type="button"
            onClick={()=>setPatient(patient)}
          >
            Editar
          </button>

          <button 
          className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-md"
          type="button">Eliminar</button>
        </div>
      </div>
    </div>
  );
}

export default Patient;
