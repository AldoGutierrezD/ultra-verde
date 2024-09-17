<template>
    <section id="ultima-columna" class="w-full px-10 md:px-32 xl:px-60 mb-32 text-center flex flex-col justify-center items-center dark:text-accent">

        <h3 class="font-bebas font-bold text-6xl mb-3">{{ column.title }}</h3>

        <time
          :datetime="`${column.date}`"
          class="font-montserrat text-xs md:text-sm mb-10">{{ column.date }}
        </time>

        <p class="font-montserrat mb-10 max-w-4xl text-justify line-clamp-[10]">
            {{ column.description }}
        </p>

        <a :href="`${column.slug}`" class="font-montserrat underline underline-offset-4">CONTINUAR LEYENDO</a>
    </section>
</template>


<script setup lang="ts">

const column = await queryContent('/')
    .without('body')
    .where({ active: true })
    .sort({ published: -1 })
    .limit(1)
    .findOne()

</script>
