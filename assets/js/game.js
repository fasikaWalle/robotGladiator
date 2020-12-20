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
            var pickedEnemyObj = enemyInfo[randomNumber(0, 2)];
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
    promptFight = promptFight.toLowerCase();
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
        } else {
            return false;
        }
    }
}
var fight = function (enemy) { // keep track of who goes first
    var isPlayerTurn = true;
    // randomly change turn order
    if (Math.random() > 0.5) {
        isPlayerTurn = false;
    }
    while (playerInfo.health > 0 && enemy.health > 0) {
        if (isPlayerTurn) { // ask player if they'd like to fight or skip using fightOrSkip function
            if (fightOrSkip()) { // if true, leave fight by breaking loop
                break;
            }
            var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
            // remove enemy's health by subtracting the amount we set in the damage variable
            enemy.health = Math.max(0, enemy.health - damage);
            console.log(playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health remaining.");
            // check enemy's health
            if (enemy.health <= 0) {
                window.alert(enemy.name + " has died!");
                // award player money for winning
                playerInfo.money = playerInfo.money + 20;
                // leave while() loop since enemy is dead
                break;
            } else {
                window.alert(enemy.name + " still has " + enemy.health + " health left.");
            }
            // player gets attacked first
        } else {
            var damage = randomNumber(enemy.attack - 3, enemy.attack);
            // remove player's health by subtracting the amount we set in the damage variable
            playerInfo.health = Math.max(0, playerInfo.health - damage);
            console.log(enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining.");
            // check player's health
            if (playerInfo.health<= 0) {
          window.alert(playerInfo.name + " has died!");
          // leave while() loop if player is dead
          break;
        } else {
          window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
        }
      }
      // switch turn order for next round
      isPlayerTurn = !isPlayerTurn;
    }
  };
var endGame = function () {
    window.alert("The game has now ended. Let's see how you did!");
    var highScore = localStorage.getItem("highscore");
    // highScore = highScore || 0; If the variable on the left of the || is truthy, then use it for the assignment value. 
    if (highScore === null) {
      highScore = 0;
    }
    if (playerInfo.money > highScore) {
        localStorage.setItem("highscore", playerInfo.money);
        localStorage.setItem("name", playerInfo.name);
    
        alert(playerInfo.name + " now has the high score of " + playerInfo.money + "!");
      } 
      else {
        alert(playerInfo.name + " did not beat the high score of " + highScore + ". Maybe next time!");
      }
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
            var shopOptionPrompt = window.prompt("Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one 1 for REFILL, 2 for UPGRADE, or 3 for LEAVE.");
            shopOptionPrompt = parseInt(shopOptionPrompt);
            debugger;
            switch (shopOptionPrompt) {
                case 1:
                    window.alert("Refilling player's health by 20 for 7 dollars.");
                    playerInfo.refillHealth();
                    break;
                case 2:
                    window.alert("Upgrading player's attack by 6 for 7 dollars.");
                    playerInfo.upgradeAttack();
                    break;
                case 3:
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
            var value = Math.floor(Math.random() * (max - min) + min);
            return value;
        };
       
        // var playAgainConfirm = window.confirm("Would you like to play again?");
        // console.log(Math.PI);
        // console.log(this.playerInfo);
        // console.log(enemyInfo);
        // console.log(enemyInfo[0]);
        // console.log(enemyInfo[0].name);
        // console.log(enemyInfo[0]['attack']);
        // console.log(localStorage.setItem("color","red"));
        
        
