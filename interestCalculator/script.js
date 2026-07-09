function calculate(){
    const principle = document.getElementById("principalAmount");
    const rate = document.getElementById("interestRate");
    const year = document.getElementById("Years");
    const totalAmount = document.getElementById("total-amount");

    let principalInput = Number(principle.value);
    let rateInput = Number(rate.value) / 100;
    let yearInput = Number(year.value);


    const compoundIn = principalInput * Math.pow(1 + rateInput, yearInput);
    totalAmount.textContent = `$${compoundIn.toFixed(2)}`;
}
