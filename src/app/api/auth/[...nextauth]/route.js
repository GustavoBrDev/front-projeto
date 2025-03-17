import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { cookies } from "next/headers";

/**
 * Classe responsável por configurar as opções de autenticação do NextAuth.
 *
 * @author Gustavo Stinghen
 * @author Joana Reinert Voigt(documentação)
 * @since 13/03/2025
 */
export const authOptions = {
  pages: {
    signIn: '/login',
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" }
      },
        /**
       * Função de autorização para o provedor de credenciais.
       *
       * @param {object} credentials - Credenciais informadas pelo usuário.
       * @param {object} req - Requisição HTTP.
       * @return {object|null} - Dados do usuário autenticado ou null em caso de erro.
       */
      async authorize(credentials, req) {
          
          if ( ! credentials ){
            throw new Error('Email e senha obrigatórios.');
          }

          try {
            const res = await fetch('http://localhost:9090/login', {
              method: 'POST',
              body: JSON.stringify(
                {
                  email: credentials.email,
                  password: credentials.password
                }
              ),
              headers: {
                'Content-Type': 'application/json'
              }
            })
            
            if ( res.status != 200 ) return null;

            const authData = await res.json();

            if ( !authData.jwt || ! authData.user ) return null;

            cookies().set({
              name: 'jwt',
              value: authData.jwt
            })

            return ({
              id: authData.user.id,
              name: authData.user.name,
              email: authData.user.email,
              image: authData.user.image,
              role: authData.user.role,
              notifications: authData.user.notifications
            })

          } catch (error) {
              console.log(error)
            }
          }
      })
  ]
}

export default NextAuth(authOptions);