import { COMPANY_LINK, COMPANY_NAME } from '@constants/global';
import { StyledFooter } from './style';

export default function Footer() {
  return (
    <StyledFooter>
      <p>
        <a href={COMPANY_LINK} target="blank">{COMPANY_NAME}</a> -
        Copyright © 2021. Todos os direitos reservados. Desenvolvido por
        <a href="https://github.com/renatoam" target="blank"> Renato Melo</a>
      </p>
    </StyledFooter>
  )
}
