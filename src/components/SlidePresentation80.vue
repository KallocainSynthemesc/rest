<template>
  <div class="slide">
    <div class="heading">JAXB et JSON</div>
    <div class="content">
      <p>
        JAXB est suffisamment souple pour prendre en charge des formats autres
        que XML
      </p>
      <p>
        Comme nous avons annoté notre classe avec JAXB, nous pouvons déjà
        transformer les classes en JSON. Tout ce que nous avons à faire est de
        l'ajouter à l'annotation @Produces
      </p>

      <div class="flex-container">
        <div style="width: 49%">
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
    <span style="color: #555555; font-weight: bold">@Produces</span><span style="color: #333333">({</span><span style="background-color: #fff0f0">&quot;application/xml&quot;</span><span style="color: #333333">,</span> <span style="background-color: #fff0f0">&quot;application/json&quot;</span><span style="color: #333333">})</span>
    <span style="color: #008800; font-weight: bold">public</span> List<span style="color: #333333">&lt;</span>Person<span style="color: #333333">&gt;</span> <span style="color: #0066BB; font-weight: bold">getPersonList</span><span style="color: #333333">()</span> <span style="color: #333333">{</span>
      <span style="color: #008800; font-weight: bold">return</span> PersonList<span style="color: #333333">.</span><span style="color: #0000CC">persons</span><span style="color: #333333">;</span>
    <span style="color: #333333">}</span>
    </pre>
          </div>
        </div>
        <div style="width: 49%">
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
{
  <span style="color: #007700">&quot;personNum&quot;</span>: <span style="color: #0000DD; font-weight: bold">1</span>,
  <span style="color: #007700">&quot;firstName&quot;</span>: <span style="background-color: #fff0f0">&quot;Kilian&quot;</span>,
  <span style="color: #007700">&quot;lastName&quot;</span>: <span style="background-color: #fff0f0">&quot;Schropp&quot;</span>,
  <span style="color: #007700">&quot;age&quot;</span>: <span style="color: #0000DD; font-weight: bold">28</span>
}</pre>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
