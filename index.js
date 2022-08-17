function scuberGreetingForFeet(depth){
  // Write your code here!
  // const depth = 400;
  if (depth <= 400){
    return "This one is on me!"
  }
  else if (depth > 2000 && depth < 2500){
    return "I will gladly take your thirty bucks."
  }
  else if (depth > 2500){
    return "No can do."
  }
}

function ternaryCheckCity(destination){
  // Write your code here!
  let isDestination = destination === "NYC" ? "Ok, sounds good.": "No go.";
  return isDestination;

}

function switchOnCharmFromTip(typeOfTip){
  // Write your code here!
  let response = ""
  let generous = "generous";
  let notGenerous = "not as generous";

  switch (typeOfTip) {
    case generous:
      response = 'Thank you so much.'      
      break;
    case notGenerous:
      response = 'Thank you.'      
      break;
  
    default:
      response = "Bye."
      break;
  }
  return response;
}