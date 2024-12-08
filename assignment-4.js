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




function  sendNotification(mail) {
    
    const validEmail = mail.indexOf('@');
    if ( validEmail === 0 ) {
        return "Invalid email address!";
    }
    const userName = mail.slice(0, validEmail);
    const domain = mail.slice(validEmail + 1);
    const notification = `${userName} sent you an email from ${domain}.`;
    return notification;
}




function checkDigitsInName(str) {
    
    if (typeof str !== 'string'  ) {
        return "invalid Name";
    }
    else {
        const  numberCheck = /\d/;
        return numberCheck.test(str);
   }
}

function calculateFinalScore(obj) {

    const { name, testScore, schoolGrade,isFFamily  } = obj;
    if (typeof name == 'string' && typeof testScore == 'number' && typeof schoolGrade == 'number' && typeof isFFamily == 'boolean' && obj !== 'object') {
       
        const familyMarks = 20;
        const total = testScore + schoolGrade + (isFFamily ? familyMarks : 0);
            return total >= 80; 
    }
    else {
        return "Invalid input";
    }
}



function waitingTime(time, serial) {
    let sum = 0;
    if (!Array.isArray(time) || time.length === 0 || typeof serial!== 'number' || serial <= 0) {
        return 'Invalid input';
    }
    for (let i = 0; i < time.length; i++) {
        sum += time[i];
    }
    const averageTime = sum / time.length;
    const waitingPeopleCount = (serial-1) - time.length;
    const waitingTime = waitingPeopleCount * Math.round(averageTime);
    return Math.max(0, waitingTime);

}


