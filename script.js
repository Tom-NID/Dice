const dice = document.getElementById("dice")
var stats = [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]]
var total = 0

dice.onclick = function(){throwDice()}

function throwDice(){
    total += 1
    var resultat = Math.round(Math.random() * 6 - 0.5) + 1
    stats[resultat - 1][0] += 1
    document.getElementById('n' + resultat).innerHTML = stats[resultat - 1][0]
    for(let i = 1; i < 7 ; i++){ 
        stats[i - 1][1] = (stats[i - 1][0] / total) * 100
        document.getElementById('p' + i).innerHTML = stats[i - 1][0] + '/' + total
        document.getElementById('f' + i).innerHTML = Math.round(stats[i - 1][1] * 100) / 100 + '%'
    }
    
    console.log(resultat)
    function calcRand(mod){
        var deg 
        while(deg % 4 != mod){
            deg = Math.round(Math.random() * 24)
        }
        return deg * 90
    }
    
    var spinX = calcRand(0)
    var spinY = calcRand(0)
    var spinZ = calcRand(0)

    switch(resultat){
        case 1:
            spinX = calcRand(3)
            break;
        case 2:
            spinY = calcRand(1)
            break;
        case 3:
            spinX = calcRand(3)
            break;
        case 4:
            break;
        case 5:
            spinY = calcRand(3)
            break;
        case 6:
            spinX = calcRand(1)
            break;
    }

    dice.animate([
        { 
            transform: "rotateX(" + String(spinX) + "deg) rotateY(" + String(spinY) + "deg) rotateZ(" + String(spinZ) + "deg)"
            
        },
      ], {
        duration: 2000,
      });
      setTimeout(() => {
        dice.style.transform = "rotateX(" + String(spinX) + "deg) rotateY(" + String(spinY) + "deg) rotateZ(" + String(spinZ) + "deg)"
      }, 2000);
}

