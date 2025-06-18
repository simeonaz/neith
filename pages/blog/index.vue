<template>
  <div class="container mx-auto p-4">
    <h1>Blog page</h1>
    <article
      v-for="post in posts"
      :key="post.id"
      class="mt-4 p-4 border rounded"
    >
      <h2 class="text-[14px] font-medium first-letter:uppercase">
        {{ post.title }}
      </h2>
      <p>{{ post.body.slice(0, 1000) }}</p>
      <div class="w-full flex items-center justify-end">
        <NuxtLink
          :to="`/blog/${post.id}`"
          class="text-blue-500 hover:underline"
        >
          Read more
        </NuxtLink>
      </div>
    </article>
  </div>
</template>

<script setup lang="ts">
interface Post {
  id: number;
  title: string;
  body: string;
}

const { data: posts } = await useFetch<Post[]>(
  "https://jsonplaceholder.typicode.com/posts?_limit=10",
  {
    key: "home-page-data",
  }
);
</script>
