import NextImage from 'next/image'

export default function Image(props) {
  const { type, src, alt, width, height, Component, onClick } = props

  return (
    <>
     {type === 'svg' ? <Component onClick={onClick} /> : <NextImage onClick={onClick} />}
    </>
  )
}
