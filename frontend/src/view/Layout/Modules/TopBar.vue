<template>
    <header class="topbar">
        <nav class="navbar top-navbar navbar-expand-md navbar-light">
            <div class="navbar-header">
                <a class="navbar-brand" href="#">
                    <img src="../../../styles/addons/img/logo-small.png" alt="homepage" class="light-logo"/>
                        <span class="light-logo-streamshard"></span>
            </a>
            </div>
            <div class="navbar-collapse">
                <ul class="navbar-nav mr-auto">
                    <!-- This is  -->
                    <li class="nav-item"><a class="nav-link nav-toggler hidden-md-up waves-effect waves-dark"
                                            href="javascript:void(0)"><i class="ti-menu"></i></a></li>
                    <li class="nav-item"><a class="nav-link sidebartoggler hidden-sm-down waves-effect waves-dark"
                                            href="javascript:void(0)"><i class="ti-menu"></i></a></li>
                    <li class="nav-item hidden-sm-down"></li>
                </ul>
                <ul class="navbar-nav my-lg-0">
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle waves-effect waves-dark duck" href=""
                           data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <img src="/img/user-icon.png"
                                 alt="user" class="profile-pic"/></a>
                        <div class="dropdown-menu dropdown-menu-right animated flipInY">
                            <ul class="dropdown-user">
                                <li role="separator" class="divider"></li>
                                <li>
                                    <router-link tag="a" :to="{name: 'login'}"><i class="fa fa-power-off"></i> Logout</router-link>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
</template>

<script>
    export default {
        computed: {
            user: function () {
                return this.$store.state.authentication.user;
            }
        },
    };
</script>