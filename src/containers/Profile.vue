<template>
  <div>
    <navbar></navbar>
    <div class="container profile-container">
        <div class="row">
            <div class="col-md-4">
                <ProfileMenu :menu="'profile'"></ProfileMenu>
            </div>
            <div class="col-md-8 profile-contents">
                <div class="main-profile dsp-flex align-items-center">
                    <img class="profile-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJSPgw7_lI5ZiQgbAf-v1t8NMujrgUfJxSUA&usqp=CAU"/>
                    <h3 class="name">{{ nickname }}</h3>
                </div>
                <div class="row profile-info-block">
                    <div class="col-6">
                        <div class="input-group">
                            <label class="label">닉네임</label>
                            <input class="input" type="text" name="first_name" v-model="nickname">
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="input-group">
                            <label class="label">이름</label>
                            <input class="input" type="text" name="last_name" v-model="name">
                        </div>
                    </div>
                </div>
                <div class="row profile-info-block">
                    <div class="col-12">
                        <div class="input-group">
                            <label class="label">이메일</label>
                            <input class="input" type="text" name="first_name" v-model="email">
                        </div>
                    </div>
                </div>
                <div class="row profile-info-block">
                    <div class="col-12">
                        <div class="input-group">
                            <label class="label">가입일짜</label>
                            <input class="input" type="text" name="first_name" v-model="createdAt">
                        </div>
                    </div>
                </div>
                <button class="btn btn-primary float-right">수정하기</button>
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

export default {
  props: {
  },
  data() {
      return {
            nickname: 'NICKNAME',
            name: '홍길동',
            email: 'abcd@google.com',
            createdAt: '2021-4-10'
      }
  },
  components: {
    navbar,
    ProfileMenu,
    Footer
  }
}
</script>

<style lang="scss" scoped>

.profile-container {
    margin-top: 10rem;
    @media (max-width: 992px) {
        margin-top: 3rem;
    }
    .main-profile {
            @media (max-width: 992px) {
            margin-bottom: 2rem;
            }
        .profile-img {
            width: 100px;
            @media (max-width: 992px) {
                width: 50px;
            }
        }
        .name {
            margin-left: 2rem;
            margin-bottom: 0px;
            @media (max-width: 992px) {
                margin-left: 1rem;
            }
        }
    }
    .profile-contents {
        @media (max-width: 992px) {
            margin-top: 2rem;
        }
        .profile-info-block{
            margin-top: 3rem;
            margin-bottom: 3rem;
            @media (max-width: 992px) {
                margin-top: 1rem;
                margin-bottom: 1rem;
            }
        }
        .label {
            font-size: 16px;
            color: #555;
            text-transform: capitalize;
            display: block;
            margin-bottom: 5px;
        }
        .input {
            outline: none;
            margin: 0;
            border: none;
            width: 100%;
            font-size: 14px;
            font-family: inherit;
            line-height: 50px;
            background: #f3f3f3;
            -webkit-box-shadow: inset 0 1px 3px 0 rgba(0, 0, 0, .08);
            -moz-box-shadow: inset 0 1px 3px 0 rgba(0, 0, 0, .08);
            box-shadow: inset 0 1px 3px 0 rgba(0, 0, 0, .08);
            -webkit-border-radius: 5px;
            -moz-border-radius: 5px;
            border-radius: 5px;
            padding: 0 20px;
            font-size: 16px;
            color: #666;
            -webkit-transition: all .4s ease;
            -o-transition: all .4s ease;
            -moz-transition: all .4s ease;
            transition: all .4s ease;
        }
    }
}
</style>
