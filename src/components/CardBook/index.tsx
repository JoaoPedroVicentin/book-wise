import Image from 'next/image'
import { BookInfos, CardContainer, StarIcon } from './styles'

import book from 'src/assets/books/Book.png'
import { Star } from 'phosphor-react'

export function CardBook() {
  return (
    <CardContainer>
      <Image src={book} width={64} alt="book" />
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
