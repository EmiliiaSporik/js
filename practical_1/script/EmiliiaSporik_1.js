const amount = 3500;

const exchangeRate = 43.7;
const bankCommissionRate = 0.005;

const amountUah = amount * exchangeRate;
const commissionAmount = amountUah * bankCommissionRate;
const finalAmountUah = amountUah - commissionAmount;

console.log(`Після виконання проєкту, буде нараховано ${finalAmountUah} грн з урахуванням комісії банку!`);