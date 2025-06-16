import { POS } from '@/constants';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
    const { id } = params;

    try {
        return NextResponse.json({
            data: POS.find(({ id:pId }) => parseInt(id) === pId),
            success: true,
            message: "Successfully fetched POS",
        })
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