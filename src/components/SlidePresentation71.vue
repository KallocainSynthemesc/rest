<template>
  <div class="slide">
    <div class="heading">RESTful - JAX RS</div>
    <div class="content">
      <h2>Conversion d'objets Java</h2>
      <br />
      <p>
        La classe de cet objet doit avoir un constructeur ou une méthode
        statique nommée valueOf() qui prend un seul paramètre de type String
      </p>
      <div class="flex-container">
        <div style="width: 49%">
          <h3>Exemple:</h3>
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
<span style="color: #555555; font-weight: bold">@Path</span><span style="color: #333333">(</span><span style="background-color: #fff0f0">&quot;/myservice&quot;</span><span style="color: #333333">)</span>
<span style="color: #008800; font-weight: bold">public</span> <span style="color: #008800; font-weight: bold">class</span> <span style="color: #BB0066; font-weight: bold">MyService</span> <span style="color: #333333">{</span>
	<span style="color: #555555; font-weight: bold">@GET</span>
	<span style="color: #555555; font-weight: bold">@Produces</span><span style="color: #333333">(</span><span style="background-color: #fff0f0">&quot;text/html&quot;</span><span style="color: #333333">)</span>
	<span style="color: #008800; font-weight: bold">public</span> String <span style="color: #0066BB; font-weight: bold">get</span><span style="color: #333333">(</span><span style="color: #555555; font-weight: bold">@HeaderParam</span><span style="color: #333333">(</span><span style="background-color: #fff0f0">&quot;Referer&quot;</span><span style="color: #333333">)</span> URL referer<span style="color: #333333">)</span> <span style="color: #333333">{</span>
	    <span style="color: #333333">...</span>
	<span style="color: #333333">}</span>
<span style="color: #333333">}</span></pre>
          </div>
        </div>
        <div style="width: 49%">
          <h3>URL constructeur:</h3>
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
            <pre style="margin: 0; line-height: 125%">
<span style="color: #888888">/**</span>
<span style="color: #888888"> * Creates a {@code URL} object from the {@code String}</span>
<span style="color: #888888"> * representation.</span>
<span style="color: #888888"> * ...</span>
<span style="color: #888888"> */</span>
<span style="color: #008800; font-weight: bold">public</span> <span style="color: #0066BB; font-weight: bold">URL</span><span style="color: #333333">(</span>String spec<span style="color: #333333">)</span> <span style="color: #008800; font-weight: bold">throws</span> MalformedURLException <span style="color: #333333">{</span>
	<span style="color: #008800; font-weight: bold">this</span><span style="color: #333333">(</span><span style="color: #008800; font-weight: bold">null</span><span style="color: #333333">,</span> spec<span style="color: #333333">);</span>
<span style="color: #333333">}</span></pre>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
