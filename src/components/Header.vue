<template>
    <header class="header">
        <div class="wrapper">
            <div class="header-wrap">
                <div class="logo-wrap">
                    <img src="img/logo.svg" alt="">
                </div>
                <div class="menu-wrap">
                    <div class="menu-btn"
                         @mouseenter="showMenu = true"
                         @mouseleave="showMenu = false"
                    >menu
                        <transition name="fade">
                            <ul class="menu-container" v-show="showMenu">
                                <li class="menu-item">
                                    <router-link to="/forbiz">для <span>бизнеса</span></router-link>
                                </li>
                                <li class="menu-item">
                                    <router-link to="/">для <span>клиентов</span></router-link>
                                </li>
                                <li class="menu-item">
                                    <router-link to="/">для <span>рекламы</span></router-link>
                                </li>
                                <li class="menu-item">
                                    <router-link to="/"><span>дизайн</span></router-link>
                                </li>
                            </ul>
                        </transition>
                    </div>

                </div>
                <div class="connection-wrap">
                    <a href="" class="connection-btn">оставайтесь на связи</a>
                    <a href="" class="connection-phone"><img src="img/icon-phone.svg" alt=""></a>
                    <a href="" class="connection-fb"><img src="img/icon-fb.svg" alt=""></a>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
    export default {
        name: "Header",
        data: function () {
            return {
                showMenu: false
            }
        }
    }
</script>

<style lang="scss" scoped>
    header {
        background-color: #ebeefa;
    }

    .header-wrap {
        display: flex;
        justify-content: space-between;
        padding-top: 25px;
        padding-bottom: 34px;
    }

    .logo-wrap {
        width: 310px;
        height: 65px;
        img {
            max-width: 108px;
            width: 100%;
            height: 100%;
            display: block;
        }
    }

    .menu-wrap {
        width: 540px;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: space-between;
    }

    .menu-btn {
        margin-top: 12px;
        cursor: pointer;
        font-weight: 900;
        font-size: 14px;
        color: #525252;
        text-transform: uppercase;
        display: flex;
        flex-direction: column;
        align-items: center;
        &:hover {
            color: #708fff;
        }
    }

    .menu-container {
        width: 100%;
        display: block;
        margin-top: 25px;
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }

    .fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */
    {
        opacity: 0;
    }

    .menu-item {
        white-space: nowrap;
        color: #8492ae;
        font-size: 13px;
        margin-right: 55px;
        display: inline-block;
        font-weight: 400;
        &:last-child {
            margin: 0;
        }
        a {
            text-decoration: none;
            color: inherit;
            text-transform: lowercase;
            &:hover {
                color: #708fff;
            }
        }
        span {
            text-transform: uppercase;
        }
    }

    .connection-wrap {

        width: 310px;
        display: flex;
        justify-content: flex-end;
        align-items: flex-start;
        .connection-btn {
            background: none;
            text-decoration: none;
            margin: 12px 30px 0 0;
            border: none;
            font-weight: 900;
            font-size: 14px;
            color: #525252;
            text-transform: uppercase;
            font-family: 'Lato', sans-serif;
            cursor: pointer;
            &:hover {
                color: #708fff;
            }
        }
    }

    .connection-phone {
        width: 26px;
        height: 26px;
        margin: 4px 21px 0 0;
        img {
            width: 100%;
            height: 100%;
        }
    }

    .connection-fb {
        width: 24px;
        height: 24px;
        margin-top: 5px;
        img {
            width: 100%;
            height: 100%;
        }
    }
</style>