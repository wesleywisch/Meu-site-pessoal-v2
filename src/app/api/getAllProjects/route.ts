import { NextResponse } from 'next/server'

import { prisma } from '../../../lib/prisma'

export async function GET() {
  const projects = await prisma.projects.findMany({
    orderBy: {
      createdAt: 'asc'
    },
    take: 3,
  });

  return NextResponse.json(projects)
}