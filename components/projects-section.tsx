"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Users } from "lucide-react"

const featuredProjects = [
  {
    title: "Copa América 2024 - Estados Unidos",
    description:
      "Participamos en la Copa América USA, donde fuimos contratados para auditar la conectividad y brindar soporte IT en 13 de las 14 sedes del torneo. Desplegamos un equipo de 11 profesionales en distintas ciudades de Estados Unidos.",
    image: "/Copa America.jpeg",
    icon: Trophy,
    badge: "Internacional",
  },
  {
    title: "Libertadores y Sudamericana 2021 - Estadio Centenario",
    description:
      "Responsables de proporcionar conectividad a internet mediante el despliegue de Access Points y Cableado Estructurado en el perímetro del Estadio Centenario para las finales de Conmebol.",
    image: "/Libertadores Estadio Centenario.jpeg",
    icon: Trophy,
    badge: "Deportivo",
  },
  {
    title: "Concierto de los Rolling Stones",
    description:
      "Brindamos conectividad a internet en los puntos de acceso al show de los Rolling Stones en el Estadio Centenario. Se realizaron enlaces y cableados para garantizar una conexión estable.",
    image: "/Rolling Stones.jpeg",
    icon: Users,
    badge: "Entretenimiento",
  },
]

const clientProjects = [
  {
    name: "Administraciones Renom",
    description:
      "Instalación de cableado estructurado para Datos, Telefonía, CCTV y WiFi, utilizando equipos de última generación.",
    image: "/Administraciones Renom.jpeg",
  },
  {
    name: "Emme Sistemas",
    description: "Cableado estructurado y reinstalación de equipamientos activos en el nuevo local de la empresa.",
    image: "/Emme Sistemas.jpeg",
  },
  {
    name: "Club Náutico Montevideo",
    description:
      "Al cliente Club Náutico Montevideo se le brindó apoyo en la organización de Rack Principal, instalación de switches Ubiquiti y reconfiguración de WiFi.",
    image: "/Club Nautico Montevideo.jpeg",
  },
  {
    name: "Montecuir Suc. Malvín",
    description:
      "Implementación integral de red y seguridad para Montecuir Malvín, en conjunto con Mollo Seguridad Electrónica.",
    image: "/Montecuir suc. malvin.jpeg",
  },
  {
    name: "Proyecto Apartamento Punta Carretas",
    description:
      "Junto al estudio de arquitectos se realizó un análisis de cobertura, seguido por la instalación de 14 cámaras IP Hikvision, 6 Access Point Ubiquiti para WiFi total y un sistema de telefonía IP Grandstream.",
    image: "/Apartamento Punta Carretas.jpeg",
  },
  {
    name: "Digital Outlet",
    description:
      "Actualización de infraestructura en Digital Outlet: más de 50 cámaras IP, 8 Access Point, control de acceso, telefonía IP y más de 40 puestos de red, con equipamiento Mikrotik, Ubiquiti, Hikvision y Grandstream.",
    image: "/Digital Outlet.jpeg",
  },
  {
    name: "PCM Uruguay SA",
    description:
      "Se realizó la implementación de un sistema de CCTV IP, reconfiguración completa de RED y organización de Rack de Datos.",
    image: "/PCM Uruguay.jpeg",
  },
  {
    name: "CDR medios",
    description:
      "Se realizó la instalación de 2 Access Point, 3 Switches UniFi y un Mikrotik 3011 con dos conexiones a internet. Balanceo, Vlans, VPNs, y otros servicios.",
    image: "/CDR Medios.jpeg",
  },
  {
    name: "MANCRU SA",
    description:
      "Mancur SA confió en la solución brindada por AREAINFO Comunicaciones para lograr una estabilidad y mejorar la seguridad a nivel de conectividad.",
    image: "/MANCRU SA.jpeg",
  },
  {
    name: "Kaibil Seguridad",
    description:
      "Kaibil Seguridad cuenta con nuestro servicio mensual de asesoramiento y monitoreo, asegurando una red actualizada y protegida.",
    image: "/Kabil Seguridad.jpeg",
  },
  {
    name: "Serviport Seguridad",
    description:
      "Mejora de red y telefonía para Serviport con router Mikrotik, AP Ubiquiti y central IP Grandstream, junto a servicio mensual de asesoramiento y monitoreo.",
    image: "/Serviport Seguridad.jpeg",
  },
  {
    name: "Frog oficinas",
    description:
      "Implementación de 6 AP Ubiquiti tras relevamiento de cobertura, con asesoramiento en uso de VLANs para control de usuarios conectados.",
    image: "/Frog oficinas.jpeg",
  },
  {
    name: "Casa Jorge",
    description:
      "Casa Jorge cuenta con una implementación de más de 85 cámaras de tipo IP de la marca Hikvision, y una RED de conectividad con equipamiento Ubiquiti compuesto por switches y access points.",
    image: "/Casa Jorge.jpeg",
  },
  {
    name: "Costa Logística",
    description:
      "Instalación de 160 cámaras IP Hikvision en Costa Logística, incluyendo térmicas para seguridad perimetral y sistema de grabación centralizado, con monitoreo y asesoramiento mensual de red.",
    image: "/Costa logística.jpeg",
  },
]

export function ProjectsSection() {
  // ... no se modifica nada aquí
}
