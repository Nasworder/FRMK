<template>
    <div class="jobs">
      <h1>Page des jobs</h1>
        <ul>
            <li v-for="job in jobs" :key="job.id">
                <router-link :to="{ name: 'details', params: { id: job.id } }" :title="job.title">{{ job.title }}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'JobsView',
  data () {
    return {
      jobs: [
        {
          id: 1,
          title: 'Développeur web'
        },
        {
          id: 2,
          title: 'Développeur mobile'
        },
        {
          id: 3,
          title: 'Développeur fullstack'
        }
      ]
    }
  }
}
</script>

<style scoped>
ul {
  list-style: none;
  padding: 0;
}
</style>
