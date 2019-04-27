<template>
  <div>
    <!-- Overlay/Game over -->
    <div class="overlay" v-if="isGameOver || isGameSolved">
      <div v-if="isGameOver" class="content">
        <div class="mistakes-left">
          <div class="text">Game Over !</div>

          <div class="text">{{ timestamp | hhmmss }}</div>
        </div>
        <button @click="playAgain()" class="app-button">Play again</button>
      </div>

      <div v-else-if="isGameSolved" class="content">
        <div class="game-completed">
          <div class="text">Well done!</div>

          <div class="text ml">{{ timestamp | hhmmss }}</div>
        </div>
        <button @click="playAgain()" class="app-button">Play again</button>
      </div>
    </div>
    <!-- Overlay/Game over -->

    <!-- Game -->
    <div class="sudoku-container">
      <!-- Mistakes & Timer -->

      <div class="main-timer">
        {{ timestamp | hhmmss }}
      </div>
      <!-- /Mistakes -->

      <!-- Sudoku -->
      <div class="sudoku-main-content">
        <div
          v-for="(row, i) in sudoku"
          class="container"
          :style="{
            borderBottom:
              i % matrix === matrix - 1 && i !== matrix * matrix - 1
                ? '2px solid #999999'
                : 'none'
          }"
        >
          <div
            v-for="(ele, j) in row"
            class="container"
            :style="{
              borderRight:
                j % matrix === matrix - 1 && j !== matrix * matrix - 1
                  ? '2px solid #999999'
                  : 'none'
            }"
          >
            <div
              class="cell-container"
              :style="{ height: getHeight, width: getWidth }"
            >
              <input
                class="app-input"
                v-if="!ele.default"
                maxlength="1"
                type="text"
                :class="
                  `${
                    ele.modal
                      ? ele.modal !== ele.o
                        ? 'wrong-input'
                        : 'right-input'
                      : 'right-input'
                  }`
                "
                :disabled="ele.default ? true : false"
                v-model="ele.modal"
                @keyup="updateEle({ i, j, ele })"
              />
              <div v-else>
                {{ ele.o }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- /Sudoku -->

      <div class="mistakes-left">
        <div class="counter">{{ mistakesAllowed - this.mistakes }}</div>
        <div class="text">
          {{ mistakesAllowed - this.mistakes === 1 ? 'Life' : 'Lives' }} left
        </div>
      </div>
    </div>
    <!-- Game -->
  </div>
</template>

<script>
import date from "@/mixins/dom-filters/date";

export default {
  mixins: [date],

  props: ["values", "matrix", "updateFunc", "mistakesAllowed"],

  data() {
    return {
      sudoku: [],

      // Mistakes
      mistakes: 0,
      // /Mistakes

      isGameOver: false,
      isGameSolved: false,

      // Timer
      timestamp: null,
      interval: 1, // 0 to Pause/End, 1 to Resume
      loop: null,
      // /Timer

      lastEleVal: null
    };
  },

  computed: {
    getHeight() {
      return this.getBoxSize({ phonePerc: 90, desktopPerc: 60 })
    },

    getWidth() {
      return this.getBoxSize({ phonePerc: 90, desktopPerc: 60 })
    }
  },

  methods: {

    getBoxSize ({ phonePerc, desktopPerc }) {

      if (screen.width <= 1024) { // phone
        let size = phonePerc / (this.matrix * this.matrix);

        let px = (screen.width * size) / 100;
        console.log({ px });

        return `${px}px`;
      }
      else { // desktop
        let size = desktopPerc / (this.matrix * this.matrix);

        let px = (screen.height * size) / 100;
        console.log({ px });

        return `${px}px`;
      }
    },

    updateEle({ i, j, ele }) {
      console.log({ i, j, ele });

      if (ele.modal) {
        if (ele.modal.length > 0 && this.lastEleVal !== ele.modal) {
          // Check mistake
          if (ele.modal !== ele.o) {
            this.mistakes += 1;
            this.checkGameOver();
          }
          // /Check mistake

          // Check solved
          else {
            this.checkGameSolved();
          }
          // Check solved

          // Update state
          this.updateFunc({ i, j, val: ele, vm: this });

          // keep second last val
          this.lastEleVal = ele.modal;
        }
      }
    },

    checkGameOver() {
      if (this.mistakes >= this.mistakesAllowed) {
        // alert('GAME OVER') // Show overlay with Timer & Gamer over
        this.isGameOver = true;
      }
    },

    checkGameSolved() {
      let isSolved = true;

      for (let i in this.sudoku) {
        let row = this.sudoku[i];

        for (let i in row) {
          let ele = row[i];

          if (!ele.default) {
            if (ele.modal) {
              if (ele.o !== ele.modal) {
                isSolved = false;
              }
            } else {
              isSolved = false;
            }
          }
        }
      }

      if (isSolved) {
        this.isGameSolved = true;
      }
    },

    stopTimer() {
      this.interval = 0;
    },

    initTimer() {
      let vm = this;
      this.timestamp = new Date(0, 0, 0, 0, 0, 0, 0);
      this.interval = 1;
      this.loop = setInterval(function() {
        vm.timestamp = new Date(vm.timestamp.getTime() + vm.interval * 1000);
      }, 1000);
    },

    playAgain() {
      window.location.reload();
    }
  },

  watch: {
    isGameSolved: {
      handler: function(val) {
        if (val) this.stopTimer();
      }
    },

    isGameOver: {
      handler: function(val) {
        if (val) this.stopTimer();
      }
    }
  },

  created() {
    // Deep copying :: avoiding reference of prop -> store var
    // To avoid changing them directly from dom/.vue comp, instead of mutation
    this.sudoku = JSON.parse(JSON.stringify(this.values));

    // Timer
    this.initTimer();
    // /Timer
  },

  mounted() {
    let vm = this;
    setTimeout(() => {
      document.addEventListener("visibilitychange", function() {
        if (document.hidden) {
          console.log("Kuvera tab in now in background :(");
          vm.interval = 0; // pause timer
        } else {
          console.log("Kuvera tab in now in foreground :) ");
          vm.interval = 1; // resume timer
        }
      });
    }, 10);
  }
};
</script>
<style lang="scss">
@import "../assets/components/sudoku.scss";
</style>
