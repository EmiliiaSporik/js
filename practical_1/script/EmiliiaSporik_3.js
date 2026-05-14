const exchangeRateMonth1 = 43.7;
const exchangeRateMonth2 = exchangeRateMonth1 + 1;
const exchangeRateMonth3 = exchangeRateMonth2 + 1;
const balance = 210000;
const amount_1 = 60000;
const amount_2 = 2600 * exchangeRateMonth2;
const amount_3 = 1700 * exchangeRateMonth3;

const totalIncome = amount_1 + amount_2 + amount_3;

const coworkingMonthly = 3500;
const hardwareRentMonthly = 4000;
const netflixUsdMonthly = 9.99;

const uahExpenses = (coworkingMonthly + hardwareRentMonthly) * 3;
const netflixExpenses = (netflixUsdMonthly * exchangeRateMonth1) + (netflixUsdMonthly * exchangeRateMonth2) + (netflixUsdMonthly * exchangeRateMonth3);
const totalExpenses = uahExpenses + netflixExpenses;

const singleTaxAmount = 4500;
const esvPercentage = 0.05;
const totalTaxes = singleTaxAmount + (totalIncome * esvPercentage);

const finalBalance = balance + totalIncome - totalExpenses - totalTaxes;

console.log(`В цьому кварталі Максим витратив ${totalExpenses.toFixed(3)} грн`);
console.log(`Загальний дохід Максима за квартал становить ${totalIncome} грн`);
console.log(`Загальна сума податків становить ${totalTaxes} грн`);
console.log(`Отже, наприкінці кварталу залишок на рахунку Максима становить ${finalBalance.toFixed(3)} грн`);