// Write your code here
import './index.css'

const DenominationItem = props => {
  const {eachButton, withdrawButton} = props
  const {value} = eachButton
  const onClick = () => {
    withdrawButton(value)
  }

  return (
    <li className="each-list-item">
      <button onClick={onClick} type="button" className="btn">
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
