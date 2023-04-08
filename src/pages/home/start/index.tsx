import { ChartLineUp } from 'phosphor-react'
import { BookReviewsContainer, Header, StartContainer } from './styles'
import CardBookReview from '../../../components/CardBookReview'

export default function Start() {
  return (
    <StartContainer>
      <Header>
        <ChartLineUp size={32} color="#50B2C0" />
        <h1>Início</h1>
      </Header>
      <h2>Avaliações mais recentes</h2>
      <BookReviewsContainer>
        <CardBookReview />
        <CardBookReview />
        <CardBookReview />
        <CardBookReview />
      </BookReviewsContainer>
    </StartContainer>
  )
}
