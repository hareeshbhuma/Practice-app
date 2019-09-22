const calcTotal = (total, tipAmt, taxAmt) => {
    const grandTotal = total + tipAmt + taxAmt;
    return grandTotal;
}

const calcTip = (total, rate) => {
    return total * (rate/100);
}

const calcTax = (total) => {
    return total * (5.50/100);
}


document.querySelector("#calc-button").addEventListener("click", () => {
    //Reading in total and rate value
    const total = parseFloat(document.querySelector("#total").value);
    const rate = parseFloat(document.querySelector("#rate").value);
    
    //Calculating tip, tax, and grand total
    const tipTotal = calcTip(total, rate);
    const taxTotal = calcTax(total);
    const result = calcTotal(total, tipTotal, taxTotal);

    //Displaying results
    document.querySelector("#rate").innerHTML = rate;
    document.querySelector("#tip").innerHTML = "$" + tipTotal.toFixed(2);
    document.querySelector("#tax").innerHTML = "$" + taxTotal.toFixed(2);
    document.querySelector("#grand-total").innerHTML = "$" + result.toFixed(2);
    
});
    


    



