<template>
  <div>
    <navbar></navbar>
    <div class="container-fluid">
      <div class="container">
        <h1>문의</h1>
        <p>온라인 화상 회의 웹 서비스 미띵입니다.</p>
        <p>미띵에 관한 문의 및 오류 제보는 lovehy292@gmail.com 으로 부탁드립니다.</p>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default {
  name: 'HelloWorld',
  props: {
  },
  components: {
    navbar,
    Footer
  }
}
</script>

<style lang="scss" scoped>
.container-fluid {
  background-color: #efefef;
  padding-top: 5rem;
  padding-bottom: 5rem;
  margin-bottom: 50vh;
  p {
    margin-bottom: .5rem;
  }
}
h1 {
  margin-top: 1rem;
}


</style>
