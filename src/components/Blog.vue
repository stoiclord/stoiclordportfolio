<template>
<section class="resume-section p-3 p-lg-5 d-flex align-items-center" id="blog">
  <Layout :show-logo="false">
    <!-- Author intro -->
    <div class="mb-5">
    <h2>My latest blog posts </h2>
    </div>
     <h4 v-if="$static.posts.edges.length==0">No Posts So Far!</h4>
    <!-- List posts -->
    <div class="posts mb-4">
      <PostCard v-for="edge in $static.posts.edges" :key="edge.node.id" :post="edge.node"/>
    </div>
  </Layout>
  </section>
</template>

<static-query>
query {
  posts: allPost(filter: { published: { eq: true }}) {
    edges {
      node {
        id
        title
        date (format: "D. MMMM YYYY")
        timeToRead
        description
        cover_image (width: 770, height: 380, blur: 10)
        path
        tags {
          id
          path
        }
      }
    }
  }
}
</static-query>

<script>
import Author from '~/components/Author.vue'
import PostCard from '~/components/PostCard.vue'

export default {
  components: {
    Author,
    PostCard
  },
  metaInfo: {
    title: 'Stoic Lord'
  }
}
</script>
