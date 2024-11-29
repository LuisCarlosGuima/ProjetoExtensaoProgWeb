<template>
  <v-app-bar 
   app
   color="#1F1F1F"
   dark
   scroll
   flat
   class="app-bar text-caption"
   :elevate-on-scroll="true"
  >
    <v-btn :to="`/`" height="50">
      <img 
        :width="50"
        style="  border-radius: 8px; mix-blend-mode: exclusion; position: relative; z-index: 999;"
        aspect-ratio="16/9"
        src="@/../src/imagens/Logo.png" 
        fixed
      /> 
    </v-btn>
      <!--Menu grande -->
      <v-toolbar class="hidden-md-and-down" color="primary">
        <v-toolbar-items style="width: 93vw;">
          <v-menu v-model="menus['showMenu' + index]" v-for="(item, index) in menuItems" :key="index" offset="-10" transition="slide-y-transition">
            <template v-slot:activator="{ props }">
              <v-btn  v-if="item.visible" v-bind="props" @click="item.children ? '' : openRoute(item.route, item.openingType)" style="text-transform: none;">
                <v-icon v-if="item.children" size="20" color="secondary" icon="mdi-chevron-down" />
                {{ item.title }}
              </v-btn>
            </template>

            <!-- Filho principal -->
            <v-menu v-for="(child, index) in item.children" :key="index" location="end" transition="slide-x-transition" class="mb--position-menu">
              <template v-slot:activator="{ props }">
                <v-btn  v-if="child.visible" @click="child.children ? '' : openRoute(child.route, child.openingType)" style="background-color: #fff; text-transform: none;" v-bind="props" class="rounded-0">
                  <v-icon v-if="child.children" size="20" color="text-black" icon="mdi-chevron-down" />
                  {{ child.title }}
                </v-btn>
              </template>

              <!-- Segundo filho -->
              <v-card v-if="child.children" >
                <v-list>
                  <div v-for="(child2, index) in child.children" :key="index">
                    <v-list-item v-if="child2.visible" @click="openRoute(child2.route, child2.openingType)" link>
                      <v-list-item-title >{{ child2.title }}<v-badge v-if="child2.highlight" dot inline
                          offset-y="-10px"></v-badge>
                      </v-list-item-title>
                    </v-list-item>
                  </div>
                </v-list>
              </v-card>
            </v-menu>
          </v-menu>
          <v-spacer></v-spacer>
        </v-toolbar-items>
      </v-toolbar>
      
      <!--Menu sanduiche -->
      <v-menu @click.prevent="closeMenu = false" :close-on-content-click="closeMenu" transition="slide-y-transition">
        <template v-slot:activator="{ props }">
          <v-app-bar-nav-icon color="secondary" v-bind="props" class="ml-5 d-flex d-md-flex d-lg-none" />
        </template>
        <v-card>
          <v-list expand>
            <div v-for="(item, index) in menuItems" :key="index">

              <!-- Primeiro nivel sem filhos -->
              <v-list-item  v-if="item.visible && !item.children" @click="openRoute(item.route, item.openingType), closeMenu = true" link>{{ item.title }}</v-list-item>

              <!-- Primeiro nivel com filhos -->
              <v-list-group  v-else-if="item.visible" color="secondary" @click="closeMenu = false">
                <template v-slot:activator="{ props }">
                  <v-list-item v-bind="props">{{ item.title }}</v-list-item>
                </template>

                <div v-for="(child, index) in item.children" :key="index">
                  <!-- Segundo nivel sem filho -->
                  <v-list-item v-if="child.visible && !child.children" @click="openRoute(child.route, child.openingType), closeMenu = true" link>{{ child.title }}</v-list-item>

                  <!-- Segundo nivel com filhos -->
                  <v-list-group v-else-if="child.visible" color="secondary" @click="closeMenu = false">
                    <template v-slot:activator="{ props }">
                      <v-list-item v-bind="props" class="ml-2 font-weight-bold">{{ child.title }}</v-list-item>
                    </template>

                    <!-- Terceiro nivel -->
                    <div v-for="(child2, index) in child.children" :key="index">
                      <v-list-item v-if="child2.visible" @click="openRoute(child2.route, child2.openingType), closeMenu = true" link>{{ child2.title }}</v-list-item>
                    </div>
                  </v-list-group>

                </div>
              </v-list-group>
            </div>
          </v-list>
        </v-card>
      </v-menu>
  </v-app-bar>
</template>
 
<script>
export default {
  name: 'Header',

  data(){
    return {
      login: null,
      closeMenu: false,
      showMenu: true,
      menuItems: [],
      menus: [],
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      const appBar = document.querySelector('.app-bar');
      if (window.scrollY > 50) {
        appBar.classList.add('is-scrolled');
      } else {
        appBar.classList.remove('is-scrolled');
      }
    },

    iniMenu() {
      if (this.menuItems === null || this.menuItems.length == 0) {
        this.menuItems = [
          {
            title: 'Inicio',
            route: `/home`,
            visible: true,
            openingType: 0,
          },
          {
            title: 'Serviços',
            visible: true,
            openingType: 0,
            children: [
              {
                title: 'Gerenciamento Inteligente',
                route: `/gerenciamento-inteligente`,
                openingType: 0,
                visible: true
              },
              {
                title: 'Logotipo',
                route: `/logotipo`,
                openingType: 0,
                visible: true
              },
            ]
          },
          {
            title: 'Contato',
            route: `/contato`,
            visible: true,
            openingType: 0,
          },
          {
            title: 'Sobre',
            route: `/sobre`,
            visible: true,
            openingType: 0,
          },
        ];
      }
    },

    openRoute(link, openingType) {
      this.menus.showMenu0 = false;
      this.menus.showMenu1 = false;
      this.menus.showMenu2 = false;
      this.menus.showMenu3 = false;
      this.menus.showMenu4 = false;
      this.menus.showMenu5 = false;
      this.menus.showMenu6 = false;

      if (typeof openingType === 'undefined' || openingType === 0) {
        this.$router.push(link);
        return false;
      }
      else if (openingType === 1) {
        window.open(link, '_blank');
      }
    },
  },
  created() {
    this.iniMenu()
  }
};
</script>
<style scoped>

</style>