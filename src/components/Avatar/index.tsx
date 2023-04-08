import Image, { StaticImageData } from 'next/image'
import { AvatarContainer } from './styles'

interface AvatarProps {
  urlPhoto: string | StaticImageData
  alt: string
  width: number
  height: number
}

export default function Avatar({ urlPhoto, alt, width, height }: AvatarProps) {
  return (
    <AvatarContainer>
      <Image src={urlPhoto} alt={alt} width={width} height={height} />
    </AvatarContainer>
  )
}
