import { Binoculars, MagnifyingGlass } from 'phosphor-react'
import {
  BooksContainer,
  Categories,
  ExploreContainer,
  Header,
  Input,
  Search,
} from './styles'
import { CardBook } from '@/components/CardBook'

export default function Explore() {
  return (
    <ExploreContainer>
      <Header>
        <div>
          <Binoculars size={32} color="#50B2C0" />
          <h1>Explorar</h1>
        </div>

        <Search>
          <Input placeholder="Buscar livro ou autor" />
          <button type="submit">
            <MagnifyingGlass size={20} />
          </button>
        </Search>
      </Header>

      <Categories>
        <a href="">Tudo</a>
        <a href="">Computação</a>
        <a href="">Educação</a>
        <a href="">Fantasia</a>
        <a href="">Ficção Científica</a>
        <a href="">Horror</a>
        <a href="">HQs</a>
        <a href="">Suspense</a>
      </Categories>

      <BooksContainer>
        <CardBook imgWidth={108} />
        <CardBook imgWidth={108} />
        <CardBook imgWidth={108} />
        <CardBook imgWidth={108} />
        <CardBook imgWidth={108} />
        <CardBook imgWidth={108} />

        <CardBook imgWidth={108} />
        <CardBook imgWidth={108} />
        <CardBook imgWidth={108} />
        <CardBook imgWidth={108} />
        <CardBook imgWidth={108} />
        <CardBook imgWidth={108} />
      </BooksContainer>
    </ExploreContainer>
  )
}
