<template>
  <div class="details">
    <h1>Page de détails</h1>
    <display-detail :description="jobs[$route.params.id-1].descritipion"/>
  </div>
</template>

<script>
import DisplayDetail from '../components/DisplayDetail.vue'

export default {
  name: 'DetailsView',
  components: {
    DisplayDetail
  },
  data () {
    return {
      jobs: [
        {
          id: 1,
          descritipion: 'SAdafdkjfndf ncvsnbfdsfbdsnfdf NDBS AD'
        },
        {
          id: 2,
          descritipion: 'dsfasD s ssaf sdfsdfsa sdf d Adasdsad'
        },
        {
          id: 3,
          descritipion: 's fgfdg fd gfdhghjgffdhhtgjfkfcj yfre'
        }
      ]
    }
  }

}
</script>
