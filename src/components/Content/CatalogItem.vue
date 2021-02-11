<template>
    <div>
        <div v-if="product_data.price" class="catalog-item">
                <img
                    :src="require('@/assets/' + product_data.image)"
                    alt="img"
                />
                <div class="catalog-item-info">
                    <div class="catalog-item-info-name">
                        <p>{{ product_data.name }}</p>
                        <p>{{ product_data.artist }}</p>
                    </div>
                    <div
                        v-if="!product_data.price"
                        class="catalog-item-info-price"
                    >
                        Продана на аукционе
                    </div>
                    <div
                        v-if="product_data.price"
                        class="catalog-item-info-price"
                    >
                        <div>
                            <p v-if="!product_data.discount"></p>
                            <p class="catalog-item-info-price-discount">
                                {{ product_data.discount }}
                            </p>
                            <p class="catalog-item-info-price-price">
                                {{ product_data.price }}
                            </p>
                        </div>
                        <PurchaseButton />
                    </div>
                </div>
            </div>
        <div v-if="!product_data.price" class="catalog-item disabled">
        <img :src="require('@/assets/' + product_data.image)" alt="img" />
        <div class="catalog-item-info">
            <div class="catalog-item-info-name">
                <p>{{ product_data.name }}</p>
                <p>{{ product_data.artist }}</p>
            </div>
            <div class="catalog-item-info-price">Продана на аукционе</div>
        </div>
    </div>
    </div>
</template>

<script>
import { mapActions } from "vuex";
import PurchaseButton from "@/components/Content/PurchaseButton.vue";
export default {
    name: "CatalogItem",
    props: {
        product_data: {
            type: Object,
            default() {
                return {};
            },
        },
    },
    components: {
        PurchaseButton,
    },
    data() {
        return {
            msg: "",
        };
    },
    computed: {
        btnText: function() {
            if (this.show) {
                return "В корзине";
            }
            return "Купить";
        },
    },
    methods: {
        ...mapActions(["GET_CLICK_FROM_API"]),
    },
};
</script>

<style lang="scss">
.disabled {
    pointer-events: none;
    opacity: 0.5;
}

.catalog-item {
    flex-basis: 20%;
    margin-bottom: 16px;
    border: #e1e1e1 1px solid;
    font-family: Merriweather;

    &-info {
        padding: 12px 20px;

        &-name {
            line-height: 50%;
            font-size: 18px;
        }

        &-price {
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 70px;
            line-height: 150%;
        }

        &-price-discount {
            color: #a0a0a0;
            font-weight: 300;
            text-decoration-line: line-through;
            font-size: 14px;
            line-height: 50%;
        }

        &-price-price {
            color: #343030;
            font-size: 16px;
            font-weight: bold;
            line-height: 80%;
        }
    }
}
</style>
