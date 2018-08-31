<template>
    <div class="forbiz">
        <Forbiz1/>
        <Footer/>
    </div>
</template>

<script>
    import Forbiz1 from '@/views/Forbiz/Forbiz1.vue'
    import Footer from '@/components/Footer.vue'

    export default {
        name: 'Forbiz',
        components: {
            Footer,
            Forbiz1
        }
    }

</script>