var app = new Vue({
  el: "#use-anicons-app",
  data: {
    nonColorCharacterSet:
      "ABCDEFGHIJKLMNOPQRSTUVWXabcdeghijkmnopqstuvwxyz0123456789.,;?!*",
    colorCharacterSet: "ABCDEGHILMNORSTUWabceghikmnoqstv01235679",
    iconTime: 1,
  },
  created() {},
  computed: {
    nonColorCharacters: function () {
      return this.nonColorCharacterSet.split("");
    },
    colorCharacters: function () {
      return this.colorCharacterSet.split("");
    },
    iconPreviewCSS: function () {
      return {
        fontVariationSettings: '"TIME" ' + this.iconTime,
      };
    },
  },
});
