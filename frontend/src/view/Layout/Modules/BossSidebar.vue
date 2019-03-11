<template>
    <aside class="left-sidebar left-sidebar-overlay">
        <div class="scroll-sidebar">
            <nav class="sidebar-nav p-2">

                <form class="form-material m-t-40" @submit.prevent="handleSubmit">
                    <div class="form-body">
                        <div class="form-group">
                            <label class="control-label">Тип босса</label>
                            <select class="form-control custom-select" data-placeholder="Choose a Category"
                                    v-model="boss_type_id" tabindex="1">
                                <option value="1">Обычный босс может лечиться</option>
                            </select>
                            <small class="form-control-feedback">При смерти босс вылечивается на множитель</small>
                        </div>
                        <div class="form-group">
                            <label>Множитель здоровья</label>
                            <input class="form-control" v-model="max_health_factor">
                            <small class="form-control-feedback">После смерти здоровье будет увеличено на </small>
                        </div>
                        <div class="form-group">
                            <label>Здоровье</label>
                            <input class="form-control" v-model="health">
                        </div>
                        <div class="form-group">
                            <label>Максимальное здоровье</label>
                            <input class="form-control" v-model="health_max">
                        </div>
                        <div class="form-group">
                            <label>Имя босса</label>
                            <input class="form-control" v-model="nick_name">
                        </div>
                        <div class="form-group">
                            <label>Множитель хостов</label>
                            <input class="form-control" v-model="host_factor">
                        </div>
                        <div class="form-group">
                            <label>Множитель битсов</label>
                            <input class="form-control" v-model="bits_factor">
                        </div>
                        <div class="form-group">
                            <label>Множитель сабов</label>
                            <input class="form-control" v-model="subscribe_factor">
                        </div>
                        <div class="form-group">
                            <label>Множитель подарочных сабов</label>
                            <input class="form-control" v-model="subgift_factor">
                        </div>
                        <div class="form-group">
                            <label>Множитель фолловеров</label>
                            <input class="form-control" v-model="follower_factor">
                        </div>
                        <div class="form-group">
                            <label>Множитель донатов</label>
                            <input class="form-control" v-model="donation_factor">
                        </div>

                        <div>
                            <label>Цвета босса</label>
                            <swatches v-model="bg_color" colors="text-advanced" />
                        </div>

                        <div class="forn-group">
                            <input type="checkbox" v-model="can_heal" class="chk-col-red" id="md_checkbox_1"/>
                            <label for="md_checkbox_1">Может лечиться</label>
                        </div>

                        <div class="forn-group">
                            <input type="checkbox" v-model="can_heal_over" class="chk-col-red" id="md_checkbox_2"/>
                            <label for="md_checkbox_2">Лечить больше макс здоровья </label>
                        </div>

                    </div>
                    <div class="text-center">
                        <button class="btn btn-outline-info">Сохранить</button>
                    </div>
                </form>
            </nav>
        </div>
    </aside>
</template>

<script>
    import Swatches from 'vue-swatches'

    // Import the styles too, globally
    import "vue-swatches/dist/vue-swatches.min.css"

    export default {
        components:{Swatches},
        computed: {
            boss: function () {
                return this.$store.state.boss.boss;
            },
            boss_type_id: {
                get() {
                    return this.$store.state.boss.boss.boss_type_id
                },
                set(boss_type_id) {
                    this.$store.commit('boss/updateAll', {boss_type_id: boss_type_id})
                }
            }, nick_name: {
                get() {
                    return this.$store.state.boss.boss.nick_name
                },
                set(nick_name) {
                    this.$store.commit('boss/updateAll', {nick_name: nick_name})
                }
            },
            health: {
                get() {
                    return this.$store.state.boss.boss.health
                },
                set(health) {
                    this.$store.commit('boss/updateAll', {health: health})
                }
            },
            health_max: {
                get() {
                    return this.$store.state.boss.boss.health_max
                },
                set(health_max) {
                    this.$store.commit('boss/updateAll', {health_max: health_max})
                },
            },
            host_factor: {
                get() {
                    return this.$store.state.boss.boss.host_factor
                },
                set(host_factor) {
                    this.$store.commit('boss/updateAll', {host_factor: host_factor})
                }
            },
            bits_factor: {
                get() {
                    return this.$store.state.boss.boss.bits_factor
                },
                set(bits_factor) {
                    this.$store.commit('boss/updateAll', {bits_factor: bits_factor})
                }
            },
            subscribe_factor: {
                get() {
                    return this.$store.state.boss.boss.subscribe_factor
                },
                set(subscribe_factor) {
                    this.$store.commit('boss/updateAll', {subscribe_factor: subscribe_factor})
                }
            },
            subgift_factor: {
                get() {
                    return this.$store.state.boss.boss.subgift_factor
                },
                set(subgift_factor) {
                    this.$store.commit('boss/updateAll', {subgift_factor: subgift_factor})
                }
            },
            follower_factor: {
                get() {
                    return this.$store.state.boss.boss.follower_factor
                },
                set(follower_factor) {
                    this.$store.commit('boss/updateAll', {follower_factor: follower_factor})
                }
            },
            donation_factor: {
                get() {
                    return this.$store.state.boss.boss.donation_factor
                },
                set(donation_factor) {
                    this.$store.commit('boss/updateAll', {donation_factor: donation_factor})
                }
            },
            can_heal: {
                get() {
                    return this.$store.state.boss.boss.can_heal
                },
                set(can_heal) {
                    this.$store.commit('boss/updateAll', {can_heal: can_heal})
                }
            },
            can_heal_over: {
                get() {
                    return this.$store.state.boss.boss.can_heal_over
                },
                set(can_heal_over) {
                    this.$store.commit('boss/updateAll', {can_heal_over: can_heal_over})
                }
            },
            max_health_factor: {
                get() {
                    return this.$store.state.boss.boss.max_health_factor
                },
                set(max_health_factor) {
                    this.$store.commit('boss/updateAll', {max_health_factor: max_health_factor})
                }
            },

            bg_color: {
                get() {
                    return this.$store.state.boss.boss.bg_color
                },
                set(bg_color) {
                    this.$store.commit('boss/updateAll', {bg_color: bg_color})
                }
            },
        },
        methods: {
            handleSubmit() {
                this.$store.dispatch('boss/updateCurrent', this.$store.state.boss.boss);
            },
        }
    }
</script>