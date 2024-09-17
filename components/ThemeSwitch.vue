<template>
  <div>
    <i
      v-if="$colorMode.preference !== 'dark'"
      class="bx bx-moon text-2xl text-gray-md dark:text-light-md cursor-pointer"
      @click="changeTheme('dark')"
    ></i>
    <i
      v-else
      class="bx bx-sun text-2xl text-accent dark:text-light-md cursor-pointer"
      @click="changeTheme('light')"
    ></i>
  </div>
</template>
<script>
export default {
  name: "ThemeSwitch",
  methods: {
    changeTheme (theme) {
      this.$colorMode.preference = theme;
    }
  }
};
</script>
