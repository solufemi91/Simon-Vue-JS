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
    promptToEnter: "Copy the pattern",
    clickCounter: 0,
    incorrectClicks: 0,
    boxIClicked: 0,
    colours: ['red', 'blue', 'green', 'yellow']


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

    respondToClickEventOfBoxes(index){
      if(this.clickCounter < this.level && this.incorrectClicks == 0){

        // this.boxIClicked = $(this).attr('id');
        this.boxIClicked = this.colours[index]
        // $(this).css('backgroundColor',this.boxIClicked);
      // get the square with same index, shade it the colour that was captured
         test = document.getElementsByClassName('boxes')[index].style.backgroundColor = this.boxIClicked


      //   clickreg();
      //   // this stores the choices made by the player that shall be later compared to the computer's random selections
      //   playersChoice.push(boxIClicked);
      //   indexCounter++;
      //   clickCounter++;
      //   compareArrays();
      }
    }


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
