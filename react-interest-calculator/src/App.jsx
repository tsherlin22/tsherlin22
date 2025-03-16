import { useState } from 'react';
import BankActions from './BankActions';
import './App.css';

function App() {
  const [balance, setBalance] = useState(1000);  // Initial balance
  const [interestRate, setInterestRate] = useState(5);  // Default interest rate
  
  // Deposit functionality
  const deposit = (amount) => {
    setBalance(prevBalance => prevBalance + parseFloat(amount));
  };

  // Withdraw functionality
  const withdraw = (amount) => {
    setBalance(prevBalance => prevBalance - parseFloat(amount));
  };

  // Add interest functionality
  const addInterest = (rate) => {
    const interest = (balance * rate) / 100;
    setBalance(prevBalance => prevBalance + interest);
  };

  // Charge fee functionality
  const chargeFee = (fee) => {
    setBalance(prevBalance => prevBalance - parseFloat(fee));
  };

  return (
    <div className="App">
      <h1>Bank Account Simulator</h1>
      <div>
        <h3>Current Balance: ${balance.toFixed(2)}</h3>
        {balance < 0 && <div className="alert alert-danger">Your balance is negative!</div>}
      </div>

      <BankActions
        deposit={deposit}
        withdraw={withdraw}
        addInterest={addInterest}
        chargeFee={chargeFee}
        setInterestRate={setInterestRate}
        interestRate={interestRate}
      />
    </div>
  );
}

export default App;
