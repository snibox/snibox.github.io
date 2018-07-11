<template>
  <div class="home">
    <div class="hero">
      <h1>Snibox</h1>
      <p class="description">
        Self-hosted code snippets manager
      </p>
      <p class="action">
        <a class="action-button demo" href="https://snibox-demo.herokuapp.com/" target="_blank">
          <span v-html="logos.demo"></span>Demo
        </a>
        <a class="action-button github" href="https://github.com/snibox/snibox" target="_blank">
          <span v-html="logos.github"></span>
          Source
        </a>
        <a class="action-button docs" href="/docs/">
          <span v-html="logos.docs"></span>Docs
        </a>
      </p>
      <img src="https://user-images.githubusercontent.com/312873/41824011-dc6d33a0-7811-11e8-94bd-1cf2ede595b5.png"
           alt="Image">
    </div>

    <div class="features">
      <div class="feature">
        <h2>Open source</h2>
        <p>Released under the <a href="https://opensource.org/licenses/MIT" target="_blank">MIT License</a></p>
      </div>
      <div class="feature">
        <h2>Self-hosted</h2>
        <p>Many ways to deploy including <a href="https://github.com/snibox/snibox-docker" target="_blank">Docker</a>
        </p>
      </div>
      <div class="feature">
        <h2>Simple attractive UI</h2>
        <p>Label-oriented interface</p>
      </div>
    </div>

    <div class="built-with">
      <h1>Built with</h1>
      <div class="features">
        <div class="feature">
          <a href="https://vuejs.org" target="_blank">
            <img src="../public/vue.svg" alt="Vue.js">
          </a>
        </div>
        <div class="feature">
          <a href="https://rubyonrails.org/" target="_blank">
            <img src="../public/rails.svg" alt="Ruby on Rails">
          </a>
        </div>
        <div class="feature">
          <a href="https://www.postgresql.org/" target="_blank">
            <img src="../public/postgresql.svg" alt="PostgreSQL">
          </a>
        </div>
      </div>
    </div>
    <div class="footer">
      <a href="https://opensource.org/licenses/MIT">MIT Licensed</a> | Copyright © 2018-present, Snibox
    </div>
  </div>
</template>

<script>
  import octicons from 'octicons'

  export default {
    data() {
      return {
        logos: {
          demo: octicons['rocket'].toSVG(),
          github: octicons['mark-github'].toSVG(),
          docs: octicons['book'].toSVG(),
        }
      }
    },
  }
</script>

<style lang="scss">
  $primary: hsl(217, 71%, 53%);
  $success: hsl(141, 71%, 48%);
  $white: #fff;

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

  .home {
    .hero {
      .action-button {
        margin: 0 15px;
        padding: 0.6rem 1.2rem;

        &.github {
          background: $primary;
          border: 1px solid $primary;

          &:hover {
            background: darken($primary, 5%);
          }
        }

        &.demo {
          background: none;
          border: 1px solid $primary;
          color: $primary;

          &:hover {
            background: darken($primary, 5%);
            color: $white;
          }
        }

        &.docs {
          background: darken($success, 5%);

          &:hover {
            background: darken($success, 10%);
          }
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
</style>
