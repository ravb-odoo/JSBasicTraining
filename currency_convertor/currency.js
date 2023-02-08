
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

    // currency_names = ["Indian Rupee", "United Arab Emirates Dirham", "Afghan Afghani", "Albanian Lek", "Armenian Dram", "Netherlands Antillean Guilder", "Angolan Kwanza",
    //     "Argentine Peso", "Austrian Schilling", "Australian Dollar", "Aruban Florin", "Azerbaijani Manat", "Bosnia-Herzegovina Convertible Mark", "Barbadian Dollar", "Bangladeshi Taka",
    //     "Bulgarian Lev", "Bahraini Dinar", "Burundian Franc", "Bermudan Dollar", "Brunei Dollar", "Bolivian Boliviano", "Brazilian Real", "Bahamian Dollar",
    //     "Bhutanese Ngultrum", "Botswanan Pula", "Belarusian Ruble", "Belize Dollar", "Canadian Dollar", "Congolese Franc", "Swiss Franc", "Chilean Peso",
    //     "Chinese Yuan", "Colombian Peso", "Costa Rican Colón", "Cuban Peso", "Cape Verdean Escudo", "Czech Koruna", "Djiboutian Franc", "Danish Krone",
    //     "Dominican Peso", "Algerian Dinar", "Egyptian Pound", "Eritrean Nakfa", "Ethiopian Birr", "Euro", "Fijian Dollar", "British Pound",
    //     "Georgian Lari", "Ghanaian Cedi", "Gibraltar Pound", "Gambian Dalasi", "Guinean Franc", "Guatemalan Quetzal", "Guyanaese Dollar", "Hong Kong Dollar",
    //     "Honduran Lempira", "Croatian Kuna", "Haitian Gourde", "Hungarian Forint", "Indonesian Rupiah", "Israeli New Shekel", "Iraqi Dinar",
    //     "Iranian Rial", "Icelandic Króna", "Jamaican Dollar", "Jordanian Dinar", "Japanese Yen", "Kenyan Shilling", "Kyrgystani Som", "Cambodian Riel",
    //     "Comorian Franc", "South Korean Won", "Kuwaiti Dinar", "Cayman Islands Dollar", "Kazakhstani Tenge", "Laotian Kip", "Lebanese Pound", "Sri Lankan Rupee",
    //     "Liberian Dollar", "Lesotho Loti", "Libyan Dinar", "Moroccan Dirham", "Moldovan Leu", "Malagasy Ariary", "Macedonian Denar", "Myanmar Kyat",
    //     "Mongolian Tugrik", "Macanese Pataca", "Mauritanian Ouguiya", "Mauritian Rupee", "Maldivian Rufiyaa", "Malawian Kwacha", "Mexican Peso", "Malaysian Ringgit",
    //     "Mozambican Metical", "Nigerian Naira", "Nicaraguan Córdoba", "Norwegian Krone", "Nepalese Rupee", "New Zealand Dollar", "Omani Rial", "Panamanian Balboa", "Peruvian Sol",
    //     "Papua New Guinean Kina", "Philippine Peso", "Pakistani Rupee", "Polish Zloty", "Paraguayan Guarani", "Qatari Rial", "Romanian Leu", "Serbian Dinar",
    //     "Russian Ruble", "Rwandan Franc", "Saudi Riyal", "Solomon Islands Dollar", "Seychellois Rupee", "Sudanese Pound", "Swedish Krona", "Singapore Dollar", "St. Helena Pound",
    //     "Sierra Leonean Leone", "Somali Shilling", "Surinamese Dollar", "South Sudanese Pound", "Syrian Pound", "Swazi Lilangeni", "Thai Baht", "Tajikistani Somoni",
    //     "Turkmenistani Manat", "Tunisian Dinar", "Tongan Paʻanga", "Turkish Lira", "Trinidad & Tobago Dollar", "New Taiwan Dollar", "Tanzanian Shilling", "Ukrainian Hryvnia",
    //     "Ugandan Shilling", "US Dollar", "Uruguayan Peso", "Uzbekistani Som", "Vietnamese Dong", "Vanuatu Vatu", "Samoan Tala", "Central African CFA Franc",
    //     "East Caribbean Dollar", "West African CFA Franc", "RINET Funds", "Yemeni Rial", "South African Rand (financial)", "South African Rand", "Zambian Kwacha", "Zimbabwean Dollar",]
    // var i=0;
    // for (option of Object.keys(rates)) {

    //     const newOption = document.createElement("option");
    //     console.log(option);
    //     newOption.value = option;
    //     newOption.text = currency_names[i];
    //     selection.appendChild(newOption);

    //     i++;
    // }

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