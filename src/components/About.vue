<template>
  <section class="resume-section p-3 p-lg-5 d-flex align-items-center" id="about">
    <div class="w-100">
      <h1>
        Stoic
        <span >Lord</span>
      </h1>
      <div class="subheading mb-3">
        Software Engineer  
      </div>
      <div class="lead mb-3 font-weight-bold">
      <p>
						<!-- <span>Software Engineer</span><span class="bar"> | </span> -->
            <span>Go</span><span class="bar"> | </span>
            <span>Java</span><span class="bar"> | </span>
            <span>Scala</span><span class="bar"> | </span>
            <span>TypeScript</span><span class="bar"> | </span>
						<span>Microservices</span><span class="bar"> | </span>
            <span>Angular</span><span class="bar"> | </span>
            <span>VueJS</span><span class="bar"> | </span>
            <span>MongoDB</span><span class="bar"> | </span>
            <span>NodeJS</span>
					</p>
          </div>
          <div class="lead mb-2">
      <p>
        A passionate, hands-on professional, I have around 8 years of experience in software development.
        I keep atop of new developments within the industry and can adapt quickly 
        to new coding conventions.</p>
      </div>
      <!-- <div class="lead mb-5">
      <p>
        I have an extensive software engineering experience in building products 
					and web applications in Payments, Retail and Manufacturing domains using 
					Java technologies i.e Spring Boot, Microservices, Spring MVC, Spring Security, 
					Hibernate, SQL and RESTful APIs.
					<br>I have a good understanding of DevOps concepts and I'm well-versed in implementing CI/CD pipelines and jobs using Jenkins.
					<br>Intermediate knowledge of Scala, TypeScript, Angular, MongoDB, ReactJS, ExpressJS and NodeJS.
      </p>
      </div> -->
      <!-- <p class="lead mb-5">
        Get your own resume started using this template with Gridsome here:
        <a
          href="https://github.com/LokeCarlsson/gridsome-starter-resume"
          target="_blank"
          rel="noopener noreferrer"
        >Github repo</a>.
      </p> -->
      <div class="lead mb-5"></div>
      <div class="social-icons">
        <!-- <a href="https://www.linkedin.com/in/thedavidjohn/" target="_blank" rel="noopener noreferrer">
          <font-awesome :icon="['fab', 'linkedin']"/>
        </a> -->
        <a href="https://github.com/stoiclord" target="_blank" rel="noopener noreferrer">
          <font-awesome :icon="['fab', 'github']"/>
        </a>
        <!-- <a href="https://twitter.com/thestoiclord" target="_blank" rel="noopener noreferrer">
          <font-awesome :icon="['fab', 'twitter']"/>
        </a> -->
        <a href="https://www.youtube.com/channel/UCgvrU7AniX46kypybSzRBBA" target="_blank" rel="noopener noreferrer">
          <font-awesome :icon="['fab', 'youtube']"/>
        </a>
        <!-- <a href="https://instagram.com/davidjohn.dev" target="_blank" rel="noopener noreferrer">
          <font-awesome :icon="['fab', 'instagram']"/>
        </a> -->
        <a href="mailto:stoiclord6@gmail.com" target="_blank" rel="noopener noreferrer">
          <font-awesome :icon="['fas', 'rss']"/>
        </a>
      </div>
      <div class="lead mb-5"></div>
      <div class="hrefblog lead mb-5" style="float:right;">
         <span >
        <button >
        <a  v-on:click.prevent="$scrollTo('#projects')">Featured Projects</a>
        </button></span>
        <span style="padding-left: 15px;" >
      <button style="margin-top:10px;">
        <a v-on:click.prevent="$scrollTo('#blog')">Read my blog</a>
        </button></span>
       </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.social-icons a {
  cursor: pointer;
  display: inline-block;
  height: 3.5rem;
  width: 3.5rem;
  background-color: var(--secondary);
  color: #fff !important;
  border-radius: 100%;
  text-align: center;
  font-size: 1.5rem;
  line-height: 3.5rem;
  margin-right: 1rem;

  @media (max-width: 380px) {
    margin-right: 0.5rem;
  }

  @media (max-width: 350px) {
    margin-right: 0.2rem;
  }
}

.social-icons a:last-child {
  margin-right: 0;
}

.social-icons a:hover {
  background-color: var(--primary);
}
.bar { font-size: 20px; }

.hrefblog button{
  padding: 7px 7px;
  border-radius: 5px;
  border-style: solid;
  text-align: center;
  background: rgba(255, 255, 255, 0.1);
  text-transform: uppercase;
  color: rgb(73, 80, 87);
  font-family: 'Montserrat', sans-serif;
  font-weight: 450;
  transition-duration: 0.3s;
}

.hrefblog button:hover{
  color: rgb(73, 80, 87);
  background: #ffffff;
}
</style>
