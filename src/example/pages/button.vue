<template>
  <div class="buttons">
    <h1>按钮</h1>
    <h2>基本状态</h2>
    <p>
      <vi-button>default</vi-button>
      <vi-button type="default">default</vi-button>
      <vi-button type="primary">primary</vi-button>
      <br>
      <vi-button type="info">info</vi-button>
      <vi-button type="link">link</vi-button>
    </p>
    <h2>禁用状态</h2>
    <p>
      <vi-button disable>default</vi-button>
      <vi-button icon="search" type="primary" disable>primary</vi-button>
      <vi-button type="primary" disable>primary</vi-button>
      <br>
      <vi-button type="info" disable>info</vi-button>
      <vi-button type="link" disable>link</vi-button>
      <br>
    </p>

    <h2>按钮尺寸</h2>
    <p>
      <vi-button size="medium">medium</vi-button>
      <vi-button size="large" type="info">large</vi-button>
      <vi-button size="small">small</vi-button>
      <vi-button size="mini" type="primary">mini</vi-button>
    </p>

    <h2>图标</h2>
    <p>
      <vi-button size="medium" icon="user">medium</vi-button>
      <vi-button size="large" icon="search" type="info">large</vi-button>
      <vi-button size="small">small</vi-button>
      <vi-button size="mini" type="primary">mini</vi-button>
    </p>
  </div>
</template>
<style>
button {
  margin-bottom: 16px !important;
}
</style>
