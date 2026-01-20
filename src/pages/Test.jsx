function Test({ onFinish }) {
  return (
    <main>
      <h1>Diagnóstico de nivel</h1>
      <p>Pregunta 1 de 20</p>

      <div>
        <p><strong>Aquí irá la pregunta.</strong></p>

        <ul>
          <li>Opción A</li>
          <li>Opción B</li>
          <li>Opción C</li>
          <li>Opción D</li>
        </ul>
      </div>

      <button type="button" onClick={onFinish}>
        Finalizar (demo)
      </button>
    </main>
  );
}

export default Test;
