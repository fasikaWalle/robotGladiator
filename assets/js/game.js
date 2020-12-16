var EnemyName = "roborto";
var playerHealth = 200;
var playerAttack = 10;
var enemyAttack = [10, 20, 30];
var playerMoney = 20;
var enemyHealth = [30, 20, 30];
var enemyName = ["roborto", "alan", "k'naan"];

var fight = function () {
    for (var i = 0; i < enemyName.length; i++) {
        while (enemyHealth != 0 && playerHealth != 0) {
            var checkSkip = window.confirm("do you want to skip the opponent?");
            if (checkSkip) {
                playerMoney = playerMoney - 10;
                alert("the remaining money of" + "  " + playerName + "  " + "is:" + "  " + playerMoney);
                console.log("the remaining money of" + "  " + playerName + "  " + "is:" + "  " + playerMoney);
                break;
            }
            enemyHealth[i] = enemyHealth[i] - playerAttack;
            if (enemyHealth[i] != 0) { // player defeat the enemy
                alert(playerName + " " + "attack" + " " + enemyName[i] + " " + "the remaining health of" + " " + enemyName[i] + " " + "is:" + " " + enemyHealth[i]);
                console.log(playerName + " " + "attack" + " " + enemyName[i] + " " + "the remaining health of" + " " + enemyName[i] + " " + "is:" + " " + enemyHealth[i]);
            } else { // enemy loose
                alert(enemyName[i] + " " + "has died!");
               console.log(enemyName[i] + " " + "has died!");
                break;
            } 
    
            playerHealth = playerHealth - enemyAttack[i];
            if (playerHealth != 0) { // enemy attack player
                alert(enemyName[i] + " " + "attack" + " " + playerName + " " + "the remaining health of " + " " + playerName + " " + " is:" + " " + playerHealth);
                console.log(enemyName[i] + " " + "attack" + " " + playerName + " " + "the remaining health of " +" "+ playerName +" " + " " + playerHealth);
            } else { // player loose
                alert(playerName + " " + "has died!");
                // console.log(playerName + " " + "has died!");
                break;
            }

        }

}
}

alert("welcome to  robot gladiators");
var playerName = window.prompt("insert your name");
function show(){
var start = window.prompt("write fight if you want to fight  or write skip if you want to skip");
return start;
};

var showValue=show();
if(showValue=="skip" ||showValue=="SKIP"){
   var confirmSkip= window.confirm("are you sure to skip the fight");
   if(confirmSkip){
    alert(playerName+" " +"has decided to skip the game good bye!");
   }else{
    show();

   } 
   } else if(showValue == "fight" || showValue == "FIGHT"){
        // debugger;
         fight();
     
   }
   else {
    alert("please choose a valid option");
}
     



