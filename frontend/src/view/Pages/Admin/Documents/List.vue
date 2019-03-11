<template>
    <div class="page-wrapper">
        <div class="container-fluid">
            <div class="row page-titles">
                <div class="col-md-5 align-self-center">
                    <h3 class="text-themecolor">Документы</h3>
                </div>
            </div>
            <div class="row page-titles">
                <div class="col-md-12">
                    <router-link :to="{ name: 'documents.create'}" tag="a" class="btn btn-info">
                        Добавить
                    </router-link>
                </div>
            </div>
            <div class="row">
                    <transition name="fade">
                        <div class="col-md-12">
                            <div class="card" v-if="!documents.loading">
                                <div class="card-body">
                                    <table class="table table-responsive">
                                        <tr v-for="(document, n) in documents">
                                            <td>{{++n}}</td>
                                            <td>
                                                <div>{{document.title}}</div>
                                            </td>
                                            <td>
                                                {{document.description}}
                                            </td>
                                            <td class="text-right">
                                                <a v-bind:href="config.apiUrl + document.path" class="btn btn-success" v-bind:donwload="document.path">
                                                    <i class="fa fa-download"></i>
                                                </a>

                                                <button class="btn btn-danger" v-on:click="remove(document.id)">
                                                    <i class="fa fa-times"></i>
                                                </button>
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </transition>
            </div>
        </div>
    </div>
</template>

<script>
    import config from 'config';
    import {mapGetters} from 'vuex'

    export default {
        computed: {
            config() {
                return config;
            },
            documents() {
                return this.$store.state.document.documents;
            }
        },
        created() {
            this.$store.dispatch('document/getAll');
        },
        methods: {
            remove(id){
                this.$store.dispatch('document/remove', {id: id});
            }
        }
    };
</script>
