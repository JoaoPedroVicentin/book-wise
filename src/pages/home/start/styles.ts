import { styled } from '@/styles/stitches.config'

export const StartContainer = styled('div', {
  height: 'calc(100vh - 2rem)',

  display: 'flex',
  flexDirection: 'column',
})

export const StartContent = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1.75fr 1fr',
  gap: '4rem',

  overflow: 'hidden',
})

export const Header = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '0.75rem',

  marginBottom: '1.5rem',

  h1: {
    fontSize: '$2xl',
    fontWeight: '$bold',
  },
})

export const RecentReviews = styled('div', {
  overflow: 'scroll',

  '&::-webkit-scrollbar': {
    display: 'none',
  },
})

export const BookReviewsContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.75rem',
})

export const PopularBooks = styled('div', {
  maxWidth: '324px',

  overflow: 'scroll',

  '&::-webkit-scrollbar': {
    display: 'none',
  },
})

export const HeaderColumn = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',

  marginBottom: '1rem',

  a: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',

    borderRadius: '4px',

    padding: '0.25rem 0.5rem',

    textDecoration: 'none',

    color: '$purple100',

    transition: 'all 0.3s ease',

    '&:hover': {
      backgroundColor: '$gray700',
    },
  },
  h2: {
    fontSize: '$sm',
    fontWeight: '$medium',
    marginBottom: '1rem',
    margin: 'auto 0',
  },
})

export const PopularBooksContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.75rem',

  overflow: 'hidden',
})
