import {useEffect} from 'react';
import Patient from "./Patient";

function PatienrsList({ patients, setPatient }) {

  useEffect(()=>{
    if(patients.length >0){
      console.log("nuevo paciente agregados");
    }
  },[setPatient]);
  
  return (
    <div className="mx-3 lg:w-3/5 md:w-1/2 h-screen overflow-y-scroll ">
      {patients && patients.length ? (
        <>
          <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>

          <p className="text-lg mt-5 text-center mb-10">
            Administra tus {""}
            <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
          </p>

          {patients.map((patient) => (
            <Patient key={patient.id} patient={patient} setPatient={setPatient}/>
          ))}
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">No hay pacientes</h2>

          <p className="text-lg mt-5 text-center mb-10">
            Comienza agregando pacientes {""}
            <span className="text-indigo-600 font-bold">y apareceran en este lugar</span>
          </p>
        </>
      )}
    </div>
  );
}

export default PatienrsList;
