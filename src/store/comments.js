import {defineStore} from 'pinia'
import { useStorage } from '@vueuse/core'
export const useCommentsStore = defineStore({
    id: 'comments',
    state: ()=>({
        comments: useStorage('comments',[]), // comments left from the user can be seen at refresh
        newComment: {
            time: '',
            videoid: '',
            username: '',
            commentText: ''
        },
        oldUsername: '',
    }),
    actions: {
        addNewComment(){
            this.comments.unshift(this.newComment)
            this.newComment = {}
        }
    }
})