import Icon from '../../Foundation/Icon'

export default function Social(props) {
  const { medias } = props
  return (
    <section>
      {medias.map((media, idx) => {
        return <Icon key={idx} icon={media} />
      })}
    </section>
  )
}
