export default function Checkbox({ label }: { label: string }) {
  return (
    <>
      <input type="checkbox" name="checkbox" id="checkbox" />
      <label htmlFor="checkbox">{label}</label>
    </>
  )
}
