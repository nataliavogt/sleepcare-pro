'use client';

import { useState } from 'react';
import { QuestionnaireDefinition } from '@/lib/types';

interface GenericQuestionnaireFormProps {
  definition: QuestionnaireDefinition;
  onSubmit: (responses: Record<string, any>, score: number, interpretation: string) => Promise<void>;
}

export default function GenericQuestionnaireForm({
  definition,
  onSubmit,
}: GenericQuestionnaireFormProps) {
  const [responses, setResponses] = useState<Record<string, any>>({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (questionId: string, value: any) => {
    setResponses(prev => ({
      ...prev,
      [questionId]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Validar que todas as perguntas foram respondidas
    const allAnswered = definition.questions.every(q =>
      q.required ? responses[q.id] !== undefined && responses[q.id] !== '' : true
    );

    if (!allAnswered) {
      setError('Por favor, responda todas as perguntas obrigatórias');
      return;
    }

    setLoading(true);

    try {
      // Calcular score (soma simples)
      const scores = Object.values(responses)
        .map(v => (typeof v === 'string' ? parseInt(v) : v))
        .filter(v => !isNaN(v));

      const score = Math.min(scores.reduce((a, b) => a + b, 0), definition.maxScore);

      // Encontrar interpretação
      const interp = definition.interpretations.find(
        i => score >= i.min && score <= i.max
      );
      const interpretation = interp?.meaning || 'Sem interpretação';

      await onSubmit(responses, score, interpretation);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro ao processar questionário');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {definition.questions.map((q, idx) => (
        <div key={q.id} className="card">
          <label className="block mb-4">
            <p className="font-semibold text-[#62210F] mb-2">
              {idx + 1}. {q.text} {q.required ? '*' : ''}
            </p>
            {q.help && (
              <p className="text-xs text-[#8B7355] mb-3">{q.help}</p>
            )}

            {q.type === 'numeric' && (
              <input
                type="number"
                value={responses[q.id] || ''}
                onChange={(e) => handleChange(q.id, e.target.value)}
                className="input-field"
                step="0.1"
                required={q.required}
              />
            )}

            {q.type === 'text' && (
              <input
                type="text"
                value={responses[q.id] || ''}
                onChange={(e) => handleChange(q.id, e.target.value)}
                className="input-field"
                required={q.required}
              />
            )}

            {q.type === 'likert' && q.options && (
              <div className="space-y-2">
                {q.options.map((opt) => (
                  <label key={opt.value} className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name={q.id}
                      value={opt.value}
                      checked={responses[q.id] == opt.value}
                      onChange={() => handleChange(q.id, opt.value)}
                      className="w-4 h-4 cursor-pointer"
                      required={q.required}
                    />
                    <span className="text-sm text-[#62210F]">{opt.label}</span>
                  </label>
                ))}
              </div>
            )}

            {q.type === 'binary' && (
              <div className="space-y-2">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name={q.id}
                    value="sim"
                    checked={responses[q.id] === 'sim'}
                    onChange={() => handleChange(q.id, 'sim')}
                    className="w-4 h-4 cursor-pointer"
                    required={q.required}
                  />
                  <span className="text-sm text-[#62210F]">Sim</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name={q.id}
                    value="nao"
                    checked={responses[q.id] === 'nao'}
                    onChange={() => handleChange(q.id, 'nao')}
                    className="w-4 h-4 cursor-pointer"
                    required={q.required}
                  />
                  <span className="text-sm text-[#62210F]">Não</span>
                </label>
              </div>
            )}
          </label>
        </div>
      ))}

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
