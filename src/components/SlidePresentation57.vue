<template>
  <div class="slide">
    <div class="heading">RESTful - JAX-RS Injection</div>
    <div class="content">
      <div class="flex-container">
        <div style="width: 52%">
          <h2>Plus d'un @PathParam</h2>
          <br />
          <p>
            Vous pouvez faire référence à plus d'un paramètre de chemin d'accès
            URI dans vos méthodes Java.
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
        <span style="color: #555555; font-weight: bold">@GET</span>
        <span style="color: #555555; font-weight: bold">@Path</span><span style="color: #333333">(</span><span style="background-color: #fff0f0">&quot;{firstname}-{lastname}&quot;</span><span style="color: #333333">)</span>
        <span style="color: #008800; font-weight: bold">public</span> String <span style="color: #0066BB; font-weight: bold">getPersonByName</span><span style="color: #333333">(</span><span style="color: #555555; font-weight: bold">@PathParam</span><span style="color: #333333">(</span><span style="background-color: #fff0f0">&quot;firstname&quot;</span><span style="color: #333333">)</span> String first<span style="color: #333333">,</span>
        <span style="color: #555555; font-weight: bold">@PathParam</span><span style="color: #333333">(</span><span style="background-color: #fff0f0">&quot;lastname&quot;</span><span style="color: #333333">)</span> String last<span style="color: #333333">)</span> <span style="color: #333333">{</span>
          <span style="color: #333333">...</span>
        <span style="color: #333333">}</span></pre>
          </div>
          <br />
          <p>Reprenons l'exemple précédent avec le nom et le prénom</p>
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
            <span style="color: #333333">GET /</span>personnes<span style="color: #333333">/</span>kilian<span style="color: #333333">-</span>schropp</pre>
          </div>
        </div>
        <div style="width: 45%">
          <img src="../assets/illustrations/path.svg" style="width: 100%" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
