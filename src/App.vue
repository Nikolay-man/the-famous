<template>
    <div id="app">
        <div class="app-content">
            <Header />
        </div>
        <hr />
        <div class="app-content">
            <Wrapper />
        </div>
        <div class="app-content-footer">
            <Footer />
        </div>
    </div>
</template>

<script>
import Header from "./components/Header/Header.vue";
import Wrapper from "./components/Content/Wrapper";
import Footer from "./components/Footer/Footer.vue";

export default {
    name: "App",
    components: {
        Header,
        Wrapper,
        Footer,
    },
};
</script>

<style lang="scss">
#app {
    margin: -8px -7px;
    background: #f6f3f3;
}

.app-content {
    margin: auto;
    width: 1215px;

    &-footer {
        margin-top: 300px;
        background: #eceaea;
    }
}

hr {
    border: 1px solid #e1e1e1;
}
</style>
