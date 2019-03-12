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
              src="/images/ecommerce.jpg"
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
                <span>¿Necesitas vender por internet?, desarrollo tu sitio para que puedas exponer tus productos de manera eficiente y clara. Analizamos en conjunto los requerimientos de tu sitio e implemento la mejor opción para tus necesidades.</span>
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
              src="/images/responsive.jpg"
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
                <span>Los sitios webs hoy deben poder visualizarse correctamente tanto en dispositivos moviles como en pc de esctorios, portátiles o tablets; para esto tu sitio tiene que estar optimizado para que pueda verse correctamente en cualquiera de esos formatos.</span>
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
              src="/images/hosting.jpg"
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
                <span>Realizo el hosting de tu sitio dandoté la mejor atención y servicio. Contando con tecnología de última generación. Podés integra tu correo electrónico con gmail manteniendo el nombre de tu dirección web por ejemplo info@tuempresa.com.ar</span>
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
