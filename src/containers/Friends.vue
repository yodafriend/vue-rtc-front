<template>
  <div>
    <navbar></navbar>
    <div class="container profile-container">
        <div class="row">
            <div class="col-md-4">
                <ProfileMenu :menu="'friends'"></ProfileMenu>
            </div>
            <div class="col-md-8 friends-contents">
                <div class="menu">
                    <button class="btn" v-on:click="menu = 0" :class="{'active' : menu === 0}">친구 목록</button>
                    <button class="btn" v-on:click="menu = 1" :class="{'active' : menu === 1}">친구 찾기</button>
                </div>
                <br/>
                <template v-if="menu === 0">
                    <div class="row justify-between mg-lr-1">
                        <div class="profile col-md-5"  v-for="friend in friends" :key="friend.name">
                            <div class="dsp-flex justify-between" style="width:100%;">
                                <div class="dsp-flex align-items-center">
                                    <img class="profile-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJSPgw7_lI5ZiQgbAf-v1t8NMujrgUfJxSUA&usqp=CAU"/>
                                    <div  class="dsp-block">
                                        <h3 class="nickname">{{ friend.nickname }}</h3>
                                        <h3 class="name">{{ friend.name }}</h3>
                                    </div>
                                </div>
                                <button class="btn">
                                    <img class="svg-icon" style="opacity:.3; width:1.5rem; height:1.5rem;" src="@/assets/icon/multiply.svg"/>
                                </button>
                            </div>
                        </div>
                    </div>
                </template>
                <template v-else-if="menu === 1">
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="checkWhat" id="checkName" value="checkName" v-model="checkRadio" checked>
                        <label class="form-check-label worked-with" for="checkName">이름</label>
                    </div>
                    <div class="form-check  form-check-inline">
                        <input class="form-check-input" type="radio" name="checkWhat" id="checkNickName" v-model="checkRadio"  value="checkNickName">
                        <label class="form-check-label worked-with" for="checkNickName">닉네임</label>
                    </div>
                    <div class="form-check  form-check-inline">
                        <input class="form-check-input" type="radio" name="checkWhat" id="checkEmail" v-model="checkRadio"  value="checkEmail">
                        <label class="form-check-label worked-with" for="checkEmail">이메일</label>
                    </div>
                    <div class="input-group mg-t-2">
                        <input class="input" type="text" name="first_name" v-model="nickname" :placeholder="checkPlaceholder()">
                    </div>
                    <button class="btn btn-primary float-right mg-t-2">검색하기</button>
                </template>
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
          menu: 0,  // 0: 친구 목록,  1: 친구 찾기
          nickname: '',
          friends: [
              {
                  nickname: '닉네임1',
                  name: '아이디1'
              },
              {
                  nickname: '닉네임2',
                  name: '아이디2'
              },
              {
                  nickname: '닉네임3',
                  name: '아이디3'
              }
          ],
          checkRadio: 'checkName'
      }
  },
  methods: {
      checkPlaceholder () {
          if (this.checkRadio == 'checkName')
            return '이름으로 검색합니다.';
          else if (this.checkRadio == 'checkNickName')
            return '닉네임으로 검색합니다.';
          return '이메일로 검색합니다'
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
    .friends-contents {
        @media (max-width: 992px) {
            margin-top: 2rem;
        }
        .menu {
            margin-bottom: 1rem;
            .btn {
                border-radius: 0px;
                border-bottom: 1px solid #0000001f;
                font-size: 1.2rem;
                &:hover {
                    background: none;
                }
                &:focus {
                    outline: 0;
                }
                &.active {
                    border-bottom: 1px solid #b897ff;
                }
            }
        }
        .profile {
            border-radius: .5rem;
            padding: 1rem;
            margin-bottom: 2rem;
            -webkit-box-shadow: 0px 0px 9px 0px rgba(0,0,0,0.2);
            -moz-box-shadow: 0px 0px 9px 0px rgba(0,0,0,0.2);
            box-shadow: 0px 0px 9px 0px rgba(0, 0, 0, 0.2);
            .profile-img {
                width: 4rem;
            }
            .dsp-block {
                .nickname {
                    font-size: 1rem;
                    margin-left: 1rem;
                    margin-bottom: 4px;
                    font-weight: 600;;
                }
                .name {
                    font-size: .8rem;
                    margin-left: 1rem;
                    margin-bottom: 0px;
                }
            }
            .svg-icon {
                fill: rgba(0, 0, 0, 0.4);
                width: 2rem;
                float: right;
            }
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
</style>
