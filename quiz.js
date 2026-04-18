const form = document.getElementById("quizForm");
const result = document.getElementById("result");

const RESULT_CONTENT = {
  cuddly: {
    title: "Tipo recomendado: Cuddly Comfy",
    description:
      "Tu vibra apunta a una experiencia súper acogedora, con prioridad en suavidad, calma y sensación de abrazo tierno.",
  },
  playful: {
    title: "Tipo recomendado: Playful Move",
    description:
      "Te encaja algo ligero y dinámico para moverte con libertad, manteniendo una energía cute y juguetona durante el día.",
  },
  night: {
    title: "Tipo recomendado: Night Cozy",
    description:
      "Tu perfil se orienta a rutinas largas y de descanso, con enfoque en duración y seguridad para sentirte tranquilo/a toda la noche.",
  },
  discreet: {
    title: "Tipo recomendado: Discreet Daily",
    description:
      "Prefieres un estilo discreto y práctico para el día a día, buscando comodidad sin llamar demasiado la atención.",
  },
};

function recommendedCategory(scores) {
  const sortedEntries = Object.entries(scores).sort((a, b) => b[1] - a[1]);
  return sortedEntries[0][0];
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const scores = {
    cuddly: 0,
    playful: 0,
    night: 0,
    discreet: 0,
  };

  const answers = new FormData(form);

  for (const [, value] of answers.entries()) {
    if (scores[value] !== undefined) {
      scores[value] += 1;
    }
  }

  const category = recommendedCategory(scores);
  const recommended = RESULT_CONTENT[category];

  result.classList.remove("hidden");
  result.innerHTML = `
    <h2>${recommended.title}</h2>
    <p>${recommended.description}</p>
    <p><strong>Nota:</strong> esto es orientativo y siempre depende de tu comodidad personal.</p>
  `;
});
