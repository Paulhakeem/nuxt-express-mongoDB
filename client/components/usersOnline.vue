<template>
  <div> 
    <!-- spinner -->

   

    <!-- spinner -->

    <!--  -->
    <div class="pt-6">
      <div class="flex gap-2">
        <div
          v-for="user in allUsers"
          :key="user.id"
          class="p-5 flex gap-2"
        >
        <div>
          <font-awesome-icon :icon="['fas', 'user']" />
        </div>
          <div>
            <p class="text-gray-800 text-sm font-semibold">
              {{ user.name }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

//
<script setup>

</script>

<style lang="scss" scoped></style>
