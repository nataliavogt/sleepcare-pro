'use client';

import { useState } from 'react';
import { calculateIMC, getIMCCategory } from '@/lib/calculators/imc-calculator';
import {
  calculateStopBangScore,
  StopBangAnswers,
} from '@/lib/calculators/stop-bang';

interface StopBangFormProps {
  onSubmit: (data: StopBangAnswers, score: number, interpretation: string) => Promise<void>;
}

export default function StopBangForm({ onSubmit }: StopBangFormProps) {
  const [formData, setFormData] = useState<StopBangAnswers>({
    snoring: false,
    tiredness: false,
    observedApnea: false,
    bloodPressure: false,
    bmi: 25,
    age: 'under50',
    neckCircumference: 'no',
    gender: 'male',
  });

  const [weight, setWeight] = useState('75');
  const [height, setHeight] = useState('175');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const imc = calculateIMC(parseFloat(weight), parseFloat(height));
  const imcCategory = getIMCCategory(imc);

  const handleBinaryChange = (field: keyof Omit<StopBangAnswers, 'bmi' | 'age' | 'neckCircumference' | 'gender'>) => {
    setFormData(prev => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  const handleSelectChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const dataToSubmit = {
        ...formData,
        bmi: imc,
      };

      const result = calculateStopBangScore(dataToSubmit);
      await onSubmit(dataToSubmit, result.score, result.interpretation);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro ao processar questionário');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Seção 1: Perguntas S-T-O-P */}
      <div className="space-y-6">
        <h3 className="heading-3">Perguntas Gerais</h3>

        {/* Snoring */}
        <div className="card">
          <label className="flex items-start gap-4">
            <input
              type="checkbox"
              checked={formData.snoring}
              onChange={() => handleBinaryChange('snoring')}
              className="mt-2 w-6 h-6 rounded border-[#D4C4C0] text-[#C76134] cursor-pointer"
            />
            <div>
              <p className="font-semibold text-[#62210F]">
                Você ronca alto?
              </p>
              <p className="text-sm text-[#8B7355] mt-1">
                Rouquenho o suficiente para incomodar outras pessoas
              </p>
            </div>
          </label>
        </div>

        {/* Tiredness */}
        <div className="card">
          <label className="flex items-start gap-4">
            <input
              type="checkbox"
              checked={formData.tiredness}
              onChange={() => handleBinaryChange('tiredness')}
              className="mt-2 w-6 h-6 rounded border-[#D4C4C0] text-[#C76134] cursor-pointer"
            />
            <div>
              <p className="font-semibold text-[#62210F]">
                Você sente cansaço ou fadiga durante o dia?
              </p>
              <p className="text-sm text-[#8B7355] mt-1">
                Sonolência que afeta suas atividades diárias
              </p>
            </div>
          </label>
        </div>

        {/* Observed Apnea */}
        <div className="card">
          <label className="flex items-start gap-4">
            <input
              type="checkbox"
              checked={formData.observedApnea}
              onChange={() => handleBinaryChange('observedApnea')}
              className="mt-2 w-6 h-6 rounded border-[#D4C4C0] text-[#C76134] cursor-pointer"
            />
            <div>
              <p className="font-semibold text-[#62210F]">
                Alguém observou que você para de respirar durante o sono?
              </p>
              <p className="text-sm text-[#8B7355] mt-1">
                Pausa na respiração durante o sono
              </p>
            </div>
          </label>
        </div>

        {/* Blood Pressure */}
        <div className="card">
          <label className="flex items-start gap-4">
            <input
              type="checkbox"
              checked={formData.bloodPressure}
              onChange={() => handleBinaryChange('bloodPressure')}
              className="mt-2 w-6 h-6 rounded border-[#D4C4C0] text-[#C76134] cursor-pointer"
            />
            <div>
              <p className="font-semibold text-[#62210F]">
                Você tem pressão alta?
              </p>
              <p className="text-sm text-[#8B7355] mt-1">
                Hipertensão diagnosticada ou em tratamento
              </p>
            </div>
          </label>
        </div>
      </div>

      {/* Seção 2: IMC */}
      <div className="space-y-6">
        <h3 className="heading-3">Cálculo de IMC</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-[#62210F] mb-2">
              Peso (kg) *
            </label>
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="input-field"
              step="0.1"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-[#62210F] mb-2">
              Altura (cm) *
            </label>
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="input-field"
              step="0.1"
              required
            />
          </div>
        </div>

        <div className="card" style={{ borderColor: imcCategory.color }}>
          <p className="text-sm text-[#8B7355] mb-2">Seu IMC:</p>
          <p className="text-3xl font-bold mb-1" style={{ color: imcCategory.color }}>
            {imc.toFixed(1)}
          </p>
          <p className="text-sm font-semibold" style={{ color: imcCategory.color }}>
            {imcCategory.category}
          </p>
          {imc > 35 && (
            <p className="text-xs text-[#62210F] mt-3 font-semibold">
              ⚠️ IMC &gt; 35 aumenta o risco de apneia
            </p>
          )}
        </div>
      </div>

      {/* Seção 3: Características */}
      <div className="space-y-6">
        <h3 className="heading-3">Características Pessoais</h3>

        <div className="card">
          <label className="block text-sm font-semibold text-[#62210F] mb-3">
            Faixa de Idade *
          </label>
          <div className="space-y-3">
            <label className="flex items-center gap-3">
              <input
                type="radio"
                name="age"
                value="under50"
                checked={formData.age === 'under50'}
                onChange={() => handleSelectChange('age', 'under50')}
                className="w-4 h-4 cursor-pointer"
              />
              <span className="text-sm text-[#62210F]">Menos de 50 anos</span>
            </label>
            <label className="flex items-center gap-3">
              <input
                type="radio"
                name="age"
                value="50-60"
                checked={formData.age === '50-60'}
                onChange={() => handleSelectChange('age', '50-60')}
                className="w-4 h-4 cursor-pointer"
              />
              <span className="text-sm text-[#62210F]">50-60 anos</span>
            </label>
            <label className="flex items-center gap-3">
              <input
                type="radio"
                name="age"
                value="over60"
                checked={formData.age === 'over60'}
                onChange={() => handleSelectChange('age', 'over60')}
                className="w-4 h-4 cursor-pointer"
              />
              <span className="text-sm text-[#62210F]">Mais de 60 anos</span>
            </label>
          </div>
        </div>

        <div className="card">
          <label className="block text-sm font-semibold text-[#62210F] mb-3">
            Gênero *
          </label>
          <div className="space-y-3">
            <label className="flex items-center gap-3">
              <input
                type="radio"
                name="gender"
                value="male"
                checked={formData.gender === 'male'}
                onChange={() => handleSelectChange('gender', 'male')}
                className="w-4 h-4 cursor-pointer"
              />
              <span className="text-sm text-[#62210F]">Masculino</span>
            </label>
            <label className="flex items-center gap-3">
              <input
                type="radio"
                name="gender"
                value="female"
                checked={formData.gender === 'female'}
                onChange={() => handleSelectChange('gender', 'female')}
                className="w-4 h-4 cursor-pointer"
              />
              <span className="text-sm text-[#62210F]">Feminino</span>
            </label>
          </div>
        </div>

        <div className="card">
          <label className="block text-sm font-semibold text-[#62210F] mb-3">
            Perímetro do Pescoço *
          </label>
          <div className="space-y-3">
            <label className="flex items-center gap-3">
              <input
                type="radio"
                name="neckCircumference"
                value="no"
                checked={formData.neckCircumference === 'no'}
                onChange={() => handleSelectChange('neckCircumference', 'no')}
                className="w-4 h-4 cursor-pointer"
              />
              <span className="text-sm text-[#62210F]">
                Mulher ≤41cm ou Homem ≤43cm
              </span>
            </label>
            <label className="flex items-center gap-3">
              <input
                type="radio"
                name="neckCircumference"
                value="yes"
                checked={formData.neckCircumference === 'yes'}
                onChange={() => handleSelectChange('neckCircumference', 'yes')}
                className="w-4 h-4 cursor-pointer"
              />
              <span className="text-sm text-[#62210F]">
                Mulher &gt;41cm ou Homem &gt;43cm
              </span>
            </label>
          </div>
        </div>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="btn-primary w-full"
      >
        {loading ? 'Processando...' : 'Enviar Respostas'}
      </button>
    </form>
  );
}
