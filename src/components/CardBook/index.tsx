import Image from 'next/image'
import { BookInfos, CardContainer } from './styles'

import book from 'src/assets/books/a-revolucao-dos-bichos.png'
import { Star } from 'phosphor-react'

interface CardBookProps {
  imgWidth: number
}

export function CardBook({ imgWidth }: CardBookProps) {
  return (
    <CardContainer>
      <Image src={book} width={imgWidth} alt="book" />
      <div>
        <BookInfos>
          <h2>A revolução dos bichos</h2>
          <h3>George Owell</h3>
        </BookInfos>
        <span>
          <Star color="#8381d9" />
          <Star color="#8381d9" />
          <Star color="#8381d9" />
          <Star color="#8381d9" />
          <Star color="#8381d9" />
        </span>
      </div>
    </CardContainer>
  )
}
