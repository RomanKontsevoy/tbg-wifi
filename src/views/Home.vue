<template>
    <div class="home">
        <section class="section1">
            <div class="wrapper">
                <h1 @click="drawClip">
                <span
                        class="h1-inner"
                        :class="{ 'show-h1': showHead }"

                >ВАШ БИЗНЕС НАШ WI-FI</span>
                </h1>
                <div class="mask-wrap"
                >
                    <img class="mask-bg__img" src="img/mask-bg.jpg">
                    <img class="mask-img" src="img/mask.png">
                    <canvas class="canv-mask"

                    ></canvas>

                    <transition name="roll">
                        <div class="canv-mask__overlay"
                             v-show="!expand"
                        ></div>
                    </transition>

                    <div class="canv-mask__container"
                         @mousemove="canvHover"
                    >
                    </div>

                    <div class="wifi-sign__wrap">
                        <div class="wifi-sign__item wow fadeIn"
                             data-wow-duration=".5s"
                             data-wow-delay="1.9s"
                        >
                            <img src="img/wifi4.png" alt="">
                        </div>
                        <div class="wifi-sign__item wow fadeIn"
                             data-wow-duration=".5s"
                             data-wow-delay="1.6s"
                        >
                            <img src="img/wifi3.png" alt="">
                        </div>
                        <div class="wifi-sign__item wow fadeIn"
                             data-wow-duration=".5s"
                             data-wow-delay="1.3s"
                        >
                            <img src="img/wifi2.png" alt="">
                        </div>
                        <div class="wifi-sign__item wow fadeIn"
                             data-wow-duration=".5s"
                             data-wow-delay="1s"
                        >
                            <img src="img/wifi1.png" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="section2">
            <div class="wrapper">
                <h3 class="wow fadeInDown" data-wow-offset="200">Our Cases</h3>
                <div class="cases-wrap">
                    <div class="cases-item"
                         v-for="(block, index) in casesBlocks"
                         :key="'case-item' + index"
                    >
                        <div class="case-img"
                             :class="{'case-img-show' : block.blurShow}"
                        >
                            <img :src="'img/case_'+(index+1)+'.jpg'" alt="">
                        </div>
                        <div class="cases-overlay">
                            <div class="cases-label"
                                 :class="{'cases-label-show' : block.labelShow}"
                            >
                            <span
                                    :class="{headShow : block.headShow}"
                            >{{block.head}}</span>
                            </div>
                            <div class="cases-blur">
                                <img src="img/logo-wh.svg" alt="">
                                <a href="">подробнее</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="section3">
            <div class="wrapper">
                <h3 class="wow fadeInUp" data-wow-offset="200">
                    <img src="img/h3_img.png" alt="">
                </h3>
                <div class="clients-wrap">
                    <div class="client-item wow fadeIn"
                         data-wow-offset="200"
                         data-wow-duration="1s"
                         :data-wow-delay="(index%3*.15)+'s'"
                         v-for="(images, index) in clImg"
                         :key="'client_item_' + index"
                    >
                        <div
                                class="client-img__wrap"
                                :class="{ 'highlight': images.show }"
                                :id="'clImg_' + index"
                                @mouseenter="images.show = true"
                                @mouseleave="images.show = false"
                        >
                            <img
                                    v-for="(src, i) in images.src"
                                    :key="'img_'+index+'_'+i"
                                    :src="'img/'+src" alt=""
                            >

                        </div>
                        <transition-group
                                class="phone-popup"
                                name="phone-popup"
                        >
                            <div class="popover"
                                 v-show="images.show"
                                 @click="images.show = false"
                                 :key="index+'3'"
                            ></div>
                            <div class="phone-popup__wrap"
                                 :key="index+'1'"
                                 v-show="images.show"
                            >
                                <img src="img/interactive_slide.png" alt="">
                            </div>
                            <!--<div class="phone-btn"-->
                            <!--:key="index+'2'"-->
                            <!--v-show="images.show">-->
                            <!--<a href="">подробнее</a>-->
                            <!--</div>-->
                        </transition-group>

                    </div>
                </div>
            </div>
        </section>
        <Footer/>
    </div>
</template>

<script>
    // @ is an alias to /src
    import Footer from '@/components/Footer.vue'

    export default {
        name: 'home',
        components: {
            Footer
        },
        data: function () {
            return {
                img: new Image(),
                mask: new Image(),
                expand: false,
                wifiAnim: false,
                showHead: false,
                timeout: '',
                clImg: [
                    {
                        src: ['client1.svg'],
                        show: false
                    },
                    {
                        src: ['client2.svg'],
                        show: false
                    },
                    {
                        src: ['client3.svg'],
                        show: false
                    },
                    {
                        src: ['client4.svg'],
                        show: false
                    },
                    {
                        src: ['client5.svg'],
                        show: false
                    },
                    {
                        src: ['client6.svg', 'client6_sub.png'],
                        show: false
                    },
                    {
                        src: ['client7.svg'],
                        show: false
                    },
                    {
                        src: ['client8.png'],
                        show: false
                    },
                ],
                casesBlocks: [
                    {
                        head: 'For Business',
                        link: 'forbiz',
                        labelShow: false,
                        blurShow: false,
                        headShow: false
                    },
                    {
                        head: 'For Partners',
                        link: 'forpartners',
                        labelShow: false,
                        blurShow: false,
                        headShow: false
                    },
                    {
                        head: 'For Advertisement',
                        link: 'foradv',
                        labelShow: false,
                        blurShow: false,
                        headShow: false
                    },
                    {
                        head: 'Design',
                        link: 'design',
                        labelShow: false,
                        blurShow: false,
                        headShow: false
                    }
                ]
            }
        },
        methods: {
            drawClip: function (x, y) {
                let canvas = document.querySelector('.canv-mask');
                const ctx = canvas.getContext('2d');
                let wid = document.querySelector('.mask-wrap').offsetWidth;
                let hgh = document.querySelector('.mask-wrap').offsetHeight;
                canvas.width = wid;
                canvas.height = hgh;
                let img = this.img;
                let mask = this.mask;
                let imgW = 1293,
                    imgH = 532,
                    maskW,    // 1198
                    maskH,    // 455
                    initialX = 30,
                    initialY = 50,
                    prevX,
                    prevY;


                function drawFrame(inX, inY) {
                    ctx.clearRect(0, 0, wid, hgh);
                    ctx.drawImage(mask, 0, 0);
                    ctx.globalCompositeOperation = 'source-in';
                    ctx.drawImage(img, -inX, -inY);
                }

                function checkPosX() {
                    let shiftX = imgW - maskW,
                        currentShiftX = shiftX / maskW;
                    initialX = Math.floor(x * currentShiftX);
                    return initialX;
                }

                function checkPosY() {
                    let movableHeight = imgH - maskH,
                        currentShiftY = movableHeight / maskH;
                    initialY = Math.floor(y * currentShiftY);
                    return initialY;
                }

                function draw() {
                    maskW = mask.naturalWidth;    // 1198
                    maskH = mask.naturalHeight;    // 455
                    if (x && y) {
                        if (x !== prevX || y !== prevY) {
                            initialX = checkPosX();
                            initialY = checkPosY();
                        } else {
                            initialX = checkPosX();
                            initialY = checkPosY();
                        }
                        drawFrame(initialX, initialY)
                    } else {
                        drawFrame(initialX, initialY)
                    }
                }
                draw();
            },
            canvHover: function (e) {
                let x = e.offsetX,
                    y = e.offsetY;
                this.drawClip(x, y);
            },
            canvLoad: function () {
                this.expand = true;
            },
            h1Anim: function () {
                this.showHead = true;
            },
            posCheck: function (elem) {
                let elemCoords = elem.getBoundingClientRect(),
                    caseTop = window.innerHeight - elemCoords.top,
                    caseBottom = elemCoords.bottom,
                    params = {
                        top: caseTop,
                        bottom: caseBottom
                    };
                return params;
            },
            showCases: function () {
                let context = this;
                let cases = document.querySelectorAll('.cases-item');
                for (let i = 0; i < cases.length; i++) {
                    let position = context.$options.methods.posCheck(cases[i]),
                        topPosition = position.top,
                        bottomPosition = position.bottom,
                        showed = context.casesBlocks[i].labelShow && context.casesBlocks[i].blurShow,
                        controlPoint = 250;
                    if (topPosition >= controlPoint && bottomPosition >= controlPoint && !showed) {
                        context.casesBlocks[i].labelShow = true;
                        setTimeout(function () {
                            context.casesBlocks[i].blurShow = true;
                            context.casesBlocks[i].headShow = true;
                        }, 1000)

                    }
                }
            },
            scrollPage: function () {
                let context = this;
                window.addEventListener('scroll', function () {
                    context.showCases();
                })
            },
            // LoadImage: function (filename) {
            //     const image = require('@/assets/img/' + filename)
            //     return image
            // }
        },
        mounted: function () {
            this.$nextTick(function () {
                this.img = new Image();
                this.mask = new Image();
                this.img.src = '/img/mask-bg.jpg';
                this.mask.src = '/img/mask.png';
                let context = this;

                this.img.onload = function () {
                    context.drawClip();
                };
                this.canvLoad();
                var func = this.h1Anim;
                this.timeout = setTimeout(function () {
                    func();
                    clearTimeout(this.timeout);
                }, 1000);
                this.showCases();
                this.scrollPage();

            })
        }

    }
</script>

<style lang="scss" scoped>
    .section1 {
        background-color: #ebeefa;
        padding-bottom: 55px;
    }

    h1 {
        text-align: center;
        font-size: 36px;
        color: #8492ae;
        font-weight: 900;
        span {
            display: inline-block;
            position: relative;
            &:before {
                content: '';
                display: block;
                position: absolute;
                top: -4px;
                bottom: 0;
                left: 0;
                width: 102%;
                transform: translateX(0);
                height: 100%;
                background-color: #ebeefa;
                transition: 1s ease-in;
            }
        }
    }

    .show-h1:before {
        transform: translateX(100%);
    }

    .mask-wrap {
        margin-top: 40px;
        width: 100%;
        height: 455px;
        position: relative;
    }

    .canv-mask__overlay {
        position: absolute;
        overflow: hidden;
        background: #ebeefa;
        width: 100%;
        height: 100%;
        top: 0;
    }

    .canv-mask__container {
        height: 455px;
        width: 100%;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 1;
    }

    .canv-mask {
        height: 455px;
        width: 100%;
    }

    .mask-bg__img,
    .mask-img {
        display: none;
    }

    .roll-enter {
        top: auto;
        bottom: 0;
        height: 0;
    }

    .roll-enter-active {
        transition: all 1s ease-out;
    }

    .roll-enter-to {
        bottom: 0;
        top: auto;
        height: 100%;
    }

    .roll-leave {
        top: 0;
        bottom: auto;
        height: 100%;
    }

    .roll-leave-active {
        transition: all 1s ease-in-out;
    }

    .roll-leave-to {
        height: 0;
    }

    .wifi-sign__item {
        position: absolute;
        &:nth-last-child(1) {
            bottom: 0;
            right: 195px;
        }
        &:nth-last-child(2) {
            bottom: 124px;
            right: 163px;
        }
        &:nth-last-child(3) {
            bottom: 195px;
            right: 87px;
        }
        &:nth-last-child(4) {
            bottom: 270px;
            right: 0;
        }
    }

    .wifi-sign__wrap {
        position: absolute;
        width: 482px;
        height: 444px;
        right: -52px;
        bottom: -147px;
    }

    .section2 {
        h3 {
            font-size: 48px;
            color: #ebeefa;
            text-transform: uppercase;
            font-weight: 700;
            line-height: 0.8;
            margin-bottom: 75px;
            text-align: left;
        }
    }

    .cases-wrap {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }

    .cases-item {
        width: 574px;
        height: 330px;
        margin-bottom: 45px;
        cursor: pointer;
        position: relative;
        &:last-child {
            margin-bottom: 80px;
        }

        .cases-overlay {
            display: flex;
        }
        &:first-child {
            .case-img {
                &:before {
                    background: url("/img/case_1_blur.png");
                }
            }
            .cases-label {
                background-color: rgba(112, 142, 255, .9);
                color: #556fcc;
            }
            &:hover {
                .case-img:before {
                    opacity: 1;
                }
                .cases-blur {
                    background-color: rgba(85, 111, 204, .6);
                    opacity: 1;
                    img, a {
                        transform: translateY(0) scale(1);
                        opacity: 1;
                    }
                }
            }

        }
        &:nth-child(2) {
            .case-img {
                &:before {
                    background: url("/img/case_2_blur.png");
                }
            }
            .cases-label {
                background-color: rgba(255, 210, 29, .9);
                color: #d6a308;
            }
            &:hover {
                .case-img:before {
                    opacity: 1;
                }
                .cases-blur {
                    background-color: rgba(255, 210, 29, .6);
                    opacity: 1;
                    img, a {
                        transform: translateY(0) scale(1);
                        opacity: 1;
                    }
                }
            }

        }
        &:nth-child(3) {
            .case-img {
                &:before {
                    background: url("/img/case_3_blur.png");
                }
            }
            .cases-label {
                background-color: rgba(161, 219, 36, .9);
                color: #7caf15;
            }
            &:hover {
                .case-img:before {
                    opacity: 1;
                }
                .cases-blur {
                    background-color: rgba(161, 219, 36, .6);
                    opacity: 1;
                    img, a {
                        transform: translateY(0) scale(1);
                        opacity: 1;
                    }
                }
            }

        }
        &:nth-child(4) {
            .case-img {
                &:before {
                    background: url("/img/case_4_blur.png");
                }
            }
            .cases-label {
                background-color: rgba(244, 37, 188, .9);
                color: #bf1795;
            }
            &:hover {
                .case-img:before {
                    opacity: 1;
                }
                .cases-blur {
                    background-color: rgba(244, 37, 188, .6);
                    opacity: 1;
                    img, a {
                        transform: translateY(0) scale(1);
                        opacity: 1;
                    }
                }
            }

        }
    }

    .case-img {
        display: block;
        width: 100%;
        height: 100%;
        img {
            width: 100%;
            height: 100%;
            display: block;
        }
        &:before {
            content: '';
            display: block;
            width: 100%;
            height: 100%;
            opacity: 0;
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            transition: all .3s;
        }
        &:after {
            content: '';
            display: block;
            position: absolute;
            top: 0;
            bottom: 0;
            right: 0;
            width: calc(100% - 63px);
            transform: translateX(0) scaleX(1);
            height: 100%;
            background-color: #fff;
            transition: 1s ease-in;
            z-index: 5;
        }
    }

    .case-img-show {
        &:after {
            transform: translateX(50%) scaleX(0);
        }
    }

    .cases-overlay {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
    }

    .cases-label {
        font-size: 26px;
        text-transform: uppercase;
        font-weight: 700;
        transform: rotate(180deg);
        width: 63px;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        writing-mode: vertical-lr;
        padding: 0 4px 30px 0;
        z-index: 6;
        &:before {
            content: '';
            display: block;
            position: absolute;
            top: 0;
            bottom: 0;
            right: 0;
            width: 100%;
            transform: translateY(0) scaleY(1);
            height: 100%;
            background-color: #fff;
            transition: 1s ease-in;
        }
        span {
            transition: 1s ease-in-out;
            transform: translateX(10px);
            opacity: 0;
        }
        .headShow {
            transform: translateX(0);
            opacity: 1;
        }
    }

    .cases-label-show {
        &:before {
            transform: translateY(-50%) scaleY(0);
        }
    }

    .cases-blur {
        width: calc(100% - 63px);
        opacity: 0;
        transition: all .5s;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        img {
            width: 310px;
            height: 65px;
            display: block;
            transform: translateY(100%) scale(.7);
            opacity: 0;
            transition: all .5s;
        }
        a {
            text-decoration: none;
            font-size: 18px;
            color: #fff;
            text-transform: lowercase;
            margin-top: 20px;
            transform: translateY(100%) scale(.7);
            opacity: 0;
            transition: all .5s;
        }
    }

    .popover {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: rgba(0, 0, 0, .8);
        z-index: 10;
    }

    /* Clients 3 */

    .section3 {
        background-color: #ebeefa;
        padding-bottom: 55px;
        h3 {
            position: relative;
            bottom: 35px;
            img {
                display: block;
            }
        }
    }

    .clients-wrap {
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        width: calc(100% + 36px);
        margin-left: -18px;
    }

    .client-item {
        width: 375px;
        height: 116px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 18px 30px;
        position: relative;

        &:first-child {
            .client-img__wrap {
                width: 293px;
                height: 36px;
            }
        }
        &:nth-child(2) {
            .client-img__wrap {
                width: 95px;
                height: 73px;
            }
        }
        &:nth-child(3) {
            .client-img__wrap {
                width: 159px;
                height: 52px;
            }
        }
        &:nth-child(4) {
            .client-img__wrap {
                width: 258px;
                height: 78px;
            }
        }
        &:nth-child(5) {
            .client-img__wrap {
                width: 100px;
                height: 100px;
            }
        }
        &:nth-child(6) {
            .client-img__wrap {
                width: 199px;
                height: 60px;
                img {
                    &:first-child {
                        height: 50px;
                    }
                    &:nth-child(2) {
                        width: 115px;
                        height: 12px;
                        float: right;
                        margin: -5px 22px 0 0;
                    }
                }
            }
        }
        &:nth-child(7) {
            .client-img__wrap {
                width: 193px;
                height: 52px;
            }
        }
        &:nth-child(8) {
            .client-img__wrap {
                width: 187px;
                height: 67px;
            }
        }
        .client-img__wrap {
            cursor: pointer;
            position: relative;
            transition: 1s ease-in;
            &.highlight {
                z-index: 15 !important;
            }
            img {
                width: 100%;
                height: 100%;
            }
        }
    }

    .phone-popup {
        z-index: 10;
    }

    .phone-popup__wrap {
        position: absolute;
        bottom: 100%;
        left: 50%;
        transform: translateX(-50%);
        width: 229px;
        height: 472px;
        background: url("/img/phone.png") no-repeat center top;
        z-index: 11;
        img {
            width: 199px !important;
            height: auto !important;
            display: block;
            position: absolute;
            top: 58px;
            left: 50%;
            transform: translateX(-50%);
            cursor: pointer;
        }
    }

    .phone-btn {
        width: 177px;
        height: 40px;
        background-color: #708fff;
        position: absolute;
        top: 100%;
        left: 50%;
        transform: translateX(-50%);
        z-index: 5;
        a {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            text-align: center;
            color: #fff;
            text-decoration: none;
            justify-content: center;
        }
    }

    .phone-popup-enter-active, .phone-popup-leave-active {
        transition: opacity .7s;
    }

    .phone-popup-enter, .phone-popup-leave-to {
        opacity: 0;
        z-index: 1;
    }
</style>