<template>
  <div class="slide">
    <div class="heading">RESTful - JAX-RS Injection</div>
    <div class="content">
      <h2>
        Les annotations JAX-RS peuvent injecter un grand nombre de choses
        différentes.
      </h2>
      <br />
      <div class="flex-container">
        <div style="width: 63%">
          <p><b>@javax.ws.rs.PathParam: </b> paramètres du modèle URI</p>
          <p>
            <b>@javax.ws.rs.MatrixParam: </b>
            paramètres de la matrice URI
          </p>
          <p><b>@javax.ws.rs.QueryParam: </b> paramètres de requête URI</p>
          <p>
            <b>@javax.ws.rs.FormParam: </b>
            données d'un formulaire
          </p>
          <p><b>@javax.ws.rs.HeaderParam: </b> en-têtes de requête HTTP</p>
          <p>
            <b>@javax.ws.rs.CookieParam: </b> cookies HTTP définis par le
            client.
          </p>
          <p>
            <b>@javax.ws.rs.core.Context</b> injecter divers objets d'aide et
            d'information fournis par l'API JAX-RS
          </p>
        </div>
        <div style="width: 35%">
          <img
            src="../assets/illustrations/injection.svg"
            style="width: 100%"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
