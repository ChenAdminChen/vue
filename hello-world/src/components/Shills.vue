<template>
  <div class="skills">
    <div>{{message}}</div>
    <div>
      <ul>
        <li v-for="item in skills" :key="item.key">
          <p>{{item.key}}</p>
          <p>{{item.value}}</p>
        </li>
      </ul>
    </div>

    <div>
      <p v-if="skills.length>=1">skills more then 1</p>
      <p v-else>skills less 1</p>
    </div>

    <div>
      <button v-on:click="buttonClick">count: {{count}}</button>
    </div>

    <div>
      <span v-bind:title="span_title">
        Hover your mouse over me for a few seconds
        to see my dynamically bound title!
      </span>
    </div>

    <div v-bind:class="{active: showActive, 'active-border': showActiveBorder}"></div>
  </div>
</template>

<script>
export default {
  name: 'Skills',
  data() {
    return {
      message: 'message',
      count: 0,
      span_title: 'You loaded this page on ' + new Date().toLocaleString(),
      skills: [
        {
          key: 'skill1',
          value: 'skill1-value',
        },
        {
          key: 'Skill2',
          value: 'Skill2-value',
        },
      ],
      showActive: true,
      showActiveBorder: true,
    };
  },
  methods: {
    buttonClick() {
      this.count++;
    },
  },
};
</script>


<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped lang='scss'>
.active {
  background-color: aquamarine;
  width: 100%;
  height: 30px;
}
.active-border {
  border: 1px;
  scale: #723072;
}
</style>
