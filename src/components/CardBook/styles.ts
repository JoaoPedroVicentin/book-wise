import { styled } from '@/styles/stitches.config'

export const CardContainer = styled('div', {
  backgroundColor: '$gray700',

  display: 'flex',

  gap: '1.25rem',

  padding: '1.125rem 1.25rem',

  borderRadius: '8px',

  div: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
})

export const BookInfos = styled('div', {
  h2: {
    fontSize: '$md',
    marginBottom: 0,
  },
  h3: {
    fontSize: '$sm',
    fontWeight: '$regular',
    color: '$gray400',
  },
})
