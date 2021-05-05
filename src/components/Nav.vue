<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="sideNav">
    <div style="float:left; padding-right:2px" v-on:click.prevent="$scrollTo('#about')" class="navbar-brand">
      <g-link exact to="/"><span class="d-none d-lg-none">Stoic Lord</span>
      <span class="d-lg-block" >
         <g-image
          alt="Image of Stoic Lord"
          src="../assets/images/profile.jpg"
          class="img-fluid img-profile rounded-circle mx-auto mb-2"
        />
      </span></g-link>
    </div>

    <div style="float:right; " class="navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav">
        <div id="aboutdiv">
        <li class="nav-item">
          <div class="nav-link" v-on:click.prevent="$scrollTo('#about')">
            <div><g-link exact to="/">About</g-link></div>
            </div>
        </li>
        </div>
         <li class="nav-item">
          <div class="nav-link" v-on:click.prevent="$scrollTo('#blog')">
            <div><g-link exact to="/">Blog</g-link></div>            
          </div>
        </li>
         <li class="nav-item">
          <div class="nav-link" v-on:click.prevent="$scrollTo('#projects')">
            <div><g-link exact to="/">Projects</g-link></div>
          </div>
        </li>
        <li class="nav-item">
          <div class="nav-link" v-on:click.prevent="$scrollTo('#skills')">
            <div><g-link exact to="/">Skills</g-link></div>
          </div>
        </li>
        <!-- <li class="nav-item">
          <div class="nav-link" v-on:click.prevent="$scrollTo('#experience')">
            <div><g-link exact to="/">Experience</g-link></div>
          </div>
        </li>
        <div id="educationdiv">
        <li class="nav-item">
          <div class="nav-link" v-on:click.prevent="$scrollTo('#education')">
            <div><g-link exact to="/">Education</g-link></div>
          </div>
        </li>
        </div> -->
        <div id="interestsdiv">
        <li class="nav-item">
          <div class="nav-link" v-on:click.prevent="$scrollTo('#interests')">
            <div><g-link exact to="/">Interests</g-link></div>
          </div>
        </li>
        </div>
      </ul>
    </div>
  </nav>
</template>

<style scoped lang="scss">
.navbar-brand,
.nav-item {
  cursor: pointer;
}

#sideNav .navbar-nav .nav-item .nav-link {
  font-weight: 800;
  letter-spacing: 0.05rem;
  text-transform: uppercase;
}

#sideNav .navbar-toggler:focus {
  outline-color: #080808;
}

@media (min-width: 992px) {
  #sideNav {
    text-align: center;
    position: fixed;
    top: 0;
    left: 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    width: 17rem;
    height: 100vh;
  }
  #sideNav .navbar-brand {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin: auto auto 0;
    padding: 0.5rem;
  }
  #sideNav .navbar-brand .img-profile {
    max-width: 10rem;
    max-height: 10rem;
    border: 0.5rem solid rgba(255, 255, 255, 0.2);
  }
  #sideNav .navbar-collapse {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
    -webkit-box-flex: 0;
    -ms-flex-positive: 0;
    flex-grow: 0;
    width: 100%;
    margin-bottom: auto;
  }
  #sideNav .navbar-collapse .navbar-nav {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    width: 100%;
  }
  #sideNav .navbar-collapse .navbar-nav .nav-item {
    display: block;
  }
  #sideNav .navbar-collapse .navbar-nav .nav-item .nav-link {
    display: block;
  }
}

@media screen and (max-width: 991px)  {

#sideNav {
    flex-direction: row;
    height: 7vh;
    display: inline-block;
}


  #sideNav .navbar-collapse .navbar-nav {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    width: 100%;
    float: right;
  // display: -ms-flexbox;
  
  }

  #sideNav .navbar-collapse .navbar-nav .nav-item {
    display: block;
    margin-right: 13px;
    width: 100%;
  }

  #sideNav .navbar-collapse .navbar-nav .nav-item .nav-link {
    width: 30%;
  }
  
  #sideNav .navbar-brand {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin: auto auto 0;
    padding: 0.1rem;
    float: left;
  }
  #sideNav .navbar-brand .img-profile {
    max-width: 2rem;
    max-height: 2rem;
    border: 0.1rem solid rgba(255, 255, 255, 0.2);
  }

  #educationdiv, #interestsdiv, #aboutdiv{
    display: none;
  }
}
</style>
