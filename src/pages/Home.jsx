function Home({ onStart }) {
  return (
    <main>
      <h1>Step Up – Diagnóstico de nivel</h1>
      <p>
        Esta evaluación breve estima su nivel actual (A1–B2) para recomendarle el
        siguiente paso más eficiente.
      </p>

      <button type="button" onClick={onStart}>
        Iniciar diagnóstico
      </button>
    </main>
  );
}

export default Home;
