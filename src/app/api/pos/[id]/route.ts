import { EBrandType } from '@/app';
import { POS } from '@/mock';
import { NextRequest, NextResponse } from 'next/server';

type Params = Promise<{ id: EBrandType }>;

export async function GET(request: NextRequest, segmentData: { params: Params }) {
    const params = await segmentData.params;
    const id = params.id;

    try {
        return NextResponse.json({
            data: POS[id],
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