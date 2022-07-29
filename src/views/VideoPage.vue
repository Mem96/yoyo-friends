<template>
  <nav>
    <router-link to="/">&#8678;</router-link>
  </nav>
  <div>
    <h1>{{ this.title }}</h1>
    <h2>{{ this.author }}</h2>
    <youtube-element
      id="youtubeplayer"
      ref="youtubeplayer"
      :title="this.title"
      :author="this.author"
      :src="this.videoSource"
    ></youtube-element>
    <comment-area :videoId="this.videoId"></comment-area>
  </div>
</template>
<script>
import YoutubeElement from "../components/YoutubeElement.vue";
import CommentArea from "../components/CommentArea.vue";

export default {
  name: "VideoPage",
  components: {
    YoutubeElement,
    CommentArea,
  },
  data() {
    return {
      title: this.$route.params.title,
      author: this.$route.params.author,
      videoSource: `https://www.youtube.com/embed/${this.$route.params.id}`,
      videoId: `${this.$route.params.id}`,
    };
  },
};
</script>
<style scoped>
h1 {
  color: #1b4965;
  text-shadow: 1px 1px #ccdbfd;
  font-size: 28px;
  margin: 10px 50px;
}
h2 {
  font-family: plainFont;
  margin-top: 0px;
  font-size: 26px;
  color: #0a8754;
}
a {
  color: #f5a728;
  font-size: 28px;
  text-decoration: none;
  position: absolute;
  border-radius: 50%;
}
a:active {
  color: #edae49;
  background-color: #ccdbfd;
}
nav {
  text-align: left;
  margin-left: 15px;
}
@media only screen and (min-width: 900px) {
  a:hover {
    background-color: #ccdbfd;
  }
  div {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: space-around;
  }
  h1,
  h2 {
    width: 100%;
    margin-block-end: 0;
    margin-block-start: 0;
  }
  nav {
    margin-left: 25px;
  }
  #youtubeplayer {
    display: block;
    margin: 25px;
  }
}
</style>
