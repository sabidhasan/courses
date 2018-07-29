<template>
  <main class="main">
    <div class="scores">
      <div class="score">
        <h1 v-text="player.name"></h1>
        <HealthBar v-bind:health="player.health" />
      </div>
      <div class="score">
        <h1 v-text="monster.name">MONSTER</h1>
        <HealthBar v-bind:health="monster.health" />
      </div>
    </div>

    <div>
      <button v-if='!gameStarted' @click='startNewGame'>START NEW GAME</button>
      <template v-else>
        <button @click='attack("player")'>ATTACK</button>
        <button @click='specialAttack("player")'>SPECIAL ATTACK</button>
        <button @click='heal("player")'>HEAL</button>
        <button @click='giveUp'>GIVE UP</button>
      </template>
    </div>

    <ol>
      <li v-for="(logItem, idx) in log" v-bind:class="logItem.actor" v-bind:key="idx">
        {{ logItem.action }}
      </li>
    </ol>
  </main>
</template>

<script>
import HealthBar from './HealthBar.vue'

export default {
  name: 'Game',
  data () {
    return {
      gameStarted: false,
      player: {
        name: 'YOU',
        health: 100
      },
      monster: {
        name: 'MONSTER',
        health: 100
      },
      oppositeTable: {'player': 'monster', 'monster': 'player'},
      log: []
    }
  },
  methods: {
    startNewGame: function () {
      this.gameStarted = true
      this.player.health = 100
      this.monster.health = 100
      this.log = []
    },
    giveUp: function () {
      this.gameStarted = false
      this.log = [{actor: 'player', action: 'You gave up!!!'}]
    },
    attack: function (actor) {
      const attackValue = this.randomNum(4)
      this[this.oppositeTable[actor]].health -= attackValue
      this.log.push({actor: actor, action: `${actor} attacked ${this.oppositeTable[actor]} by ${attackValue}`})
      if (this.gameOver()) return
      if (actor === 'player') this.monsterTurn()
    },
    specialAttack: function (actor) {
      const attackValue = this.randomNum(10)
      const selfHitValue = this.randomNum(4)
      this[this.oppositeTable[actor]].health -= attackValue
      this[actor].health -= selfHitValue
      this.log.push({
        actor: actor,
        action: `${actor} attacked ${this.oppositeTable[actor]} by ${attackValue}, recoil damage of ${selfHitValue}`
      })
      if (this.gameOver()) return
      if (actor === 'player') this.monsterTurn()
    },
    heal: function (actor) {
      const healVal = this.randomNum(3)
      this[actor].health += healVal
      if (this[actor].health > 100) this[actor].health = 100
      this.log.push({actor: actor, action: `${actor} healed for ${healVal}`})
      if (actor === 'player') this.monsterTurn()
    },
    monsterTurn: function () {
      const attackTypes = [this.heal, this.specialAttack, this.attack]
      attackTypes[Math.floor(Math.random() * 3)]('monster')
    },
    gameOver: function () {
      // check for end game, and update message if so
      if (this.player.health <= 0 || this.monster.health <= 0) {
        this.log = [{actor: 'player', action: 'Game over!'}]
        this.gameStarted = false
        return true
      }
      return false
    },
    randomNum: function (maxVal) {
      return Math.floor(Math.random() * maxVal) + 1
    }
  },
  components: {
    HealthBar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: block; margin: 5px 10px; padding: 5px; font-weight: 500;
  font-size: 1.1rem; text-transform: capitalize;
}
a {
  color: #42b983;
}
.scores {
  display: grid; grid-template-columns: 1fr 1fr; grid-gap: 40px;
}
button {
  padding: 10px; border: 2px solid black; margin: 10px; font-size: 1.1rem;
  font-weight: bold; border-radius: 4px; box-shadow: 3px 2px 6px rgba(0, 0, 0, 0.2);
}
button:active {
  background: pink;
}
.player {
  background: red;
}
.monster {
  background: skyblue;
}
</style>
