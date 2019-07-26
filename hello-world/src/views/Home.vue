<template>
  <div class="home">
    <Skills message='test'/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
// import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

// @Component({
//   components: {
//     HelloWorld,
//   },
// })
import Skills from '@/components/Shills.vue';

@Component({
  components: {
    Skills,
  },
})

export default class Home extends Vue {

}
</script>
