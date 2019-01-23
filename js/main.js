var app = new Vue({
  el: '#game',
  data: {
    randomColor: 0,
    counter: 0,
    randomBox: 0,
    computersChoice : [],
    boxes: 0,
    level: 1,
    colourBoxInterval: 0,
    promptToEnter: "Copy the pattern"

  },
  methods: {
    makeColoursFlashSetInterval(){
      this.colourBoxInterval =  setInterval(this.makeColoursFlash,500);
    },

    makeColoursFlash(){
      // if a box is shaded a colour then change it to white
      if(this.randomColor != 0){
        this.randomBox.style.backgroundColor = 'white';
        this.randomColor = 0;
        this.counter++;
        this.checkCounter

      } else {

        //selects a random box, fills it with a colour
        this.boxes = document.getElementsByClassName('boxes');
        this.randomBox = this.boxes[Math.floor(Math.random() * 4)];
        this.randomColor = this.randomBox.getAttribute('id');
        this.computersChoice.push(this.randomColor);
        console.log(this.computersChoice);
        this.randomBox.style.backgroundColor = this.randomColor;

      }

    },


  },

  computed: {
    checkCounter(){
      if(this.counter == this.level){
        clearInterval(this.colourBoxInterval);
        this.counter = 0;
        return true
      }
    }

  }


})
