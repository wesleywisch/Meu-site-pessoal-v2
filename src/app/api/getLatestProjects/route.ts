import { NextResponse } from 'next/server'

import { prisma } from '../../../lib/prisma'

export async function GET() {
  const projects = await prisma.projects.findMany({
    orderBy: {
      createdAt: 'asc'
    },
  });

  return NextResponse.json(projects)
}