import React, {useContext} from 'react'
import {Global} from '../App'

export const Expense = () => {
    const {transactions}   = useContext(Global)
    return (
        <div className = 'income-expense'>       
            <div className = 'expense'>
                    <div className = 'title'>EXPENSE</div>
                    <div  className = 'usd'>$240.00</div>
            </div>
            <div className = 'income'>
                    <div className = 'title'>INCOME</div>
                    <div className = 'usd'>$500.00</div>
             </div>
        </div>
    )
}
export default Expense
