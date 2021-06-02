<template>
  <div>
    <navbar></navbar>
    <div class="container profile-container">
        <div class="row">
            <div class="col-md-4">
                <ProfileMenu :menu="'password'"></ProfileMenu>
            </div>
            <div class="col-md-8 profile-contents">
                <h3 class="">비밀번호 변경하기</h3>
                <div class="row profile-info-block">
                    <div class="col-12">
                        <div class="input-group">
                            <label class="label">기존 비밀번호</label>
                            <input class="input" type="text" name="pw" v-model="pw">
                        </div>
                    </div>
                </div>
                <div class="row profile-info-block">
                    <div class="col-12">
                        <div class="input-group">
                            <label class="label">변경할 비밀번호</label>
                            <input class="input" type="text" name="change_pw" v-model="change_pw">
                        </div>
                    </div>
                </div>
                <button class="btn btn-primary float-right">변경하기</button>
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
            pw:'',
            change_pw:''
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
