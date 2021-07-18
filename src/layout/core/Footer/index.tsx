import { StyledFooter } from './style'

export default function Footer() {
  return (
    <StyledFooter>
      <p>
        <a href={process.env.NEXT_PUBLIC_COMPANY_LINK} target="blank">
          {process.env.NEXT_PUBLIC_COMPANY_NAME}
        </a>{' '}
        - Copyright © 2021. Todos os direitos reservados. Desenvolvido por
        <a href="https://github.com/renatoam" target="blank">
          {' '}
          {process.env.NEXT_PUBLIC_DEVELOPER}
        </a>
      </p>
    </StyledFooter>
  )
}
