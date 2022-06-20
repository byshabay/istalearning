<template>
    <form novalidate class="md-layout" @submit.stop.prevent="validateUser">
        <md-card class="md-layout-item md-small-size-100">
            <md-card-header>
                <div class="md-title">{{ $t('subCons')}}</div>
                <div class="cons__h2">{{ $t('subConsH2')}}</div>
            </md-card-header>

            <md-card-content>
                <div class="md-layout md-gutter">
                    <div class="md-layout-item md-small-size-100">
                        <md-field :class="getValidationClass('name')">
                            <label for="name">{{ $t('name')}}</label>
                            <md-input name="name" id="name" autocomplete="given-name" v-model="form.name"
                                :disabled="sending" />
                            <span class="md-error" v-if="!$v.form.name.required">{{ $t('required')}}</span>
                            <span class="md-error" v-else-if="!$v.form.name.minlength">{{ $t('shortName')}}</span>
                        </md-field>
                    </div>

                    <div class="md-layout-item md-small-size-100">
                        <md-field :class="getValidationClass('phone')">
                            <label for="phone">{{ $t('tel')}}</label>
                            <md-input name="phone" id="phone" autocomplete="tel" v-model="form.phone"
                                :disabled="sending" />
                            <span class="md-error" v-if="!$v.form.phone.required">{{ $t('required')}}</span>
                            <span class="md-error" v-else-if="!$v.form.phone.minlength">{{ $t('incorrect')}}</span>
                        </md-field>
                    </div>
                </div>

                <md-field :class="getValidationClass('email')">
                    <label for="email">Email</label>
                    <md-input type="email" name="email" id="email" autocomplete="email" v-model="form.email"
                        :disabled="sending" />
                    <span class="md-error" v-if="!$v.form.email.required">{{ $t('required')}} </span>
                    <span class="md-error" v-else-if="!$v.form.email.email">{{ $t('incorrect')}}</span>
                </md-field>

                <md-field :class="getValidationClass('language')">
                    <label for="language">{{ $t('langCons')}}</label>


                    <md-select v-model="form.language" name="language" id="language" :disabled="sending"
                        :placeholder="$t('langConsChoise')">

                        <md-option value="EN" name="EN" id="EN">
                            {{ $t('en')}}
                        </md-option>
                        <md-option value="FR" name="FR" id="FR">
                            {{ $t('fr')}}
                        </md-option>

                        <md-option value="RUS" name="RUS" id="RUS">
                            {{ $t('rus')}}
                        </md-option>

                    </md-select>
                    <span class="md-error" v-if="!$v.form.language.required">{{ $t('required')}}</span>
                </md-field>

                <md-field>
                    <label for="comment">{{ $t('comment')}} </label>
                    <md-textarea name="comment" id="comment" v-model="form.comment" :disabled="sending" />
                </md-field>

            </md-card-content>

            <md-progress-bar md-mode="indeterminate" v-if="sending" />

            <md-card-actions>
                <md-button type="submit" class="md-primary" :disabled="sending">{{ $t('recording')}}
                </md-button>
            </md-card-actions>
        </md-card>


        <md-snackbar :md-active.sync="userSaved" :md-position="position" :md-duration="isInfinity ? Infinity : duration"
            md-persistent>
            {{ $t('manager')}} {{ form.email }}
            <md-button class="md-primary" @click="userSaved = false">{{ $t('close')}}</md-button>
        </md-snackbar>
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
            selected: '',
            position: 'center',
            duration: 4000,
            isInfinity: false

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
            this.userSaved = true
            
            
           
            

            this.$api.sendConsultation(this.form).finally(() => {
                window.setTimeout(() => {
                    this.lastUser = `${this.form.email}`;
                    this.userSaved = true;
                    this.sending = false;
                    this.clearForm();
                    this.$emit('sendSubscribeSuccess')
                    this.$mail.send({
                        from: 'shabbaykina99@gmail.com',
                        subject: 'Incredible',
                        text: 'This is an incredible test message',
                    })
                }, 1500);

                // this.lastUser = `${this.form.name}`
                
                // this.sending = false
               
                // this.clearForm()
              
                
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