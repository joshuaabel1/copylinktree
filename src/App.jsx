import Layout from './components/Layout';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { LoginPage, AdminPage, HomePage, UserPage, ProfilePage, NotFoundPage } from './pages';

export default function App() {
  const routes = [
    {
      path: '/',
      exact: true,
      component: HomePage
    },
    {
      path: '/login',
      page: LoginPage
    },
    {
      path: '/profile',
      page: ProfilePage
    },
    {
      path: '/admin',
      page: AdminPage
    },
    {
      path: '/:user',
      page: UserPage
    },
    {
      path: '*',
      page: NotFoundPage
    }
  ];

  return (
    <Router>
      <Layout>
          <ul> 
            {routes.map(route => (
              <li key={route.path}>
                <Link to={route.path}>{route.path.toUpperCase()}</Link>
              </li>
            ))}
          </ul>

        <Switch>
          {routes.map((route, i) => (
            <Route
              key={i}
              path={route.path}
              exact={route.exact}
              component={route.page} />
          ))}
        </Switch>
      </Layout>
    </Router>
  )
}
