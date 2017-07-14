import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './containers/App'
import SignUp from './containers/SignUp'
import History from './containers/History'
import Settings from './containers/Settings'
import TermsOfUse from './containers/TermsOfUse'
import PrivacyPolicy from './containers/PrivacyPolicy'
import AboutUs from './containers/AboutUs'
import HowToUse from './containers/HowToUse'
import Todos from './containers/Todos'
import NotFound from './containers/NotFound'

const routes = (
  <Route path="/" component={ App } >
    <IndexRoute component={ HowToUse } />
    <Route path="/yeah/:bandId" component={ SignUp } />
    <Route path="/history" component={ History } />
    <Route path="/settings" component={ Settings } />
    <Route path="/terms" component={ TermsOfUse } />
    <Route path="/privacy" component={ PrivacyPolicy } />
    <Route path="/about" component={ AboutUs } />
    <Route path="/howto" component={ HowToUse } />
    <Route path="/todos" component={ Todos } />
    <Route path="*" component={ NotFound } />
  </Route>
)

export default routes
