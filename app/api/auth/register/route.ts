import { NextRequest, NextResponse } from 'next/server';
import { registerUser } from '@/lib/firebase/auth';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, cpf, name, lgpdAccepted, tcleAccepted } = body;

    // Validações básicas
    if (!email || !cpf || !name) {
      return NextResponse.json(
        { error: 'Email, CPF e nome são obrigatórios' },
        { status: 400 }
      );
    }

    if (!lgpdAccepted || !tcleAccepted) {
      return NextResponse.json(
        { error: 'Aceitação de LGPD e TCLE são obrigatórios' },
        { status: 400 }
      );
    }

    // Gera um ID de sessão temporário
    const sessionId = 'session-' + Math.random().toString(36).slice(2, 12);

    // Registra o usuário
    const user = await registerUser(email, cpf, name);

    return NextResponse.json(
      {
        success: true,
        uid: user.uid,
        email: user.email,
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('Registration error:', error);

    let message = 'Erro ao fazer registro';

    if (error.code === 'auth/email-already-in-use') {
      message = 'Este email já está registrado';
    } else if (error.code === 'auth/invalid-email') {
      message = 'Email inválido';
    } else if (error.code === 'auth/weak-password') {
      message = 'Senha muito fraca';
    }

    return NextResponse.json(
      { error: message },
      { status: 400 }
    );
  }
}
