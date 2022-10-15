function slowAddition(n1, n2) {
    return new Promise(resolve => {
        setTimeout(() => resolve(n1 + n2), 3000)
    })
}
async function increaseSalary(base, increase) {
    const newSalary = await slowAddition(base, increase);
    console.log(`New Salary ${newSalary}`);
    return newSalary;
}
const newSalary = increaseSalary(10000, 500).then(newSalary => console.log(`New salary:`, newSalary))
