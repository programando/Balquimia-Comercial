<template>
  <div>
  

    <div v-if="$auth.loggedIn">
        usuario logueado, mostrar información <br>
        {{ $auth.user.email}}
        <br>
        <button @click="$auth.logout()"> Salir del sistema </button>
    </div>
    <div v-else>
          <div>
            <nuxt-link to="/login"> Login </nuxt-link>
            </div>
          <div>
            <nuxt-link to="/register"> Register </nuxt-link>
            </div>
    </div>

  </div>
</template>

<script>
export default {
  data :()=> {

  },
 
}
</script>
