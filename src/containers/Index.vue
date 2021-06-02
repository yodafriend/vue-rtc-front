<template>
  <div>
    <div class="c-modal create-modal" v-if="createRoomModal" >
      <div class="modal-background" v-on:click="createRoomModal = false"></div>
      <div class="card create-card ">
        <div class="card-body">
          <h2 class="text-center mg-b-3">방 생성하기</h2>
          <input class="input" type="text" name="account" placeholder="어카운트" v-model="account">
          
          <input class="input" type="text" name="roomid" placeholder="방제목" v-model="roomid">
          <span class="symbol">
              <svg class="svg-icon" viewBox="0 0 20 20">
                     <path fill="none" d="M16.227,16.672c0,0.49-0.396,0.889-0.889,0.889H2.883c-0.491,0-0.889-0.398-0.889-0.889V5.107c0-0.491,0.398-0.89,0.889-0.89h7.562V3.328H2.883c-0.982,0-1.779,0.796-1.779,1.779v11.565c0,0.982,0.796,1.779,1.779,1.779h12.455c0.982,0,1.779-0.797,1.779-1.779V10h-0.891V16.672z M15.338,1.549c-1.965,0-3.559,1.593-3.559,3.558c0,1.966,1.594,3.558,3.559,3.558s3.559-1.592,3.559-3.558C18.896,3.142,17.303,1.549,15.338,1.549z M15.338,7.776c-1.475,0-2.668-1.195-2.668-2.669c0-1.474,1.193-2.669,2.668-2.669s2.668,1.195,2.668,2.669C18.006,6.581,16.812,7.776,15.338,7.776z"></path>
                  </svg>
          </span>
          <button class="btn btn-primary mg-0-auto dsp-block mg-t-3" v-on:click="createRoom()">생성하기</button>
        </div>
      </div>
    </div>
    <div class="c-modal enter-modal" v-if="openRoomModal" >
      <div class="modal-background" v-on:click="openRoomModal = false"></div>
      <div class="card enter-card">
        <div class="card-body">
          <h2 class="text-center mg-b-3">방 입장하기</h2>
          <input class="input" type="text" name="account" placeholder="방 코드" v-model="account">
          <input class="input" type="text" name="roomid" placeholder="방제목" v-model="roomid">
          <span class="symbol">
              <svg class="svg-icon" viewBox="0 0 20 20">
                <path d="M17.218,2.268L2.477,8.388C2.13,8.535,2.164,9.05,2.542,9.134L9.33,10.67l1.535,6.787c0.083,0.377,0.602,0.415,0.745,0.065l6.123-14.74C17.866,2.46,17.539,2.134,17.218,2.268 M3.92,8.641l11.772-4.89L9.535,9.909L3.92,8.641z M11.358,16.078l-1.268-5.613l6.157-6.157L11.358,16.078z"></path>
              </svg>
          </span>
          <p class="desc">방 생성자에게 방 코드를 받아 입력해주세요.</p>
          <button class="btn btn-primary mg-0-auto dsp-block mg-t-3" v-on:click="checkRoomCode()">입장하기</button>
        </div>
      </div>
    </div>
    <navbar></navbar>
    <div class="container mg-t-3">
      <h1 class="intro-title" v-if="user">{{ introMsg }}</h1>
      <template v-if="user">
        <div class="row room-container">
          <div class="col-md-6">
            <div class="card col-card">
              <div class="card-body menu-block">
                <img class="menu-img create-img mg-b-2" src="@/assets/img/create.png"/>
                <h3>방 생성하기</h3>
                <p>화상 회의를 시작할 방을 생성합니다.</p>
                <p>방을 생성하여 참가자들과 화상회의를 시작하세요.</p>
                <button class="btn btn-primary" v-on:click="createRoomModal = true">
                  방 생성하기
                </button>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card col-card">
              <div class="card-body menu-block">
                <img class="menu-img mg-b-2" src="@/assets/img/enter.png"/>
                <h3>입장하기</h3>
                <p>생성되어 있는 방에 입장합니다.</p>
                <p>방 생성자에게 방 코드를 받아 입력해주세요.</p>
                <button class="btn btn-primary" v-on:click="openRoomModal = true">
                  방 입장하기
                </button>
              </div>
            </div>
          </div>
        </div>  
      </template>
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
  data() {
    return { 
      roomid: '',
      account: '',
      openRoomModal: false,
      createRoomModal: false,
      introMsg: 'aa 님 안녕하세요 😃'
    }
  },
  computed: {
    user() {
      return this.$store.getters.user;
    }
  },
  methods: {
    checkRoomCode () {
      if (this.account && this.roomid) {
          this.$router.push({name: 'Video', params: {roomid: this.roomid, account: this.account}})
        }
    },
    createRoom () {
      if (this.account && this.roomid) {
          this.$router.push({name: 'Video', params: {roomid: this.roomid, account: this.account}})
                }
    }
  },
  components: {
    navbar,
    Footer
  }
}
</script>

<style lang="scss" scoped>
.intro-title {
    @media (max-width: 992px) {
      font-size: 1.5rem;
      font-weight: 700;
      text-align: center;
    }
}
.menu-block {
  padding-top: 3rem;
  padding-bottom: 3rem;
  text-align: center;
  p {
    margin-bottom: 0px;
  }
  .menu-img {
    display: block;
    margin: 0 auto;
    &.create-img {
      -webkit-transform: rotate(90deg);
      -moz-transform: rotate(90deg);
      -o-transform: rotate(90deg);
      -ms-transform: rotate(90deg);
      transform: rotate(90deg);
    }
  }
  .btn-primary {
    margin-top: 1.5rem;
  }
}

.room-container {
  margin-top: 3rem;
}
.c-modal {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .2);
  z-index: 100;
  .modal-background {
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .2);
    z-index: 99;
  }
  .enter-card,
  .create-card {
    background-color: white;
    width: 40rem;
    margin: 0 auto;
    top: 30%;
    transform: translate(0%, -30%);
    padding: 4rem 3rem;
    border-radius: 1rem;
    z-index: 100;
    @media (max-width: 992px) {
      width: 100%;
      padding: 2rem 1rem;
    }
  }
  .desc {
    margin-top: 1rem;
    color: rgba(0, 0, 0, 0.4);
  }
  .input {
    outline: none;
    border: none;
    font-size: 18px;
    line-height: 1.2;
    color: #686868;
    display: block;
    width: 100%;
    background: #f3f3f3;
    height: 4rem;
    border-radius: 3px;
    padding: 0 30px 0 65px;
  }
  .symbol {
    fill: #999;
    align-items: center;
    position: absolute;
    margin-top: -48px;
    margin-left: 16px;
    width: 30px;
    height: 30px;
    transition: all .4s;
  }
  path {
    fill: #999;
  }
}
.col-card {
    @media (max-width: 992px) {
      border: none;
    }
}
</style>