import {Component} from 'react'

import Counter from '../Counter'

import SortByHeader from '../SortByHeader'

// const RestaurantsList

class RestaurantsList extends Component {
  state = {currentPageNo: 1}

  onIncrementPageNo = () => {
    this.setState(prevState => ({currentPageNo: prevState.currentPageNo + 1}))
  }

  onDecrementPageNo = () => {
    const {currentPageNo} = this.state

    if (currentPageNo > 1) {
      this.setState(prevState => ({currentPageNo: prevState.currentPageNo - 1}))
    }
  }

  render() {
    const {currentPageNo} = this.state
    return (
      <div className="restaurants-list-container">
        <div className="sort-by-header-container">
          <SortByHeader />
        </div>
        <h1>h</h1>
        <h1>h</h1>
        <h1>h</h1>
        <h1>h</h1>
        <h1>h</h1>
        <h1>h</h1>
        <h1>h</h1>
        <Counter
          currentPageNo={currentPageNo}
          onIncrementPageNo={this.onIncrementPageNo}
          onDecrementPageNo={this.onDecrementPageNo}
        />
      </div>
    )
  }
}

export default RestaurantsList
