<template>
    <div>
        <!-- <Articles :articles="articles"/> -->
        <articles :news="news" @set-filters="load($event)"/>
    </div>
</template>

<script>
    import Articles from '../components/Articles.vue'
    import axios from "axios";

    export default {
        name: 'home',
        components: { Articles },
        data(){
            return {
                news: [],
                filters: {
                    s: ''
                }
            }
        },
        methods:{
            async load(f){
                this.filters.s= f.s
                const arr = [];

                if(this.filters.s){
                    arr.push(`q=${this.filters.s}`)
                    try {
                        console.log("arr", arr)
                        const art = await axios.get(`http://localhost:3001/articles/search?${arr.join('&')}`);
                        console.log("front - art:", art.data.articles)
                        this.news = art.data.articles;
                        // console.log("news:", this.news)
                    } catch (error) {
                        this.news = error;
                    }
                }


            }
        },
        async mounted(){
            // try {
            // const art = await axios.get(`http://localhost:3001/articles/search?q=boris`);
            // // console.log("front - art:", art.data)
            // this.news = art.data;
            // console.log("news:", this.news)
            // } catch (error) {
            // this.news = error;
            // }
            await this.methods?.load(this.filters)
        },
        
    }
</script>
