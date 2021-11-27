<template>
  <div class="p-4">
    <div class="max-w-sm rounded overflow-hidden shadow-lg mb-4">
      <img
        class="w-full"
        src="https://tailwindcss.com/img/card-top.jpg"
        alt="Sunset in the mountains"
      >
      <div class="px-6 py-4 pb-2">
        <div class="text-sm mb-2 font-monserrat">The Coldest monserrat</div>
        <div class="font-bold text-xl mb-2 font-monserrat">The Coldest monserrat</div>

                <div class="text-sm mb-2 font-open">The Coldest Open</div>
        <div class="font-bold text-xl mb-2 font-open">The Coldest Open</div>

        <p
          class="text-gray-700 text-sm"
        >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
      <p class="text-xs"> Párrafo de ejemplo Open sanns </p>
      <p class="text-xs font-monserrat"> Párrafo de ejemplo Open sanns </p>
      </div>
      
      <div class="px-6 py-4">
        <span class="badge mr-2">#photography</span>
        <span class="badge mr-2">#travel</span>
        <span class="badge">#winter</span>
      </div>
    </div>
    <NuxtLink to="about">
      <TButton>About</TButton>
    </NuxtLink>
  </div>
</template>

<style lang="postcss" scoped>
.badge {
  @apply inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700;
  &:hover {
    @apply bg-gray-300;
  }
}
</style>