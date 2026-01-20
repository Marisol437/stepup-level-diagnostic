import questions from "../data/questionBank.es.json";

function Test({ onFinish }) {
  const currentIndex = 0;
  const q = questions[currentIndex];

  return (
    <main>
      <h1>Diagnóstico de nivel</h1>
      <p>Pregunta {currentIndex + 1} de {questions.length}</p>

      <div>
        <p><strong>{q.prompt}</strong></p>

        <ul>
          {q.options.map((opt, idx) => (
            <li key={idx}>{opt}</li>
          ))}
        </ul>
      </div>

      <button type="button" onClick={onFinish}>
        Finalizar (demo)
      </button>
    </main>
  );
}

export default Test;
