import {Link} from 'react-router-dom'

import './index.css'

const SectionItem = props => {
  console.log(props)
  const {isActive, optionDetails, onChangeActiveOption} = props

  const {displayText, id} = optionDetails

  const onChangeActiveTab = () => {
    onChangeActiveOption(id)
  }

  return (
    <button
      type="button"
      className={isActive ? 'activeTab' : 'InactiveTab'}
      onClick={onChangeActiveTab}
    >
      <Link to="/" />
      {displayText}
    </button>
  )
}

export default SectionItem
