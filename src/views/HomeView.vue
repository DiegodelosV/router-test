<template>
  <div class="home">
    <img src="../assets/logo.png" alt="Vue logo" />
    <PostsView />
  </div>
</template>

<script>
import PostsView from "@/views/PostsView.vue";

export default {
  name: "HomeView",
  components: {
    PostsView,
  },
};
</script>
