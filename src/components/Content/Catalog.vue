<template>
    <div class="catalog">
        <CatalogItem
            v-for="product in PRODUCTS"
            :key="product.id"
            :product_data="product"
        />
    </div>
</template>

<script>
import CatalogItem from "./CatalogItem.vue";
import { mapActions, mapGetters } from "vuex";

export default {
    name: "Catalog",
    components: {
        CatalogItem,
    },
    props: {},
    data() {
        return {};
    },
    computed: {
        ...mapGetters(["PRODUCTS"]),
    },
    methods: {
        ...mapActions([
            "GET_PRODUCTS_FROM_API",
        ]),
    },
    mounted() {
        this.GET_PRODUCTS_FROM_API().then((response) => {
            if (response.data) {
                console.log("Data arrived!");
            }
        })
    },
};
</script>

<style lang="scss">
.catalog {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
}

</style> 