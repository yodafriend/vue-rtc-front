<template>
  <div>
    <navbar></navbar>
    <div class="container mail-container">
        <div class="row">
            <div class="col-md-4">
                <ProfileMenu :menu="'mail'"></ProfileMenu>
            </div>
            <div class="col-md-8">
                <Mail></Mail>
            </div>
        </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import navbar from '@/components/Navbar'
import ProfileMenu from '@/components/ProfileMenu'
import Footer from '@/components/Footer'
import Mail from '@/components/Mail'

export default {
  props: {
  },
  data() {
      return {
      }
  },
  methods: {
  },
  components: {
    navbar,
    ProfileMenu,
    Footer,
    Mail
  }
}
</script>

<style lang="scss" scoped>
.mail-container {
    margin-top: 10rem;
    @media (max-width: 992px) {
        margin-top: 3rem;
    }
    
}
</style>
