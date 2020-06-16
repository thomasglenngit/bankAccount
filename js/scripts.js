function BankAccount (initialDeposit, depositAmount, withdrawalAmount, balance) {
  this.initialDeposit = initialDeposit;
  this.depositAmount = depositAmount;
  this.withdrawalAmount = withdrawalAmount;
  this.balance = balance;
}

BankAccount.prototype.bankAccountBalance = function() {
  return this.initialDeposit + this.depositAmount - this.withdrawalAmount;
}

$(document).ready(function() {
  $("#bank").submit(function(event) {
  event.preventDefault()
  let name = $("#name").val();
  let initialDeposit = parseInt($("#initialDeposit").val());
  let depositAmount = parseInt($("#depositAmount").val());
  let withdrawalAmount =  parseInt($("#withdrawalAmount").val());
  let newBankAccount = new BankAccount(initialDeposit, depositAmount, withdrawalAmount)

  $(".name").text(name);
  $("#output").show();
  $("#balance").text(newBankAccount.bankAccountBalance());
  $("#bank").hide();
  });
  
  
});