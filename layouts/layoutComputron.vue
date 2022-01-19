<template>
  <div class="font-open">
    <div class="fixed z-20 w-full">
    <header class="bg-white">
      <!-- Icono de la empresa -->
      <div class="flex justify-between -mt-3 lg:mt:0 lg:py-0">
        
        <div class="flex flex-grow lg:flex-grow-0">
          <div class="">
          <nuxt-link to="/dashboard">
            <img
              class="h-16 md:h-20 logo lg:ml-10 lg:h-auto"
              src="/images/comunes/balquimia-logo.png"
              alt="logo"
            />
            </nuxt-link>
          </div>
        </div>

        <div class="flex items-center justify-center mt-6 mr-6">
    
            <h2 Class="text-lg cursor:pointer" @click="$auth.logout()"> Cerrar sistema</h2>
          
            

        </div>
      </div>
    </header>

    <div class="-ml-1 lg:block lg:ml-4">
      <img
        src="/images/comunes/arr.png"
        alt="arr1"
        class="h-7 lg:h-10 lg:mt-0"
      />
    </div>

  </div>


   <div>
    <Nuxt />
  </div>



  </div>
</template>

<script>
  
export default {
  name: "layoutComputron",
    
    data() {
      return {
        
      };
    },
    
    
   created()   {
    
    },

};
</script>

<style>
.logo {
  position: relative;
  left: 6px;
  top: 20px;
  z-index: 100;
}

.logo-full {
  left: 0px;
}
</style>