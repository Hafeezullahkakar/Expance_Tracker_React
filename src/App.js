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
      {id: 1, text: 'Flower' , amount : -20},
      {id: 2, text: 'Flower' , amount : 120}
     ]
  }
const reducer= (state, action) =>{
      switch(action.type){
          // case 'Add_Transaction':
          //     if(state > 0){
          //             return initialState + state
          //         }
          //         else{
          //                 return initialState - state
          //             }
                  default :
                  return state;
              }
              
          }

function App() {
  const [state, dispatch] =useReducer(reducer, initialState)
   
  return (

 <Global.Provider value = {{transactions : state.transcations ,  dispatch}}>    
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
