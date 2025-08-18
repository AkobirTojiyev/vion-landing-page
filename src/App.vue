
<template>
  <Tsparticle :isLight="isLight"/>
  <div id="container">
    <div class="tailwind">
      <div id="node-0_6_container" style="height: 100%">
        <div class="min-h-screen bg-background text-foreground" style="">
          <header
            class="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border"
          >
            <div class="container-corporate">
              <div class="flex items-center justify-between h-20">
                <div class="flex items-center">
                  <div class="relative">
                    <div class="flex items-center space-x-3">
                      <div class="relative w-10 h-10">
                        <img src="@/assets/Vion.png" alt="logo">
                      </div>
                      <span class="text-3xl font-bold " style="color: oklch(0.7 0.2 240);"
                        >VION</span
                      >
                    </div>  
                  </div>
                </div>
                <nav class="hidden lg:flex items-center space-x-8">
                  <a
                    href="#home"
                    class="text-foreground/70 hover:text-[#0057FF] font-medium transition-colors duration-200"
                    >{{ t('header.home') }}</a
                  ><a
                    href="#solutions"
                    class="text-foreground/70 hover:text-[#0057FF] font-medium transition-colors duration-200"
                    >{{ t('header.solutions') }}</a
                  ><a
                    href="#cases"
                    class="text-foreground/70 hover:text-[#0057FF] font-medium transition-colors duration-200"
                    >{{ t('header.cases') }}</a
                  ><a
                    href="#contact"
                    class="text-foreground/70 hover:text-[#0057FF] font-medium transition-colors duration-200"
                    >{{ t('header.contacts') }}</a
                  >
                </nav>
                <div class="hidden lg:flex items-center space-x-4">
                  <button
                    @click="toggleTheme"
                    data-slot="button"
                    class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:bg-accent dark:hover:bg-accent/50 h-8 rounded-md gap-1.5 has-[>svg]:px-2.5 text-foreground/70 hover:text-[#0057FF] p-2"
                  >
                    <svg
                      v-if="!isLight"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-moon w-5 h-5"
                      aria-hidden="true"
                    >
                      <path
                        d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"
                      ></path>
                    </svg>

                    <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sun w-5 h-5" aria-hidden="true"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>
                  </button>


                  <!-- LANGUAGE DROPDOWN (here) -->
                  <div class="relative" ref="root" >
                    <button
                      @click="toggleDropdown"
                      :aria-expanded="open.toString()"
                      aria-haspopup="true"
                      class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] h-9 py-2 px-3 bg-transparent hover:bg-accent transition-colors duration-150 text-foreground/70"
                    >
                      <!-- Active language indicator: emoji + code -->
                      <span class="flex items-center gap-2">
                        <span class="text-lg leading-none" aria-hidden="true">
                          {{ langEmoji[current] }}
                        </span>
                        <span class="uppercase font-medium">{{ current }}</span>
                      </span>

                      <!-- chevron -->
                      <svg class="w-4 h-4 ml-1 text-foreground/60" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    <!-- Dropdown menu -->
                    <transition name="fade" enter-active-class="transition ease-out duration-150" leave-active-class="transition ease-in duration-100">
                      <ul
                        v-if="open"
                        class="absolute -right-6 mt-2 w-40 dark:bg-slate-800 border bg-sky-600/65 border-gray-200 dark:border-slate-700 rounded-md shadow-lg z-50 py-1"
                        role="menu"
                        aria-label="Language options"
                      >
                        <li v-for="(label, code) in langs" :key="code">
                          <button
                            @click="selectLocale(code)"
                            class="w-full flex items-center gap-3 px-3 py-2 text-sm hover:bg-violet-300 dark:hover:bg-slate-700 transition-colors"
                            role="menuitem"
                          >
                            <span class="text-lg">{{ langEmoji[code] }}</span>
                            <div class="flex-1 text-left">
                              <div class="font-medium text-foreground ">{{ label }}</div>
                              <div class="text-xs text-foreground/50 mt-0.5 ">{{ langDescription[code] }}</div>
                            </div>

                            <!-- Active check -->
                            <svg v-if="current === code" xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-[#0057FF]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                              <path d="M20 6L9 17l-5-5"></path>
                            </svg>
                          </button>
                        </li>
                      </ul>
                    </transition>
                  </div>

                  <button
                    data-slot="button"
                    class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive h-9 py-2 has-[>svg]:px-3 bg-[#0057FF] hover:bg-[#FF6B00] text-white px-6 transition-all duration-300"
                  >
                    {{ t('header.tryFree') }}
                  </button>
                </div>
                <div class="lg:hidden flex items-center space-x-2">
                  <button
                    @click="toggleTheme"
                    data-slot="button"
                    class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 h-8 rounded-md gap-1.5 has-[>svg]:px-2.5 text-foreground/70 p-2"
                  >
                  <svg
                      v-if="!isLight"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-moon w-5 h-5"
                      aria-hidden="true"
                    >
                      <path
                        d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"
                      ></path>
                    </svg>

                    <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sun w-5 h-5" aria-hidden="true"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>
                  </button>
                  <button  @click="isMenuOpen = !isMenuOpen" class="text-foreground/70 hover:text-foreground">
                    <svg 
                      v-if="!isMenuOpen"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-menu"
                      aria-hidden="true"
                    >
                      <path d="M4 12h16"></path>
                      <path d="M4 18h16"></path>
                      <path d="M4 6h16"></path>
                    </svg>

                    <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x" aria-hidden="true"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
                  </button>
                </div>
              </div>
              <transition name="fade">
                <div v-if="isMenuOpen" class="lg:hidden border-t border-border bg-background"><nav class="py-6 space-y-1"><a href="#home" class="block px-4 py-3 text-foreground hover:text-[#0057FF] hover:bg-muted rounded-lg transition-colors">{{ t('header.home') }}</a><a href="#solutions" class="block px-4 py-3 text-foreground hover:text-[#0057FF] hover:bg-muted rounded-lg transition-colors">{{ t('header.solutions') }}</a><a href="#cases" class="block px-4 py-3 text-foreground hover:text-[#0057FF] hover:bg-muted rounded-lg transition-colors">{{ t('header.cases') }}</a><a href="#contact" class="block px-4 py-3 text-foreground hover:text-[#0057FF] hover:bg-muted rounded-lg transition-colors">{{ t('header.contacts') }}</a><div class="px-4 pt-6 space-y-3"><button data-slot="button" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive h-9 px-4 py-2 has-[&gt;svg]:px-3 w-full bg-[#0057FF] hover:bg-[#FF6B00] text-white transition-all duration-300">{{ t('header.tryFree') }}</button></div></nav></div>
              </transition>
            </div>
          </header>
          <main>
            <section
              id="home"
              class="relative min-h-screen flex items-center justify-center overflow-hidden "
              data-aos="fade-down" data-aos-easing="linear" data-aos-duration="3000"><!-- bg-background -->
              <div class="absolute inset-0 opacity-30">
                <div
                  class="absolute top-1/4 left-1/6 w-px h-32 bg-gradient-to-b from-[#0057FF]/50 to-transparent"
                ></div>
                <div
                  class="absolute top-1/3 right-1/4 w-24 h-px bg-gradient-to-r from-[#FF6B00]/50 to-transparent"
                ></div>
                <div
                  class="absolute bottom-1/3 left-1/3 w-16 h-px bg-gradient-to-r from-[#0057FF]/30 to-transparent"
                ></div>
                <div
                  class="absolute bottom-1/4 right-1/6 w-px h-20 bg-gradient-to-b from-[#FF6B00]/40 to-transparent"
                ></div>
              </div>
              <div class="container-corporate relative z-10">
                <div class="max-w-4xl mx-auto text-center">
                  <div class="mb-8 js:mt-[8rem]">
                    <h1 class="text-foreground mb-6">
                      {{ t('header.headline') }}
                    </h1>
                    <div
                      class="w-24 h-1 bg-gradient-to-r from-[#0057FF] to-[#FF6B00] mx-auto"
                    ></div>
                  </div>
                  <div class="mb-12">
                    <p
                      class="text-muted-foreground max-w-3xl mx-auto text-xl leading-relaxed"
                    >
                    {{ t('header.subheadline') }}
                    </p>
                  </div>
                  <div
                    class="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20"
                  >
                    <button
                      data-slot="button"
                      class="inline-flex items-center justify-center gap-2 whitespace-nowrap disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive h-10 rounded-md has-[>svg]:px-4 bg-[#FF6B00] hover:bg-[#FF6B00]/90 text-white px-8 py-4 text-lg font-medium group transition-all duration-300"
                    >
                    {{ t('header.requestDemo') }}<svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="lucide lucide-arrow-right w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                        aria-hidden="true"
                      >
                        <path d="M5 12h14"></path>
                        <path d="m12 5 7 7-7 7"></path>
                      </svg></button
                    ><button
                      data-slot="button"
                      class="inline-flex items-center justify-center gap-2 whitespace-nowrap disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-10 rounded-md has-[>svg]:px-4 text-foreground border-border hover:bg-muted hover:border-[#0057FF] px-8 py-4 text-lg font-medium group transition-all duration-300"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="lucide lucide-play w-5 h-5 mr-2 group-hover:text-[#0057FF] transition-colors"
                        aria-hidden="true"
                      >
                        <path
                          d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"
                        ></path></svg
                      >{{ t('header.watchVideo') }}
                    </button>
                  </div>
                  <div
                    class="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-3xl mx-auto"
                  >
                    <div class="text-center group">
                      <div
                        class="text-3xl font-bold text-[#0057FF] mb-2 group-hover:text-[#FF6B00] transition-colors duration-300"
                      >
                        {{ t('header.oneMonth') }}
                      </div>
                      <div class="text-muted-foreground font-medium">
                        {{ t('header.implementationTime') }}
                      </div>
                      <div
                        class="w-12 h-px bg-border mx-auto mt-3 group-hover:bg-[#0057FF] transition-colors duration-300"
                      ></div>
                    </div>
                    <div class="text-center group">
                      <div
                        class="text-3xl font-bold text-[#0057FF] mb-2 group-hover:text-[#FF6B00] transition-colors duration-300"
                      >
                        80%
                      </div>
                      <div class="text-muted-foreground font-medium">
                        {{ t('header.timeSaving') }}
                      </div>
                      <div
                        class="w-12 h-px bg-border mx-auto mt-3 group-hover:bg-[#0057FF] transition-colors duration-300"
                      ></div>
                    </div>
                    <div class="text-center group">
                      <div
                        class="text-3xl font-bold text-[#0057FF] mb-2 group-hover:text-[#FF6B00] transition-colors duration-300"
                      >
                        24/7
                      </div>
                      <div class="text-muted-foreground font-medium">
                        {{ t('header.support') }}
                      </div>
                      <div
                        class="w-12 h-px bg-border mx-auto mt-3 group-hover:bg-[#0057FF] transition-colors duration-300"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-border to-transparent"
              ></div>
            </section>
            <section
              class="section-spacing  relative overflow-hidden"
            ><!-- bg-background -->
              <div class="container-corporate">
                <div class="text-center mb-20">
                  <div class="flex items-center justify-center mb-6">
                    <div
                      class="w-12 h-px bg-gradient-to-r from-transparent to-[#FF6B00]"
                    ></div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-triangle-alert w-6 h-6 text-[#FF6B00] mx-4"
                      aria-hidden="true"
                    >
                      <path
                        d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"
                      ></path>
                      <path d="M12 9v4"></path>
                      <path d="M12 17h.01"></path>
                    </svg>
                    <div
                      class="w-12 h-px bg-gradient-to-l from-transparent to-[#FF6B00]"
                    ></div>
                  </div>
                  <h2 class="text-foreground mb-6">
                    {{ t('main.title') }}
                  </h2>
                  <p class="text-muted-foreground max-w-2xl mx-auto text-xl">
                    {{ t('main.subtitle') }}
                  </p>
                </div>
                <div
                  class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16" 
                >
                  <div class="group">
                    <div
                      class="bg-card border border-border rounded-lg p-8 h-full hover:border-[#0057FF]/30 transition-all duration-300"  data-aos="zoom-in-up"
                    >
                      <div
                        class="w-16 h-16 bg-red-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="lucide lucide-clock w-8 h-8 text-red-400"
                          aria-hidden="true"
                        >
                          <path d="M12 6v6l4 2"></path>
                          <circle cx="12" cy="12" r="10"></circle>
                        </svg>
                      </div>
                      <h4
                        class="text-card-foreground mb-4 lgg:text-3xl group-hover:text-[#0057FF] transition-colors duration-300"
                      >
                      {{ t('main.hours') }}
                      </h4>
                      <p class="text-muted-foreground leading-relaxed">
                        {{ t('main.hoursDesc') }}
                      </p>
                      <div
                        class="w-0 h-px bg-gradient-to-r from-[#0057FF] to-[#FF6B00] mt-6 group-hover:w-full transition-all duration-500"
                      ></div>
                    </div>
                  </div>
                  <div class="group">
                    <div
                      class="bg-card border border-border rounded-lg p-8 h-full hover:border-[#0057FF]/30 transition-all duration-300" data-aos="zoom-in-up"
                    >
                      <div
                        class="w-16 h-16 bg-orange-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="lucide lucide-trending-down w-8 h-8 text-orange-400"
                          aria-hidden="true"
                        >
                          <path d="M16 17h6v-6"></path>
                          <path d="m22 17-8.5-8.5-5 5L2 7"></path>
                        </svg>
                      </div>
                      <h4
                        class="text-card-foreground mb-4 lgg:text-3xl group-hover:text-[#0057FF] transition-colors duration-300"
                      >
                      {{ t('main.studentLoss') }}
                      </h4>
                      <p class="text-muted-foreground leading-relaxed">
                        {{ t('main.studentLossDesc') }}
                      </p>
                      <div
                        class="w-0 h-px bg-gradient-to-r from-[#0057FF] to-[#FF6B00] mt-6 group-hover:w-full transition-all duration-500"
                      ></div>
                    </div>
                  </div>
                  <div class="group">
                    <div
                      class="bg-card border border-border rounded-lg p-8 h-full hover:border-[#0057FF]/30 transition-all duration-300" data-aos="zoom-in-up"
                    >
                      <div
                        class="w-16 h-16 bg-purple-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="lucide lucide-users w-8 h-8 text-purple-400"
                          aria-hidden="true"
                        >
                          <path
                            d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"
                          ></path>
                          <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                          <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                          <circle cx="9" cy="7" r="4"></circle>
                        </svg>
                      </div>
                      <h4
                        class="text-card-foreground lgg:text-3xl mb-4 group-hover:text-[#0057FF] transition-colors duration-300"
                      >
                      {{ t('main.teachersIssue') }}
                      </h4>
                      <p class="text-muted-foreground leading-relaxed">
                        {{ t('main.teachersIssueDesc') }}
                      </p>
                      <div
                        class="w-0 h-px bg-gradient-to-r from-[#0057FF] to-[#FF6B00] mt-6 group-hover:w-full transition-all duration-500"
                      ></div>
                    </div>
                  </div>
                </div>
                <div class="text-center" data-aos="zoom-in-up">
                  <div
                    class="bg-gradient-to-r from-red-900/20 to-orange-900/20 border border-red-500/20 rounded-xl p-8 max-w-4xl mx-auto"
                  >
                    <div class="flex items-center justify-center mb-4">
                      <div class="w-2 h-2 bg-red-400 rounded-full"></div>
                      <div
                        class="w-12 h-px bg-gradient-to-r from-red-400 to-orange-400 mx-3"
                      ></div>
                      <span class="text-red-400 font-semibold"
                        >{{ t('main.criticalResult') }}</span
                      >
                      <div
                        class="w-12 h-px bg-gradient-to-l from-red-400 to-orange-400 mx-3"
                      ></div>
                      <div class="w-2 h-2 bg-orange-400 rounded-full"></div>
                    </div>
                    <p class="text-foreground text-xl font-medium">
                      {{ t('main.criticalDesc') }}
                    </p>
                  </div>
                </div>
              </div>
              <div
                class="absolute top-20 left-10 w-px h-24 bg-gradient-to-b from-[#FF6B00]/20 to-transparent"
              ></div>
              <div
                class="absolute bottom-20 right-10 w-16 h-px bg-gradient-to-l from-[#0057FF]/20 to-transparent"
              ></div>
            </section>
            <section
              id="solutions"
              class="section-spacing  relative overflow-hidden"
            ><!-- bg-card -->
              <div class="container-corporate">
                <div class="text-center mb-20">
                  <div class="flex items-center justify-center mb-6">
                    <div
                      class="w-12 h-px bg-gradient-to-r from-transparent to-[#0057FF]"
                    ></div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-circle-check-big w-6 h-6 text-[#0057FF] mx-4"
                      aria-hidden="true"
                    >
                      <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                      <path d="m9 11 3 3L22 4"></path>
                    </svg>
                    <div
                      class="w-12 h-px bg-gradient-to-l from-transparent to-[#0057FF]"
                    ></div>
                  </div>
                  <h2 class="text-card-foreground mb-6">
                    {{ t('howItHelps.title') }}
                  </h2>
                  <p class="text-muted-foreground max-w-2xl mx-auto text-xl">
                    {{ t('howItHelps.items.automation') }}
                  </p>
                </div>
                <div
                  class="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center max-w-7xl mx-auto"
                >
                  <div class="relative order-2 lg:order-1">
                    <div
                      class="bg-gradient-to-br from-muted to-background rounded-2xl p-8 shadow-2xl border border-border"
                      data-aos="zoom-in-up"
                    >
                      <div
                        class="bg-card rounded-xl border border-border shadow-lg overflow-hidden"
                      >
                        <div
                          class="bg-muted border-b border-border px-4 py-3 flex items-center space-x-2"
                        >
                          <div class="flex space-x-2">
                            <div class="w-3 h-3 bg-red-400 rounded-full"></div>
                            <div
                              class="w-3 h-3 bg-yellow-400 rounded-full"
                            ></div>
                            <div
                              class="w-3 h-3 bg-green-400 rounded-full"
                            ></div>
                          </div>
                          <div
                            class="flex-1 bg-background rounded px-3 py-1 ml-4"
                          >
                            <span class="text-muted-foreground text-sm"
                              >vion.uz/dashboard</span
                            >
                          </div>
                        </div>
                        <div class="p-6 min-h-[320px]">
                          <div class="flex items-center justify-between mb-6">
                            <div class="flex items-center space-x-3">
                              <div
                                class="w-8 h-8 bg-gradient-to-r from-[#0057FF] to-[#FF6B00] rounded-lg flex items-center justify-center"
                              >
                                <div class="w-4 h-4 bg-white rounded-sm"></div>
                              </div>
                              <span class="font-semibold text-card-foreground"
                                >VION Dashboard</span
                              >
                            </div>
                            <div class="w-8 h-8 bg-muted rounded-full"></div>
                          </div>
                          <div class="grid grid-cols-3 gap-4 mb-6">
                            <div
                              class="bg-gradient-to-r from-[#0057FF]/10 to-[#0057FF]/5 border border-[#0057FF]/20 rounded-lg p-4"
                            >
                              <div
                                class="w-8 h-8 bg-[#0057FF] rounded-lg mb-3"
                              ></div>
                              <div
                                class="h-2 bg-[#0057FF]/30 rounded mb-2"
                              ></div>
                              <div
                                class="h-2 bg-[#0057FF]/20 rounded w-2/3"
                              ></div>
                            </div>
                            <div
                              class="bg-gradient-to-r from-[#FF6B00]/10 to-[#FF6B00]/5 border border-[#FF6B00]/20 rounded-lg p-4"
                            >
                              <div
                                class="w-8 h-8 bg-[#FF6B00] rounded-lg mb-3"
                              ></div>
                              <div
                                class="h-2 bg-[#FF6B00]/30 rounded mb-2"
                              ></div>
                              <div
                                class="h-2 bg-[#FF6B00]/20 rounded w-3/4"
                              ></div>
                            </div>
                            <div
                              class="bg-gradient-to-r from-green-500/10 to-green-500/5 border border-green-500/20 rounded-lg p-4"
                            >
                              <div
                                class="w-8 h-8 bg-green-500 rounded-lg mb-3"
                              ></div>
                              <div
                                class="h-2 bg-green-500/30 rounded mb-2"
                              ></div>
                              <div
                                class="h-2 bg-green-500/20 rounded w-1/2"
                              ></div>
                            </div>
                          </div>
                          <div class="space-y-3">
                            <div
                              class="flex items-center space-x-4 p-3 bg-muted rounded-lg"
                            >
                              <div
                                class="w-8 h-8 bg-[#0057FF] rounded-full"
                              ></div>
                              <div class="flex-1 space-y-1">
                                <div
                                  class="h-3 bg-card-foreground/20 rounded w-3/4"
                                ></div>
                                <div
                                  class="h-2 bg-card-foreground/10 rounded w-1/2"
                                ></div>
                              </div>
                              <div
                                class="w-16 h-6 bg-[#0057FF]/20 rounded"
                              ></div>
                            </div>
                            <div
                              class="flex items-center space-x-4 p-3 bg-muted rounded-lg"
                            >
                              <div
                                class="w-8 h-8 bg-[#FF6B00] rounded-full"
                              ></div>
                              <div class="flex-1 space-y-1">
                                <div
                                  class="h-3 bg-card-foreground/20 rounded w-2/3"
                                ></div>
                                <div
                                  class="h-2 bg-card-foreground/10 rounded w-1/3"
                                ></div>
                              </div>
                              <div
                                class="w-16 h-6 bg-[#FF6B00]/20 rounded"
                              ></div>
                            </div>
                            <div
                              class="flex items-center space-x-4 p-3 bg-muted rounded-lg"
                            >
                              <div
                                class="w-8 h-8 bg-green-500 rounded-full"
                              ></div>
                              <div class="flex-1 space-y-1">
                                <div
                                  class="h-3 bg-card-foreground/20 rounded w-4/5"
                                ></div>
                                <div
                                  class="h-2 bg-card-foreground/10 rounded w-2/3"
                                ></div>
                              </div>
                              <div
                                class="w-16 h-6 bg-green-500/20 rounded"
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <p class="text-center mt-6 text-muted-foreground">
                        {{ t('howItHelps.items.interface') }}
                      </p>
                    </div>
                  </div>
                  <div class="space-y-10 order-1 lg:order-2" data-aos="zoom-in-up">
                    <div class="flex items-start space-x-6 group">
                      <div
                        class="w-16 h-16 rounded-xl bg-gradient-to-r from-[#0057FF] to-[#0057FF]/80 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="lucide lucide-mouse-pointer2 lucide-mouse-pointer-2 w-8 h-8 text-white"
                          aria-hidden="true"
                        >
                          <path
                            d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z"
                          ></path>
                        </svg>
                      </div>
                      <div class="flex-1">
                        <h3
                          class="text-card-foreground mb-3 group-hover:text-[#0057FF] transition-colors duration-300"
                        >
                        {{ t('howItHelps.items.groups') }}
                        </h3>
                        <p class="text-muted-foreground leading-relaxed">
                          {{ t('howItHelps.items.groupsDesc') }}
                        </p>
                        <div
                          class="w-0 h-px bg-gradient-to-r from-[#0057FF] to-[#FF6B00] mt-4 group-hover:w-full transition-all duration-500"
                        ></div>
                      </div>
                    </div>
                    <div class="flex items-start space-x-6 group">
                      <div
                        class="w-16 h-16 rounded-xl bg-gradient-to-r from-[#FF6B00] to-[#FF6B00]/80 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="lucide lucide-message-square w-8 h-8 text-white"
                          aria-hidden="true"
                        >
                          <path
                            d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"
                          ></path>
                        </svg>
                      </div>
                      <div class="flex-1">
                        <h3
                          class="text-card-foreground mb-3 group-hover:text-[#0057FF] transition-colors duration-300"
                        >
                        {{ t('howItHelps.items.forum') }}
                        </h3>
                        <p class="text-muted-foreground leading-relaxed">
                          {{ t('howItHelps.items.forumDesc') }}
                        </p>
                        <div
                          class="w-0 h-px bg-gradient-to-r from-[#0057FF] to-[#FF6B00] mt-4 group-hover:w-full transition-all duration-500"
                        ></div>
                      </div>
                    </div>
                    <div class="flex items-start space-x-6 group">
                      <div
                        class="w-16 h-16 rounded-xl bg-gradient-to-r from-[#0057FF] to-[#FF6B00] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="lucide lucide-chart-column w-8 h-8 text-white"
                          aria-hidden="true"
                        >
                          <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
                          <path d="M18 17V9"></path>
                          <path d="M13 17V5"></path>
                          <path d="M8 17v-3"></path>
                        </svg>
                      </div>
                      <div class="flex-1">
                        <h3
                          class="text-card-foreground mb-3 group-hover:text-[#0057FF] transition-colors duration-300"
                        >
                        {{ t('howItHelps.items.reports') }}
                        </h3>
                        <p class="text-muted-foreground leading-relaxed">
                          {{ t('howItHelps.items.reportsDesc') }}
                        </p>
                        <div
                          class="w-0 h-px bg-gradient-to-r from-[#0057FF] to-[#FF6B00] mt-4 group-hover:w-full transition-all duration-500"
                        ></div>
                      </div>
                    </div>
                    <div
                      class="bg-gradient-to-r from-[#0057FF]/10 to-[#FF6B00]/10 border border-[#0057FF]/20 rounded-xl p-6 mt-8"
                    >
                      <div class="flex items-center mb-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="lucide lucide-circle-check-big w-6 h-6 text-[#0057FF] mr-3"
                          aria-hidden="true"
                        >
                          <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                          <path d="m9 11 3 3L22 4"></path></svg
                        ><span class="font-semibold text-[#0057FF]"
                          >{{ t('howItHelps.items.resultTitle') }}</span
                        >
                      </div>
                      <p class="text-card-foreground font-medium">
                        {{ t('howItHelps.items.resultDesc') }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="absolute top-32 right-20 w-px h-32 bg-gradient-to-b from-[#0057FF]/10 to-transparent"
              ></div>
              <div
                class="absolute bottom-32 left-20 w-24 h-px bg-gradient-to-r from-[#FF6B00]/10 to-transparent"
              ></div>
            </section>
            <section
              id="cases"
              class="section-spacing  relative overflow-hidden"
            ><!-- bg-background -->
              <div class="container-corporate">
                <div class="text-center mb-20">
                  <div class="flex items-center justify-center mb-6">
                    <div
                      class="w-12 h-px bg-gradient-to-r from-transparent to-[#FF6B00]"
                    ></div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-building2 lucide-building-2 w-6 h-6 text-[#FF6B00] mx-4"
                      aria-hidden="true"
                    >
                      <path
                        d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"
                      ></path>
                      <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path>
                      <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path>
                      <path d="M10 6h4"></path>
                      <path d="M10 10h4"></path>
                      <path d="M10 14h4"></path>
                      <path d="M10 18h4"></path>
                    </svg>
                    <div
                      class="w-12 h-px bg-gradient-to-l from-transparent to-[#FF6B00]"
                    ></div>
                  </div>
                  <h2 class="text-foreground mb-6">
                    {{ t('case.title') }}
                  </h2>
                  <p class="text-muted-foreground max-w-2xl mx-auto text-xl">
                    {{ t('case.subtitle') }}
                  </p>
                </div>
                <div class="max-w-5xl mx-auto">
                  <div
                    class="bg-card border border-border rounded-2xl overflow-hidden shadow-2xl" 
                   data-aos="zoom-in-up"
                  >
                    <div
                      class="bg-gradient-to-r from-[#0057FF]/5 to-[#FF6B00]/5 border-b border-border p-8"
                    >
                      <div
                        class="flex flex-col lg:flex-row items-start lg:items-center justify-between"
                      >
                        <div class="flex items-center space-x-6 mb-6 lg:mb-0">
                          <div
                            class="w-20 h-20 bg-gradient-to-r from-[#0057FF] to-[#FF6B00] rounded-2xl flex items-center justify-center text-white font-bold text-3xl shadow-lg"
                          >
                            U
                          </div>
                          <div>
                            <h3
                              class="text-2xl font-bold text-card-foreground mb-2"
                            >
                            {{ t('case.center') }}
                            </h3>
                            <div class="flex items-center space-x-1 mb-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                class="lucide lucide-star w-5 h-5 fill-yellow-400 text-yellow-400"
                                aria-hidden="true"
                              >
                                <path
                                  d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"
                                ></path></svg
                              ><svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                class="lucide lucide-star w-5 h-5 fill-yellow-400 text-yellow-400"
                                aria-hidden="true"
                              >
                                <path
                                  d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"
                                ></path></svg
                              ><svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                class="lucide lucide-star w-5 h-5 fill-yellow-400 text-yellow-400"
                                aria-hidden="true"
                              >
                                <path
                                  d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"
                                ></path></svg
                              ><svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                class="lucide lucide-star w-5 h-5 fill-yellow-400 text-yellow-400"
                                aria-hidden="true"
                              >
                                <path
                                  d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"
                                ></path></svg
                              ><svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                class="lucide lucide-star w-5 h-5 fill-yellow-400 text-yellow-400"
                                aria-hidden="true"
                              >
                                <path
                                  d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"
                                ></path>
                              </svg>
                            </div>
                            <p class="text-muted-foreground">
                              {{ t('case.description') }}
                            </p>
                          </div>
                        </div>
                        <div class="text-center lg:text-right">
                          <div
                            class="w-16 h-16 bg-gradient-to-r from-[#0057FF] to-[#FF6B00] rounded-xl flex items-center justify-center mb-3 mx-auto lg:mx-0"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              class="lucide lucide-trending-up w-8 h-8 text-white"
                              aria-hidden="true"
                            >
                              <path d="M16 7h6v6"></path>
                              <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                            </svg>
                          </div>
                          <div class="text-4xl font-bold text-[#0057FF] mb-1">
                            +35%
                          </div>
                          <div class="text-muted-foreground font-medium">
                            {{ t('case.growth.label') }}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="p-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
                      <div class="text-center group">
                        <div
                          class="w-16 h-16 bg-[#0057FF]/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-[#0057FF]/20 transition-colors"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="lucide lucide-users w-8 h-8 text-[#0057FF]"
                            aria-hidden="true"
                          >
                            <path
                              d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"
                            ></path>
                            <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                            <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                            <circle cx="9" cy="7" r="4"></circle>
                          </svg>
                        </div>
                        <div class="text-3xl font-bold text-[#0057FF] mb-2">
                          +35%
                        </div>
                        <div class="text-muted-foreground font-medium">
                          {{ t('case.growth.period') }}
                        </div>
                        <div class="text-sm text-muted-foreground mt-1">
                          {{ t('case.growth.fromTo') }}
                        </div>
                      </div>
                      <div class="text-center group">
                        <div
                          class="w-16 h-16 bg-[#FF6B00]/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-[#FF6B00]/20 transition-colors"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="lucide lucide-clock w-8 h-8 text-[#FF6B00]"
                            aria-hidden="true"
                          >
                            <path d="M12 6v6l4 2"></path>
                            <circle cx="12" cy="12" r="10"></circle>
                          </svg>
                        </div>
                        <div class="text-3xl font-bold text-[#FF6B00] mb-2">
                          50ч
                        </div>
                        <div class="text-muted-foreground font-medium">
                          {{ t('case.timeSaving.label') }}
                        </div>
                        <div class="text-sm text-muted-foreground mt-1">
                          {{ t('case.timeSaving.desc') }}
                        </div>
                      </div>
                      <div class="text-center group">
                        <div
                          class="w-16 h-16 bg-green-500/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-green-500/20 transition-colors"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="lucide lucide-dollar-sign w-8 h-8 text-green-500"
                            aria-hidden="true"
                          >
                            <line x1="12" x2="12" y1="2" y2="22"></line>
                            <path
                              d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"
                            ></path>
                          </svg>
                        </div>
                        <div class="text-3xl font-bold text-green-500 mb-2">
                          +40%
                        </div>
                        <div class="text-muted-foreground font-medium">
                          {{ t('case.revenue.label') }}
                        </div>
                        <div class="text-sm text-muted-foreground mt-1">
                          {{ t('case.desc.label') }}
                        </div>
                      </div>
                    </div>
                    <div class="bg-muted/50 p-8 border-t border-border">
                      <blockquote
                        class="text-card-foreground text-lg leading-relaxed mb-6 border-l-4 border-[#0057FF] pl-6 italic"
                      >
                      {{ t('case.quote') }}
                      </blockquote>
                      <div
                        class="flex flex-col lg:flex-row items-start lg:items-center justify-between"
                      >
                        <div>
                          <div class="font-semibold text-card-foreground">
                            {{ t('case.author') }}
                          </div>
                          <div class="text-muted-foreground">
                            {{ t('case.position') }}
                          </div>
                        </div>
                        <div class="text-right mt-4 lg:mt-0">
                          <div class="text-sm text-muted-foreground">
                            {{ t('case.implementation') }}
                          </div>
                          <div class="text-sm text-[#0057FF] font-medium">
                            {{ t('case.date') }}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="mt-20 bg-gradient-to-r from-[#0057FF] to-[#FF6B00] rounded-2xl p-12 text-white relative overflow-hidden"
                >
                  <div class="relative z-10">
                    <h3 class="text-2xl font-bold mb-2 text-center">
                      {{ t('process.title') }}
                    </h3>
                    <p
                      class="text-white/90 text-center mb-12 max-w-3xl mx-auto"
                    >
                    {{ t('process.subtitle') }}
                    </p>
                    <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
                      <div class="text-center group relative" data-aos="zoom-in-up">
                        <div
                          class="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 transition-colors backdrop-blur-sm"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="lucide lucide-target w-8 h-8 text-white"
                            aria-hidden="true"
                          >
                            <circle cx="12" cy="12" r="10"></circle>
                            <circle cx="12" cy="12" r="6"></circle>
                            <circle cx="12" cy="12" r="2"></circle>
                          </svg>
                        </div>
                        <div class="text-xl font-bold mb-2">{{ t('process.steps.stage') }} 1</div>
                        <div class="text-white/90 font-medium mb-2">
                          {{ t('process.steps.analysis.title') }}
                        </div>
                        <div class="text-sm text-white/80">
                          {{ t('process.steps.analysis.desc') }}
                        </div>
                        <div
                          class="hidden md:block absolute top-8 left-full w-8 h-px bg-white/30 transform translate-x-4"
                        ></div>
                      </div>
                      <div class="text-center group relative" data-aos="zoom-in-up">
                        <div
                          class="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 transition-colors backdrop-blur-sm"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="lucide lucide-settings w-8 h-8 text-white"
                            aria-hidden="true"
                          >
                            <path
                              d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"
                            ></path>
                            <circle cx="12" cy="12" r="3"></circle>
                          </svg>
                        </div>
                        <div class="text-xl font-bold mb-2">{{ t('process.steps.stage') }} 2</div>
                        <div class="text-white/90 font-medium mb-2">
                          {{ t('process.steps.integration.title') }}
                        </div>
                        <div class="text-sm text-white/80">
                          {{ t('process.steps.integration.desc') }}
                        </div>
                        <div
                          class="hidden md:block absolute top-8 left-full w-8 h-px bg-white/30 transform translate-x-4"
                        ></div>
                      </div>
                      <div class="text-center group relative" data-aos="zoom-in-up">
                        <div
                          class="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 transition-colors backdrop-blur-sm"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="lucide lucide-circle-check-big w-8 h-8 text-white"
                            aria-hidden="true"
                          >
                            <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                            <path d="m9 11 3 3L22 4"></path>
                          </svg>
                        </div>
                        <div class="text-xl font-bold mb-2">{{ t('process.steps.stage') }} 3</div>
                        <div class="text-white/90 font-medium mb-2">
                          {{ t('process.steps.training.title') }}
                        </div>
                        <div class="text-sm text-white/80">
                          {{ t('process.steps.training.desc') }}
                        </div>
                        <div
                          class="hidden md:block absolute top-8 left-full w-8 h-px bg-white/30 transform translate-x-4"
                        ></div>
                      </div>
                      <div class="text-center group" data-aos="zoom-in-up">
                        <div
                          class="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 transition-colors backdrop-blur-sm"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="lucide lucide-rocket w-8 h-8 text-white"
                            aria-hidden="true"
                          >
                            <path
                              d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"
                            ></path>
                            <path
                              d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"
                            ></path>
                            <path
                              d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"
                            ></path>
                            <path
                              d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"
                            ></path>
                          </svg>
                        </div>
                        <div class="text-xl font-bold mb-2">{{ t('process.steps.stage') }} 4</div>
                        <div class="text-white/90 font-medium mb-2">
                          {{ t('process.steps.launch.title') }}
                        </div>
                        <div class="text-sm text-white/80">
                          {{ t('process.steps.launch.desc') }}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="absolute top-0 left-0 w-full h-full opacity-10">
                    <div
                      class="absolute top-8 left-8 w-24 h-24 border-2 border-white rounded-xl rotate-12"
                    ></div>
                    <div
                      class="absolute bottom-8 right-8 w-32 h-32 border border-white rounded-full"
                    ></div>
                    <div
                      class="absolute top-1/2 left-1/4 w-16 h-16 border-2 border-white rounded-lg -rotate-12"
                    ></div>
                    <div
                      class="absolute top-1/4 right-1/4 w-20 h-20 border border-white rounded-xl rotate-45"
                    ></div>
                  </div>
                </div>
              </div>
              <div
                class="absolute top-20 left-10 w-px h-40 bg-gradient-to-b from-[#0057FF]/20 to-transparent"
              ></div>
              <div
                class="absolute bottom-20 right-10 w-32 h-px bg-gradient-to-l from-[#FF6B00]/20 to-transparent"
              ></div>
            </section>
            <section class="section-spacing  relative overflow-hidden"><!-- bg-card -->
              <div class="container-corporate" data-aos="zoom-in-up">
                <div class="max-w-4xl mx-auto text-center relative z-10">
                  <div class="flex items-center justify-center mb-8">
                    <div
                      class="w-20 h-20 bg-gradient-to-r from-[#0057FF] to-[#FF6B00] rounded-2xl flex items-center justify-center shadow-xl"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="lucide lucide-rocket w-10 h-10 text-white"
                        aria-hidden="true"
                      >
                        <path
                          d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"
                        ></path>
                        <path
                          d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"
                        ></path>
                        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
                        <path
                          d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <h2 class="text-card-foreground mb-6">
                    {{ t('trial.headline') }}
                  </h2>
                  <p
                    class="text-muted-foreground text-xl mb-12 max-w-3xl mx-auto leading-relaxed"
                  >
                  {{ t('trial.subheadline') }}
                  </p>
                  <div
                    class="flex flex-col sm:flex-row gap-6 justify-center items-center"
                  >
                    <button
                      data-slot="button"
                      class="inline-flex items-center justify-center gap-2 whitespace-nowrap disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive h-10 rounded-md has-[>svg]:px-4 bg-[#0057FF] hover:bg-[#FF6B00] text-white px-10 py-6 text-xl font-semibold group transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                    {{ t('trial.startTrial') }}<svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="lucide lucide-arrow-right w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform"
                        aria-hidden="true"
                      >
                        <path d="M5 12h14"></path>
                        <path d="m12 5 7 7-7 7"></path>
                      </svg>
                    </button>
                    <div class="text-center sm:text-left">
                      <div class="text-muted-foreground text-sm">
                        ✓ {{ t('trial.startTrial') }}
                      </div>
                      <div class="text-muted-foreground text-sm">
                        ✓ {{ t('trial.trialPeriod') }}
                      </div>
                      <div class="text-muted-foreground text-sm">
                        ✓ {{ t('trial.migrationHelp') }}
                      </div>
                    </div>
                  </div>
                  <div class="mt-16 pt-8 border-t border-border">
                    <div
                      class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
                    >
                      <div>
                        <div class="text-2xl font-bold text-[#0057FF] mb-2">
                          30 {{ t('trial.labels.days') }}
                        </div>
                        <div class="text-muted-foreground">
                          {{ t('trial.labels.fullImplementation') }}
                        </div>
                      </div>
                      <div>
                        <div class="text-2xl font-bold text-[#0057FF] mb-2">
                          24/7
                        </div>
                        <div class="text-muted-foreground">{{ t('trial.labels.supportShort') }}</div>
                      </div>
                      <div>
                        <div class="text-2xl font-bold text-[#0057FF] mb-2">
                          99.9%
                        </div>
                        <div class="text-muted-foreground">{{ t('trial.labels.uptime') }}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="absolute top-1/4 left-10 w-32 h-px bg-gradient-to-r from-[#0057FF]/20 to-transparent"
              ></div>
              <div
                class="absolute bottom-1/4 right-10 w-px h-24 bg-gradient-to-b from-[#FF6B00]/20 to-transparent"
              ></div>
              <div
                class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-[#0057FF]/5 rounded-full"
              ></div>
            </section>
          </main>
          <footer
            id="contact"
            class="bg-background border-t border-border pt-20 pb-8"
          >
            <div class="container-corporate" data-aos="zoom-in-up">
              <div class="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
                <div>
                  <div class="flex items-center space-x-3 mb-8">
                    <div class="relative w-12 h-12">
                      <img src="@/assets/Vion.png" alt="logo">
                    </div>
                    <span class="text-2xl font-bold text-foreground">VION</span>
                  </div>
                  <h3 class="mb-6 text-foreground">{{ t('contacts.title') }}</h3>
                  <div class="space-y-4">
                    <div class="flex items-center space-x-4">
                      <div
                        class="w-10 h-10 bg-[#FF6B00]/10 rounded-lg flex items-center justify-center"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="lucide lucide-phone w-5 h-5 text-[#FF6B00]"
                          aria-hidden="true"
                        >
                          <path
                            d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"
                          ></path>
                        </svg>
                      </div>
                      <div>
                        <div class="text-foreground font-medium">
                          +998 93 101 79 97
                        </div>
                        <div class="text-muted-foreground text-sm">
                          {{ t('contacts.calls') }} 9:00-18:00
                        </div>
                      </div>
                    </div>
                    <div class="flex items-center space-x-4">
                      <div
                        class="w-10 h-10 bg-[#0057FF]/10 rounded-lg flex items-center justify-center"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="lucide lucide-mail w-5 h-5 text-[#0057FF]"
                          aria-hidden="true"
                        >
                          <path
                            d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"
                          ></path>
                          <rect
                            x="2"
                            y="4"
                            width="20"
                            height="16"
                            rx="2"
                          ></rect>
                        </svg>
                      </div>
                      <div>
                        <div class="text-foreground font-medium">
                          info@vion.uz
                        </div>
                        <div class="text-muted-foreground text-sm">
                          {{ t('contacts.responseTime') }}
                        </div>
                      </div>
                    </div>
                    <div class="flex items-center space-x-4">
                      <div
                        class="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="lucide lucide-map-pin w-5 h-5 text-green-500"
                          aria-hidden="true"
                        >
                          <path
                            d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"
                          ></path>
                          <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                      </div>
                      <div>
                        <div class="text-foreground font-medium">
                          {{ t('contacts.address') }}
                        </div>
                        <div class="text-muted-foreground text-sm">
                          {{ t('contacts.country') }}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 class="mb-6 text-foreground">{{ t('contacts.navigation.navig') }}</h3>
                  <div class="space-y-3">
                    <a
                      href="#home"
                      class="block text-muted-foreground hover:text-[#0057FF] font-medium transition-colors duration-200 group"
                      ><span
                        class="border-b border-transparent group-hover:border-[#0057FF]/30 pb-1"
                        >{{ t('contacts.navigation.home') }}</span
                      ></a
                    ><a
                      href="#solutions"
                      class="block text-muted-foreground hover:text-[#0057FF] font-medium transition-colors duration-200 group"
                      ><span
                        class="border-b border-transparent group-hover:border-[#0057FF]/30 pb-1"
                        >{{ t('contacts.navigation.solutions') }}</span
                      ></a
                    ><a
                      href="#cases"
                      class="block text-muted-foreground hover:text-[#0057FF] font-medium transition-colors duration-200 group"
                      ><span
                        class="border-b border-transparent group-hover:border-[#0057FF]/30 pb-1"
                        >{{ t('contacts.navigation.cases') }}</span
                      ></a
                    >
                  </div>
                  <div class="mt-8 pt-6 border-t border-border">
                    <div class="space-y-3">
                      <a
                        href="#"
                        class="block text-muted-foreground hover:text-[#FF6B00] text-sm transition-colors"
                        >{{ t('contacts.navigation.support') }}</a
                      ><a
                        href="#"
                        class="block text-muted-foreground hover:text-[#FF6B00] text-sm transition-colors"
                        >{{ t('contacts.navigation.knowledgeBase') }}</a
                      ><a
                        href="#"
                        class="block text-muted-foreground hover:text-[#FF6B00] text-sm transition-colors"
                        >{{ t('contacts.navigation.apiDocs') }}</a
                      >
                    </div>
                  </div>
                </div>
                <div>
                  <h3 class="mb-6 text-foreground">{{ t('contacts.newsletterTitle') }}</h3>
                  <p class="text-muted-foreground mb-6 leading-relaxed">
                    {{ t('contacts.newsletterDesc') }}</p>
                  <div class="space-y-4">
                    <div class="flex space-x-3">
                      <input
                        type="email"
                        data-slot="input"
                        class="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 flex h-9 w-full min-w-0 rounded-md border px-3 py-1 text-base transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-input-background border-border text-foreground placeholder-muted-foreground flex-1"
                        :placeholder="t('contacts.emailPlaceholder')"
                      /><button
                        data-slot="button"
                        class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive text-primary-foreground h-9 py-2 has-[>svg]:px-3 bg-[#0057FF] hover:bg-[#FF6B00] px-4 transition-all duration-300"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="lucide lucide-send w-5 h-5"
                          aria-hidden="true"
                        >
                          <path
                            d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"
                          ></path>
                          <path d="m21.854 2.147-10.94 10.939"></path>
                        </svg>
                      </button>
                    </div>
                    <p class="text-muted-foreground text-xs">
                      {{ t('contacts.consent') }}
                    </p>
                  </div>
                  <div class="flex space-x-3 mt-8">
                    <div
                      class="w-10 h-10 bg-muted hover:bg-[#0057FF] rounded-lg flex items-center justify-center transition-colors cursor-pointer"
                    >
                      <div class="w-5 h-5 rounded">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="w-5 h-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path d="M22 2 11 13" />
                          <path
                            d="M22 2 15 22a.55.55 0 0 1-1.05.05L9.5 13.5 2 10.5a.55.55 0 0 1 .05-1.05L22 2z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div
                      class="w-10 h-10 bg-muted hover:bg-[#0057FF] rounded-lg flex items-center justify-center transition-colors cursor-pointer"
                    >
                      <div class="w-5 h-5  rounded">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="w-5 h-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                          <path
                            d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
                          ></path>
                          <line x1="17.5" y1="6.5" x2="17.5" y2="6.5"></line>
                        </svg>
                      </div>
                    </div>
                    <div
                      class="w-10 h-10 bg-muted hover:bg-[#0057FF] rounded-lg flex items-center justify-center transition-colors cursor-pointer"
                    >
                      <div class="w-5 h-5 rounded">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="w-5 h-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path
                            d="M22.54 6.42a2.78 2.78 0 0 0-1.95-2C18.88 4 12 4 12 4s-6.88 0-8.59.42a2.78 2.78 0 0 0-1.95 2A29.94 29.94 0 0 0 1 12a29.94 29.94 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 2C5.12 20 12 20 12 20s6.88 0 8.59-.42a2.78 2.78 0 0 0 1.95-2A29.94 29.94 0 0 0 23 12a29.94 29.94 0 0 0-.46-5.58z"
                          ></path>
                          <polygon
                            points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"
                          ></polygon>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="border-t border-border pt-8">
                <div
                  class="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0"
                >
                  <div class="text-muted-foreground">
                    <span class="font-medium">VION</span> © 2025 | {{ t('contacts.rights') }}
                  </div>
                  <div
                    class="flex flex-wrap justify-center lg:justify-end space-x-6 text-sm text-muted-foreground"
                  >
                    <a href="#" class="hover:text-[#0057FF] transition-colors"
                      >{{ t('contacts.privacy') }}</a
                    ><a href="#" class="hover:text-[#0057FF] transition-colors"
                      >{{ t('contacts.terms') }}</a
                    ><a href="#" class="hover:text-[#0057FF] transition-colors"
                      >{{ t('contacts.offer') }}</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import Tsparticle from './components/Tsparticle.vue';

  import { ref, onMounted, onBeforeUnmount } from 'vue'
  import { useI18n } from 'vue-i18n'

  const isMenuOpen = ref(false)
  const isLight = ref(false);


  function toggleTheme() {
    isLight.value = !isLight.value;
    document.documentElement.classList.toggle("light", isLight.value);
  }

  // i18n
  const { locale, t } = useI18n({ useScope: 'global' })

  // dropdown state
  const open = ref(false)
  const root = ref(null)

  // supported languages: code -> visible label
  const langs = {
    uz: 'O‘zbekcha',
    ru: 'Русский',
    en: 'English'
  }

  // little descriptions (optional, professional touch)
  const langDescription = {}

  // emoji map for quick visual indicator
  const langEmoji = {
    uz: '🇺🇿',
    ru: '🇷🇺',
    en: '🇬🇧'
  }

  // reactive current code (2-letter)
  const current = ref(locale.value || 'uz') // loyiha hozir rus tilida ekan, default rus

  // open/close
  function toggleDropdown() {
    open.value = !open.value
  }

  function closeDropdown() {
    open.value = false
  }

  function selectLocale(code) {
    if (current.value === code) {
      closeDropdown()
      return
    }

    // set vue-i18n locale
    locale.value = code
    current.value = code

    // persist
    try {
      localStorage.setItem('locale', code)
    } catch (e) { /* ignore */ }

    // update document lang for accessibility/SEO
    document.documentElement.lang = code

    closeDropdown()
  }

  // click outside handler
  function onClickOutside(e) {
    if (!root.value) return
    if (!root.value.contains(e.target)) closeDropdown()
  }

  // ESC handler
  function onKeydown(e) {
    if (e.key === 'Escape') closeDropdown()
  }

  onMounted(() => {
    // restore saved locale
    const saved = localStorage.getItem('locale')
    if (saved && Object.keys(langs).includes(saved)) {
      locale.value = saved
      current.value = saved
      document.documentElement.lang = saved
    } else {
      // ensure document.lang syncs with initial locale
      document.documentElement.lang = current.value
    }

    document.addEventListener('click', onClickOutside)
    document.addEventListener('keydown', onKeydown)
  })

  onBeforeUnmount(() => {
    document.removeEventListener('click', onClickOutside)
    document.removeEventListener('keydown', onKeydown)
  })
</script>

<style lang="css" scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
