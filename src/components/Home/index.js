import {Component} from 'react'

import Footer from '../Footer'

import Header from '../Header'

import Carousel from '../Carousel'

import RestaurantsList from '../RestaurantsList'

import './index.css'

class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="home-bg-container">
          <div className="home-main-container">
            <div className="carousels-container">
              <Carousel />
            </div>
          </div>
          <RestaurantsList />
        </div>
        <Footer />
      </>
    )
  }
}

export default Home
