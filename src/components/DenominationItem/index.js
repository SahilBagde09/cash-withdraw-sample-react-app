// Write your code here
import './index.css'

const DenominationItem = props => {
  const {cashAmount, onCashWithdrawalChangeAmount} = props
  const onClickWithdrawButton = () => {
    onCashWithdrawalChangeAmount(cashAmount)
  }
  return (
    <li className="list-item-style">
      <button
        type="button"
        onClick={onClickWithdrawButton}
        className="cash-withdraw-button"
      >
        {cashAmount}
      </button>
    </li>
  )
}

export default DenominationItem
