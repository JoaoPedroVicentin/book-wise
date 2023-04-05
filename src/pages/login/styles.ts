import { styled } from '@/styles/stitches.config'

import Image from 'next/image'

export const Container = styled('div', {
  width: '100vw',
  height: '100vh',

  display: 'grid',
  gridTemplateColumns: '1fr 1.5fr',

  gap: '1rem',
  padding: '$3',

  '@media(max-width: 765px)': {
    gridTemplateColumns: '1fr',
  },
})

export const ImageColumn = styled('div', {
  img: {
    height: '100%',
    width: 'auto',
  },

  '@media(max-width: 765px)': {
    display: 'none',
  },
})

export const LoginColumn = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '@media(max-width: 765px)': {
    flexDirection: 'column',
    gap: '1rem',
  },
})

export const Logo = styled(Image, {
  display: 'none',

  '@media(max-width: 765px)': {
    display: 'block',

    width: '12rem',
  },
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

      fontSize: '$lg',
      fontWeight: '$medium',

      gap: '1.25rem',
      padding: '1.25rem 1.5rem',

      borderRadius: '$md',

      cursor: 'pointer',

      transition: 'all 0.3s ease',

      '&:hover': {
        filter: 'brightness(1.5)',
      },

      '@media(max-width: 865px)': {
        width: '100%',
      },

      '@media(max-width: 390px)': {
        fontSize: '$md',
        padding: '1rem 1.25rem',
      },
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

  '@media(max-width: 765px)': {
    gridTemplateColumns: '1fr',

    backgroundColor: '$gray700',
    borderRadius: '$md',

    padding: '$8',
  },

  '@media(max-width: 390px)': {
    padding: '$5',
    gap: '1rem',
  },
})
