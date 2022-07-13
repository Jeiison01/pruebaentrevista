import { useState, useEffect } from "react"


const consultarAPI =async (setdatosAPI) => {
  try {
    const response = await fetch('http://localhost:4000')
    const resultado = await response.json()
    setdatosAPI(resultado);
  } catch (error) {
    console.log(error);
  }
}

function App() {
  const [texto, setTexto] = useState()
  const [datosAPI, setdatosAPI] = useState()

  useEffect(()=> {
    consultarAPI(setdatosAPI)
  },[])

  const handleSubmitBack = async e => {
    e.preventDefault()

    try {
      const response = await fetch('http://localhost:4000/register',{
        method: 'POST',
        body: JSON.stringify({text: texto}),
        headers: {'Content-Type': 'application/json'},
      })
      const data = await response.json()
      console.log(data);
      setTexto('')
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="App">
     <form onSubmit={e => handleSubmitBack(e)}>
      <input type="text" placeholder="texto aquí" value={texto} onChange={e => setTexto(e.target.value)} />
      <button type="submit">Enviar</button>
     </form>
     {datosAPI && datosAPI.map((dato, index) =>
      <p key={index}>{dato}</p>
      )}
    </div>
  )
}

export default App
