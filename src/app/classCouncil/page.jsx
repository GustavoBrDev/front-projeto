"use client"
import { useState, useEffect } from "react"
import { Search, Filter, FileText } from "lucide-react"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js"
import { Pie } from "react-chartjs-2"
import { Header } from "@/components/Header/Header"
import { BlueBackground } from "@/components/topBar/BlueBackground"
import { WhiteContainer } from "@/components/White-Container"
import { CouncilTitle } from "@/components/topBar/CouncilTitle"

// Registrando os componentes necessários do Chart.js
ChartJS.register(ArcElement, Tooltip, Legend)

export default function ConselhoDeClasse() {
  // Estado para controlar os checklists
  const [conselhos, setConselhos] = useState([
    {
      id: 1,
      titulo: "AI PSIN 2023/2 INT 1",
      data: "14/02/2025",
      equipe: [
        { id: 1, nome: "Você", avatar: "/placeholder.svg?height=40&width=40" },
        { id: 2, nome: "João", avatar: "/placeholder.svg?height=40&width=40" },
        { id: 3, nome: "Maria", avatar: "/placeholder.svg?height=40&width=40" },
        { id: 4, nome: "Pedro", avatar: "/placeholder.svg?height=40&width=40" },
      ],
      professores: [
        { id: 1, nome: "Ana", avatar: "/placeholder.svg?height=40&width=40" },
        { id: 2, nome: "Carlos", avatar: "/placeholder.svg?height=40&width=40" },
        { id: 3, nome: "Lucia", avatar: "/placeholder.svg?height=40&width=40" },
        { id: 4, nome: "Roberto", avatar: "/placeholder.svg?height=40&width=40" },
      ],
      etapas: [
        { id: 1, nome: "Pré-Conselho Professores", concluido: true },
        { id: 2, nome: "Pré-Conselho Alunos", concluido: false },
        { id: 3, nome: "Conselho de Classe", concluido: false },
        { id: 4, nome: "Liberar feedback", concluido: false },
      ],
      tipo: "etapas",
    },
    {
      id: 2,
      titulo: "AI PSIN 2023/2 INT 2",
      data: "14/02/2025",
      equipe: [
        { id: 1, nome: "Você", avatar: "/placeholder.svg?height=40&width=40" },
        { id: 2, nome: "João", avatar: "/placeholder.svg?height=40&width=40" },
        { id: 3, nome: "Maria", avatar: "/placeholder.svg?height=40&width=40" },
        { id: 4, nome: "Pedro", avatar: "/placeholder.svg?height=40&width=40" },
      ],
      professores: [
        { id: 1, nome: "Ana", avatar: "/placeholder.svg?height=40&width=40" },
        { id: 2, nome: "Carlos", avatar: "/placeholder.svg?height=40&width=40" },
        { id: 3, nome: "Lucia", avatar: "/placeholder.svg?height=40&width=40" },
        { id: 4, nome: "Roberto", avatar: "/placeholder.svg?height=40&width=40" },
      ],
      etapas: [
        { id: 1, nome: "Pré-Conselho Professores", concluido: true },
        { id: 2, nome: "Pré-Conselho Alunos", concluido: true },
        { id: 3, nome: "Conselho de Classe", concluido: false },
        { id: 4, nome: "Liberar feedback", concluido: false },
      ],
      tipo: "etapas",
    },
    {
      id: 3,
      titulo: "AI PSIN 2023/2 INT 3",
      data: "14/02/2025",
      equipe: [
        { id: 1, nome: "Você", avatar: "/placeholder.svg?height=40&width=40" },
        { id: 2, nome: "João", avatar: "/placeholder.svg?height=40&width=40" },
        { id: 3, nome: "Maria", avatar: "/placeholder.svg?height=40&width=40" },
        { id: 4, nome: "Pedro", avatar: "/placeholder.svg?height=40&width=40" },
      ],
      professores: [
        { id: 1, nome: "Ana", avatar: "/placeholder.svg?height=40&width=40" },
        { id: 2, nome: "Carlos", avatar: "/placeholder.svg?height=40&width=40" },
        { id: 3, nome: "Lucia", avatar: "/placeholder.svg?height=40&width=40" },
        { id: 4, nome: "Roberto", avatar: "/placeholder.svg?height=40&width=40" },
      ],
      etapas: [
        { id: 1, nome: "Pré-Conselho Professores", concluido: true },
        { id: 2, nome: "Pré-Conselho Alunos", concluido: true },
        { id: 3, nome: "Conselho de Classe", concluido: true },
        { id: 4, nome: "Liberar feedback", concluido: false },
      ],
      tipo: "etapas",
    },
    {
      id: 4,
      titulo: "AI PSIN 2023/1 INT 1",
      data: "14/02/2025",
      dataLiberacao: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000 + 8 * 60 * 60 * 1000 + 47 * 60 * 1000), // Data atual + 10 dias, 8 horas e 47 minutos
      equipe: [
        { id: 1, nome: "Você", avatar: "/placeholder.svg?height=40&width=40" },
        { id: 2, nome: "João", avatar: "/placeholder.svg?height=40&width=40" },
        { id: 3, nome: "Maria", avatar: "/placeholder.svg?height=40&width=40" },
        { id: 4, nome: "Pedro", avatar: "/placeholder.svg?height=40&width=40" },
      ],
      professores: [
        { id: 1, nome: "Ana", avatar: "/placeholder.svg?height=40&width=40" },
        { id: 2, nome: "Carlos", avatar: "/placeholder.svg?height=40&width=40" },
        { id: 3, nome: "Lucia", avatar: "/placeholder.svg?height=40&width=40" },
        { id: 4, nome: "Roberto", avatar: "/placeholder.svg?height=40&width=40" },
      ],
      countdown: { dias: 10, horas: 32, minutos: 47 },
      tipo: "liberacao",
    },
    {
      id: 5,
      titulo: "AI PSIN 2023/2 INT 1",
      data: "14/02/2025",
      feedbackData: "01/04/2025",
      equipe: [
        { id: 1, nome: "Você", avatar: "/placeholder.svg?height=40&width=40" },
        { id: 2, nome: "João", avatar: "/placeholder.svg?height=40&width=40" },
        { id: 3, nome: "Maria", avatar: "/placeholder.svg?height=40&width=40" },
        { id: 4, nome: "Pedro", avatar: "/placeholder.svg?height=40&width=40" },
      ],
      professores: [
        { id: 1, nome: "Ana", avatar: "/placeholder.svg?height=40&width=40" },
        { id: 2, nome: "Carlos", avatar: "/placeholder.svg?height=40&width=40" },
        { id: 3, nome: "Lucia", avatar: "/placeholder.svg?height=40&width=40" },
        { id: 4, nome: "Roberto", avatar: "/placeholder.svg?height=40&width=40" },
      ],
      grafico: { avaliados: 20, naoAvaliados: 80 },
      tipo: "grafico",
    },
    {
      id: 6,
      titulo: "AI PSIN 2023/2 INT 1",
      data: "14/02/2025",
      feedbackData: "01/04/2025",
      equipe: [
        { id: 1, nome: "Você", avatar: "/placeholder.svg?height=40&width=40" },
        { id: 2, nome: "João", avatar: "/placeholder.svg?height=40&width=40" },
        { id: 3, nome: "Maria", avatar: "/placeholder.svg?height=40&width=40" },
        { id: 4, nome: "Pedro", avatar: "/placeholder.svg?height=40&width=40" },
      ],
      professores: [
        { id: 1, nome: "Ana", avatar: "/placeholder.svg?height=40&width=40" },
        { id: 2, nome: "Carlos", avatar: "/placeholder.svg?height=40&width=40" },
        { id: 3, nome: "Lucia", avatar: "/placeholder.svg?height=40&width=40" },
        { id: 4, nome: "Roberto", avatar: "/placeholder.svg?height=40&width=40" },
      ],
      grafico: { avaliados: 65, naoAvaliados: 35 },
      tipo: "grafico",
    },
  ])

  // Estado para o contador regressivo
  const [countdown, setCountdown] = useState({ dias: 0, horas: 0, minutos: 0, segundos: 0 })

  // Atualiza o contador a cada segundo
  useEffect(() => {
    const calcularTempoRestante = () => {
      const agora = new Date()
      const dataLiberacao = new Date(conselhos[3].dataLiberacao)
      const diferenca = dataLiberacao - agora

      // Se a data já passou, zera o contador
      if (diferenca <= 0) {
        setCountdown({ dias: 0, horas: 0, minutos: 0, segundos: 0 })
        return
      }

      // Calcula dias, horas, minutos e segundos
      const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24))
      const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60))
      const segundos = Math.floor((diferenca % (1000 * 60)) / 1000)

      setCountdown({ dias, horas, minutos, segundos })
    }

    // Calcula o tempo restante imediatamente
    calcularTempoRestante()

    // Configura o intervalo para atualizar a cada segundo
    const intervalo = setInterval(calcularTempoRestante, 1000)

    // Limpa o intervalo quando o componente for desmontado
    return () => clearInterval(intervalo)
  }, [conselhos])

  // Função para alternar o estado de conclusão de uma etapa
  const toggleEtapa = (conselhoId, etapaId) => {
    setConselhos(
      conselhos.map((conselho) => {
        if (conselho.id === conselhoId) {
          const etapas = [...conselho.etapas]
          const etapaIndex = etapas.findIndex((etapa) => etapa.id === etapaId)

          // Só permite marcar como concluído se as etapas anteriores estiverem concluídas
          if (etapaIndex > 0 && !etapas[etapaIndex - 1].concluido) {
            return conselho
          }

          etapas[etapaIndex] = {
            ...etapas[etapaIndex],
            concluido: !etapas[etapaIndex].concluido,
          }

          // Se desmarcou uma etapa, desmarca todas as posteriores
          if (!etapas[etapaIndex].concluido) {
            for (let i = etapaIndex + 1; i < etapas.length; i++) {
              etapas[i] = { ...etapas[i], concluido: false }
            }
          }

          return { ...conselho, etapas }
        }
        return conselho
      }),
    )
  }

  // Dados para os gráficos de pizza
  const getChartData = (avaliados, naoAvaliados) => {
    return {
      labels: ["Avaliados", "Não avaliados"],
      datasets: [
        {
          data: [avaliados, naoAvaliados],
          backgroundColor: ["#4338ca", "#06b6d4"],
          borderWidth: 0,
        },
      ],
    }
  }

  // Opções para os gráficos
  const chartOptions = {
    plugins: {
      legend: {
        display: false,
      },
    },
    cutout: "60%",
    responsive: true,
    maintainAspectRatio: false,
  }

  return (
    <div className="min-h-screen bg-gray-100 mx-auto">
      <Header />
      <BlueBackground>
        <CouncilTitle iconWidth={40} iconHeight={40} textSize={"3xl"}/>
      </BlueBackground>

      <div className="container flex justify-center w-screen mx-auto">
        <WhiteContainer>

      {/* Main Content */}
      <main className="p-6 max-w-7xl mx-auto">
        {/* Search Bar */}
        <div className="relative mb-6 max-w-2xl mx-auto">
          <div className="flex items-center bg-white rounded-full shadow-md">
            <Search className="ml-4 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Pesquise aqui..."
              className="w-full py-2 px-4 rounded-full focus:outline-none"
            />
            <button className="p-2 mr-1">
              <Filter className="h-5 w-5 text-gray-400" />
            </button>
          </div>
        </div>

        {/* Cards Grid - Primeira linha */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          {conselhos.slice(0, 3).map((conselho) => (
            <div
              key={conselho.id}
              className="bg-[var(--white)] rounded-lg border border-gray-200 overflow-hidden h-[180px] flex flex-col"
            >
              <div className="bg-[var(--bluePrimary)] text-[var(--white)] py-2 px-3 flex justify-between items-center">
                <div>
                  <h3 className="font-bold text-sm whitespace-nowrap overflow-hidden text-ellipsis">
                    {conselho.titulo}
                  </h3>
                  <p className="text-xs">{conselho.data}</p>
                </div>
                <button className="text-[var(--white)]">
                  <FileText className="h-4 w-4" />
                </button>
              </div>

              <div className="p-3 flex-1 flex flex-col">
                <div className="flex flex-1">
                  {/* Coluna Esquerda */}
                  <div className="w-1/2 pr-2">
                    <h4 className="font-bold text-xs mb-1 whitespace-nowrap">Equipe Atribuída</h4>
                    <div className="flex -space-x-1 mb-2">
                      {conselho.equipe.map((membro, index) => (
                        <div
                          key={membro.id}
                          className={`w-7 h-7 rounded-full border-2 border-[var(--white)] ${
                            index === 0 ? "bg-[var(--bluePrimary)] flex items-center justify-center text-[var(--white)] text-[10px]" : ""
                          }`}
                        >
                          {index === 0 ? (
                            <span>Você</span>
                          ) : (
                            <img
                              src={membro.avatar || "/placeholder.svg"}
                              alt={membro.nome}
                              className="w-full h-full rounded-full object-cover"
                            />
                          )}
                        </div>
                      ))}
                    </div>

                    <h4 className="font-bold text-xs mb-1 whitespace-nowrap">Professores Atribuídos</h4>
                    <div className="flex -space-x-1">
                      {conselho.professores.map((professor) => (
                        <div key={professor.id} className="w-7 h-7 rounded-full border-2 border-[var(--white)]">
                          <img
                            src={professor.avatar || "/placeholder.svg"}
                            alt={professor.nome}
                            className="w-full h-full rounded-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Coluna Direita */}
                  <div className="w-1/2 pl-2">
                    <h4 className="font-bold text-xs mb-1 whitespace-nowrap">Etapas</h4>
                    <div className="space-y-1">
                      {conselho.etapas.map((etapa) => (
                        <div
                          key={etapa.id}
                          className="flex items-center gap-1 cursor-pointer"
                          onClick={() => toggleEtapa(conselho.id, etapa.id)}
                        >
                          <div
                            className={`w-4 h-4 rounded-full flex items-center justify-center ${
                              etapa.concluido ? "bg-[var(--green)]" : "border border-gray-300"
                            }`}
                          >
                            {etapa.concluido && (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-2 w-2 text-[var(--white)]"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            )}
                          </div>
                          <span className="text-xs whitespace-nowrap overflow-hidden text-ellipsis">{etapa.nome}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Cards Grid - Segunda linha */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Card 4 - Liberação do Feedback */}
          <div className="bg-[var(--white)] rounded-lg border border-gray-200 overflow-hidden h-[180px] flex flex-col">
            <div className="bg-[var(--bluePrimary)] text-[var(--white)] py-2 px-3 flex justify-between items-center">
              <div>
                <h3 className="font-bold text-sm whitespace-nowrap overflow-hidden text-ellipsis">
                  {conselhos[3].titulo}
                </h3>
                <p className="text-xs">{conselhos[3].data}</p>
              </div>
              <button className="text-[var(--white)]">
                <FileText className="h-4 w-4" />
              </button>
            </div>

            <div className="p-3 flex-1 flex flex-col">
              <div className="flex flex-1">
                {/* Coluna Esquerda */}
                <div className="w-1/2 pr-2">
                  <h4 className="font-bold text-xs mb-1 whitespace-nowrap">Equipe Atribuída</h4>
                  <div className="flex -space-x-1 mb-2">
                    {conselhos[3].equipe.map((membro, index) => (
                      <div
                        key={membro.id}
                        className={`w-7 h-7 rounded-full border-2 border-[var(--white)] ${
                          index === 0 ? "bg-[var(--bluePrimary)] flex items-center justify-center text-[var(--white)] text-[10px]" : ""
                        }`}
                      >
                        {index === 0 ? (
                          <span>Você</span>
                        ) : (
                          <img
                            src={membro.avatar || "/placeholder.svg"}
                            alt={membro.nome}
                            className="w-full h-full rounded-full object-cover"
                          />
                        )}
                      </div>
                    ))}
                  </div>

                  <h4 className="font-bold text-xs mb-1 whitespace-nowrap">Professores Atribuídos</h4>
                  <div className="flex -space-x-1">
                    {conselhos[3].professores.map((professor) => (
                      <div key={professor.id} className="w-7 h-7 rounded-full border-2 border-[var(--white)]">
                        <img
                          src={professor.avatar || "/placeholder.svg"}
                          alt={professor.nome}
                          className="w-full h-full rounded-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Coluna Direita - Liberação do Feedback */}
                <div className="w-1/2 pl-2 flex flex-col justify-between">
                  <div>
                    <h4 className="font-bold text-xs mb-1 whitespace-nowrap">Liberação do Feedback</h4>
                    <p className="text-xs ">O feedback será liberado para os alunos em:</p>
                  </div>

                  <div className="flex justify-center mb-2">
                    <div className="bg-[var(--blueSecondary)] text-[var(--white)] rounded-full px-4 py-1 flex items-center justify-between gap-1">
                      <div className="text-center">
                        <div className="text-sm font-bold">{countdown.dias}</div>
                        <div className="text-[10px]">DIAS</div>
                      </div>
                      <div className="text-sm">:</div>
                      <div className="text-center">
                        <div className="text-sm font-bold">{countdown.horas}</div>
                        <div className="text-[10px]">HORAS</div>
                      </div>
                      <div className="text-sm">:</div>
                      <div className="text-center">
                        <div className="text-sm font-bold">{countdown.minutos}</div>
                        <div className="text-[10px]">MIN</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Cards 5 e 6 - Gráficos */}
          {conselhos.slice(4, 6).map((conselho) => (
            <div
              key={conselho.id}
              className="bg-[var(--white)] rounded-lg border border-gray-200 overflow-hidden h-[180px] flex flex-col"
            >
              <div className="bg-[var(--bluePrimary)] text-[var(--white)] py-2 px-3 flex justify-between items-center">
                <div>
                  <h3 className="font-bold text-sm whitespace-nowrap overflow-hidden text-ellipsis">
                    {conselho.titulo}
                  </h3>
                  <p className="text-xs">{conselho.data}</p>
                </div>
                <button className="text-[var(--white)]">
                  <FileText className="h-4 w-4" />
                </button>
              </div>

              <div className="p-2 flex-1 flex flex-col">
                <div className="flex flex-1">
                  {/* Coluna Esquerda - Gráfico */}
                  <div className="w-1/2 pr-1 flex flex-col">
                    <h4 className="font-bold text-[11px] mb-0.5 whitespace-nowrap">Gráfico - Visualização</h4>
                    <div className="flex-1 relative flex items-center justify-center">
                      <div className="w-16 h-16">
                        <Pie
                          data={getChartData(conselho.grafico.avaliados, conselho.grafico.naoAvaliados)}
                          options={chartOptions}
                        />
                      </div>
                    </div>
                    <div className="flex justify-between text-[9px] mt-0.5">
                      <div className="flex items-center gap-0.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-indigo-700"></div>
                        <span className="whitespace-nowrap">Avaliados</span>
                      </div>
                      <div className="flex items-center gap-0.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-500"></div>
                        <span className="whitespace-nowrap">Não avaliados</span>
                      </div>
                    </div>
                  </div>

                  {/* Coluna Direita - Ações Rápidas */}
                  <div className="w-1/2 pl-1 border-l border-gray-200 flex flex-col">
                    <h4 className="font-bold text-[11px] mb-0.5 whitespace-nowrap">Ações Rápidas</h4>
                    <div className="space-y-1.5 flex-1 flex flex-col justify-center">
                      <button className="w-full py-0.5 bg-[var(--blueSecondary)] text-[var(--white)] rounded text-[11px] whitespace-nowrap">
                        Ver Conselho
                      </button>
                      <button className="w-full py-0.5 bg-[var(--blueSecondary)] text-[var(--white)] rounded text-[11px] whitespace-nowrap">
                        Ver Pré-Conselho
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Texto de feedback disponibilizado */}
              <div className="text-right text-[9px] text-gray-500 pr-2 pb-1 whitespace-nowrap">
                Feedback disponibilizado em {conselho.feedbackData}
              </div>
            </div>
          ))}
        </div>
      </main>
      </WhiteContainer>
    </div>
    </div>
  )
}