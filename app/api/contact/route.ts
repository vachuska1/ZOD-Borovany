import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, message } = await request.json()

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Chybí povinné údaje" }, { status: 400 })
    }

    const emailContent = `
      Nová zpráva z kontaktního formuláře ZOD Borovany:
      
      Jméno: ${name}
      Email: ${email}
      Telefon: ${phone || "Neuvedeno"}
      
      Zpráva:
      ${message}
    `

    await resend.emails.send({
      from: "kontakt@zodborovany.cz",
      to: "aless.vachuska@seznam.cz",
      subject: `Nová zpráva od ${name} - ZOD Borovany`,
      text: emailContent,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Chyba při odesílání emailu:", error)
    return NextResponse.json({ error: "Chyba při odesílání zprávy" }, { status: 500 })
  }
}
