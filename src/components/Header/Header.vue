<template>
    <div>
        <div class="header">
            <Menu />
            <Search />
        </div>
    </div>
</template>

<script>
import Menu from "@/components/Header/Menu.vue";
import Search from "@/components/Header/Search.vue";

export default {
    name: "Hader",
    components: {
        Menu,
        Search,
    },
}
</script>

<style lang="scss">
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>
