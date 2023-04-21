<template>
  <div class="slide">
    <div class="heading">RESTful - JAX RS</div>
    <div class="content">
      <h2>Conversion automatique des types Java</h2>
      <br />
      <p>
        JAXRS peut convertir des données de type chaîne de caractères en
        n'importe quel type Java souhaité
      </p>
      <h3>il doit répondre à l'un des critères suivants :</h3>
      <br />
      <p><span style="font-size: 2rem">↪</span> C'est un type primitif</p>
      <p>
        <span style="font-size: 2rem">↪</span> Classe Java avec un constructeur
        à paramètre unique de type String
      </p>
      <p>
        <span style="font-size: 2rem">↪</span> Classe Java qui possède une
        méthode statique nommée valueOf() avec un seul argument de type String
        et qui renvoie une instance de la classe
      </p>
      <p><span style="font-size: 2rem">↪</span> C'est une List ou un Set</p>
    </div>
  </div>
</template>

<style scoped></style>
