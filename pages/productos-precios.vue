<template>
  <div class="pt-40 bg-gray-100 pb-36">
   
 
    <div class="mx-10 h-1/2 ">
        <ProductosListado :productos="items"></ProductosListado>
    </div>
  </div>
</template>

 

<script>
  import Productos        from "@/models/Prdcto";
  import ProductosListado from "@/components/data/productos/listado.vue"
  export default {
    layout: "layoutComputron",
    name: "index",
    components : { ProductosListado },
    data: () => ({
      busqueda: "",
      productos: [],
    }),
    
    mounted() {
        Productos.listaPrecios()
            .then ( response => {
              this.productos     =response.data ;
            })  
    },
    
    computed:{
        items() {
              return this.productos.filter(item => {
              return item.nom_prdcto.toLowerCase().includes(this.busqueda.toLowerCase());
        });
      }, 
    },
};
</script>

<style>
.tr:nth-child(odd){
  background-color: #E5E7EB
}
 
</style>
