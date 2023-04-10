import { Container } from './styles'
import { Sidebar } from './components/sidebar'
// import Start from './start'
import { Explore } from './explore'

export default function MyApp() {
  return (
    <Container>
      <Sidebar />
      <Explore />
    </Container>
  )
}
