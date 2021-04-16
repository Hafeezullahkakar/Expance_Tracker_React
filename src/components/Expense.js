import React, {useContext} from 'react'
import {Global} from '../App'

export const Expense = () => {
    const {transactions}   = useContext(Global)
    const amountt = transactions.map(t=>t.amount)
    const imcome = amountt.filter(item => item>0).reduce((acc,amnt)=> (acc += amnt),0).toFixed(2)
    const expense = amountt.filter(item => item<0).reduce((acc, amont)=> (acc += amont),0 * -1).toFixed(2)  
    return (
        <div className = 'income-expense'>       
            <div className = 'expense'>
                    <div className = 'title'>EXPENSE</div>
                    <div  className = 'usd'>${expense}</div>
            </div>
            <div className = 'income'>
                    <div className = 'title'>INCOME</div>
                    <div className = 'usd'>${imcome}</div>
             </div>
        </div>
    )
}
export default Expense
