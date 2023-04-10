import { styled } from '@stitches/react'

export const ExploreContainer = styled('div', {
  height: 'calc(100vh - 2rem)',
  width: '100%',
  maxWidth: '1360px',
  margin: '0 auto',

  display: 'flex',
  flexDirection: 'column',
})

export const Header = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  div: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',

    h1: {
      fontSize: '$2xl',
      fontWeight: '$bold',
    },
  },
})

export const Search = styled('form', {
  width: '25vw',

  border: '1px solid $gray500',
  borderRadius: '4px',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  gap: '0.5rem',
  marginTop: '0.875rem',
  padding: '0.875rem 1.25rem',

  transition: 'all 0.3s ease',

  button: {
    border: 'none',
    background: 'none',
    color: '$gray500',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  '&:focus-within': {
    borderColor: '$green200',

    button: {
      color: '$green200',
    },
  },
})

export const Input = styled('input', {
  all: 'unset',
  border: 'none',

  width: '100%',

  color: '$gray200',

  fontSize: '0.875rem',

  '&::placeholder': {
    color: '$gray400',
  },

  '&:focus': {
    boxShadow: `0`,
  },
})

export const Categories = styled('div', {
  marginTop: '2.5rem',
  marginBottom: '3rem',

  display: 'flex',
  gap: '0.75rem',

  a: {
    color: '$purple100',
    border: '1px solid $purple100',
    borderRadius: '9999px',

    padding: '0.25rem 1rem',

    textDecoration: 'none',

    transition: 'all 0.3s ease',

    '&:hover': {
      backgroundColor: '$purple200',
      color: '$gray100',
      borderColor: '$purple200',
    },
  },
})

export const BooksContainer = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr',
  gap: '1.25rem',

  overflow: 'scroll',

  '&::-webkit-scrollbar': {
    display: 'none',
  },
})
