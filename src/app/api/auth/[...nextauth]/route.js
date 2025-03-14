import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { cookies } from "next/headers";

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

export default NextAuth(authOptions)