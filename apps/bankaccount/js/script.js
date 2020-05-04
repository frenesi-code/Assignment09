function init() {
    let bankAccount = (function () {
               
        let balance = 0;
        let owner = '';

        function deposit(amount) {                                                
            balance = balance + parseFloat(amount);
            getOwnerAndBalance()
        }
        
        function withdrawal(amount) {                                        
            balance = balance - parseFloat(amount);
            getOwnerAndBalance()
        }
        
        function getOwnerName() {    
            document.getElementById('ownerName').value = owner;
        }

        function getBalance() {                    
            document.getElementById('balance').value = balance;
        }

        function getOwnerAndBalance() {
            getOwnerName();
            getBalance();
        } 

        function promptName() {
            owner = prompt('What is your name?');
            getOwnerName();
        }
        
        return {
            deposit,
            withdrawal,            
            getBalance,
            getOwnerName,
            getOwnerAndBalance,
            promptName
        }
    })()
        
    document.getElementById("btnName").addEventListener("click", function() {                        
        bankAccount.promptName();
    });

    document.getElementById("btnDeposit").addEventListener("click", function() {        
        bankAccount.deposit(promptAmount('Amount to deposit?'));          
    });

    document.getElementById("btnWithdrawal").addEventListener("click", function() {        
        bankAccount.withdrawal(promptAmount('Amount to withdrawal?'));
    });   

    function promptAmount(alertMessage) {
        let amount = 0;
        do { 
            amount = prompt(alertMessage);
        } while (!isValidNumber(amount))

        return amount;
    }

    function isValidNumber(value) {        
        if (isNaN(parseFloat(value))) {
            alert('Enter a valid amount');            
            return false;
        }

        return true;
    }
}