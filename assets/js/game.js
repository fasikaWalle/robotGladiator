var EnemyName = "roborto";
var playerName = window.prompt("insert your name");
var playerHealth = 100;
var playerAttack = 10;
var enemyAttack = [10,20,30];
var enemyMoney = [10,34,45];
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
                    alert(playerName + " " + "attack" + " " + enemyName[i] + " " + "the remaining health of"+ enemyHealth[i]+" "+"is:" + " " + enemyHealth[i]);
                } else {
                    alert(enemyName[i] + " " + "has died!");
                    break;
                }
                console.log(enemyName[i]);
                playerHealth = playerHealth - enemyAttack[i];
                if (playerHealth != 0) {
                    alert(enemyName[i] + " " + "attack" + " " + playerName + " " + "the remaining health of player is:" + " " + playerHealth);
                } else {
                    alert(playerName + " " + "has died!");
                    break;

                }

            }
        } else if (start == "skip" || start == "SKIP") {
            if (window.confirm("are yo sure to leave the fight")) {
                enemyMoney[i] = enemyMoney[i] - 10;
                alert("the remaining money of" + "  " + EnemyName[i] + "  " + "is:" + "  " + enemyMoney[i]);
            } else {
                fight();
            }
        } else {
            alert("please choose a valid option");
            fight();
        }
    }
}


console.log(fight());
