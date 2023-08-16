import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import styled from 'styled-components';

import { AsteroidsProvider } from './hocs/with-asteroids';
import { UnitProvider } from './hocs/with-unit';

import HomePage from './pages/home-page';
import CartPage from './pages/cart-page';
import AsteroidDetailsPage from './pages/asteroid-details-page';

import Header from './components/header';

import './App.css';

const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1356px;
  min-width: 375px;
`
const AppContainer = styled.div`
  background-attachment: fixed;
  background-image: url(./earth.png);
  background-position-y: 120px;
  background-position-x: calc((100vw - 1700px) / 2);
  background-repeat: no-repeat;
  @media screen and (max-width: 1356px) {
    background-position: right 73vw top 100px;
  };
  @media screen and (max-width: 576px) {
    background-position: -350px 100px
  }
`

function App() {

  return (
    <AppContainer className="App">
      <Router>
      <AsteroidsProvider>
        <UnitProvider>
          <Container>
            <Header />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/asteroids/:id" element={<AsteroidDetailsPage />} />
            </Routes>
          </Container>
        </UnitProvider>
      </AsteroidsProvider>
      </Router>
    </AppContainer>
  )
}

export default App;
