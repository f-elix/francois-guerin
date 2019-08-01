<template>
<section id="parutions">
    <h2>Parutions</h2>
        <div class="wrapper">
            <div class="no-margin" v-for="book in books" :key="book.isbn" >
                <fg-cover :book="book" @click.native="showText(book)" @keypress.enter.native="showText(book)"></fg-cover> 
                <transition name="show">
                    <fg-synopsis :book="book" v-if="book.synopsisShown" @click.native="closeText(book)" @keypress.enter.native="closeText(book)" tabindex="0"></fg-synopsis>
                </transition>
            </div>
        </div>
</section>
</template>

<script>
import BooksData from '../../assets/data/books.js';
import Cover from './Cover.vue';
import Synopsis from './Synopsis.vue'

export default {
    data: function() {
        return {
            books: BooksData.books
        }
    },
    components: {
        'fg-cover': Cover,
        'fg-synopsis': Synopsis
    },
    methods: {
        showText(book) {
            const bookOpened = this.books.some(book => {
                return book.synopsisShown;
            });
            console.log(bookOpened);
            if (!bookOpened) {
                book.synopsisShown = true;
            }
        },
        closeText(book) {
            book.synopsisShown = false;
        }
    }
}
</script>

<style lang="scss" scoped>
    .wrapper {
        text-align: center;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        border: 5rem solid transparent;
        border-image: url(../../assets/img/parutions-border.svg) 25;
        position: relative;

        & > * {
            flex-basis: 17.5rem;
            flex-grow: 1;
            padding: 1rem 2rem;
        }
    }

    .no-margin {
        margin: 0;
        
    }

    // Animations

    .show-enter-active {
        animation: show .5s ease-in;
    }

    .show-leave-active {
        animation: hide .6s ease-in;
    }

    @keyframes show {
        0% {
            transform: scale(0);
        }
        80% {
            transform: scale(1.1);
        }
    }

    @keyframes hide {
        50% {
            transform: scale(1.1);
        }
        100% {
            transform: scale(0);
        }
    }
</style>

