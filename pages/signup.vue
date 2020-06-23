<template>
  <div class="container mx-auto">
    <div class="w-full flex justify-center">
      <div class="w-full max-w-xs">
        <form @submit.prevent="signup" class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
              Username
            </label>
            <input v-model="username" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username">
            <p v-if="feedback" class='text-red-500'>
              {{ feedback }}
            </p>
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
              Email
            </label>
            <input v-model="email" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="email">
          </div>
          <div class="mb-6">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
              Password
            </label>
            <input v-model="password" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************">
            <p v-if="feedback" class="text-red-500 text-xs italic">Please choose a password.</p>
          </div>
          <div class="flex items-center justify-between">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
              Sign Up
            </button>
            <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
              Forgot Password?
            </a>
          </div>
        </form>
        <p class="text-center text-gray-500 text-xs">
          &copy;2020 Acme Corp. All rights reserved.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import slugify from 'slugify'
import db from '../firebase/init'

export default {
  name: 'SignUp',
  // this is acts as a route guard for nuxt - if the param is not there, 404 page
  // validate ({ params }) {
  //   return params.name
  // },

  // props: {
  //   name: {
  //     required: true,
  //     type: String
  //   }
  // },

  data () {
    return {
      email: null,
      username: null,
      password: null,
      feedback: null,
      slug: null
    }
  },

  methods: {
    signup () {
      if (this.username) {
        this.slug = slugify(this.username, {
          replacement: '-',
          remove: /[$*_+~.()'"!\-:@]/g,
          lower: true
        })
        // the doc will get a reference to the db entry based on slug
        // (not auto-generated id)
        const ref = db.collection('users').doc(this.slug)
        // tries to get that data
        ref.get().then((doc) => {
          if (doc.exists) {
            this.feedback = 'This username already exists'
          } else {
            this.feedback = 'This username is free to use'
          }
        })
      } else {
        this.feedback = 'Please enter username'
      }
    }
  }
}
</script>
