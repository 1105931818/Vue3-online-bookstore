<template>
    <div class="home">
        <Navbar />
        <Search />
        <Recommend />
        <Version />
        <Brand />
        <Brand tag="完本精品" name="新书推荐" />
        <Sidebar />
        <Footer />
    </div>
</template>

<script setup lang="ts">
import Navbar from './Navbar/index.vue';
import Search from './Search/index.vue';
import Recommend from './Recommend/index.vue';
import Version from './Version/index.vue';
import Brand from './Brand/index.vue';
</script>

<style scoped lang="scss">
.home {
    width: 100%;
    background-color: white;
}
</style>
