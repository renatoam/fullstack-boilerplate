import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import { ControlGroup } from './style'

export default function ControlButton(props) {
  const { handleAddingItems, handleRemovingItems, handleChange, value, error } = props

  return (
    <ControlGroup>
      <Button
        id="remove"
        variant="contained"
        color="primary"
        onClick={event => handleRemovingItems('REMOVE')}
      >-</Button>
      <TextField
        onChange={event => handleChange(event.target.value)}
        value={value}
        error={!!error}
        helperText={error}
      />
      <Button
        id="add"
        variant="contained"
        color="primary"
        onClick={event => handleAddingItems('ADD')}
      >+</Button>
    </ControlGroup>
  )
}

ControlButton.propTypes = {
  action: PropTypes.string,
  error: PropTypes.string,
  handleAddingItems: PropTypes.func,
  handleRemovingItems: PropTypes.func,
  handleChange: PropTypes.func,
  value: PropTypes.number
}
