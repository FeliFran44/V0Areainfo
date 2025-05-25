"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MessageCircle, Mail, Send, CheckCircle, AlertCircle } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  })
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")

    try {
      const response = await fetch("https://formspree.io/f/xnndykqn", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setStatus("success")
        setFormData({ nombre: "", email: "", mensaje: "" })
      } else {
        setStatus("error")
      }
    } catch (error) {
      setStatus("error")
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contacto" className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Contacto
          </h2>
          <p className="text-gray-400 text-lg">¿Listo para mejorar tu infraestructura de red? Hablemos</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card className="bg-gray-900/50 border-gray-800">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white flex items-center gap-2">
                <Mail className="w-6 h-6 text-cyan-400" />
                Envíanos un mensaje
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    name="nombre"
                    placeholder="Tu nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                    className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-cyan-400"
                  />
                </div>
                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Tu correo electrónico"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-cyan-400"
                  />
                </div>
                <div>
                  <Textarea
                    name="mensaje"
                    placeholder="Escribí tu mensaje..."
                    rows={5}
                    value={formData.mensaje}
                    onChange={handleChange}
                    required
                    className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-cyan-400 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-3"
                >
                  {status === "loading" ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Enviando...
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <Send className="w-4 h-4" />
                      Enviar mensaje
                    </div>
                  )}
                </Button>

                {status === "success" && (
                  <div className="flex items-center gap-2 text-green-400 bg-green-400/10 p-3 rounded-lg">
                    <CheckCircle className="w-5 h-5" />
                    ¡Mensaje enviado con éxito!
                  </div>
                )}

                {status === "error" && (
                  <div className="flex items-center gap-2 text-red-400 bg-red-400/10 p-3 rounded-lg">
                    <AlertCircle className="w-5 h-5" />
                    Error al enviar. Probá más tarde.
                  </div>
                )}
              </form>
            </CardContent>
          </Card>

          {/* Quick Contact */}
          <div className="space-y-6">
            <Card className="bg-gradient-to-br from-cyan-500/10 to-blue-600/10 border-cyan-500/30">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">WhatsApp</h3>
                    <p className="text-gray-400">Respuesta inmediata</p>
                  </div>
                </div>
                <Button
                  onClick={() => window.open("https://wa.me/59899307090", "_blank")}
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold"
                >
                  Escribir por WhatsApp
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-gray-800">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Información de contacto</h3>
                    <div className="space-y-2 text-gray-400">
                      <p>📧 info@areainfo.com.uy</p>
                      <p>📱 +598 99 307 090</p>
                      <p>📍 Montevideo, Uruguay</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-md font-semibold text-white mb-2">Horarios de atención</h4>
                    <div className="space-y-1 text-gray-400 text-sm">
                      <p>Lunes a Viernes: 9:00 - 18:00</p>
                      <p>Sábados: 9:00 - 13:00</p>
                      <p>Emergencias: 24/7</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
