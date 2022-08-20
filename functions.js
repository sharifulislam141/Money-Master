function totalCost(){
    const foodCost = parseInt(document.getElementById('food-cost').value);
    const rentCost = parseInt( document.getElementById('house-rent-cost').value);
    const clothCost = parseInt(document.getElementById('cloths-cost').value);
    const totalCost = foodCost + rentCost + clothCost;
    if(totalCost > 0){
        return totalCost;
    }
     else{
        document.getElementById('error-message2').style.display = 'block';
        return;
     }
}



document.getElementById('calculate-button').addEventListener('click',function(){
    const incomeTotal = document.getElementById('income-input').value;
    const CostTotal = totalCost();
    if( incomeTotal > CostTotal){
        if( incomeTotal > 0){
            document.getElementById('total-expenses').innerText = CostTotal;
            const remainingBalance = incomeTotal - CostTotal;
            console.log(remainingBalance)
            document.getElementById('remaining-balance').innerText = remainingBalance;
        }
        else{ 
            document.getElementById('error-message2').style.display = 'block';
            return;
        }
    
    }
    else{
        document.getElementById('error3').style.display = 'block';
        document.get
        return;
    }


    

})

document.getElementById('save-button').addEventListener('click',function(){
    const savingPercent = parseInt(document.getElementById('saving-input').value) / 100;
    const remainingBalance = parseFloat( document.getElementById('remaining-balance').innerText);
    const savingAmount = parseInt((remainingBalance *savingPercent).toFixed(2));
    document.getElementById('saving-amount').innerText = savingAmount;
    const netBalance = remainingBalance - savingAmount;
    document.getElementById('remaining-balance-afterSaving').innerText = netBalance;
   
    
    


})