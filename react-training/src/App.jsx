import { useState } from 'react';

const App = () => {
  const [showInfo, setShowInfo] = useState('mars');

  return (
    <>
      <h1>Wspaniałe fakty o planetach</h1>
      <button onClick={() => setShowInfo('mars')}>Mars</button>
      <button onClick={() => setShowInfo('jowisz')}>Jowisz</button>
      <button onClick={() => setShowInfo('saturn')}>Saturn</button>

      {showInfo === 'mars' && (
        <section>
          <h2>Mars</h2>
          <p>Mars jest znaną jako Czerwona Planeta.</p>
        </section>
      )}
      {showInfo === 'jowisz' && (
        <section>
          <h2>Jowisz</h2>
          <p>Jowisz jest największą planetą w naszym układzie słonecznym.</p>
        </section>
      )}
      {showInfo === 'saturn' && (
        <section>
          <h2>Saturn</h2>
          <p>Saturn słynie z pięknych pierścieni.</p>
        </section>
      )}
    </>
  );
};

export default App;
