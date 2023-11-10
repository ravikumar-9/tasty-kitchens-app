import {Component} from 'react'

import Cookies from 'js-cookie'

import {MdSort} from 'react-icons/md'

import Counter from '../Counter'

import './index.css'

const sortByOptions = [
  {
    id: 0,
    displayText: 'Highest',
    value: 'Highest',
  },
  {
    id: 2,
    displayText: 'Lowest',
    value: 'Lowest',
  },
]

// const RestaurantsList

class RestaurantsList extends Component {
  state = {currentPageNo: 1, activeOptionId: sortByOptions[0].value, offset: 0}

  componentDidMount = () => {
    this.getRestaurantsList()
  }

  getRestaurantsList = async () => {
    const {offset, activeOptionId} = this.state

    const jwtToken = Cookies.get('jwt_token')
    const LIMIT = 9
    const url = `https://apis.ccbp.in/restaurants-list?offset=${offset}&limit=${LIMIT}&sort_by_rating=${activeOptionId}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Barer ${jwtToken}`,
      },
    }

    const response = await fetch(url, options)
    const responseData = await response.json()
    console.log(responseData)
  }

  onIncrementPageNo = () => {
    this.setState(
      prevState => ({
        currentPageNo: prevState.currentPageNo + 1,
        offset: prevState.offset + 9,
      }),
      this.getRestaurantsList,
    )
  }

  onDecrementPageNo = () => {
    const {currentPageNo, offset} = this.state

    if (currentPageNo > 1 && offset >= 9) {
      this.setState(
        prevState => ({
          currentPageNo: prevState.currentPageNo - 1,
          offset: prevState.offset - 9,
        }),
        this.getRestaurantsList,
      )
    }
  }

  onChangeActiveOption = event => {
    this.setState({activeOptionId: event.target.value}, this.getRestaurantsList)
  }

  render() {
    const {currentPageNo, activeOptionId} = this.state

    console.log(activeOptionId)
    return (
      <div className="restaurants-list-container">
        <div className="sort-by-header-container">
          <div className="sort-by-header">
            <div>
              <h1 className="popular-heading">Popular Restaurants</h1>
              <p className="popular-rest-description">
                Select Your favorite restaurant special dish and make your day
                happy...
              </p>
            </div>
            <div className="sort-by-options-container">
              <MdSort size={24} />
              <select
                value={activeOptionId}
                onChange={this.onChangeActiveOption}
                className="options-field"
              >
                {sortByOptions.map(eachOption => (
                  <option key={eachOption.id} value={eachOption.value}>
                    {eachOption.displayText}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className="restaurants-list">
          <h1>h</h1>
          <h1>h</h1>
          <h1>h</h1>
          <h1>h</h1>
          <h1>h</h1>
          <h1>h</h1>
          <h1>h</h1>
        </div>
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
