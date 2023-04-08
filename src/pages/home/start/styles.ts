import { styled } from '@/styles/stitches.config'

export const StartContainer = styled('div', {
  height: 'calc(100vh - 1.5rem)',

  display: 'flex',
  flexDirection: 'column',

  paddingTop: '2.5rem',

  h2: {
    fontSize: '$sm',
    fontWeight: '$medium',
    marginBottom: '1rem',
  },
})

export const Header = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '0.75rem',

  marginBottom: '2.5rem',
})

export const BookReviewsContainer = styled('div', {
  overflow: 'scroll',

  display: 'flex',
  flexDirection: 'column',
  gap: '0.75rem',

  '&::-webkit-scrollbar': {
    width: 0,
  },
})
