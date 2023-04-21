<template>
  <div class="slide">
    <div class="heading">RESTful - JAX-RS Injection</div>
    <div class="content">
      <div class="flex-container">
        <div style="width: 53%">
          <h2>@HeaderParam</h2>
          <br />
          <p>
            Et si votre application était intéressée par la page web qui renvoie
            à votre service web ? Vous pouvez accéder à l'en-tête HTTP Referer
            en utilisant l'annotation @HeaderParam
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
            <pre style="margin: 0; line-height: 125%">
<span style="color: #555555; font-weight: bold">@GET</span>
<span style="color: #555555; font-weight: bold">@Produces</span><span style="color: #333333">(</span><span style="background-color: #fff0f0">&quot;text/html&quot;</span><span style="color: #333333">)</span>
<span style="color: #008800; font-weight: bold">public</span> String <span style="color: #0066BB; font-weight: bold">get</span><span style="color: #333333">(</span><span style="color: #555555; font-weight: bold">@HeaderParam</span><span style="color: #333333">(</span><span style="background-color: #fff0f0">&quot;Referer&quot;</span><span style="color: #333333">)</span> String referer<span style="color: #333333">)</span> <span style="color: #333333">{</span>
<span style="color: #333333">...</span>
<span style="color: #333333">}</span>
</pre>
          </div>
        </div>
        <div style="width: 46%">
          <img src="../assets/illustrations/mailman.svg" style="width: 100%" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
