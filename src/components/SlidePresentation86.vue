<template>
  <div class="slide">
    <div class="heading">RESTful - Spring comme alternative</div>
    <div class="content">
      <h2>@RequestBody</h2>
      <br />
      <p>
        L'annotation @RequestBody associe le corps de la requête HttpRequest à
        un objet de transfert ou de domaine, ce qui permet une désérialisation
        automatique.
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
        ><span style="color: #555555; font-weight: bold">@PostMapping</span><span style="color: #333333">(</span><span style="background-color: #fff0f0">&quot;/request&quot;</span><span style="color: #333333">)</span>
<span style="color: #008800; font-weight: bold">public</span> ResponseEntity <span style="color: #0066BB; font-weight: bold">postController</span><span style="color: #333333">(</span>
  <span style="color: #555555; font-weight: bold">@RequestBody</span> LoginForm loginForm<span style="color: #333333">)</span> <span style="color: #333333">{</span>
    <span style="color: #008800; font-weight: bold">return</span> ResponseEntity<span style="color: #333333">.</span><span style="color: #0000CC">ok</span><span style="color: #333333">(</span>HttpStatus<span style="color: #333333">.</span><span style="color: #0000CC">OK</span><span style="color: #333333">);</span>
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
        ><span style="color: #008800; font-weight: bold">public</span> <span style="color: #008800; font-weight: bold">class</span> <span style="color: #BB0066; font-weight: bold">LoginForm</span> <span style="color: #333333">{</span>
    <span style="color: #008800; font-weight: bold">private</span> String username<span style="color: #333333">;</span>
    <span style="color: #008800; font-weight: bold">private</span> String password<span style="color: #333333">;</span>
    <span style="color: #888888">// ...</span>
<span style="color: #333333">}</span>
</pre>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
