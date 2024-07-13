import { render, screen, waitFor } from '@testing-library/react'
import { createMemoryRouter, RouterProvider } from 'react-router-dom'
import { describe, expect, it, vi } from 'vitest'
import { routes } from '../index'

vi.mock('../../view/books/books-container', () => ({
  default: () => <div>Books Component</div>,
}))
vi.mock('../../view/config/config-container', () => ({
  default: () => <div>Config Component</div>,
}))
vi.mock('../../view/log-page/log-container', () => ({
  default: () => <div>Log Component</div>,
}))

describe('Router configuration', () => {
  it('should render Layout component', async () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ['/'],
    })

    render(<RouterProvider router={router} />)

    await waitFor(() => {
      expect(screen.getByText(/Loading.../i)).toBeInTheDocument()
    })
  })

  it('should render Books component on / route', async () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ['/'],
    })

    render(<RouterProvider router={router} />)

    await waitFor(() => {
      expect(screen.getByText(/Books Component/i)).toBeInTheDocument()
    })
  })

  it('should render Config component on /config route', async () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ['/config'],
    })

    render(<RouterProvider router={router} />)

    await waitFor(() => {
      expect(screen.getByText(/Config Component/i)).toBeInTheDocument()
    })
  })

  it('should render Log component on /log route', async () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ['/log'],
    })

    render(<RouterProvider router={router} />)

    await waitFor(() => {
      expect(screen.getByText(/Log Component/i)).toBeInTheDocument()
    })
  })

  it('should render error element on invalid route', async () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ['/invalid-route'],
    })

    render(<RouterProvider router={router} />)

    await waitFor(() => {
      expect(screen.getByText(/error/i)).toBeInTheDocument()
    })
  })
})
