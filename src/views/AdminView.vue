<template>
  <div class="manga">
    <OtherPagesNavbar />
    <h1 class="mt-4 text-white">Administration des mangas</h1>
    <router-link :to="{ name: 'AdminNewManga' }">Créer un nouveau manga</router-link>
    <table class="styled-table container mx-auto">
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Type</th>
          <th>Author</th>
          <th>Editor</th>
          <th>Release Date</th>
          <th>Resume</th>
          <th>Nombre de tomes</th>
          <th>Preview</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="manga in mangas" :key="manga.id">
          <td>{{manga.id}}</td>
          <td>{{manga.name}}</td>
          <td>{{manga.type}}</td>
          <td>{{manga.author}}</td>
          <td>{{manga.editor}}</td>
          <td>{{manga.createdAt.substring(0,10)}}</td>
          <td>{{manga.resume}}</td>
          <td>{{manga.nbTomes}}</td>
          <td><img :src="manga.image" alt="" height="150px"></td>
          <td class="iconCrud">
            <router-link :to="{ name: 'AdminEditManga', params: { mangaId: manga.id} }" title="Editer">🪄
            </router-link>
            <a @click="DeleteManga(manga.id)" title="Supprimer">🧻</a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios'
import OtherPagesNavbar from '@/components/OtherPagesNavbar.vue';
const API_MANGA_URL = "http://127.0.0.1:8000/api";

export default {
  name: 'App',
  data: () => ({
    mangas: '',
  }),
  props: {

  },
  components: {
    OtherPagesNavbar,
  },
  methods: {
    async getAllMangas() {
      let rep = await axios.get(API_MANGA_URL + '/mangas')
      this.mangas = rep.data.mangas
      console.log(this.mangas)
    },

    async DeleteManga(mangaId) {
      await axios.delete(API_MANGA_URL + '/manga/' + mangaId,
        {
          headers: {
            'Content-type': 'application/x-www-form-urlencoded',
          }
        })
      // console.log(mangaId)
      this.$router.push({ name: 'AdminSide' })
    }
  },
  async created() {
    await this.getAllMangas()
  },
  async updated() {
    await this.getAllMangas()
  }
}
</script>  
  
<style scoped>
.iconCrud {
  display: flex;
  flex-wrap: nowrap;
}

.iconCrud a {
  z-index: 10;
}

a {
  text-decoration: none;
  font-size: 30px;
  cursor: pointer;
}

.styled-table {
  border-collapse: collapse;
  margin: 25px 0;
  font-size: 0.9em;
  font-family: sans-serif;
  min-width: 1200px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
}

.styled-table thead tr {
  background-color: transparent;
  color: #ffffff;

}

.styled-table th,
.styled-table td {
  padding: 12px 15px;
}

.styled-table tbody tr {
  border-bottom: 1px solid #dddddd;
}

.styled-table tbody tr:nth-of-type(even) {
  background-color: #f3f3f3;
}

.styled-table tbody tr:last-of-type {
  border-bottom: 2px solid #f3f3f3;
}

.styled-table tbody tr.active-row {
  font-weight: bold;
  color: #fff;
}

td {
  color: #000;
  font-weight: bold;
}
</style>