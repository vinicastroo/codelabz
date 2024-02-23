'use server'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  return Response.json({
    hello: 'world',
  })
}
