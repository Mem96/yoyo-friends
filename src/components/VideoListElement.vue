<template>
  <router-link
    :to="{
      name: 'video',
      params: {
        id: videoData.youtubeId,
        title: videoData.title,
        author: videoData.author,
      },
    }"
  >
    <div>
      <h1>{{ videoData.title }}</h1>
      <h2>{{ videoData.author }}</h2>
    </div>
  </router-link>
</template>
<script>
export default {
  name: "video-list-element",
  props: {
    videoData: Object,
  },
};
</script>
<style scoped>
div {
  background-color: white;
  box-shadow: 0px 4px 5px #b6ccfe;
  border-radius: 16px 0px;
  margin: auto;
  margin-bottom: 20px;
  padding: 5px 10px;
  width: 85%;
}
div:active {
  box-shadow: 0px 4px 2px #abc4ff;
}
a {
  text-decoration: none;
}
h1 {
  color: #1b4965;
  margin-bottom: 0px;
  margin-top: 10px;
  text-shadow: 1px 1px #ccdbfd;
  font-size: 25px;
}
h2 {
  color: #0a8754;
  margin-top: 0px;
  margin-bottom: 10px;
  font-size: 20px;
  font-family: "plainFont";
}
@media only screen and (min-width: 900px) {
  h1 {
    font-size: 30px;
  }
  h2 {
    font-size: 28px;
  }
}
</style>
