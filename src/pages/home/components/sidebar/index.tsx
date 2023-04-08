import Image from 'next/image'
import Link from 'next/link'

import { Logo, Navbar, SidebarContainer, Login } from './styles'

import logo from '../../../../assets/logo.svg'
import { ChartLineUp, Binoculars, User, SignIn } from 'phosphor-react'

export function Sidebar() {
  return (
    <SidebarContainer>
      <div>
        <Logo>
          <Image src={logo} alt="logo book wise" />
        </Logo>
        <Navbar>
          <ul>
            <li>
              <Link href={''}>
                <ChartLineUp size={24} /> Início
              </Link>
            </li>
            <li>
              <Link href={''}>
                <Binoculars size={24} /> Explorar
              </Link>
            </li>
            <li>
              <Link href={''}>
                <User size={24} /> Perfil
              </Link>
            </li>
          </ul>
        </Navbar>
      </div>

      <Login>
        <Link href={'/login'}>
          Fazer login <SignIn size={24} color="#50B2C0" />
        </Link>
      </Login>
    </SidebarContainer>
  )
}
