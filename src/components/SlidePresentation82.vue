<template>
  <div class="slide">
    <div class="heading">JAXB et JSON</div>
    <div class="content">
      <p>
        Vous vous souvenez de @QueryParam et de la façon dont il permet de
        réduire la taille des résultats ?
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
<span style="color: #008800; font-weight: bold">public</span> String <span style="color: #0066BB; font-weight: bold">getPersonList</span><span style="color: #333333">(</span><span style="color: #555555; font-weight: bold">@QueryParam</span><span style="color: #333333">(</span><span style="background-color: #fff0f0">&quot;start&quot;</span><span style="color: #333333">)</span> <span style="color: #333399; font-weight: bold">int</span> start<span style="color: #333333">,</span>
<span style="color: #555555; font-weight: bold">@QueryParam</span><span style="color: #333333">(</span><span style="background-color: #fff0f0">&quot;size&quot;</span><span style="color: #333333">)</span> <span style="color: #333399; font-weight: bold">int</span> size<span style="color: #333333">))</span> <span style="color: #333333">{</span>
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
