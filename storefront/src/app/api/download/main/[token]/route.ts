// src/app/api/download/main/[token]/route.ts

import { NextRequest, NextResponse } from "next/server"

export async function GET(
  req: NextRequest,
  { params }: { params: Record<string, any> }
) {
  // Get the token from the URL
  const { token } = params

  // Define the URL to fetch the PDF file data from
  const pdfUrl = `${process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL}/store/product-cryptocurrency/${token}`

  // Fetch the PDF file data
  const { file, filename } = await fetch(pdfUrl).then((res) => res.json())

  // Handle the case where the token is invalid
  if (!file) return new NextResponse("Invalid token", { status: 401 })

  // Fetch the PDF file
  const pdfResponse = await fetch(file)

  // Handle the case where the PDF could not be fetched
  if (!pdfResponse.ok) return new NextResponse("PDF not found", { status: 404 })

  // Get the PDF content as a buffer
  const pdfBuffer = await pdfResponse.arrayBuffer()

  // Define response headers
  const headers = {
    "Content-Type": "application/pdf",
    "Content-Disposition": `attachment; filename="${filename}"`, // This sets the cryptocurrency / Token name for the download
  }

  // Create a NextResponse with the PDF content and headers
  const response = new NextResponse(pdfBuffer, {
    status: 200,
    headers,
  })

  return response
}