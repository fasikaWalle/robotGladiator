var EnemyName = "roborto";
var enemyHealth = 100;
var enemyAttack = 10;
var enemyMoney = 10;
var playerName = window.prompt("insert your name");
var playerHealth = 50;
var playerAttack = 10;
var fight = function () {
    alert("welcome to  robot gladiators");
    var start = window.prompt("write fight if you want to fight  or write skip if you want to skip");
    if (start == "fight" || start == "FIGHT") {
        while (enemyHealth != 0 && playerHealth != 0) {
            enemyHealth = enemyHealth - playerAttack;
            if (enemyHealth != 0) {
                alert(playerName + " " + "attack" + " " + EnemyName + " " + "the remaining health of roborto is:" + " " + enemyHealth);
            } else {
                alert(EnemyName + " " + "has died!");
                break;
            }
            playerHealth = playerHealth - enemyAttack;
            if (playerHealth != 0) {
                alert(EnemyName + " " + "attack" + " " + playerName + " " + "the remaining health of player is:" + " " + playerHealth);
            } else {
                alert(playerName + " " + "has died!");
                break;
            }

        }

    } else if (start == "skip" || start == "SKIP") {
        window.confirm("are yo sure to leave the fight");
        enemyMoney = enemyMoney - 10;
        alert("the remaining money of" + "  " + EnemyName + "  " + "is:" + "  " + enemyMoney);
    } else {
        alert("please choose a valid option");
        fight();
    }

}


fight();

