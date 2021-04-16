import React,{useContext} from 'react'
import { Global} from '../App'
export const History = () => {
    const {transactions} = useContext(Global)
    const {deleteTransaction} = useContext(Global)

        return (
        <div className = 'history-wrapper'>
            <div className = 'history'>history</div>
                    {transactions.map(t=>{
                        return  (
                         <div className ='item' key ={t.id}>
                             <div>{t.text}</div>
                         <div>{t.amount}</div>
                         <button onClick ={()=>deleteTransaction(t.id)}>Delete</button>
                         </div>)})}     
        </div>
    )
}
export default History