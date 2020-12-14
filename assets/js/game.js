var playerName = window.prompt('what is the robots name?');
var playerHealth = 100;
var playerAttack = 20;
var enemyName = 'robert';
var enemyHealth = 50;
var enemyAttack = 12;
var promptFight = window.prompt(
  "Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose."
);
var fight = function () {
  // if player choses to fight, then fight
  if (promptFight === 'fight' || promptFight === 'FIGHT') {
    // remove enemy's health by subtracting the amount set in the playerAttack variable
    enemyHealth = enemyHealth - playerAttack;
    console.log(
      playerName +
        ' attacked ' +
        enemyName +
        '. ' +
        enemyName +
        ' now has ' +
        enemyHealth +
        ' health remaining.'
    );

    // check enemy's health
    if (enemyHealth <= 0) {
      window.alert(enemyName + ' has died!');
    } else {
      window.alert(enemyName + ' still has ' + enemyHealth + ' health left.');
    }

    // remove player's health by subtracting the amount set in the enemyAttack variable
    playerHealth = playerHealth - enemyAttack;
    console.log(
      enemyName +
        ' attacked ' +
        playerName +
        '. ' +
        playerName +
        ' now has ' +
        playerHealth +
        ' health remaining.'
    );

    // check player's health
    if (playerHealth <= 0) {
      window.alert(playerName + ' has died!');
    } else {
      window.alert(playerName + ' still has ' + playerHealth + ' health left.');
    }
    // if player choses to skip
  } else if (promptFight === 'skip' || promptFight === 'SKIP') {
    window.alert(playerName + ' has chosen to skip the fight!');
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");

    // if yes (true), leave fight
    if (confirmSkip) {
      window.alert(playerName + ' has decided to skip this fight. Goodbye!');
      // subtract money from playerMoney for skipping
      playerMoney = playerMoney - 2;
    }
    // if no (false), ask question again by running fight() again
    else {
      fight();
    }
  } else {
    window.alert('You need to choose a valid option. Try again!');
  }
};
console.log(fight());
