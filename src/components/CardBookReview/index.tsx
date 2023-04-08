import Image from 'next/image'

import {
  BookInfos,
  BookReview,
  BookReviewInfos,
  CardContainer,
  User,
  UserReview,
  InfosUser,
} from './styles'

import user from 'src/assets/user.jpg'
import book from 'src/assets/books/o-hobbit.png'
import Avatar from '../Avatar'
import { Star } from 'phosphor-react'

export default function CardBookReview() {
  return (
    <CardContainer>
      <UserReview>
        <User>
          <Avatar urlPhoto={user} alt="user" width={40} height={40} />
          <InfosUser>
            <h2>João Pedro Vicentin</h2>
            <h3>Hoje</h3>
          </InfosUser>
        </User>
        <span>
          <Star color="#8381d9" />
          <Star color="#8381d9" />
          <Star color="#8381d9" />
          <Star color="#8381d9" />
          <Star color="#8381d9" />
        </span>
      </UserReview>
      <BookReview>
        <Image src={book} width={108} alt="book" />
        <BookReviewInfos>
          <BookInfos>
            <h2>O Hobbit</h2>
            <h3>J.R.R. Tolkien</h3>
          </BookInfos>
          <p>
            Semper et sapien proin vitae nisi. Feugiat neque integer donec et
            aenean posuere amet ultrices. Cras fermentum id pulvinar varius leo
            a in. Amet libero pharetra nunc elementum fringilla velit ipsum. Sed
            vulputate massa velit nibh... <span>ver mais</span>
          </p>
        </BookReviewInfos>
      </BookReview>
    </CardContainer>
  )
}
