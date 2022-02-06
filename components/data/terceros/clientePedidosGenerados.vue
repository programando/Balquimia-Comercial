<template>
  <div>
  <div class="flex justify-between">
    <ModalBuscarProductos></ModalBuscarProductos>
    <button class=" px-4 py-1  text-white bg-primary border border-grey-500 rounded hover:bg-secondary mr-4">
         Grabar pedido
    </button>
 </div>
 
  <table class="w-full text-left">
      <thead class="flex w-full text-xs text-white border margen">
        <tr class="flex w-full ">
          <th class="flex justify-center w-1/6 px-2 py-1 border-t border-b border-l border-r border-gray-700 bg-primary"> </th>
          <th class="flex justify-center w-3/6 px-2 py-1 border-t border-b border-r border-gray-700 bg-primary">          Producto          </th>
          <th class="flex justify-center w-2/6 px-2 py-1 border-t border-b border-r border-gray-700 bg-primary">          Presentación      </th>
          <th class="flex justify-center w-2/6 px-2 py-1 border-t border-b border-r border-gray-700 bg-primary">          Cantidad          </th>
          <th class="flex justify-center w-2/6 px-2 py-1 border-t border-b border-r border-gray-700 bg-primary">          $Base             </th>
          <th class="flex justify-center w-2/6 px-2 py-1 border-t border-b border-r border-gray-700 bg-primary">          Flete             </th>
          <th class="flex justify-center w-2/6 px-2 py-1 border-t border-b border-r border-gray-700 bg-primary">          Mayor Vr          </th>
          <th class="flex justify-center w-2/6 px-2 py-1 border-t border-b border-r border-gray-700 bg-primary">          Vr.Unit           </th>
          <th class="flex justify-center w-2/6 px-2 py-1 border-t border-b border-r border-gray-700 bg-primary">          Vr.Total          </th>
        </tr>
      </thead>
      <tbody class="flex flex-col w-full overflow-y-scroll text-xs bg-grey-light" style="height: 50vh;" >
        <tr v-for="pedido in nuevoPedido" :key="pedido.id" class="flex w-full bg-white " >
          <td class="flex items-center justify-center w-1/6 px-2 border-b border-l border-r border-gray-400">
          
            <ButtonIcon urlIcon="/images/dashboard/papelera-de-reciclaje.svg" @click="borrarProducto(pedido)"></ButtonIcon>
          
          </td>
          <td class="flex justify-center w-3/6 px-2 pt-2 border-b border-r border-gray-400">            {{ pedido.producto }}                   </td>
          <td class="w-2/6 px-2 pt-2 text-right border-b border-r border-gray-400">                     {{ pedido.presentacion }}               </td>
          <td class="w-2/6 px-2 pt-2 text-right border-b border-r border-gray-400 ">                    {{ pedido.cantidad }}                   </td>
          <td class="w-2/6 px-2 pt-2 text-right border-b border-r border-gray-400 ">                    {{ pedido.base }}                       </td>
          <td class="w-2/6 px-2 pt-2 text-right border-b border-r border-gray-400 ">                    {{ pedido.flete }}                      </td>
          <td class="w-2/6 px-2 pt-2 text-right border-b border-r border-gray-400 ">                    {{ pedido.mayor }}                      </td>
          <td class="w-2/6 px-2 pt-2 text-right border-b border-r border-gray-400 ">                    {{ pedido.vrUnit }}                     </td>
          <td class="w-2/6 px-2 pt-2 text-right border-b border-r border-gray-400 ">                    {{ pedido.vrTotal }}                    </td>
        </tr>





  


      </tbody>
    </table>
  </div>
</template>

<script>
import ButtonIcon           from '@/components/library/buttonIcon'
import ModalBuscarProductos from "@/components/data/productos/productosModal"
export default {
  name: 'ClientePedidosGenerados',
  components:{
    ButtonIcon, ModalBuscarProductos
  },
  data() {
    return {
      nuevoPedido: [
        {
          id: 0,
          producto: "RAX SHAMPOO",
          presentacion: "20 LTS ORIGINAL",
          cantidad: 6,
          base: "117,311",
          flete: "0",
          mayor: "20,702",
          vrUnit: "138,013",
          vrTotal: "703.866"
        }
      ]
    };  
},
 methods: {
    borrarProducto( data ) {
         alert ("borrar pedido");
    },
  
 }

}
</script>

<style>
.margen {
 margin-right: 1px; 
}

.ancho {
  width: 1324px;
}
</style>