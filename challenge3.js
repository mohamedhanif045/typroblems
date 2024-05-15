function calculateNetSalary(basicSalary, benefits) {
    const grossSalary = basicSalary + benefits;
    const payee = (grossSalary <= 24000) ? 0 :
                  (grossSalary <= 32333) ? (grossSalary - 24000) * 0.1 :
                  (grossSalary - 32333) * 0.25 + 833;
    const nhifDeductions = Math.min(1700, 0.01 * grossSalary);
    const nssfDeductions = Math.min(200, 0.06 * basicSalary);
    const netSalary = grossSalary - payee - nhifDeductions - nssfDeductions;
  
    return {
      payee: payee,
      nhifDeductions: nhifDeductions,
      nssfDeductions: nssfDeductions,
      grossSalary: grossSalary,
      netSalary: netSalary
    };
  }

  const basicSalary = 30000;
  const benefits = 5000;
  const salaryDetails = calculateNetSalary(basicSalary, benefits);
  console.log("Payee (Tax):", salaryDetails.payee);
  console.log("NHIF Deductions:", salaryDetails.nhifDeductions);
  console.log("NSSF Deductions:", salaryDetails.nssfDeductions);
  console.log("Gross Salary:", salaryDetails.grossSalary);
  console.log("Net Salary:", salaryDetails.netSalary);
  