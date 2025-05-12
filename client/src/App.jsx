import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);

  const handleValidate = async () => {
    try {
      const res = await fetch(`http://localhost:3000/validate/${name}`);
      const data = await res.json();

      if (data.validate) {
        setError(false);
        const greetRes = await fetch(`http://localhost:3000/greet/${name}`);
        const greetData = await greetRes.json();
        setMessage(greetData.message);
      } else {
        setError(true);
        setMessage(data.message);
      }
    } catch (err) {
      setError(true);
      setMessage("Error al conectar con el servidor");
    }
  };

  return (
    <div className="container">
      <h1>Validador de Usuario</h1>
      <input
        className="input"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Ingresá tu nombre"
      />
      <button onClick={handleValidate}>Validar</button>
      <p style={{ color: error ? "red" : "green" }}>{message}</p>
    </div>
  );
}

export default App;
