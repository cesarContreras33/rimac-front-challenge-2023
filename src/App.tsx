
import PageRegister from '@pages/PageRegister/PageRegister'
import LayoutTemplateWithFooter from '@template/template1/LayoutTemplateWithFooter'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import '@styles/css/App.css'
import PageOptions from '@pages/PageOptions/PageOptions'
import PageResumen from '@pages/PageResumen/PageResumen'
import LayoutTemplateWithoutFooter from '@template/template2/LayoutTemplateWithoutFooter'

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <LayoutTemplateWithFooter>
                <PageRegister />
              </LayoutTemplateWithFooter>
            }
          />
          <Route
            path="/options"
            element={
              <LayoutTemplateWithoutFooter>
                <PageOptions />
              </LayoutTemplateWithoutFooter>
            }
          />
          <Route
            path="/resumen"
            element={
              <LayoutTemplateWithoutFooter>
                <PageResumen />
              </LayoutTemplateWithoutFooter>
            }
          />
        </Routes>
      </Router>
    </div>
  )
}
  

export default App
