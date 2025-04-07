"use client"

import { useState, useEffect } from "react"
import { HeaderDemo } from "@/components/Header/HeaderDemo"
import { Header } from "@/components/Header/Header"
import { BlueBackground } from "@/components/topBar/BlueBackground"
import { WhiteContainer } from "@/components/White-Container"
import { ConfigurationTitle } from "@/components/topBar/ConfigurationTitle"
import { Loading } from "@/components/Loading"
import ConfiguracoesPanel from "@/components/ConfiguracoesPanel";

export default function Configuration() {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 1000)
        return () => clearTimeout(timer)
      }, [])
    return (
        <div className="min-h-screen bg-gray-100 mx-auto">
        <Header />
        
        <BlueBackground>
            <ConfigurationTitle iconWidth={40} iconHeight={40} textSize={"3xl"} />
        </BlueBackground>

        <div className="container flex justify-center w-screen mx-auto">
            <WhiteContainer>
                {isLoading ? (
                    <Loading />
                ) : (
                    <div className="space-y-8">
                        <ConfiguracoesPanel />
                    </div>
                )}
            </WhiteContainer>
        </div>
        <HeaderDemo />
    </div>
);
}