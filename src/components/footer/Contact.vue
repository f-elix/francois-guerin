<template>
    <form id="contact" @submit="checkForm" novalidate method="POST" action="https://formspree.io/guerinfelix08@gmail.com">
        <h2>Contact</h2>
        <label for="name">Nom</label>
        <input type="text" id="name" v-model="name" name="Name">
        <small class="form-error" v-if="nameError">Veuillez entrer votre nom.</small>
    
        <label for="email">Adresse courriel</label>
        <input type="email" id="email" v-model="email" name="E-mail">
        <small class="form-error" v-if="noEmail">Veuillez entrer votre courriel.</small>
        <small class="form-error" v-else-if="emailError">Veuillez entrer un courriel valide.</small>
    
        <label for="object">Objet</label>
        <input type="text" id="object" v-model="object" name="Objet">
        <small class="form-error" v-if="objectError">Vous devez fournir un objet.</small>
    
        <label for="message">Message</label>
        <textarea id="message" cols="30" rows="10" v-model="message" name="Message"></textarea>
        <small class="form-error" v-if="messageError">Vous devez écrire un message.</small>
        <button type="submit">Envoyer</button>
        <p class="success" v-if="messageSent">Votre message a bien été envoyé!</p>
        <input type="hidden" name="_subject" value="francoisguerin.me">
        <input type="text" name="_gotcha" style="display:none" />
    </form>
</template>


<script>
export default {
    data: function() {
        return {
            name: null,
            email: null,
            object: null,
            message: null,
            nameError: false,
            noEmail: false,
            emailError: false,
            objectError: false,
            messageError: false,
            messageSent: false
        }
    },
    methods: {
        validateMail(email) {
            const reg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/gi;
            return reg.test(email);
        },
        checkForm(e) {
            e.preventDefault();
            this.nameError = this.name ? false : true;
            this.noEmail = this.email ? false : true;
            this.emailError = this.validateMail(this.email) ? false : true;
            this.objectError = this.object ? false : true;
            this.messageError = this.message ? false : true;
            if (!this.nameError && !this.noEmail && !this.emailError && !this.objectError && !this.messageError) {
                this.messageSent = true;
                return true;
            } else {
                return false;
            }
        }
    }
}
</script>


<style lang="scss" scoped>
    h2 {
        margin-bottom: 0;
    }

    .success {
        text-align: center;
        background-color: lightgreen;

        animation: appear .4s forwards;
    }

    .form-error {
        font-size: 1rem;
        color: red;
        margin: .5rem;
        display: inline-block;

        animation: side-bounce .4s forwards;
    }

    // Animation
    $bounce-dist: 4px;

    @keyframes side-bounce {
        0% {
            transform: translateX($bounce-dist)
        }
        20% {
            transform: translateX(-$bounce-dist)
        }
        40% {
            transform: translateX($bounce-dist)
        }
        60% {
            transform: translateX(-$bounce-dist)
        }
        80% {
            transform: translateX($bounce-dist)
        }
        100% {
            transform: translateX(0)
        }
    }

    @keyframes appear {
        0% {
            transform: scale(0);
        }
        100% {
            transform: scale(1);
        }
    }
</style>
