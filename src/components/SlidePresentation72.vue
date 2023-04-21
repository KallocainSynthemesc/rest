<template>
  <div class="slide">
    <div class="heading">RESTful - JAX RS</div>
    <div class="content">
      <h2>Collections</h2>
      <br />
      <p>
        Nous pouvons avoir une liste des types primitifs ou une liste des
        classes qui implémentent valueOf() ou avoir un constructeur avec un seul
        paramètre de type chaîne de caractères sans aucun problème.
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
<span style="color: #555555; font-weight: bold">@Path</span><span style="color: #333333">(</span><span style="background-color: #fff0f0">&quot;/customers&quot;</span><span style="color: #333333">)</span>
<span style="color: #008800; font-weight: bold">public</span> <span style="color: #008800; font-weight: bold">class</span> <span style="color: #BB0066; font-weight: bold">CustomerResource</span> <span style="color: #333333">{</span>
	<span style="color: #555555; font-weight: bold">@GET</span>
	<span style="color: #555555; font-weight: bold">@Produces</span><span style="color: #333333">(</span><span style="background-color: #fff0f0">&quot;application/xml&quot;</span><span style="color: #333333">)</span>
	<span style="color: #008800; font-weight: bold">public</span> String <span style="color: #0066BB; font-weight: bold">getCustomers</span><span style="color: #333333">(</span>
		<span style="color: #555555; font-weight: bold">@QueryParam</span><span style="color: #333333">(</span><span style="background-color: #fff0f0">&quot;start&quot;</span><span style="color: #333333">)</span> <span style="color: #333399; font-weight: bold">int</span> start<span style="color: #333333">,</span>
		<span style="color: #555555; font-weight: bold">@QueryParam</span><span style="color: #333333">(</span><span style="background-color: #fff0f0">&quot;size&quot;</span><span style="color: #333333">)</span> <span style="color: #333399; font-weight: bold">int</span> size<span style="color: #333333">,</span>
		<span style="color: #555555; font-weight: bold">@QueryParam</span><span style="color: #333333">(</span><span style="background-color: #fff0f0">&quot;orderBy&quot;</span><span style="color: #333333">)</span> List<span style="color: #333333">&lt;</span>String<span style="color: #333333">&gt;</span> orderBy<span style="color: #333333">)</span> <span style="color: #333333">{</span>
			<span style="color: #333333">...</span>
	<span style="color: #333333">}</span>
<span style="color: #333333">}</span>
</pre>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
