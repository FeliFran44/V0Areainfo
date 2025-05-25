"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Users } from "lucide-react"

const featuredProjects = [
  {
    title: "Copa América 2024 - Estados Unidos",
    description:
      "Participamos en la Copa América USA, donde fuimos contratados para auditar la conectividad y brindar soporte IT en 13 de las 14 sedes del torneo. Desplegamos un equipo de 11 profesionales en distintas ciudades de Estados Unidos.",
    image: "/placeholder.svg?height=300&width=400",
    icon: Trophy,
    badge: "Internacional",
  },
  {
    title: "Libertadores y Sudamericana 2021 - Estadio Centenario",
    description:
      "Responsables de proporcionar conectividad a internet mediante el despliegue de Access Points y Cableado Estructurado en el perímetro del Estadio Centenario para las finales de Conmebol.",
    image: "/placeholder.svg?height=300&width=400",
    icon: Trophy,
    badge: "Deportivo",
  },
  {
    title: "Concierto de los Rolling Stones",
    description:
      "Brindamos conectividad a internet en los puntos de acceso al show de los Rolling Stones en el Estadio Centenario. Se realizaron enlaces y cableados para garantizar una conexión estable.",
    image: "/placeholder.svg?height=300&width=400",
    icon: Users,
    badge: "Entretenimiento",
  },
]

const clientProjects = [
  {
    name: "Administraciones Renom",
    description:
      "Instalación de cableado estructurado para Datos, Telefonía, CCTV y WiFi, utilizando equipos de última generación.",
    image: "/administraciones renom.jpeg?height=300&width=400",
  },
  {
    name: "Emme Sistemas",
    description: "Cableado estructurado y reinstalación de equipamientos activos en el nuevo local de la empresa.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "Club Náutico Montevideo",
    description:
      "Al cliente Club Náutico Montevideo se le brindó apoyo en la organización de Rack Principal, instalación de switches Ubiquiti y reconfiguración de WiFi.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "Montecuir Suc. Malvín",
    description:
      "Implementación integral de red y seguridad para Montecuir Malvín, en conjunto con Mollo Seguridad Electrónica.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "Proyecto Apartamento Punta Carretas",
    description:
      "Junto al estudio de arquitectos se realizó un análisis de cobertura, seguido por la instalación de 14 cámaras IP Hikvision, 6 Access Point Ubiquiti para WiFi total y un sistema de telefonía IP Grandstream.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "Digital Outlet",
    description:
      "Actualización de infraestructura en Digital Outlet: más de 50 cámaras IP, 8 Access Point, control de acceso, telefonía IP y más de 40 puestos de red, con equipamiento Mikrotik, Ubiquiti, Hikvision y Grandstream.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "PCM Uruguay SA",
    description:
      "Se realizó la implementación de un sistema de CCTV IP, reconfiguración completa de RED y organización de Rack de Datos.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "CDR medios",
    description:
      "Se realizó la instalación de 2 Access Point, 3 Switches UniFi y un Mikrotik 3011 con dos conexiones a internet. Balanceo, Vlans, VPNs, y otros servicios.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "MANCRU SA",
    description:
      "Mancur SA confió en la solución brindada por AREAINFO Comunicaciones para lograr una estabilidad y mejorar la seguridad a nivel de conectividad.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "Kaibil Seguridad",
    description:
      "Kaibil Seguridad cuenta con nuestro servicio mensual de asesoramiento y monitoreo, asegurando una red actualizada y protegida.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "Serviport Seguridad",
    description:
      "Mejora de red y telefonía para Serviport con router Mikrotik, AP Ubiquiti y central IP Grandstream, junto a servicio mensual de asesoramiento y monitoreo.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "Frog oficinas",
    description:
      "Implementación de 6 AP Ubiquiti tras relevamiento de cobertura, con asesoramiento en uso de VLANs para control de usuarios conectados.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "Casa Jorge",
    description:
      "Casa Jorge cuenta con una implementación de más de 85 cámaras de tipo IP de la marca Hikvision, y una RED de conectividad con equipamiento Ubiquiti compuesto por switches y access points.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "Costa Logística",
    description:
      "Instalación de 160 cámaras IP Hikvision en Costa Logística, incluyendo térmicas para seguridad perimetral y sistema de grabación centralizado, con monitoreo y asesoramiento mensual de red.",
    image: "/placeholder.svg?height=300&width=400",
  },
]

export function ProjectsSection() {
  return (
    <section id="proyectos" className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Proyectos Destacados
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Casos de éxito que demuestran nuestra experiencia y capacidad
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <Card
              key={index}
              className="bg-gray-900/50 border-gray-800 hover:border-cyan-500/50 transition-all duration-300 group overflow-hidden"
            >
              <div className="relative">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-cyan-500/20 text-cyan-400 border-cyan-500/30">
                    {project.badge}
                  </Badge>
                </div>
                <div className="absolute bottom-4 left-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center">
                    <project.icon className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-400 leading-relaxed">{project.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Client Grid - Updated to match original design */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-cyan-400 mb-4">Más empresas y eventos que eligieron Areainfo</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {clientProjects.map((client, index) => (
            <Card
              key={index}
              className="bg-gray-900/50 border-gray-800 hover:border-cyan-500/50 transition-all duration-300 group overflow-hidden"
            >
              <div className="relative">
                <img
                  src={client.image || "/placeholder.svg"}
                  alt={client.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg font-bold text-cyan-400 group-hover:text-cyan-300 transition-colors text-center">
                  {client.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <CardDescription className="text-gray-400 text-sm leading-relaxed text-center">
                  {client.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
