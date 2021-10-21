// const f1 =  document.querySelector('#bl1')
// const f2 =  document.querySelector('#2')
const f3 =  document.querySelector('#bl1')
// const f4 =  document.querySelector('#4')
const f5 =  document.querySelector('#bl2')
// const f6 =  document.querySelector('#6')
// const f7 =  document.querySelector('#7')
// const f8 =  document.querySelector('#8')
// const f9 =  document.querySelector('#9')
// const f10 =  document.querySelector('#10')
const f11 =  document.querySelector('#bl3')
// const f12 =  document.querySelector('#12')
// const f13 =  document.querySelector('#13')
// const f14 =  document.querySelector('#14')
// const f15 =  document.querySelector('#15')
// const f16 =  document.querySelector('#16')

// var boolf1 = false;
// var boolf2 = false;
// var boolf3 = false;



// f3.addEventListener('change', function(e){
//     if(f3.checked){
//         boolf1 = true; 
//         console.log("ant1: wahr")
//     }
//     if(f5.checked){
//         boolf2 = true; 
//         console.log("ant2: wahr")

//     }
//     if(f11.checked){
//         boolf3 = true; 
//         console.log("ant3: wahr")
//     }
// })
// f5.addEventListener('change', function(e){
//     if(f5.checked){
//         boolf2 = true; 
//         console.log("ant2: wahr")

//     }
//     if(f11.checked){
//         boolf3 = true; 
//         console.log("ant3: wahr")
//     }
//     if(f3.checked){
//         boolf1 = true; 
//         console.log("ant1: wahr")
//     }
// })
// f11.addEventListener('change', function(e){
//     if(f11.checked){
//         boolf3 = true; 
//         console.log("ant3: wahr")
//     }
//     if(f3.checked){
//         boolf1 = true; 
//         console.log("ant1: wahr")
//     }
//     if(f5.checked){
//         boolf1 = true; 
//         console.log("ant1: wahr")
//     }
// })


function checkInputs(){
    if(f11.checked && f3.checked && f5.checked){
        window.alert("Sie haben GEWONNEN");
        window.location.href ="Gewonnen.html"
    }else{
        window.alert("Überprüfe deine Antworten nochmal.")
    }
}





const windowIsh = document.querySelector('#p');
const DoorIsh = document.querySelector('#door');

DoorIsh.addEventListener('click', function(e){
    windowIsh.style.zIndex = "1000";
})


const backIsh = document.querySelector('#z');

backIsh.addEventListener('click', function(e){
    windowIsh.style.zIndex = "-1";
})

