import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { Flex, StyledBreadcrumb } from './style'

export default function Breadcrumb() {
  const router = useRouter()
  const { product } = router.query
  const [theme, setTheme] = useState('')

  useEffect(() => {
    const currentTheme = localStorage.getItem('bg')

    if (!currentTheme) return

    setTheme(currentTheme)
  }, [])

  if (router.pathname === '/') return null

  return (
    <StyledBreadcrumb currentTheme={theme}>
      {router.pathname !== '/' && (
        <Flex>
          <p>home /</p>
          <p>{router.pathname.split('/')[1]} /</p>
          {product && <p>{product}</p>}
        </Flex>
      )}
    </StyledBreadcrumb>
  )
}
