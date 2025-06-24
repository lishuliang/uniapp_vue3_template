import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
    state: () => ({
        token: uni.getStorageSync('App-Token') || '',
        info: null,
    }),
    actions: {
        setToken(token) {
            this.token = token;
            uni.setStorageSync('App-Token', token);
        },
        setInfo(info) {
            this.info = info;
        },
        logout() {
            this.token = '';
            this.info = null;
            uni.removeStorageSync('App-Token');
        },
    },
});
