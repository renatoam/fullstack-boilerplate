import Heading from '../../Foundation/Heading'
import Checkbox from '../Checkbox'

export default function Filter() {
  return (
    <section>
      <Heading />
      <section className="options">
        <Checkbox label="Especial" />
        <Checkbox label="Normal" />
        <Checkbox label="Trabalhoso" />
      </section>
    </section>
  )
}
