<template>
    <div class='comment-area'>
        <div class='comment-container'>
            <div v-for='singleComment in storeComments.comments' :key='singleComment.id'>
                <div class='single-comment' v-if='singleComment.videoId == this.videoId'>
                    <p class='comment-infos'><span>{{singleComment.username}}</span> on {{singleComment.time}} wrote:</p>
                    <p class='comment-content'>{{singleComment.commentText}}</p>
                </div>
            </div>
        </div> 
        <form>
            <div class='form-bars'>
                <input class='username-bar' :placeholder="this.usernamePlaceholder" v-model='this.newComment.username'>
                <span class='missing' v-if='this.commentMissing'><em>Write a comment first!</em></span>
                <textarea class='comment-bar' :placeholder="this.commentPlaceholder" v-model='this.newComment.commentText'></textarea>
                <button @click.prevent='this.onSubmit'></button>
            </div>
        </form> 
    </div>  
</template>
<script setup>
    import {useCommentsStore} from '@/store/comments'

    const storeComments = useCommentsStore()
</script>
<script>
    export default {
        name: 'CommentArea',
        props: {
            videoId: String,
        },
        data(){
            return{
                usernamePlaceholder: 'Username',
                commentPlaceholder: 'Write your comment here',
                newComment: {
                    time: '',
                    videoId: this.videoId,
                    username: '',
                    commentText: '',
                },
                commentMissing: false,
            }
        },
        methods: {
            onSubmit(){
                // checks comment is not empty string
                if (this.newComment.commentText == ''){
                    this.commentMissing = true;
                    setTimeout(()=>{this.commentMissing = false}, 4000)
                    return false
                }
                // returns anonymous comment if no username is given
                if (this.newComment.username == ''){
                    this.newComment.username = 'Anonymous user'
                }
                //sets time of the comment
                let d = new Date()
                let hours = d.getHours()
                let minutes = d.getMinutes()
                if (minutes < 10){
                    minutes = '0'+minutes;
                }
                let year = d.getFullYear().toString().slice(-2)
                let month = d.getMonth()
                month = month++
                if (month < 10){
                    month = '0'+month;
                }
                let day = d.getDate()
                if (day < 10){
                    day = '0'+day;
                }
                this.newComment.time = `${day}/${month}/${year} at ${hours}:${minutes}`
                //pushes new comment and clears form
                this.storeComments.newComment = this.newComment;
                this.storeComments.oldUsername = this.newComment.username;
                this.storeComments.addNewComment()
                if (this.storeComments.oldUsername == 'Anonymous user'){
                    this.storeComments.oldUsername = '';
                }
                this.newComment = {
                    time: '',
                    videoId: this.videoId,
                    username: this.storeComments.oldUsername,
                    commentText: '',
                    }
            }
        }
    }
</script>
<style scoped>
.comment-container{
    width: 90vw;
    height: 30vh;
    border: 2px rgb(226, 231, 232) ridge;
    border-radius: 16px;
    background-color: #EDF2FB;
    margin: auto;
    overflow-y: scroll;
    overflow-x: hidden;
    display: flex;
    flex-direction: column-reverse;
    padding-top: 10px;
}
.comment-content{
    display: block;
    overflow: auto;
    font-family: 'plainFont';
    font-size: 22px;
    margin: 10px;
    text-align: left;
    margin-top: 0px;
    color: #1b4965;
}
.single-comment{
    display: block;
    background-color: white;
    border-radius: 16px 0px;
    width: 90%;
    margin: auto;
    text-align: left;
}
.comment-infos{
    display: block;
    overflow: auto;
    font-family: 'plainFont';
    font-size: 20px;
    text-align: left;
    margin: 10px;
    margin-bottom: 0px;
    margin-top: 0px;
    font-style: italic;
    color: #ABC4FF;
}

span{
    font-family: 'plainFont';
    font-weight: 600;
}
.comment-area{
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: center;
    row-gap: 15px;
    margin-top: 16px;
    margin-bottom: 16px;
}
.username-bar, .comment-bar{
    border: 2px rgb(226, 231, 232) ridge;
    border-radius: 10px 10px 10px 10px;
    text-align: left;
    padding-left: 10px;
    padding-right: 10px;
    color: #1b4965;
}
.username-bar{
    border-radius: 10px 10px 0 0;
    background-color: #EDF2FB;
    font-size: 14px;
    width: 50%;
    border-bottom: none;
}
.comment-bar{
    border-radius: 0 10px 10px 10px;
    resize: vertical;
    font-size: 16px;
    width: 80%;
}
form{
    width: 90vw;
}
.form-bars{
    text-align: left;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-end;
    justify-content: space-between;
    
}
button{
    border: 2px rgb(226, 231, 232) ridge;
    border-radius: 16px;
    color: white;
    background-color: #f5a728;
    background-image: url('@/assets/images/icons/send.png');
    background-size: 15px 15px;
    background-repeat: no-repeat;
    background-position: center;
    width: 26px;
    height: 26px;
    transform: scale(1.1);
    position: relative;
    top: -5px;
}
button:active{
    background-color: #EDAE49;
}
.missing{
    color: #f5a728;
    text-decoration: underline;
    width: 40%;
}
@media only screen and (min-width: 900px){
    .comment-area{
        max-width: 50%;
        margin: 25px;
    }
    .comment-container{
        height: 50vh;
    }
    .comment-content{
        font-size: 26px;
    }
    .username-bar, .comment-bar{
        font-size: 18px;
    }
    .comment-infos{
        font-size: 22px;
    }
}
</style>
