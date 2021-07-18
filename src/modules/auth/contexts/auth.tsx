import Router from 'next/router'
import { parseCookies, setCookie } from 'nookies'
import { createContext, ReactNode, useContext, useEffect, useState } from 'react'
import axios from 'src/common/services/axios'
import { v4 as uuid } from 'uuid'

type User = {
  name: string
  email: string
  avatar: string
}

export type SignInData = {
  email: string
  password: string
}

interface AuthContextShape {
  user: User | null
  isAuthenticated: boolean
  signIn: (data: SignInData) => Promise<void>
}

export const AuthContext = createContext({} as AuthContextShape)
export const useAuth = () => useContext(AuthContext)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null)

  const isAuthenticated = !!user

  async function signIn(data: SignInData) {
    const { email, password } = data
    const { token, user } = await signInRequest({ email, password })

    /* por padrão, a funçpão setCookie recebe como primeiro parâmetro o contexto
     * da requisição, mas como nesse caso está sendo usada no browser, passamos undefined
     * porque não tem requisição
     */
    setCookie(undefined, 'authToken', token, {
      maxAge: 60 * 60 * 1 // 1 hour
    })

    axios.defaults.headers.Authorization = `Bearer ${token}`

    setUser(user)

    Router.push('/')
  }

  useEffect(() => {
    const { authToken: token } = parseCookies()

    if (token) {
      recoverUserInfo().then(response => setUser(response.user))
    }
  }, [])

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signIn }}>
      {children}
    </AuthContext.Provider>
  )
}

// Simulate backend service - Change to real API after tests

type SignInRequestData = {
  email: string
  password: string
}

const delay = (amount = 750) => new Promise(resolve => setTimeout(resolve, amount))

export async function signInRequest(data: SignInRequestData) {
  await delay()

  return {
    token: uuid(),
    user: {
      name: 'Renato Melo',
      email: 'renato@frontending.com.br',
      avatar: 'https://github.com/renatoam.png'
    }
  }
}

export async function recoverUserInfo() {
  await delay()

  return {
    user: {
      name: 'Renato Melo',
      email: 'renato@frontending.com.br',
      avatar: 'https://github.com/renatoam.png'
    }
  }
}
