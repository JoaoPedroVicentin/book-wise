import { styled } from '@/styles/stitches.config'

export const CardContainer = styled('div', {
  width: '38rem',
  backgroundColor: '$gray700',

  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',

  padding: '1.5rem',

  borderRadius: '8px',
})

export const UserReview = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',

  div: {
    h2: {
      fontSize: '$md',
    },
    h3: {
      fontSize: '$sm',
      fontWeight: '$regular',

      color: '$gray400',
    },
  },
})

export const BookReview = styled('div', {
  display: 'flex',
  gap: '1.25rem',
})

export const BookReviewInfos = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',

  p: {
    fontSize: '$sm',
    fontWeight: '$regular',

    lineHeight: '160%',

    color: '$gray300',
  },

  span: {
    fontWeight: '$bold',

    color: '$purple100',
  },
})

export const BookInfos = styled('div', {
  h2: {
    fontSize: '$md',
  },
  h3: {
    fontSize: '$sm',
    fontWeight: '$regular',

    color: '$gray400',
  },
})
