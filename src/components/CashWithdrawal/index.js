// Write your code here
import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {
    amount: 2000,
  }

  onCashWithdrawalChangeAmount = cashAmount => {
    this.setState(prevState => ({amount: prevState.amount - cashAmount}))
  }

  render() {
    const {amount} = this.state
    const {denominationsList} = this.props
    console.log(denominationsList)
    const userName = 'Sahil Bagde'
    const userNameInitial = userName.slice(0, 1)
    return (
      <div className="bg-container">
        <div className="withdraw-card">
          <div className="user-name-container">
            <p className="user-initial">{userNameInitial}</p>
            <h1 className="user-full-name">{userName}</h1>
          </div>
          <div className="balance-container">
            <p className="balance-text">Your Balance</p>
            <div className="balance-amount-container">
              <p className="balance-amount">{amount}</p>
              <p className="amount-in-text">in Rupees</p>
            </div>
          </div>
          <p className="withdraw-text">Withdraw</p>
          <div className="withdraw-amount-container">
            <p className="withdraw-header">CHOOSE SUM (IN RUPEES)</p>
            <ul className="withdraw-cash-options">
              {denominationsList.map(eachItem => (
                <DenominationItem
                  cashAmount={eachItem.value}
                  key={eachItem.id}
                  onCashWithdrawalChangeAmount={
                    this.onCashWithdrawalChangeAmount
                  }
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
