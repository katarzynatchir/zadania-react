import { useState } from 'react';

const App = () => {
  const [names, setNames] = useState([]);
  const [name, setName] = useState('');
  const addName = e => {
    e.preventDefault();
    if (name === '') return;
    setNames([...names, name]);
    setName('');
    // Dodaj logikę dodawania imienia do listy
  };

  return (
    <div>
      <h1>Lista imion użytkowników</h1>
      <form onSubmit={addName}>
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Dodaj nowe imię"
        />
        <button type="submit">Dodaj</button>
      </form>
      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
};
export default App;
