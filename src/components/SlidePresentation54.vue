<template>
  <div class="slide">
    <div class="heading">RESTful - JAX RS</div>
    <div class="content">
      <div class="flex-container">
        <div style="width: 43%">
          <h2>@Path Expressions</h2>
          <br />
          <p>
            La valeur de l'annotation @Path est généralement une simple chaîne
            de caractères, mais vous pouvez également définir des expressions
            plus complexes pour répondre à vos besoins en matière de recherche
            d'URI
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
            <span style="color: #333333">/</span>personnes<span style="color: #333333">/</span><span style="color: #0000DD; font-weight: bold">4</span>
            <span style="color: #333333">/</span>personnes<span style="color: #333333">/</span>kilian<span style="color: #333333">-</span>schropp</pre>
          </div>
        </div>
        <div style="width: 55%">
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
        <span style="color: #555555; font-weight: bold">@Path</span><span style="color: #333333">(</span><span style="background-color: #fff0f0">&quot;/persons&quot;</span><span style="color: #333333">)</span>
        <span style="color: #008800; font-weight: bold">public</span> <span style="color: #008800; font-weight: bold">class</span> <span style="color: #BB0066; font-weight: bold">PersonResource</span> <span style="color: #333333">{</span>
          
          <span style="color: #555555; font-weight: bold">@GET</span>
          <span style="color: #555555; font-weight: bold">@Path</span><span style="color: #333333">(</span><span style="background-color: red">&quot;{id}&quot;</span><span style="color: #333333">)</span>
          <span style="color: #008800; font-weight: bold">public</span> String <span style="color: #0066BB; font-weight: bold">getPersonById</span><span style="color: #333333">(</span><span style="color: #555555; font-weight: bold">@PathParam</span><span style="color: #333333">(</span><span style="background-color: #fff0f0">&quot;id&quot;</span><span style="color: #333333">)</span> <span style="color: #333399; font-weight: bold">int</span> id<span style="color: #333333">)</span> <span style="color: #333333">{</span>
            <span style="color: #333333">...</span>
          <span style="color: #333333">}</span>
          
          <span style="color: #555555; font-weight: bold">@GET</span>
          <span style="color: #555555; font-weight: bold">@Path</span><span style="color: #333333">(</span><span style="background-color: red">&quot;{firstname}-{lastname}&quot;</span><span style="color: #333333">)</span>
          <span style="color: #008800; font-weight: bold">public</span> String <span style="color: #0066BB; font-weight: bold">getPersonByName</span><span style="color: #333333">(</span><span style="color: #555555; font-weight: bold">@PathParam</span><span style="color: #333333">(</span><span style="background-color: #fff0f0">&quot;firstname&quot;</span><span style="color: #333333">)</span> String first<span style="color: #333333">,</span>
          <span style="color: #555555; font-weight: bold">@PathParam</span><span style="color: #333333">(</span><span style="background-color: #fff0f0">&quot;lastname&quot;</span><span style="color: #333333">)</span> String last<span style="color: #333333">)</span> <span style="color: #333333">{</span>
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
