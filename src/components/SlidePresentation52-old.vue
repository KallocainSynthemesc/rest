<template>
  <div class="slide">
    <div class="heading">RESTful - JAX RS</div>
    <div class="content">
      <h2>Service JAX-RS</h2>
      <br />
      <p>
        Wow, c'est tout le code dont nous avons besoin pour obtenir toutes les
        personnes ?
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
        <span style="color: #555555; font-weight: bold">@Path</span>(<span style="background-color: #fff0f0">&quot;/persons&quot;</span>)
        public <span style="color: #008800; font-weight: bold">class</span> <span style="color: #BB0066; font-weight: bold">PersonResource</span> {
          
            <span style="color: #555555; font-weight: bold">@GET</span>
            <span style="color: #555555; font-weight: bold">@Produces</span>({MediaType<span style="color: #333333">.</span>APPLICATION_JSON})
            public Response getPersonListJson() {
                GenericEntity<span style="color: #333333">&lt;</span>List<span style="color: #333333">&lt;</span>Person<span style="color: #333333">&gt;&gt;</span> <span style="color: #007020">list</span> 
                    <span style="color: #333333">=</span> new GenericEntity<span style="color: #333333">&lt;</span>List<span style="color: #333333">&lt;</span>Person<span style="color: #333333">&gt;&gt;</span>(PersonList<span style="color: #333333">.</span>persons) { };
                <span style="color: #008800; font-weight: bold">return</span> Response<span style="color: #333333">.</span>ok(<span style="color: #007020">list</span>)<span style="color: #333333">.</span>build();
            }
        }</pre>
      </div>
      <br />
      <p>Pas vraiment, nous devons également faire un peu de configuration</p>
    </div>
  </div>
</template>

<style scoped></style>
