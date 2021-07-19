import { useTranslation } from 'react-i18next'
import Social from 'src/common/components/DataDisplay/Social'
import Hero from 'src/modules/home/components/Hero'
import styled from 'styled-components'

// TODO: refatorar isso com Compound Components
// Usar componente Heading para os titules
const About = styled('section')`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: calc(100vh - 80px);
  text-align: center;
  color: ${props => props.theme.colors.textPrimary};
  margin: 20px 0;

  & > .title {
    h2 {
      font-size: ${props => props.theme.sizes.xlarge};
    }

    p {
      font-size: ${props => props.theme.sizes.large};
      font-weight: 400;
    }
  }

  .picture {
    .avatar {
      width: 300px;
      border: 5px solid ${props => props.theme.colors.backgroundLight};
      border-radius: 100%;
      overflow: hidden;

      img {
        width: 100%;
      }
    }

    .social {
      padding: 20px;
      display: flex;
      justify-content: center;
      svg {
        font-size: ${props => props.theme.sizes.xxlarge};
      }
    }
  }

  .description {
    display: flex;
    justify-content: center;
    p {
      font-size: ${props => props.theme.sizes.large};
      width: 50%;
    }
  }

  .know-more {
    display: flex;
    justify-content: center;

    button {
      background-color: ${props => props.theme.colors.primary};
      border: none;
      border-radius: 20px;
      cursor: pointer;
      padding: 20px;
      max-height: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: ${props => props.theme.colors.textSecondary};
      font-size: ${props => props.theme.sizes.large};
    }
  }
`

const Blog = styled('section')`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: calc(100vh - 80px);
  color: ${props => props.theme.colors.textPrimary};
  text-align: center;
  margin: 20px 0;

  .title {
    color: white;
    h2 {
      font-size: ${props => props.theme.sizes.xlarge};
    }

    p {
      font-size: ${props => props.theme.sizes.large};
      font-weight: 400;
    }
  }

  .articles {
    display: flex;
    gap: 15px;
    text-align: left;
    width: 60%;
    max-height: 350px;
    height: 100%;
  }

  .card {
    cursor: pointer;
    height: 100%;
    flex: 1 1 30%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    background-color: ${props => props.theme.colors.backgroundLight};
    color: ${props => props.theme.colors.textSecondary};
    border: 5px solid ${props => props.theme.colors.backgroundLight};
    border-radius: 20px;
    overflow: hidden;

    &:hover {
      .image {
        img {
          transform: scale(1.1);
        }
      }
    }
  }

  .image {
    height: 60%;

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      transition: all 0.4s ease-in-out;
    }
  }

  .text {
    margin-top: 10px;
    height: 40%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 10px 20px;

    p {
      overflow: hidden;
      max-height: 4rem;
      -webkit-box-orient: vertical;
      display: -webkit-box;
      text-overflow: ellipsis;
      -webkit-line-clamp: 3;
    }
  }

  .icon {
    display: flex;
    gap: 20px;
    margin-top: auto;

    img {
      width: 20px;
      filter: grayscale(1);
      transition: all 0.4s ease-in-out;

      &:hover {
        filter: grayscale(0);
        transform: scale(1.1);
      }
    }
  }

  .see-more {
    display: flex;
    justify-content: center;

    button {
      background-color: ${props => props.theme.colors.primary};
      border: none;
      border-radius: 20px;
      cursor: pointer;
      padding: 20px;
      max-height: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: ${props => props.theme.colors.textSecondary};
      font-size: ${props => props.theme.sizes.large};
    }
  }
`

const Study = styled('section')`
  display: flex;
  flex-direction: column;
  text-align: center;
  height: calc(100vh - 80px);
  margin: 20px 0;
  justify-content: space-evenly;

  .title {
    color: white;
    h2 {
      font-size: ${props => props.theme.sizes.xlarge};
    }

    p {
      font-size: ${props => props.theme.sizes.large};
      font-weight: 400;
    }
  }

  .folders {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 60%;
  }

  .folder {
    height: 100%;
    width: 350px;
    padding: 40px;
    text-align: left;
    display: flex;
    flex-direction: column;
    gap: 20px;

    &:first-child {
      background-color: ${props => props.theme.colors.primary};

      button {
        background-color: ${props => props.theme.colors.primaryHover};
        color: ${props => props.theme.colors.textPrimary};
      }
    }

    &:nth-child(2) {
      background-color: ${props => props.theme.colors.primaryHover};

      button {
        background-color: ${props => props.theme.colors.primary};
        color: ${props => props.theme.colors.textSecondary};
      }
    }

    &:last-child {
      background-color: ${props => props.theme.colors.backgroundLight};

      button {
        background-color: ${props => props.theme.colors.backgroundDark};
        color: ${props => props.theme.colors.textPrimary};
      }
    }

    h3 {
      font-size: ${props => props.theme.sizes.xxlarge};
    }

    p {
      font-size: ${props => props.theme.sizes.large};
    }

    button {
      border: none;
      border-radius: 20px;
      cursor: pointer;
      padding: 20px;
      max-height: 30px;
      max-width: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      color: ${props => props.theme.colors.textSecondary};
      font-size: ${props => props.theme.sizes.normal};
      margin-top: auto;
    }
  }
`

const Portfolio = styled('section')`
  display: flex;
  flex-direction: column;
  text-align: center;
  height: calc(100vh - 80px);
  margin: 20px 0;
  justify-content: space-evenly;

  .title {
    color: white;
    h2 {
      font-size: ${props => props.theme.sizes.xlarge};
    }

    p {
      font-size: ${props => props.theme.sizes.large};
      font-weight: 400;
    }
  }

  .portfolio {
    display: flex;
    flex-direction: column;
    align-items: center;

    > section {
      display: flex;
      justify-content: center;
      width: 80%;
      height: 50%;

      .description,
      .image {
        width: 30%;
        height: 100%;
        padding: 40px;
        display: flex;
      }

      .description {
        color: ${props => props.theme.colors.textPrimary};
        text-align: left;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        gap: 20px;

        h3 {
          font-size: ${props => props.theme.sizes.xlarge};
        }

        p {
          font-size: ${props => props.theme.sizes.large};
        }

        button {
          border: none;
          border-radius: 20px;
          cursor: pointer;
          padding: 20px;
          max-height: 30px;
          max-width: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: ${props => props.theme.colors.primary};
          color: ${props => props.theme.colors.textSecondary};
          font-size: ${props => props.theme.sizes.normal};
          margin-top: auto;
        }
      }

      .image {
        background-color: ${props => props.theme.colors.backgroundLight};
        justify-content: center;
        align-items: center;

        img {
          object-fit: contain;
          height: 100%;
          width: 100%;
        }
      }
    }

    .freelancer {
    }
  }
`

export default function Home() {
  const { t } = useTranslation()

  return (
    <>
      <Hero>
        <Hero.Image>
          {/* Substituir pelo componente do logotipo oficial depois que eu fizer as animações */}
          {/* Título da página será um h1 */}
          <img src="/images/logotipo.png" alt="Renato Melo" />
        </Hero.Image>
        <Hero.Scroll />
      </Hero>
      <About className="about">
        <section className="title">
          <h2>{t('modules.about.who')}</h2>
          <p>Se você é um desenvolvedor e precisa de ajuda, eu quero te ajudar.</p>
          <p>Se você é tem um negócio e precisa de um desenvolvedor, eu quero te ajudar.</p>
        </section>
        <section className="picture">
          <figure className="avatar">
            <img src="/images/profile-pic.png" alt="Renato Melo" />
          </figure>
          <figure className="social">
            <Social />
          </figure>
        </section>
        <section className="description">
          <p>
            Front-End Developer completely in love with the profession, I discovered that one of my
            favorite hobbies - and I have many - is to study programming. Today, I consider myself a
            web development evangelist.
          </p>
        </section>
        <section className="know-more">
          {/* Mudar isso pra um componente de Link do Next */}
          <button>
            <a href="/about">Saiba Mais</a>
          </button>
        </section>
      </About>
      <Blog>
        <section className="title">
          <h2>Blog</h2>
          <p>Eu também gosto de escrever sobre desenvolvimento web, html, css, javascript, etc.</p>
          <p>Espero que você encontre soluções e consiga aprender bastante com meus artigos.</p>
        </section>
        <section className="articles">
          <a className="card" href="https://medium.com/frontending/reduce-6d56a1281061">
            <figure className="image">
              <img
                src="https://miro.medium.com/max/1400/0*twh3AzPfgh8xiTw8"
                alt="Reduce Javascript"
              />
            </figure>
            <section className="text">
              <h3>Reduce: Higher-Order Functions</h3>
              {/* Limitar depois a quantidade de linhas/caracteres da descrição */}
              <p>
                Como sabemos, o reduce é uma das Higher-Order Functions, como map, filter, etc. Uma
                HOF recebe uma função que é executada para cada item de um array.
              </p>
              <figure className="icon">
                <img src="/icons/javascript.svg" alt="Conteúdo sobre Javascript" />
              </figure>
            </section>
          </a>
          <a
            className="card"
            href="https://medium.com/@renatoam/aprendendo-juntos-react-818c9c087878"
          >
            <figure className="image">
              <img
                src="https://miro.medium.com/max/1400/1*y6C4nSvy2Woe0m7bWEn4BA.png"
                alt="React JS"
              />
            </figure>
            <section className="text">
              <h3>Aprendendo juntos: React - Componentes</h3>
              <p>
                Aprendendo alguma tecnologia, ferramenta ou conceito novo e publicando durante o
                aprendizado
              </p>
              <figure className="icon">
                <img src="/icons/react.svg" alt="Conteúdo sobre React" />
              </figure>
            </section>
          </a>
          <a
            className="card"
            href="https://medium.com/@renatoam/css-dicas-e-boas-práticas-parte-i-e33ac6c62aa0"
          >
            <figure className="image">
              <img
                src="https://miro.medium.com/max/1400/1*MVaraOOVG-gVUkirc9g2tA.png"
                alt="CSS 3"
              />
            </figure>
            <section className="text">
              <h3>CSS: dicas e boas práticas - Parte I</h3>
              <p>
                Algumas dicas e boas práticas de CSS para iniciantes e quem quer que esteja
                interessado
              </p>
              <figure className="icon">
                <img src="/icons/css.svg" alt="Conteúdo sobre CSS" />
                <img src="/icons/javascript.svg" alt="Conteúdo sobre Javascript" />
                <img src="/icons/react.svg" alt="Conteúdo sobre React" />
              </figure>
            </section>
          </a>
        </section>
        <section className="see-more">
          {/* Mudar isso pra um componente de Link do Next */}
          <button>
            <a href="/blog">Veja Mais</a>
          </button>
        </section>
      </Blog>
      <Study>
        <section className="title">
          <h2>Estudos Dirigidos</h2>
          <p>Eu também gosto de escrever sobre desenvolvimento web, html, css, javascript, etc.</p>
          <p>Espero que você encontre soluções e consiga aprender bastante com meus artigos.</p>
        </section>
        {/* Colocar efeito path svg nas bordas */}
        <section className="folders">
          <section className="folder">
            <h3>Aprendendo comigo</h3>
            <p>
              Aqui, eu falo sobre assuntos, conceitos e tecnologias que eu estou aprendendo no
              momento e mostro um pouco do meu processo de aprendizado e meus métodos de estudo.
            </p>
            <button>
              <a href="/learning-with-me">Vem comigo!</a>
            </button>
          </section>
          <section className="folder">
            <h3>Aprendendo de mim</h3>
            <p>
              Aqui, eu falo um pouco sobre minha carreira, descrevo situações, falo sobre o
              dia-a-dia na empresa e ensino diversas coisas que aprendi no trabalho.
            </p>
            <button>
              <a href="/learning-from-me">Opa! Bora.</a>
            </button>
          </section>
          <section className="folder">
            <h3>
              Desafios <br /> e Testes
            </h3>
            <p>
              Quer me ver resolvendo desafios e criando pequenos projetos? São desafios e testes
              propostos por empresas e desafios de sites como Frontend Mentor.
            </p>
            <button>
              <a href="/challenges">Létisgou!</a>
            </button>
          </section>
        </section>
      </Study>
      <Portfolio>
        <section className="title">
          <h2>Portfólio</h2>
          <p>Alguns dos meus meus projetos profissionais.</p>
        </section>
        <section className="portfolio">
          <section className="freelancer">
            <section className="description">
              <h3>Projetos Freelancer</h3>
              <p>Estes são alguns projetos profissionais que desenvolvi como freelancer.</p>
              <button>Quero ver</button>
            </section>
            <figure className="image">
              <img src="/images/freelancer.svg" alt="Freelancer" />
            </figure>
          </section>
          <section className="employee">
            <figure className="image">
              <img src="/images/employee.svg" alt="Employee" />
            </figure>
            <section className="description">
              <h3>Projetos Corporativos</h3>
              <p>
                Estes são projetos que desenvolvi para empresas (como funcionário), seja sozinho ou
                com uma equipe.
              </p>
              <button>Vou conferir</button>
            </section>
          </section>
        </section>
      </Portfolio>
    </>
  )
}
