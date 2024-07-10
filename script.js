const fromAmt=document.querySelector(".amount");
const convertedAmt=document.querySelector(".convertedAmount");
const fromCurr=document.querySelector(".fromCurrency");
const toCurr=document.querySelector(".toCurrency");
const res=document.querySelector(".result");
const containerElement=document.querySelector(".container");


//array of all possible currencies of different countries
const countries = [
    {code: "USD", name: "United States Dollar"},
    {code: "INR", name: "Indian Rupee"},
    {code: "EUR", name: "Euro"},
    {code: "GBP", name: "British Pound Sterling"},
    {code: "AUD", name: "Australian Dollar"},
    {code: "CAD", name: "Canadian Dollar"},
    {code: "JPY", name: "Japanese Yen"},
    {code: "CNY", name: "Chinese Yuan"},
    {code: "CHF", name: "Swiss Franc"},
    {code: "HKD", name: "Hong Kong Dollar"},
    {code: "NZD", name: "New Zealand Dollar"},
    {code: "SGD", name: "Singapore Dollar"},
    {code: "SEK", name: "Swedish Krona"},
    {code: "NOK", name: "Norwegian Krone"},
    {code: "DKK", name: "Danish Krone"},
    {code: "ZAR", name: "South African Rand"},
    {code: "BRL", name: "Brazilian Real"},
    {code: "RUB", name: "Russian Ruble"},
    {code: "MXN", name: "Mexican Peso"},
    {code: "IDR", name: "Indonesian Rupiah"},
    {code: "MYR", name: "Malaysian Ringgit"},
    {code: "PHP", name: "Philippine Peso"},
    {code: "THB", name: "Thai Baht"},
    {code: "VND", name: "Vietnamese Dong"},
    {code: "KRW", name: "South Korean Won"},
    {code: "TRY", name: "Turkish Lira"},
    {code: "PLN", name: "Polish Zloty"},
    {code: "ILS", name: "Israeli New Shekel"},
    {code: "HUF", name: "Hungarian Forint"},
    {code: "CZK", name: "Czech Koruna"},
    {code: "SAR", name: "Saudi Riyal"},
    {code: "AED", name: "United Arab Emirates Dirham"},
    {code: "QAR", name: "Qatari Riyal"},
    {code: "KWD", name: "Kuwaiti Dinar"},
    {code: "BHD", name: "Bahraini Dinar"},
    {code: "OMR", name: "Omani Rial"},
    {code: "EGP", name: "Egyptian Pound"},
    {code: "NGN", name: "Nigerian Naira"},
    {code: "GHS", name: "Ghanaian Cedi"},
    {code: "KES", name: "Kenyan Shilling"},
    {code: "TZS", name: "Tanzanian Shilling"},
    {code: "UGX", name: "Ugandan Shilling"},
    {code: "MAD", name: "Moroccan Dirham"},
    {code: "DZD", name: "Algerian Dinar"},
    {code: "TND", name: "Tunisian Dinar"},
    {code: "ARS", name: "Argentine Peso"},
    {code: "CLP", name: "Chilean Peso"},
    {code: "COP", name: "Colombian Peso"},
    {code: "PEN", name: "Peruvian Nuevo Sol"},
    {code: "UYU", name: "Uruguayan Peso"},
    {code: "PYG", name: "Paraguayan Guarani"},
    {code: "BOB", name: "Bolivian Boliviano"},
    {code: "VES", name: "Venezuelan Bolívar"},
    {code: "UAH", name: "Ukrainian Hryvnia"},
    {code: "BGN", name: "Bulgarian Lev"},
    {code: "RON", name: "Romanian Leu"},
    {code: "HRK", name: "Croatian Kuna"},
    {code: "ISK", name: "Icelandic Krona"},
    {code: "JMD", name: "Jamaican Dollar"},
    {code: "TTD", name: "Trinidad and Tobago Dollar"},
    {code: "BBD", name: "Barbadian Dollar"},
    {code: "BSD", name: "Bahamian Dollar"},
    {code: "BZD", name: "Belize Dollar"},
    {code: "HTG", name: "Haitian Gourde"},
    {code: "JOD", name: "Jordanian Dinar"},
    {code: "LBP", name: "Lebanese Pound"},
    {code: "SYP", name: "Syrian Pound"},
    {code: "IQD", name: "Iraqi Dinar"},
    {code: "YER", name: "Yemeni Rial"},
    {code: "IRR", name: "Iranian Rial"},
    {code: "PKR", name: "Pakistani Rupee"},
    {code: "AFN", name: "Afghan Afghani"},
    {code: "BDT", name: "Bangladeshi Taka"},
    {code: "LKR", name: "Sri Lankan Rupee"},
    {code: "NPR", name: "Nepalese Rupee"},
    {code: "BND", name: "Brunei Dollar"},
    {code: "KHR", name: "Cambodian Riel"},
    {code: "LAK", name: "Lao Kip"},
    {code: "MMK", name: "Burmese Kyat"},
    {code: "MNT", name: "Mongolian Tugrik"},
    {code: "BWP", name: "Botswana Pula"},
    {code: "NAD", name: "Namibian Dollar"},
    {code: "SZL", name: "Swazi Lilangeni"},
    {code: "MZN", name: "Mozambican Metical"},
    {code: "AOA", name: "Angolan Kwanza"},
    {code: "MWK", name: "Malawian Kwacha"},
    {code: "ZMW", name: "Zambian Kwacha"},
    {code: "ETB", name: "Ethiopian Birr"},
    {code: "SOS", name: "Somali Shilling"},
    {code: "GEL", name: "Georgian Lari"},
    {code: "AMD", name: "Armenian Dram"},
    {code: "AZN", name: "Azerbaijani Manat"},
    {code: "KZT", name: "Kazakhstani Tenge"},
    {code: "KGS", name: "Kyrgyzstani Som"},
    {code: "TJS", name: "Tajikistani Somoni"},
    {code: "UZS", name: "Uzbekistani Som"},
    {code: "BYN", name: "Belarusian Ruble"},
    {code: "MGA", name: "Malagasy Ariary"},
    {code: "RWF", name: "Rwandan Franc"},
    {code: "CDF", name: "Congolese Franc"},
    {code: "XAF", name: "Central African CFA Franc"},
    {code: "XOF", name: "West African CFA Franc"}
];


//creating option elements to add in the 2 select tags (users will select their currencies from here)
countries.forEach(country => {
    const option1=document.createElement('option');      //currency options in 1st select
    option1.value=country.code;
    option1.textContent=`${country.code} (${country.name})`;
    fromCurr.appendChild(option1);

    const option2=document.createElement('option');      //currency options in 2nd select
    option2.value=country.code;
    option2.textContent=`${country.code} (${country.name})`;
    toCurr.appendChild(option2);

    fromCurr.value="USD";     //this is the default value
    toCurr.value="INR";
});


//fetch exchange rates
const getExchangeRates=async()=>{
    const amt=parseFloat(fromAmt.value);     // amount entered by the user
    const givenCurr=fromCurr.value;          // currency entered by the user
    const convertCurr=toCurr.value;          //desired currency by the user
    res.textContent="Fetching Exchange Rates...";
    try{
    //Fetch API
    const response=await fetch(`https://v6.exchangerate-api.com/v6/636b03aa431d7440b0077b1e/latest/${givenCurr}`);   //fetch tells us to give an url and it will fetch the data and return us a promise
    const data=await response.json();   //to convert raw data to json
    console.log(data);
    const conversionRates=data.conversion_rates[convertCurr];
    const output=(amt*conversionRates).toFixed(2);
    convertedAmt.value=output;

    res.textContent=`${fromAmt.value} ${givenCurr} = ${output} ${convertCurr}`;
    }
    catch(error){
        containerElement.innerHTML=`<h1>Error while fetching exchange rates!</h1>`;
    }
}


//function call on user amount input
fromAmt.addEventListener('input',getExchangeRates);

//function call on user currency change
fromCurr.addEventListener('change',getExchangeRates);
toCurr.addEventListener('change',getExchangeRates);