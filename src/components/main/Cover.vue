<template>
<div class="container">
    <g-image :src="require('../../assets/img/' + book.source + '.jpg')" :alt="book.alt"></g-image>
    <p>({{book.releaseYear}})</p>
</div>
</template>

<script>
export default {
    props: ['book']
}
</script>

<style lang="scss" scoped>
    .container {
        cursor: pointer;
        transition: transform .3s;
        &:hover {
            transform: scale(1.1);
        }

        img {
        display: block;
        width: 15rem;
        height: 23rem;
        margin: 0 auto;
        filter: saturate(65%);
        border-radius: 5px;
        border: 1rem double #202020;
        box-shadow: 0 3px 10px 3px;
        }

        p {
            margin-top: .75rem;
        }
    }
</style>

