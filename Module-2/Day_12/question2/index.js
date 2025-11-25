function createCounter(){
    let count=0
    function increment(){
        count++
        console.log("Increment count",count)
    }
    function decrement(){
        count--
        console.log("Decrement count",count)
    }
    return {increment,decrement}
}
const counter = createCounter();
counter.increment(); 
counter.increment();
counter.decrement(); 


function createBankAccount(){
    let balance=0
    let transactionHistory=[]
    return{
        deposit:function(amount){
            if(amount>0){
                balance=balance+amount
                transactionHistory.push(`Deposited:${amount}`)
                console.log(`Deposited:${amount}`)
            }
            else{
                console.log("Deposite amount must be positive number")
            }
        },
        withdraw:function(amount){
            if(amount>0&& amount<=balance){
                balance=balance-amount
                transactionHistory.push(`Withdraw${amount}`)
                console.log(`Withdraw${amount}`)
            }
            else if(amount>balance){
                transactionHistory.push(`Failed withdraw:${amount} Insufficient`)
                console.log(`Insufficient balance`)
            }
            else{
                console.log("Withdraw amount must be positive number")
            }
        },
        checkBalance:function(){
            console.log(`Current Balance${balance}`)
            return balance
        },
        getTransactionHistory:function(){
            return[...transactionHistory]
        }
    }
}
const account = createBankAccount();
account.deposit(500); 
account.withdraw(200); 
account.withdraw(400); 
console.log(account.balance); 
