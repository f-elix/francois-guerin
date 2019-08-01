<template>
<div class="container" tabindex="0">
    <div class="img-ctn" >
        <g-image :src="require('../../assets/img/' + book.source + '.jpg')" :alt="book.alt"></g-image>
        <div class="cover-overlay">Voir le résumé</div>
    </div>
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

        &:hover .img-ctn img,
        &:focus .img-ctn img {
            transform: scale(1.2);
        }

        &:hover .img-ctn .cover-overlay,
        &:focus .img-ctn .cover-overlay {
            opacity: 1;
        }
        
        .img-ctn {
            overflow: hidden;
            display: block;
            width: 15rem;
            height: 23rem;
            margin: 0 auto;
            border-radius: 5px;
            border: 1rem double #202020;
            box-shadow: 0 3px 10px 3px;
            position: relative;

            .cover-overlay {
                margin: 0;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 3rem;
                width: 100%;
                height: 100%;
                position: absolute;
                top: 0;
                left: 0;
                background-color: rgba($primary-color, 0.8);
                color: $secondary-color;
                opacity: 0;
                transition: opacity .5s ease;
            }

            img {
                width: 100%;
                height: 100%;
                filter: saturate(65%);
                transition: transform .5s ease;
            }

            

        }

        p {
            margin-top: .75rem;
        }
    }
</style>

