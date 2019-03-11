<template>
    <header class="topbar">
        <nav class="navbar top-navbar navbar-expand-md navbar-light">
            <ul class="navbar-nav my-lg-0">

                <li class="nav-item p-1">
                    <a href="" class="btn btn-primary"><i class="fa fa-edit"></i> Editor</a>
                </li>
                <li class="nav-item p-1 text-right">
                    <router-link :to="{name:'overlays'}" tag="button" class="btn btn-success">Exit</router-link>
                </li>
            </ul>
        </nav>
    </header>
</template>


<script>
    export default {
        name: "OverlayHeader"
    }
</script>

<style scoped>

</style>
