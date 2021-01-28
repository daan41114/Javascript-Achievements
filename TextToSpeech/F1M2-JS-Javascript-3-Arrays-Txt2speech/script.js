    "use strict"   
    let myText = document.getElementById('myText');
    let myImage = document.getElementById('myImage');
    let myButton = document.getElementById('myButton');
    let myReset = document.getElementById('myReset');

    myButton.addEventListener('click', function(){
        main();
    })

    myReset.addEventListener('click', function(){
        /* hier komt jouw code */
    })

    function main(){
         let dezeTextWordtHet = makeThisSentence();
         myText.innerHTML = dezeTextWordtHet;
         sayItLoud(dezeTextWordtHet); // say something nice say it loud
         selectThisImage(); // show a nice image
    }
    
    
    
    function randomizer(range = 1){ 
        // Math.random geeft een waarde  0 <= waarde < 1 (dus exclusief 1)
        return Math.floor((Math.random() * range));
    }
    
    
    function makeThisSentence(){
        let index = randomizer(onderwerp.length);
        let woord1 = onderwerp[index];
        index = randomizer(werkwoord.length);
        let woord2 = werkwoord[index];    
        index = randomizer(restwoord.length);
        let woord3 = restwoord[index];
        let outputString = woord1 + " " + woord2 + " " + woord3;
        return outputString;
    }
    

    function selectThisImage(){
        let index = randomizer(arrayLength);
        myImage.src = plaatjes[index]; 
    }
    
    function sayItLoud (textString) {
      let message = new SpeechSynthesisUtterance(textString);
      let voices = window.speechSynthesis.getVoices();
      message.voice = voices[1];
      message.pitch = 1; // range between 0 and 2
      message.rate = 1; // range between 0.1 (lowest) and 10 (highest) 
      window.speechSynthesis.speak(message);
    }
    
    
    
    const onderwerp = ["he", "the teacher", "daan"];
    const werkwoord = ["is", "eats", "likes"];
    const restwoord = ["slow", "pizza", "games"];
        
    let plaatjes = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2OakcZqND_wANl7UYveWnbY1A6CK6flcTxw&usqp=CAU", "https://i.pinimg.com/originals/72/5a/67/725a67173b2d459ca69df323c4062afe.jpg", "https://variety.com/wp-content/uploads/2019/06/banjo-kazooie-in-smash.jpg?w=681&h=383&crop=1", "https://i1.sndcdn.com/artworks-000565730150-bsjfba-t500x500.jpg"]
    let arrayLength = onderwerp.length;
