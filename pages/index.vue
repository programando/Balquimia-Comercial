<template>
  <div
    class="bg-center bg-no-repeat bg-cover font-open"
    style="background-image: url('/images/home/investigacion.webp')"
  >
    <div
      class="h-screen py-10 pb-40 bg-no-repeat bg-cover lg:pt-20"
      style="background-image: url('/images/comunes/malla1.webp')"
    >
      <div class="mt-10">
        <div class="flex justify-center text-4xl font-bold text-white">
          <h2>BALQUIMIA S.A.S</h2>
        </div>
        <div
          class="items-center gap-10 mx-10 mt-10 md:mx-20 lg:mx-24 xl:mx-32 lg:grid lg:grid-cols-2"
        >
          <FraseDiaria></FraseDiaria>

          <div
            class="px-6 py-4 mt-6 bg-white border rounded-lg md:py-8 md:px-12 lg:mt-0"
          >
            <!-- label, titulo y descripcion -->
            <LabelTitle
              title="Ingreso al sistema"
              description="Bienvenid@ por favor ingrese su clave y contraseña"
              align="center"
              color="extra"
            >
            </LabelTitle>

              <div class="mt-4">
                <!-- inputText -->
                <InputBasic
                  type="text"
                  text="jhonjamesmg@hotmail.com"
                  width="w-full"
                  img="user-repo.svg"
                  v-model="form.email" 
                  :errors="errors.email"
                  background="gray"
                ></InputBasic>

                <!-- inputPassword -->
                <div class="mt-3">
                  <InputBasic
                  type="password"
                  text="contraseña"
                  width="w-full"
                  img="candado-cerrado.svg"
                  v-model="form.password" 
                   :errors="errors.password"
                  background="gray"
                ></InputBasic>  
                </div>
              </div>

            <div class="sm:grid sm:grid-cols-5">
              <div class="flex items-center justify-center col-span-3 -ml-4">
                <ButtonBasic
                text="Olvidé mi contraseña o es la primera vez que ingreso y quiero asignar una a mi usuario"
                to=""
                sizeText="small"
              ></ButtonBasic>
              </div>
              
                <div class="flex items-center justify-center col-span-2">
                  <ButtonLoading 
                    @click.prevent="Login" 
                    size="small" 
                    ref="ButtonLoading" 
                    variant="success"
                    variant-type="normal">  Ingresar al sistema
                </ButtonLoading>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import ButtonBasic        from "@/components/library/buttonBasic";
    import ButtonLoading      from "@/components/library/ButtonLoading";
    import FraseDiaria        from "@/components/forms/fraseDiaria";
    import InputBasic         from "@/components/library/InputBasic";
    import LabelTitle         from "@/components/library/LabelTitle";
    
    

    export default {
      //layout: "dashboard",

      components: { ButtonBasic,      ButtonLoading,      InputBasic,     LabelTitle , FraseDiaria },
    
    data: () => ({
        form: {
          email: "jhonjamesmg@hotmail.com",
          password: "123456"
        },
        errors: [ ],
        buttonIsDisabled: false
    }),
    mounted() {
    if (this.$auth.loggedIn) {
        return this.$router.push('/dashboard')
      }
  },

      //laravelSanctum
      	methods: {
          async Login() {
            this.errors = [];
            this.$refs.ButtonLoading.startLoading();
            // Place in a try/catch in case the API errors out
            try {
                await this.$auth.loginWith('laravelSanctum', {  data: this.form  })
               
                .catch(error => {
                  // The actual data returned from the API is in `error.response.data`
                  this.errors = error.response.data.errors;  
                  this.$refs.ButtonLoading.stopLoading(); 
                })
            } catch (e) {
              
            }
          },
  
            clearErrors() { this.errors = [] ; },
    
    }

    }
</script>
