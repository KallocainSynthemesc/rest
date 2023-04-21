<template>
  <div class="slide">
    <div class="heading">RESTful - JAX-RS Injection</div>
    <div class="content">
      <h2>@QueryParam</h2>
      <br />
      <p>
        L'annotation @javax.ws.rs.QueryParam vous permet d'injecter des
        paramètres de requête URI individuels dans vos paramètres Java.
      </p>
      <div class="flex-container">
        <div style="width: 48%">
          <p>
            Supposons que nous voulions un sous-ensemble de toutes les personnes
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
        <div style="width: 50%">
          <img
            src="../assets/illustrations/grandopening.svg"
            style="width: 100%"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
