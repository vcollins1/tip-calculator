
const form = document.querySelector(".calculator__inputs");
const tips = document.querySelector("#tips");
const tipAmount = document.querySelector(".money--tip");
const total = document.querySelector(".money--total");
const reset = document.querySelector(".reset");

tips.addEventListener("click", e => {
    if (e.target.classList.contains("tip")) {
        document.querySelector(".tip--active").classList.remove("tip--active");
        e.target.classList.add("tip--active");
    }
});

form.addEventListener("submit", e => {
    e.preventDefault();
    const bill = document.querySelector("#bill").value == '' ? 0 : parseFloat(document.querySelector("#bill").value);

        let percentage;
    if (document.querySelector(".tip--active").classList.contains("tip--custom")) {
        percentage = parseFloat(document.querySelector(".tip--active").value);
        console.log("perPerson")
    } else {
        percentage = parseFloat(document.querySelector(".tip--active").innerText.replace('%', ''));
    }



    const people = document.querySelector("#people").value == '' ? 0 : parseFloat(document.querySelector("#people").value);

    const eachTip = (bill * (percentage / 100) / people).toFixed(2);
    const billSplit = parseFloat(bill / people).toFixed(2);
    const perPerson = (parseFloat(billSplit) + parseFloat(eachTip)).toFixed(2);

    tipAmount.innerHTML = eachTip;
    total.innerHTML = perPerson;
});

reset.addEventListener("click", e => {
    tipAmount.innerHTML = "$0.00";
    total.innerHTML = "$0.00"
})