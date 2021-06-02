<template>
  <div>
    <navbar></navbar>
    <div class="container-fluid">
      <div class="container">
        <h1>소개</h1>
        <p>온라인 화상 회의 웹 서비스 미띵입니다.</p>
        <p>브라우저 상에서 손쉽게 화상 회의 서비스를 이용할 수 있습니다.</p>
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
