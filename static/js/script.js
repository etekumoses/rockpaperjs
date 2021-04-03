// challenge: rock,paper,scissors
function rpsgame(choice) {
    console.log(choice);
    var humanchoice, compchoice;

    humanchoice = choice.id
    compchoice = numberTochoice(randTopRpsInt());
    console.log('computer choice: ', compchoice);
    results = decidewinner(humanchoice, compchoice);//[1,0]
    console.log(results);
    message = finalmessage(results);//you won!
    console.log(message);
    rpsfrontend(choice.id,compchoice,message);
}

function randTopRpsInt() {
    return Math.floor(Math.random() * 3);
}

function numberTochoice(number) {
    return ['rock', 'paper', 'scissors'][number];
}

function decidewinner(choice, compchoice) {
    var rpsdb = {
        'rock': {
            'scissors': 1,
            'rock': 0.5,
            'paper': 0
        },
        'paper': {
            'rock': 1,
            'paper': 0.5,
            'scissors': 0
        },
        'scissors': {
            'paper': 1,
            'scissors': 0.5,
            'rock': 0
        }
    };

    var myscore = rpsdb[choice][compchoice];
    var compscore = rpsdb[compchoice][choice];

    return [myscore, compscore];
}

function finalmessage([myscore, compscore]) {
    if (myscore == 0) {
        return { 'message': 'You lost', 'color': 'red' };
    } else if (myscore == 0.5) {
        return { 'message': 'You tied', 'color': 'yellow' };
    } else {
        return { 'message': 'You won!', 'color': 'green' };
    }
}

function rpsfrontend(humanimg,compimg,finalmessage){
  var imgdb ={
      'rock': document.getElementById('rock').src,
      'paper':document.getElementById('paper').src,
      'scissors':document.getElementById('scissors').src
  };
// removing all images from ui
  document.getElementById('rock').remove();
  
  document.getElementById('paper').remove();
  
  document.getElementById('scissors').remove();


  var humandiv = document.createElement('div');
  var compdiv =document.createElement('div');
  var messagediv = document.createElement('div');


  humandiv.innerHTML = "<img src='"+imgdb[humanimg]+"' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37, 50, 233, 1)'>";
  messagediv.innerHTML ="<h1 style='color:"+finalmessage['color'] +"; font-size: 60px; padding:38px; '>" + finalmessage['message']+"</h1>";
  compdiv.innerHTML = "<img src='"+imgdb[compimg]+"' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(243, 38, 24, 1)'>";

  document.getElementById('flex-box-rps-div').appendChild(humandiv);
  document.getElementById('flex-box-rps-div').appendChild(messagediv);
  document.getElementById('flex-box-rps-div').appendChild(compdiv);


}
