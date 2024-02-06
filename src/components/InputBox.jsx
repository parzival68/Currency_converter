import { useId } from "react"


const InputBox = ({label, amount, onAmountChange, onCurrencyChange, currencyOptions = [], selectedCurrency = 'usd', amountDisabled = false, currencyDisabled = false, className = ""}) => {

const id = useId()

  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
        <div className="w-full flex justify-evenly">
            <div>
                <label htmlFor={id} className="text-black/40 mb-2 block">{label}</label>
                <input type="number" id={id} className="w-full outline-none h-1/2 bg-transparent py-1.5" disabled={amountDisabled} value={amount} onChange={(e)=>{onAmountChange && onAmountChange(Number(e.target.value))}} />
            </div>
            <div className="flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select className="w-1/3 rounded-lg px-1 py-2 bg-gray-100 cursor-pointer outline-none" value={selectedCurrency} onChange={(e) => {onCurrencyChange && onCurrencyChange(e.target.value)}} disabled={currencyDisabled}>
                    {currencyOptions.map((currency) => 
                        <option key={currency} value={currency}>{currency}</option>
                    )}
                </select>
            </div>
        </div>
    </div>
  )
}

export default InputBox