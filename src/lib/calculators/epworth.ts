export interface EpworthAnswers {
  responses: Record<string, number>; // q1-q8: 0-3 cada
}

export function calculateEpworthScore(answers: EpworthAnswers): {
  score: number;
  interpretation: string;
  category: 'normal' | 'leve' | 'excessiva';
} {
  const scores = Object.values(answers.responses).map(Number);
  const score = scores.reduce((a, b) => a + b, 0);

  let interpretation = '';
  let category: 'normal' | 'leve' | 'excessiva' = 'normal';

  if (score <= 9) {
    interpretation = 'Sonolência diurna normal';
    category = 'normal';
  } else if (score <= 15) {
    interpretation = 'Sonolência diurna leve';
    category = 'leve';
  } else {
    interpretation = 'Sonolência diurna excessiva';
    category = 'excessiva';
  }

  return {
    score,
    interpretation,
    category,
  };
}
