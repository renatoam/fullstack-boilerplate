export default function Checkbox(props) {
  const { label } = props

  return (
    <>
      <input type="checkbox" name="checkbox" id="checkbox" />
      <label htmlFor="checkbox">{label}</label>
    </>
  )
}
