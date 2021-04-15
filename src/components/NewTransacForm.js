import React from 'react'

export const NewTransacForm = () => {
    return (
        <div>
            <form>
                <h3>Add new transaction</h3>
                <label for='text' >Text</label>
                <input type = 'text' placeholder ='Enter text...' />
                <label for='amount' >Amount</label>
                <input type = 'number' placeholder ='Enter amount..' />
                <button type = 'submit' >Add Transaction</button>
            </form>
        </div>
    )
}
