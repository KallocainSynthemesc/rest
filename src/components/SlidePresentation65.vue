<template>
  <div class="slide">
    <div class="heading">RESTful - JAX-RS Injection</div>
    <div class="content">
      <div class="flex-container">
        <div style="width: 65%">
          <h2>@BeanParam</h2>
          <br />
          <p>
            Nous pouvons demander à JAX-RS de créer, d'initialiser et d'injecter
            cette classe en utilisant l'annotation @BeanParam
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
<span style="color: #555555; font-weight: bold">@Path</span><span style="color: #333333">(</span><span style="background-color: #fff0f0">&quot;/persons&quot;</span><span style="color: #333333">)</span>
<span style="color: #008800; font-weight: bold">public</span> <span style="color: #008800; font-weight: bold">class</span> <span style="color: #BB0066; font-weight: bold">PersonResource</span> <span style="color: #333333">{</span>
	<span style="color: #555555; font-weight: bold">@POST</span>
	<span style="color: #008800; font-weight: bold">public</span> <span style="color: #333399; font-weight: bold">void</span> <span style="color: #0066BB; font-weight: bold">createCustomer</span><span style="color: #333333">(</span><span style="color: #555555; font-weight: bold">@BeanParam</span> PersonInput newPers<span style="color: #333333">)</span> <span style="color: #333333">{</span>
	    <span style="color: #333333">...</span>
	<span style="color: #333333">}</span>
<span style="color: #333333">}</span>
</pre>
          </div>
          <br />
          <p>
            C'est un excellent moyen d'agréger des informations au lieu d'avoir
            une longue liste de paramètres de méthodes
          </p>
        </div>
        <div style="width: 30%">
          <img src="../assets/illustrations/metalbox.svg" style="width: 100%" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
