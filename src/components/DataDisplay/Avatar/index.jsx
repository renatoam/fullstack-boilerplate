export default function Avatar(props) {
  const { path, alt } = props

  return (
    <figure>
      <img src={path} alt={alt} />
    </figure>
  )
}
