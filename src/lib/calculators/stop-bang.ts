export interface StopBangAnswers {
  snoring: boolean;
  tiredness: boolean;
  observedApnea: boolean;
  bloodPressure: boolean;
  bmi: number;
  age: string; // 'under50' | '50-60' | 'over60'
  neckCircumference: string; // 'maleOver43' | 'femaleOver41' | 'no'
  gender: string; // 'male' | 'female'
}

export function calculateStopBangScore(answers: StopBangAnswers): {
  score: number;
  interpretation: string;
  risk: 'low' | 'medium' | 'high';
} {
  let score = 0;

  // S - Snoring
  if (answers.snoring) score++;

  // T - Tiredness
  if (answers.tiredness) score++;

  // O - Observed apnea
  if (answers.observedApnea) score++;

  // P - Blood Pressure
  if (answers.bloodPressure) score++;

  // B - BMI > 35
  if (answers.bmi > 35) score++;

  // A - Age > 50
  if (answers.age !== 'under50') score++;

  // N - Neck circumference
  if (answers.neckCircumference !== 'no') score++;

  // G - Gender (male)
  if (answers.gender === 'male') score++;

  // Interpretação
  let interpretation = '';
  let risk: 'low' | 'medium' | 'high' = 'low';

  if (score < 3) {
    interpretation = 'Baixo risco de apneia obstrutiva do sono';
    risk = 'low';
  } else if (score < 5) {
    interpretation = 'Risco intermediário de apneia obstrutiva do sono';
    risk = 'medium';
  } else {
    interpretation = 'Alto risco de apneia obstrutiva do sono';
    risk = 'high';
  }

  return {
    score,
    interpretation,
    risk,
  };
}
