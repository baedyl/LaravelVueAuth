<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-6">
        <div class="card card-default">
          <div class="card-header">New Password</div>
          <div class="card-body">
            <div class="alert alert-danger" v-if="has_error && !success">
                <p>There was some error(s), unable to reset password!</p>
            </div>
            <!-- <ul v-if="errors">
              <li v-for="error in errors" v-bind:key="error">{{ msg }}</li>
            </ul> -->
            <form autocomplete="off" @submit.prevent="resetPassword" method="post">
              <div class="form-group">
                  <label for="email">E-mail</label>
                  <input type="email" id="email" class="form-control" placeholder="user@example.com" v-model="email" required>
              </div>
              <div class="form-group">
                  <label for="email">Password</label>
                  <input type="password" id="password" class="form-control" placeholder="" v-model="password" required>
              </div>
              <div class="form-group">
                  <label for="email">Confirm Password</label>
                  <input type="password" id="password_confirmation" class="form-control" placeholder="" v-model="password_confirmation" required>
              </div>
              <button type="submit" class="btn btn-primary">Update</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    data() {
      return {
        token: null,
        email: null,
        password: null,
        password_confirmation: null,
        has_error: false,
        errors: {},
        success: false
      }
    },
    methods: {
      resetPassword() {
        const app = this;
  
        this.$http.post("/auth/reset/password/" + this.$route.params.token, {
            token: this.$route.params.token,
            email: this.email,
            password: this.password,
            password_confirmation: this.password_confirmation
        })
        .then(result => {
          // success
          app.success = true;
          this.$router.push({name: 'login'})
        }, response => {
          // error
          console.log(response);
          app.has_error = true;
          app.errors = response.errors || {}

        });
      }
    }
}

</script>