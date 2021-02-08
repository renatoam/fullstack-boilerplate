import Radio from '@material-ui/core/Radio';
import { useState } from 'react';
import Heading from '../../Foundation/Heading';

export default function Filter(props) {
  const { name, options, title, handleChange } = props

  const [value, setValue] = useState('female');

  function handleRadioChange(event) {
    handleChange(event.target.value)
    setValue(event.target.value);
  };

  return (
    <section>
      <Heading variant="h4" text="Filter by type: " />
      {options && options.map((option, idx) => {
        const id = option + idx
        return (
          <section key={id}>
            <label htmlFor={id}>{option.label}</label>
            <Radio
              checked={value === option.value}
              onChange={handleRadioChange}
              value={option.value}
              name={name}
              id={id}
              inputProps={{ 'aria-label': 'A' }}
            />
          </section>
        )
      })}
    </section>
  )
}
