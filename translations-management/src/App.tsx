import { Container } from '@iot/portal-core-components'
import './App.css'
import { QueryClient, QueryClientProvider } from 'react-query'
import { useState } from 'react'
import { Header } from './components/Header'
import { Body } from './components/Body'
import { CreateEdit } from './components/CreateEdit'

const App = () => {
  const queryClient = new QueryClient()
  const [showCreate, toggleCreateDrawer] = useState(false)

  const ContentApp = (
    <div className="flex flex-col w-full p-4 h-full">
      <Header toggleCreateDrawer={toggleCreateDrawer} />
      <Body />
    </div>
  )

  return (
    <QueryClientProvider client={queryClient}>
      <Container contentClassName="w-full h-screen" content={ContentApp} />
      <CreateEdit
        showCreate={showCreate}
        toggleCreateDrawer={toggleCreateDrawer}
      />
    </QueryClientProvider>
  )
}

export default App
