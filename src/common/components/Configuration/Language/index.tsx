import { useState } from 'react'
import { useTranslation } from 'react-i18next'

export default function Language() {
  const { i18n } = useTranslation()
  const [language, setLanguage] = useState('pt')

  /**
   * TODO: refatorar isso aqui, eu só fiz assim pra ver funcionando o botão
   * - Colocar o tipo de evento correto pra pegar o ID
   * - Remover esse estado, só coloquei provisório
   * - Definir a forma correta de pegar a linguagem
   */
  function handleLanguage(event: any) {
    const { id } = event.target
    const newLanguage = id === 'pt' ? 'en' : 'pt'

    i18n.changeLanguage(id)
    setLanguage(newLanguage)
  }

  return <button id={language} onClick={handleLanguage}></button>
}
