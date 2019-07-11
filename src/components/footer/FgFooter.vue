<template>
<footer>
    <fg-contact></fg-contact>
    <div class="meta">
        <hr>
        <p><a href="http://www.jcl.qc.ca/" target="_blank" rel="noreferrer" class="jcl-link">Éditions JCL</a></p>
        <small>François Guérin copyright 2019</small>
        <a class="arrow" tabindex="0" href="#accueil" @click="scrollTo" @keyup.enter="scrollTo">&#10146;</a>
    </div>
</footer>
</template>

<script>
import Contact from './Contact.vue'

export default {
    components: {
        'fg-contact': Contact
    },
    methods: {
        scrollTo(event) {
            const idValue = event.target.getAttribute('href');
            document.querySelector(idValue).scrollIntoView({
            behavior: 'smooth'
            });
        }
    }
}
</script>

<style lang="scss" scoped>

    .meta {
        text-align: center;
        width: 20rem;
        margin: 3rem auto 0;
        display: grid;
        
        

        hr {
            background-color: #404040;
            height: 4px;
        }

        p {
            margin: 1.5rem 0 0;
        }

        .jcl-link:hover,
        .jcl-link:focus {
            text-decoration: underline;
        }

        .arrow {
            display: inline-block;
            width: fit-content;
            margin: 1rem auto 0;
            transform: rotate(-90deg);
            font-size: 4rem;
            cursor: pointer;
            position: relative;

            &::before {
                content: '';
                position: absolute;
                top: 0;
                left: -25%;
                width: 96px;
                height: 100%;
                z-index: -1;
                border-radius: 50%;
                background-color: rgba($primary-color, 0.2);
                transition: transform .2s ease-out;
                transform: scale(0);
            }

            &:hover::before,
            &:focus::before {
                transform: scale(1);
            }
        }
    }


</style>
