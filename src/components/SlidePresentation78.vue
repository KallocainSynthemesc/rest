<template>
  <div class="slide">
    <div class="heading">JAX-RS et JAXB</div>
    <div class="content">
      <h2>Manipulateurs JAXB JAX-RS</h2>
      <p>
        La spécification JAX-RS exige que les implémentations prennent
        automatiquement en charge le marshalling et le unmarshalling des classes
        annotées avec JAXB
      </p>
      <div class="flex-container">
        <div style="width: 49%">
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
<span style="color: #555555; font-weight: bold">@Path</span><span style="color: #333333">(</span><span style="background-color: #fff0f0">&quot;{id}&quot;</span><span style="color: #333333">)</span>
<span style="color: #555555; font-weight: bold">@Produces</span><span style="color: #333333">(</span><span style="background-color: #fff0f0">&quot;application/xml&quot;</span><span style="color: #333333">)</span>
<span style="color: #008800; font-weight: bold">public</span> Person <span style="color: #0066BB; font-weight: bold">getPerson</span><span style="color: #333333">(</span><span style="color: #555555; font-weight: bold">@PathParam</span><span style="color: #333333">(</span><span style="background-color: #fff0f0">&quot;id&quot;</span><span style="color: #333333">)</span> <span style="color: #333399; font-weight: bold">int</span> id<span style="color: #333333">)</span> <span style="color: #333333">{</span>
	Person p <span style="color: #333333">=</span> <span style="color: #008800; font-weight: bold">null</span><span style="color: #333333">;</span>
	<span style="color: #008800; font-weight: bold">for</span><span style="color: #333333">(</span>Person pers <span style="color: #333333">:</span> PersonList<span style="color: #333333">.</span><span style="color: #0000CC">persons</span><span style="color: #333333">)</span> <span style="color: #333333">{</span>
		<span style="color: #008800; font-weight: bold">if</span><span style="color: #333333">(</span>pers<span style="color: #333333">.</span><span style="color: #0000CC">getPersonNum</span><span style="color: #333333">()</span> <span style="color: #333333">==</span> id<span style="color: #333333">)</span> <span style="color: #333333">{</span>
			p <span style="color: #333333">=</span> pers<span style="color: #333333">;</span>
			<span style="color: #008800; font-weight: bold">break</span><span style="color: #333333">;</span>
		<span style="color: #333333">}</span>
	<span style="color: #333333">}</span>
	<span style="color: #008800; font-weight: bold">return</span> p<span style="color: #333333">;</span>
<span style="color: #333333">}</span></pre>
          </div>
        </div>
        <div style="width: 49%">
          <p>
            A part l'ajout de @Produces("application/xml"), nous n'avons plus
            rien à faire.
          </p>
          <h3>
            Il transforme automatiquement notre personne en un fichier XML
          </h3>
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
<span style="color: #557799">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot; standalone=&quot;yes&quot;?&gt;</span>
<span style="color: #007700">&lt;person</span> <span style="color: #0000CC">personNum=</span><span style="background-color: #fff0f0">&quot;1&quot;</span><span style="color: #007700">&gt;</span>
	<span style="color: #007700">&lt;firstName&gt;</span>Kilian<span style="color: #007700">&lt;/firstName&gt;</span>
	<span style="color: #007700">&lt;lastName&gt;</span>Schropp<span style="color: #007700">&lt;/lastName&gt;</span>
	<span style="color: #007700">&lt;age&gt;</span>28<span style="color: #007700">&lt;/age&gt;</span>
<span style="color: #007700">&lt;/person&gt;</span></pre>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
