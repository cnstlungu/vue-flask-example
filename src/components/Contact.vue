<template>
<div>
  <div class="row">

<div class="col-md-1"></div>
    <div class="col-md-4">
      <h4>Contact details</h4>
      <div class="card">
        <ul class="list-group list-group-flush">
          <li
            v-for="item in contactData"
            v-show="item.name!='emergencies'"
            v-bind:key="item.name"
            class="list-group-item"
          >
            <h6>
              {{item.nameEn}}:
              <a v-bind:href="item.url">{{item.value}}</a>
            </h6>
          </li>
        </ul>
      </div>
<br>
      <div>
        <br>

<br>
<h4>Contact us</h4>
      <div class="alert alert-danger" v-if="pleaseaccept" role="alert">
 Please accept our privacy policy to send the message.
</div>
<div class="alert alert-success" v-if="success" role="alert">
  Success! Your message has been sent.
</div>

<div class="alert alert-danger" v-if="error" role="alert">
  Error! Sorry, but your message could not have been sent.
</div>
            <b-form @submit.prevent="processForm">
      <b-input class="mb-2 mr-sm-2 mb-sm-0" id="formName" v-model="formName" placeholder="Name" />
      <b-input  type="email" id="formEmail" placeholder="E-mail" v-model="formEmail" />
    <b-form-textarea id="formText"
                     v-model="formText"
                     placeholder="Your message"
                     :rows="3"
                     :max-rows="6">
    </b-form-textarea>
<br>
      <b-form-checkbox v-model="formTermsAccept" class="mb-2 mr-sm-2 mb-sm-0">I agree with the <a href="/privacy">privacy policy</a></b-form-checkbox>
      <b-button type="submit" variant="primary">Send the message</b-button>
    </b-form>
    </div>
    </div>

    <div class="col-md-1"><br></div>
    <div class="col-md-6">

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d65218724.7103425!2d-31.498041349999994!3d-3.8881500499999992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x65a81cae36eb8ff%3A0xa6342257f310534f!2sAtlantic%20Ocean!5e0!3m2!1sen!2sro!4v1618690493189!5m2!1sen!2sro"
        width="100%"
        height="600px"
        frameborder="0"
        style="border:0"
        allowfullscreen
      ></iframe>
    </div>
    </div>
</div>
</template>

<script>
import data from '@/data'
const axios = require('axios')

export default {
  name: 'Contact',
  data () {
    return {
      contactData: data.contactData,
      formName: null,
      formEmail: null,
      formText: null,
      formTermsAccept: false,
      success: false,
      error: false,
      pleaseaccept: false
    }
  },
  methods: {

    processForm: function () {
      var self = this
      if (this.formTermsAccept) {
        if (this.success || this.error) {
          this.success = false
          this.error = false
        };

        axios({
          method: 'post',
          // url: 'http://localhost/8080/api/sendemail',
          url: process.env.FLASK_API_SERVER + ':' + process.env.FLASK_API_PORT + '/api/sendemail',
          timeout: 10000,
          headers: {},
          data: {
            name: this.formName,
            email: this.formEmail,
            text: this.formText
          }
        })
          .then(function (response) {
            self.formName = ''
            self.formEmail = ''
            self.formText = ''
            self.success = true
          })
          .catch(function (error) {
            console.log(error)
            self.error = true
          })
      } else {
        this.pleaseaccept = true
      }
    }
  }
}

</script>
<style scoped>
ul {
  list-style-type: none;
  text-align: left;
}

div ul {
  vertical-align: middle;
}

h4 {
  padding-bottom: 1em;
}

</style>
