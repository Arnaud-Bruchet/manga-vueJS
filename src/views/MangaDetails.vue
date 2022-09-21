<template>
    <div>
        <OtherPagesNavbar />
        <div class="mangaDetails">
            <div class="courses-container mt-5">
                <div class="course">
                    <div class="course-preview" >
                        <img :src='manga.image' alt='affiche' />
                    </div>
                    <div class="course-info p-5">
                        <h6 style="margin-bottom:15px">{{manga.type}}</h6>
                        <h2>{{manga.name}}</h2>
                        <h6 style="margin-bottom:15px; font-size:12px;">Crée le {{manga.createdAt | formatDate}}</h6>
                        <span>"{{manga.resume}}"</span>
                        <h6 style="margin-top:15px; font-size:12px;">Auteur : {{manga.author}}</h6>
                        <h6 style="margin-top:15px; font-size:12px;">Editeur : {{manga.editor}}</h6>
                        <h6 style="margin-top:15px; font-size:20px;">Nombre de tome{{manga.nbTomes>1?'s':''}} : {{manga.nbTomes}}</h6>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
</template>

<script>
    import axios from 'axios';
    import OtherPagesNavbar from '@/components/OtherPagesNavbar.vue';

    const API_MANGA_URL = "http://127.0.0.1:8000/api/manga/";

    export default {
        name: 'MangaDetails',
        data:()=>({
            manga:{}
        }),
        components: {
            OtherPagesNavbar,
        },
        async created() {
            // Je récupère l'id du film
                const {mangaId} = this.$route.params;
            // Je construis l'URL de l'api pour le film avec cet Id
                const apiDetailsUri=API_MANGA_URL+mangaId;
                // console.error(apiDetailsUri);
            // Je récupère les datas
                const thisManga = await axios.get(apiDetailsUri);
            // Je récupère les datas de la recherche
                this.manga=thisManga.data;
                console.log(this.manga);
        }
    }
</script>
<style>
    .courses-container {
        font-family: 'Muli', sans-serif;
        display: flex;
        align-items: center;
        justify-content: center;
        color:black;
        flex-direction: column;
    }

    .course {
        background-color: #fff;
        border-radius: 10px;
        box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
        display: flex;
        max-width: 100%;
        margin: 20px;
        overflow: hidden;
        width: 700px;
    }

    .course h6 {
        opacity: 0.6;
        margin: 0;
        letter-spacing: 1px;
        text-transform: uppercase;
    }

    .course h2 {
        letter-spacing: 1px;
        margin: 10px 0;
    }

    .course-preview {
        background-color: rgb(200, 87, 0);
        color: #fff;
        padding: 30px;
        max-width: 250px;
        height:100%;
    }
    .course-preview img{
        max-height:250px;
    }
    .course-preview a {
        color: #fff;
        display: inline-block;
        font-size: 12px;
        opacity: 0.6;
        margin-top: 30px;
        text-decoration: none;
    }

    .course-info {
        padding: 30px;
        position: relative;
        width: 100%;
    }

    .btn {
        background-color: #2A265F;
        border: 0;
        border-radius: 10px;
        box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
        color: #fff;
        font-size: 16px;
        padding: 12px 25px;
        position: absolute;
        bottom: 30px;
        right: 30px;
        letter-spacing: 1px;
    }

</style>
