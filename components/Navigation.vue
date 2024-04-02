<template>
  <nav>
    <div class="max-w-screen-2xl mx-auto md:px-12 px-2 py-4">
      <div class="flex items-center justify-between h-16">
        <div class="block nav-lg:hidden">
          <button
            @click="toggleSidebar"
            class="text-white hover:text-vsg px-3 py-2"
          >
            <img src="/assets/images/svg/hamburger.svg" />
          </button>
        </div>

        <div class="flex-1 nav-lg:flex-initial flex-shrink-0 ml-4 nav-lg:ml-0">
          <img src="/assets/images/svg/logo.svg" class="" alt="" />
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden nav-lg:block">
          <div class="flex">
            <div class="relative">
              <button
                @click="toggleCoursesDropdown"
                class="flex items-center gap-2 text-white hover:text-vsg px-3 py-2 rounded-md text-md font-light"
              >
                Courses

                <svg
                  viewBox="0 0 8 4"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-2"
                >
                  <path d="M4 4L-3.49691e-07 6.99382e-07L8 0L4 4Z"></path>
                </svg>
              </button>

              <div
                v-show="isCoursesDropdownOpen"
                @click.away="closeCoursesDropdown"
                class="absolute -left-10 mt-2 w-56 bg-gray-800 rounded-md shadow-lg origin-top-right z-10"
              >
                <div
                  class="py-1"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="options-menu"
                >
                  <NuxtLink
                    to="/"
                    class="block px-4 py-2 text-md text-gray-300 hover:text-vsg"
                    role="menuitem"
                  >
                    Video Courses
                  </NuxtLink>
                  <NuxtLink
                    to="/"
                    class="block px-4 py-2 text-md text-gray-300 hover:text-vsg"
                    role="menuitem"
                  >
                    Vue.js Master Class 2024 Edition
                  </NuxtLink>
                  <NuxtLink
                    to="/"
                    class="block px-4 py-2 text-md text-gray-300 hover:text-vsg"
                    role="menuitem"
                  >
                    Vue.js Master Class
                  </NuxtLink>
                  <NuxtLink
                    to="/"
                    class="block px-4 py-2 text-md text-gray-300 hover:text-vsg"
                    role="menuitem"
                  >
                    Workshops
                  </NuxtLink>
                  <NuxtLink
                    to="/"
                    class="block px-4 py-2 text-md text-gray-300 hover:text-vsg"
                    role="menuitem"
                  >
                    Mastering Nuxt
                  </NuxtLink>
                </div>
              </div>
            </div>

            <NuxtLink
              to="/"
              class="text-white hover:text-vsg px-3 py-2 rounded-md text-md font-light"
            >
              Plans
            </NuxtLink>

            <div class="relative">
              <button
                @click="toggleBusinessDropdown"
                class="flex items-center gap-2 text-white hover:text-vsg px-3 py-2 rounded-md text-md font-light"
              >
                Business Service
                <svg
                  viewBox="0 0 8 4"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-2"
                >
                  <path d="M4 4L-3.49691e-07 6.99382e-07L8 0L4 4Z"></path>
                </svg>
              </button>

              <div
                v-show="isBusinessDropdownOpen"
                @click.away="closeBusinessDropdown"
                class="absolute -left-10 mt-2 w-56 bg-gray-800 rounded-md shadow-lg origin-top-right z-10"
              >
                <div
                  class="py-1"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="options-menu"
                >
                  <NuxtLink
                    to="/"
                    class="block px-4 py-2 text-md text-gray-300 hover:text-vsg"
                    role="menuitem"
                  >
                    Vue.js Corporate Training
                  </NuxtLink>
                  <NuxtLink
                    to="/"
                    class="block px-4 py-2 text-md text-gray-300 hover:text-vsg"
                    role="menuitem"
                  >
                    Workshops
                  </NuxtLink>
                </div>
              </div>
            </div>

            <NuxtLink
              to="/"
              class="text-white hover:text-vsg px-3 py-2 rounded-md text-md font-light"
            >
              Learning Paths
            </NuxtLink>

            <NuxtLink
              to="/"
              class="text-white hover:text-vsg px-3 py-2 rounded-md text-md font-light"
            >
              Hiring
            </NuxtLink>

            <NuxtLink
              to="/"
              class="text-white hover:text-vsg px-3 py-2 rounded-md text-md font-light"
            >
              Articles
            </NuxtLink>

            <div class="relative">
              <button
                @click="toggleEventsDropdown"
                class="flex items-center gap-2 text-white hover:text-vsg px-3 py-2 rounded-md text-md font-light"
              >
                Events
                <svg
                  viewBox="0 0 8 4"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-2"
                >
                  <path d="M4 4L-3.49691e-07 6.99382e-07L8 0L4 4Z"></path>
                </svg>
              </button>

              <div
                v-show="isEventsDropdownOpen"
                @click.away="closeEventsDropdown"
                class="absolute -left-10 mt-2 w-56 bg-gray-800 rounded-md shadow-lg origin-top-right z-10"
              >
                <div
                  class="py-1"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="options-menu"
                >
                  <NuxtLink
                    to="/"
                    class="block px-4 py-2 text-md text-gray-300 hover:text-vsg"
                    role="menuitem"
                  >
                    Frontend Nation
                  </NuxtLink>
                  <NuxtLink
                    to="/"
                    class="block px-4 py-2 text-md text-gray-300 hover:text-vsg"
                    role="menuitem"
                  >
                    Vue.js Nation
                  </NuxtLink>
                  <NuxtLink
                    to="/"
                    class="block px-4 py-2 text-md text-gray-300 hover:text-vsg"
                    role="menuitem"
                  >
                    Nuxt Nation
                  </NuxtLink>
                  <NuxtLink
                    to="/"
                    class="block px-4 py-2 text-md text-gray-300 hover:text-vsg"
                    role="menuitem"
                  >
                    Vue.js Forge
                  </NuxtLink>
                </div>
              </div>
            </div>

            <NuxtLink
              to="/"
              class="text-white hover:text-vsg px-3 py-2 rounded-md text-md font-light"
            >
              Get Certified
            </NuxtLink>
          </div>
        </div>

        <!-- Right Section: Login & Sign Up Links -->
        <div class="flex items-center hidden justify-end sm:block">
          <!-- Login Link -->
          <NuxtLink
            to="/"
            class="text-white hover:text-vsg px-3 py-2 text-md font-light"
          >
            Log in
          </NuxtLink>
          <!-- Sign Up Link (Figma design says Sing up) -->
          <NuxtLink
            to="/"
            class="border-green-gradient px-10 py-5 font-medium ml-2 text-md font-light"
          >
            Sign up
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- Sidebar -->
    <div
      class="nav-lg:hidden fixed inset-0 bg-gray-800 z-50 transition-opacity duration-300 ease-in-out"
      :class="{
        'opacity-100 pointer-events-auto': isSidebarOpen,
        'opacity-0 pointer-events-none': !isSidebarOpen,
      }"
    >
      <div class="flex justify-end pt-6 pr-6">
        <button @click="toggleSidebar" class="text-white hover:text-vsg">
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
      </div>

      <div class="px-2 pt-2 pb-3 space-y-1">
        <NuxtLink
          to="/"
          class="text-white hover:text-vsg px-3 py-2 rounded-md text-md font-light block"
          >Courses</NuxtLink
        >

        <NuxtLink
          to="/"
          class="text-white hover:text-vsg px-3 py-2 rounded-md text-md font-light block"
          >Plans</NuxtLink
        >
        <NuxtLink
          to="/"
          class="text-white hover:text-vsg px-3 py-2 rounded-md text-md font-light block"
          >Business Services</NuxtLink
        >

        <NuxtLink
          to="/"
          class="text-white hover:text-vsg px-3 py-2 rounded-md text-md font-light block"
          >Learning Paths</NuxtLink
        >
        <NuxtLink
          to="/"
          class="text-white hover:text-vsg px-3 py-2 rounded-md text-md font-light block"
          >Hiring</NuxtLink
        >
        <NuxtLink
          to="/"
          class="text-white hover:text-vsg px-3 py-2 rounded-md text-md font-light block"
          >Articles</NuxtLink
        >
        <NuxtLink
          to="/"
          class="text-white hover:text-vsg px-3 py-2 rounded-md text-md font-light block"
          >Events</NuxtLink
        >

        <NuxtLink
          to="/"
          class="text-white hover:text-vsg px-3 py-2 rounded-md text-md font-light block"
          >Get Certified</NuxtLink
        >

        <NuxtLink
          to="/"
          class="block sm:hidden text-white hover:text-vsg px-3 py-2 rounded-md text-md font-light block"
          >Log in</NuxtLink
        >

        <NuxtLink
          to="/"
          class="block sm:hidden text-white hover:text-vsg px-3 py-2 rounded-md text-md font-light block"
          >Sign up</NuxtLink
        >
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isSidebarOpen: false,
      isCoursesDropdownOpen: false,
      isEventsDropdownOpen: false,
      isBusinessDropdownOpen: false,
    };
  },
  methods: {
    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen;
    },
    toggleCoursesDropdown() {
      this.isCoursesDropdownOpen = !this.isCoursesDropdownOpen;
    },
    closeCoursesDropdown() {
      this.isCoursesDropdownOpen = false;
    },
    toggleEventsDropdown() {
      this.isEventsDropdownOpen = !this.isEventsDropdownOpen;
    },
    closeEventsDropdown() {
      this.isEventsDropdownOpen = false;
    },
    toggleBusinessDropdown() {
      this.isBusinessDropdownOpen = !this.isBusinessDropdownOpen;
    },
    closeBusinessDropdown() {
      this.isBusinessDropdownOpen = false;
    },
  },
};
</script>
