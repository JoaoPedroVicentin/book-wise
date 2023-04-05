import { styled } from '@/styles/stitches.config'

export const Container = styled('div', {
  width: '100vw',
  height: '100vh',

  display: 'grid',
  gridTemplateColumns: '1fr 2fr',
  padding: '$4',
})

export const ImageColumn = styled('div', {
  img: {
    height: '100%',
    width: 'auto',
  },
})

export const LoginColumn = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

export const OptionsLogin = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  gap: '2.5rem',

  div: {
    display: 'flex',
    flexDirection: 'column',

    gap: '1rem',

    a: {
      backgroundColor: '$gray600',

      width: '23.25rem',

      display: 'flex',
      alignItems: 'center',

      gap: '1.25rem',
      padding: '1.25rem 1.5rem',

      borderRadius: '$md',
    },

    h1: {
      fontSize: '$2xl',
      fontWeight: '$bold',
    },

    h2: {
      fontSize: '$md',
      fontWeight: '$regular',
    },
  },
})
