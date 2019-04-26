<template>
  <div class="landing">

    <!-- Title -->
    <div class="game-title" v-if="!mistakesAllowed">
      Kuvera Sudoku Game
    </div>
    <!-- /Title -->


    <!-- Game config -->
    <div v-if="!mistakesAllowed">
      <select v-model="mistakesAllowed" class="app-select">
        <option :value="null">Select lives to play</option>
        <option v-for="i in 10" :value="parseInt(i)">{{ i }}</option>
      </select>
    </div>
    <!-- /Game config -->

    <!-- Sudoku component -->
    <sudoku
      v-else
      :values="values"
      :matrix="2"
      :updateFunc="updateValue"
      :mistakesAllowed="mistakesAllowed"
    />
    <!-- /Sudoku component -->

  </div>
</template>

<script>
import sudoku from "@/components/sudoku.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "landing",
  data () {
    return {
      mistakesAllowed: null
    }
  },
  components: {
    sudoku: sudoku
  },
  computed: {
    ...mapGetters({
      values: "VALUES"
    })
  },
  methods: {
    ...mapActions({
      updateValue: "UPDATE_VALUE"
    })
  }
};
</script>

<style scoped lang="scss">
  @import "../assets/pages/landing";
</style>
