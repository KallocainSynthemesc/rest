<template>
  <div class="slide">
    <div class="heading">RESTful - JAX-RS Injection</div>
    <div class="content">
      <div class="flex-container">
        <div style="width: 60%">
          <h2>@CookieParam</h2>
          <br />
          <p>
            Les serveurs peuvent stocker des informations d'état dans des
            cookies sur le client, et peuvent récupérer ces informations lors de
            la prochaine requête du client. L'annotation
            @javax.ws.rs.CookieParam vous permet d'injecter les cookies envoyés
            par une requête client dans vos méthodes JAX-RS.
          </p>
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
<span style="color: #555555; font-weight: bold">@GET</span>
<span style="color: #555555; font-weight: bold">@Produces</span><span style="color: #333333">(</span><span style="background-color: #fff0f0">&quot;text/html&quot;</span><span style="color: #333333">)</span>
<span style="color: #008800; font-weight: bold">public</span> String <span style="color: #0066BB; font-weight: bold">get</span><span style="color: #333333">(</span><span style="color: #555555; font-weight: bold">@CookieParam</span><span style="color: #333333">(</span><span style="background-color: #fff0f0">&quot;personId&quot;</span><span style="color: #333333">)</span> <span style="color: #333399; font-weight: bold">int</span> persId<span style="color: #333333">)</span> <span style="color: #333333">{</span>
<span style="color: #333333">...</span>
<span style="color: #333333">}</span>
</pre>
          </div>
          <br />
          <p>
            L'utilisation de @CookieParam ici fait que le fournisseur JAX-RS
            recherche la valeur du cookie personId dans tous les en-têtes de
            cookies
          </p>
        </div>
        <div style="width: 38%">
          <img src="../assets/illustrations/cookies.svg" style="width: 100%" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
