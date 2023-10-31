import {Component} from 'react'

import SectionItem from '../SectionItem'

import './index.css'

const sectionOptions = [
  {id: 1, displayText: 'Home'},
  {id: 2, displayText: 'Cart'},
]

class Header extends Component {
  state = {activeOptionId: sectionOptions[0].id}

  onChangeActiveOption = tabId => {
    this.setState({activeOptionId: tabId})
  }

  render() {
    const {activeOptionId} = this.state
    return (
      <nav className="header-container">
        <li className="header-sub-container">
          <div className="header-logo-container">
            <img
              src="https://res.cloudinary.com/dppqkea7f/image/upload/v1625742512/Frame_274_zlrzwk.svg"
              alt=" website logo"
            />
            <h1 className="header-website-heading">Tasty Kitchens</h1>
          </div>
          <div className="sections-container">
            {sectionOptions.map(eachOption => (
              <SectionItem
                optionDetails={eachOption}
                key={eachOption.id}
                isActive={activeOptionId === eachOption.id}
                onChangeActiveOption={this.onChangeActiveOption}
              />
            ))}
          </div>
        </li>
      </nav>
    )
  }
}

export default Header
