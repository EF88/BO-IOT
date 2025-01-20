import { Container } from '@iot/portal-core-components'
import './App.css'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Body } from './components/Body'

const App = () => {
  const queryClient = new QueryClient()

  const ContentApp = (
    <div className="flex flex-col w-full p-4 h-full">
      <Body />
    </div>
  )

  return (
    <QueryClientProvider client={queryClient}>
      <Container contentClassName="w-full h-screen" content={ContentApp} />
    </QueryClientProvider>
  )
}

export default App
