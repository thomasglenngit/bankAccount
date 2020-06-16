function BankAccount () {
  this.initialDeposit = initialDeposit;
  this.depositAmount = depositAmount;
  this.withdrawalAmount = withdrawalAmount;
  this.balance = "";
}

BankAccount.prototype.bankAccountBalance = function() {
  return this.initialDeposit + this.depositAmount - this.withdrawalAmount;
}


$(document).ready(function() {
  $("#bank").submit(function(event) {
  event.preventDefault()
  
  let name = $("#name").val();
  let initialDeposit = $("#initialDeposit").val();
  let depositAmount = $("#depositAmount").val();
  let withdrawalAmount =  $("#withdrawalAmount").val();
  let newBankAccount = new BankAccount(name, initialDeposit, depositAmount, withdrawalAmount)
  $("#output").show();
  $("#balance").text(newBankAccount.bankAccountBalance);
    console.log();
  });
});