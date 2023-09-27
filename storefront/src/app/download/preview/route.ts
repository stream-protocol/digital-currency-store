import { NextRequest, NextResponse } from "next/server"

export async function GET(req: NextRequest) {
  // Get the file info from the URL
  const { filepath, filename } = Object.fromEntries(req.nextUrl.searchParams)

  // Fetch the PDF file
  const pdfResponse = await fetch(filepath)

  // Handle the case where the PDF could not be fetched
  if (!pdfResponse.ok) return new NextResponse("PDF not found", { status: 404 })

  // Get the PDF content as a buffer
  const pdfBuffer = await pdfResponse.arrayBuffer()

  // Define response headers
  const headers = {
    "Content-Type": "application/pdf",
    "Content-Disposition": `attachment; filename="${filename}"`, // This sets the invoice name for the download
  }

  // Create a NextResponse with the PDF content and headers
  const response = new NextResponse(pdfBuffer, {
    status: 200,
    headers,
  })

  return response
}