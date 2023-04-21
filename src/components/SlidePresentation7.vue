<template>
  <div class="slide">
    <div class="heading">HTTP Protocol detour</div>
    <div class="content">
      <p>
        Le protocole HTTP prend en charge plusieurs commandes de requête
        différentes, appelées méthodes HTTP. Chaque requête HTTP possède une
        méthode. La méthode indique au serveur l'action à effectuer
      </p>
      <br />
      <table>
        <tbody>
          <tr>
            <th>HTTP method</th>
            <th>Description</th>
          </tr>
          <tr>
            <td>GET</td>
            <td>Envoyer une ressource nommée du serveur au client</td>
          </tr>
          <tr>
            <td>POST</td>
            <td>
              Envoyer les données du client dans une application passerelle
              serveur
            </td>
          </tr>
          <tr>
            <td>PUT</td>
            <td>
              Stocker les données du client dans une ressource serveur nommée
            </td>
          </tr>
          <tr>
            <td>DELETE</td>
            <td>Supprime la ressource nommée d'un serveur.</td>
          </tr>
          <tr>
            <td>HEAD</td>
            <td>
              Envoyer uniquement les en-têtes HTTP de la réponse pour la
              ressource nommée.
            </td>
          </tr>
        </tbody>
      </table>
      <br />
      <p>
        Il existe d'autres méthodes HTTP, mais celles-ci sont les plus
        importantes
      </p>
    </div>
  </div>
</template>

<style scoped></style>
