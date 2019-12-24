"use strict";


    function randomInteger(min, max) {
        // получить случайное число от (min-0.5) до (max+0.5)
        let rand = min - 0.5 + Math.random() * (max - min + 1);
        return Math.round(rand);
    }

    let food = randomInteger(50, 100);

    let clean = randomInteger(50, 100);

    let happiness = randomInteger(50, 100);

    let timeP = 0;

    let linear1 = setInterval(depleteH, 5000);

    let linear2 = setInterval(depleteS, 5000);

    let linear3 = setInterval(depleteA, 5000);


    let gameover = 0;

    function TimeC() {
        if (food > 0 && clean > 0 && happiness > 0) {
            document.getElementById('TimeValue').value = timeP;
            timeP++;
        }
    }

    function depleteH(){
        if(food == 0){
            clearInterval(linear1);
            alert("Your pet is starving!");
            //gameovercheck();
        }
        else{
            food--;
            document.getElementById("food").value = food;
        }
    }

    function depleteS(){
        if(clean == 0){
            clearInterval(linear2);
            alert("Your pet is starving!");
            //gameovercheck();
        }
        else{
            clean--;
            document.getElementById("clean").value = clean;
        }
    }

    function depleteA(){
        if(happiness == 0){
            clearInterval(linear3);
            alert("Your pet is starving!");
            //gameovercheck();
        }
        else{
            happiness--;
            document.getElementById("happiness").value = happiness;
        }
    }

    function Loop(time = 5) {
        let total = food + clean + happiness;

        if (food <= 0 || clean <= 0 || happiness <= 0 ) {
            document.getElementById('pet').src="images/mop_d.png";
            document.getElementById('pet').innerHTML = "bad";
        } else if (total > 250) {
            document.getElementById('pet').src="images/mops_smile.png";
        } else if (total > 200) {
            document.getElementById('pet').src="images/mops_smile.png";
        } else if (total > 100) {
            document.getElementById('pet').src="images/mops_smile.png";
        } else if (total > 50) {
            document.getElementById('pet').src="images/mop_d.png";
        }

        food = food - parseInt(time);
        clean = clean - parseInt(time);
        happiness = happiness - parseInt(time);

        // document.getElementById('food').innerHTML = food;
        // document.getElementById('clean').innerHTML = clean;
        // document.getElementById('happiness').innerHTML = happiness;


    }



    function Start() {
        Loop();
        let timeS = setInterval(TimeC, 1000);
    }



    function FoodP() {
        food += 30;
        clean -= 20;
        document.getElementById('food').innerHTML = food;
        document.getElementById('clean').innerHTML = clean;

    }
    function CleanP() {
        clean += 40;
        happiness-= 20;
        document.getElementById('clean').innerHTML = clean;
        document.getElementById('happiness').innerHTML = happiness;

    }
    function HappinessP() {
        happiness += 15;
        food -= 10;
        document.getElementById('happiness').innerHTML = happiness;
        document.getElementById('food').innerHTML = food;

    }

    // function gameovercheck(){
    //     if(food == 0 && clean == 0 && happiness == 0){
    //         alert("Game Over!");
    //         gameover++;
    //         spriteHandler();
    //     }
    //     else{
    //         document.getElementById('pet').src="images/mops_smile.png";
    //     }
    // }



Start();
