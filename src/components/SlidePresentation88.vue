<template>
  <div class="slide">
    <div class="heading">RESTful - Spring comme alternative</div>
    <div class="content">
      <h2>@RestController</h2>
      <br />
      <p>
        @RestController est une version spécialisée du contrôleur. Il inclut les
        annotations @Controller et @ResponseBody, ce qui simplifie la mise en
        œuvre du contrôleur.
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
        ><span style="color: #555555; font-weight: bold">@RestController</span>
<span style="color: #555555; font-weight: bold">@RequestMapping</span><span style="color: #333333">(</span><span style="background-color: #fff0f0">&quot;books&quot;</span><span style="color: #333333">)</span>
<span style="color: #008800; font-weight: bold">public</span> <span style="color: #008800; font-weight: bold">class</span> <span style="color: #BB0066; font-weight: bold">SimpleBookRestController</span> <span style="color: #333333">{</span>
    
    <span style="color: #555555; font-weight: bold">@GetMapping</span><span style="color: #333333">(</span><span style="background-color: #fff0f0">&quot;/{id}&quot;</span><span style="color: #333333">)</span>
    <span style="color: #008800; font-weight: bold">public</span> Book <span style="color: #0066BB; font-weight: bold">getBook</span><span style="color: #333333">(</span><span style="color: #555555; font-weight: bold">@PathVariable</span> <span style="color: #333399; font-weight: bold">int</span> id<span style="color: #333333">)</span> <span style="color: #333333">{</span>
        <span style="color: #008800; font-weight: bold">return</span> <span style="color: #0066BB; font-weight: bold">findBookById</span><span style="color: #333333">(</span>id<span style="color: #333333">);</span>
    <span style="color: #333333">}</span>
<span style="color: #333333">}</span>
</pre>
      </div>
      <p>Remarquez que nous n'avons plus besoin d'utiliser @ResponseBody</p>
    </div>
  </div>
</template>

<style scoped></style>
