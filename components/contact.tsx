"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Phone, Mail, MapPin, User } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { PhotoGallery } from "./photo-gallery"

export function Contact() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const contacts = [
    {
      titleKey: "chairman" as const,
      name: "Ing. Jan Kouba",
      phone: "736 670 519",
      email: "predseda@zodborovany.cz",
    },
    {
      titleKey: "viceChairman" as const,
      name: "Ing. Jindřich Kořínek",
      phone: "604 204 498",
      email: "korinek@zodborovany.cz",
    },
    {
      titleKey: "economist" as const,
      name: "Ing. Iveta Schacherlová",
      phone: "778 411 334",
      email: "ekonom@zodborovany.cz",
    },
    {
      titleKey: "zootechnician" as const,
      name: "Ing. Ondřej Kubala",
      phone: "778 474 530",
      email: "zootechnik@zodborovany.cz",
    },
    {
      titleKey: "mechanizer" as const,
      name: "Josef Čada",
      phone: "778 767 969",
      email: "mechanik@zodborovany.cz",
    },
    {
      titleKey: "landManagement" as const,
      name: "Ing. Aleš Vachuška",
      phone: "736 670 520",
      email: "pozemky@zodborovany.cz",
    },
    {
      titleKey: "canteenManager" as const,
      name: "Jana Rojdlová",
      phone: "387 023 519",
      phone2: "778 955 601",
      email: "info@zodborovany.cz",
    },
  ]

  // Fotogalerie data
  const galleryPhotos = [
    {
      id: 1,
      src: "/placeholder.svg?height=800&width=800&text=Zemědělské stroje",
      alt: "Zemědělské stroje na poli",
    },
    {
      id: 2,
      src: "/placeholder.svg?height=800&width=800&text=Dojnice ve stáji",
      alt: "Dojnice v moderní stáji",
    },
    {
      id: 3,
      src: "/placeholder.svg?height=800&width=800&text=Sklizeň obilí",
      alt: "Sklizeň obilí kombajnem",
    },
    {
      id: 4,
      src: "/placeholder.svg?height=800&width=800&text=Závodní kuchyně",
      alt: "Závodní kuchyně ZOD Borovany",
    },
    {
      id: 5,
      src: "/placeholder.svg?height=800&width=800&text=Pastviny",
      alt: "Krávy na pastvinách",
    },
    {
      id: 6,
      src: "/placeholder.svg?height=800&width=800&text=Areál družstva",
      alt: "Areál ZOD Borovany",
    },
    {
      id: 7,
      src: "/placeholder.svg?height=800&width=800&text=Drůbež",
      alt: "Chov drůbeže",
    },
    {
      id: 8,
      src: "/placeholder.svg?height=800&width=800&text=Řepkové pole",
      alt: "Řepkové pole v květu",
    },
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        alert("Zpráva byla úspěšně odeslána!")
        setFormData({ name: "", email: "", phone: "", message: "" })
      } else {
        alert("Chyba při odesílání zprávy.")
      }
    } catch (error) {
      alert("Chyba při odesílání zprávy.")
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const formatPhoneForCall = (phone: string) => {
    return `+420${phone.replace(/\s/g, "")}`
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-16">{t("contacts")}</h2>

          {/* Kontaktní osoby */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {contacts.map((contact, index) => (
              <Card key={index} className="border hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-gray-600 leading-tight">
                    {t(contact.titleKey)}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-2">
                    <div className="flex items-center text-sm">
                      <User className="h-4 w-4 mr-2 text-gray-500" />
                      <span className="font-medium">{contact.name}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Phone className="h-4 w-4 mr-2 text-gray-500" />
                      <div className="flex flex-col">
                        <a
                          href={`tel:${formatPhoneForCall(contact.phone)}`}
                          className="hover:text-gray-900 transition-colors"
                        >
                          {contact.phone}
                        </a>
                        {contact.phone2 && (
                          <a
                            href={`tel:${formatPhoneForCall(contact.phone2)}`}
                            className="hover:text-gray-900 transition-colors"
                          >
                            {contact.phone2}
                          </a>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Mail className="h-4 w-4 mr-2 text-gray-500" />
                      <a href={`mailto:${contact.email}`} className="hover:text-gray-900 transition-colors">
                        {contact.email}
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Kontaktní formulář */}
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-xl font-bold">{t("writeToUs")}</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">{t("name")}</Label>
                    <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
                  </div>
                  <div>
                    <Label htmlFor="email">{t("email")}</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">{t("phone")}</Label>
                    <Input id="phone" name="phone" value={formData.phone} onChange={handleChange} />
                  </div>
                  <div>
                    <Label htmlFor="message">{t("message")}</Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full bg-gray-900 hover:bg-gray-800">
                    {t("sendMessage")}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Mapa */}
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-xl font-bold flex items-center">
                  <MapPin className="h-5 w-5 mr-2" />
                  {t("findUs")}
                </CardTitle>
              </CardHeader>
              <CardContent className="pb-4">
                <div className="space-y-4">
                  <div className="text-gray-600">
                    <p className="font-bold text-lg">ZOD Borovany</p>
                    <p className="font-medium text-base">Vodárenská 97</p>
                    <p className="text-base">373 12 Borovany</p>
                  </div>

                  {/* Mapa */}
                  <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916256937595!2d14.6519!3d48.9419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4771573c8c8c8c8d%3A0x8c8c8c8c8c8c8c8c!2sVod%C3%A1rensk%C3%A1%2097%2C%20373%2012%20Borovany!5e0!3m2!1scs!2scz!4v1234567890"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="rounded-lg"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Fotogalerie */}
          <div className="text-center mt-20">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8">{t("gallery")}</h3>
            <PhotoGallery photos={galleryPhotos} />
          </div>
        </div>
      </div>
    </section>
  )
}
