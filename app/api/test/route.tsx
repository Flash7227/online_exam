export const revalidate = 0
import { type NextRequest } from 'next/server'
import prisma from '@/db'; 

export async function GET(request: NextRequest) {
    const user = await prisma.user.findMany();
    return Response.json(user);
}