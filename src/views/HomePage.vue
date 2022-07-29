<template>
  <div class="homepage-container">
    <div>
      <input
        class="searchBar"
        ref="searchBar"
        v-model="this.searchedItem"
        @keyup.enter="this.filterListandPress"
        @focus="this.noActiveSearch = true"
        @input="this.filterList"
      />
      <button @click="this.filterListandPress"></button>
    </div>
    <ul>
      <span v-if="this.noResults"
        >Sorry, couldn't find any result for this keyword</span
      >
      <li
        v-show="!this.noActiveSearch"
        v-for="video in showOnSearch"
        :key="video.id"
      >
        <video-list-element :videoData="video"></video-list-element>
      </li>
      <li
        v-show="this.noActiveSearch"
        v-for="video in videosList"
        :key="video.id"
      >
        <video-list-element :videoData="video"></video-list-element>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
import VideoListElement from "../components/VideoListElement.vue";

export default {
  name: "HomePage",
  components: {
    VideoListElement,
  },
  data() {
    return {
      videosList: undefined,
      searchedItem: "",
      showOnSearch: [],
      noActiveSearch: true,
      noResults: false,
    };
  },
  methods: {
    getVideos() {
      axios
        .get("https://ott-fogliata.github.io/vuejs-s2i-repository/yoyo.json")
        .then((result) => (this.videosList = result.data))
        .catch((e) => {
          console.log(e);
          alert("An error has occured.");
        });
    },
    filterList() {
      this.noResults = false;
      if (this.searchedItem != "") {
        this.noActiveSearch = false;
        this.showOnSearch = []; //empties list before new search
        for (let i in this.videosList) {
          this.searchedItem = this.searchedItem.toLowerCase();
          let searchedArr = this.searchedItem.split(" "); // separates words to look for them in different order
          let videoSpecs = `${this.videosList[i].title} ${this.videosList[i].author}`; // joins title and author in case of mixed search
          videoSpecs = videoSpecs.toLowerCase();
          if (searchedArr.every((word) => videoSpecs.includes(word))) {
            if (!this.showOnSearch.includes(this.videosList[i])) {
              // avoids repetition
              this.showOnSearch.push(this.videosList[i]);
            }
          }
        }
        if (this.showOnSearch.length == 0) {
          this.noResults = true;
        }
      } else {
        this.noActiveSearch = true;
      }
    },
    filterListandPress() {
      this.filterList();
      // prepares for next search
      this.$refs.searchBar.blur();
      this.searchedItem = "";
    },
  },
  beforeMount() {
    this.getVideos();
  },
};
</script>
<style scoped>
li {
  list-style-type: none;
  list-style-position: inside;
  margin-bottom: 10px;
}
span {
  text-align: center;
  margin: auto;
}
ul {
  padding: 0;
}
input {
  background-color: whitesmoke;
  border: 2px rgb(226, 231, 232) ridge;
  box-shadow: 0px 4px 5px #b6ccfe;
  text-align: left;
  font-family: "plainFont";
  font-size: 20px;
  padding-left: 10px;
  padding-right: 5px;
  border-radius: 20px;
  height: 20px;
  width: 50%;
}
button {
  border: 2px rgb(226, 231, 232) ridge;
  box-shadow: 0px 4px 5px #b6ccfe;
  font-size: 20px;
  margin-left: 5px;
  border-radius: 50%;
  background-color: #f5a728;
  background-image: url("@/assets/images/icons/search.png");
  background-size: 15px 15px;
  background-repeat: no-repeat;
  background-position: center;
  width: 26px;
  height: 26px;
  position: relative;
  top: 5px;
}
button:active {
  background-color: #edae49;
}
.homepage-container {
  background-image: url("../assets/images/background-image.png");
  background-size: auto 85vh;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center center;
  height: 100vh;
}

@media only screen and (min-width: 900px) {
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    row-gap: 20px;
  }
  li {
    width: 30vw;
  }
  li:hover {
    position: relative;
    top: 3px;
  }
  input {
    font-size: 24px;
    padding: 5px;
    margin-bottom: 20px;
  }
  button {
    width: 30px;
    height: 30px;
    top: 6px;
  }
  button:hover {
    background-color: #edae49;
  }
  .homepage-container {
    background-size: 40vw auto;
    background-position: bottom;
  }
}
</style>
