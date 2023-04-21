<template>
  <div class="slide">
    <div class="heading">JAXB</div>
    <div class="content">
      <div class="flex-container">
        <div style="width: 49%">
          <h2>Exemple:</h2>
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
    <span style="color: #555555; font-weight: bold">@XmlRootElement</span>(name<span style="color: #333333">=</span><span style="background-color: #fff0f0">&quot;customer&quot;</span>)
    <span style="color: #555555; font-weight: bold">@XmlAccessorType</span>(XmlAccessType<span style="color: #333333">.</span>FIELD)
    public <span style="color: #008800; font-weight: bold">class</span> <span style="color: #BB0066; font-weight: bold">Customer</span> {
      <span style="color: #555555; font-weight: bold">@XmlAttribute</span>
      protected <span style="color: #007020">int</span> <span style="color: #007020">id</span>;
      
      <span style="color: #555555; font-weight: bold">@XmlElement</span>
      protected String fullname;
      
      public <span style="color: #007020">int</span> getId() { <span style="color: #008800; font-weight: bold">return</span> this<span style="color: #333333">.</span>id; }
      <span style="color: #333333">...</span>
    }
    </pre>
          </div>
        </div>
        <div style="width: 49%">
          <br />
          <p>
            Si nous devions produire une instance de notre classe Client ayant
            un identifiant de 42 et un nom de "Kilian Schropp", le XML produit
            ressemblerait à ceci
          </p>
          <h2>Résultat</h2>
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
<span style="color: #007700">&lt;customer</span> <span style="color: #0000CC">id=</span><span style="background-color: #fff0f0">&quot;42&quot;</span><span style="color: #007700">&gt;</span>
    <span style="color: #007700">&lt;fullname&gt;</span>Kilian Schropp<span style="color: #007700">&lt;/fullname&gt;</span>
<span style="color: #007700">&lt;/customer&gt;</span>
</pre>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
