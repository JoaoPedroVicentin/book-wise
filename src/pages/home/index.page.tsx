import { Sidebar } from './components/sidebar'
import { HomeContainer } from './styles'

export default function Home() {
  return (
    <HomeContainer>
      <Sidebar />
      <h1>Home</h1>
    </HomeContainer>
  )
}
