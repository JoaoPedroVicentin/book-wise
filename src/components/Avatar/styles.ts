import { styled } from '@/styles/stitches.config'

export const AvatarContainer = styled('div', {
  background: '$gradient-vertical',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  padding: '2px',

  borderRadius: '9999px',

  img: {
    borderRadius: '9999px',
    objectFit: 'cover',
    width: '100%',
    height: '100%',
  },
})
