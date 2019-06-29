<template>
  <header id="accueil">
    <div class="title">
        <h1>François Guérin</h1>
        <h2>Auteur</h2>
    </div>
    <nav role="primary" class="nav">
        <ul>
            <li>
                <a href="#parutions">Parutions</a>  
            </li>
            <li>
                <a href="#bio">Biographie</a>              
            </li>
            <li>
                <a href="#contact">Contact</a>
            </li>  
        </ul>
    </nav> 
    <a class="arrow" tabindex="0" href="#parutions">&#10146;</a>
  </header>
</template>

<script>
export default {

}
</script>


<style lang="scss" scoped>

  .title {
    position: absolute;
    top: 40vh;
    left: 50%;
    transform: translate(-50%, -50%);

    h1, h2 {
      margin: 0;
    }

    h1 {
      width: 0;
      animation: typewriter steps(28) 1.5s forwards;
      animation-delay: .2s;   
      overflow: hidden;
      white-space: nowrap;
      letter-spacing: 2px;
    }
    h2 {    
      animation: fade-in-translate .8s cubic-bezier(.3,.73,.64,.98) forwards;  
      animation-delay: 1.5s;   
      opacity: 0;  
    }
  }

.nav {
  max-width: 50%;
  border-top: 4px $primary-color solid;
  padding-top: 1rem;
  margin-bottom: 3rem;
  
  ul {
    display: flex;
    justify-content: space-evenly;
    font-size: 2rem;
    
    li {
      cursor: pointer;

    }
    li + li {
      margin-left: 1rem;
    }

    a {
      position: relative;
      &::before {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 4px;
        border-radius: 15px;
        background-color: $primary-color;
        transform-origin: bottom right;
        transform: scaleX(0);
        transition: transform 0.5s ease;
      }
      &:hover::before,
      &:focus::before {
        transform-origin: bottom left;
        transform: scaleX(1);
      }
    }

  }
}

.arrow {
  display: inline-block;
  margin: 0;
  transform: rotate(90deg);
  padding-left: 1.25rem;
  font-size: 4rem;
  cursor: pointer;
  position: relative;

  &:hover::before,
  &:focus::before {
    transform: scale(1);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 96px;
    height: 100%;
    z-index: -1;
    border-radius: 100%;
    background-color: rgba($primary-color, 0.2);
    transition: transform .2s ease-out;
    transform: scale(0);
  }
}

.nav, .arrow {
  animation: fade-in .4s ease-in forwards;
}

// Animations

  @keyframes fade-in-translate {
    0% {
      opacity: 0;
      transform: translateY(2rem);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  
  @keyframes typewriter{
    0% {width: 0;}
    100% {width: 100%;}
  }

// Media queries 

@media screen and (min-width: 768px) {
  .nav {
    ul {
      font-size: 2.5rem;
    }
  }
}

</style>