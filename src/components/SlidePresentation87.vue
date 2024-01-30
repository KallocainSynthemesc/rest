<template>
  <div class="slide">
    <div class="heading">RESTful - Spring comme alternative</div>
    <div class="content">
      <h2>@ResponseBody</h2>
      <br />
      <p>
        L'annotation @ResponseBody indique à un contrôleur que l'objet renvoyé
        est automatiquement sérialisé en JSON.
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
        ><span style="color: #008800; font-weight: bold">public</span> <span style="color: #008800; font-weight: bold">class</span> <span style="color: #BB0066; font-weight: bold">Person</span><span style="color: #333333">{</span>
    <span style="color: #008800; font-weight: bold">private</span> String name<span style="color: #333333">;</span> 
    <span style="color: #888888">// standard getters/setters</span>
<span style="color: #333333">}</span>
</pre>
      </div>
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
        ><span style="color: #555555; font-weight: bold">@GetMapping</span><span style="color: #333333">(</span><span style="background-color: #fff0f0">&quot;/person/{id}&quot;</span><span style="color: #333333">)</span>
<span style="color: #555555; font-weight: bold">@ResponseBody</span>
<span style="color: #008800; font-weight: bold">public</span> Person <span style="color: #0066BB; font-weight: bold">getPerson</span><span style="color: #333333">(</span><span style="color: #555555; font-weight: bold">@RequestBody</span> LoginForm loginForm<span style="color: #333333">)</span> <span style="color: #333333">{</span>
  <span style="color: #008800; font-weight: bold">return</span> <span style="color: #008800; font-weight: bold">new</span> <span style="color: #0066BB; font-weight: bold">Person</span><span style="color: #333333">(</span><span style="background-color: #fff0f0">&quot;ton nom&quot;</span><span style="color: #333333">);</span>
<span style="color: #333333">}</span>
</pre>
      </div>
      <p>Resultat:</p>
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
        >{<span style="color: #007700">&quot;nom&quot;</span>:<span style="background-color: #fff0f0">&quot;ton nom&quot;</span>}
</pre>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
