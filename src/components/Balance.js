import React,{useContext} from 'react'
import {Global} from '../App'
export const Balance = () => {
        const {transactions} =  useContext(Global)
       
        const TotalAmount=  transactions.map(t=> t.amount)
        const amont = TotalAmount.reduce((account , item)=> (account += item))
        console.log(amont)
        
    return (
        <div className = 'balance'>    
            <div>YOUR BALANCE </div>
            <div className ='blnc'>${amont}</div>
        </div>
    )
}
export default Balance
