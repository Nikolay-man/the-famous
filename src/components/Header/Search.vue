<template>
    <div class="search">
        <input type="search" placeholder="Поиск по названию картины" />
        <button>
            Найти
        </button>
    </div>
</template>

<script>
export default {
    name: "search",
};
</script>

<style lang="scss">
.search {
    display: flex;
    margin-left: 120px;

    input {
        border: 1px solid #e1e1e1;
        box-sizing: border-box;
        height: 48px;
        width: 300px;
        font-family: Merriweather;
        font-size: 14px;
        line-height: 21px;
        display: flex;
        align-items: center;
        padding-left: 10px;
        outline: 0 !important;
        background-color: #f6f3f3;

        &:focus {
            &::-webkit-input-placeholder {
                color: transparent;
            }
        }
    }

    button {
        background: #403432;
        border-radius: 0px;
        height: 48px;
        color: white;
        font-family: Merriweather;
        width: 122px;
        border: none;
    }
    button:active,
    button:focus {
        outline: none;
    }
    button:hover {
        background-color: #776763;
    }
}
</style>
