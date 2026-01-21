function Home({ onStart }) {
  return (
    <div className="shell">
      <section className="card">
        <h1 className="h1">Diagnóstico de nivel</h1>

        <p className="p">
          Esta evaluación breve estima su nivel actual (A1–B2) para recomendarle
          el siguiente paso más eficiente.
        </p>

        <div className="row">
          <span className="pill">Duración: 3–5 minutos</span>
          <span className="pill">Sin registro</span>
        </div>

        <div className="grid" style={{ marginTop: 16 }}>
          <button className="btn" type="button" onClick={onStart}>
            Iniciar diagnóstico
          </button>
        </div>
      </section>
    </div>
  );
}

export default Home;
