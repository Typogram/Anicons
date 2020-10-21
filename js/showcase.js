new fullpage("#sliders", {
  licenseKey: "ACD04551-F3EF4680-A97BEFA4-038D92F4",
  scrollingSpeed: 700,
  verticalCentered: false,
  navigation: true,
  navigationPosition: "right",
  sectionSelector: ".slider",
});

var app = new Vue({
  el: "#showcase-anicons-app",
  data: {
    time: 1,
    time2: 1,
    c: "5",
    nonColorCharacterSet:
      "ABCDEGHILMNORSTUWabceghikmnoqstv01235679ABCDEGHILMNORSTUWabceghikmnoqstv01235679ABCDEGHILMNORSTUWabceghikmnoqstv01235679",
    scrolling: false,
  },
  computed: {
    thumbStyles: function () {
      var width = document
        .getElementById("showcase-single")
        .getBoundingClientRect().width;
      return {
        left: ((this.time - 1) / 99) * width + "px",
      };
    },
    iconStyles: function () {
      var width = document
        .getElementById("showcase-single")
        .getBoundingClientRect().width;
      return (
        "left:" +
        ((this.time - 1) / 99) * width +
        "px;" +
        'font-variation-settings: "TIME" ' +
        this.time +
        ";"
      );
    },

    thumbStyles2: function () {
      var width = document
        .getElementById("showcase-triple")
        .getBoundingClientRect().width;
      return {
        left: ((this.time2 - 1) / 99) * width + "px",
      };
    },
    iconStyles2: function () {
      var width = document
        .getElementById("showcase-triple")
        .getBoundingClientRect().width;
      return (
        "left:" +
        ((this.time2 - 1) / 99) * width +
        "px;" +
        'font-variation-settings: "TIME" ' +
        this.time2 +
        ";"
      );
    },
  },
  methods: {
    handleStarMouseOver: function (e) {
      var character = e.target.innerHTML;
      var el = document.getElementById("big-icon");
      el.classList.remove("animated");
      el.innerHTML = character;
      el.classList.add("animated");
    },
    handleStarMouseLeave: function (e) {
      var el = document.getElementById("big-icon");
      el.classList.remove("animated");
    },
  },
});
