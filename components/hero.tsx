"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"
import Image from "next/image"

export function Hero() {
  const { t } = useLanguage()

  return (
    <section id="home" className="relative bg-white">
      {/* Full-width title */}
      <div className="bg-gradient-to-b from-gray-50 to-white py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-3xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-2">{t("companyName")}</h1>
          </div>
        </div>
      </div>

      {/* Full-width hero image */}
      <div className="w-full h-64 lg:h-96 bg-gray-200 relative overflow-hidden">
        <img
          src="/placeholder.svg?height=400&width=1200"
          alt="ZOD Borovany - zemědělské družstvo"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Company info cards */}
      <div className="py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Logo nad informacemi */}
            <div className="text-center mb-8">
              <Image
                src="/images/logo_zod.png"
                alt="ZOD Borovany Logo"
                width={200}
                height={140}
                className="mx-auto object-contain"
              />
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
              <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-600">
                <div>
                  <p className="mb-2">
                    <strong>Adresa:</strong> Vodárenská 97, 373 12 Borovany
                  </p>
                  <p className="mb-2">
                    <strong>IČO:</strong> 00109207
                  </p>
                  <p className="mb-2">
                    <strong>DIČ:</strong> CZ00109207
                  </p>
                </div>
                <div>
                  <p className="mb-2">
                    <strong>Tel:</strong>{" "}
                    <a href="tel:+420387023511" className="hover:text-gray-900 transition-colors">
                      387 023 511
                    </a>
                  </p>
                  <p className="mb-2">
                    <strong>Email:</strong>{" "}
                    <a href="mailto:info@zodborovany.cz" className="hover:text-gray-900 transition-colors">
                      info@zodborovany.cz
                    </a>
                  </p>
                  <p className="mb-2">
                    <strong>Datová schránka:</strong> r5tcx53
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gray-900 hover:bg-gray-800" asChild>
                <a href="#menu">{t("menuButton")}</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#contact">{t("contactButton")}</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
