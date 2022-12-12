// Write your code here
import {Component} from 'react'

import DenominationItem from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  state = {money: 2000}

  onWithdrawButton = value => {
    this.setState(prevState => ({money: prevState.money - value}))
  }

  render() {
    const {money} = this.state
    const {denominationsList} = this.props

    return (
      <div className="container">
        <div className="card-container">
          <div className="name-heading-container">
            <div className="name-logo">
              <p>GM</p>
            </div>
            <h2 className="name">Murali Ganji</h2>
          </div>
          <div className="balance-container">
            <p className="bal-txt">Your Balance</p>
            <div>
              <p className="balance">{money}</p>
              <p className="bal-txt2">In Rupees</p>
            </div>
          </div>
          <div>
            <p className="btn-heading">Withdraw</p>
            <p className="btn-para">CHOOSE SUM (IN RUPEES)</p>
            <ul className="ul-list">
              {denominationsList.map(eachButton => (
                <DenominationItem
                  eachButton={eachButton}
                  key={eachButton.id}
                  withdrawButton={this.onWithdrawButton}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default CashWithdrawal
