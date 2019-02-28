<template>
    <button class="btn">{{name}}</button>
</template>

<script>
export default {
    name: 'TestButton',

    data() {
        return {
            name: 'Кнопка'
        }
    }
}
</script>

<style lang="scss" scoped>
.btn {
    display: flex;
    background-color: green;
    transform: translateY(-4px);
    transition: transform .4s ease;
}
</style>
