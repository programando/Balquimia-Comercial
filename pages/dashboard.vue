<template>
  <div class="font-open">
    <div class="min-h-screen px-4 pb-40 bg-gray-100 pt-28">
      <div class="mx-2">
        <p class="mx-10 text-lg font-bold text-center lg:text-xl">Departamento comercial</p>
        <div
          class="grid grid-cols-1 gap-8 mx-6 mt-6 lg:gap-2 lg:mx-0 xl:mx-4 xl:gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
        >
          <CardLeftImage   
                  text    = "Cartera  clientes"
                  urlImg  = "/images/dashboard/cartera.svg"
                  urlLink = "/cartera">
          </CardLeftImage>

          <CardLeftImage   
                text    = "Registro de pedidos"
                urlImg  = "/images/dashboard/web-search.svg"
                urlLink = "/pedidos/registro" >
          </CardLeftImage>

          <CardLeftImage   
                text    = "Ventas por clientes"
                urlImg  = "/images/dashboard/sales.svg"
                urlLink = "/">
          </CardLeftImage>

          <CardLeftImage  
                text    = "Lista de precios"
                urlImg  = "/images/dashboard/lista-precios.svg"
                urlLink = "/productos-precios" >
          </CardLeftImage>

          <CardLeftImage  
                text    = "Autorización de pedidos"
                urlImg  =  "/images/dashboard/autorizacion-cartera.svg"
                urlLink = "/">
          </CardLeftImage>

 

        </div>
        
        
        
      </div>
    </div>
  </div>
</template>
<script>
import CardLeftImage from "@/components/library/cardLeftImage";

//import LineChart from "@/components/vueChart/lineChart"
export default {
  layout: "layoutComputron",
  name: "dashboard",
  components: {
    CardLeftImage
  },
    
  data() {
    return {

    };
  },

  middleware: ['auth'],

  
};
</script>
