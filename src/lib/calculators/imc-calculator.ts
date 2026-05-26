export function calculateIMC(weightKg: number, heightCm: number): number {
  const heightM = heightCm / 100;
  return weightKg / (heightM * heightM);
}

export function getIMCCategory(imc: number): {
  category: string;
  color: string;
} {
  if (imc < 18.5) {
    return { category: 'Abaixo do peso', color: '#99A8AD' };
  } else if (imc < 25) {
    return { category: 'Peso normal', color: '#49401F' };
  } else if (imc < 30) {
    return { category: 'Sobrepeso', color: '#C76134' };
  } else {
    return { category: 'Obesidade', color: '#62210F' };
  }
}
