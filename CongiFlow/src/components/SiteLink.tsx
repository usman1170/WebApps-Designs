import type { ReactNode } from 'react'
import { NavLink } from 'react-router-dom'

type SiteLinkProps = {
  children: ReactNode
  to: string
}

function SiteLink({ children, to }: SiteLinkProps) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        [
          'rounded-full px-4 py-2 text-sm font-semibold transition duration-300',
          isActive ? 'bg-white text-slate-950' : 'text-slate-300 hover:bg-white/10 hover:text-white'
        ].join(' ')
      }
    >
      {children}
    </NavLink>
  )
}

export default SiteLink
