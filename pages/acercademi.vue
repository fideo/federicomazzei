<template>
  <v-app>
    <v-container
      bg
      grid-list-md
      text-xs-center
    >
      <v-layout
        row
        wrap
        align-center
      >
        <v-flex class="margenTop">
          <p class="display-1 text-uppercase">Este soy yo</p>
          <p class="subheading">Te cuento un poco acerca de mi vida laboral. Ya que para mi vida personal existe Instagram, Twitter y Facebook (ordenadas en forma descendentes en uso)</p>
          <v-timeline>
            <v-timeline-item
              v-for="(historia, index) in historias"
              :key="index"
              color="yellow lighten-2"
              large
            >
              <span slot="opposite">{{historia.referencia}}</span>
              <v-card class="elevation-2">
                <v-card-title>
                  <div class="headline">{{historia.empresa}}</div>
                </v-card-title>
                <v-card-text>
                  {{historia.descripcion}}
                </v-card-text>
              </v-card>
            </v-timeline-item>
          </v-timeline>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    historias: [
      {
        empresa: "Axoft - Argentina",
        referencia: "1999-2007",
        descripcion:
          "Empecé a desarrollar mis conocimientos sobre la tecnología Web en esta compañia; comenzando con páginas realizadas en .ASP y traspazarlas a tecnología .PHP - MySQL."
      },
      {
        empresa: "Cencosud",
        referencia: "2007-2009",
        descripcion:
          "Me especialicé en e-Commers desarrollando día a día un gran habilidad para la venta de productos on line."
      },
      {
        empresa: "Grupo Vi-Da",
        referencia: "2009-2011",
        descripcion:
          "En esta empresa profundicé el conocimiento en SEO y llevé adelante varios proyectos al mismo tiempo, dándome gran habilidad para mantener varias cuentas de pequeñas a grandes."
      },
      {
        empresa: "Cargill SACIC",
        referencia: "2011-2013",
        descripcion:
          "Cargill me dió la habilidad de poder desarrollarme en grandes proyectos para esto utilizamos tecnología acorde a las magnitudes de la empresa; como lo son JAVA - Oracle junto con reporteador BIRT."
      },
      {
        empresa: "HOY SIGO CON VOS",
        referencia: "2013-Actualidad",
        descripcion:
          "Desarrollando páginas Webs con tecnología tales como Meteor, Vue entre otras... este sitio está desarrollado con Nuxt.js"
      }
    ]
  })
};
</script>