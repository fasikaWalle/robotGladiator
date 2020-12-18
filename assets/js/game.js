var EnemyName = "roborto";
var playerHealth = 100;
var playerAttack = 10;
var enemyAttack = [20, 10, 20];
var playerMoney = 20;
var enemyHealth = [20, 20, 30];
var enemyNames = ["roborto", "alan", "k'naan"];
var playerName = window.prompt("What is your robot's name?");
var startGame = function () {
    enemyHealth = Math.floor(Math.random() * 21) + 40;
    for (var i = 0; i < enemyNames.length; i++) {
        var damage = randomNumber(playerAttack - 3, playerAttack);
        enemyHealth = Math.max(0, enemyHealth - damage);
        // enemyHealth[i] = randomNumber(40, 60);
        if (playerHealth > 0) {
            alert("welcome to robot gladiator" + " " + playerName);
            var pickedEnemyName = enemyNames[i];
            fight(pickedEnemyName, i);
        } else {
            break;
        }
    }
    endGame();
}
function fight(enemyName, j) {
    while (playerHealth > 0 && enemyHealth[j] > 0) {
        var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');
        if (promptFight === 'skip' || promptFight === 'SKIP') {
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");
            if (confirmSkip) {
                window.alert(playerName + ' has decided to skip this fight. Goodbye!');
                playerMoney = playerMoney - 10;
                shop();
                break;
            }
        } else if (promptFight === 'fight' || promptFight === 'FIGHT') { // enemyHealth[j] = enemyHealth[j] - playerAttack;
            enemyHealth[j] = Math.max(0, enemyHealth[j] - playerAttack);
            console.log(playerName + ' attacked ' + enemyName + '. ' + enemyName + ' now has ' + enemyHealth[j] + ' health remaining.');
            if (enemyHealth[j] <= 0) {
                window.alert(enemyName + ' has died!');
                // playerMoney = playerMoney + 20;
                playerMoney = Math.max(0, playerMoney + 20);
                var storeConfirm = window.confirm('The fight is over, visit the store before the next round?');
                if (storeConfirm) {
                    shop();
                }
                break;
            } else {
                window.alert(enemyName + ' still has ' + enemyHealth[j] + ' health left.');
            }
            // playerHealth = playerHealth - enemyAttack[j];
            // playerHealth = Math.max(0, playerHealth - enemyAttack[j])
            // playerHealth = Math.max(0, playerHealth - enemyAttack[j]);
            var damage = randomNumber(enemyAttack - 3, enemyAttack);
            playerHealth = Math.max(0, playerHealth - damage);
            console.log(enemyName + ' attacked ' + playerName + '. ' + playerName + ' now has ' + playerHealth + ' health remaining.');
            if (playerHealth <= 0) {
                window.alert(playerName + ' has died!');
                break;
            } else {
                window.alert(playerName + ' still has ' + playerHealth + ' health left.');
            }
        } else {
            alert('please insert valid input');
        }
    }
};

var endGame = function () {
    if (playerHealth > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
    } else {
        window.alert("You've lost your robot in battle.");
    }
}
var shop = function () { // ask player what they'd like to do
    var shopOptionPrompt = window.prompt('Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one "REFILL", "UPGRADE", or "LEAVE" to make a choice.');
    // use switch case to carry out action
    switch (shopOptionPrompt) {
        case 'refill':
        case 'REFILL':
            window.alert("Refilling player's health by 20 for 7 dollars.");
            playerHealth += 20;
            playerMoney -= 7;
            break;
        case 'upgrade':
        case 'UPGRADE':
            window.alert("Upgrading player's attack by 6 for 7 dollars.");
            playerAttack += 6;
            playerMoney -= 7;
            break;
        case 'leave':
        case 'LEAVE':
            window.alert('Leaving the store.');
            break;
        default:
            window.alert('You did not pick a valid option. Try again.');
            shop();
            break;
    }
};

startGame();

function randomNumber(min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);

    return value;
};
// var playAgainConfirm = window.confirm("Would you like to play again?");
console.log(Math.PI);
