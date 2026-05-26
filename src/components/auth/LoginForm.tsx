'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface LoginFormProps {
  onSubmit?: (data: LoginData) => Promise<void>;
}

export interface LoginData {
  email: string;
  cpf: string;
  name: string;
  lgpdAccepted: boolean;
  tcleAccepted: boolean;
}

export default function LoginForm({ onSubmit }: LoginFormProps) {
  const router = useRouter();
  const [formData, setFormData] = useState<LoginData>({
    email: '',
    cpf: '',
    name: '',
    lgpdAccepted: false,
    tcleAccepted: false,
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showTcle, setShowTcle] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, type } = e.target;
    const value = type === 'checkbox' ? (e.target as HTMLInputElement).checked : e.target.value;

    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Validações
    if (!formData.email || !formData.cpf || !formData.name) {
      setError('Preencha todos os campos obrigatórios');
      return;
    }

    if (!formData.lgpdAccepted) {
      setError('Aceite a política de privacidade (LGPD)');
      return;
    }

    if (!formData.tcleAccepted) {
      setError('Aceite o Termo de Consentimento para Pesquisa (TCLE)');
      return;
    }

    setLoading(true);

    try {
      if (onSubmit) {
        await onSubmit(formData);
      } else {
        // Call API
        const response = await fetch('/api/auth/register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });

        if (!response.ok) {
          const data = await response.json();
          throw new Error(data.error || 'Erro ao fazer login');
        }

        router.push('/dashboard');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro desconhecido');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Email */}
      <div>
        <label className="block text-sm font-semibold text-[#62210F] mb-2">
          Email *
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="input-field"
          placeholder="seu@email.com"
          required
        />
      </div>

      {/* CPF */}
      <div>
        <label className="block text-sm font-semibold text-[#62210F] mb-2">
          CPF *
        </label>
        <input
          type="text"
          name="cpf"
          value={formData.cpf}
          onChange={handleChange}
          className="input-field"
          placeholder="123.456.789-00"
          required
        />
        <p className="text-xs text-[#99A8AD] mt-1">
          Será usado apenas para identificação
        </p>
      </div>

      {/* Nome Completo */}
      <div>
        <label className="block text-sm font-semibold text-[#62210F] mb-2">
          Nome Completo *
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="input-field"
          placeholder="Seu nome completo"
          required
        />
      </div>

      {/* LGPD */}
      <div className="bg-[#F5F0EB] border border-[#D4C4C0] rounded-lg p-4 space-y-3">
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            name="lgpdAccepted"
            checked={formData.lgpdAccepted}
            onChange={handleChange}
            className="mt-1 w-5 h-5 rounded border-[#D4C4C0] text-[#C76134] cursor-pointer"
            required
          />
          <div className="text-sm">
            <p className="font-semibold text-[#62210F]">
              Aceitação de Política de Privacidade (LGPD) *
            </p>
            <p className="text-xs text-[#8B7355] mt-1">
              Seus dados serão armazenados com segurança e serão lidos apenas por Dra. Natália Vogt.
              Utilizamos cookies para melhorar sua experiência.
            </p>
          </div>
        </label>
      </div>

      {/* TCLE */}
      <div className="bg-[#F5F0EB] border border-[#D4C4C0] rounded-lg p-4 space-y-3">
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            name="tcleAccepted"
            checked={formData.tcleAccepted}
            onChange={handleChange}
            className="mt-1 w-5 h-5 rounded border-[#D4C4C0] text-[#C76134] cursor-pointer"
            required
          />
          <div className="text-sm">
            <p className="font-semibold text-[#62210F]">
              Termo de Consentimento Livre e Esclarecido (TCLE) *
            </p>
            <p className="text-xs text-[#8B7355] mt-1">
              Autorizo a coleta e utilização dos meus dados de sono para fins de pesquisa científica e
              aprimoramento do atendimento clínico.
            </p>
            <button
              type="button"
              onClick={() => setShowTcle(!showTcle)}
              className="text-xs text-[#C76134] font-semibold mt-2 hover:underline"
            >
              {showTcle ? 'Ocultar' : 'Ver'} TCLE completo
            </button>

            {showTcle && (
              <div className="mt-3 p-3 bg-white rounded border border-[#D4C4C0] text-xs text-[#8B7355] max-h-40 overflow-y-auto">
                <p className="font-semibold text-[#62210F] mb-2">TERMO DE CONSENTIMENTO LIVRE E ESCLARECIDO</p>
                <p className="mb-2">
                  O presente projeto de pesquisa tem como objetivo melhorar o atendimento e a compreensão
                  de transtornos do sono através da análise de dados coletados pela plataforma SleepCare Pro.
                </p>
                <p className="mb-2">
                  <strong>Confidencialidade:</strong> Todos os dados serão mantidos confidenciais e utilizados
                  apenas para fins científicos e clínicos.
                </p>
                <p className="mb-2">
                  <strong>Direitos:</strong> Você pode retirar seu consentimento a qualquer momento,
                  entrando em contato com Dra. Natália Vogt.
                </p>
                <p>
                  Ao aceitar este termo, você concorda que seus dados de sono podem ser utilizados em
                  pesquisas futuras para benefício científico.
                </p>
              </div>
            )}
          </div>
        </label>
      </div>

      {/* Error */}
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
          {error}
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading}
        className="btn-primary w-full"
      >
        {loading ? 'Entrando...' : 'Entrar'}
      </button>

      {/* Footer */}
      <p className="text-xs text-[#99A8AD] text-center">
        Questionários validados em medicina do sono
      </p>
    </form>
  );
}
