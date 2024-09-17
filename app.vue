<template>
  <div class="bg-accent min-h-screen dark:bg-slate-950">
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Ultra Verde | Blog del Club León por Baltazar Gutiérrez',
  meta: [
    { hid: 'description', name: 'description', content: 'Ultra Verde es un blog personal escrito por Baltazar Gutiérrez dedicado al Club León, donde encontrarás anécdotas, historias y remembranzas sobre el equipo.' },
    { hid: 'keywords', name: 'keywords', content: 'Club León, fútbol mexicano, anécdotas del Club León, historias del León, Baltazar Gutiérrez, Ultra Verde, porras, barras mexicanas, remembranzas, blog del León, equipo esmeralda, 1998' },
    { hid: 'author', name: 'author', content: 'Baltazar Gutiérrez' },
    { hid: 'og:title', property: 'og:title', content: 'Ultra Verde | Blog del Club León por Baltazar Gutiérrez' },
    { hid: 'og:description', property: 'og:description', content: 'Acompaña a Baltazar Gutiérrez en su viaje a través de anécdotas e historias del Club León, aficionados, jugadores, directivos y más.' },
    { hid: 'og:image', property: 'og:image', content: '/ruta-a-imagen-del-blog.jpg' }, // Cambia por la ruta a una imagen destacada
    { hid: 'og:type', property: 'og:type', content: 'website' },
    { hid: 'og:url', property: 'og:url', content: 'https://ultraverde.netlify.app' },
    { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
    { hid: 'twitter:title', name: 'twitter:title', content: 'Ultra Verde | Blog del Club León por Baltazar Gutiérrez' },
    { hid: 'twitter:description', name: 'twitter:description', content: 'Explora historias y anécdotas sobre el Club León, el equipo esmeralda, escritas por Baltazar Gutiérrez de la porra Ultra Verde.' },
    { hid: 'twitter:image', name: 'twitter:image', content: '/ruta-a-imagen-del-blog.jpg' } // Cambia por la ruta a una imagen destacada
  ]
})
</script>
