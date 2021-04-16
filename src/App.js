import './App.css';
import Header from './components/Header'
import Balance from './components/Balance'
import Expense from './components/Expense'
import History from './components/History'
import NewTransacForm from './components/NewTransacForm'
import React, {useReducer} from 'react'
export const Global = React.createContext();

const initialState = {
  transcations :[
      {id: 1, text: 'Flower' , amount : -20}     
     ]
  }
const reducer= (state, action) =>{
      switch(action.type){
          case 'Delete_Transaction':
            return {
              ...state, 
              transcations: state.transcations.filter(transaction => transaction.id !== action.payload)
            }
         case 'Add_Transaction':
              return{
                ...state,
                transcations: [action.payload, ...state.transcations]
              }
                  default :
                  return state;
              }
              
          }


function App() {
  const [state, dispatch] =useReducer(reducer, initialState)
  function deleteTransaction(id){
    dispatch({
      type : 'Delete_Transaction',
      payload : id
    })}   
  function addTransaction(transaction){
    dispatch({
      type: 'Add_Transaction',
      payload : transaction
    })
  }
  return (
 <Global.Provider value = {{transactions : state.transcations , deleteTransaction, addTransaction}}>    
    <div className = 'App'>
        <Header />
        <Balance />
        <Expense />
        <History />
        <NewTransacForm />    
       </div>
  </Global.Provider>
  );
}

export default App;
