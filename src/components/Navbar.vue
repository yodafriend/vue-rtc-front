<template>
    <div class="fluid">
    <div class="container">
        <nav class="navbar navbar-md justify-between">
            <ul class="navbar-nav">
                <a class="navbar-brand" href="/">미띵</a>
                <li class="nav-item active">
                    <router-link to="/about" class="nav-link">소개</router-link>
                </li>
                <li class="nav-item active">
                    <router-link to="/qna" class="nav-link">문의</router-link>
                </li>
            </ul>
            <button class="navbar-toggler" type="button" data-target="#navbar-collapse-00" data-toggle="collapse">
                <svg class="navbar-toggler-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
            </button>
            <div class="collapse navbar-collapse" id="navbar-collapse-00">
                <ul class="navbar-nav" id="navbar-nav" v-if="!user">
                    <li class="nav-item active">
                        <router-link to="/login" class="nav-link">로그인</router-link>
                    </li>
                    <li class="nav-item active">
                        <router-link to="/register" class="btn btn-outline-primary nav-link">회원가입</router-link>
                    </li>
                </ul>
                <ul class="navbar-nav" id="navbar-nav" v-else>
                    <li class="nav-item active">
                        <a class="nav-link" href="/profile">내정보</a>
                    </li>
                    <li class="nav-item active">
                        <router-link to="/mail" class="nav-link" >쪽지함<span v-if="message > 0" class="badge badge-primary">{{ message }}</span></router-link>
                    </li>
                    <li class="nav-item active">
                        <router-link to="/friends" class="nav-link">친구관리</router-link>
                    </li>
                    <li class="nav-item active">
                        <a class="nav-link" href="#" v-on:click="logout()">로그아웃</a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
    </div>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
      return {
          message: 3
      }
  },
  methods: {
      logout() {
            this.$store.commit("setUser", null);
      }
  },
  computed: {
    user() {
      return this.$store.getters.user;
    }
  },
}
</script>

<style lang="scss" scoped>
.fluid {
    @media (max-width: 768px) {
        -webkit-box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.18);
        -moz-box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.18);
        box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.18);
    }
}
.navbar {
    padding: 3rem 0rem;
    @media (max-width: 992px) {
        padding: 1rem 0rem;
        font-size: 14px;
    }
    .navbar-brand {
        font-size: 1.5rem;
        @media (max-width: 992px) {
            margin-right: 0px;
            padding-left: 0px;
        }
    }
    .navbar-collapse {
        justify-content: flex-end;
        @media (max-width: 768px) {
            justify-content: flex-start;
        }
    }
    .navbar-toggler {
        border: 0;
        background: none;
        outline: none;
    }
    .badge {
        margin-left: .5rem;
    }
}
.btn-outline-primary {
    &:hover {
        color: white !important;
    }
}
</style>
