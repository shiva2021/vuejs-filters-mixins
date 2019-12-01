export const myMixin= {
    computed: {
        computedText() {
          return this.text
            .split("")
            .reverse()
            .join("");
        },
        renameText() {
          if (this.text) {
            var stringLenght = this.text.length;
            this.newtext = this.text + " " + "(" + stringLenght + ")";
            return this.newtext;
          }
        }
      }
}