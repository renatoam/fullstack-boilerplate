import { ChangeEvent, FormEvent, useState } from 'react'

/**
 * "T extends Record" significa que ele espera um objeto
 * "keyof T" especifica o tipo das chaves, ou seja, precisam ser iguais às chaves de T
 * "= {}" quer dizer que passamos um objeto vazio como default se nada for passado
 * "any" é o segundo parâmetro do Record e representa os tipos dos valores das chaves
 *
 * Nem todas as chaves são requeridas, por isso o uso do Partial
 */

interface Validation {
  required?: {
    value: boolean
    message: string
  }
  pattern?: {
    value: string
    message: string
  }
  custom?: {
    isValid: (value: string) => boolean
    message: string
  }
}

type Validations<T extends {}> = Partial<Record<keyof T, Validation>>

// O uso do Partial é pra permitir objetos vazios
type ErrorRecord<T> = Partial<Record<keyof T, string>>

export const useForm = <T extends Record<keyof T, any> = {}>(options?: {
  validations?: Validations<T>
  initialValues?: Partial<T>
  onSubmit?: () => void
}) => {
  // relacionamos o valor inicial a T porque {} é um subconjunto de T
  const [data, setData] = useState<T>((options?.initialValues || {}) as T)
  const [errors, setErrors] = useState<ErrorRecord<T>>({})

  /**
   * unknown é estendido pra poder usar tipos genericos com arrow function
   * o value em sanitizeFn é string, porque o change event vai sempre retornar string
   * o retorno é desconhecido, por isso o uso do genérico S
   * a função retorna outra função, que é de fato o event handler
   */
  const handleChange =
    <S extends unknown>(key: keyof T, sanitizeFn?: (value: string) => S) =>
    (event: ChangeEvent<HTMLInputElement & HTMLSelectElement>) => {
      const value = sanitizeFn ? sanitizeFn(event.target.value) : event.target.value

      setData({
        ...data,
        [key]: value
      })
    }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const validations = options?.validations

    if (validations) {
      let valid = true
      const newErrors: ErrorRecord<T> = {}

      for (const key in validations) {
        // value of the field we're validating
        const value = data[key]
        // the matching validation rule for this key
        const validation = validations[key]

        // REQUIRED
        if (validation?.required?.value && !value) {
          valid = false
          newErrors[key] = validation?.required?.message
        }

        // PATTERN
        const pattern = validation?.pattern

        if (pattern?.value && !RegExp(pattern.value).test(value)) {
          valid = false
          newErrors[key] = pattern.message
        }

        // CUSTOM
        const custom = validation?.custom

        if (custom?.isValid && !custom.isValid(value)) {
          valid = false
          newErrors[key] = custom.message
        }
      }

      if (!valid) {
        setErrors(newErrors)
        return // this return is to order the form doesnt submit
      }
    }

    setErrors({})

    if (options?.onSubmit) options.onSubmit()
  }

  return {
    data,
    errors,
    handleChange,
    handleSubmit
  }
}
