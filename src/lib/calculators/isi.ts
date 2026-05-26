export interface ISIAnswers {
  responses: Record<string, number>;
}

export function calculateISIScore(answers: ISIAnswers): {
  score: number;
  interpretation: string;
  category: 'ausencia' | 'subclinica' | 'moderada' | 'severa';
} {
  const scores = Object.values(answers.responses).map(Number);
  const score = scores.reduce((a, b) => a + b, 0);

  let interpretation = '';
  let category: 'ausencia' | 'subclinica' | 'moderada' | 'severa' = 'ausencia';

  if (score <= 7) {
    interpretation = 'Ausência de insônia clinicamente significativa';
    category = 'ausencia';
  } else if (score <= 14) {
    interpretation = 'Insônia subclínica';
    category = 'subclinica';
  } else if (score <= 21) {
    interpretation = 'Insônia clínica moderada';
    category = 'moderada';
  } else {
    interpretation = 'Insônia clínica severa';
    category = 'severa';
  }

  return {
    score,
    interpretation,
    category,
  };
}
