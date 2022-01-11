import { useForm } from '@hooks/useForm'

import { Form } from '../../../../app/styles/pages/Registration'

/**
 * There are many ways to specify the validation rules for our form attributes.
 * The three ways that would allow for the greatest flexibility are the following:
 *
 * Required: Marks an attribute as required and throws a validation error if it is missing.
 *
 * Pattern: This allows you to specify a regular expression that the attribute
 * must match to be considered valid.
 *
 * Custom: A custom function that accepts the value as a parameter and which returns a boolean.
 * If it returns true, the field is valid.
 */

const validations = {
  validations: {
    name: {
      pattern: {
        value: '^[A-Za-z]*$',
        message: "You're not allowed to use special characters or numbers in your name."
      }
    },
    age: {
      custom: {
        isValid: (value: string) => parseInt(value, 10) > 17,
        message: 'You have to be at least 18 years old.'
      }
    },
    password: {
      required: {
        value: true,
        message: 'This field is required'
      },
      custom: {
        isValid: (value: string | any[]) => value?.length > 6,
        message: 'The password needs to be at least 6 characters long.'
      }
    }
  },
  onSubmit: () => alert('User submitted!')
}

type Gender = 'male' | 'female' | 'non-binary'

interface User {
  name: string
  age: number
  email: string
  gender: Gender
  password: string
}

export default function Forms() {
  const { handleSubmit, handleChange, data: user, errors } = useForm<User>(validations)

  return (
    <main>
      <h1>Formulários</h1>
      <article>
        <Form onSubmit={handleSubmit}>
          <h2>Registration</h2>
          <input
            placeholder="Name*"
            value={user.name || ''}
            onChange={handleChange('name')}
            required
          />
          {errors.name && <p className="error">{errors.name}</p>}
          <input
            placeholder="Age"
            type="number"
            value={user.age || ''}
            onChange={handleChange<number>('age', value => parseInt(value, 10))}
          />
          {errors.age && <p className="error">{errors.age}</p>}
          <input
            placeholder="Email*"
            type="email"
            value={user.email || ''}
            onChange={handleChange('email')}
          />
          <input
            placeholder="Password*"
            type="password"
            value={user.password || ''}
            onChange={handleChange('password')}
          />
          {errors.password && <p className="error">{errors.password}</p>}
          <select onChange={handleChange('gender')} required>
            <option value="" disabled selected>
              Select gender*
            </option>
            <option value="male" selected={user.gender === 'male'}>
              Male
            </option>
            <option value="female" selected={user.gender === 'female'}>
              Female
            </option>
            <option value="non-binary" selected={user.gender === 'non-binary'}>
              Non-binary
            </option>
          </select>
          <button type="submit" className="submit">
            Submit
          </button>
        </Form>
      </article>
    </main>
  )
}
