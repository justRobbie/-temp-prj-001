import { POS } from '@/mock';
import { NextResponse } from 'next/server';

export async function GET() {
    try {
        return NextResponse.json({
            data: POS,
            success: true,
            message: "Successfully fetched all POSs",
        });
    } catch (error) {
        return NextResponse.json({
            data: undefined,
            code: 'API_GENERIC_ERROR',
            success: false,
            message: (error as Error).message
        })
    } finally {
        //clean up
    }
}