<template>
  <div class="slide">
    <div class="heading">RESTful - JAX-RS Injection</div>
    <div class="content">
      <div class="flex-container">
        <div style="width: 71%">
          <h2>@MatrixParam</h2>
          <br />
          <p>
            La spécification JAX-RS vous permet d'injecter des valeurs de
            paramètres de matrice directement par le biais de l'annotation
            @javax.ws.rs.MatrixParam.
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
            <pre style="margin: 0; line-height: 125%">
            <span style="color: #555555; font-weight: bold">@Path</span><span style="color: #333333">(</span><span style="background-color: #fff0f0">&quot;/{make}&quot;</span><span style="color: #333333">)</span>
            <span style="color: #008800; font-weight: bold">public</span> <span style="color: #008800; font-weight: bold">class</span> <span style="color: #BB0066; font-weight: bold">CarResource</span> <span style="color: #333333">{</span>
                <span style="color: #555555; font-weight: bold">@GET</span>
                <span style="color: #555555; font-weight: bold">@Path</span><span style="color: #333333">(</span><span style="background-color: #fff0f0">&quot;/{model}/{year}&quot;</span><span style="color: #333333">)</span>
                <span style="color: #555555; font-weight: bold">@Produces</span><span style="color: #333333">(</span><span style="background-color: #fff0f0">&quot;image/jpeg&quot;</span><span style="color: #333333">)</span>
                <span style="color: #008800; font-weight: bold">public</span> Jpeg <span style="color: #0066BB; font-weight: bold">getPicture</span><span style="color: #333333">(</span><span style="color: #555555; font-weight: bold">@PathParam</span><span style="color: #333333">(</span><span style="background-color: #fff0f0">&quot;make&quot;</span><span style="color: #333333">)</span> String make<span style="color: #333333">,</span>
                                  <span style="color: #555555; font-weight: bold">@PathParam</span><span style="color: #333333">(</span><span style="background-color: #fff0f0">&quot;model&quot;</span><span style="color: #333333">)</span> String model<span style="color: #333333">,</span>
                                  <span style="color: #555555; font-weight: bold">@MatrixParam</span><span style="color: #333333">(</span><span style="background-color: #fff0f0">&quot;color&quot;</span><span style="color: #333333">)</span> String color<span style="color: #333333">){</span>
                    <span style="color: #333333">...</span>
                <span style="color: #333333">}</span></pre>
          </div>
          <br />
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
            GET <span style="color: #333333">/</span>mercedes<span style="color: #333333">/</span>e55<span style="color: #333333">/</span><span style="color: #0000DD; font-weight: bold">2006</span><span style="color: #333333">/</span>interior<span style="color: #333333">;</span>color<span style="color: #333333">=</span>tan</pre>
          </div>
        </div>
        <div style="width: 28%">
          <img src="../assets/illustrations/matrix.svg" style="width: 100%" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
