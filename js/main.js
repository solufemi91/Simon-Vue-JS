var app = new Vue({
  el: '#game',
  methods: {
    makeColoursFlashSetInterval(){
      setInterval(this.makeColoursFlash,500);
    },

    makeColoursFlash(){
      // if a box is shaded a colour then change it to white
      if(randomColor != 0){
        randomBox.style.backgroundColor = 'white';
        randomColor = 0;
        counter++;
        checkCounter();

      } else {

        //selects a random box, fills it with a colour
        randomBox = boxes[Math.floor(Math.random() * 4)];
        randomColor = randomBox.getAttribute('id');
        computersChoice.push(randomColor);
        console.log(computersChoice);
        randomBox.style.backgroundColor = randomColor;

      }
      
    }


  }
})
