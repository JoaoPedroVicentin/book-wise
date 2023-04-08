import { Container } from './styles'
import { Sidebar } from './components/sidebar'
import Start from './start'

export default function MyApp() {
  return (
    <Container>
      <Sidebar />
      <Start />
    </Container>
  )
}
