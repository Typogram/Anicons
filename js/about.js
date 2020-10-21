Array.prototype.shuffle = function () {
  var i = this.length,
    j,
    temp;
  if (i == 0) return this;
  while (--i) {
    j = Math.floor(Math.random() * (i + 1));
    temp = this[i];
    this[i] = this[j];
    this[j] = temp;
  }
  return this;
};

var app = new Vue({
  el: "#about-anicons-app",
  data: {
    time: 1,
    time2: 1,
    c: "5",
    nonColorCharacterSet:
      "ABCDEGHILMNORSTUWabceghikmnoqstv01235679ABCDEGHILMNORSTUWabceghikmnoqstv01235679ABCDEGHILMNORSTUWabceghikmnoqstv01235679",
  },
  mounted() {
    var iconSquares = document.querySelectorAll(".icon-square");
    for (i = 0; i < 6; i++) {
      var index = Math.floor(Math.random() * (iconSquares.length - 1));
      iconSquares[index].classList.add("animated");
    }
    setInterval(function () {
      iconSquares.forEach(function (iconSquare) {
        iconSquare.classList.remove("animated");
      });
      for (i = 0; i < 6; i++) {
        var index = Math.floor(Math.random() * (iconSquares.length - 1));
        iconSquares[index].classList.add("animated");
      }
    }, 10000);
  },
  computed: {
    nonColorCharacters: function () {
      return this.nonColorCharacterSet.split("").shuffle();
    },
  },
});
