<template>
  <div>
    <fg-header></fg-header>
    <fg-main></fg-main>
    <fg-footer></fg-footer>
  </div>
</template>

<script>
import FgHeader from '../components/FgHeader.vue';
import FgMain from '../components/main/FgMain.vue';
import FgFooter from '../components/footer/FgFooter.vue';

export default {
    components: {
      'fg-header': FgHeader,
      'fg-main': FgMain,
      'fg-footer': FgFooter
    },
    metaInfo: {
      title: 'François Guérin'
    }
}
</script>

<style lang="scss">

</style>








