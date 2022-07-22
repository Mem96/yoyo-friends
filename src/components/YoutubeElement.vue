<template>
<div>
    <div class='video-container'>
    <YouTube 
        :src='this.src'
        ref="youtube"
        id='youtube'
        :host="this.host"
        :vars="this.vars"
        :width=350
        :height=200
        @ready='this.createDurationBar'
        @error='()=>{alert("An error has occured.")}'
    />
    </div>
    <div class='controls'>
        <p class='duration-bar'>{{this.currentTime}}/{{this.totalDuration}}</p>
        <button class='btn very backward' @click="timeGo(-30)"></button>
        <button class='btn backward' @click="timeGo(-10)"></button>
        <button class='btn play' @click="onPlayOrPause" ref='playBtn'></button>
        <button class='btn mute' @click="onMute" ref='muteBtn'></button>
        <button class='btn forward' @click="timeGo(10)"></button>
        <button class='btn very forward' @click="timeGo(30)"></button>
    </div>
</div>
</template>
<script>
import { defineComponent } from 'vue'
import YouTube from 'vue3-youtube'


export default defineComponent({
    components: { YouTube },
    props:{
        title: String,
        author: String,
        src: String,
    },
    data() {
        return{
            currentTimeInSec: undefined,
            currentTime: undefined,
            totalDuration: undefined,
            host: 'https://www.youtube.com',
            activeState: false,
            muteState: false,
            vars: {
            controls: 0,
            modestbranding: 1,
            fs: 0,
            autoplay: 0,
            rel: 1,
            showInfo: 0,
            },
            myInterval: '',
            srcMute: '../assets/images/mute.png',
            srcUnmute: '../assets/images/unmute.png'
        }
    },
    methods: {
        timeManager(time){
            // how to set time for the video:
            let sec = Math.floor(time%60)
            let min = Math.floor(time/60)
            let hours = ''
            if (min > 59){
                hours = `${Math.floor(min/60)}:`;
                min = (Math.floor(min%60));
            }
            if (min < 10){
                let minWithZero = '0'+min
                min = minWithZero;
            }
            if (sec < 10){
                let secWithZero = '0'+sec
                sec = secWithZero;
            }
            return hours+min+':'+sec
        },
        retrieveCurrentTime(){
            this.currentTimeInSec = this.$refs.youtube.getCurrentTime();
            this.currentTime = this.timeManager(this.currentTimeInSec);
        },
        setCurrentTime(){
            // constantly adjusts ongoing time
            this.myInterval = setInterval(this.retrieveCurrentTime, 1000);
        },
        createDurationBar(){
            this.totalDuration = this.timeManager(this.$refs.youtube.getDuration())
            this.setCurrentTime()
        },
        onPlayOrPause() {
            if (this.activeState == true){
                this.$refs.youtube.pauseVideo()
                this.activeState = false
                this.$refs.playBtn.classList.toggle('pause')
            } else {
                this.$refs.youtube.playVideo()
                this.activeState = true
                this.$refs.playBtn.classList.toggle('pause')
            }
        },
        onMute(){
            if (this.muteState == false){
                this.$refs.youtube.mute();
                this.muteState = true;
                this.$refs.muteBtn.classList.toggle('unmute')
                
            } else {
                this.$refs.youtube.unMute();
                this.muteState = false;
                this.$refs.muteBtn.classList.toggle('unmute')
            }
        },
        timeGo(seconds){
            // moves through time in the video
            this.currentTimeInSec = this.currentTimeInSec + Number(seconds);  
            this.$refs.youtube.seekTo(this.currentTimeInSec);
        },
        clearThisInterval(){
            clearInterval(this.myInterval)
        }
    },
    beforeUnmount(){
        this.clearThisInterval() // avoids very annoying message in console
    }
})
</script>
<style scoped>
    .video-container{
        border-radius: 16px;
        overflow: hidden;
        max-width: 350px;
        margin: auto;
        box-shadow: 0px 6px 5px #B6CCFE;
    }
    .btn{
        width: 8%;
        height: 8vw;
        padding: 0;
        margin-left: 1vw;
        margin-right: 1vw;
        display: inline-block;
        background-size: 20px 20px;
        background-repeat: no-repeat;
        background-position: center;
        border: 1px ridge rgb(226, 231, 232);
        box-shadow: 0px 4px 5px #B6CCFE;
        font-size: 20px;
        margin-left: 5px;
        border-radius: 50%;
        background-color: #A0F8D5;
        background-size: 15px 15px;
    }
    button:active{
        background-color: #D9FCEE;
    }

    .play{
        background-image: url('@/assets/images/icons/play.png');
        transform: scale(1.1);
    }
    .pause{
        background-image: url('@/assets/images/icons/pause.png');
        transform: scale(1.1);
    }
    .mute{
        background-image: url('@/assets/images/icons/mute.png');
        transform: scale(1.1);
    }
    .unmute{
        background-image: url('@/assets/images/icons/unmute.png');
        transform: scale(1.1);
    }
    .very.forward{
        background-image: url('@/assets/images/icons/forward30.png');
        background-size: 25px 25px;
        transform: scale(0.9);
    }
    .very.backward{
        background-image: url('@/assets/images/icons/backward30.png');
        background-size: 25px 25px;
        transform: scale(0.9);
    }
    .forward{
        background-image: url('@/assets/images/icons/forward10.png');
        background-size: 25px 25px;
    }
    .backward{
        background-image: url('@/assets/images/icons/backward10.png');
        background-size: 25px 25px;
    }

    @media only screen and (min-width: 900px){
        .btn{
            height: 40px;
            width: 40px;
        }
    }
</style>