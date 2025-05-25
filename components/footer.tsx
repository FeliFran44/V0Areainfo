"use client"

import { Linkedin, Mail, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="text-2xl font-bold text-white mb-4">
              Area<span className="text-cyan-400">info</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Tu red, tu seguridad, nuestro compromiso. Soluciones integrales de conectividad y seguridad para empresas
              en Uruguay.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Servicios</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Wi-Fi Profesional</li>
              <li>Fibra Óptica</li>
              <li>Cableado Estructurado</li>
              <li>Firewalls y Seguridad</li>
              <li>Monitoreo de Activos</li>
              <li>Proyectos llave en mano</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contacto</h3>
            <div className="space-y-3">
              <p className="text-gray-400">info@areainfo.com.uy</p>
              <p className="text-gray-400">+598 99 307 090</p>
              <p className="text-gray-400">Montevideo, Uruguay</p>

              <div className="flex gap-3 pt-2">
                <Button
                  variant="outline"
                  size="icon"
                  className="border-gray-700 text-gray-400 hover:border-cyan-400 hover:text-cyan-400"
                  onClick={() => window.open("https://wa.me/59899307090", "_blank")}
                >
                  <MessageCircle className="w-4 h-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="border-gray-700 text-gray-400 hover:border-cyan-400 hover:text-cyan-400"
                  onClick={() => window.open("mailto:info@areainfo.com.uy", "_blank")}
                >
                  <Mail className="w-4 h-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="border-gray-700 text-gray-400 hover:border-cyan-400 hover:text-cyan-400"
                  onClick={() => window.open("https://www.linkedin.com/in/mauriciofavaro", "_blank")}
                >
                  <Linkedin className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">© 2025 Areainfo – Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
