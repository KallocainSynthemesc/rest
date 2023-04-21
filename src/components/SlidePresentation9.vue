<template>
  <div class="slide">
    <div class="heading">HTTP Protocol detour</div>
    <div class="content">
      <p>
        Chaque message de réponse HTTP est accompagné d'un code d'état. Ce code
        d'état est un code numérique à trois chiffres qui indique au client si
        la demande a abouti ou si d'autres actions sont nécessaires.
      </p>
      <br />
      <p>Liste abrégée des codes d'état courants</p>
      <table>
        <tbody>
          <tr>
            <th>HTTP status code</th>
            <th>Description</th>
          </tr>
          <tr>
            <td>200</td>
            <td>OK. Le document est retourné correctement.</td>
          </tr>
          <tr>
            <td>404</td>
            <td>Non trouvé. Impossible de trouver cette ressource.</td>
          </tr>
          <tr>
            <td>302</td>
            <td>Rediriger. Allez ailleurs pour obtenir la ressource.</td>
          </tr>
          <tr>
            <td>500</td>
            <td>Internal Server Error</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped></style>
