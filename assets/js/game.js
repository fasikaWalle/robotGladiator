var enemyInfo = [
    {
        name: 'roberto',
        attack: randomNumber(10, 14)
    }, {
        name: 'alan',
        attack: randomNumber(10, 14)
    }, {
        name: 'knnan',
        attack: randomNumber(10, 14)
    }
];
var playerInfo = {
    Money: 20,
    Attack: 10,
    Health: 100,
    name: getPlayerName(),
    reset: function () {
        this.health = 100;
        this.money = 20;
        this.attack = 10;
    },
    refillHealth: function () {
        this.health += 20;
        this.money -= 7;
    },
    upgradeAttack: function () {
        this.attack += 6;
        this.money -= 7;
    }
};
var startGame = function () {
    playerInfo.reset();
    for (var i = 0; i < enemyInfo.length; i++) {
        if (playerInfo.health > 0) {
            window.alert('Welcome to Robot Gladiators! Round ' + (
                i + 1
            ));
            // debugger;
            var pickedEnemyObj = enemyInfo[i];
            pickedEnemyObj.health = randomNumber(40, 60);
            fight(pickedEnemyObj);
        } else {
            break;
        }
    }
    endGame();
}
var fightOrSkip = function () {
    var promptFight = window.prompt('Would you like FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');
    promptFight = promptFight.toLocaleLowerCase();
    // if the `promptFight` is NOT a valid value, then execute the following statements.
    // if(!promptfight)
    if (promptFight === "" || promptFight === null) {
        window.alert("You need to provide a valid answer! Please try again.");
        return fightOrSkip();
    }
    if (promptFight === "skip" || promptFight === "SKIP") {
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");
        if (confirmSkip) {
            window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");
            playerInfo.playerMoney = playerInfo.money - 10;
            shop();
            return true;
        }else{
            return false;
        }
    }
}
function fight(enemy) { // console.log(enemy);
    while (playerInfo.Health > 0 && enemy.health > 0) { // console.log(enemy.health);
        if (fightOrSkip()) { // if true, leave fight by breaking loop
            break;
        }
        var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
        enemy.health = Math.max(0, enemy.health - damage);
        alert(playerInfo.name + ' attacked ' + enemy.name + '. ' + enemy.name + ' now has ' + enemy.health + ' health remaining.');
        if (enemy.health <= 0) {
            window.alert(enemy.name + ' has died!');
            playerInfo.money = playerInfo.money + 20;
            var storeConfirm = window.confirm('The fight is over, visit the store before the next round?');
            if (storeConfirm) {
                shop();
            }
            break;
        } else {
            window.alert(enemy.name + ' still has ' + enemy.health + ' health left.');
        }

        var damage = randomNumber(enemy.attack - 3, enemy.attack);
        playerInfo.health = Math.max(0, playerInfo.health - damage);
        alert(enemy.name + ' attacked ' + playerInfo.name + '. ' + playerInfo.name + ' now has ' + playerInfo.health + ' health remaining.');
        if (playerInfo.health<= 0) {
      window.alert(playerInfo.name + ' has died!');
      break;
    } else {
      window.alert(playerInfo.name + ' still has ' + playerInfo.health + ' health left.');
    }
  }
};


var endGame = function () {
    window.alert("The game has now ended. Let's see how you did!");
    if (playerInfo.Health> 0) {
            window.alert("Great job, you've survived the game! You now have a score of " + playerInfo.Money + ".");
        } else {
            window.alert("You've lost your robot in battle.");
        }
        var playAgainConfirm = window.confirm('Would you like to play again?');

        if (playAgainConfirm) {
            startGame();
        } else {
            window.alert('Thank you for playing Battlebots! Come back soon!');
        }
    }
    function getPlayerName() {
        var name = "";
        while (name === null || name === '') {
            name = window.prompt("What is your robot's name?");
        }
        console.log("Your robot's name is" + name);
        return name;
    }


    var shop = function () {
        var shopOptionPrompt = window.prompt('Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one "REFILL", "UPGRADE", or "LEAVE" to make a choice.');
        switch (shopOptionPrompt) {
            case 'refill':
            case 'REFILL':
                window.alert("Refilling player's health by 20 for 7 dollars.");
                playerInfo.refillHealth();
                break;
            case 'upgrade':
            case 'UPGRADE':
                window.alert("Upgrading player's attack by 6 for 7 dollars.");
                playerInfo.upgradeAttack();
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
    console.log(this.playerInfo);
    console.log(enemyInfo);
    console.log(enemyInfo[0]);
    console.log(enemyInfo[0].name);
    console.log(enemyInfo[0]['attack']);
