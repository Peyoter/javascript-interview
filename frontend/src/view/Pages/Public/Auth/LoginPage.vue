<template>
    <section id="wrapper">
        <div class="login-register">
            <div class="login-box card">
                <div class="container">
                    <transition name="fade">
                        <div v-if="alert.message" :class="'alert ' + alert.type">{{alert.message}}</div>
                    </transition>
                </div>
                <div class="card-body">
                    <form class="form-horizontal form-material" id="loginform" @submit.prevent="handleSubmit">
                        <h3 class="box-title text-center m-b-20">Вход</h3>
                        <div class="text-center"></div>
                        <div class="form-group ">
                            <div class="col-xs-12">
                                <input class="form-control" type="text" required="" v-model="email"
                                       placeholder="Почта"></div>
                        </div>
                        <div class="form-group">
                            <div class="col-xs-12">
                                <input class="form-control" type="password" required="" v-model="password"
                                       placeholder="Секретный пароль"></div>
                        </div>
                        <div class="form-group text-center">
                            <input class="form-control chk-col-red" type="checkbox" >
                        </div>
                        <div class="form-group text-center">
                            <div class="col-xs-12 p-b-20">
                                <button class="btn btn-block btn-lg btn-info btn-rounded" type="submit">YAARR!</button>
                            </div>
                        </div>
                        <div class="form-group m-b-0">
                            <div class="col-sm-12 text-center">
                                Нет аккаунта? <router-link tag="a" :to="{name:'signup'}" class="text-info m-l-5"><b>Регистрация!</b></router-link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        data() {

            return {
                email: '',
                password: '',
                submitted: false
            }
        },
        computed: {
            loggingIn() {
                return this.$store.state.authentication.status.loggingIn;
            },
            alert() {
                return this.$store.state.alert
            },
        },
        created() {
            this.$store.dispatch('authentication/logout');
        },
        methods: {
            handleSubmit(e) {
                this.submitted = true;
                const {email, password} = this;
                const {dispatch} = this.$store;
                if (email && password) {
                    dispatch('authentication/login', {email, password});
                }
            }
        }
    };
</script>
