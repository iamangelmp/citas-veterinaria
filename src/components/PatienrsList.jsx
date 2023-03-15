import Patient from "./Patient";

function PatienrsList({patients}) {
  return (
    <div className="mx-3 lg:w-3/5 md:w-1/2 h-screen overflow-y-scroll ">
        <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
        
        <p className="text-lg mt-5 text-center mb-10">
        Administra tus {""}
        <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
      </p>

      {patients.map((patient)=>
        <Patient
        key={patient.id}
        patient={patient}
        />
      )}
      

    </div>
  )
}

export default PatienrsList

