<template>
  <div class="slide">
    <div class="heading">RESTful - JAX-RS Injection</div>
    <div class="content">
      <h2>@Context</h2>
      <br />
      <p>
        Vous pouvez injecter des instances d'UriInfo en utilisant l'annotation
        @javax.ws.rs.core.Context.
      </p>
      <p>Reprenons l'exemple précédent</p>
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
            <span style="color: #555555; font-weight: bold">@Produces</span><span style="color: #333333">(</span><span style="background-color: #fff0f0">&quot;application/xml&quot;</span><span style="color: #333333">)</span>
            <span style="color: #008800; font-weight: bold">public</span> String <span style="color: #0066BB; font-weight: bold">getPersonList</span><span style="color: #333333">(</span><span style="color: #555555; font-weight: bold">@Context</span> UriInfo info<span style="color: #333333">)</span> <span style="color: #333333">{</span>
            String start <span style="color: #333333">=</span> info<span style="color: #333333">.</span><span style="color: #0000CC">getQueryParameters</span><span style="color: #333333">().</span><span style="color: #0000CC">getFirst</span><span style="color: #333333">(</span><span style="background-color: #fff0f0">&quot;start&quot;</span><span style="color: #333333">);</span>
            String size <span style="color: #333333">=</span> info<span style="color: #333333">.</span><span style="color: #0000CC">getQueryParameters</span><span style="color: #333333">().</span><span style="color: #0000CC">getFirst</span><span style="color: #333333">(</span><span style="background-color: #fff0f0">&quot;size&quot;</span><span style="color: #333333">);</span>
              <span style="color: #333333">...</span>
            <span style="color: #333333">}</span></pre>
      </div>
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
            GET <span style="color: #333333">/</span>persons<span style="color: #333333">?</span>start<span style="color: #333333">=</span><span style="color: #0000DD; font-weight: bold">0</span><span style="color: #333333">&amp;</span>size<span style="color: #333333">=</span><span style="color: #0000DD; font-weight: bold">10</span></pre>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
