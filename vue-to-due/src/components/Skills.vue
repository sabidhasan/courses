<template>
  <div class="hello">
    <div class="holder">
      <form @submit.prevent="addTodo">
        <input
          type='text'
          placeholder="Enter a to do..."
          v-model="currentSkill"
          v-validate="'min:5'"
          name="skill"
          autocomplete="false"
        >
        <transition name="alert-in">
          <p class="alert" v-if="errors.has('skill')">
            {{ errors.first('skill') }}
          </p>
        </transition>
      </form>
      <ul>
        <transition-group
          name="list"
          enter-active-class="animated bounceInUp"
          leave-active-class="animated bounceOutDown"
        >
            <li v-for="(data, index) in skills" :key="index"> {{ data.skill }}</li>
        </transition-group>
      </ul>

      <p>These are the skills that you possess</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Skills',
  props: {

  },
  data() {
    return {
      currentSkill: '',
      skills: [{"skill": "Skill 1"}, {"skill": "Skill 2"}],
      alertObj: {
        alerts: true
      }
    }
  },
  methods: {
    addTodo(e) {
      this.$validator.validateAll()
        .then(result => {
          if (result) {
            this.skills.push({"skill": this.currentSkill});
            this.currentSkill = '';
          } else {
            console.log('error!');
          }
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css');
.holder {
    background: #fff;
}
ul {
  margin: 0; padding: 0; list-style-type: none;
}
ul li {
  padding: 20px; font-size: 1.3em; background-color: #e0edf4;
  border-left: 5px solid #3eb3f6; margin-bottom: 2px; color: #3e5252
}
p {
  text-align: center; padding: 30px 0; color: gray;
}
.container {
  box-shadow: 0 0 40px lightgray;
}
input {
  width: calc(100% - 40px); border: 0; padding: 20px; font-size: 1.3em;
  background-color: #323333; color: #687f7f;
}
.alert {
  background: #fdf2ce; font-weight: bold; display: inline-block; padding: 5px;
  margin-top: -20px;
}
.alert-in-enter-active {
  animation: bounce-in 0.5s;
}
.alert-in-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {transform: scale(0)}
  50% {transform: scale(1.5)}
  100% {transform: scale(1)}
}
</style>
