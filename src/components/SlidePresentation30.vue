<template>
  <div class="slide">
    <div class="heading">Javascript - AJAX</div>
    <div class="content">
      <div class="flex-container">
        <div style="width: 53%">
          <h2>Qu'est-ce que le JavaScript asynchrone ?</h2>
          <br />
          <h3>Exemple de callback synchrone</h3>
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
            <span style="color: #008800; font-weight: bold">function</span> callback(city) {
              console.log(city);
            }
            cities.forEach(callback);</pre>
          </div>
          <br />
          <h3>Exemple de callback asynchrone</h3>
          <!-- HTML generated using hilite.me -->
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
            <span style="color: #008800; font-weight: bold">function</span> repositionElement() {
              console.log(<span style="background-color: #fff0f0">&#39;repositionnement !&#39;</span>);
            }
            <span style="color: #007020">window</span>.requestAnimationFrame(repositionElement);
            console.log(<span style="background-color: #fff0f0">&#39;Je suis la dernière ligne du script&#39;</span>);
            <span style="color: #888888">// Console output:</span>
            <span style="color: #888888">// Je suis la dernière ligne du script</span>
            <span style="color: #888888">// repositionnement !</span></pre>
          </div>
        </div>
        <div style="width: 45%">
          <img
            src="../assets/illustrations/synchron-async.svg"
            style="width: 100%"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
