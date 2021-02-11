<template>
    <div>
        <div v-if="this.purchaseText">
            <button class="purchase-buttons purchase-button">
                <img :src="require('@/assets/Vector.png')" alt="img" />
                {{this.purchaseText}}
            </button>
        </div>
        <div v-if="!this.purchaseText">
            <button
                class="purchase-buttons purchase-button-default"
                @click="requestAPI"
            >
                Купить
            </button>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: "PurchaseButton",
    props: {},
    components: {},
    data() {
        return {
            pay: "",
            get purchaseText() {
                return localStorage.getItem("purchaseText");
            },
            set purchaseText(value) {
                localStorage.setItem("purchaseText", value);
            },
        };
    },
    computed: {},
    mounted() {
        // if (localStorage.purchaseText) {
        //     this.purchaseText = localStorage.getItem("purchaseText");
        // }
    },
    methods: {
        requestAPI() {
            const path = "https://jsonplaceholder.typicode.com/posts/1";
            axios
                .get(path)
                .then((res) => {
                    this.pay = res.data;
                })
                .catch((error) => {
                    console.error(error);
                });
            localStorage.setItem("purchaseText", "В корзине");
        },
    },
};
</script>

<style lang="scss">
.purchase-buttons {
    width: 112px;
    height: 48px;
    border: none;
    color: white;
    border-radius: 0px;
    font-family: Merriweather;

    img {
        width: 15px;
        margin-right: 2px;
    }
}
.purchase-button-default {
    background: #382e2b;
    img {
        width: 40px;
    }
}

.purchase-button-default:hover {
    background: #776763;
}

.purchase-button {
    background: #5b3a32;
}
</style>
