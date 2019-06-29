<template>
<main>
    <fg-parutions></fg-parutions>      
    <fg-bio></fg-bio>
</main>
</template>

<script>
import Parutions from './Parutions.vue'
import Bio from './Bio.vue'

export default {
    components: {
        'fg-parutions': Parutions,
        'fg-bio': Bio
    }
}
</script>

<style lang="scss" scoped>

</style>
