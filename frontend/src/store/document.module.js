import {documentService} from '../services';
import {router} from '../helpers/router';

export const document = {
    namespaced: true,
    state: {
        documents: {},
    },
    actions: {
        getAll({commit}) {
            commit('getAllRequest');
            documentService.getAll()
                .then(
                    data => commit('getAllSuccess', data),
                    error => commit('getAllFailure', error)
                );
        },
        remove({commit}, data) {
            commit('getAllRequest');
            documentService.remove(data)
                .then(
                    data => {
                        return documentService.getAll();
                    },
                    error => commit('getAllFailure', error)
                ).then(
                data => commit('getAllSuccess', data),
                error => commit('getAllFailure', error)
            )

            ;
        },
        store({dispatch, commit}, data) {
            commit('getAllRequest');
            documentService.store(data)
                .then(
                    data => {
                        router.push('documents');
                    },
                    error => {
                        dispatch('alert/error', error, {root: true});
                        commit('getAllFailure', error)
                    }
                );
        },
    },
    mutations: {
        getAllRequest(state) {
            state.documents = {loading: true};
        },
        getAllSuccess(state, data) {
            state.documents = data.documents;
        },
        getAllFailure(state, error) {
            state.documents = {error};
        },
    }

};
