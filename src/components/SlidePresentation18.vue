<template>
  <div class="slide">
    <div class="heading">RESTful - Adressabilité</div>
    <div class="content">
      <div class="flex-container">
        <div style="width: 62%">
          <p>
            Dans le monde REST, l'adressabilité est gérée par l'utilisation
            d'URI
          </p>
          <h3>Exemple:</h3>
          <div
            style="
              background: #ffffff;
              overflow: auto;
              width: auto;
              border: solid gray;
              border-width: 0.1em 0.1em 0.1em 0.8em;
              padding: 0.2em 0.6em;
            "
          >
            <pre style="margin: 0; line-height: 125%">
            https:<span style="color: #333333">//</span>jsonplaceholder<span style="color: #333333">.</span>typicode<span style="color: #333333">.</span>com<span style="color: #0000DD; background-color: #6bb0f5ff">/todos/1</span></pre>
          </div>
          <p>
            Considérez l'expression du chemin ("/") comme la liste des
            répertoires d'un fichier sur votre machine.
          </p>
          <br />
          <p>
            Le caractère "?" sépare le chemin d'accès de la chaîne de requête.
            La chaîne de requête est une liste de paramètres représentés par des
            paires nom/valeur. Chaque paire est délimitée par le caractère "&".
          </p>
          <h3>Exemple:</h3>
          <div
            style="
              background: #ffffff;
              overflow: auto;
              width: auto;
              border: solid gray;
              border-width: 0.1em 0.1em 0.1em 0.8em;
              padding: 0.2em 0.6em;
            "
          >
            <pre style="margin: 0; line-height: 125%">
  https:<span style="color: #333333">//</span>jsonplaceholder<span style="color: #333333">.</span>typicode<span style="color: #333333">.</span>com<span style="color: #0000DD; background-color: #6bb0f5ff">/albums</span><span style="color: #FF0000; background-color: #FFAAAA">?userId=1</span>
  https:<span style="color: #333333">//</span>jsonplaceholder<span style="color: #333333">.</span>typicode<span style="color: #333333">.</span>com<span style="color: #0000DD; background-color: #6bb0f5ff">/albums</span><span style="color: #FF0000; background-color: #FFAAAA">?userId=1&id=5</span></pre>
          </div>
        </div>
        <div style="width: 34%">
          <img src="../assets/illustrations/house.svg" style="width: 100%" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
