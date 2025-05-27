"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function MenuSection() {
  const { t } = useLanguage()

  return (
    <section id="menu" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-16">{t("currentMenu")}</h2>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Týden 1 */}
            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center bg-gray-900 text-white">
                <CardTitle className="text-xl">{t("menuWeek1")}</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="aspect-[3/4] bg-gray-100 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gray-300 rounded-lg mx-auto mb-4 flex items-center justify-center">
                      <span className="text-gray-600 text-xs">PDF náhled</span>
                    </div>
                    <Button variant="outline" size="sm" asChild>
                      <a href="/api/menu/week1.pdf" download>
                        <Download className="h-4 w-4 mr-2" />
                        {t("downloadPdf")}
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Týden 2 */}
            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center bg-gray-900 text-white">
                <CardTitle className="text-xl">{t("menuWeek2")}</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="aspect-[3/4] bg-gray-100 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gray-300 rounded-lg mx-auto mb-4 flex items-center justify-center">
                      <span className="text-gray-600 text-xs">PDF náhled</span>
                    </div>
                    <Button variant="outline" size="sm" asChild>
                      <a href="/api/menu/week2.pdf" download>
                        <Download className="h-4 w-4 mr-2" />
                        {t("downloadPdf")}
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t("cateringInfo")}</h3>
              <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-600">
                <div>
                  <p className="mb-2">
                    <strong>{t("lunchPrice")}</strong> {t("lunchPriceValue")}
                  </p>
                </div>
                <div>
                  <p className="mb-2">
                    <strong>{t("dumplings")}</strong> {t("dumplingsValue")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
