<template>
  <div class="max-w-screen-2xl mx-auto px-12 py-4 mt-20">
    <div
      class="lg:mx-20 flex flex-col text-center lg:text-left lg:flex-row items-start"
    >
      <div
        class="lg:w-1/2 flex flex-col items-center lg:items-start gap-10 lg:pr-28"
      >
        <img
          src="/assets/images/svg/logo.svg"
          alt="Vue School"
          class="footer-logo cursor-pointer"
        />
        <p class="text-white text-light thanks-text mt-10">
          Thanks to fine people like you, Vue School can proudly sponsor Evan
          and the future of Vue.js by being a Platinum Patreon
        </p>
        <span class="text-vs_grey_light mt-6 text-social"
          >FOLLOW US IN SOCIAL MEDIA</span
        >
        <div
          class="flex flex-wrap justify-center md:gap-10 gap-4 mb-20 lg:mb-0 social-icons"
        >
          <a href="#">
            <img src="/assets/images/svg/facebook.svg" alt="Facebook" />
          </a>
          <a href="#">
            <img src="/assets/images/svg/twitter.svg" alt="Twitter" />
          </a>
          <a href="#">
            <img src="/assets/images/svg/github.svg" alt="GitHub" />
          </a>
          <a href="#">
            <img src="/assets/images/svg/linkedin.svg" alt="Linkedin" />
          </a>
          <a href="#">
            <img src="/assets/images/svg/youtube.svg" alt="Youtube" />
          </a>
        </div>
      </div>

      <div class="lg:w-1/2 hidden lg:block lg:pl-5">
        <div class="footer-links-column mb-40">
          <div
            v-for="(footer, index) in links"
            :key="index"
            class="footer-column mb-12"
          >
            <span class="text-vs_grey_light text-category uppercase">{{
              footer.category
            }}</span>
            <ul
              class="flex mt-4 flex-col gap-4 text-light items-center lg:items-start"
            >
              <li v-for="(link, index) in footer.links" :key="index">
                <a href="#" class="text-white hover:text-vsg">{{
                  link.title
                }}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="lg:hidden w-full text-left lg:pl-5">
        <div
          class="grid md:grid-cols-3 grid-cols-1 text-center md:text-left mb-40"
        >
          <div v-for="(footer, index) in links_md" :key="index" class="mb-12">
            <span class="text-vs_grey_light text-category uppercase">{{
              footer.category
            }}</span>
            <ul
              class="flex mt-4 flex-col gap-4 text-light items-center md:items-start"
            >
              <li v-for="(link, index) in footer.links" :key="index">
                <a href="#" class="text-white hover:text-vsg">{{
                  link.title
                }}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const links = [
  {
    category: "Products",

    links: [
      {
        title: "Courses",
      },
      {
        title: "Workshops",
      },
      {
        title: "Vue Masterclass",
      },
      {
        title: "Mastering Nuxt",
      },
    ],
  },
  {
    category: "PRICING",
    links: [
      {
        title: "Plans",
      },
    ],
  },

  {
    category: "CONNECT WITH US",
    links: [
      {
        title: "About Us",
      },
      {
        title: "Careers",
      },
      {
        title: "Contact Us",
      },
    ],
  },
  {
    category: "EVENTS",
    links: [
      {
        title: "Vue.js Nation",
      },
      {
        title: "Nuxt Nation",
      },
      {
        title: "Vue.js Forge",
      },
    ],
  },

  {
    category: "CORPORATE",
    links: [
      {
        title: "Corporate Training",
      },
      {
        title: "Developer Recruitment",
      },
      {
        title: "Course Development",
      },
      {
        title: "On-site Workshops",
      },
      {
        title: "Consulting",
      },
      {
        title: "Affiliate Programs",
      },
    ],
  },
  {
    category: "RESOURCES",
    links: [
      {
        title: "Articles",
      },
    ],
  },
];

const links_md = [
  {
    category: "Products",

    links: [
      {
        title: "Courses",
      },
      {
        title: "Workshops",
      },
      {
        title: "Vue Masterclass",
      },
      {
        title: "Mastering Nuxt",
      },
    ],
  },

  {
    category: "CORPORATE",
    links: [
      {
        title: "Corporate Training",
      },
      {
        title: "Developer Recruitment",
      },
      {
        title: "Course Development",
      },
      {
        title: "On-site Workshops",
      },
      {
        title: "Consulting",
      },
      {
        title: "Affiliate Programs",
      },
    ],
  },
  {
    category: "CONNECT WITH US",
    links: [
      {
        title: "About Us",
      },
      {
        title: "Careers",
      },
      {
        title: "Contact Us",
      },
    ],
  },
  {
    category: "EVENTS",
    links: [
      {
        title: "Vue.js Nation",
      },
      {
        title: "Nuxt Nation",
      },
      {
        title: "Vue.js Forge",
      },
    ],
  },

  {
    category: "RESOURCES",
    links: [
      {
        title: "Articles",
      },
    ],
  },

  {
    category: "PRICING",
    links: [
      {
        title: "Plans",
      },
    ],
  },
];
</script>

<style scoped>
.text-social {
  font-size: 1.4rem;
  font-weight: 500;
}

.thanks-text {
  font-size: 1rem;
}

.social-icons a {
  border-radius: 50%;
  background-color: #2b2f44;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
}

.social-icons img {
  min-width: 16px;
}

.social-icons a:hover {
  transform: scale(1.1);
}

.footer-logo {
  width: 17rem;
}

@media (max-width: 500px) {
  .footer-logo {
    width: 10rem;
  }
}

.text-category {
  font-size: 1.4rem;
  font-weight: 500;
}

.footer-links-column {
  column-count: 2;
  column-gap: 40px;
}

.footer-column {
  break-inside: avoid;
}
</style>
