<template>
    <div>
        <div class="alert alert-danger" v-if="error">
            <p>There was an error, unable to sign in with those credentials.</p>
        </div>
        <form @submit.prevent="login" action="" method="post">
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" name="email" id="email" class="form-control" v-model="email" required>
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" name="password" id="password" class="form-control" v-model="password" required>
            </div>

            <button type="submit" class="btn btn-default">Sign In</button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            email: null,
            password: null,
            error: false
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

                },
                error: function () {

                },
                rememberMe: true,
                redirect: '/dashboard',
                fetchUser: true,
            })
        }
    }
}
</script>
