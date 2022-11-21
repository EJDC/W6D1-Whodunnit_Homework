// #### Episode 1

const scenario = {
    murderer: 'Miss Scarlet',
    room: 'Library',
    weapon: 'Rope'
  };
  
  const declareMurderer = function() {
    return `The murderer is ${scenario.murderer}.`;
  }
  
  const verdict = declareMurderer();
  console.log(verdict);

//   Output: The murderer is Miss Scarlett
//   Reason: declareMurderer is called, which returns the "murderer" property of the "scenario" object.

// #### Episode 2

const murderer = 'Professor Plum';

const changeMurderer = function() {
  murderer = 'Mrs. Peacock';
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);

//  Output:  TypeError
//  Reason:  changeMurderer is called, however, murderer cannot be reassigned, as it's already assigned


// #### Episode 3

let murderer = 'Professor Plum';

const declareMurderer = function() {
  let murderer = 'Mrs. Peacock';
  return `The murderer is ${murderer}.`;
}

const firstVerdict = declareMurderer();
console.log('First Verdict: ', firstVerdict);

const secondVerdict = `The murderer is ${murderer}.`;
console.log('Second Verdict: ', secondVerdict);

//  Output:  First Verdict Mrs Peacock
//           Second Verdict Professor Plym
//  Reason:  declareMurderer is called, which changes the murderer let variable to Mrs Peacock and then logs it.  
//           In the second verdicrt, the declare Murderer function isn't called so it stays Professor Plum


// #### Episode 4


let suspectOne = 'Miss Scarlet';
let suspectTwo = 'Professor Plum';
let suspectThree = 'Mrs. Peacock';

const declareAllSuspects = function() {
  let suspectThree = 'Colonel Mustard';
  return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
}

const suspects = declareAllSuspects();
console.log(suspects);
console.log(`Suspect three is ${suspectThree}.`);


//  Output:  The suspects are Miss Scarlet, Professor Plum, Colonel Mustard
//           Suspect three is Mrs Peacock
//  Reason:  declareAllSuspects is called, so Mustard is assigned to Suspect 3 as the var is reassigned, hence he is in the list
//           However, when suspectThree is printed, it's Mrs Peacock again, as the reassignment was inside of the function's block scope


// #### Episode 5


const scenario = {
  murderer: 'Miss Scarlet',
  room: 'Kitchen',
  weapon: 'Candle Stick'
};

const changeWeapon = function(newWeapon) {
  scenario.weapon = newWeapon;
}

const declareWeapon = function() {
  return `The weapon is the ${scenario.weapon}.`;
}

changeWeapon('Revolver');
const verdict = declareWeapon();
console.log(verdict);


//  Output:  The weapon is the revolver.
//  Reason:  changeWeapon is called on the revolver, changing the scenario object's weapon property to Revolver.


// #### Episode 6


let murderer = 'Colonel Mustard';

const changeMurderer = function() {
  murderer = 'Mr. Green';

  const plotTwist = function() {
    murderer = 'Mrs. White';
  }

  plotTwist();
}

const declareMurderer = function () {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);

// The murderer is Mrs White
// changeMurderer is called, changing the murderer to Mr Green, then to Mrs White when plot twist is called.


// #### Episode 7


let murderer = 'Professor Plum';

const changeMurderer = function() {
  murderer = 'Mr. Green';

  const plotTwist = function() {
    let murderer = 'Colonel Mustard';

    const unexpectedOutcome = function() {
      murderer = 'Miss Scarlet';
    }

    unexpectedOutcome();
  }

  plotTwist();
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);

// The murderer is Mr Green
// changeMurderer is called, changing the murderer to Mr Green.  Plot twist is then called, however, murderer is created again
// as a local variable, so has no effect.  UnexpectedOutcome is then called but also has no effect, as it's within the scope of 
// the plotTwist function.


// #### Episode 8

const scenario = {
  murderer: 'Mrs. Peacock',
  room: 'Conservatory',
  weapon: 'Lead Pipe'
};

const changeScenario = function() {
  scenario.murderer = 'Mrs. Peacock';
  scenario.room = 'Dining Room';

  const plotTwist = function(room) {
    if (scenario.room === room) {
      scenario.murderer = 'Colonel Mustard';
    }

    const unexpectedOutcome = function(murderer) {
      if (scenario.murderer === murderer) {
        scenario.weapon = 'Candle Stick';
      }
    }

    unexpectedOutcome('Colonel Mustard');
  }

  plotTwist('Dining Room');
}

const declareWeapon = function() {
  return `The weapon is ${scenario.weapon}.`
}

changeScenario();
const verdict = declareWeapon();
console.log(verdict);


// The Weapon is candle stick.
// change scenario is called, changing the room to Dining Room.  Plot twist is then called on Dining Room, which causes the murderer
// to be updated to Colonel Mustard.  Unexpected Outcome function is then called on Mustard, and so the weapon changes to Candle Stick.



#### Episode 9

let murderer = 'Professor Plum';

if (murderer === 'Professor Plum') {
  let murderer = 'Mrs. Peacock';
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

const verdict = declareMurderer();
console.log(verdict);

// The murderer is Professor Plum
// in the if statement, the variable murderer is created again locally, meaning that it has no effect outside of the if statement.

### Extensions

Make up your own episode!

