import { NextRequest, NextResponse } from 'next/server';

//-----------------------------


export async function POST(request: NextRequest) {
    try {
        const { email, password } = await request.json() as { email: string, password: string };

        switch (true) {
            case !email:
                throw new Error("O campo email é obrigatório.");

            case !password:
                throw new Error("O campo password é obrigatório.");

            case email !== process.env.DEFAULT_EMAIL:
            case password !== process.env.DEFAULT_PASSWORD:
                throw new Error("Credenciais inválidas");
        
            default: 
            
            return NextResponse.json({
                success: true,
                message: "Bem vindo/a"
            }, {
                status: 200,
                headers: {
                    "Set-Cookie": `auth=${JSON.stringify({ email })}; Path=/; HttpOnly; SameSite=Strict; Secure; Max-Age=18000000`
                }
            });
        }
    } catch (error) {
        return NextResponse.json({
            success: false,
            message: (error as Error).message
        }, {
            status: 500
        });
    };
};