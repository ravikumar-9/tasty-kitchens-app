import {Component} from 'react'

import Footer from '../Footer'

import Header from '../Header'

import Carousel from '../Carousel'

import RestaurantsList from '../RestaurantsList'

import './index.css'

class Home extends Component {
  render() {
    return (
      <div className="home-bg-container">
        <Header />
        <div className="home-main-container">
          <div className="carousel-container">
            <Carousel />
          </div>
          <div className="restaurants-list-main-container">
            <RestaurantsList />
          </div>
        </div>

        <Footer />
      </div>
    )
  }
}

export default Home
