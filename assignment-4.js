function calculateTax(income, expense) {
    if (typeof income !== 'number' || typeof expense !== 'number' || income <= expense) {
        const output1 = 'Invalid input';
        return output1;
    }
    const taxableIncome = income - expense;
    const taxRate = 0.2;
    const taxPay = taxableIncome * taxRate;
    return Number(taxPay);
}

console.log(calculateTax(23333, 170053));