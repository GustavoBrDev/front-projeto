"use client"
import Link from "next/link"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/help/Tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/help/Card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/help/Accordion"
import { Badge } from "@/components/help/Badge"
import { Button } from "@/components/help/Button"
import { Separator } from "@/components/help/Separator"
import { Header } from "@/components/Header/Header"
import { BlueBackground } from "@/components/topBar/BlueBackground"
import { InfoTitle } from "@/components/topBar/InfoTitle"

export default function HelpPage() {
  return (
    <div className="flex flex-col min-h-screen">
        <Header/>
        <BlueBackground>
            <InfoTitle iconWidth={40} iconHeight={40}/>
        </BlueBackground>

      <main className="flex-grow bg-gray-50">
        <div className="container mx-auto py-8 px-4 max-w-7xl">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight mb-4">Bem-vindo ao Conselho do Estudante</h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Uma plataforma completa para gerenciamento dos conselhos de classe do SENAI
            </p>
          </div>

          <Tabs defaultValue="about" className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-5 mb-8 bg-[var(--white)]">
              <TabsTrigger value="about">Sobre</TabsTrigger>
              <TabsTrigger value="roles">Perfis de Usuário</TabsTrigger>
              <TabsTrigger value="features">Funcionalidades</TabsTrigger>
              <TabsTrigger value="technical">Informações Técnicas</TabsTrigger>
              <TabsTrigger value="start">Primeiros Passos</TabsTrigger>
            </TabsList>

            {/* About Section */}
            <TabsContent value="about" className="space-y-6">
              <Card>
                <CardHeader className="bg-[var(--white)] border-b border-gray-200">
                  <CardTitle>Sobre o Conselho do Estudante</CardTitle>
                  <CardDescription>Conheça mais sobre nossa plataforma</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 pt-6">
                  <p>
                    O Conselho do Estudante é uma aplicação Web responsiva desenvolvida especificamente para gerenciar
                    os conselhos de classe do SENAI. Nossa plataforma foi projetada para funcionar em todos os
                    dispositivos, com foco principal na versão Desktop e suporte otimizado para dispositivos móveis.
                  </p>
                  <p>
                    Este projeto foi solicitado pela equipe pedagógica da instituição, com início do desenvolvimento em
                    Fevereiro de 2025 e conclusão estimada para Abril do mesmo ano.
                  </p>
                  <div className="flex flex-col md:flex-row gap-4 mt-6">
                    <Card className="flex-1 p-4 bg-[var(--white)]">
                      <div className="flex items-center gap-3 mb-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-[var(--bluePrimary)]"
                        >
                          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                          <circle cx="9" cy="7" r="4" />
                          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                        </svg>
                        <h3 className="font-medium">Múltiplos Perfis</h3>
                      </div>
                      <p className="text-sm text-gray-600">
                        Suporte para 5 tipos de usuários com diferentes permissões e funcionalidades
                      </p>
                    </Card>
                    <Card className="flex-1 p-4 bg-[var(--white)]">
                      <div className="flex items-center gap-3 mb-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-[var(--bluePrimary)]"
                        >
                          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                        </svg>
                        <h3 className="font-medium">Chat Integrado</h3>
                      </div>
                      <p className="text-sm text-gray-600">Comunicação direta entre todos os usuários da plataforma</p>
                    </Card>
                    <Card className="flex-1 p-4 bg-[var(--white)]">
                      <div className="flex items-center gap-3 mb-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-[var(--bluePrimary)]"
                        >
                          <line x1="18" y1="20" x2="18" y2="10" />
                          <line x1="12" y1="20" x2="12" y2="4" />
                          <line x1="6" y1="20" x2="6" y2="14" />
                        </svg>
                        <h3 className="font-medium">Dashboards</h3>
                      </div>
                      <p className="text-sm text-gray-600">
                        Visualização de dados e métricas importantes para a equipe pedagógica
                      </p>
                    </Card>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* User Roles Section */}
            <TabsContent value="roles" className="space-y-6">
              <Card>
                <CardHeader className="bg-[var(--white)] border-b border-gray-200">
                  <CardTitle>Perfis de Usuário</CardTitle>
                  <CardDescription>Conheça os diferentes tipos de usuários e suas permissões</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="aluno">
                      <AccordionTrigger className="hover:text-[var(--blueTertiary)]">
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className="bg-[var(--white)] text-[var(--bluePrimary)] border-[var(--bluePrimary)]">
                            Aluno
                          </Badge>
                          <span>Acesso básico ao sistema</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="pl-4 space-y-2">
                        <p className="text-sm text-gray-600 mb-2">Os alunos podem:</p>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li>Visualizar o histórico de feedbacks</li>
                          <li>Alterar configurações básicas</li>
                          <li>Utilizar o chat integrado</li>
                          <li>Visualizar seu perfil</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="representante">
                      <AccordionTrigger className="hover:text-[var(--blueTertiary)]">
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className="bg-[var(--white)] text-[var(--bluePrimary)] border-[var(--bluePrimary)]">
                            Representante
                          </Badge>
                          <span>Representante de turma</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="pl-4 space-y-2">
                        <p className="text-sm text-gray-600 mb-2">Os representantes podem:</p>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li>Visualizar o histórico de feedbacks</li>
                          <li>Alterar configurações básicas</li>
                          <li>Utilizar o chat integrado</li>
                          <li>Visualizar seu perfil</li>
                          <li>Cadastrar os pré-conselhos da turma</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="professor">
                      <AccordionTrigger className="hover:text-[var(--blueTertiary)]">
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className="bg-[var(--white)] text-[var(--bluePrimary)] border-[var(--bluePrimary)]">
                            Professor
                          </Badge>
                          <span>Docentes da instituição</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="pl-4 space-y-2">
                        <p className="text-sm text-gray-600 mb-2">Os professores podem:</p>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li>Visualizar o histórico de feedbacks (por turma/disciplina)</li>
                          <li>Alterar configurações básicas</li>
                          <li>Visualizar seu perfil</li>
                          <li>Utilizar o chat integrado</li>
                          <li>Cadastrar um pré-conselho sobre os alunos</li>
                          <li>Visualizar pré-conselhos</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="tecnico">
                      <AccordionTrigger className="hover:text-[var(--blueTertiary)]">
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className="bg-[var(--white)] text-[var(--bluePrimary)] border-[var(--bluePrimary)]">
                            Técnico Pedagógico
                          </Badge>
                          <span>Equipe pedagógica</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="pl-4 space-y-2">
                        <p className="text-sm text-gray-600 mb-2">Os técnicos pedagógicos podem:</p>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li>Alterar configurações básicas</li>
                          <li>Visualizar seu perfil</li>
                          <li>Gerenciar conselhos de classe</li>
                          <li>Visualizar dashboards</li>
                          <li>Utilizar o chat integrado</li>
                          <li>Gerenciar usuários (supervisores, professores, alunos e representantes)</li>
                          <li>Gerenciar turmas (importação com CSV)</li>
                          <li>Gerenciar cursos</li>
                          <li>Gerenciar disciplinas</li>
                          <li>Gerenciar professores PCP</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="orientador">
                      <AccordionTrigger className="hover:text-[var(--blueTertiary)]">
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className="bg-[var(--white)] text-[var(--bluePrimary)] border-[var(--bluePrimary)]">
                            Orientador Pedagógico
                          </Badge>
                          <span>Coordenação pedagógica</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="pl-4 space-y-2">
                        <p className="text-sm text-gray-600 mb-2">Os orientadores pedagógicos podem:</p>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li>Alterar configurações básicas</li>
                          <li>Visualizar seu perfil</li>
                          <li>Gerenciar conselhos de classe</li>
                          <li>Visualizar dashboards</li>
                          <li>Utilizar o chat integrado</li>
                          <li>Gerenciar usuários (supervisores, professores, alunos e representantes)</li>
                          <li>Gerenciar turmas (importação com CSV)</li>
                          <li>Gerenciar cursos</li>
                          <li>Gerenciar disciplinas</li>
                          <li>Gerenciar professores PCP</li>
                          <li>Gerenciar a equipe pedagógica</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="admin">
                      <AccordionTrigger className="hover:text-[var(--blueTertiary)]">
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className="bg-[var(--white)] text-[var(--bluePrimary)] border-[var(--bluePrimary)]">
                            Administrador
                          </Badge>
                          <span>Administração do sistema</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="pl-4 space-y-2">
                        <p className="text-sm text-gray-600 mb-2">O administrador pode:</p>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li>Gerenciar todos os usuários do sistema</li>
                          <li>Foco principal na gestão dos orientadores pedagógicos</li>
                          <li>Acesso completo a todas as funcionalidades da plataforma</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Features Section */}
            <TabsContent value="features" className="space-y-6">
              <Card>
                <CardHeader className="bg-[var(--white)] border-b border-gray-200">
                  <CardTitle>Principais Funcionalidades</CardTitle>
                  <CardDescription>Conheça os recursos disponíveis na plataforma</CardDescription>
                </CardHeader>
                <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-[var(--bluePrimary)]"
                      >
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                        <polyline points="14 2 14 8 20 8" />
                        <line x1="16" y1="13" x2="8" y2="13" />
                        <line x1="16" y1="17" x2="8" y2="17" />
                        <line x1="10" y1="9" x2="8" y2="9" />
                      </svg>
                      <h3 className="font-medium">Gestão de Pré-Conselhos</h3>
                    </div>
                    <p className="text-sm text-gray-600">
                      Cadastro e visualização de pré-conselhos por professores e representantes, permitindo uma
                      preparação adequada para os conselhos de classe.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-[var(--bluePrimary)]"
                      >
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                      </svg>
                      <h3 className="font-medium">Chat Integrado</h3>
                    </div>
                    <p className="text-sm text-gray-600">
                      Sistema de comunicação interna que permite a troca de mensagens entre todos os usuários da
                      plataforma, facilitando a comunicação.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-[var(--bluePrimary)]"
                      >
                        <line x1="18" y1="20" x2="18" y2="10" />
                        <line x1="12" y1="20" x2="12" y2="4" />
                        <line x1="6" y1="20" x2="6" y2="14" />
                      </svg>
                      <h3 className="font-medium">Dashboards</h3>
                    </div>
                    <p className="text-sm text-gray-600">
                      Visualização de dados e métricas importantes para a equipe pedagógica, permitindo análises e
                      tomadas de decisão baseadas em dados.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-[var(--bluePrimary)]"
                      >
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                      </svg>
                      <h3 className="font-medium">Gestão de Usuários</h3>
                    </div>
                    <p className="text-sm text-gray-600">
                      Cadastro, edição e gerenciamento de diferentes tipos de usuários, com controle de permissões
                      específicas para cada perfil.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-[var(--bluePrimary)]"
                      >
                        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                        <path d="M6 12v5c3 3 9 3 12 0v-5" />
                      </svg>
                      <h3 className="font-medium">Gestão de Turmas</h3>
                    </div>
                    <p className="text-sm text-gray-600">
                      Criação e gerenciamento de turmas, com suporte para importação de dados via CSV, facilitando a
                      configuração inicial do sistema.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-[#0055a4]"
                      >
                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                      </svg>
                      <h3 className="font-medium">Gestão de Cursos e Disciplinas</h3>
                    </div>
                    <p className="text-sm text-gray-600">
                      Cadastro e gerenciamento de cursos e disciplinas, permitindo a organização adequada da estrutura
                      educacional da instituição.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Technical Information */}
            <TabsContent value="technical" className="space-y-6">
              <Card>
                <CardHeader className="bg-[var(--white)] border-b border-gray-200">
                  <CardTitle>Informações Técnicas</CardTitle>
                  <CardDescription>Detalhes sobre a arquitetura e tecnologias utilizadas</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6 pt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card className="p-4 bg-[#e6f4fa]">
                      <h3 className="font-medium mb-2">Frontend</h3>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center gap-2">
                          <Badge className="bg-[var(--blueTertiary)] hover:bg-[var(--blueTertiary)]">Next.js</Badge>
                          <span className="text-gray-600">Framework React para renderização</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Badge className="bg-[var(--blueTertiary)] hover:bg-[var(--blueTertiary)]">React</Badge>
                          <span className="text-gray-600">Biblioteca para interfaces</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Badge className="bg-[var(--blueTertiary)] hover:bg-[var(--blueTertiary)]">App Router</Badge>
                          <span className="text-gray-600">Sistema de rotas</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Badge className="bg-[var(--blueTertiary)] hover:bg-[var(--blueTertiary)]">UI Libraries</Badge>
                          <span className="text-gray-600">Componentes prontos</span>
                        </li>
                      </ul>
                    </Card>

                    <Card className="p-4 bg-[#e6f4fa]">
                      <h3 className="font-medium mb-2">Backend</h3>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center gap-2">
                          <Badge className="bg-[var(--blueTertiary)] hover:bg-[var(--blueTertiary)]">Spring Boot</Badge>
                          <span className="text-gray-600">Framework Java</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Badge className="bg-[var(--blueTertiary)] hover:bg-[var(--blueTertiary)]">API RESTful</Badge>
                          <span className="text-gray-600">Comunicação entre sistemas</span>
                        </li>
                      </ul>
                      <div className="mt-4">
                        <Link
                          href="https://github.com/GustavoBrDev/projeto-conselho"
                          className="text-sm flex items-center gap-1 text-[var(--bluePrimary)] hover:underline"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="12"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                            <polyline points="15 3 21 3 21 9" />
                            <line x1="10" y1="14" x2="21" y2="3" />
                          </svg>
                          Acessar repositório do backend
                        </Link>
                      </div>
                    </Card>
                  </div>

                  <div className="mt-6">
                    <h3 className="font-medium mb-4">Design e Protótipo</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      O projeto possui um protótipo amplamente desenvolvido e atualizado conforme necessidade. Tal
                      protótipo foi elaborado na Plataforma Figma e pode ser acessado através do link abaixo:
                    </p>
                    <Link
                      href="https://www.figma.com/design/0fpIseqAP7hBrQa0LOPCUi/Prot%C3%B3tipo-SENAI?node-id=0-1&t=Z8737biCY2sqAGdd-1"
                      target="_blank"
                      className="inline-flex items-center gap-2 text-[var(--bluePrimary)] hover:underline"
                    >
                      <Button variant="outline" size="sm" className="gap-2 border-[var(--blueTertiary)] text-[var(--bluePrimary)]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                          <polyline points="15 3 21 3 21 9" />
                          <line x1="10" y1="14" x2="21" y2="3" />
                        </svg>
                        Acessar Protótipo no Figma
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Getting Started */}
            <TabsContent value="start" className="space-y-6">
              <Card>
                <CardHeader className="bg-[var(--white)] border-b border-gray-200">
                  <CardTitle>Primeiros Passos</CardTitle>
                  <CardDescription>Como começar a utilizar o Conselho do Estudante</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6 pt-6">
                  <div className="space-y-4">
                    <h3 className="font-medium text-lg">1. Acesso ao Sistema</h3>
                    <p className="text-sm text-gray-600">
                      Para acessar o sistema, utilize as credenciais fornecidas pela equipe pedagógica. Caso não tenha
                      recebido suas credenciais, entre em contato com o administrador do sistema.
                    </p>

                    <div className="bg-[var(--white)] p-4 rounded-md">
                      <div className="flex items-center gap-2 mb-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-[var(--bluePrimary)]"
                        >
                          <circle cx="12" cy="12" r="10" />
                          <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                          <line x1="12" y1="17" x2="12.01" y2="17" />
                        </svg>
                        <span className="font-medium text-sm">Dica</span>
                      </div>
                      <p className="text-xs text-gray-600">
                        Na primeira vez que acessar o sistema, você será solicitado a alterar sua senha. Escolha uma
                        senha segura que contenha letras, números e caracteres especiais.
                      </p>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <h3 className="font-medium text-lg">2. Navegação</h3>
                    <p className="text-sm text-gray-600">
                      A navegação no sistema é intuitiva e organizada por seções. No menu lateral, você encontrará todas
                      as funcionalidades disponíveis para o seu perfil de usuário.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <Card className="p-3">
                        <div className="flex items-center gap-2 mb-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-[var(--bluePrimary)]"
                          >
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                            <circle cx="12" cy="7" r="4" />
                          </svg>
                          <span className="font-medium text-sm">Perfil</span>
                        </div>
                        <p className="text-xs text-gray-600">Visualize e edite suas informações pessoais</p>
                      </Card>

                      <Card className="p-3">
                        <div className="flex items-center gap-2 mb-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-[var(--bluePrimary)]"
                          >
                            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                          </svg>
                          <span className="font-medium text-sm">Chat</span>
                        </div>
                        <p className="text-xs text-gray-600">Comunique-se com outros usuários</p>
                      </Card>

                      <Card className="p-3">
                        <div className="flex items-center gap-2 mb-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-[var(--bluePrimary)]"
                          >
                            <circle cx="12" cy="12" r="3" />
                            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                          </svg>
                          <span className="font-medium text-sm">Configurações</span>
                        </div>
                        <p className="text-xs text-gray-600">Personalize suas preferências</p>
                      </Card>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <h3 className="font-medium text-lg">3. Suporte</h3>
                    <p className="text-sm text-gray-600">Em caso de dúvidas ou problemas, você pode:</p>

                    <ul className="list-disc pl-5 space-y-2 text-sm">
                      <li>Consultar esta página de ajuda para informações gerais</li>
                      <li>Utilizar o chat integrado para contatar a equipe de suporte</li>
                      <li>
                        Enviar um e-mail para <span className="font-medium">suporte@conselhoestudante.senai.br</span>
                      </li>
                    </ul>

                    <div className="mt-6 flex justify-center">
                      <Button className="gap-2 bg-[var(--blueTertiary)] hover:bg-[var(--blueTertiary)]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                        </svg>
                        Contatar Suporte
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>


        </div>
      </main>

      {/* Chat button flutuante */}
      <div className="fixed bottom-6 right-6">
        <button className="w-12 h-12 bg-[var(--bluePrimary)] text-[var(--white)] rounded-full shadow-lg flex items-center justify-center hover:bg-[#004080] transition-colors">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        </button>
      </div>
    </div>
  )
}
