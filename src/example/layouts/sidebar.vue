<template>
  <aside class="sidebar">
    <ul class="sidebar-links">
      <li v-for="(slide,index) in slides" :key="index">
        <section class="sidebar-group depth-0">
          <p class="sidebar-heading">
            <span>{{slide.header}}</span>
          </p>
          <ul class="sidebar-links sidebar-group-items">
            <li v-for="(item,itemIndex) in slide.list" :key="itemIndex">
               <router-link :to="item.linkUrl" class="sidebar-link">{{item.name}}</router-link>
            </li>
          </ul>
        </section>
      </li>
    </ul>
  </aside>
</template>

<script>
export default {
  data () {
    return {
      slides: [
        {
          header: '组件',
          list: [
            {
              linkUrl: '/button',
              name: '按钮'
            },
            {
              linkUrl: '/input',
              name: '输入框'
            },
            {
              linkUrl: '/progress',
              name: '进度条'
            },
            {
              linkUrl: '/time',
              name: '时间'
            },
            {
              linkUrl: '/poster',
              name: '海报'
            }
          ]
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.sidebar {
  font-size: 16px;
  background-color: rgb(20, 20, 20);
  width: 20rem;
  position: fixed;
  z-index: 10;
  margin: 0;
  top: 3.6rem;
  left: 0;
  bottom: 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  border-right: 1px solid rgba(143, 143, 143, .1);
  overflow-y: auto;
  .sidebar-links {
    padding: 1.5rem 0;
    ul {
      padding: 0;
      margin: 0;
      list-style-type: none;
    }
  }

  a.sidebar-link {
    font-size: 1em;
    font-weight: 400;
    display: inline-block;
    color: whitesmoke;
    border-left: 0.25rem solid transparent;
    padding: 0.35rem 1rem 0.35rem 1.25rem;
    line-height: 1.4;
    width: 100%;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    &:hover {
      color: rgba(192, 31, 36, 1);
    }
  }
}
.sidebar > .sidebar-links > li > a.sidebar-link {
  font-size: 1.1em;
  line-height: 1.7;
  font-weight: 700;
}
a:-webkit-any-link {
  color: -webkit-link;
  cursor: pointer;
  text-decoration: none;
}
.router-link-active{
  font-weight: 600 !important;
  color: rgba(192, 31, 36, 1) !important;
  border-left-color: rgba(180, 12, 18, 1) !important;
}
.sidebar-heading {
  color: rgba(245, 245, 245, 0.5);
  -webkit-transition: color 0.15s ease;
  transition: color 0.15s ease;
  cursor: pointer;
  font-size: 1.1em;
  font-weight: 700;
  padding: 0.35rem 1.5rem 0.35rem 1.25rem;
  width: 100%;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  margin: 0;
  border-left: 0.25rem solid transparent;
}
</style>
