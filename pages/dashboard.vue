<template>
  <div>
      ESTAMOS EN EL DASHBOARD <br><br>
      {{ $auth.user}}
      <br>
      <button @click="$auth.logout()">  Salir </button>
  </div>
</template>


<script>
export default {
  middleware: ['auth'],
  layout: 'layoutComputron',
}
</script>