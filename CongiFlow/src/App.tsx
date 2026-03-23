import { Suspense } from 'react'
import PageLoader from './components/PageLoader'
import { ThemeProvider } from './lib/ThemeProvider'
import { SiteRouter } from './lib/site-router'

function App() {
  return (
    <ThemeProvider>
      <Suspense fallback={<PageLoader />}>
        <SiteRouter />
      </Suspense>
    </ThemeProvider>
  )
}

export default App
