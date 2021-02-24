import Radio from '@material-ui/core/Radio';
import PropTypes from 'prop-types'
import { useState } from 'react';
import Heading from '../../Foundation/Heading';
import { StyledFilterContainer, StyledBox } from './style'

export default function Filter(props) {
  const { name, options, title, handleChange } = props

  const [value, setValue] = useState('');

  function handleRadioChange(event) {
    handleChange(event.target.value)
    setValue(event.target.value);
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
                onChange={handleRadioChange}
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

Filter.propTypes = {
  name: PropTypes.string,
  options: PropTypes.array,
  title: PropTypes.string,
  handleChange: PropTypes.func
}
