<template>
  <section class="resume-section p-3 p-lg-5 d-flex align-items-center" id="interests">
    <div class="w-100">
      <div class="mb-5"> <h2>Interests</h2></div>
      <p>Apart from being a fullstack developer, I enjoy watching movies, playing tennis and reading non-fiction books.
        I also have interests in Stoicism, Astronomy and Cricket.
      </p>
     <div class="mb-5"> <p>I like to create websites and software utilities for fun, trying out new technologies and tools to 
      improve myself as a developer and stay up to date with current trends in technology. 
      </p></div>
       <div v-on:click.prevent="$scrollTo('#about')" class="subheading" style="text-align:center;margin-bottom:25px;cursor:pointer;" >
     Back To Top</div>
    </div>
  </section>
</template>
