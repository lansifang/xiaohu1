<template>
  <div class="type-nav">
    <div class="container">
      <div @mouseleave="leaveIndex" @mouseenter="entershow">
        <h2 class="all">全部商品分类</h2>
        <!-- 过度动画 -->
        <transition name="sort">
          <div class="sort" v-if="show">
            <!-- 利用事件委派和编程式跳转来实现跳转和传递参数 -->
            <div @click="goSearch" class="all-sort-list2">
              <div
                v-for="(c1, index) in categoryList"
                :key="c1.categoryId"
                :class="{ cur: currentIndex == index }"
                class="item"
              >
                <h3 @mouseenter="changeIndex(index)">
                  <a
                    :data-categoryName="c1.categoryName"
                    :data-category1Id="c1.categoryId"
                    >{{ c1.categoryName }}</a
                  >
                  <!-- <router-link to='/search'>{{c1.categoryName}}</router-link>  不建议使用 因为会造成卡顿现象 -->
                </h3>
                <!-- 二三极分类 -->
                <div
                  class="item-list clearfix"
                  :class="{ curs: currentIndex == index }"
                >
                  <div
                    v-for="(c2, index) in c1.categoryChild"
                    :key="c2.categoryId"
                    class="subitem"
                  >
                    <dl class="fore">
                      <dt>
                        <a
                          :data-categoryName="c2.categoryName"
                          :data-category2Id="c2.categoryId"
                          >{{ c2.categoryName }}</a
                        >
                        <!-- <router-link to='/search'>{{c2.categoryName}}</router-link> -->
                      </dt>
                      <dd>
                        <em
                          v-for="(c3, index) in c2.categoryChild"
                          :key="c3.categoryId"
                        >
                          <a
                            :data-categoryName="c3.categoryName"
                            :data-category3Id="c3.categoryId"
                            >{{ c3.categoryName }}</a
                          >
                          <!-- <router-link to='/search'>{{c3.categoryName}}</router-link> -->
                        </em>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>
      <nav class="nav">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">尚品汇超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>
    </div>
  </div>
</template>

<script>
import _ from "lodash";
import { mapState } from "vuex";
export default {
  name: "TypeNav",
  data() {
    return {
      currentIndex: -1,
      show: true,
    };
  },
  //组件挂载完毕在向服务器发请求
  mounted() {

    if (this.$route.path !== "/home") {
      this.show = false;
    }
  },
  methods: {
    //鼠标进入修改响应式数据currentIndex属性
    // changeIndex(index){
    //   //index；鼠标移到某一个一级分类的元素索引值
    //   this.currentIndex =index;
    // },
    changeIndex: _.throttle(function (index) {
      this.currentIndex = index;
    }, 50),
    leaveIndex() {
      this.currentIndex = -1;
      if (this.$route.path !== "/home") {
        this.show = false;
      }
    },
    //进行路由的跳转
    goSearch(event) {
      // this.$router.push('/search')
      //获取点击的节点  （解决不知道点的是那个节点问题）
      let element = event.target;
      //节点属性有一个dataset属性 可以获取自定义的属性与属性值
      if (element.dataset.categoryname) {
        let location = { name: "search" };
        let query = { categoryName: element.dataset.categoryname };
        if (element.dataset.category1id) {
          query.category1Id = element.dataset.category1id;
        } else if (element.dataset.category2id) {
          query.category2Id = element.dataset.category2id;
        } else if (element.dataset.category3id) {
          query.category3Id = element.dataset.category3id;
        }
        //判断：如果路由跳转带有params参数也要携带过去\
        if(this.$route.params){
          location.params =this.$route.params
        location.query = query;
        this.$router.push(location);
        }

      }
    },
    //当鼠标移入是将show改为true  让商品分类进行展示
    entershow() {
      if (this.$route.path !== "/home") {
        this.show = true;
      }
    },
  },
  computed: {
    ...mapState({
      //右侧需要的是一个函数，当使用这个计算属性时，会执行一次
      //注册一个参数state 其他为大仓库中的数据
      categoryList: (state) => {
        return state.home.categoryList;
      },
    }),
  },
};
</script>

<style scoped lang="less">
.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background: #fafafa;
      z-index: 999;

      .all-sort-list2 {
        .item {
          h3 {
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;
            a {
              cursor: pointer;
              color: #333;
            }
          }

          .item-list {
            display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                  a {
                    cursor: pointer;
                  }
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }

          // &:hover {
          //   .item-list {
          //     display: block;
          //   }
          // }
          .curs {
            display: block;
          }
        }
        .cur {
          background-color: deeppink;
        }
        // .item:hover{
        //   background-color: deeppink;
        // }
      }
    }
    //添加过度动画样式
    //过度动画开始样式(进入)
    .sort-enter{
      height: 0px;
    }
   //过度动画结束样式(进入)
    .sort-enter-to{
      height: 461px;
    }
    //定义动画时间，速率
    .sort-enter-active{
      transition: all .3s linear;
    }
        .sort-enter-active{
      transition: all .3s linear;
    }
  }
}
</style>