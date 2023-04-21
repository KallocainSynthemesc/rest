<template>
  <div class="slide">
    <div class="heading">HTTP Protocol detour</div>
    <div class="content">
      <p>
        Comme Internet héberge plusieurs milliers de types de données
        différents, HTTP marque soigneusement chaque objet transporté sur le Web
        avec une étiquette de format de données appelée type MIME.
      </p>
      <div class="flex-container">
        <div style="width: 45%">
          <p>
            • Un document texte au format HTML serait étiqueté avec le type
            text/html
          </p>
          <p>
            • Un document de texte ASCII simple serait étiqueté avec le type
            text/plain
          </p>
          <p>• Une version JPEG d'une image serait image/jpeg</p>
          <p>• Une image au format GIF serait image/gif</p>
          <p>• Un film Apple QuickTime serait video/quicktime.</p>
          <p>
            • Une présentation Microsoft PowerPoint serait
            application/vnd.mspowerpoint
          </p>
        </div>
        <div style="width: 50%">
          <br />
          <img src="../assets/illustrations/httpMIME.svg" style="width: 100%" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
