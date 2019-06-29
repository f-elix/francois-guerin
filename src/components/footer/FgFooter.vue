<template>
<footer>
    <fg-contact></fg-contact>
   
    <div class="meta">
        <hr>
        <p><a href="http://www.jcl.qc.ca/" target="_blank">Éditions JCL</a></p>
        <small>François Guérin copyright 2019</small>
    </div>
</footer>
</template>

<script>
import Contact from './Contact.vue'

export default {
    components: {
        'fg-contact': Contact
    }
}
</script>

<style lang="scss" scoped>
    .meta {
        text-align: center;
        width: 20rem;
        margin: 3rem auto 0;
        

        hr {
            background-color: #404040;
            height: 4px;
        }

        p {
            margin: 1.5rem 0 0;
        }

        a:hover,
        a:focus {
        text-decoration: underline;
        }
    }
</style>
