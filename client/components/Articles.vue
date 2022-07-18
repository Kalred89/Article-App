<template>
<div>
    <div class="container">
        <div class="album py-5 bg-light">
                <!-- <div class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
                    <input type="search" class="form-control" placeholder="Search..." aria-label="Search" @keyup="search($event.target.value)">
                </div> -->
                <form @submit.prevent="search($event.target.value)">
                    <input v-model="searchNews" type="text" name="search" placeholder="Search news..." required>
                    <button type="submit">Search</button>
                </form>
        </div>        
    </div>

    <main class="container">

        <div class="row mb-2"  v-for="n in news" :key="n._id">
            <div class="col-md-6">
                <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                    <div class="col p-4 d-flex flex-column position-static">
                        <strong class="d-inline-block mb-2 text-primary">{{n.topic}}</strong>
                        <h3 class="mb-0">{{n.title}}</h3>
                        <div class="mb-1 text-muted">{{n.published_date}}</div>
                        <p class="card-text mb-auto">{{n.summary}}</p>
                        <a :href="n.link" class="stretched-link">Continue reading</a>
                        </div>
                        <div class="col-auto d-none d-lg-block">
                        <img :src="n.media" alt="image" width="400" height="450" class="img-fluid">
                    </div>
                </div>
            </div>
        </div>

    </main>
    
<!--  -->
</div>  
</template>

<script>
    export default {
        name: "Articles",
        props: ['news'],
        data(){
            return {
                searchNews: ""
            }
        },
        methods: {
            search(s){
                this.$emit('set-filters',{
                    s: this.searchNews
                })
            }
        }
    }
</script>