<template>
  <div class="manga">
    <OtherPagesNavbar />
    <div class="row mx-auto" style="margin-top:80px;">
        <CardsManga v-for="manga in mangas" :key="manga.id" :manga="manga" />
    </div>
    
  </div>
</template>

<script>
import axios from 'axios'
import OtherPagesNavbar from '@/components/OtherPagesNavbar.vue';
import CardsManga from '@/components/CardsManga.vue';

const API_MANGA_URL = "http://127.0.0.1:8000/api/mangas";

export default {
  name: 'App',
  data: () => ({
    mangas: '',
  }),
  props: {

  },
  components: {
    OtherPagesNavbar,
    CardsManga,
  },
  methods: {
    async getAllMangas() {
      let rep = await axios.get(API_MANGA_URL)
      this.mangas = rep.data.mangas
    },
  },
  async created() {
    await this.getAllMangas()
  }
}
</script>  
  
<style scoped>
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