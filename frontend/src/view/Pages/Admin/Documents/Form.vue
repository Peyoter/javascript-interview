<template>
    <div class="page-wrapper">
        <div class="container-fluid">
            <div class="row page-titles">
                <div class="col-md-5 align-self-center">
                    <h3 class="text-themecolor">Персональные виджеты</h3>
                </div>

            </div>
            <div class="row">
                <div class="card">
                    <div class="card-body">
                        <transition name="fade">
                            <div v-if="alert.message" :class="'alert ' + alert.type">{{alert.message}}</div>
                        </transition>
                        <transition name="fade">
                            <div class="form-material m-t-40">
                                <form id="upload">
                                    <div class="form-group">
                                        <label>Название документа</label>
                                        <input type="text" class="form-control" placeholder="" v-model="title" maxlength="100">
                                    </div>

                                    <div class="form-group">
                                        <label>Описание</label>
                                        <textarea type="text" class="form-control" placeholder="" v-model="description" maxlength="255">
                                        </textarea>
                                    </div>

                                    <div class="form-group">
                                        <label>Документ</label>
                                        <input class="form-control" type="file" id="pdf_file" ref="pdf_file" v-on:change="handlePdfUpload()">
                                    </div>

                                    <button class="btn btn-success" v-on:click.stop.prevent="submitForm()">Сохранить</button>
                                </form>
                            </div>
                        </transition>
                    </div>
                </div>
            </div>
        </div>    </div>
</template>

<script>
    import {mapState} from 'vuex';
    import {authHeader, handleResponse, token} from '../../../../helpers/';

    export default {
        data() {
            // Next transfer to computed and getting value by state
            return {
                title: '',
                description: '',
            }
        },
        computed: {
            loading: function () {
                return this.$store.state.smartWidget.loading;
            },
            smartWidgets: function () {
                return this.$store.state.smartWidget.all.smartWidgets;
            },
            alert() {
                return this.$store.state.alert
            },
        },
        methods: {
            submitForm(){

                const formData = new FormData();

                formData.append('title', this.title);
                formData.append('description', this.description);
                formData.append('pdf_file', this.pdf_file);

                this.$store.dispatch('document/store', formData);
//                fetch('http://localhost:3000/api/documents', options);
            },
            handlePdfUpload(){
                this.pdf_file = this.$refs.pdf_file.files[0];
            },
        }
    };
</script>
