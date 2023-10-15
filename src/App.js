import './App.css';

function App() {
  return (
    <div>
      <h1>Formulário Simples</h1>
      <form>
        <div>
          <label htmlFor="nome">Nome:</label>
          <input
            type="text"
            id="nome"
            placeholder="Nome"
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            placeholder="Email"
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default App;
