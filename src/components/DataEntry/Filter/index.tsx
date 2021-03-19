import Heading from '@components/Foundation/Heading';
import { FilterProps } from '@helpers/interfaces';
import Radio from '@material-ui/core/Radio';
import { useState } from 'react';
import { StyledBox, StyledFilterContainer } from './style';

export default function Filter(props: FilterProps) {
  const { name, options, title, handleChange } = props

  const [value, setValue] = useState('');

  function handleRadioChange(value: string) {
    handleChange(value)
    setValue(value);
  };

  return (
    <StyledFilterContainer>
      <Heading variant="h2">
        {title}
      </Heading>
      <StyledBox>
        {options?.map((option, idx) => {
          const id = option + idx
          return (
            <section key={id}>
              <label htmlFor={id}>{option}</label>
              <Radio
                checked={value === option}
                onChange={event => handleRadioChange(event.target.value)}
                value={option}
                name={name}
                id={id}
              />
            </section>
          )
        })}
      </StyledBox>
    </StyledFilterContainer>
  )
}
