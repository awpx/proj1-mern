import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { HomePages } from './pages/HomePages'
import { ProductPages } from './pages/ProductPages'
import { CartPages } from './pages/CartPages'
import { LoginPages } from './pages/LoginPages'
import { RegisterPages } from './pages/RegisterPages'
import { ProfilePages } from './pages/ProfilePages'
import { ShippingPages } from './pages/ShippingPages'
import { PaymentPages } from './pages/PaymentPages'
import { PlaceOrderPages } from './pages/PlaceOrderPages'

const App = () => {
  return (
    <Router>
      <Header />
        <main className='py-3'>
          <Container>
            <Route path='/shipping' component={ShippingPages} />
            <Route path='/payment' component={PaymentPages} />
            <Route path='/placeorder' component={PlaceOrderPages} />
            <Route path='/login' component={LoginPages} />
            <Route path='/register' component={RegisterPages} />
            <Route path='/profile' component={ProfilePages} />
            <Route path='/product/:id' component={ProductPages} />
            <Route path='/cart/:id?' component={CartPages} />
            <Route exact path='/' component={HomePages} />
          </Container>
        </main>
      <Footer />
    </Router>
  );
}

export default App
