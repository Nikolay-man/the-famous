<template>
    <div>
        <div class="contact">
            <div class="phone">
                <div>
                    <img alt="phone" src="@/assets/phone.png" />
                </div>
                <div>
                    +7 (495) 555-55-55
                </div>
            </div>
            <div class="phone">
                <div>
                    <img alt="adres" src="@/assets/adres.png" />
                </div>
                <div>
                    г. Москва, ул. Расплетина, 24
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "contact",
};
</script>

<style lang="scss">
.contact {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 450px;
}

.phone {
    display: flex;
    font-family: Merriweather;
    font-size: 14px;
    color: #343030;

    img {
        height: 14px;
        padding-right: 10px;
        padding-top: 2px;
    }
}
</style>
