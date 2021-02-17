new Vue({
    el: '#app',
    data: {
        title: '',
        boxShow: false
    },
    methods: {
        onBtnClick() {
            this.boxShow= !this.boxShow;
            //this => Vue 객체의 변수
            // ! => not
        }
    }
})