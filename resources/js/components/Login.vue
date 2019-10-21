<template>
    <div class="container">
        <div class="card card-default">
            <div class="card-header">Authentication</div>
            <div class="card-body">
                <div class="alert alert-danger" v-if="error">
                    <p>{{ error }}</p>
                </div>
                <form @submit.prevent="login" action="" method="post">
                    <div class="form-group" v-bind:class="{'has-error': has_error}">
                        <label for="email">Email</label>
                        <input type="email" name="email" id="email" class="form-control" v-model="email" required>
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input type="password" name="password" id="password" class="form-control" v-model="password" required>
                    </div>
                    <div class="form-group">
                        <router-link :to="{ name : 'reset-password' }" :key="key" class="nav-link">Forgot password?</router-link>
                    </div>

                    <button type="submit" class="btn btn-default">Sign In</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            email: null,
            password: null,
            has_error: false,
            error: '',
            success: false
        }
    },
    methods: {
        login() {
            const app = this;
            this.$auth.login({
                params: {
                    email: app.email,
                    password: app.password
                },
                success: function () {
                    app.success = true;
                },
                error: function (resp) {
                    console.log(resp.response.data.error);
                    app.has_error = true;
                    app.error = resp.response.data.msg;
                },
                rememberMe: true,
                redirect: '/dashboard',
                fetchUser: true,
            })
        }
    }
}
</script>
