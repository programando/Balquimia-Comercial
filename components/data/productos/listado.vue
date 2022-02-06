<template>
  <div>
    <div class="px-4 py-2 mx-10 lg:mx-20">
      <label class="font-semibold text-extra">Buscar Producto :</label>
      <input
        class="inline w-5/6 px-2 py-1 ml-2 border rounded-lg focus:border-primary focus:outline-none focus:shadow-outline"
        type="text"
        v-model="busqueda"
        placeholder="Buscar"
        
      />
    </div>


  <table class="w-full text-center">
     <thead class="flex w-full text-xl text-black">
          <tr class="flex w-full ">
            <th class="flex justify-center w-5/12 px-2 py-2 "> Producto </th>
            <th class="flex justify-center w-3/12 px-2 py-2 "> Presentación </th>
            <th class="flex justify-center w-2/12 px-2 py-2 "> %I.V.A. </th>
            <th class="flex justify-center w-2/12 px-2 py-2 " > Precio </th>
            <th class="flex justify-center w-2/12 px-2 py-2 " > Peso Kg. </th>
          </tr>
        </thead> 
        
          <!-- Remove the nasty inline CSS fixed height on production and replace it with a CSS class — this is just for demonstration purposes! -->
          <tbody class="flex flex-col items-center justify-between w-full overflow-y-scroll bg-grey-light" style="height: 50vh;">
                <tr v-for="producto in productos"   :key="producto.id_prdcto"
                     class="flex w-full text-sm bg-white cursor-pointer tr" >
                      <td class="w-7/12 px-2 py-1 text-left border-t border-b border-l border-gray-400" > {{ producto.nom_prdcto | Capitalize }} </td>
                      <td class="w-3/12 px-2 py-1 text-right border border-gray-400">                     {{ producto.nom_prsntcion }}           </td>
                      <td class="w-2/12 px-2 py-1 text-right border border-gray-400">                     {{ producto.prcntje_iva  | NumeroDecimal }} </td>
                      <td class="w-2/12 px-2 py-1 text-right border border-gray-400">                     {{ producto.vr_vta | NumeroEntero}}  </td>
                      <td class="w-2/12 px-2 py-1 text-right border border-gray-400">                     {{ producto.peso_kg  | NumeroDecimal }} </td>
               </tr>			
          </tbody>
	    </table>

  
  </div>
</template>
<script>
export default {
   props: {
        productos     : {
            type: Array,
            default: () => []
        }
   },
    data: () => ({
          busqueda :''
    }),

}
</script>