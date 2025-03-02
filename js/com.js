
document.getElementById('fast-btn').addEventListener('click', function(event){
    event.preventDefault();
    const amount=document.getElementById('add-point').value;
    alert();
})

// document.getElementById('add-money').addEventListener('click', function(event){
//     event.preventDefault();
//     const amount= document.getElementById('amount').value;
//     const convertadeAmout= parseInt(amount);
//     const pin= document.getElementById('pin').value;
//     const convertadePin= parseInt(pin);
//     const mainAmaunt= document.getElementById('main-amount').innerText;
    
//     const convertedmainAmaunt= parseFloat(mainAmaunt);
    
    
    
    
    
    
//     if(amount && pin){
//         if(convertadePin===1234){
//             const sum = convertedmainAmaunt + convertadeAmout;
//             document.getElementById('main-amount').innerText=sum;
            
//         }
//         else{
//             alert('enter valid pin')
//         }
        
//     }
//     else{
//         alert('enter amount')
//     }
    
    
//     })

// document.getElementById('fast-btn').addEventListener('click', function(event){
//     console.log('hi');
//     event.preventDefault();
//     const acountNumber= document.getElementById('acount-number').value;
    
//    if(acountNumber.length===11){
//     if(pin==='1234'){
//         window.location.href='./main.html'
//     }
//     else{
//         alert('pin thik nai');
//     }
//    }
//    else{
//     alert('need valid acount number')
// //    }
// })