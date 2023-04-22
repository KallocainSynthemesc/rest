<template>
  <div class="slide">
    <div class="heading">RESTful - JAX RS</div>
    <div class="content">
      <div class="flex-container">
        <div style="width: 58%">
          <p>
            Exercice: Pouvez-vous travailler sur PersonResource pour enregistrer
            l'objet Person désiré dans la console en fonction de l'ID ? (Voir
            l'exemple de getPersonsList)
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
<span style="color: #555555; font-weight: bold">@Path</span><span style="color: #333333">(</span><span style="background-color: #fff0f0">&quot;{id}&quot;</span><span style="color: #333333">)</span>
<span style="color: #008800; font-weight: bold">public</span> String <span style="color: #0066BB; font-weight: bold">getPersonById</span><span style="color: #333333">(</span><span style="color: #555555; font-weight: bold">@PathParam</span><span style="color: #333333">(</span><span style="background-color: #fff0f0">&quot;id&quot;</span><span style="color: #333333">)</span> <span style="color: #333399; font-weight: bold">long</span> id<span style="color: #333333">)</span> <span style="color: #333333">{</span>
	Person resultPers <span style="color: #333333">=</span> <span style="color: #008800; font-weight: bold">null</span><span style="color: #333333">;</span>
	<span style="color: #888888">////TODO Mettre en œuvre la méthode getPersonById</span>
	<span style="color: #008800; font-weight: bold">return</span> resultPers<span style="color: #333333">.</span><span style="color: #0000CC">toString</span><span style="color: #333333">();</span>
<span style="color: #333333">}</span>
</pre>
          </div>

          <p>
            vous n'avez pas besoin de toucher aux autres classes et fichiers de
            configuration pour l'instant. Voyez cela comme un cadeau que je vous
            fais
          </p>
          <a
            href="./exercices/rest/jax-rs-exercice-1.zip"
            download="jax-rs-exercice-1.zip"
            ><img
              src="../assets/illustrations/zip-file.svg"
              style="width: 8%"
            />Download zip exercice</a
          >
        </div>
        <div style="width: 39%">
          <img src="../assets/illustrations/chefcake.svg" style="width: 100%" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
