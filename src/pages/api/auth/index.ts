import { NextApiRequest, NextApiResponse } from "next";

export default function signIn(request: NextApiRequest, response: NextApiResponse) {
  const { email, password } = request.body

  if (!email)
    return response.status(400).json({ message: 'Email obrigatório.' })

  if (!password)
    return response.status(400).json({ message: 'Nenhuma senha informada.' })

  return response.status(200).json({ message: 'Usuário logado com sucesso!' })
}