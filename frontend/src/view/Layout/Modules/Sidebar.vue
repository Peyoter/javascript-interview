<template>
    <aside class="left-sidebar">
        <div class="scroll-sidebar">
            <nav class="sidebar-nav">
                <ul id="sidebarnav">
                    <li>
                        <router-link :to="{ name: 'dashboard'}" tag="a">
                            <i class="mdi mdi-view-dashboard">
                            </i><span class="hide-menu">Панель</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'documents'}" tag="a">
                            <i class="mdi mdi-buffer">
                            </i><span class="hide-menu">Документы</span>
                        </router-link>
                    </li>
                </ul>
            </nav>
        </div>
    </aside>
</template>

<script>
    export default {
        name: "Sidebar"
    }
</script>

<style scoped>

</style>
