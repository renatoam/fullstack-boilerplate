import { useRouter } from "next/router";
import { Flex, StyledBreadcrumb } from "./style";

export default function Breadcrumb() {
  const router = useRouter()

  return (
    <StyledBreadcrumb>
      {router.pathname !== '/' && (
        <Flex>
          <p>home</p> /
          <p>{router.pathname.replace("/", "")}</p>
        </Flex>
      )}
    </StyledBreadcrumb>
  )
}
