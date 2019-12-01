<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Filters & Mixins</h1>
        <!-- Exercise 1) -->
        <!-- Build a local Filter which reverses the Text it is applied on -->

        <!-- Exercise 2 -->
        <!-- Build a global Filter which counts the length of a word and it appends it -->
        <!-- Like this: "Test" => Gets Filtered to => "Test (4)" -->

        <!-- Exercise 3 -->
        <!-- Do the same as in Exercises 1 & 2, now with Computed Properties -->

        <!-- Exercise 4 -->
        <!-- Share the Computed Property rebuilding Exercise 2 via a Mixin -->
        <label for="idReverseText">Reverse the Text</label>
        <input
          type="text"
          name="Reverse the Text"
          id="idReverseText"
          @change="assignInputToText"
          v-model.lazy="text"
        />
        <!-- <p>{{reversedText | reverseText}}</p>  
        <p>{{reversedText | word-count}}</p>-->
        <p>{{computedText}}</p>
        <p>{{renameText}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { myMixin } from "./myMixin";
export default {
  data() {
    return {
      text: "",
      reversedText: ""
    };
  },
  filters: {
    reverseText(value) {
      var a = value.split("");

      a = a.reverse();
      value = a.join("");
      return value;
    }
  },
  methods: {
    assignInputToText() {
      this.reversedText = this.text;
    }
  },
  mixins: [myMixin]
};
</script>

<style>
</style>
