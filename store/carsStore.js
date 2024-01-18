export const useCarsStore = defineStore('cars', {
    state: () => ({ page: 1, toSearch: '', data: [], pending: true, error: false, refresh: false }),
    getters: {
        doubleCount: (state) => state.count * 2,
    },
    actions: {
        init () {
            this.page = 1;
            this.toSearch = '';
            this.data = [];
        },
        updateToSearch (toSearch) {
            this.toSearch = toSearch
        },
        updatePage (page) {
            this.page = page  
        },
        async getCars() {
            const response = await useFetch(`https://dm-assignment-commonshare.koyeb.app/api/cars`, {
                query: {
                    page: this.page ? this.page : 1,
                    q:this.toSearch ? this.toSearch : ''
                }, 
            })
            this.data = this.page <= 1 ? [...response.data.value.data] : [...this.data, ...response.data.value.data];
            this.pending = response.pending.value;
            this.error = response.error.value;
            this.refresh = response.refresh.value;
        },
    },
})