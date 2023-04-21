<template>
  <div class="slide">
    <div class="heading">RESTful - JAX RS</div>
    <div class="content">
      <div class="flex-container">
        <div style="width: 50%">
          <p>
            JAX-RS définit cinq annotations qui correspondent à des opérations
            HTTP spécifiques
          </p>
          <h3>@javax.ws.rs.GET</h3>
          <h3>@javax.ws.rs.PUT</h3>
          <h3>@javax.ws.rs.POST</h3>
          <h3>@javax.ws.rs.DELETE</h3>
          <h3>@javax.ws.rs.HEAD</h3>
          <br />
        </div>
        <div style="width: 45%">
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
          <span style="color: red; font-weight: bold">@GET</span>
          <span style="color: #008800; font-weight: bold">public</span> String <span style="color: #0066BB; font-weight: bold">getPersonList</span><span style="color: #333333">()</span> <span style="color: #333333">{</span>
            ...
          <span style="color: #333333">}</span></pre>
          </div>
        </div>
      </div>
      <p>
        Lorsqu'une requête HTTP GET arrive, jax-rs trouve la méthode qu'il doit
        appeler en se servant de l'annotation @GET.
      </p>
    </div>
  </div>
</template>

<style scoped></style>
