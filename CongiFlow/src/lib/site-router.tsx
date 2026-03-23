import { lazy, Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import DashboardLayout from '../components/DashboardLayout'
import PageLoader from '../components/PageLoader'

const Dashboard = lazy(() => import('../pages/Dashboard'))
const Templates = lazy(() => import('../pages/Templates'))
const Products = lazy(() => import('../pages/Products'))
const Docs = lazy(() => import('../pages/Docs'))
const TodoLists = lazy(() => import('../pages/TodoLists'))
const Messages = lazy(() => import('../pages/Messages'))
const AIAssistant = lazy(() => import('../pages/AIAssistant'))

export function SiteRouter() {
  return (
    <Routes>
      <Route path="/" element={
        <DashboardLayout>
          <Suspense fallback={<PageLoader />}>
            <Dashboard />
          </Suspense>
        </DashboardLayout>
      } />
      <Route path="/templates" element={
        <DashboardLayout>
          <Suspense fallback={<PageLoader />}>
            <Templates />
          </Suspense>
        </DashboardLayout>
      } />
      <Route path="/products" element={
        <DashboardLayout>
          <Suspense fallback={<PageLoader />}>
            <Products />
          </Suspense>
        </DashboardLayout>
      } />
      <Route path="/docs" element={
        <DashboardLayout>
          <Suspense fallback={<PageLoader />}>
            <Docs />
          </Suspense>
        </DashboardLayout>
      } />
      <Route path="/todo-lists" element={
        <DashboardLayout>
          <Suspense fallback={<PageLoader />}>
            <TodoLists />
          </Suspense>
        </DashboardLayout>
      } />
      <Route path="/messages" element={
        <DashboardLayout>
          <Suspense fallback={<PageLoader />}>
            <Messages />
          </Suspense>
        </DashboardLayout>
      } />
      <Route path="/ai-assistant" element={
        <DashboardLayout>
          <Suspense fallback={<PageLoader />}>
            <AIAssistant />
          </Suspense>
        </DashboardLayout>
      } />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
