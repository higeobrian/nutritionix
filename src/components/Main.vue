<template>
  <div class="Container List">
    <div class="row">
      <div class="col-6">
          <h1>FOOD LIST</h1>
        </div>
      <div class="col-6">
        <input type="text" placeholder="search" v-model="query">
        <button @click="search">SEARCH</button>
        <h3>Search Results</h3>
        <ol>
          <li>
            'foods': 'food_name':
          </li>
        </ol>
        <button @click="">Add to List</button>
      </div>

    </div>


    <div class="row">
      <div class="col-6">
        <h3>NAME:</h3>
        <ol>
          <li>
            'foods': 'food_name':
          </li>
        </ol>
      </div>
    </div>

    <div class="row">
      <div class="col-6">
        <h3>CALORIES:</h3>

        <ol>
          <li>
            'foods': 'nf_calories':
          </li>
        </ol>
      </div>
    </div>

    
  </div>
</template>

<script>
  export default {
    name: 'Main',
    data() {
      return {
        query: ''
      }
    },
    computed: {
      addToList() {
        return this.$store.state.addToList
      }
    },
    methods: {
      search() {
        this.$store.dispatch("search", this.query)
      }
    }

  }
</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /* h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
} */
</style>