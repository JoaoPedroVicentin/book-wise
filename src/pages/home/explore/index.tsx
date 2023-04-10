import { Binoculars, MagnifyingGlass } from 'phosphor-react'
import { ExploreContainer, Header, Search } from './styles'

export function Explore() {
  return (
    <ExploreContainer>
      <Header>
        <div>
          <Binoculars size={32} color="#50B2C0" />
          <h1>Explorar</h1>
        </div>

        <Search>
          <input placeholder="Buscar livro ou autor" />
          <button type="submit">
            <MagnifyingGlass size={20} />
          </button>
        </Search>
      </Header>
    </ExploreContainer>
  )
}
