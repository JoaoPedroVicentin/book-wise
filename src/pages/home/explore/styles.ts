import { styled } from '@stitches/react'

export const ExploreContainer = styled('div', {
  height: 'calc(100vh - 2rem)',
  width: '100%',

  display: 'flex',
  flexDirection: 'column',

  h2: {
    fontSize: '$sm',
    fontWeight: '$medium',
    marginBottom: '1rem',
  },
})

export const Header = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  paddingRight: '4rem',
  marginBottom: '1.5rem',

  div: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
  },
})

export const Search = styled('form', {
  width: '27rem',

  border: '1px solid $gray500',
  borderRadius: '4px',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  gap: '0.5rem',
  marginTop: '0.875rem',
  padding: '0.875rem 1.25rem',

  input: {
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
  },

  button: {
    border: 'none',
    background: 'none',
    color: '$gray500',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
