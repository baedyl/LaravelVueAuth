<template>
    <div class="container">
        <div class="card card-default">
            <div class="card-header">Registration</div>
            <div class="card-body">
                <div class="alert alert-danger" v-if="has_error && !success">
                    <p>There was some error(s), unable to complete registration!</p>
                </div>
                <div class="alert alert-success" v-if="success">
                    <p>Registration completed. You can now <router-link :to="{name: 'login'}" >sign in</router-link></p>
                </div>

                <form @submit.prevent="register" v-if="!success" method="post" >
                    <div class="form-group" v-bind:class="{'has-error': has_error && errors.name}">
                        <label for="name">Name</label>
                        <input type="text" name="name" id="name" class="form-control" v-model="name" required>
                        <span class="help-block" v-if="has_error && errors.name">{{ errors.name }}</span>
                    </div>
                    <div class="form-group" v-bind:class="{'has-error': has_error && errors.email}">
                        <label for="email">Email</label>
                        <input type="email" name="email" id="email" class="form-control" v-model="email" required>
                        <span class="help-block" v-if="has_error && errors.email">{{ errors.email }}</span>
                    </div>
                    <div class="form-group" v-bind:class="{'has-error': has_error && errors.password}">
                        <label for="password">Password</label>
                        <input type="password" name="password" id="password" class="form-control" v-model="password" required>
                        <span class="help-block" v-if="has_error && errors.password">{{ errors.password }}</span>
                    </div>
                    <button type="submit" class="btn btn-default">Submit</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: '',
            email: '',
            password: '',
            has_error: false,
            error: '',
            errors: {},
            success: false
        }
    },
    methods: {
        register() {
            const app = this;
            this.$auth.register({
                params: {
                    name: app.name,
                    email: app.email,
                    password: app.password
                },
                success: function () {
                    app.success = true;
                    this.$router.push({
                        name: 'login',
                        successRegistrationRedirect: true
                    });
                },
                error: function (resp) {
                    console.log(resp.response.data.errors);
                    app.has_error = true;
                    app.error = resp.response.data.error,
                    app.errors = resp.response.data.errors || {}
                },
                redirect: null
            });
        }
    }
}
</script>
