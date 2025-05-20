import { NextRequest, NextResponse } from 'next/server';

//-----------------------------


export async function POST(request: NextRequest) {
    try {
        const { email } = JSON.parse(request.cookies.get('auth')?.value as string) as { email: string };

        switch (true) {
            case !email: throw new Error("O campo email é obrigatório.");

            default:
                console.log("Cleaning session for user: ", { email });

                return NextResponse.json({
                    success: true,
                    message: "Até breve"
                }, {
                    status: 200,
                    headers: {
                        "Set-Cookie": `auth=0; Path=/; HttpOnly; SameSite=Strict; Secure; Max-Age=1`
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