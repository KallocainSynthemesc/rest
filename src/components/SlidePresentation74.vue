<template>
  <div class="slide">
    <div class="heading">RESTful - JAX RS</div>
    <div class="content">
      <h2>Manipulateurs de contenu JAX-RS</h2>
      <br />
      <p>
        <span style="font-size: 2rem">↪</span
        ><b>MultivaluedMap et Form Input </b>
        Les deux sont utilisés pour représenter les données du formulaire.
      </p>
      <p>
        Ces deux éléments sont très souvent utilisés, je vais donc en donner un
        exemple.
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
<span style="color: #555555; font-weight: bold">@Path</span>(<span style="background-color: #fff0f0">&quot;/&quot;</span>)
public <span style="color: #008800; font-weight: bold">class</span> <span style="color: #BB0066; font-weight: bold">MyService</span> {
	<span style="color: #555555; font-weight: bold">@POST</span>
	<span style="color: #555555; font-weight: bold">@Consumes</span>(<span style="background-color: #fff0f0">&quot;application/x-www-form-urlencoded&quot;</span>)
	<span style="color: #555555; font-weight: bold">@Produces</span>(<span style="background-color: #fff0f0">&quot;application/x-www-form-urlencoded&quot;</span>)
	public MultivaluedMap<span style="color: #333333">&lt;</span>String,String<span style="color: #333333">&gt;</span> post(
				MultivaluedMap<span style="color: #333333">&lt;</span>String, String<span style="color: #333333">&gt;</span> form) {
		<span style="color: #008800; font-weight: bold">return</span> form;
	}
}
</pre>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
