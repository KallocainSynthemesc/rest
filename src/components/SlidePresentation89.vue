<template>
  <div class="slide">
    <div class="heading">
      RESTful - Spring comme alternative - Méthodes HTTP
    </div>
    <div class="content">
      <p>
        traditionnellement, si nous voulons mettre en œuvre le gestionnaire
        d'URL en utilisant l'annotation @RequestMapping, cela aurait été quelque
        chose comme ceci :
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
        ><span style="color: #555555; font-weight: bold">@RequestMapping</span><span style="color: #333333">(</span>value <span style="color: #333333">=</span> <span style="background-color: #fff0f0">&quot;/get/{id}&quot;</span><span style="color: #333333">,</span> method <span style="color: #333333">=</span> RequestMethod<span style="color: #333333">.</span><span style="color: #0000CC">GET</span><span style="color: #333333">)</span>
</pre>
      </div>
      <p>L'approche la plus récente permet d'abréger le tout :</p>
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
        ><span style="color: #555555; font-weight: bold">@GetMapping</span><span style="color: #333333">(</span><span style="background-color: #fff0f0">&quot;/get/{id}&quot;</span><span style="color: #333333">)</span>
</pre>
      </div>
      <p>
        Spring supporte actuellement les méthodes de requête HTTP GET, POST,
        PUT, DELETE et PATCH.
      </p>
      <p><b>@GetMapping: </b></p>
      <p><b>@PostMapping: </b></p>
      <p><b>@PutMapping: </b></p>
      <p><b>@DeleteMapping: </b></p>
      <p><b>@PatchMapping: </b></p>
    </div>
  </div>
</template>

<style scoped></style>
