<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: "Lato", "Noto Sans JP", "游ゴシック Medium", "游ゴシック体",
    "Yu Gothic Medium", YuGothic, "ヒラギノ角ゴ ProN",
    "Hiragino Kaku Gothic ProN", "メイリオ", Meiryo, "ＭＳ Ｐゴシック",
    "MS PGothic", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#header {
  height: 150px;
  width: 1200px;
  margin-right: auto;
  margin-left: auto;
  background: white;
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
}
#header a {
  display: block;
  position: relative;
  margin: 2em;
  width: 70pt;
  border: solid 1px silver;
  border-radius: 0.5rem 0.5rem;
  padding: 0.5rem 1.5rem;
  margin-top: 1rem;
  text-decoration: none;
}
#png {
  position: absolute;
  left: 100px;
}
nav {
  border-bottom: 5px solid #ccc;
  position: relative;
}
nav ul {
  position: absolute;
  left: 10%;
  display: table;
  margin: 0 auto;
  padding: 0;
  width: 80%;
  text-align: center;
}
nav ul li {
  display: table-cell;
  min-width: 50px;
}
nav ul li a {
  display: block;
  width: 100%;
  height: 100%;
  padding: 10px 0;
  text-decoration: none;
  color: #aaa;
}
nav ul li.current {
  font-weight: bold;
  border-top: 5px solid #00b0f0;
}
nav ul li.current a {
  color: #00b0f0;
}
nav ul li a:hover {
  color: #0089bb;
  background-color: #fbfbdd;
}
nav ul li:hover {
  border-top: 5px solid #f8e750;
}
</style>
