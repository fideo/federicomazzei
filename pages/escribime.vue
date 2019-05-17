<template>
  <v-app>
    <v-container
      bg
      fill-height
      grid-list-md
      text-xs-center
    >
      <v-layout
        row
        wrap
      >
        <v-flex x12>
          <v-card>
            <v-container
              grid-list-sm
              fluid
              text-xs-center
            >
              <p class="display-1 text-uppercase">Escribime</p>
              <v-form
                ref="form"
                v-model="valid"
                lazy-validation
              >
                <v-text-field
                  v-model="from_name"
                  :rules="from_nameRules"
                  label="Nombre"
                  required
                ></v-text-field>
                <v-text-field
                  v-model="from_email"
                  :rules="from_emailRules"
                  label="E-mail"
                  hint="Escriba su dirección de correo electrónico que pronto lo contactaremos"
                  required
                ></v-text-field>
                <v-text-field
                  v-model="subject"
                  :rules="subjectRules"
                  label="Asunto"
                  required
                ></v-text-field>
                <v-textarea
                  v-model="message"
                  :rules="messageRules"
                  label="Comentario"
                  value=""
                  hint="Escribanos algo"
                  required
                ></v-textarea>
                <v-alert
                  :value="alert"
                  v-model="alert"
                  type="success"
                  dismissible
                  transition="scale-transition"
                >
                  El correo se ha enviado con éxito
                </v-alert>
                <v-btn
                  :disabled="!valid"
                  :loading="loading"
                  @click="submit"
                  @click.native="loader = 'loading'"
                >
                  enviar
                </v-btn>
                <v-btn @click="clear">limpiar</v-btn>
              </v-form>
            </v-container>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
let emailjs = require("emailjs-com");

export default {
  name: "contactenos",

  data: () => ({
    valid: true,
    from_name: "",
    from_nameRules: [
      v => !!v || "Completar el nombre es obligatorio",
      v => (v && v.length > 3) || "El nombre debe ser mayor a tres caracteres"
    ],
    from_email: "",
    from_emailRules: [
      v => !!v || "Complete el E-mail por favor",
      v => /.+@.+/.test(v) || "E-mail es un campo obligatorio"
    ],
    subject: "",
    subjectRules: [
      v => !!v || "Complete el campo Asunto",
      v => (v && v.length > 3) || "Asunto es un campo obligatorio"
    ],
    message: "",
    messageRules: [v => !!v || "Complete el E-mail por favor"],
    alert: false,
    loader: null,
    loading: false
  }),

  watch: {
    loader() {
      const l = this.loader;
      this[l] = !this[l];
      this.alert = true;
      setTimeout(() => (this[l] = false), 3000);

      this.loader = null;
    }
  },

  created() {
    emailjs.init("user_Tgquq2chz851kmQGGMcgM");
  },

  methods: {
    submit() {
      let data = {
        from_name: this.from_name,
        from_email: this.from_email,
        message: this.message,
        subject: this.subject
      };

      if (this.$refs.form.validate()) {
        console.log("hola me estan por enviar");
        emailjs.send("federicomazzei", "templatefedericomazzei", data).then(
          function(Response) {
            if (Response.text === "OK") {
              //alert("El correo se ha enviado con éxito");
            }
            console.log(
              "SUCCESS. status=%d, text=%s",
              Response.status,
              Response.text
            );
          },
          function(err) {
            alert("Ocurrio un problema al enviar  el correo");
            console.log("FAILDED. error=", err);
          },
          this.$refs.form.reset()
        );
      }
    },
    clear() {
      this.$refs.form.reset();
    }
  }
};
</script>

<style>
</style>
