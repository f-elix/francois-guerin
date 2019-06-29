<template>
    <div class="container">
        <article>
            <h2> {{ book.title }} </h2>
            <p class="close">X</p>
            <div class="text" v-for="(text, i) in book.synopsis" :key="i">
                <p v-if="text.type === 'p'"> {{ text.content }} </p>
                <blockquote v-else>	{{ text.content }} </blockquote>
            </div>
        </article>
    </div>
</template>
<script>
export default {
    props: ['book']
}
</script>

<style lang="scss" scoped>

    .container {
        margin: 0;
        background-color: #fff;
        padding: 1rem;
        position: sticky;
        z-index: 1;
        top: 0;
        left: 0;
        right: 0;
        width: 90vw;

        border-radius: 5px;
        box-shadow: 0 8px 10px $primary-color, 0 0 0 .25rem $primary-color;
        text-align: left;
        cursor: pointer;

        .close {
            display: none;
        }

        h2, div {
            margin: 0;
        }  

        h2 {
            line-height: 1;
        }

        p {
            margin-left: auto;
            margin-right: auto;
        }

        blockquote {
            font-style: italic;
            font-size: 1.25rem;
            text-align: center;
        }
    }

    // Media queries

    @media screen and (min-width: 992px) {
        .container {
            padding: 0;
            border: 4rem solid transparent;
            border-image: url(../../assets/img/book-text-border.svg) 14.25%;
            position: absolute;
            z-index: 1;
            top: 0;
            left: 0;
            width: 100%;

            .close {
                display: block;
                font-family: $secondary-font;
                font-size: 3rem;
                position: absolute;
                left: 97.5%;
                top: -10%;
                transition: color .2s;

                &:hover,
                &:focus {
                    color: rgba($primary-color, 0.4);
                }
            }
        }
    }
</style>
