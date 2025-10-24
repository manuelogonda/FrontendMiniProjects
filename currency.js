const convertBtn = document.getElementById("convertBtn");
const resultBox = document.getElementById("result");
const errorBox = document.getElementById("error");

const apiKey = "6f45910a53a3aa5968c68e2e";

async function convertCurrency() {
    const fromCurrency = document.getElementById("fromCurrency").value;
    const toCurrency = document.getElementById("toCurrency").value;
    const amount = parseFloat(document.getElementById("userAmount").value);
    
    errorBox.textContent = "";
    resultBox.textContent = "Converting...";

    if(isNaN(amount) || amount <= 0 ) {
        errorBox.textContent = "Please enter a valid amount.";
        resultBox.textContent = "";
        return;
    }
    if(fromCurrency === toCurrency) {
        resultBox.textContent = `You cannot convert ${fromCurrency} to itself.`;
        return;
    }

    try{
        const apiUrl = `https://v6.exchangerate-api.com/v6/${apiKey}/pair/${fromCurrency}/${toCurrency}/${amount}`;
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error("Failed to fetch conversion data.");
        }
        const data = await response.json();
        const conversionRate = data.conversion_rate;
        const convertedAmount = (amount * conversionRate).toFixed(2);
        resultBox.textContent = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency} (Rate: ${conversionRate})`;
    }catch(error) {
        console.log(error)
        errorBox.textContent = `Error: ${error.message}`;
        resultBox.textContent = "";
    }
}
convertBtn.addEventListener("click", convertCurrency);
