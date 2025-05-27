import { type NextRequest, NextResponse } from "next/server"
import { writeFile } from "fs/promises"
import path from "path"

export async function POST(request: NextRequest) {
  try {
    const data = await request.formData()
    const file: File | null = data.get("file") as unknown as File
    const week: string | null = data.get("week") as string

    if (!file) {
      return NextResponse.json({ success: false, message: "No file uploaded" })
    }

    if (!week || !["week1", "week2"].includes(week)) {
      return NextResponse.json({ success: false, message: "Invalid week parameter" })
    }

    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)

    // Ensure the public/menu directory exists
    const menuDir = path.join(process.cwd(), "public", "menu")

    // Save the file
    const filename = `${week}.pdf`
    const filepath = path.join(menuDir, filename)
    await writeFile(filepath, buffer)

    return NextResponse.json({
      success: true,
      message: `Menu for ${week} uploaded successfully`,
      filename,
    })
  } catch (error) {
    console.error("Error uploading file:", error)
    return NextResponse.json(
      {
        success: false,
        message: "Error uploading file",
      },
      { status: 500 },
    )
  }
}
