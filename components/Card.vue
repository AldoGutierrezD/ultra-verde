<template>
    <article class="w-full xl:w-[32%] h-[460px] border-black border-[1px] p-4 rounded-xl dark:text-accent dark:border-accent">

        <img :src="`/images/${image}`"
            alt=""
            class="w-full h-1/2 object-cover">

        <div class="w-full h-1/2 relative pt-5">

            <header>

                <h4 class="font-montserrat font-bold text-lg">{{ title }}</h4>

                <p class="font-montserrat text-sm line-clamp-5">
                    {{ description }}
                </p>

            </header>

            <footer class="w-full flex justify-between absolute bottom-0">
                <time datetime="2024-09-11" class="font-montserrat font-light text-sm">{{ date }}</time>
                <a :href="`${path}`">
                    <i class='bx bx-right-arrow-alt text-2xl' ></i>
                </a>
            </footer>

        </div>

    </article>
</template>


<script setup>

const props = defineProps({
    path: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    }
});

const { path, image, title, description, date } = props;

</script>
