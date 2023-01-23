import { reactive } from 'vue'

export const store = reactive({
    baseURL: 'http://127.0.0.1:8000',
    apiURL: 'http://127.0.0.1:8000/api',
    getImage(path) {
        return this.baseURL + '/storage/' + path;
    }
})