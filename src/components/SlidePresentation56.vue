<template>
  <div class="slide">
    <div class="heading">RESTful - JAX-RS Injection</div>
    <div class="content">
      <div class="flex-container">
        <div style="width: 52%">
          <h2>@PathParam</h2>
          <br />
          <p>
            Nous avons déjà vu @PathParam dans les extraits de code précédents,
            mais qu'est-ce que c'est en fait ?
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
            <span style="color: #555555; font-weight: bold">@Path</span><span style="color: #333333">(</span><span style="background-color: #fff0f0">&quot;{id}&quot;</span><span style="color: #333333">)</span>
            <span style="color: #008800; font-weight: bold">public</span> String <span style="color: #0066BB; font-weight: bold">getPersonById</span><span style="color: #333333">(</span><span style="color: #555555; font-weight: bold">@PathParam</span><span style="color: #333333">(</span><span style="background-color: #fff0f0">&quot;id&quot;</span><span style="color: #333333">)</span> <span style="color: #333399; font-weight: bold">int</span> id<span style="color: #333333">)</span> <span style="color: #333333">{</span>
              <span style="color: #333333">...</span>
            <span style="color: #333333">}</span>
            </pre>
          </div>

          <br />
          <h3>
            @PathParam permet d'injecter la valeur des paramètres de chemin URI
            nommés qui ont été définis dans les expressions @Path.
          </h3>
          <br />
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
            <span style="color: #333333">GET /</span>personnes<span style="color: #333333">/</span><span style="color: #0000DD; font-weight: bold">4</span></pre>
          </div>
        </div>
        <div style="width: 47%">
          <img src="../assets/illustrations/syringe.svg" style="width: 100%" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
