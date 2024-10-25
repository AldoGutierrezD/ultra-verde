<template>
    <section id="columnas" class="w-full px-10 md:px-32 xl:px-60 mb-32">

        <span class="font-bebas font-bold text-3xl dark:text-accent">ULTIMOS PUBLICADOS</span>

        <div class="w-full flex justify-between mt-4 flex-wrap gap-4">
            <Card v-for="column in columns" :path="column._path" :image="column.picture" :title="column.title" :description="column.description" :date="column.date" />
        </div>

    </section>
</template>


<script setup lang="ts">

const columns = await queryContent('/')
    .without('body')
    .where({ active: true })
    .sort({ date: -1 })
    .find()

</script>
