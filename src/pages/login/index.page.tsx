import Image from 'next/image'
import Link from 'next/link'

import {
  LoginContainer,
  ImageColumn,
  LoginColumn,
  Logo,
  OptionsLogin,
} from './styles'

import imageLogin from '../../assets/image-login.png'
import logo from '../../assets/logo.svg'

import googleIcon from '../../assets/google-icon.svg'
import githubIcon from '../../assets/github-icon.svg'
import rocketIcon from '../../assets/rocket-icon.svg'

export default function Login() {
  return (
    <LoginContainer>
      <ImageColumn>
        <Image
          src={imageLogin}
          quality={100}
          height={500}
          alt="imagem book wise"
        />
      </ImageColumn>

      <LoginColumn>
        <Logo src={logo} alt="logo book wise" />
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
            <Link href={'/'}>
              <Image src={rocketIcon} alt="rocket icon" /> Acessar como
              visitante
            </Link>
          </div>
        </OptionsLogin>
      </LoginColumn>
    </LoginContainer>
  )
}
