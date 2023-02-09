
const getPost = async () => {
    const response = await fetch("https://v6.exchangerate-api.com/v6/c960c0ea3b75ef916638032a/latest/INR");
    console.log(response);
    const data = response.json();
    console.log(data)
    return data;
};

const convert_currency = async () => {
    const options = await getPost();

    var amount = document.getElementById('value').value;
    var currency = document.getElementById('select-currency').value;
    var selection = document.getElementById('currency');
    var rates = options.conversion_rates;   

if (selection.value == 'INR') {
    var total = amount * rates[currency];
}
else {
    var temp = 1 / rates[selection.value];
    var temp1 = 1 / rates[currency];
    var total = (temp / temp1) * amount;
}
document.getElementById('result').value = total.toFixed(2);
}

const change_side = () => {
    var temp = document.getElementById('select-currency').value;
    document.getElementById('select-currency').value = document.getElementById('currency').value;
    document.getElementById('currency').value = temp;

    convert_currency();
}