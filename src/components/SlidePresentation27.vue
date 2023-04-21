<template>
  <div class="slide">
    <div class="heading">RESTful - Communiquer sans état</div>
    <div class="content">
      <div class="flex-container">
        <div style="width: 60%">
          <h2>
            Avec REST, il n'y a pas de session client sauvegardée sur le
            serveur.
          </h2>
          <p>
            Le serveur ne fait qu'enregistrer et gérer l'état des ressources
            qu'il expose.
          </p>
          <p>
            <span style="font-size: 1.6rem">→</span> Il y a 25-30 ans, les
            clients lourds s'occupaient des sessions des clients.
          </p>
          <p>
            <span style="font-size: 1.6rem">→</span> Nous avons commencé à
            maintenir des sessions client sur le serveur en raison des limites
            du navigateur.
          </p>
          <p>
            <span style="font-size: 1.6rem">→</span> Vers 2008, les navigateurs
            sont devenus suffisamment sophistiqués pour maintenir leur propre
            état de session.
          </p>
          <br />
          <h2>La boucle est bouclée</h2>
        </div>
        <div style="width: 38%">
          <img
            src="../assets/illustrations/eatingTail.svg"
            style="width: 100%"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
