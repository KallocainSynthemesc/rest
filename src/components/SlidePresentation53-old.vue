<template>
  <div class="slide">
    <div class="heading">RESTful - JAX RS</div>
    <div class="content">
      <p>Voici à quoi ressemble une telle configuration dans notre contexte</p>
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
        <span style="color: #555555; font-weight: bold">@ApplicationPath</span>(<span style="background-color: #fff0f0">&quot;/&quot;</span>)
        public <span style="color: #008800; font-weight: bold">class</span> <span style="color: #BB0066; font-weight: bold">MyResourceConfig</span> extends Application {
            <span style="color: #555555; font-weight: bold">@Override</span>
            public Set<span style="color: #333333">&lt;</span>Class<span style="color: #333333">&lt;</span><span style="color: #FF0000; background-color: #FFAAAA">?</span><span style="color: #333333">&gt;&gt;</span> getClasses() {
                Set<span style="color: #333333">&lt;</span>Class<span style="color: #333333">&lt;</span><span style="color: #FF0000; background-color: #FFAAAA">?</span><span style="color: #333333">&gt;&gt;</span> classes <span style="color: #333333">=</span> new HashSet<span style="color: #333333">&lt;</span>Class<span style="color: #333333">&lt;</span><span style="color: #FF0000; background-color: #FFAAAA">?</span><span style="color: #333333">&gt;&gt;</span>();
                classes<span style="color: #333333">.</span>add(PersonResource<span style="color: #333333">.</span>class);
                <span style="color: #008800; font-weight: bold">return</span> classes;
            }
            <span style="color: #555555; font-weight: bold">@Override</span>
            public Set<span style="color: #333333">&lt;</span>Object<span style="color: #333333">&gt;</span> getSingletons() {
                Set<span style="color: #333333">&lt;</span>Object<span style="color: #333333">&gt;</span> singletons <span style="color: #333333">=</span> new HashSet<span style="color: #333333">&lt;</span>Object<span style="color: #333333">&gt;</span>();
                JacksonJaxbJsonProvider jacksonJaxbJsonProvider <span style="color: #333333">=</span> new JacksonJaxbJsonProvider();
                jacksonJaxbJsonProvider<span style="color: #333333">.</span>setMapper(new ObjectMapper());
                singletons<span style="color: #333333">.</span>add(jacksonJaxbJsonProvider);
                <span style="color: #008800; font-weight: bold">return</span> singletons;
            }
        }</pre>
      </div>
      <a
        href="/solutions/rest/REST-solution-jax-rs.zip"
        download="REST-solution-jax-rs.zip"
        ><img
          src="../assets/illustrations/zip-file.svg"
          style="width: 8%"
        />Download zip exemple</a
      >
    </div>
  </div>
</template>

<style scoped></style>
