import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(req: NextRequest) {
  try {
    const { name, email } = await req.json();

    if (!name || !email) {
      return NextResponse.json({ message: 'Name and email are required.' }, { status: 400 });
    }

    const data = `Name: ${name}, Email: ${email}\n`;
    const filePath = path.join(process.cwd(), 'registrations.txt');

    fs.appendFileSync(filePath, data);

    return NextResponse.json({ message: 'Registration successful.' }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Internal server error.' }, { status: 500 });
  }
}
