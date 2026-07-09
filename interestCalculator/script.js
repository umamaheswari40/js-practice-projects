function calculate(){
    const principle = document.getElementById("principalAmount");
    const rate = document.getElementById("interestRate");
    const year = document.getElementById("Years");
    const totalAmount = document.getElementById("total-amount");

    let principalInput = Number(principle.value);
    let rateInput = Number(rate.value) / 100;
    let yearInput = Number(year.value);

    if(principalInput < 0){
        principalInput = 0;
    }
    if(interestRate < 0){
        interestRate = 0;
    }
    if(Years < 0){
        Years = 0;
    }

    const compoundIn = principalInput * Math.pow(1 + rateInput, yearInput);
    totalAmount.textContent = `$${compoundIn.toFixed(2)}`;
}
