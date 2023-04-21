<template>
  <div class="slide">
    <div class="heading">RESTful - JAX-RS Injection</div>
    <div class="content">
      <div class="flex-container">
        <div style="width: 65%">
          <h2>@BeanParam</h2>
          <br />
          <p>
            L'annotation @BeanParam est une nouveauté ajoutée dans JAX-RS 2.0
            (2011). Elle permet d'injecter une classe spécifique dont les
            champs/méthodes sont annotés avec l'un des paramètres d'injection.
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
<span style="color: #008800; font-weight: bold">public</span> <span style="color: #008800; font-weight: bold">class</span> <span style="color: #BB0066; font-weight: bold">PersonInput</span> <span style="color: #333333">{</span>
	<span style="color: #555555; font-weight: bold">@FormParam</span><span style="color: #333333">(</span><span style="background-color: #fff0f0">&quot;first&quot;</span><span style="color: #333333">)</span>
	String firstName<span style="color: #333333">;</span>
	
	<span style="color: #555555; font-weight: bold">@FormParam</span><span style="color: #333333">(</span><span style="background-color: #fff0f0">&quot;list&quot;</span><span style="color: #333333">)</span>
	String lastName<span style="color: #333333">;</span>
	
	<span style="color: #555555; font-weight: bold">@HeaderParam</span><span style="color: #333333">(</span><span style="background-color: #fff0f0">&quot;Content-Type&quot;</span><span style="color: #333333">)</span>
	String contentType<span style="color: #333333">;</span>

	<span style="color: #008800; font-weight: bold">public</span> String <span style="color: #0066BB; font-weight: bold">getFirstName</span><span style="color: #333333">()</span> <span style="color: #333333">{...}....</span>
<span style="color: #333333">}</span></pre>
          </div>
        </div>
        <div style="width: 30%">
          <img src="../assets/illustrations/metalbox.svg" style="width: 100%" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
