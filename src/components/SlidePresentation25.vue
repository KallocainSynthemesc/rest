<template>
  <div class="slide">
    <div class="heading">RESTful - Orienté représentation</div>
    <div class="content">
      <div class="flex-container">
        <div style="width: 66%">
          <p>
            Les représentations peuvent être XML, JSON, YAML, ou tout autre
            format que vous pouvez imaginer.
          </p>
          <p>
            HTTP utilise l'en-tête Content-Type pour indiquer au client ou au
            serveur le format des données qu'il reçoit
          </p>
          <h3>En voici quelques exemples:</h3>
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
        text<span style="color: #333333">/</span>plain
        text<span style="color: #333333">/</span>html
        application<span style="color: #333333">/</span>xml
        text<span style="color: #333333">/</span>html; charset<span style="color: #333333">=</span>iso<span style="color: #6600EE; font-weight: bold">-8859-1</span></pre>
          </div>
          <br />
          <p>
            Avec l'en-tête Accept, un client peut dresser la liste de ses
            formats de réponse préférés.
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
            Accept: application<span style="color: #333333">/</span>json
            Accept: application<span style="color: #333333">/</span>xml
            Accept: application<span style="color: #333333">/</span>yaml</pre>
          </div>
        </div>
        <div style="width: 32%">
          <img
            src="../assets/illustrations/BasketSeller.svg"
            style="width: 100%"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
