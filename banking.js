// // handle deposit button
// document
//     .getElementById("deposit-button")
//     .addEventListener("click", function() {
//         // get the ammount deposited
//         const depositInput = document.getElementById("deposit-input");
//         //Update diposit total
//         const newDepositText = depositInput.value;
//         const newDepositAmount = parseFloat(newDepositText);

//         const depositTotal = document.getElementById("deposit-total");
//         const previousDepositText = depositTotal.innerText;
//         const previousDepositAmount = parseFloat(previousDepositText);
//         const newDepositTotal = previousDepositAmount + newDepositAmount;

//         depositTotal.innerText = newDepositTotal;

//         //Update account balance
//         const balanceTotal = document.getElementById("balance-total");
//         const balanceTotalText = balanceTotal.innerText;
//         const previousBalanceTotal = parseFloat(balanceTotalText);
//         const newBalanceTotal = previousBalanceTotal + newDepositAmount;
//         balanceTotal.innerText = newBalanceTotal;
//         //clear the diposit field
//         depositInput.value = "";
//     });

// //handle withdraw event handler

// document
//     .getElementById("withdraw-button")
//     .addEventListener("click", function() {
//         const withdrawInput = document.getElementById("withdraw-input");
//         const withdrawAmounttext = withdrawInput.value;
//         const newWithdrawAmount = parseFloat(withdrawAmounttext);

//         // Set withdwraw total

//         const withdrawTotal = document.getElementById("withdraw-total");
//         const previousWithdrawText = withdrawTotal.innerText;
//         const previousWithdrawtotal = parseFloat(previousWithdrawText);
//         const newWithdrawTotal = previousWithdrawtotal + newWithdrawAmount;
//         withdrawTotal.innerText = newWithdrawTotal;

//         //update balance
//         const balanceTotal = document.getElementById("balance-total");
//         const previousBalanceText = balanceTotal.innerText;
//         const previousBalanceTotal = parseFloat(previousBalanceText);
//         const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
//         balanceTotal.innerText = newBalanceTotal;
//         //clear withdraw field
//         withdrawInput.value = "";
//     });
// Deposit section
function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);
    inputField.value = "";
    return amountValue;
}

function updateTotalField(totalFieldId, amount) {
    debugger;
    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;
    const previousTotal = parseFloat(totalText);
    totalElement.innerText = previousTotal + amount;
}

function updateBalance(depositAmount, isAdd) {
    const balanceTotal = document.getElementById("balance-total");
    // const balanceTotalText = balanceTotal.innerText;
    // const previousBalanceTotal = parseFloat(balanceTotalText);
    const previousBalanceTotal = getCurrentBalance();
    if (isAdd == true) {
        balanceTotal.innerText = previousBalanceTotal + depositAmount;
    } else if (isAdd == false) {
        balanceTotal.innerText = previousBalanceTotal - depositAmount;
    }
}

function getCurrentBalance() {
    const balanceTotal = document.getElementById("balance-total");
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    return previousBalanceTotal;
}
document
    .getElementById("deposit-button")
    .addEventListener("click", function() {
        // const depositInput = document.getElementById("deposit-input");
        // const depositAmountText = depositInput.value;
        // const depositAmount = parseFloat(depositAmountText);
        //get and update current deposit
        // const depositTotal = document.getElementById("deposit-total");
        // const depositTotalText = depositTotal.innerText;
        // const previousDepositTotal = parseFloat(depositTotalText);
        // depositTotal.innerText = previousDepositTotal + depositAmount;
        //get and update balance
        // const balanceTotal = document.getElementById("balance-total");
        // const balanceTotalText = balanceTotal.innerText;
        // const previousBalanceTotal = parseFloat(balanceTotalText);
        // balanceTotal.innerText = previousBalanceTotal + depositAmount;
        const depositAmount = getInputValue("deposit-input");
        if (depositAmount > 0) {
            updateTotalField("deposit-total", depositAmount);
            updateBalance(depositAmount, true);
        } else {
            alert("Please give a positive number");
        }
    });

// Withdraw section handle

document
    .getElementById("withdraw-button")
    .addEventListener("click", function() {
        // const withdrawInput = document.getElementById("withdraw-input");
        // const withdrawAmountText = withdrawInput.value;
        // const withdrawAmount = parseFloat(withdrawAmountText);

        //get and update withdraw total
        // const withdrawTotal = document.getElementById("withdraw-total");
        // const previousWithdrawText = withdrawTotal.innerText;
        // const previousWithdrawTotal = parseFloat(previousWithdrawText);
        // withdrawTotal.innerText = previousWithdrawTotal + withdrawAmount;

        // Balance update
        // const balanceTotal = document.getElementById("balance-total");
        // const balanceTotalText = balanceTotal.innerText;
        // const previousBalanceTotal = parseFloat(balanceTotalText);
        // balanceTotal.innerText = previousBalanceTotal - withdrawAmount;
        const withdrawAmount = getInputValue("withdraw-input");
        const currentBalance = getCurrentBalance();
        if (withdrawAmount > 0 && withdrawAmount <= currentBalance) {
            updateBalance(withdrawAmount, false);
            updateTotalField("withdraw-total", withdrawAmount);
        } else {
            alert("Please give a positive number");
        }

        // withdrawInput.value = "";
    });