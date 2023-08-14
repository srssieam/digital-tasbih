const increaseBtn = document.querySelectorAll('.incriment');
const decreaseBtn = document.getElementsByClassName('decriment');
const subhanAlloh = document.querySelector('.countSubhanalloh');
const alhamdulillah = document.querySelector('.countAlhamdulillah');
const allohuakbar = document.querySelector('.countAllohuakbar');
const resetBtn = document.querySelector('.reset');
    increaseBtn[0].addEventListener('click', function () {   
        subhanAlloh.innerText++; 
        if(subhanAlloh.innerText > 33){
            alert('SubhanAlloh completed. pleas fillup another one')
            subhanAlloh.innerText = 33;
        }
    })
    increaseBtn[1].addEventListener('click', function () {   
        alhamdulillah.innerText++; 
        if(alhamdulillah.innerText > 33){
            alert('alhamdulillah completed. pleas fillup another one')
            alhamdulillah.innerText = 33;
        }
    })
    increaseBtn[2].addEventListener('click', function () {   
        allohuakbar.innerText++; 
        if(allohuakbar.innerText > 34){
            alert('allohuakbar completed. pleas fillup another one')
            allohuakbar.innerText = 34;
        }
    })

    decreaseBtn[0].addEventListener('click', function () {   
        subhanAlloh.innerText--; 
        if(subhanAlloh.innerText < 0){
            alert('you cant count negetive');
            subhanAlloh.innerText = 0;
        }
    })
    decreaseBtn[1].addEventListener('click', function () {   
        alhamdulillah.innerText--; 
        if(alhamdulillah.innerText < 0){
            alert('you cant count negetive');
            alhamdulillah.innerText = 0;
        }
    })
    decreaseBtn[2].addEventListener('click', function () {   
        allohuakbar.innerText--;
        if(allohuakbar.innerText < 0){
            alert('you cant count negetive');
            allohuakbar.innerText = 0;
        } 
    })
    resetBtn.addEventListener('click', function () {   
        allohuakbar.innerText = 0;
        subhanAlloh.innerText = 0;
        alhamdulillah.innerText = 0;
    })