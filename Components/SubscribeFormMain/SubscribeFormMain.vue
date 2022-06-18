<template>
  <div>
    <form novalidate class="md-layout" @submit.prevent="validateUser">
      <md-card class="md-layout-item md-small-size-100">
        <md-card-header>
          <div class="md-title">Записаться на мероприятие</div>
        </md-card-header>

        <md-card-content>
          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
              <md-field :class="getValidationClass('name')">
                <label for="name">Имя</label>
                <md-input name="name" id="name" autocomplete="given-name" v-model="form.name" :disabled="sending" />
                <span class="md-error" v-if="!$v.form.name.required">Обязательное поле</span>
                <span class="md-error" v-else-if="!$v.form.name.minlength">Слишком короткое имя</span>
              </md-field>
            </div>

            <div class="md-layout-item md-small-size-100">
              <md-field :class="getValidationClass('phone')">
                <label for="phone">Телефон</label>
                <md-input name="phone" id="phone" autocomplete="tel" v-model="form.phone" :disabled="sending" />
                <span class="md-error" v-if="!$v.form.phone.required">Обязательное поле</span>
                <span class="md-error" v-else-if="!$v.form.phone.minlength">Неккоректные данные</span>
              </md-field>
            </div>
          </div>

          <md-field :class="getValidationClass('email')">
            <label for="email">Email</label>
            <md-input type="email" name="email" id="email" autocomplete="email" v-model="form.email"
              :disabled="sending" />
            <span class="md-error" v-if="!$v.form.email.required">Обязательное поле</span>
            <span class="md-error" v-else-if="!$v.form.email.email">Неккоректные данные</span>
          </md-field>


          <!-- <md-field>
            
            <md-input type="text" name="event" id="event" v-model="form.event" :value="content.id"
              :disabled="sending" />
           
          </md-field> -->
        </md-card-content>

        <md-progress-bar md-mode="indeterminate" v-if="sending" />

        <md-card-actions>
          <md-button type="submit" class="md-primary" :disabled="sending">Записаться</md-button>
        </md-card-actions>
      </md-card>
      <!-- 
      событие {{event}}
      Событие формы {{form.event}} -->

      <!-- <md-snackbar :md-active.sync="userSaved">Ваша заявка успешно принята! Наш менеджер свяжется с вами по указанному
        адресу: {{ email }}</md-snackbar> -->
    </form>
  </div>
</template>

<script>
import { validationMixin } from 'vuelidate'
import {
  required,
  email,
  numeric,
  minLength,
  maxLength,
  helpers
} from 'vuelidate/lib/validators'

export default {
  name: 'SubscribeFormMain',
  props: {
    content: {
      type: Object,
    },
  },
  mixins: [validationMixin],
  data() {
    return {
      form: {
        price: this.content.price,
        name: null,
        phone: null,
        email: null,
        event: this.content.id,
      },
      userSaved: false,
      sending: false,
      lastUser: null,
      // event: [],
    }
  },
  validations: {
    form: {
      name: {
        required,
        minLength: minLength(3)
      },
      phone: {
        required,
        numeric,
        minLength: minLength(9),
        maxLength: maxLength(11)
      },
      email: {
        required,
        email
      }, 
      event: {
        required,
        numeric
      },
      price : {
        required,
        numeric
      }
    }
  },
  methods: {
    getValidationClass (fieldName) {
      const field = this.$v.form[fieldName]

      if (field) {
        return {
          'md-invalid': field.$invalid && field.$dirty
        }
      }
    },
    clearForm () {
      this.$v.$reset()
      this.form.name = null
      this.form.phone = null
      this.form.event = null
      this.form.email = null
      this.form.price = null
    },
    
    saveUser () {
      this.sending = true

      this.$api.sendSubscribe(this.form).finally(() => {

        this.lastUser = `${this.form.name}`
        this.userSaved = true
        this.sending = false
        // this.clearForm()
        this.$emit('sendSubscribeSuccess')
        this.$mail.send({
          from: 'shabbaykina99@gmail.com',
          subject: 'Incredible',
          text: 'This is an incredible test message',
        })
      })
      


    },
    validateUser () {
      this.$v.$touch()

      if (!this.$v.$invalid) {
        this.saveUser()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.md-progress-bar {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
}
</style>
