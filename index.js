function scuberGreetingForFeet(someNumber){
  let result
  if (someNumber > 2500){ 
    result = 'No can do.' 
      } 
  else if (someNumber > 2000){ 
    result = 'I will gladly take your thirty bucks.'
    } 
  else if (someNumber <= 400){
    result = 'This one is on me!'
    }
  return result
  }

function ternaryCheckCity(NYC) {
  return (ternaryCheckCity ? 'Ok, sounds good.' : 'No go.');
}
ternaryCheckCity(Pittsburgh);


const switchOnCharmFromTip = 'generous'
let tip
switch (switchOnCharmFromTip) {
    case 'generous':
      tip = 'Thank you so much.'
      break
    case 'not as generous':
      tip = 'Thank you.'
      break
}

