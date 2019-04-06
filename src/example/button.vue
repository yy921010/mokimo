<template>
  <div class="button-group">
    <h1>按钮</h1>
    <h2>基本状态</h2>
    <mo-button>default</mo-button>
    <mo-button type="primary">primary</mo-button>
    <mo-button type="large">large</mo-button>
    <mo-button type="small">small</mo-button>
    <mo-button type="mini">mini</mo-button>
    <mo-button type="ghost">ghost</mo-button>
    <br>
    <h2>禁用状态</h2>
    <mo-button disable>default</mo-button>
    <mo-button type="primary" disable>primary</mo-button>
    <mo-button type="large" disable>large</mo-button>
    <mo-button type="small" disable>small</mo-button>
    <mo-button type="mini" disable>mini</mo-button>
    <mo-button type="ghost" disable>ghost</mo-button>
    <h2>带有图标</h2>
    <mo-button iconName="search" iconType="fill">default</mo-button>
    <mo-button iconName="at" type="primary" disable>primary</mo-button>
    <mo-button iconName="search" type="large">large</mo-button>
    <mo-button iconName="play" type="small">small</mo-button>
    <mo-button iconName="search" type="mini">mini</mo-button>
    <mo-button iconName="search" type="ghost">ghost</mo-button>
  </div>
</template>

<style>
.button-group{
  min-width: 1280px;
}
</style>
