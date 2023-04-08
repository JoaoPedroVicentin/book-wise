import Image, { StaticImageData } from 'next/image'
import { AvatarContainer } from './styles'

interface AvatarProps {
  urlPhoto: string | StaticImageData
  alt: string
  width: number
}

export default function Avatar({ urlPhoto, alt, width }: AvatarProps) {
  return (
    <AvatarContainer>
      <Image src={urlPhoto} alt={alt} width={width} />
    </AvatarContainer>
  )
}
