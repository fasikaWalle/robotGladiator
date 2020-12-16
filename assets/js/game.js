var EnemyName = "roborto";
var playerHealth = 100;
const playerHealthNew = 100;
var playerAttack = 10;
var enemyAttack = [20, 10, 20];
var playerMoney = 20;
var enemyHealth = [20, 20, 30];
const enemyHealthNew = [20, 20, 30];
var enemyName = ["roborto", "alan", "k'naan"];
var fight = function () {
    for (var i = 0; i < enemyName.length; i++) {
        var round = i + 1;
        alert("welcome to Battlebots round" + " " + round);
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
            } playerHealth = playerHealth - enemyAttack[i];
            if (playerHealth != 0) { // enemy attack player
                alert(enemyName[i] + " " + "attack" + " " + playerName + " " + "the remaining health of " + " " + playerName + " " + " is:" + " " + playerHealth);
                console.log(enemyName[i] + " " + "attack" + " " + playerName + " " + "the remaining health of " + " " + playerName + " " + " " + playerHealth);
            } else { // player loose
                alert(playerName + " " + "has died!");
                // console.log(playerName + " " + "has died!");
                break;
            }
        }
    }
    startGame();
    endGame();
   
 
}
alert("welcome to  robot gladiators");
var playerName = window.prompt("insert your name");
function show() {
    var start = window.prompt("Would you like to FIGHT or SKIP this battle? Enter FIGHT  or SKIP to choose.");
    return start;
};

var showValue = show();
if (showValue == "skip" || showValue == "SKIP") {
    var confirmSkip = window.confirm("are you sure to skip the fight");
    if (confirmSkip) {
        alert(playerName + " " + "has decided to skip the game good bye!");
    } else {
        show();

    }
} else if (showValue == "fight" || showValue == "FIGHT") { // debugger;
    fight();
} else {
    alert("please choose a valid option");
}
function startGame() {
    var restartGame = window.confirm("do you want to restart the game");
    if (restartGame) {
        playerHealth = playerHealthNew;
        enemyHealth = enemyHealthNew;
        fight();
    } else {
        alert("thank you for playing robot gladiators come back soon!");
    }
}
var endGame = function () {
    if (playerHealth > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
    } else {
        window.alert("You've lost your robot in battle.");
    }
}
// var playAgainConfirm = window.confirm("Would you like to play again?");

// if (playAgainConfirm) {
// restart the game
// startGame();
// }
// else {
// window.alert("Thank you for playing Robot Gladiators! Come back soon!");
// }
