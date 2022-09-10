/* 
1. add withdraw button event handler
2. get withdraw amount by using getInputFieldValueById function
3. get previous withdraw amount by using getTextElementValueById function
4. calculate new withdraw Total and set the value
4-5: set new withdraw total by using setTextElementValueById function
5. get previous balance total by using getTextElementValueById function
6. calculate new balance total
7. set balance total using setTextElementValueById
*/

document.getElementById("btn-withdraw").addEventListener("click", function () {
  const newWithdrawAmount = getInputFieldValueById("withdraw-field");
  console.log(newWithdrawAmount);

  const previousWithdrawTotal = getTextElementValueById("withdraw-total");
  const previousBalanceTotal = getTextElementValueById("balance-total");

  // checking if the new withdraw amount is greater than balance total/invalid
  if (newWithdrawAmount > previousBalanceTotal) {
    console.warn(
      "You can not withdraw money while you don't have it in your account"
    );
    alert("You can not withdraw money while you don't have it in your account");
    return;
  } else if (newWithdrawAmount < 0 || isNaN(newWithdrawAmount)) {
    console.warn("Input is Invalid");
    alert("Input is Invalid");
    return;
  }

  const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
  setTextElementValueById("withdraw-total", newWithdrawTotal);

  const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
  setTextElementValueById("balance-total", newBalanceTotal);
});
