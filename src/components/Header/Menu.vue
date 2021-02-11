<template>
    <div>
        <div class="menu">
            <div>
                <img alt="logo" src="@/assets/logo-museum-2.png" />
            </div>
            <div>
                <router-link to="/catalog"><a>Каталог</a></router-link>
            </div>
            <div>
                <router-link to="/shipping"><a>Доставка</a></router-link>
            </div>
            <div>
                <router-link to="/payment"><a>Оплата</a></router-link>
            </div>
            <div>
                <router-link to="/contacts"><a>Контакты</a></router-link>
            </div>
            <div>
                <router-link to="/about-the-gallery"><a>О галерее</a></router-link>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "Menu",
}
</script>

<style lang="scss">
.menu {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 620px;

    div {
        font-family: Merriweather;
        padding: 25px 0px 7px 0px;
        font-size: 14px;
        color: #343030;
        line-height: 150%;

    }

    a {
        text-decoration: none;
        color: #343030;
    }

    a:hover {
        border-bottom: 1px solid;
    }
}
</style>
