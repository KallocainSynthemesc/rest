<template>
  <div class="slide">
    <div class="heading">RESTful - Spring comme alternative</div>
    <div class="content">
      <h2>@GetMapping</h2>
      <br />
      <p>
        Les méthodes annotées @GetMapping traitent les requêtes HTTP GET
        correspondant à l'expression URI donnée.
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
        <pre
          style="margin: 0; line-height: 125%"
        ><span style="color: #555555; font-weight: bold">@GetMapping</span><span style="color: #333333">(</span><span style="background-color: #fff0f0">&quot;/person/{id}&quot;</span><span style="color: #333333">)</span>
<span style="color: #555555; font-weight: bold">@ResponseBody</span>
<span style="color: #008800; font-weight: bold">public</span> Person <span style="color: #0066BB; font-weight: bold">findById</span><span style="color: #333333">(</span><span style="color: #555555; font-weight: bold">@PathVariable</span> <span style="color: #008800; font-weight: bold">final</span> <span style="color: #333399; font-weight: bold">int</span> id<span style="color: #333333">)</span> <span style="color: #333333">{</span>
  <span style="color: #008800; font-weight: bold">return</span> personRepository<span style="color: #333333">.</span><span style="color: #0000CC">get</span><span style="color: #333333">(</span>id<span style="color: #333333">);</span>
<span style="color: #333333">}</span>
</pre>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
