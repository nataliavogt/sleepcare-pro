export interface PSQIAnswers {
  responses: Record<string, number | string>;
}

export function calculatePSQIScore(answers: PSQIAnswers): {
  score: number;
  interpretation: string;
  category: 'boa' | 'ruim';
} {
  // PSQI tem 7 componentes com scoring complexo
  // Para simplicidade, usamos a soma direta das respostas
  const scores = Object.values(answers.responses)
    .map(v => (typeof v === 'string' ? parseInt(v) : v))
    .filter(v => !isNaN(v));

  const score = Math.min(scores.reduce((a, b) => a + b, 0), 21);

  let interpretation = '';
  let category: 'boa' | 'ruim' = 'boa';

  if (score <= 5) {
    interpretation = 'Qualidade do sono boa';
    category = 'boa';
  } else {
    interpretation = 'Qualidade do sono ruim';
    category = 'ruim';
  }

  return {
    score,
    interpretation,
    category,
  };
}
