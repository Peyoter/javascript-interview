<template>
    <div>
        <Logo/>
        <sidebar/>
        <router-view name="adminContent"/>
    </div>
</template>

<script>
    import Sidebar from "./Modules/Sidebar";
    import Logo from "./Modules/TopBar";

    export default {
        components: {Logo, Sidebar}
    }
</script>
