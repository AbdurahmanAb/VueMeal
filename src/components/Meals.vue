<template>
  <div
    class="grid grid-cols-3 gap-4"
    style="grid-template-columns: repeat(auto-fit, minmax(456px, 1fr))"
  >
    <div class="card cursor-pointer" v-for="meal in meals" :key="meal.idMeal">
      <img :src="meal.strMealThumb" class="w-100 h-90" alt="" />
      <h1 class="text-center text-3xl font-bold text-orange-700 font-serif m-6">
        {{ meal.strMeal }}
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "Meals",
  props: {
    meals: {
      type: Array,
      required: true,
    },
  },
};
</script>
