<template>
  <div class="slide">
    <div class="heading">RESTful - Spring comme alternative</div>
    <div class="content">
      <h2>@PutMapping</h2>
      <br />
      <p>
        @PutMapping est une annotation composée qui agit comme un raccourci pour
        @RequestMapping(method = RequestMethod.PUT)
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
        ><span style="color: #555555; font-weight: bold">@PutMapping</span><span style="color: #333333">(</span>value <span style="color: #333333">=</span> <span style="background-color: #fff0f0">&quot;persons/{id}&quot;</span><span style="color: #333333">)</span>
<span style="color: #555555; font-weight: bold">@ResponseStatus</span><span style="color: #333333">(</span>HttpStatus<span style="color: #333333">.</span><span style="color: #0000CC">OK</span><span style="color: #333333">)</span>
<span style="color: #008800; font-weight: bold">public</span> <span style="color: #333399; font-weight: bold">void</span> <span style="color: #0066BB; font-weight: bold">update</span><span style="color: #333333">(</span><span style="color: #555555; font-weight: bold">@PathVariable</span><span style="color: #333333">(</span><span style="background-color: #fff0f0">&quot;id&quot;</span><span style="color: #333333">)</span> Integer id<span style="color: #333333">,</span> <span style="color: #555555; font-weight: bold">@RequestBody</span> Person resource<span style="color: #333333">)</span> <span style="color: #333333">{</span>
  personRepository<span style="color: #333333">.</span><span style="color: #0000CC">update</span><span style="color: #333333">(</span>resource<span style="color: #333333">);</span>	
<span style="color: #333333">}</span>
</pre>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
