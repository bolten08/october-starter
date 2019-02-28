/* Libs */
import Vue from 'vue';
/* End Libs */

/* Blocks */
import TestButton from './components/TestButton.vue';
/* End Blocks */

export function indexPage() {
  console.log('index page');

  new Vue({
      el: '#app',
      components: {
          TestButton,
      },
      template: '<TestButton />',
  });
}
