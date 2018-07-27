<template>
  <div class="hello">
    <div class="holder">
      <form @submit.prevent="addTodo">
        <input type='text' placeholder="Enter a to do..." v-model="currentSkill">
      </form>
      {{ currentSkill }}
      <ul>
        <li v-for="(data, index) in skills" :key="index">{{ index + 1 }} {{ data.skill }}</li>
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
      if (!this.currentSkill) return;
      this.skills.push({"skill": this.currentSkill});
      this.currentSkill = '';
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
</style>
