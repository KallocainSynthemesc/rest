<template>
  <div class="slide">
    <div class="heading">Javascript - Promise</div>
    <div class="content">
      <div class="flex-container">
        <div style="width: 50%">
          <p>
            Une Promise est un objet qui sert d'espace réservé pour une valeur.
            Cette valeur est généralement le résultat d'une opération asynchrone
            telle qu'une requête HTTP ou la lecture d'un fichier sur le disque.
          </p>
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
    <span style="color: #008800; font-weight: bold">let</span> myPromise <span style="color: #333333">=</span> <span style="color: #008800; font-weight: bold">new</span> Promise(<span style="color: #008800; font-weight: bold">function</span>(myResolve, myReject) {
      <span style="color: #888888">// &quot;Producing Code&quot; (Ça peut prendre du temps)</span>

    myResolve(); <span style="color: #888888">// en cas de succès</span>
    myReject();  <span style="color: #888888">// en cas d&#39;erreur</span>
    });

    <span style="color: #888888">//&quot;Code consommé&quot; (doit attendre une promesse accomplie)</span>
    myPromise.then(
    <span style="color: #008800; font-weight: bold">function</span>(value) { <span style="color: #888888">/* code en cas de succès */</span> },
    <span style="color: #008800; font-weight: bold">function</span>(error) { <span style="color: #888888">/* code en cas d&#39;erreur */</span> }
    );</pre>
          </div>
        </div>
        <div style="width: 45%">
          <br />
          <img
            src="../assets/illustrations/ladies-hand-with-diamond-ring.svg"
            style="width: 100%"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
