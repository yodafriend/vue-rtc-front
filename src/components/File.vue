<template>
    <div class="file-contents">
        <div class="menu">
            <button class="btn" v-on:click="menu = 0" :class="{'active' : menu === 0}">받은 파일</button>
            <button class="btn" v-on:click="menu = 1" :class="{'active' : menu === 1}">보낸 파일</button>
            <button class="btn send-btn" v-on:click="menu = 2" :class="{'active' : menu === 2}">파일 업로드</button>
        </div>
        <br/>
        <template v-if="menu === 0">
            <div class="file-screen custom-scroll">
                <div class="file"  v-for="file in files.slice((filePage-1)*5, (filePage)*5)" :key="file.name">
                    <div class="dsp-flex justify-between" style="width:100%; cursor:pointer;" v-on:click="file.isOpen = !file.isOpen ">
                        <div class="dsp-flex align-items-center">
                            <div  class="dsp-block">
                                <h3 class="name">{{ file.name }}</h3>
                                <h3 class="date">{{ file.date }}</h3>
                            </div>
                        </div>
                        <img :src="require('@/assets/icon/' + ( file.isOpen ? 'angle-up.svg': 'angle-down.svg') )" class="svg-icon"/>
                    </div>
                    <div class="file-detail" v-if="file.isOpen">
                        <span v-html="handleNewLine(file.msg)"></span>
                        <br/>
                        <button class="btn btn-danger float-right">삭제</button>
                        <button class="btn btn-primary float-right">다운</button>
                        <br/>
                    </div>
                </div>
            </div>
            <ul class="pagination primary rounded justify-center">
                <li class="page-item" v-bind:class="{'disabled': filePage===1}">
                <button class="page-link" href="javascript:void(0);" aria-label="Previous" v-on:click="filePage--">
                    <i class="fas fa-chevron-left"></i>
                    <span class="sr-only">&lt;</span>
                </button>
                </li>
                <template v-if="Math.ceil(files.length / 5) <= 5">
                <li class="page-item" v-for="n in Math.ceil(files.length / 5)" :key="n" v-bind:class="{'active': (n == filePage)}" >
                    <button class="page-link" v-on:click="filePage = n">{{n}}</button>
                </li>
                </template>
                <template v-else>
                <li class="page-item" v-if="filePage >= 3">
                    <button class="page-link" v-on:click="filePage = 1">1</button>
                </li>
                <li class="page-item" v-if="filePage >= 4">
                    ...
                </li>
                <template v-for="n in 3">
                    <li class="page-item" :key="n" v-if="(filePage-2+n) > 0 && (filePage-2+n) <= Math.ceil(comment.length / 5)" v-bind:class="{'active': ((filePage-2+n) == filePage)}" >
                    <button class="page-link" v-on:click="filePage = (filePage-2+n)">{{(filePage-2+n)}}</button>
                    </li>
                </template>
                <li class="page-item" v-if="filePage <= Math.ceil(files.length / 5) - 3">
                    ...
                </li>
                <li class="page-item" v-if="filePage <=  Math.ceil(files.length / 5) - 2">
                    <button class="page-link" v-on:click="filePage = Math.ceil(files.length / 5)">{{Math.ceil(files.length / 5)}}</button>
                </li>
                </template>
                <li class="page-item" v-bind:class="{'disabled': filePage===Math.ceil(files.length / 5)}">
                <button class="page-link" href="javascript:void(0);" aria-label="Next" v-on:click="filePage++">
                    <i class="fas fa-chevron-right"></i>
                    <span class="sr-only">&gt;</span>
                </button>
                </li>
            </ul>
        </template>
        <template v-else-if="menu === 1">
            <div class="file-screen custom-scroll">
                <div class="file"  v-for="file in sendfiles.slice((sendfilePage-1)*5, (sendfilePage)*5)" :key="file.name">
                    <div class="dsp-flex justify-between" style="width:100%; cursor:pointer;" v-on:click="file.isOpen = !file.isOpen ">
                        <div class="dsp-flex align-items-center">
                            <div  class="dsp-block">
                                <h3 class="name">{{ file.name }}</h3>
                                <h3 class="date">{{ file.date }}</h3>
                            </div>
                        </div>
                        <img :src="require('@/assets/icon/' + ( file.isOpen ? 'angle-up.svg': 'angle-down.svg') )" class="svg-icon"/>
                    </div>
                    <div class="file-detail" v-if="file.isOpen">
                        <span v-html="handleNewLine(file.msg)"></span>
                        <br/>
                        <button class="btn btn-danger float-right">삭제</button>
                        <br/>
                    </div>
                </div>
            </div>
            <ul class="pagination primary rounded justify-center">
                <li class="page-item" v-bind:class="{'disabled': sendfilePage===1}">
                <button class="page-link" href="javascript:void(0);" aria-label="Previous" v-on:click="sendfilePage--">
                    <i class="fas fa-chevron-left"></i>
                    <span class="sr-only">&lt;</span>
                </button>
                </li>
                <template v-if="Math.ceil(sendfiles.length / 5) <= 5">
                <li class="page-item" v-for="n in Math.ceil(sendfiles.length / 5)" :key="n" v-bind:class="{'active': (n == sendfilePage)}" >
                    <button class="page-link" v-on:click="sendfilePage = n">{{n}}</button>
                </li>
                </template>
                <template v-else>
                <li class="page-item" v-if="sendfilePage >= 3">
                    <button class="page-link" v-on:click="sendfilePage = 1">1</button>
                </li>
                <li class="page-item" v-if="sendfilePage >= 4">
                    ...
                </li>
                <template v-for="n in 3">
                    <li class="page-item" :key="n" v-if="(sendfilePage-2+n) > 0 && (sendfilePage-2+n) <= Math.ceil(sendfiles.length / 5)" v-bind:class="{'active': ((sendfilePage-2+n) == sendfilePage)}" >
                    <button class="page-link" v-on:click="sendfilePage = (sendfilePage-2+n)">{{(sendfilePage-2+n)}}</button>
                    </li>
                </template>
                <li class="page-item" v-if="sendfilePage <= Math.ceil(sendfiles.length / 5) - 3">
                    ...
                </li>
                <li class="page-item" v-if="sendfilePage <=  Math.ceil(sendfiles.length / 5) - 2">
                    <button class="page-link" v-on:click="sendfilePage = Math.ceil(sendfiles.length / 5)">{{Math.ceil(sendfiles.length / 5)}}</button>
                </li>
                </template>
                <li class="page-item" v-bind:class="{'disabled': sendfilePage===Math.ceil(sendfiles.length / 5)}">
                <button class="page-link" href="javascript:void(0);" aria-label="Next" v-on:click="sendfilePage++">
                    <i class="fas fa-chevron-right"></i>
                    <span class="sr-only">&gt;</span>
                </button>
                </li>
            </ul>
        </template>
        <template v-else>
            <label for="inputState">파일 선택 : </label>
            <input type="file"  id="transfer-file-upload">
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
          files: [
              {
                  name: '파일명1',
                  msg: 'dddddddddddd\nassssssss',
                  date: '2020-12-1',
                  isOpen: false
              },
              {
                  name: '파일명2',
                  msg: 'dddddddddddd\nassssssss\nassssssss\nassssssss\nassssssss\nassssssss\nassssssss\nassssssss\nassssssss',
                  date: '2021-4-10',
                  isOpen: false
              }
          ],
          filePage: 1,
          sendfiles: [
              {
                  name: '파일명1',
                  msg: 'dddddddddddd\nassssssss',
                  date: '2020-12-1',
                  isOpen: false
              },
              {
                  name: '파일명2',
                  msg: 'dddddddddddd\nassssssss\nassssssss\nassssssss\nassssssss\nassssssss\nassssssss\nassssssss\nassssssss',
                  date: '2021-4-10',
                  isOpen: false
              },
              {
                  name: '파일명3',
                  msg: 'dddddddddddd\nassssssss\nassssssss\nassssssss\nassssssss\nassssssss\nassssssss\nassssssss\nassssssss',
                  date: '2021-5-10',
                  isOpen: false
              }
            ],
            sendfilePage: 1,
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
.file-contents {
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
        .file-card {
            padding: 1rem;
            border: 0 none;
            -webkit-box-shadow: 0px 0px 9px 0px rgba(0,0,0,0.2);
            -moz-box-shadow: 0px 0px 9px 0px rgba(0,0,0,0.2);
            box-shadow: 0px 0px 9px 0px rgba(0, 0, 0, 0.2);
        }
        .file-screen {
            height: 50vh;
            padding: 1rem;
            overflow: auto;
        }
        .file {
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
                .date {
                    font-size: .8rem;
                    margin-left: 1rem;
                    margin-bottom: 0px;
                }
                .name {
                    font-size: 1rem;
                    margin-left: 1rem;
                    margin-bottom: 4px;
                    font-weight: 600;;
                }
            }
            .svg-icon {
                fill: rgba(0, 0, 0, 0.4);
                width: 2rem;
                float: right;
            }
            .file-detail {
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