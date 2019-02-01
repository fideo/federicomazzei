<template>
  <v-app>
    <v-container
      fluid
      grid-list-md
    >
      <v-layout
        row
        wrap
      >
        <v-flex
          xs12
          class="margenTop"
        >
          <v-container text-xs-center>
            <p class="display-1 text-uppercase">¿Qué se hacer?</p>
            <p class="headline">De todo!!! soy completito... lavar, cocinar, planchar, etc, etc... </p>
            <p class="subheading">- pero dentro de lo que a sistemas se refiere... <kbd>investigo</kbd>, <kbd>estudio</kbd>, <kbd>implemento</kbd> y <kbd>desarrollo</kbd> páginas webs</p>
          </v-container>
        </v-flex>
        <v-flex
          d-flex
          xs12
          md4
          fluid
        >
          <v-card>
            <v-img
              class="white--text"
              height="200px"
              src="/ecommerce.jpg"
            >
              <v-container
                fill-height
                fluid
              >
                <v-layout fill-height>
                  <v-flex
                    xs12
                    align-end
                    flexbox
                  >
                    <span class="headline">E-Commerce</span>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-img>
            <v-card-title>
              <div>
                <span class="grey--text">E-Commerce</span><br>
                <span>Necesitas vender tus productos por internet, desarrollo tu sitio con Prestashop donde podemos agregarles cientos de prestaciones adicionales.</span>
              </div>
            </v-card-title>
          </v-card>
        </v-flex>
        <v-flex
          d-flex
          xs12
          md4
          fluid
        >
          <v-card>
            <v-img
              class="black--text"
              height="200px"
              src="/responsive.jpg"
            >
              <v-container
                fill-height
                fluid
              >
                <v-layout fill-height>
                  <v-flex
                    xs12
                    align-end
                    flexbox
                  >
                    <span class="headline">Diseño Responsive</span>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-img>
            <v-card-title>
              <div>
                <span class="grey--text">Diseño Responsive</span><br>
                <span>Utilizamos Bootstrap para realizar nuestros diseños dandolé una mejor optimización al sitio según el dispositivo con el que se esté visualizando el sitio.</span>
              </div>
            </v-card-title>
          </v-card>
        </v-flex>
        <v-flex
          d-flex
          xs12
          md4
          fluid
        >
          <v-card>
            <v-img
              class="white--text"
              height="200px"
              src="/hosting.jpg"
            >
              <v-container
                fill-height
                fluid
              >
                <v-layout fill-height>
                  <v-flex
                    xs12
                    align-end
                    flexbox
                  >
                    <span class="headline">Hosting - Alojamiento Web</span>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-img>
            <v-card-title>
              <div>
                <span class="grey--text">Hosting - Alojamiento Web</span><br>
                <span>Realizo el hosting de tu sitio dandoté la mejor atención y servicio. Contando con tecnología de última generación otorgada por dattatec.</span>
              </div>
            </v-card-title>
          </v-card>

        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
export default {};
</script>

<style>
</style>
