var EnemyName = "roborto";
var playerName = window.prompt("insert your name");
var playerHealth = 200;
var playerAttack = 10;
var enemyAttack = [10,20,30];
var playerMoney = 20;
var enemyHealth=[30,20,30];
var enemyName = ["roborto", "alan", "k'naan"];
var fight = function () {
    alert("welcome to  robot gladiators");
    var start = window.prompt("write fight if you want to fight  or write skip if you want to skip");
    for (var i = 0; i < enemyName.length; i++) {
        if (start == "fight" || start == "FIGHT") {
            while (enemyHealth[i] != 0 && playerHealth != 0) {
                enemyHealth[i] = enemyHealth[i] - playerAttack;
                if (enemyHealth[i] != 0) {
                    //player defeat the enemy
                    alert(playerName + " " + "attack" + " " + enemyName[i] + " " + "the remaining health of"+ " " +enemyHealth[i]+" "+"is:" + " " + enemyHealth[i]);
                   console.log(playerName + " " + "attack" + " " + enemyName[i] + " " + "the remaining health of"+" "+ enemyHealth[i]+" "+"is:" + " " + enemyHealth[i]);
                } else {
                    //enemy loose
                    alert(enemyName[i] + " " + "has died!");
                    console.log(enemyName[i] + " " + "has died!");
                    break;
                }
                playerHealth = playerHealth - enemyAttack[i];
                if (playerHealth != 0) {
                    //enemy attack player 
                    alert(enemyName[i] + " " + "attack" + " " + playerName + " " + "the remaining health of "+" "+playerName+" "+" is:" + " " + playerHealth);
                   console.log(enemyName[i] + " " + "attack" + " " + playerName + " " + "the remaining health of player is:" + " " + playerHealth);
                } else {
                    //player loose
                    alert(playerName + " " + "has died!");
                    console.log(playerName + " " + "has died!");
                    break;

                }

            }
        } else if (start == "skip" || start == "SKIP") {
            if (window.confirm("are yo sure to leave the fight")) {
                playerMoney = playerMoney - 10;
                alert("the remaining money of" + "  " + playerName + "  " + "is:" + "  " +  playerMoney);
                console.log("the remaining money of" + "  " + playerName + "  " + "is:" + "  " +  playerMoney);
                break;
            } else {
                fight();
            }
        } else {
            alert("please choose a valid option");
            fight();
        }
    }
}
fight();
