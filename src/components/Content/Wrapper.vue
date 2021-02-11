<template>
    <div class="wrapper">
        <h2 class="wrapper-title">Картины эпохи Возрождения</h2>
        <Catalog />
    </div>
</template>

<script>
import Catalog from "./Catalog.vue";
import { mapGetters } from "vuex";

export default {
    name: "Wrapper",
    components: {
        Catalog,
    },
    props: {},
    data() {
        return {};
    },
    computed: {
        ...mapGetters(["CART"]),
    },
};
</script>

<style lang="scss">
.wrapper {

    &-title {
        font-family: Merriweather;
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        line-height: 150%;
        color: #343030;
        padding: 23px 0;
    }
}
</style>
