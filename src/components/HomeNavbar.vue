<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
                <div class="container">
                    <img src="../assets/Manga.png" style="width:100px" alt="..." />
                    <div class="collapse navbar-collapse" id="navbarResponsive">
                        <ul class="navbar-nav text-uppercase ms-auto py-4 py-lg-0 text-color-header">
                            <li class="nav-item"><router-link to="/">Accueil</router-link></li>
                            <li class="nav-item"><router-link class="router-manga" to="/list">Liste de manga</router-link></li>
                        </ul>
                    </div>
                </div>
            </nav>
            <header class="masthead video-wrapper cadre">
                <video playsinline autoplay muted loop>
                    <source src="../assets/manga_vid.mp4" type="video/mp4">
                </video>
                <div class="header">
                    <h1>Mangapédia</h1>
                    <h2>Bienvenue chez nous !</h2>
                    <router-link to="/list">Voir nos mangas</router-link>
                </div>
        </header>
    </div>
</template>