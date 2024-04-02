<template>
  <div>
    <div
      class="max-w-screen-2xl mx-auto lg:px-12 text-center lg:text-left px-10 mt-10 py-4"
    >
      <div
        class="hero-section flex flex-col lg:flex-row justify-center items-center"
      >
        <div class="lg:w-1/2 lg:pl-20">
          <h1
            class="text-5xl lg:text-6xl hero-title text-pure_white font-bold mb-10"
          >
            {{ hero?.heading_start }}
            <span class="text-vsg_light">{{ hero?.heading_middle }}</span>
            {{ hero?.heading_end }}
          </h1>
          <p class="text-white text-light text-lg md:hero-paragraph">
            {{ hero?.paragraph }}
          </p>
          <Button class="mt-8 mb-10 lg:mb-0">{{ hero?.cta }}</Button>
        </div>
        <div class="md:w-1/2 px-10 lg:px-0 flex justify-center">
          <img
            src="/assets/images/svg/hero-section.svg"
            alt="Hero Section Vue School"
            class="h-auto mt-2"
          />
        </div>
      </div>
    </div>
    <div class="bg-1">
      <div
        class="max-w-screen-2xl text-center lg:text-left -mt-20 mx-auto lg:px-12 px-4 py-20"
      >
        <div
          class="glass-box mt-20 mx-4 lg:mx-20 py-12 px-10 flex lg:flex-row items-center lg:items-start flex-col text-white"
        >
          <div class="m-10 lg:left">
            <img
              class="w-40"
              src="/assets/images/svg/icon.svg"
              alt="VueSchool Icon"
            />
          </div>
          <div class="lg:ml-5 right">
            <h2 class="font-bold font-pure_white">
              About Vue School corporate training
            </h2>
            <p class="lg:mt-10 mt-6">
              School is the #1 training resource for Vue.js and has provided the
              most comprehensive Vue.js video library in the world to over
              140,000 developers. Private individuals and small to enterprise
              companies have used our services to develop their skills since
              2016.
            </p>
          </div>
        </div>
        <div class="logos lg:block lg:mx-24 mx-4 my-20 lg:flex hidden">
          <img
            v-for="i in 6"
            src="/assets/images/svg/google_logo.svg"
            :alt="`Google Logo ${i}`"
          />
        </div>
      </div>
    </div>

    <div
      class="max-w-screen-2xl text-center lg:text-left mx-auto lg:px-12 px-4 py-4 lg:fade-bg"
    >
      <div class="flex flex-col mx-4 lg:flex-row lg:mx-20 justify-center">
        <div class="lg:w-1/2 lg:mr-10">
          <h5 class="linear-text bg-clip-text text-2xl">
            YOUR #1 SOURCE OF VUE.JS COURSES
          </h5>
          <h1 class="text-6xl mt-3 hero-title text-white font-bold mb-10">
            Full Stack
            <span class="linear-title">Vue Training</span> Solutions
          </h1>
        </div>
        <div class="lg:w-1/2 lg:ml-10 flex justify-between items-center">
          <div>
            <Counter :end="counter?.lessons || 0" />
            <p
              class="mt-6 text-white text-sm text-light flex justify-center gap-2"
            >
              <img src="/assets/images/svg/video.svg" />Video lessons
            </p>
          </div>
          <div>
            <Counter :end="counter?.courses || 0" />
            <p
              class="mt-6 text-white text-sm text-light flex justify-center gap-2"
            >
              <img src="/assets/images/svg/courses.svg" />Courses
            </p>
          </div>
          <div>
            <Counter :end="counter?.hours || 0" />
            <p
              class="mt-6 text-white text-sm text-light flex justify-center gap-2"
            >
              <img src="/assets/images/svg/hours.svg" />15 Hours
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="max-w-screen-2xl mt-10 mx-auto lg:px-12 px-4 py-4">
      <div
        class="grid mx-4 lg:mx-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
      >
        <div
          class="bg-vs_card relative py-10 px-8 items-center flex flex-col shadow-md rounded-3xl text-center"
        >
          <img
            src="/assets/images/svg/video-courses.svg"
            alt="Video Courses VueSchool"
          />
          <h3 class="text-3xl text-white mt-10 mb-2">Video Courses</h3>
          <p class="text-vsgrey mt-4 mb-16">
            Vue School offers a total of
            <span class="font-bold">56 hours</span> of tuition across
            <span class="font-bold">37 courses</span> and
            <span class="font-bold">684 lessons</span>. Beginners, intermediate
            and advanced levels are all catered for. Includes the popular Vue.js
            Master Class!
          </p>
          <button
            class="text-vsg_light hover:text-underline absolute bottom-10 gap-2 items-center font-medium flex border-b-2 border-transparent hover:border-vsg_light transition duration-200"
          >
            <span>View Pricing</span>
            <img src="/assets/images/svg/arrow-right.svg" />
          </button>
        </div>

        <div
          class="bg-vs_card relative py-10 px-8 items-center flex flex-col shadow-md rounded-3xl text-center"
        >
          <img
            src="/assets/images/svg/virtual-workshops.svg"
            alt="Virtual Workshops VueSchool"
          />
          <h3 class="text-3xl text-white mt-10 mb-2">Virtual Workshops</h3>
          <p class="text-vsgrey mt-4 mb-16">
            Developer teams can access our experienced
            <span class="font-bold">Vue.js trainers LIVE</span>. There are
            <span class="font-bold">8 intensive, hands-on live workshops</span>
            to choose from that are designed to equip your developers with
            practical skills to develop your application faster with less bugs.
            Sessions cover a variety of topics beginning with Vue.js and Nuxt.js
            Fundamentals
          </p>
          <button
            class="text-vsg_light absolute bottom-10 gap-2 items-center font-medium flex border-b-2 border-transparent hover:border-vsg_light transition duration-200"
          >
            <span>View Pricing</span>
            <img src="/assets/images/svg/arrow-right.svg" />
          </button>
        </div>

        <div
          class="bg-vs_card relative items-center flex flex-col py-10 px-8 shadow-md rounded-3xl text-center"
        >
          <img
            src="/assets/images/svg/personal-assistance.svg"
            alt="Personal Assistance VueSchool"
          />
          <h3 class="text-3xl text-white mt-10 mb-2">Personal Assistance</h3>
          <p class="text-vsgrey mt-4 mb-16">
            All the users on our platform have access to our
            <span class="font-bold"
              >Slack channel for interactive, live assistance</span
            >.
          </p>
          <button
            class="text-vsg_light absolute bottom-10 gap-2 items-center font-medium flex border-b-2 border-transparent hover:border-vsg_light transition duration-200"
          >
            <span>View Pricing</span>
            <img src="/assets/images/svg/arrow-right.svg" />
          </button>
        </div>
      </div>
    </div>

    <div class="corporate-training">
      <div class="max-w-screen-2xl mx-auto mt-28 lg:px-12 px-4 pt-4">
        <div class="flex mx-4 lg:mx-20 justify-center">
          <h1
            class="text-6xl mt-3 hero-title text-center text-white font-bold mb-10"
          >
            Discounted
            <span class="linear-title">Corporate <br />Training</span> Bundles
          </h1>
        </div>

        <div
          class="flex items-center nav-lg:items-start nav-lg:flex-row flex-col gap-8 pt-6 lg:pt-28 mx-4 lg:mx-20"
        >
          <div class="bundle relative py-10 px-6 shadow-md rounded-3xl">
            <div class="title flex gap-4">
              <img src="/assets/images/svg/leaf.svg" />
              <span class="font-bold text-white text-2xl">Basic</span>
            </div>
            <p class="mt-10 mb-6 text-light text-vsg_light">
              Includes 1 year access to:
            </p>

            <ul class="flex flex-col text-white text-light text-sm gap-4">
              <li class="flex gap-4 relative items-center">
                <img src="/assets/images/svg/checked.svg" />
                <span>{{ pricing ? pricing[0]?.bullet_1 : "" }}</span>
                <img
                  class="absolute right-0"
                  src="/assets/images/svg/info.svg"
                />
              </li>
              <li class="flex gap-4 relative items-center">
                <img src="/assets/images/svg/checked.svg" />
                <span>{{ pricing ? pricing[0]?.bullet_2 : "" }}</span>
                <img
                  class="absolute right-0"
                  src="/assets/images/svg/info.svg"
                />
              </li>
              <li class="flex gap-4 relative items-center">
                <img src="/assets/images/svg/checked.svg" />
                <span>{{ pricing ? pricing[0]?.bullet_3 : "" }}</span>
                <img
                  class="absolute right-0"
                  src="/assets/images/svg/info.svg"
                />
              </li>
              <li class="flex gap-4 relative items-center">
                <img src="/assets/images/svg/unchecked.svg" />
                <span class="opacity-20">{{
                  pricing ? pricing[0]?.bullet_4 : ""
                }}</span>
              </li>
              <li class="flex gap-4 relative items-center">
                <img src="/assets/images/svg/unchecked.svg" />
                <span class="opacity-20">{{
                  pricing ? pricing[0]?.bullet_5 : ""
                }}</span>
              </li>
            </ul>

            <div class="bg-vs rounded-2xl py-7 px-7 mt-6 mb-8">
              <div class="flex items-center gap-3 mb-6">
                <span class="font-light text-4xl text-white pricing">$50</span>
                <span class="text-vsgrey font-inter text-light"
                  >/ seat / month</span
                >
              </div>
              <p class="text-white font-medium mb-6">
                How many licenses do you need?
              </p>

              <div class="flex items-center justify-between mb-2">
                <input
                  type="range"
                  class="input-range"
                  min="0"
                  max="20"
                  @input="updateBackground"
                />
              </div>
              <div class="w-full text-white flex justify-between mb-4">
                <span class="font-medium text-sm text-light text-vs_grey_light"
                  >0</span
                >
                <span class="font-medium text-sm text-light text-vs_grey_light"
                  >20</span
                >
              </div>
              <div class="flex items-center gap-5">
                <div
                  class="bg-[#0E0E10] bg-opacity-20 rounded-lg px-3.5 py-1 flex gap-2.5 items-center"
                >
                  <img src="/assets/images/svg/seats.svg" />
                  <span class="text-white font-bold text-2xl">12</span>
                  <span class="text-[#979FAD] text-light">seats</span>
                </div>
                <div class="text-vsg_light font-medium ml-1">26% discount</div>
              </div>
            </div>
            <Button class="w-full">Start Learning</Button>
            <a
              href="#"
              class="mt-6 text-vsg_light font-medium flex items-center justify-center"
              >Refer your manager</a
            >
          </div>
          <div class="bundle relative py-10 px-6 shadow-md rounded-3xl">
            <div class="title flex gap-4">
              <img src="/assets/images/svg/rocket-launch.svg" />
              <span class="font-bold text-white text-2xl">Professional</span>
            </div>
            <p class="mt-10 mb-6 text-light text-vsg_light">
              Includes 1 year access to:
            </p>

            <ul class="flex flex-col text-white text-light text-sm gap-4">
              <li class="flex gap-4 relative items-center">
                <img src="/assets/images/svg/checked.svg" />
                <span>{{ pricing ? pricing[1]?.bullet_1 : "" }}</span>
                <img
                  class="absolute right-0"
                  src="/assets/images/svg/info.svg"
                />
              </li>
              <li class="flex gap-4 relative items-center">
                <img src="/assets/images/svg/checked.svg" />
                <span>{{ pricing ? pricing[1]?.bullet_2 : "" }}</span>
                <img
                  class="absolute right-0"
                  src="/assets/images/svg/info.svg"
                />
              </li>
              <li class="flex gap-4 relative items-center">
                <img src="/assets/images/svg/checked.svg" />
                <span>{{ pricing ? pricing[1]?.bullet_3 : "" }}</span>
                <img
                  class="absolute right-0"
                  src="/assets/images/svg/info.svg"
                />
              </li>
              <li class="flex gap-4 relative items-center">
                <img src="/assets/images/svg/checked.svg" />
                <span class="font-bold">{{
                  pricing ? pricing[1]?.bullet_4 : ""
                }}</span>
                <img
                  class="absolute right-0"
                  src="/assets/images/svg/info.svg"
                />
              </li>
              <li class="flex gap-4 relative items-center">
                <img src="/assets/images/svg/checked.svg" />
                <span class="font-bold">{{
                  pricing ? pricing[1]?.bullet_5 : ""
                }}</span>
                <img
                  class="absolute right-0"
                  src="/assets/images/svg/info.svg"
                />
              </li>
            </ul>

            <div
              class="bg-vsg_light bg-opacity-20 rounded-lg my-6 py-4 px-6 flex gap-4"
            >
              <div><img src="/assets/images/png/vue3-masterclass.png" /></div>
              <div class="flex flex-col">
                <span class="text-vsgrey font-medium text-sm"
                  >Enough time to watch:</span
                >
                <span class="text-white font-medium text-lg"
                  >The Vue 3 Masterclass</span
                >
              </div>
            </div>

            <div class="bg-vs rounded-2xl py-7 px-7 mt-6 mb-8">
              <div class="flex items-center gap-3 mb-6">
                <span class="font-light text-4xl text-white pricing">$50</span>
                <span class="text-vsgrey font-inter text-light"
                  >/ seat / month</span
                >
              </div>
              <p class="text-white font-medium mb-6">
                How many licenses do you need?
              </p>

              <div class="flex items-center justify-between mb-2">
                <input
                  type="range"
                  class="input-range"
                  min="0"
                  max="20"
                  @input="updateBackground"
                />
              </div>
              <div class="w-full text-white flex justify-between mb-4">
                <span class="font-medium text-sm text-light text-vs_grey_light"
                  >0</span
                >
                <span class="font-medium text-sm text-light text-vs_grey_light"
                  >20</span
                >
              </div>
              <div class="flex items-center gap-5">
                <div
                  class="bg-[#0E0E10] bg-opacity-20 rounded-lg px-3.5 py-1 flex gap-2.5 items-center"
                >
                  <img src="/assets/images/svg/seats.svg" />
                  <span class="text-white font-bold text-2xl">12</span>
                  <span class="text-[#979FAD] text-light">seats</span>
                </div>
                <div class="text-vsg_light font-medium ml-1">26% discount</div>
              </div>
            </div>
            <Button class="w-full">Start Learning</Button>
            <a
              href="#"
              class="mt-6 text-vsg_light font-medium flex items-center justify-center"
              >Refer your manager</a
            >
          </div>
          <div class="bundle relative py-10 px-6 shadow-md rounded-3xl">
            <div class="title flex gap-4">
              <img src="/assets/images/svg/bolt.svg" />
              <span class="font-bold text-white text-2xl">Basic</span>
            </div>
            <p class="mt-10 mb-6 text-light text-vsg_light">
              Includes 1 year access to:
            </p>

            <ul class="flex flex-col text-white text-light text-sm gap-4">
              <li class="flex gap-4 relative items-center">
                <img src="/assets/images/svg/checked.svg" />
                <span>{{ pricing ? pricing[2]?.bullet_1 : "" }}</span>
                <img
                  class="absolute right-0"
                  src="/assets/images/svg/info.svg"
                />
              </li>
              <li class="flex gap-4 relative items-center">
                <img src="/assets/images/svg/checked.svg" />
                <span>{{ pricing ? pricing[2]?.bullet_2 : "" }}</span>
                <img
                  class="absolute right-0"
                  src="/assets/images/svg/info.svg"
                />
              </li>
              <li class="flex gap-4 relative items-center">
                <img src="/assets/images/svg/checked.svg" />
                <span>{{ pricing ? pricing[2]?.bullet_3 : "" }}</span>
                <img
                  class="absolute right-0"
                  src="/assets/images/svg/info.svg"
                />
              </li>
              <li class="flex gap-4 relative items-center">
                <img src="/assets/images/svg/checked.svg" />
                <span>{{ pricing ? pricing[2]?.bullet_4 : "" }}</span>
                <img
                  class="absolute right-0"
                  src="/assets/images/svg/info.svg"
                />
              </li>
              <li class="flex gap-4 relative items-center">
                <img src="/assets/images/svg/checked.svg" />
                <span class="font-bold">{{
                  pricing ? pricing[2]?.bullet_5 : ""
                }}</span>
                <img
                  class="absolute right-0"
                  src="/assets/images/svg/info.svg"
                />
              </li>
            </ul>

            <div class="bg-vs rounded-2xl py-7 px-7 mt-6 mb-8">
              <div class="flex items-center gap-3 mb-6">
                <span class="font-light text-4xl text-white pricing">$50</span>
                <span class="text-vsgrey font-inter text-light"
                  >/ seat / month</span
                >
              </div>
              <p class="text-white font-medium mb-6">
                How many licenses do you need?
              </p>

              <div class="flex items-center justify-between mb-2">
                <input
                  type="range"
                  class="input-range"
                  min="0"
                  max="20"
                  @input="updateBackground"
                />
              </div>
              <div class="w-full text-white flex justify-between mb-4">
                <span class="font-medium text-sm text-light text-vs_grey_light"
                  >0</span
                >
                <span class="font-medium text-sm text-light text-vs_grey_light"
                  >20</span
                >
              </div>
              <div class="flex items-center gap-5">
                <div
                  class="bg-[#0E0E10] bg-opacity-20 rounded-lg px-3.5 py-1 flex gap-2.5 items-center"
                >
                  <img src="/assets/images/svg/seats.svg" />
                  <span class="text-white font-bold text-2xl">12</span>
                  <span class="text-[#979FAD] text-light">seats</span>
                </div>
                <div class="text-vsg_light font-medium ml-1">26% discount</div>
              </div>
            </div>
            <Button class="w-full">Start Learning</Button>
            <a
              href="#"
              class="mt-6 text-vsg_light font-medium flex items-center justify-center"
              >Refer your manager</a
            >
          </div>
        </div>
      </div>
    </div>

    <div class="max-w-screen-2xl mx-auto nav-lg:px-12 px-4 py-4">
      <div
        class="flex items-center mt-32 nav-lg:mx-20 text-center nav-lg:text-left"
      >
        <h1 class="text-6xl flex-1 hero-title text-pure_white font-bold">
          Available workshops
        </h1>
        <Button class="hidden nav-lg:block">See all the workshops</Button>
      </div>
      <div>
        <div
          class="mt-20 nav-lg:ml-20 ml-4 flex cursor-grab gap-8 items-stretch overflow-hidden pr-20"
          v-dragscroll
        >
          <div
            class="shrink-0 w-[565px] rounded-3xl overflow-hidden"
            v-for="i in 4"
            :key="i"
            @mouseenter="hover = i"
            @mouseleave="hover = false"
            :class="{ 'hovered-card': hover == i }"
          >
            <div class="flex gap-3 items-center px-8 py-6 workshop-card-top">
              <img src="/assets/images/svg/calender.svg" alt="Calender icon" />
              <span class="font-medium text-white">
                December 14th - 11:00 AM (GMT-3)
              </span>
            </div>
            <div class="workshop-card-body px-8 py-8">
              <div class="flex gap-9 mb-5">
                <div class="flex gap-3 text-sm text-[#737B98]">
                  <img
                    src="/assets/images/svg/play-grey.svg"
                    v-if="hover != i"
                    alt="Play icon"
                  />
                  <img
                    src="/assets/images/svg/play-green.svg"
                    v-else
                    alt="Play icon"
                  />
                  <span>LIVE Training</span>
                </div>
                <div class="flex gap-3 text-sm text-[#737B98]">
                  <img
                    src="/assets/images/svg/time-grey.svg"
                    v-if="hover != i"
                    alt="Time icon"
                  />
                  <img
                    src="/assets/images/svg/time-white.svg"
                    v-else
                    alt="Time icon"
                  />
                  <span>15 Hours</span>
                </div>
              </div>
              <h3 class="text-2xl text-white mb-3">Vue.js Fundamentals</h3>
              <p class="text-[#737B98] mb-5 text-sm">
                A progressive framework for building user interfaces. Unlike
                other monolithic frameworks, Vue is designed from the ground up
                to be incrementally...
              </p>
              <div class="mt-5 flex gap-3 items-center">
                <img src="/assets/images/svg/avatar.svg" alt="Avatar" />
                <span class="text-[#737B98] text-sm">Steve Popoola</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Button class="block mx-auto mt-20 nav-lg:hidden"
        >See all the workshops</Button
      >
    </div>

    <div class="bg-2">
      <div class="max-w-screen-2xl mx-auto px-4 lg:px-12 mt-20 py-20">
        <div
          class="mx-4 lg:mx-20 mt-2 flex flex-col-reverse lg:flex-row justify-center items-center"
        >
          <Button class="lg:hidden block mt-8">Read More</Button>
          <div class="lg:w-1/2 flex justify-center lg:pr-6">
            <img
              src="/assets/images/svg/hiring.svg"
              alt="Hiring Vue School"
              class="h-auto"
            />
          </div>

          <div class="lg:w-1/2 text-center lg:text-left lg:pl-6">
            <h1 class="text-6xl hero-title text-white font-bold mb-10">
              Introducing a new way to hire
            </h1>
            <p class="text-white hero-paragraph mb-20 lg:mb-0">
              Vue School has been at the leading edge of educating more than
              140,000 developers in the Vue community since the development of
              the framework. Our newly launched Hire Program allows you to
              connect directly with our developer community.
            </p>
            <Button class="hidden lg:block mt-8">Read More</Button>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-3">
      <div class="max-w-screen-2xl mx-auto px-4 lg:px-12 lg:mt-20 py-20">
        <div
          class="mx-4 lg:mx-20 mt-2 flex flex-col lg:flex-row justify-center items-center"
        >
          <div class="lg:w-1/2 text-center lg:text-left lg:pr-6">
            <h1 class="text-6xl hero-title text-white font-bold mb-10">
              What's waiting for you?
            </h1>
            <ul class="text-white text-xl list-disc space-y-6 list-inside">
              <li>
                100s of experienced Vue and front-end developers that have, on
                average, more than 2 years' experience with Vue.js and 5 years
                front-end experience.
              </li>
              <li>
                A fantastic early bird offer at 50% of the standard price, which
                is set to save you up to 96% of your normal recruitment fees.
              </li>
              <li>
                Unlimited developer searches, unlimited seats for your team,
                outreaches to developers that match YOUR unique needs and a host
                of other benefits.
              </li>
            </ul>

            <Button class="hidden lg:block mt-8">Read More</Button>
          </div>

          <div class="lg:w-1/2 flex mt-16 lg:mt-0 justify-center pl-6">
            <img
              src="/assets/images/svg/waiting.svg"
              alt="Waiting Vue School"
              class="h-auto"
            />
          </div>
          <Button class="lg:hidden block mt-20">Read More</Button>
        </div>
      </div>
    </div>

    <div class="max-w-screen-2xl mx-auto mt-10 px-12 py-4">
      <div class="grid lg:mx-20 grid-cols-1 lg:grid-cols-2 gap-12">
        <div
          class="bg-vs_card relative py-10 px-8 items-center flex flex-col shadow-md rounded-3xl text-center"
        >
          <img src="/assets/images/svg/users-group-alt.svg" alt="Users icon" />
          <h3 class="text-3xl text-white mt-10 mb-2">In-Person Workshops</h3>
          <p class="text-vsgrey mt-4 mb-32">
            Workshops can also be given at your company premises in person. Chat
            to our Sales team to work out a quotation that meets your needs.
          </p>
          <Button class="bottom-10 absolute" type="alt">Talk to Us </Button>
        </div>

        <div
          class="bg-vs_card relative py-10 px-8 items-center flex flex-col shadow-md rounded-3xl text-center"
        >
          <img src="/assets/images/svg/like-tag.svg" alt="Consulting icon" />
          <h3 class="text-3xl text-white mt-10 mb-2">Consulting</h3>
          <p class="text-vsgrey mt-4 mb-32">
            Hands on assistance from our experts on specific problems or
            obstacles your teams are facing.
          </p>
          <Button class="bottom-10 absolute" type="alt">Talk to Us </Button>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.bg-1 {
  background-image: url("/assets/images/svg/bg-1.svg"),
    url("/assets/images/svg/bg-2.svg");
  background-repeat: no-repeat; /* or any other appropriate value */
  background-position: center 0;
}

.hero-title {
  line-height: 4.5rem !important;
}

.hero-paragraph {
  font-weight: 300;
  font-size: 1.42rem;
}

.bg-image {
  position: absolute;
  top: 0;
  left: -1px;
  height: 100%;
  z-index: -1;
}

.glass-box {
  display: flex;
  border-radius: 2rem;
  background-color: #2b2f44e6;
  box-shadow: -0.1px -1px 0 rgba(255, 255, 255, 0.2);
}

.glass-box h2 {
  font-size: 2.5rem;
}

.glass-box p {
  font-weight: 300;
  font-size: 1.42rem;
}

.glass-box .right {
  @apply self-center;
}

.glass-box .left {
  @apply self-center items-center justify-center px-10;
  width: 50%;
}

.logos {
  justify-content: space-between;
}

.logos img {
  height: auto;
}

.fade-bg {
  background-image: linear-gradient(to bottom, #0bd88f04, #4bdfff00);
}

.linear-text {
  background-image: linear-gradient(to right, #0bd88f, #00f0ff 60%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  font-weight: 500;
}

.linear-title {
  background-image: linear-gradient(to right, #01f0fd 15%, #0bd88f, #01f0fd);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.text-light {
  font-weight: 300;
}

.corporate-training {
  background: url("/assets/images/svg/bg-3.svg");
  background-repeat: no-repeat; /* or any other appropriate value */
  background-position: center 7rem;
}

.bundle {
  @apply flex-1;
  box-shadow: 0px -0.2px 2px rgba(255, 255, 255, 0.3);
  background-color: #2b2f44e6;
}

.workshop-card-top {
  background-image: linear-gradient(to right, #4f08e680 15%, #ff497580);
}

.workshop-card-body {
  background-color: #2b2f44e6;
}

.bg-2 {
  background-image: url("/assets/images/svg/bg-4.svg");
  background-repeat: no-repeat; /* or any other appropriate value */
  background-position: center 0;
}

.bg-3 {
  background-image: url("/assets/images/svg/bg-5.svg");
  background-repeat: no-repeat; /* or any other appropriate value */
  background-position: center 0;
}

.hovered-card {
  background-image: linear-gradient(to right, #4f08e6 15%, #ff4975);
}

.hovered-card .workshop-card-body {
  background-color: #2b2f4433;
}

.hovered-card .workshop-card-top {
  background-image: linear-gradient(to right, #4f08e6 15%, #ff4975);
}

.hovered-card * {
  @apply text-white;
}
</style>

<script setup lang="ts">
import type { Pricing, Hero, Counter } from "@/types/sanity";
const hover = ref<boolean | number>(false);

const heroQuery = groq`*[_type == "hero"][0]`;
const pricingQuery = groq`*[_type == "pricing"]`;
const counterQuery = groq`*[_type == "counter"][0]`;

const { data: hero, refresh } = await useSanityQuery<Hero>(heroQuery);
const { data: pricing, refresh: refreshPricing } = await useSanityQuery<
  Array<Pricing>
>(pricingQuery);
const { data: counter, refresh: refreshCounter } =
  await useSanityQuery<Counter>(counterQuery);

const updateBackground = (event: Event) => {
  const target = event.target as HTMLInputElement;
  const value =
    ((parseFloat(target.value) - parseFloat(target.min)) /
      (parseFloat(target.max) - parseFloat(target.min))) *
    100;

  target.style.background = `linear-gradient(to right, #0bd88f 0%, #0bd88f ${value}%, #737b98 ${value}%, #737b98 100%)`;
};
</script>
