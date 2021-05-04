<template>
  <Layout>
    <section class="resume-section" id="posts">
    <div class="post-title" style="padding-top:15px" >
      <h2 class="post-title__text">
        {{ $page.post.title }}
      </h2>

      <PostMeta :post="$page.post" class="mb-2"/>
       <!-- <div class="subheading">
       <g-link exact to="/">Back Home</g-link>
       </div> -->

    </div>

    <div class="post content-box" style="margin-left:25px; margin-right:25px">
      <div class="post__header" style="border-radius:10px">
        <g-image alt="Cover image" v-if="$page.post.cover_image" :src="$page.post.cover_image" />
      </div>

      <div class="post__content" v-html="$page.post.content" />

      <div class="post__footer">
        <PostTags :post="$page.post" />
      </div>
    </div>

    <div class="post-comments">
      <!-- Add comment widgets here -->
    </div>

    <!-- <Author class="post-author" /> -->
     
    <div  style="float:left; margin-left:30px;">
      <button onclick="history.back(-1)"><div class="subheading  mb-4">Back</div></button></div>
    <div style="text-align:center;margin-bottom:25px;cursor:pointer; margin-right:70px;" class="subheading  mb-4" >
      <g-link exact to="/">Home</g-link> </div>
      
      </section>
  </Layout>
</template>

<script>
import PostMeta from '~/components/PostMeta'
import PostTags from '~/components/PostTags'
import Author from '~/components/Author.vue'

export default {
  components: {
    Author,
    PostMeta,
    PostTags
  },
  metaInfo () {
    return {
      title: this.$page.post.title,
      meta: [
        {
          name: 'description',
          content: this.$page.post.description
        }
      ]
    }
  }
}
</script>

<page-query>
query Post ($id: ID!) {
  post: post (id: $id) {
    title
    path
    date (format: "D. MMMM YYYY")
    timeToRead
    tags {
      id
      path
    }
    description
    content
    cover_image (width: 860, blur: 10)
  }
}
</page-query>

<style lang="scss">
.post-title {
  padding: calc(var(--space) / 2) 0 calc(var(--space) / 2);
  text-align: center;
}

.post {

  &__header {
    width: calc(100% + var(--space) * 2);
    margin-left: calc(var(--space) * -1);
    margin-top: calc(var(--space) * -1);
    margin-bottom: calc(var(--space) / 2);
    overflow: hidden;
    border-radius: var(--radius) var(--radius) 0 0;

    img {
      width: 100%;
    }

    &:empty {
      display: none;
    }
  }

  &__content {
    h3:first-child {
      margin-top: 0;
    }

    p:first-of-type {
      font-size: 1.2em;
      color: var(--title-color);
    }

    img {
      width: calc(100% + var(--space) * 2);
      margin-left: calc(var(--space) * -1);
      display: block;
      max-width: 100%;
      border-radius: 10px;
    }
  }
}

.post-comments {
  padding: calc(var(--space) / 2);

  &:empty {
    display: none;
  }
}

.post-author {
  margin-top: calc(var(--space) / 2);
}

button{
  padding: 0;
border: none;
background: none;
color: #BD5D38;
}

@media (min-width: 100px) and (max-width: 991px){
    section.resume-section {
    padding-top: 2rem !important;
    padding-bottom: 5rem !important;
  }

  }
</style>
