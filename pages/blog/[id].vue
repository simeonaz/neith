<template>
  <div class="container mx-auto p-4">
    <h1>Blog {{ route.params.id }}</h1>
    <article class="mt-4 p-4 border rounded">
      <h2 class="text-[14px] font-medium first-letter:uppercase">
        {{ post?.title }}
      </h2>
      <p>{{ post?.body }}</p>
    </article>
  </div>
</template>

<script setup lang="ts">
interface Post {
  id: number;
  title: string;
  body: string;
}

const route = useRoute();
const { data: post } = await useFetch<Post>(
  `https://jsonplaceholder.typicode.com/posts/${route.params.id}`,
  {
    key: "blog-post-data",
  }
);

useSeoMeta({
  title: post?.value?.title || "Blog Post",
  description: post?.value?.body || "This is a blog post.",
  ogTitle: post?.value?.title || "Blog Post",
  ogDescription: post?.value?.body || "This is a blog post.",
});
</script>
