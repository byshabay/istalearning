<template>
    <form novalidate class="md-layout" @submit.prevent="validateUser">
        <md-card class="md-layout-item md-small-size-100">
            <md-card-header>
                <div class="md-title">Записаться на консультацию</div>
                <div class="cons__h2">Для определения уровня владения языком</div>
            </md-card-header>

            <md-card-content>
                <div class="md-layout md-gutter">
                    <div class="md-layout-item md-small-size-100">
                        <md-field :class="getValidationClass('name')">
                            <label for="name">Имя</label>
                            <md-input name="name" id="name" autocomplete="given-name" v-model="form.name"
                                :disabled="sending" />
                            <span class="md-error" v-if="!$v.form.name.required">Обязательное поле</span>
                            <span class="md-error" v-else-if="!$v.form.name.minlength">Слишком короткое имя</span>
                        </md-field>
                    </div>

                    <div class="md-layout-item md-small-size-100">
                        <md-field :class="getValidationClass('phone')">
                            <label for="phone">Телефон</label>
                            <md-input name="phone" id="phone" autocomplete="tel" v-model="form.phone"
                                :disabled="sending" />
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

                <md-field :class="getValidationClass('language')">
                    <label for="language">Язык, который хотели бы изучить</label>


                    <md-select v-model="form.language" name="language" id="language" :disabled="sending"
                        placeholder="Выберите нужный язык">

                        <md-option value="EN" name="EN" id="EN">
                            Английский
                        </md-option>
                        <md-option value="FR" name="FR" id="FR">
                            Французский
                        </md-option>

                        <md-option value="RUS" name="RUS" id="RUS">
                            Русский
                        </md-option>

                    </md-select>
                    <span class="md-error" v-if="!$v.form.language.required">Обязательное поле</span>
                </md-field>
 
                <md-field>
                    <label for="comment">Комментарий </label>
                    <md-textarea name="comment" id="comment" v-model="form.comment" :disabled="sending" />
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

</template>

<script>
import { validationMixin } from 'vuelidate'
import { MdField } from 'vue-material/dist/components'
import Vue from 'vue'
import vSelect from './v-select.vue'

Vue.use(MdField)

Vue.component('MdSelect', Vue.options.components.MdSelect.extend({
    methods: {
        isInvalidValue: function isInvalidValue() {
            return this.$el.validity ? this.$el.validity.badInput : this.$el.querySelector('input').validity.badInput
        }
    }
}))
import {
    required,
    email,
    numeric,
    minLength,
    maxLength,
    helpers
} from 'vuelidate/lib/validators'

export default {
    name: 'SubscribeConsultation',
    components: {
        vSelect
    }, 
    props: {
        content: {
            type: Object,
        },
    },
    mixins: [validationMixin],
    data() {
        return {
            form: {
                name: null,
                phone: null,
                email: null,
                language: null,
                comment: null,
            },
            userSaved: false,
            sending: false,
            lastUser: null,
            options: [
                {name: 'EN', value: 'EN'},
                {name: 'FR', value: 'FR'},
                { name: 'RUS', value: 'RUS' },
            ],
            selected: ''

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
            language: {
                required,
            },
            comment: {
                
            },
        }
    },
    methods: {
        optionSelect(option) {
            this.selected = option.name
        },
        getValidationClass(fieldName) {
            const field = this.$v.form[fieldName]

            if (field) {
                return {
                    'md-invalid': field.$invalid && field.$dirty
                }
            }
        },
        clearForm() {
            this.$v.$reset()
            this.form.name = null
            this.form.phone = null
            this.form.event = null
            this.form.language = null
            this.form.comment = null
        },

        saveUser() {
            this.sending = true

            this.$api.sendConsultation(this.form).finally(() => {

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
        validateUser() {
            this.$v.$touch()

            if (!this.$v.$invalid) {
                this.saveUser()
            }
        }
    }
}
</script>

<style>

</style>