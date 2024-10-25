<template>
  <Navbar />

  <main class="px-10 md:px-32 xl:px-60 mt-10 mb-32 dark:text-accent">

    <img
      :src="`/images/${column.picture}`"
      :alt="`${column.title}`"
      class="w-full h-auto rounded-xl mb-10">

    <h1 class="font-bebas text-5xl text-center mb-5">{{ column.title }}</h1>

    <hr class="border-black border-1 mb-5 dark:border-accent">

    <div class="flex justify-center items-center gap-5 md:gap-10 mb-10">

      <div class="w-auto border-black border-[1px] flex justify-center items-center px-4 md:px-8 py-2 dark:border-accent">
        <time
          :datetime="`${column.published}`"
          class="font-montserrat text-xs md:text-base">{{ column.published }}
        </time>
      </div>

      <div class="w-auto border-black border-[1px] flex justify-center items-center px-4 md:px-8 py-2 dark:border-accent">
        <span class="font-montserrat text-xs md:text-base">{{ column.category }}</span>
      </div>

      <SocialShare
        network="facebook"
        :url="`https://ultraverde.netlify.app${path}`"
        :title="column.title"
        :label="false"
      >
        <i class="bx bxl-facebook text-2xl" />
      </SocialShare>

    </div>

    <ContentRenderer
      :value="column"
      class="font-montserrat text-justify leading-8" />

  </main>

  <section class="px-10 md:px-32 xl:px-60 w-full mb-32 dark:text-accent">

    <span class="font-bebas font-bold text-3xl">TAMBIEN PUEDES LEER</span>

    <div class="w-full flex mt-4 flex-wrap gap-4">
      <Card v-for="column in randomColumns" :path="column._path" :image="column.picture" :title="column.title" :description="column.description" :date="column.date" />
    </div>

  </section>

  <Footer />
</template>

<script setup lang="ts">

//RECENT COLUMN
const route = useRoute();
const path = route.path;

const column = await queryContent(path).findOne();

//3 RANDOM COLUMNS
const randomColumns = await queryContent('/')
  .without('body')
  .where({ active: true })
  .limit(3)
  .find()

useHead({
  title: column.title,
  meta: [
    { hid: 'description', name: 'description', content: column.description },
    { hid: 'keywords', name: 'keywords', content: 'Club León, fútbol mexicano, anécdotas del Club León, historias del León, Baltazar Gutiérrez, Ultra Verde, porras, barras mexicanas, remembranzas, blog del León, equipo esmeralda, 1998' },
    { hid: 'author', name: 'author', content: 'Baltazar Gutiérrez' },
    { hid: 'og:title', property: 'og:title', content: column.title },
    { hid: 'og:description', property: 'og:description', content: column.decription },
    { hid: 'og:image', property: 'og:image', content: `https://ultraverde.netlify.app/images/${column.picture}` }, // Cambia por la ruta a una imagen destacada
    { hid: 'og:type', property: 'og:type', content: 'website' },
    { hid: 'og:url', property: 'og:url', content: 'https://ultraverde.netlify.app' },
    { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
    { hid: 'twitter:title', name: 'twitter:title', content: column.title },
    { hid: 'twitter:description', name: 'twitter:description', content: column.description },
    { hid: 'twitter:image', name: 'twitter:image', content: `https://ultraverde.netlify.app/images/${column.picture}` } // Cambia por la ruta a una imagen destacada
  ]
})

</script>
