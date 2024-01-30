<template>
  <div class="slide">
    <div class="heading">RESTful - Spring comme alternative</div>
    <div class="content">
      <h2>@PostMapping</h2>
      <br />
      <p>
        L'annotation @PostMapping est une version spécialisée de l'annotation
        @RequestMapping qui agit comme un raccourci pour @RequestMapping(method
        = RequestMethod.POST).
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
        ><span style="color: #555555; font-weight: bold">@PostMapping</span><span style="color: #333333">(</span><span style="background-color: #fff0f0">&quot;/person&quot;</span><span style="color: #333333">)</span>
<span style="color: #555555; font-weight: bold">@ResponseStatus</span><span style="color: #333333">(</span>HttpStatus<span style="color: #333333">.</span><span style="color: #0000CC">OK</span><span style="color: #333333">)</span>
<span style="color: #008800; font-weight: bold">public</span> <span style="color: #333399; font-weight: bold">boolean</span> <span style="color: #0066BB; font-weight: bold">insertPerson</span><span style="color: #333333">(</span><span style="color: #555555; font-weight: bold">@RequestBody</span> <span style="color: #008800; font-weight: bold">final</span> Person person<span style="color: #333333">)</span> <span style="color: #333333">{</span>
  <span style="color: #008800; font-weight: bold">return</span> personRepository<span style="color: #333333">.</span><span style="color: #0000CC">add</span><span style="color: #333333">(</span>person<span style="color: #333333">);</span>
<span style="color: #333333">}</span>
</pre>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
