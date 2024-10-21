import { useState } from 'react'
import './App.css'
//importar la biblioteca
import * as XLSX from 'xlsx';

const InitalForm={
  nombre: '',
  numero:'',
  cargo: '',
  dependencia: '',
  telefono: '',
  correo:''
}

function App() {
  const [form, setForm]=useState(InitalForm);


  const handleChange=(e)=>{
    const {name, value}=e.target;
    
    setForm({...form, [name]:value});
  }

  const handleSubmit=(e)=>{
    e.preventDefault();

    const datos=[{
      ...form
    }]

    // Crear un nuevo libro de Excel
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.json_to_sheet(datos);

    // Agregar hoja al libro
    XLSX.utils.book_append_sheet(wb, ws, "Datos");

    // Generar archivo Excel
    XLSX.writeFile(wb, "datos_formulario.xlsx");
  }

  const handleResaet=()=>{
    setForm(InitalForm);
  }



  return (
    <>
    <section className='flex flex-col gap-4 justify-center h-screen w-screen items-center '><div>
      <h1 className='text-3xl font-bold'>FORMULARIO</h1>
    </div>
    <form action="" className='flex flex-col w-[500px] gap-4 [&>input]:p-2' onSubmit={handleSubmit}>
      <input type="text" placeholder='Nombre Completo' name='nombre' value={form.nombre} onChange={handleChange}/>
      <input type="text" placeholder='DNI' name='numero' value={form.numero} onChange={handleChange}/>
      <input type="text" placeholder='Cargo'name='cargo' value={form.cargo} onChange={handleChange}/>
      <input type="text" placeholder='Dependenaica' name='dependencia' value={form.dependencia} onChange={handleChange}/>
      <input type="text" placeholder='telefono' name='telefono' value={form.telefono} onChange={handleChange}/>
      <input type="text" placeholder='Correo' name='correo' value={form.correo} onChange={handleChange}/>
      <input type="submit" value="Enviar"  className='bg-green-700 hover:bg-green-950'/>
      <input type="reset" value="Limpiar" className='bg-red-700 hover:bg-red-950' onClick={handleResaet}/>
    </form></section>
    
    </>
  )
}

export default App
