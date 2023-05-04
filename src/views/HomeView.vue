<template>
  <main>
    <div>
      <Meals :meals="mealsData" />
    </div>
  </main>
</template>

<script>
import Meals from "../components/Meals.vue";
export default {
  components: {
    Meals,
  },
  props: {
    meals: {
      type: Array,
      required: true,
    },
  },
  methods: {
    async FetchMeals() {
      const response = await fetch(
        "https://www.themealdb.com/api/json/v1/1/search.php?f=b"
      );
      const data = await response.json();
      return data;
    },
  },
  async created() {
    const data = await this.FetchMeals();
    this.mealsData = data.meals;
  },
  data() {
    return {
      mealsData: [],
    };
  },
};
</script>
