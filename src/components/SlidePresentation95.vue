<template>
  <div class="slide">
    <div class="heading">JAX-RS vs Spring</div>
    <div class="content">
      <div class="flex-container">
        <div style="width: 49%">
          <h2>JAX-RS</h2>
          <br />
          <h3>pro</h3>
          <br />
          <p>
            <span style="font-size: 2rem">↪</span
            ><b>Pas de Enfermement propriétaire (Vendor lock-in)</b>
            JAX-RS n'est qu'une spécification et peut être réalisé avec des
            implémentations telles que RESTeasy ou Jersey.
          </p>
          <p>
            <span style="font-size: 2rem">↪</span
            ><b>Accept : application/json ou xml</b>
            la définition du type de contenu ne nécessite qu'une seule méthode
          </p>
          <p></p>
        </div>
        <div style="width: 49%">
          <h2>Spring</h2>
          <br />
          <h3>pro</h3>
          <br />
          <p>
            <span style="font-size: 2rem">↪</span><b>Simple</b>
            C'est plus facile de faire fonctionner le composant REST une fois
            que le Spring Boot est mis en place
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
