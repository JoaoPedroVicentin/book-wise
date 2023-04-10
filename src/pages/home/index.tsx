import { Container } from './styles'
import { Sidebar } from './components/sidebar'
import Explore from './explore'
import Start from './start'

export default function MyApp() {
  return (
    <Container>
      <Sidebar />
      <Explore />
    </Container>
  )
}
