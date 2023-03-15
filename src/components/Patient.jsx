function Patient({patient}) {
    const {nombreMascota, nombreProp, email, fecha, sintomas} = patient;
  return (
    <div>
        <div className="m-3 bg-white shadow-md px-5 py-10 rounded-md">
        <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {''}
        <span className="font-normal normal-case">{nombreMascota}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {''}
        <span className="font-normal normal-case">{nombreProp}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">Email: {''}
        <span className="font-normal normal-case">{email}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">Fecha: {''}
        <span className="font-normal normal-case">{fecha}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">Sintoma s: {''}
        <span className="font-normal normal-case">{sintomas}</span>
        </p>
        
      </div>      
    </div>
  )
}

export default Patient;
