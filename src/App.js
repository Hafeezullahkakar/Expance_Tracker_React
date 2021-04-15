import './App.css';
import Header from './components/Header'
import Balance from './components/Balance'
import Income from './components/Income'
import Expense from './components/Expense'
import History from './components/History'
import NewTransacForm from './components/NewTransacForm'

function App() {
  return (
    <div> 
      <h1>Welcome To Expense Tracker!</h1>
        <Header />
        <Balance />
        <Income />
        <Expense />
        <History />
        <NewTransacForm />
        </div>
  );
}

export default App;
