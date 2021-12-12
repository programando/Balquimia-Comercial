<template>
  <div class="relative flex flex-col">
    <div
      @click="userBoton"
      class="flex items-center mx-1 cursor-pointer md:mx-2"
    >
      <img
        class="h-8 md:h-12"
        src="/images/components/user-repo.svg"
        alt=""
      />
    </div>
    
    <div v-if="menuUser" class="absolute flex flex-col p-2 pt-1 bg-gray-100 border rounded-lg w-44 top-10 md:top-14 lg:top-16 right-1 border-primary" >
        
        
        <div class="my-2 -mx-2 border-b-2 border-gray-200"></div>
        <UserLink textMenu="Cerrar Sistema" to="/" image="user-repo.svg"     @click="$auth.logout()"></UserLink>  
    </div>
  </div>
</template>

<script>
import UserLink from "@/components/library/userAccountLink";
export default {
  name: "userAccounts",
  data() {
    return {
      menuUser: false
    };
  },
 components : { UserLink },

  methods: {
    userBoton() {
      this.menuUser = !this.menuUser;
    }
  }
};
</script>

<style></style>
