import { NextRequest, NextResponse } from 'next/server';
import { saveRegistration } from '@/app/services/save-registration';

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json({ message: 'Email is required.' }, { status: 400 });
    }

    await saveRegistration(email);

    return NextResponse.json({ message: 'Registration successful.' }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Internal server error.' }, { status: 500 });
  }
}
