<template>
  <div class="slide">
    <div class="heading">RESTful - Spring comme alternative</div>
    <div class="content">
      <h2>Définition du type de contenu</h2>
      <br />
      <p>
        Si nous voulons modifier le type de contenu de la réponse, nous pouvons
        utiliser l'attribut produces.
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
        <pre
          style="margin: 0; line-height: 125%"
        ><span style="color: #555555; font-weight: bold">@GetMapping</span><span style="color: #333333">(</span>value<span style="color: #333333">=</span><span style="background-color: #fff0f0">&quot;/{id}&quot;</span><span style="color: #333333">,</span> produces <span style="color: #333333">=</span> MediaType<span style="color: #333333">.</span><span style="color: #0000CC">APPLICATION_JSON_VALUE</span><span style="color: #333333">)</span>
<span style="color: #008800; font-weight: bold">public</span> Person <span style="color: #0066BB; font-weight: bold">findByIdJson</span><span style="color: #333333">(</span><span style="color: #555555; font-weight: bold">@PathVariable</span><span style="color: #333333">(</span><span style="background-color: #fff0f0">&quot;id&quot;</span><span style="color: #333333">)</span> Integer id<span style="color: #333333">)</span> <span style="color: #333333">{</span>
  <span style="color: #008800; font-weight: bold">return</span> service<span style="color: #333333">.</span><span style="color: #0000CC">findById</span><span style="color: #333333">(</span>id<span style="color: #333333">);</span>
<span style="color: #333333">}</span>

<span style="color: #555555; font-weight: bold">@GetMapping</span><span style="color: #333333">(</span>value<span style="color: #333333">=</span><span style="background-color: #fff0f0">&quot;/{id}&quot;</span><span style="color: #333333">,</span> produces <span style="color: #333333">=</span> MediaType<span style="color: #333333">.</span><span style="color: #0000CC">APPLICATION_XML_VALUE</span><span style="color: #333333">)</span>
<span style="color: #008800; font-weight: bold">public</span> Person <span style="color: #0066BB; font-weight: bold">findByIdXml</span><span style="color: #333333">(</span><span style="color: #555555; font-weight: bold">@PathVariable</span><span style="color: #333333">(</span><span style="background-color: #fff0f0">&quot;id&quot;</span><span style="color: #333333">)</span> Integer id<span style="color: #333333">)</span> <span style="color: #333333">{</span>
  <span style="color: #008800; font-weight: bold">return</span> service<span style="color: #333333">.</span><span style="color: #0000CC">findById</span><span style="color: #333333">(</span>id<span style="color: #333333">);</span>
<span style="color: #333333">}</span>
</pre>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
