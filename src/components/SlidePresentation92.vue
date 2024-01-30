<template>
  <div class="slide">
    <div class="heading">RESTful - Spring comme alternative</div>
    <div class="content">
      <h2>@DeleteMapping</h2>
      <br />
      <p>
        L'annotation @DeleteMapping associe les requêtes HTTP DELETE à des
        méthodes de traitement spécifiques. Il s'agit d'une annotation composée
        qui agit comme un raccourci pour @RequestMapping(method =
        RequestMethod.DELETE).
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
        ><span style="color: #555555; font-weight: bold">@DeleteMapping</span><span style="color: #333333">(</span><span style="background-color: #fff0f0">&quot;/person/{id}&quot;</span><span style="color: #333333">)</span>
<span style="color: #008800; font-weight: bold">public</span> <span style="color: #333399; font-weight: bold">void</span> <span style="color: #0066BB; font-weight: bold">deletePerson</span><span style="color: #333333">(</span><span style="color: #555555; font-weight: bold">@PathVariable</span> String id<span style="color: #333333">){</span>
  <span style="color: #008800; font-weight: bold">return</span> personRepository<span style="color: #333333">.</span><span style="color: #0000CC">delete</span><span style="color: #333333">(</span>person<span style="color: #333333">);</span>
<span style="color: #333333">}</span>
</pre>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
