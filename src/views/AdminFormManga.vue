<template>
  <section>
    <OtherPagesNavbar />
    <div class="container mt-4">
      <div id="formulaire" class="row">
        <CardsManga :manga="manga" class="me-4" />
        <div class="col-md-8">
          <h1>{{ onEdit ? 'Edition' : 'Création'}}</h1>
          <router-link :to="{ name: 'AdminSide' }">Retour</router-link>
          <form class="row g-3 needs-validation mt-4" novalidate>
            <div class="col-md-6">
              <label for="validationCustom01" class="form-label">Nom du manga</label>
              <input v-model='manga.name' type="text" class="form-control" id="validationCustom01" value="Mark"
                required>
              <div class="valid-feedback">
                Ok
              </div>
            </div>
            <div class="col-md-6">
              <label for="validationCustom04" class="form-label">Manga Type</label>
              <select v-model='manga.type' class="form-select" id="validationCustom04" required>
                <option disabled value="">Choisissez un type...</option>
                <option v-for="type in mangaType" :key='type'>{{type}}</option>
              </select>
              <div class="invalid-feedback">
                Merci de choisir un type de manga
              </div>
            </div>
            <div class="col-md-6">
              <label for="validationCustom01" class="form-label">Auteur</label>
              <input v-model='manga.author' type="text" class="form-control" id="validationCustom01" value="Mark"
                required>
              <div class="valid-feedback">
                Ok
              </div>
            </div>
            <div class="col-md-6">
              <label for="validationCustom01" class="form-label">Editeur</label>
              <input v-model='manga.editor' type="text" class="form-control" id="validationCustom01" value="Mark"
                required>
              <div class="valid-feedback">
                Ok
              </div>
            </div>
            <div class="col-md-12">
              <label for="validationCustom01" class="form-label">Resumé</label>
              <textarea v-model='manga.resume' class="form-control" id="validationCustom01" value="Mark" rows="7"
                required></textarea>
              <div class="valid-feedback">
                Ok
              </div>
            </div>
            <div class="col-md-6">
              <label for="validationCustom01" class="form-label">Date de parution</label>
              <input v-model='manga.createdAt' type="date" class="form-control" id="validationCustom01" value="Mark"
                required>
              <div class="valid-feedback">
                Ok
              </div>
            </div>
            <div class="col-md-6">
              <label for="validationCustom01" class="form-label">Nombre de tomes</label>
              <input v-model='manga.nbTomes' type="number" class="form-control" id="validationCustom01" value="Mark"
                required>
              <div class="valid-feedback">
                Ok
              </div>
            </div>
            <div class="col-md-12">
              <label for="validationCustom01" class="form-label">Image</label>
              <input v-model='manga.image' type="text" class="form-control" id="validationCustom01" value="Mark"
                required>
              <div class="valid-feedback">
                Ok
              </div>
            </div>
            <div class="col-12 mx-auto">
              <button @click='handleButton' class="btn btn-primary" type="button">{{ onEdit ? 'Editer' :
              'Créer'}}</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

import OtherPagesNavbar from '@/components/OtherPagesNavbar';
import axios from 'axios';
import CardsManga from '@/components/CardsManga.vue';
const API_MANGA_URL = "http://127.0.0.1:8000/api";

export default {
  name: 'AdminFormManga',
  data: () => ({
    onEdit: false,
    mangaId: '',
    mangaType: [
      'Shonen',
      'Shojo',
      'Seinen',
      'Josei',
      'Yuri',
      'Yaoi',
      'Manhwa'
    ],
    manga: {
      name: '',
      type: '',
      author: '',
      editor: '',
      createdAt: '',
      resume: '',
      nbTomes: '',
      image: ''
    },
  }),
  components: {
    OtherPagesNavbar,
    CardsManga,
  },
  methods: {
    async handleButton() {
      if (this.onEdit) {
        this.editManga(this.mangaId);
      } else {
        this.createManga();
        // console.log('create');
      }
    },
    // Fonction de création du manga via l'API
    async createManga() {
      // console.log(this.manga)
      await axios.post(API_MANGA_URL + '/manga', this.manga,
        {
          headers: {
            'Content-type': 'application/x-www-form-urlencoded',
          }
        }
      )
      this.$router.push({ name: 'AdminSide' })
    },

    // Fonction d'édition du manga via l'API
    async editManga(id) {
      await axios.patch(API_MANGA_URL + `/manga/${id}`, this.manga,
        {
          headers: {
            'Content-type': 'application/x-www-form-urlencoded',
          }
        }
      )
      this.$router.push({ name: 'AdminSide' })
    },

    // Fonction pour récupérer le manga choisi via l'API
    async getManga(id) {
      let rep = await axios.get(API_MANGA_URL + `/manga/${id}`);
      // console.log(rep.data)
      this.manga = rep.data;
      this.manga.createdAt = this.manga.createdAt.substring(0, 10);
    },
  },
  // A la création de la page, on récupère l'id dans l'url
  created() {
    let id = this.$route.params.mangaId;

    // S'il n'y a pas d'id dans l'url, on est sur le formulaire de création
    if (!id) {
      // console.log('creation');
      this.mangaId = 'create';
    }

    // S'il y a un id dans l'url, on est sur le formulaire d'édition
    if (id) {
      this.onEdit = true;
      this.mangaId = id;
      this.getManga(id);

      // console.log('editer');
    }
  }
}
</script>

<style scoped>
#formulaire {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.card {
  height: 500px;
}

a {
  font-size: 30px;
  text-decoration: none;
}

label {
  color: #fff;
}

h1 {
  color: #fff;
}

button {
  background-color: red;
  border-color: #000;
}

button:hover {
  background-color: #000;
  border-color: red;
}
</style>