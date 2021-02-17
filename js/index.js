new Vue({
    el: '#app',
    data: {
        title: '',
        boxShow: false,
        imgArr: [
            '../img/img1.jpg',
            '../img/img2.jpg',
            '../img/img3.jpg',
            '../img/img4.jpg',
        ],
        imgSrc: '../img/img1.jpg',
        imgIdx: 0,
    },
    methods: {
        onBtnClick() {
            this.boxShow= !this.boxShow;
            //this => Vue 객체의 변수
            // ! => not
        },
        onImgClick() {
            this.imgIdx = (this.imgArr.length - 1 == this.imgIdx) ? 0 : this.imgIdx + 1;
            this.imgSrc = this.imgArr[this.imgIdx];
        }
    }
})