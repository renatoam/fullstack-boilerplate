import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

import { ControlGroup } from './style'

export default function ControlButton(props: any) {
  const { handleAddingItems, handleRemovingItems, handleChange, value, error } = props

  return (
    <ControlGroup>
      <Button
        id="remove"
        variant="contained"
        color="primary"
        onClick={() => handleRemovingItems('REMOVE')}
      >
        -
      </Button>
      <TextField
        onChange={event => handleChange(Number(event.target.value))}
        value={value}
        error={!!error}
        helperText={error}
      />
      <Button id="add" variant="contained" color="primary" onClick={() => handleAddingItems('ADD')}>
        +
      </Button>
    </ControlGroup>
  )
}
