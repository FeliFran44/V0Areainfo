"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Wifi, Cable, Shield, Monitor, Settings, Wrench } from "lucide-react"

const services = [
  {
    icon: Wifi,
    title: "Wi-Fi Profesional",
    description: "Diseño e instalación de redes inalámbricas de alto rendimiento.",
    color: "from-cyan-500 to-blue-600",
  },
  {
    icon: Cable,
    title: "Fibra Óptica",
    description: "Conectividad veloz y estable para empresas exigentes.",
    color: "from-blue-500 to-purple-600",
  },
  {
    icon: Settings,
    title: "Cableado Estructurado",
    description: "Infraestructura organizada para máxima eficiencia.",
    color: "from-purple-500 to-pink-600",
  },
  {
    icon: Shield,
    title: "Firewalls y Seguridad",
    description: "Protección de red con equipos modernos y configuraciones seguras.",
    color: "from-pink-500 to-red-600",
  },
  {
    icon: Monitor,
    title: "Monitoreo de Activos",
    description: "Control remoto de redes y dispositivos en tiempo real.",
    color: "from-red-500 to-orange-600",
  },
  {
    icon: Wrench,
    title: "Proyectos llave en mano",
    description: "Desde el diseño hasta la implementación, sin preocupaciones.",
    color: "from-orange-500 to-yellow-600",
  },
]

export function ServicesSection() {
  return (
    <section id="servicios" className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Nuestros Servicios
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Soluciones integrales de conectividad y seguridad para tu empresa
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-gray-900/50 border-gray-800 hover:border-cyan-500/50 transition-all duration-300 group hover:transform hover:scale-105"
            >
              <CardHeader className="text-center">
                <div
                  className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${service.color} p-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <service.icon className="w-full h-full text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-400 text-center leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
