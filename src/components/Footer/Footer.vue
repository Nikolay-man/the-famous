<template>
    <div>
        <div class="footer">
            <Menu />
            <Contact />
        </div>
    </div>
</template>

<script>
import Menu from '@/components/Header/Menu.vue';
import Contact from '@/components/Footer/Contact.vue';

export default {
    name: "Footer",
    components: {
        Menu,
        Contact,
    },
}
</script>

<style lang="scss">
.footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #ECEAEA;
    width: 1215px;
    margin: auto;
    opacity: 0.9;
}
</style>
