import { ChartLineUp, CaretRight } from 'phosphor-react'
import {
  BookReviewsContainer,
  Header,
  HeaderColumn,
  PopularBooks,
  PopularBooksContainer,
  RecentReviews,
  StartContainer,
  StartContent,
} from './styles'
import CardBookReview from '../../../components/CardBookReview'
import Link from 'next/link'
import { CardBook } from '@/components/CardBook'

export default function Start() {
  return (
    <StartContainer>
      <Header>
        <ChartLineUp size={32} color="#50B2C0" />
        <h1>Início</h1>
      </Header>
      <StartContent>
        <RecentReviews>
          <HeaderColumn>
            <h2>Avaliações mais recentes</h2>
            <Link href={'/'}>
              <h2>Ver todas</h2>
              <CaretRight />
            </Link>
          </HeaderColumn>

          <BookReviewsContainer>
            <CardBookReview />
            <CardBookReview />
            <CardBookReview />
            <CardBookReview />
          </BookReviewsContainer>
        </RecentReviews>

        <PopularBooks>
          <HeaderColumn>
            <h2>Livros populares</h2>
            <Link href={'/'}>
              <h2>Ver todos</h2>
              <CaretRight />
            </Link>
          </HeaderColumn>

          <PopularBooksContainer>
            <CardBook imgWidth={64} />
            <CardBook imgWidth={64} />
            <CardBook imgWidth={64} />
            <CardBook imgWidth={64} />
          </PopularBooksContainer>
        </PopularBooks>
      </StartContent>
    </StartContainer>
  )
}
