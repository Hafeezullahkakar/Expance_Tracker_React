import React,{useState, useContext} from 'react'
import{ Global }from '../App'
export const NewTransacForm = () => {
    const[text, setText] = useState('')
    const[amount, setAmount] = useState(0)   
    const {addTransaction} = useContext(Global)

    const handleSubmit=(e)=>{
        e.preventDefault()
       const newTrasaction={
           id: Math.floor(Math.random()*100000000),
           text,
           amount: +amount
       }
       addTransaction(newTrasaction)
    }
    return (
        <div>
            <form onSubmit = {handleSubmit} >
                <h3>Add new transaction</h3>
                <div className = 'inputpluslabels'>
                <label htmlFor='text' >Text</label>
                <input type = 'text'  value = {text}
                 onChange = {(e) => setText(e.target.value)} placeholder ='Enter text...' 
                />
                <label htmlFor='amount' >Amount</label>
                <input type = 'number' value={amount} onChange = {(e)=> setAmount(e.target.value)} id = 'amount'
                 placeholder ='Enter amount..'/>
                <button type = 'submit' >Add Transaction</button>
                </div>
            </form>
        </div>
    )
}
export default NewTransacForm