<template>
  <div class="pt-40 bg-gray-100 pb-36">
   
    <div class="px-4 py-2 mx-10 lg:mx-20">
      <label class="font-semibold text-extra">Buscar Producto :</label>
      <input
        class="inline w-5/6 px-2 py-1 ml-2 border rounded-lg focus:border-primary focus:outline-none focus:shadow-outline"
        type="text"
        v-model="busqueda"
        placeholder="Buscar"
        
      />
    </div>
    <div class="mx-10 h-1/2 ">
        <ProductosListado :productos="items"></ProductosListado>
    </div>
  </div>
</template>

 

<script>
  import Productos from "@/models/Prdcto";
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
