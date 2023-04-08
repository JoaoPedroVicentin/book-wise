import { styled } from '@/styles/stitches.config'

export const SidebarContainer = styled('div', {
  background: "$gray700 url('/images/sidebar-bg.png') no-repeat center",
  backgroundSize: 'cover',

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',

  height: 'calc(100vh - 1.5rem)',

  borderRadius: '12px',
  padding: '1.5rem 3rem',

  a: {
    textDecoration: 'none',
  },
})

export const Logo = styled('div', {
  marginBottom: '2rem',
  padding: '1rem 0',

  img: {
    width: '8rem',
  },
})

export const Navbar = styled('nav', {
  ul: {
    color: '$gray400',
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  a: {
    display: 'flex',
    alignItems: 'center',

    padding: '0.5rem 0',
    gap: '0.75rem',

    fontSize: '$md',

    transition: 'all 0.3s ease',

    '&:hover': {
      color: '$gray100',

      '&:before': {
        background: '$gradient-vertical',
      },
    },

    '&:before': {
      content: '',

      width: '0.25rem',
      height: '1.5rem',

      borderRadius: '9999px',
      background: 'transparent',
    },
  },
})

export const Login = styled('div', {
  padding: '1rem 0',

  a: {
    display: 'flex',
    alignItems: 'center',

    fontWeight: '$medium',

    gap: '0.75rem',

    transition: 'all 0.3s ease',

    '&:hover': {
      color: '$purple100',
    },
  },
})
