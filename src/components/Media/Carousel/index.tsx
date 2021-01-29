import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import MUICarousel from 'react-material-ui-carousel'
import styled from 'styled-components'

const CustomContainer = styled(Container)`
  &.MuiContainer-root {
    display: flex;
    justify-content: center;
    max-width: 100%;
    padding: 0;

    > [class^='Carousel'] {
      flex-grow: 2;
    }

    > div {
      background-color: rgba(255, 255, 255, 0.4);
      position: relative !important;
      width: calc((100vw - 1366px) / 2);
    }

    .prev-next-image {
      opacity: 0.4;
    }
  }
`

interface CarouselProps {
  items: Array<{ src: string; alt: string; link: string }>
  className?: string
  autoplay?: boolean
  autoplayInterval?: number
  indicatorBullets?: boolean
  animation?: 'fade' | 'slide'
  animationDuration?: number
  nextPrevFixed?: boolean
  nextPrevHidden?: boolean
  nextPrevFullHeight?: boolean
  indicatorContainerProps?: { className: string; style: object }
}

export default function Carousel(props: CarouselProps) {
  const {
    items,
    className,
    autoplay = true,
    autoplayInterval = 4000,
    indicatorBullets = true,
    animation = 'fade',
    animationDuration = 500,
    nextPrevFixed = false,
    nextPrevHidden = false,
    nextPrevFullHeight = true,
    indicatorContainerProps
  } = props

  const initialPrev = items.length - 1
  const [next, setNext] = useState(1)
  const [prev, setPrev] = useState(initialPrev)

  function handleNextImages(index: number, active: number) {
    const nextValue = index + 1 === items.length ? 0 : index + 1
    setNext(nextValue)
    setPrev(active)
  }

  function handlePrevImages(index: number, active: number) {
    const prevValue = index - 1 < 0 ? initialPrev : index - 1
    setNext(active)
    setPrev(prevValue)
  }

  return (
    <CustomContainer>
      <Image
        src={items[prev].src}
        alt={items[prev].alt}
        loading="lazy"
        layout="fill"
        objectFit="cover"
        className="prev-next-image"
      />
      <MUICarousel
        className={className}
        autoPlay={autoplay}
        interval={autoplayInterval}
        indicators={indicatorBullets}
        animation={animation}
        timeout={animationDuration}
        navButtonsAlwaysVisible={nextPrevFixed}
        navButtonsAlwaysInvisible={nextPrevHidden}
        fullHeightHover={nextPrevFullHeight}
        indicatorContainerProps={indicatorContainerProps}
        next={(index: number, active: number) =>
          handleNextImages(index, active)
        }
        prev={(index: number, active: number) =>
          handlePrevImages(index, active)
        }
      >
        {items.map((item, idx) => (
          <Item key={idx} item={item} />
        ))}
      </MUICarousel>
      <Image
        src={items[next].src}
        alt={items[next].alt}
        loading="lazy"
        layout="fill"
        objectFit="cover"
        className="prev-next-image"
      />
    </CustomContainer>
  )
}

function Item({ item }) {
  return (
    <Paper style={{ height: 270 }}>
      <Link href={item.link}>
        <a>
          <Image
            src={item.src}
            alt={item.alt}
            layout="fill"
            objectFit="cover"
            loading="lazy"
          />
        </a>
      </Link>
    </Paper>
  )
}
