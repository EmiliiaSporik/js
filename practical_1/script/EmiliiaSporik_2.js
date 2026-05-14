const exchangeRate = 43.7;
const amount_1 = 68000;
const amount_2 = 2600 * exchangeRate;
const amount_3 = 1900 * exchangeRate;

const totalIncome = amount_1 + amount_2 + amount_3;

const singleTaxPercentage = 0.05;
const esvAmount = 4500;
const totalTax = (totalIncome * singleTaxPercentage) + esvAmount;

console.log(`Загальна сума доходу Максима складає ${totalIncome} грн.`);
console.log(`В кінці кварталу Максиму необхідно сплатити ${totalTax} грн.`);