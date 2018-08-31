<template>
    <footer>
        <div class="wrapper">
            <div class="footer-wrap">
                <div class="footer-item">
                    <a href="mailto:info@tbgwifi.com">info@tbgwifi.com</a>
                </div>
                <div class="footer-item">
                    <img src="img/logo.svg" alt="" class="wow fadeInUp">
                    <img src="img/tbg-logo.svg" alt="" class="wow fadeInUp">
                </div>
                <div class="footer-item">&#169; 2018 TBG Wi-Fi. All Rights reserved</div>
            </div>
        </div>
    </footer>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style lang="scss" scoped>
    footer {
        background-color: #d9dcec;
    }

    .footer-wrap {
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #8b93b0;
        font-size: 12px;
    }

    .footer-item {
        display: flex;
        align-items: center;
        width: 310px;
        &:nth-child(2) {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-top: -15px;
            padding-bottom: 31px;
            img {
                display: block;
                cursor: pointer;
                &:first-child {
                    width: 108px;
                    height: 65px;
                }
                &:last-child {
                    width: 233px;
                    height: 36px;
                    margin-top: 35px;
                }
            }
        }
        a {
            text-decoration: none;
            color: inherit;
            font-size: inherit;
            &:hover {
                text-decoration: underline;
            }
        }
        &:nth-child(3) {
            text-align: right;
            display: block;
        }
    }
</style>