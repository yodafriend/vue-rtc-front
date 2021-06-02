<template>
    <div class="mail-contents">
        <div class="menu">
            <button class="btn" v-on:click="menu = 0" :class="{'active' : menu === 0}">받은 쪽지</button>
            <button class="btn" v-on:click="menu = 1" :class="{'active' : menu === 1}">보낸 쪽지</button>
            <button class="btn send-btn" v-on:click="menu = 2" :class="{'active' : menu === 2}">쪽지 작성</button>
        </div>
        <br/>
        <template v-if="menu === 0">
            <div class="mail-screen custom-scroll">
                <div class="mail"  v-for="mail in mails.slice((mailPage-1)*5, (mailPage)*5)" :key="mail.name">
                    <div class="dsp-flex justify-between" style="width:100%; cursor:pointer;" v-on:click="mail.isOpen = !mail.isOpen ">
                        <div class="dsp-flex align-items-center">
                            <img class="profile-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJSPgw7_lI5ZiQgbAf-v1t8NMujrgUfJxSUA&usqp=CAU"/>
                            <div  class="dsp-block">
                                <h3 class="nickname">{{ mail.nickname }}</h3>
                                <h3 class="name">{{ mail.name }}</h3>
                            </div>
                        </div>
                        <img :src="require('@/assets/icon/' + ( mail.isOpen ? 'angle-up.svg': 'angle-down.svg') )" class="svg-icon"/>
                    </div>
                    <div class="mail-detail" v-if="mail.isOpen">
                        <span v-html="handleNewLine(mail.msg)"></span>
                        <br/>
                        <button class="btn btn-danger float-right">삭제</button>
                        <br/>
                    </div>
                </div>
            </div>
            <ul class="pagination primary rounded justify-center">
                <li class="page-item" v-bind:class="{'disabled': mailPage===1}">
                <button class="page-link" href="javascript:void(0);" aria-label="Previous" v-on:click="mailPage--">
                    <i class="fas fa-chevron-left"></i>
                    <span class="sr-only">&lt;</span>
                </button>
                </li>
                <template v-if="Math.ceil(mails.length / 5) <= 5">
                <li class="page-item" v-for="n in Math.ceil(mails.length / 5)" :key="n" v-bind:class="{'active': (n == mailPage)}" >
                    <button class="page-link" v-on:click="mailPage = n">{{n}}</button>
                </li>
                </template>
                <template v-else>
                <li class="page-item" v-if="mailPage >= 3">
                    <button class="page-link" v-on:click="mailPage = 1">1</button>
                </li>
                <li class="page-item" v-if="mailPage >= 4">
                    ...
                </li>
                <template v-for="n in 3">
                    <li class="page-item" :key="n" v-if="(mailPage-2+n) > 0 && (mailPage-2+n) <= Math.ceil(comment.length / 5)" v-bind:class="{'active': ((mailPage-2+n) == mailPage)}" >
                    <button class="page-link" v-on:click="mailPage = (mailPage-2+n)">{{(mailPage-2+n)}}</button>
                    </li>
                </template>
                <li class="page-item" v-if="mailPage <= Math.ceil(mails.length / 5) - 3">
                    ...
                </li>
                <li class="page-item" v-if="mailPage <=  Math.ceil(mails.length / 5) - 2">
                    <button class="page-link" v-on:click="mailPage = Math.ceil(mails.length / 5)">{{Math.ceil(mails.length / 5)}}</button>
                </li>
                </template>
                <li class="page-item" v-bind:class="{'disabled': mailPage===Math.ceil(mails.length / 5)}">
                <button class="page-link" href="javascript:void(0);" aria-label="Next" v-on:click="mailPage++">
                    <i class="fas fa-chevron-right"></i>
                    <span class="sr-only">&gt;</span>
                </button>
                </li>
            </ul>
        </template>
        <template v-else-if="menu === 1">
            <div class="mail-screen custom-scroll">
                <div class="mail"  v-for="mail in sendMails.slice((sendMailPage-1)*5, (sendMailPage)*5)" :key="mail.name">
                    <div class="dsp-flex justify-between" style="width:100%; cursor:pointer;" v-on:click="mail.isOpen = !mail.isOpen ">
                        <div class="dsp-flex align-items-center">
                            <img class="profile-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJSPgw7_lI5ZiQgbAf-v1t8NMujrgUfJxSUA&usqp=CAU"/>
                            <div  class="dsp-block">
                                <h3 class="nickname">{{ mail.nickname }}</h3>
                                <h3 class="name">{{ mail.name }}</h3>
                            </div>
                        </div>
                        <img :src="require('@/assets/icon/' + ( mail.isOpen ? 'angle-up.svg': 'angle-down.svg') )" class="svg-icon"/>
                    </div>
                    <div class="mail-detail" v-if="mail.isOpen">
                        <span v-html="handleNewLine(mail.msg)"></span>
                        <br/>
                        <button class="btn btn-danger float-right">삭제</button>
                        <br/>
                    </div>
                </div>
            </div>
            <ul class="pagination primary rounded justify-center">
                <li class="page-item" v-bind:class="{'disabled': sendMailPage===1}">
                <button class="page-link" href="javascript:void(0);" aria-label="Previous" v-on:click="sendMailPage--">
                    <i class="fas fa-chevron-left"></i>
                    <span class="sr-only">&lt;</span>
                </button>
                </li>
                <template v-if="Math.ceil(sendMails.length / 5) <= 5">
                <li class="page-item" v-for="n in Math.ceil(sendMails.length / 5)" :key="n" v-bind:class="{'active': (n == sendMailPage)}" >
                    <button class="page-link" v-on:click="sendMailPage = n">{{n}}</button>
                </li>
                </template>
                <template v-else>
                <li class="page-item" v-if="sendMailPage >= 3">
                    <button class="page-link" v-on:click="sendMailPage = 1">1</button>
                </li>
                <li class="page-item" v-if="sendMailPage >= 4">
                    ...
                </li>
                <template v-for="n in 3">
                    <li class="page-item" :key="n" v-if="(sendMailPage-2+n) > 0 && (sendMailPage-2+n) <= Math.ceil(sendMails.length / 5)" v-bind:class="{'active': ((sendMailPage-2+n) == sendMailPage)}" >
                    <button class="page-link" v-on:click="sendMailPage = (sendMailPage-2+n)">{{(sendMailPage-2+n)}}</button>
                    </li>
                </template>
                <li class="page-item" v-if="sendMailPage <= Math.ceil(sendMails.length / 5) - 3">
                    ...
                </li>
                <li class="page-item" v-if="sendMailPage <=  Math.ceil(sendMails.length / 5) - 2">
                    <button class="page-link" v-on:click="sendMailPage = Math.ceil(sendMails.length / 5)">{{Math.ceil(sendMails.length / 5)}}</button>
                </li>
                </template>
                <li class="page-item" v-bind:class="{'disabled': sendMailPage===Math.ceil(sendMails.length / 5)}">
                <button class="page-link" href="javascript:void(0);" aria-label="Next" v-on:click="sendMailPage++">
                    <i class="fas fa-chevron-right"></i>
                    <span class="sr-only">&gt;</span>
                </button>
                </li>
            </ul>
        </template>
        <template v-else>
            <label for="inputState">친구 선택 :</label>
            <select v-model="sendTarget" class="form-control">
                <option v-for="friend in myFriendList" v-bind:value="friend.value" :key="friend.value">
                    {{ friend.nickname }} ( {{ friend.id }} )
                </option>
            </select>
            <div class="input-group mg-t-2">
                <textarea class="input" type="text" name="first_name" v-model="mySendMessage" placeholder="메세지를 입력해주세요."></textarea>
            </div>
            <button class="btn btn-primary float-right mg-t-2">전송</button>
        </template>
    </div>
</template>

<script>
export default {
  props: {
  },
  data() {
      return {
          menu: 0,
          mails: [
              {
                  nickname: '닉네임1',
                  name: '아이디1',
                  msg: 'dddddddddddd\nassssssss',
                  isOpen: false
              },
              {
                  nickname: '닉네임2',
                  name: '아이디2',
                  msg: 'dddddddddddd\nassssssss\nassssssss\nassssssss\nassssssss\nassssssss\nassssssss\nassssssss\nassssssss',
                  isOpen: false
              }
          ],
          mailPage: 1,
          sendMails: [
                {
                  nickname: '닉네임1',
                  name: '아이디1',
                  msg: 'dddddddddddd\nassssssss',
                  isOpen: false
                },
                {
                  nickname: '닉네임2',
                  name: '아이디2',
                  msg: 'dddddddddddd\nassssssss\nassssssss\nassssssss\nassssssss\nassssssss\nassssssss\nassssssss\nassssssss',
                  isOpen: false
                },
                {
                  nickname: '닉네임3',
                  name: '아이디3',
                  msg: 'dddddddddddd\nassssssss',
                  isOpen: false
                },
            ],
            sendMailPage: 1,
            sendTarget: 'A',
            myFriendList: [
                { nickname: 'One', id: 'A' },
                { nickname: 'Two', id: 'B' },
                { nickname: 'Three', id: 'C' }
            ],
            mySendMessage: ''
      }
  },
  methods: {
    handleNewLine(str) {    
        return String(str).replace(/(?:\r\n|\r|\n)/g,"</br>");
    }
  },
  components: {
    
  }
}
</script>

<style lang="scss" scoped>
.mail-contents {
        @media (max-width: 992px) {
            margin-top: 2rem;
        }
        .menu {
            margin-bottom: 1rem;
            .btn {
                border-radius: 0px;
                border-bottom: 1px solid #0000001f;
                font-size: 1.2rem;
                color: rgba(0,0,0,0.5);
                @media (max-width: 552px) {
                    font-size: .75rem;
                }
                &:hover {
                    background: none;
                }
                &:focus {
                    outline: 0;
                }
                &.active {
                    border-bottom: 1px solid #b897ff;
                    color: rgb(0, 0, 0);
                }
                &.send-btn {
                    // background: #b897ff56;
                    border: 1px solid #b897ff56;
                    // border-radius: .5rem;
                    float: right;
                    &.active {
                        background: #b897ff56;
                        color: #000000a8;
                    }
                }
            }
        }
        .mail-card {
            padding: 1rem;
            border: 0 none;
            -webkit-box-shadow: 0px 0px 9px 0px rgba(0,0,0,0.2);
            -moz-box-shadow: 0px 0px 9px 0px rgba(0,0,0,0.2);
            box-shadow: 0px 0px 9px 0px rgba(0, 0, 0, 0.2);
        }
        .mail-screen {
            height: 50vh;
            padding: 1rem;
            overflow: auto;
        }
        .mail {
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
            .mail-detail {
                background-color: rgb(240, 240, 240);
                padding: 2rem;
                margin-top: 1rem;
                color: rgba(0, 0, 0, 0.8);
                border-top: 1px solid rgba(0, 0, 0, 0.103);
            }
        }
    }
.page-item.active {
    .page-link {   
        border: 1px solid var(--primaryColor);
    }
}
.input {
    outline: none;
    margin: 0;
    border: none;
    width: 100%;
    font-size: 14px;
    font-family: inherit;
    height: 20rem;
    background: #f3f3f3;
    -webkit-box-shadow: inset 0 1px 3px 0 rgba(0, 0, 0, .08);
    -moz-box-shadow: inset 0 1px 3px 0 rgba(0, 0, 0, .08);
    box-shadow: inset 0 1px 3px 0 rgba(0, 0, 0, .08);
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    padding: 1rem 20px;
    font-size: 16px;
    resize: vertical;
    color: #666;
}
.custom-scroll {        
    &:-webkit-scrollbar-track
    {
        border-radius: 8px;
        -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.13);
        background-color: #F5F5F5;
    }

    &::-webkit-scrollbar
    {
        border-radius: 8px;
        width: 10px;
        background-color: #F5F5F5;
    }

    &::-webkit-scrollbar-thumb
    {
        border-radius: 8px;
        background-color: #0000001c;
    }
}
    </style>