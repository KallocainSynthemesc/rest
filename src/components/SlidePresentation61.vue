<template>
  <div class="slide">
    <div class="heading">RESTful - JAX-RS Injection</div>
    <div class="content">
      <h2>@FormParam</h2>
      <br />
      <p>
        L'annotation @javax.ws.rs.FormParam est utilisée pour accéder aux corps
        de requête codés en format application/x-www-formurlencoded. En d'autres
        mots, elle est utilisée pour accéder aux entrées individuelles postées
        par un document de formulaire HTML.
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
<span style="color: #007700">&lt;form</span> <span style="color: #0000CC">action=</span><span style="background-color: #fff0f0">&quot;http://example.com/persons&quot;</span> <span style="color: #0000CC">method=</span><span style="background-color: #fff0f0">&quot;post&quot;</span><span style="color: #007700">&gt;</span>
  <span style="color: #007700">&lt;label</span> <span style="color: #0000CC">for=</span><span style="background-color: #fff0f0">&quot;firstname&quot;</span><span style="color: #007700">&gt;</span>First name:<span style="color: #007700">&lt;/label&gt;</span>
  <span style="color: #007700">&lt;input</span> <span style="color: #0000CC">type=</span><span style="background-color: #fff0f0">&quot;text&quot;</span> <span style="color: #0000CC">name=</span><span style="background-color: #fff0f0">&quot;firstname&quot;</span> <span style="color: #0000CC">id=</span><span style="background-color: #fff0f0">&quot;firstname&quot;</span><span style="color: #007700">&gt;&lt;br&gt;</span>
  <span style="color: #007700">&lt;label</span> <span style="color: #0000CC">for=</span><span style="background-color: #fff0f0">&quot;lastname&quot;</span><span style="color: #007700">&gt;</span>Last name:<span style="color: #007700">&lt;/label&gt;</span>
  <span style="color: #007700">&lt;input</span> <span style="color: #0000CC">type=</span><span style="background-color: #fff0f0">&quot;text&quot;</span> <span style="color: #0000CC">name=</span><span style="background-color: #fff0f0">&quot;lastname&quot;</span> <span style="color: #0000CC">id=</span><span style="background-color: #fff0f0">&quot;lastname&quot;</span><span style="color: #007700">&gt;&lt;br&gt;</span>
  <span style="color: #007700">&lt;input</span> <span style="color: #0000CC">type=</span><span style="background-color: #fff0f0">&quot;submit&quot;</span> <span style="color: #0000CC">value=</span><span style="background-color: #fff0f0">&quot;Send&quot;</span><span style="color: #007700">&gt;</span>
<span style="color: #007700">&lt;/form&gt;</span></pre>
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
            <pre
              style="margin: 0; line-height: 125%"
            ><span style="color: #555555; font-weight: bold">@POST</span>
<span style="color: #008800; font-weight: bold">public</span> <span style="color: #333399; font-weight: bold">void</span> <span style="color: #0066BB; font-weight: bold">createPerson</span><span style="color: #333333">(</span><span style="color: #555555; font-weight: bold">@FormParam</span><span style="color: #333333">(</span><span style="background-color: #fff0f0">&quot;firstname&quot;</span><span style="color: #333333">)</span> String first<span style="color: #333333">,</span>
<span style="color: #555555; font-weight: bold">@FormParam</span><span style="color: #333333">(</span><span style="background-color: #fff0f0">&quot;lastname&quot;</span><span style="color: #333333">)</span> String last<span style="color: #333333">)</span> <span style="color: #333333">{</span>
<span style="color: #333333">...</span>
<span style="color: #333333">}</span></pre>
          </div>
        </div>
      </div>
      <br />
      <p>
        Les données de formulaire sont codées en URL lorsqu'elles sont
        transmises. En utilisant @FormParam, JAX-RS décode automatiquement la
        valeur de l'entrée du formulaire avant de l'injecter.
      </p>
    </div>
  </div>
</template>

<style scoped></style>
