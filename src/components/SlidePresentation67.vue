<template>
  <div class="slide">
    <div class="heading">RESTful - JAX RS</div>
    <div class="content">
      <p>
        Bonus: Pouvez-vous faire la même chose avec la méthode @POST addPerson.
        Cette fois, je veux que vous ajoutiez la personne à la liste des
        personnes et que vous enregistriez la nouvelle personne dans la console.
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
<span style="color: #555555; font-weight: bold">@POST</span>
<span style="color: #008800; font-weight: bold">public</span> String <span style="color: #0066BB; font-weight: bold">addPerson</span><span style="color: #333333">()</span> <span style="color: #333333">{</span>
	Person newPers <span style="color: #333333">=</span> <span style="color: #008800; font-weight: bold">null</span><span style="color: #333333">;</span>
	<span style="color: #888888">//TODO Mettre en œuvre la méthode addPerson.</span>
	<span style="color: #888888">//Adding CORS header for testing. This header should not be in production code</span>
	<span style="color: #008800; font-weight: bold">return</span> newPers<span style="color: #333333">.</span><span style="color: #0000CC">toString</span><span style="color: #333333">();</span>
<span style="color: #333333">}</span>
</pre>
      </div>

      <a
        href="./exercices/rest/jax-rs-exercice-1.zip"
        download="jax-rs-exercice-1.zip"
        ><img
          src="../assets/illustrations/zip-file.svg"
          style="width: 8%"
        />Download zip exercice</a
      >
    </div>
  </div>
</template>

<style scoped></style>
