<template>
  <div>
    <h1 class="mt-3 ml-3 text-2xl">  Login</h1>
    <label> Email </label>
    <input type="text"   class ="px-10 py-2 border-2 rounded-lg focus:border-2 focus:outline-none " 
    v-model="form.email">
  
    <label> password </label>
    <input type="password"   class ="px-10 py-2 border-2 rounded-lg focus:border-2 focus:outline-none " 
    v-model="form.password">
  
        <br>
        <br>
        <br>
        <button class="mr-4 text-base font-medium lg:text-lg" @click="Login"> Ingresar al sistema  </button>
  
  </div>
</template>

<script>
export default {
    data: ()=> ({
        form : {
            email : 'jhonjamesmg@hotmail.com' , 
            password : '123456',
        },  
    }) ,

    methods: {
        Login () {
 
           
            this.$auth.loginWith('laravelSanctum', {
              data: {
                  email: this.form.email,
                  password: this.form.password
              }
             },
            );
        },
    }
}
</script>
