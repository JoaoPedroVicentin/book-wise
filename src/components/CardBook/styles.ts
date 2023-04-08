import { styled } from '@/styles/stitches.config'

export const CardContainer = styled('div', {
  backgroundColor: '$gray700',

  display: 'flex',
  gap: '1.25rem',
  padding: '1.125rem 1.25rem',

  border: '1px solid #181c2a',
  borderRadius: '8px',

  div: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',

    span: {
      display: 'flex',
      gap: '0.25rem',
    },
  },

  cursor: 'pointer',

  transition: 'all 0.3s ease',

  '&:hover': {
    borderColor: '$gray600',
  },
})

export const BookInfos = styled('div', {
  h2: {
    fontSize: '$md',
    marginBottom: -1,
  },
  h3: {
    fontSize: '$sm',
    fontWeight: '$regular',
    color: '$gray400',
  },
})
