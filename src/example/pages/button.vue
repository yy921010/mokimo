<template>
  <div class="buttons">
    <h1>按钮</h1>
    <h2>基本状态</h2>
    <p>
      <mo-button>default</mo-button>
      <br>
      <mo-button type="primary">primary</mo-button>
      <br>
      <mo-button type="large">large</mo-button>
      <br>
      <mo-button type="small">small</mo-button>
      <br>
      <mo-button type="mini">mini</mo-button>
      <br>
      <mo-button type="ghost">ghost</mo-button>
    </p>
    <h2>禁用状态</h2>
    <p>
      <mo-button disable>default</mo-button>
      <br>
      <mo-button iconName="search" type="primary" disable>primary</mo-button>
      <br>
      <mo-button type="large" disable>large</mo-button>
      <br>
      <mo-button type="small" disable>small</mo-button>
      <br>
      <mo-button type="mini" disable>mini</mo-button>
      <br>
      <mo-button type="ghost" disable>ghost</mo-button>
    </p>

    <h2>带有图标</h2>
    <p>
      <mo-button iconName="search" iconType="fill">default</mo-button>
      <br>
      <mo-button iconName="at" type="primary" disable>primary</mo-button>
      <br>
      <mo-button iconName="search" type="large">large</mo-button>
      <br>
      <mo-button iconName="play" type="small">small</mo-button>
      <br>
      <mo-button iconName="search" type="mini">mini</mo-button>
      <br>
      <mo-button iconName="search" type="ghost">ghost</mo-button>
    </p>
  </div>
</template>

<style>
button {
  margin-bottom: 16px !important;
}
</style>
