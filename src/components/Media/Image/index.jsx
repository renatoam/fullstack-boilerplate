import NextImage from 'next/image'
import PropTypes from 'prop-types'

export default function Image(props) {
  const { svg, Component, onClick, ...imageProps } = props

  return (
    <>
     {svg ? (
        <Component onClick={onClick} />
     ) : (
        <NextImage onClick={onClick} {...imageProps} />
     )}
    </>
  )
}

Image.propTypes = {
  svg: PropTypes.bool,
  Component: PropTypes.element,
  onClick: PropTypes.func
}
