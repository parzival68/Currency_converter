import { useState } from 'react'
import './App.css'
import useCurrencyInfo  from './hooks/useCurrencyInfo.js'
import { InputBox } from './components/index.js'

function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState('usd')
  const [to, setTo] = useState('inr')
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo)

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]) // Accessing object value by using ".(dot)" notation or "[]" notation
  }

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  return (
    <div className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat' style={{backgroundImage : 'url(https://images.pexels.com/photos/325154/pexels-photo-325154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)'}}>
      <div className="w-full ">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form onSubmit={(e) =>{e.preventDefault(); convert()}}>
            <div className="w-full mb-1">
              <InputBox label="From" amount={parseInt(amount)} currencyOptions={options} onCurrencyChange={(currency)=> setFrom(currency)} onAmountChange={(amount)=> setAmount(amount)} selectedCurrency={from} />
            </div>
            <div className="relative w-full h-0.5">
              <button className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-blue-600 rounded-md bg-blue-600 text-white px-2 py-0.5' onClick={swap}>Swap</button>
            </div>
            <div className="w-full mb-1">
              <InputBox label="To" amount={parseInt(convertedAmount)} currencyOptions={options} onCurrencyChange={(currency)=> setTo(currency)} selectedCurrency={to} amountDisabled />
            </div>
            <button className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg'>Convert {from.toUpperCase()} to {to.toUpperCase()}</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App
