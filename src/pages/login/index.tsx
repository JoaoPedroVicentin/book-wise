import Image from 'next/image'
import { Container, ImageColumn, LoginColumn, OptionsLogin } from './styles'

import imageLogin from '../../assets/image-login.png'

import googleIcon from '../../assets/google-icon.svg'
import githubIcon from '../../assets/github-icon.svg'
import rocketIcon from '../../assets/rocket-icon.svg'

export default function Login() {
  return (
    <Container>
      <ImageColumn>
        <Image
          src={imageLogin}
          quality={100}
          height={500}
          alt="imagem book wise"
        />
      </ImageColumn>
      <LoginColumn>
        <OptionsLogin>
          <div>
            <h1>Boas Vindas!</h1>
            <h2>Faça seu login ou acesse como visitante.</h2>
          </div>
          <div>
            <a>
              <Image src={googleIcon} alt="google icon" /> Entrar com o Google
            </a>
            <a>
              <Image src={githubIcon} alt="github icon" /> Entrar com o Github
            </a>
            <a>
              <Image src={rocketIcon} alt="rocket icon" /> Acessar como
              visitante
            </a>
          </div>
        </OptionsLogin>
      </LoginColumn>
    </Container>
  )
}
