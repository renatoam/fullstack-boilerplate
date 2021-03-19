import { useRouter } from 'next/router';
import { Flex, StyledBreadcrumb } from './style';

export default function Breadcrumb() {
  const router = useRouter()
  const { product } = router.query

  return (
    <StyledBreadcrumb>
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
