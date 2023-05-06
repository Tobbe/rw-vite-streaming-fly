import { NavLink, routes } from '@redwoodjs/router'

type MainLayoutProps = {
  children?: React.ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <nav className="main-nav">
        <ul>
          <li>
            <NavLink to={routes.home()} activeClassName="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to={routes.about()} activeClassName="active">
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to={routes.userExamples()}
              activeClassName="active"
              matchSubPaths
            >
              Admin
            </NavLink>
          </li>
        </ul>
      </nav>
      <main>{children}</main>
    </>
  )
}

export default MainLayout
