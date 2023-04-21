<template>
  <div class="slide">
    <div class="heading">RESTful - JAX RS</div>
    <div class="content">
      <div class="flex-container">
        <div style="width: 48%">
          <h2>@Path</h2>
          <br />
          <p>
            L'annotation @javax.ws.rs.Path dans JAX-RS est utilisée pour définir
            un modèle de correspondance URI pour les requêtes HTTP entrantes.
          </p>
          <p>
            Elle peut être placée sur une classe ou sur une ou plusieurs
            méthodes Java Java
          </p>
          <p>Dans cet exemple, j'ai deux points terminaux</p>
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
            <span style="color: #333333">/</span>personnes
            <span style="color: #333333">/</span>personnes<span style="color: #333333">/</span>underaged</pre>
          </div>
        </div>
        <div style="width: 48%">
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
            <span style="color: red; font-weight: bold">@Path</span><span style="color: #333333">(</span><span style="background-color: #fff0f0">&quot;/persons&quot;</span><span style="color: #333333">)</span>
            <span style="color: #008800; font-weight: bold">public</span> <span style="color: #008800; font-weight: bold">class</span> <span style="color: #BB0066; font-weight: bold">PersonResource</span> <span style="color: #333333">{</span>
              
              <span style="color: #555555; font-weight: bold">@GET</span>
              <span style="color: #008800; font-weight: bold">public</span> String <span style="color: #0066BB; font-weight: bold">getPersonList</span><span style="color: #333333">()</span> <span style="color: #333333">{</span>
                <span style="color: #333333">...</span>
              <span style="color: #333333">}</span>
              
              <span style="color: #555555; font-weight: bold">@GET</span>
              <span style="color: red; font-weight: bold">@Path</span><span style="color: #333333">(</span><span style="background-color: #fff0f0">&quot;underaged&quot;</span><span style="color: #333333">)</span>
              <span style="color: #008800; font-weight: bold">public</span> String <span style="color: #0066BB; font-weight: bold">getUnderagedPersonList</span><span style="color: #333333">()</span> <span style="color: #333333">{</span>
                <span style="color: #333333">...</span>
              <span style="color: #333333">}</span>
            <span style="color: #333333">}</span></pre>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
