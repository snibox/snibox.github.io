<template>

  <div class="home-container" v-show="animation.ready">
    <div class="home">
      <div class="hero">
        <h1 class="animated fadeInLeft">Snibox</h1>
        <p class="description animated fadeInRight">
          Self-hosted code snippets manager
        </p>
        <p class="action animated fadeInLeft">
          <a class="action-button demo" href="https://snibox-demo.herokuapp.com/" target="_blank">
            <span v-html="logos.demo"></span>Demo
          </a>
          <a class="action-button github" href="https://github.com/snibox/snibox" target="_blank">
            <span v-html="logos.github"></span>Github
          </a>
          <router-link class="action-button docs" to="/docs/"><span v-html="logos.docs"></span>Docs</router-link>
        </p>
        <img class="animated fadeInUp"
             src="https://user-images.githubusercontent.com/312873/41824011-dc6d33a0-7811-11e8-94bd-1cf2ede595b5.png"
             alt="Image">
      </div>

      <div class="features animated fadeIn">
        <div class="feature">
          <h2>Open source</h2>
          <p>Released under the <a href="https://opensource.org/licenses/MIT" target="_blank">MIT License.</a></p>
        </div>
        <div class="feature">
          <h2>Self-hosted</h2>
          <p>Many ways to deploy including <a href="https://github.com/snibox/snibox-docker" target="_blank">Docker.</a>
          </p>
        </div>
        <div class="feature">
          <h2>Simple attractive UI</h2>
          <p>Label-oriented interface.</p>
        </div>
      </div>

      <div class="built-with animated fadeIn">
        <h1>Built with</h1>
        <div class="features">
          <div class="feature">
            <a href="https://vuejs.org" target="_blank">
              <img src="../assets/vue.svg" alt="Vue.js">
            </a>
          </div>
          <div class="feature">
            <a href="https://rubyonrails.org/" target="_blank">
              <img src="../assets/rails.svg" alt="Ruby on Rails">
            </a>
          </div>
          <div class="feature">
            <a href="https://www.postgresql.org/" target="_blank">
              <img src="../assets/postgresql.svg" alt="PostgreSQL">
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="footer animated fadeIn">
      <a href="https://opensource.org/licenses/MIT">MIT Licensed</a> | Copyright © 2018-present, Snibox
    </div>
  </div>
</template>

<script>
  import octicons from 'octicons'
  import imagesLoaded from 'imagesloaded'

  const processAnimation = (component) => {
    if (!component.animation.rendered) {
      let delay = -component.animation.delay
      component.animation.order.forEach(selectors => {
        delay = delay + component.animation.delay
        selectors.forEach(selector => {
          component.$el.querySelector(selector).style['animation-delay'] = delay / 1000 + 's'
        })
      })
    }
    component.animation.rendered = true
    component.animation.ready = true
  }

  export default {
    data() {
      return {
        logos: {
          demo: octicons['rocket'].toSVG(),
          github: octicons['mark-github'].toSVG(),
          docs: octicons['book'].toSVG(),
        },

        animation: {
          order: [
            ['.hero h1'],
            ['.hero .description'],
            ['.hero .action'],
            ['.hero img'],
            ['.features.animated', '.built-with.animated', '.footer.animated']
          ],
          delay: 300,
          ready: false,
          rendered: false
        }
      }
    },

    mounted() {
      imagesLoaded(document.querySelector('.hero'), () => {
        processAnimation(this)
      })

      // don't wait images more than 5 seconds
      setTimeout(() => {
        processAnimation(this)
      }, 5000)
    }
  }
</script>

<style lang="scss">
  @import "~animate.css";

  /* vuepress colors */
  $borderColor: #eaecef;
  $textColor: #2c3e50;

  /* custom colors */
  $blue: #337ab7;
  $gray: #fcfcfc;
  $green: #3eaf7c;
  $white: #ffffff;

  /* vuepress responsive breakpoints */
  $MQNarrow: 959px;
  $MQMobile: 719px;
  $MQMobileNarrow: 419px;

  /* custom breakpoints */
  $tablet: 769px;

  @mixin action-button($color) {
    background: $color;
    border: 1px solid darken($color, 10%);

    &:hover {
      background: darken($color, 10%);
    }
  }

  .animated {
    animation-duration: .4s;
  }

  .octicon {
    display: inline-block;
    vertical-align: text-top;
    fill: currentColor;
    height: 24px;
    width: 24px;
    margin-right: 5px;
  }

  .built-with {
    text-align: center;

    img {
      max-height: 60px;
    }
  }

  .home-container {
    .footer {
      background: $gray;
      border-top: 1px solid $borderColor;
      color: lighten($textColor, 25%);
      padding: 2.5rem;
      margin-top: 2.5rem;
      text-align: center;
    }
  }

  .home {
    .hero {
      .action-button {
        margin: 0 1rem;
        padding: 0.6rem 1.2rem;

        &.github {
          @include action-button($blue);
        }

        &.demo {
          @include action-button($blue);
          background: none;
          color: $blue;

          &:hover {
            color: $white;
          }
        }

        &.docs {
          @include action-button($green);
        }
      }

      img {
        max-height: 600px;
      }
    }

    .features {
      border-top: none
    }
  }

  @media screen and (max-width: $tablet) {
    .home {
      .hero {
        img {
          max-height: 100%;
          max-width: 100%;
        }
      }
    }
  }

  @media screen and (max-width: $MQMobile) {
    .home {
      .hero {
        img {
          max-height: 100%;
          max-width: 100%;
        }

        .action-button {
          display: block;
          margin: 0 2.5rem 1.5rem;
        }
      }

      .built-with {
        .features {
          align-items: center;
          margin-top: 0;

          .feature {
            margin: 1.25rem;
          }
        }
      }
    }

    .home-container {
      .footer {
        margin-top: 1.5rem;
      }
    }
  }

  @media screen and (max-width: $MQMobileNarrow) {
    .octicon {
      height: 20px;
      width: 20px;
    }
  }
</style>
