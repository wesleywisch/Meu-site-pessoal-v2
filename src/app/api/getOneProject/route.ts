import { NextResponse } from 'next/server';

import { prisma } from '../../../lib/prisma'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)

  const slug = searchParams.get('slug') as string

  const project = await prisma.projects.findFirstOrThrow({
    where: {
      slug,
    }
  });

  return NextResponse.json(project)
}