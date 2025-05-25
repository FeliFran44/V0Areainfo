"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Linkedin, Mail, MessageCircle } from "lucide-react"

export function FounderSection() {
  return (
    <section id="fundador" className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto max-w-6xl">
        <Card className="bg-gray-900/50 border-gray-800 overflow-hidden">
          <CardContent className="p-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Image Section */}
              <div className="relative bg-gradient-to-br from-cyan-500/20 to-blue-600/20 p-8 lg:p-12 flex flex-col items-center justify-center">
                <div className="relative">
                  <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-cyan-400 shadow-2xl">
                    <img
                      src="/mauricio.jpeg?height=256&width=256"
                      alt="Mauricio Favaro"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xl">MF</span>
                  </div>
                </div>

                <div className="flex gap-4 mt-8">
                  <Button
                    variant="outline"
                    size="icon"
                    className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black"
                    onClick={() => window.open("https://wa.me/59899307090", "_blank")}
                  >
                    <MessageCircle className="w-5 h-5" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black"
                    onClick={() => window.open("mailto:info@areainfo.com.uy", "_blank")}
                  >
                    <Mail className="w-5 h-5" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black"
                    onClick={() => window.open("https://www.linkedin.com/in/mauriciofavaro", "_blank")}
                  >
                    <Linkedin className="w-5 h-5" />
                  </Button>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-2 text-white">Mauricio Favaro</h2>
                <h3 className="text-xl text-cyan-400 mb-6 font-semibold">Fundador y Director de Areainfo</h3>
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>
                    Apasionado por la tecnología y especialista en infraestructura de redes y soporte IT, Mauricio ha
                    liderado proyectos de alto impacto optimizando la seguridad y el rendimiento de las comunicaciones.
                  </p>
                  <p>
                    Cree firmemente en el trabajo en equipo, la innovación y las relaciones humanas como pilares
                    fundamentales para alcanzar resultados sostenibles.
                  </p>
                  <p>
                    Con visión, compromiso y organización, transforma ideas en soluciones personalizadas que hacen la
                    diferencia.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
