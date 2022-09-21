<template>
    <div class="card col-md-2 ms-3 mb-2" @click="goToMangaDetails(manga.id)">
        <div class="card-title my-auto" style="height:350px">
            <img :src="manga.image" style="height:200px" class="mt-3 mb-2 img-shadow"/>
            <div style="height:100px;display: grid;justify-content: center;align-items: center;">
                <h2 style="">{{manga.name}}</h2>
            </div>
            
        </div>
        <div class="card-footer" style="padding:0px; margin:-10px">
            <p>{{manga.type}}</p>
            <p>{{manga.nbTomes}} tome{{manga.nbTomes>1?'s':''}}</p>
        </div> 
    </div>
</template>

<script>
    
    export default {
      name: 'MangaCard',
      data:()=>({
        mangas:{},
      }),
      props:{
        manga:{
            type: Object,
        }
      },
      methods:{
        goToMangaDetails(mangaId){
            this.$router.push({name:'mangaDetails', params:{mangaId:mangaId}});
        }
      }
    }
    </script>