<template>
  <div class="slide">
    <div class="heading">JAXB</div>
    <div class="content">
      <p>J'ai déjà annoté la classe Personne et je l'ai convertie en XML</p>
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
<span style="color: #008800; font-weight: bold">public</span> <span style="color: #008800; font-weight: bold">static</span> <span style="color: #333399; font-weight: bold">void</span> <span style="color: #0066BB; font-weight: bold">main</span><span style="color: #333333">(</span>String<span style="color: #333333">[]</span> args<span style="color: #333333">)</span> <span style="color: #008800; font-weight: bold">throws</span> JAXBException <span style="color: #333333">{</span>
    Person p <span style="color: #333333">=</span> <span style="color: #008800; font-weight: bold">new</span> Person<span style="color: #333333">(</span><span style="color: #0000DD; font-weight: bold">1L</span><span style="color: #333333">,</span> <span style="background-color: #fff0f0">&quot;Kilian&quot;</span><span style="color: #333333">,</span> <span style="background-color: #fff0f0">&quot;Schropp&quot;</span><span style="color: #333333">,</span> <span style="color: #0000DD; font-weight: bold">28</span> <span style="color: #333333">);</span>

    JAXBContext context <span style="color: #333333">=</span> JAXBContext<span style="color: #333333">.</span><span style="color: #0000CC">newInstance</span><span style="color: #333333">(</span>Person<span style="color: #333333">.</span><span style="color: #0000CC">class</span><span style="color: #333333">);</span>
    StringWriter writer <span style="color: #333333">=</span> <span style="color: #008800; font-weight: bold">new</span> StringWriter<span style="color: #333333">();</span>
    context<span style="color: #333333">.</span><span style="color: #0000CC">createMarshaller</span><span style="color: #333333">().</span><span style="color: #0000CC">marshal</span><span style="color: #333333">(</span>p<span style="color: #333333">,</span> writer<span style="color: #333333">);</span>
    String xml <span style="color: #333333">=</span> writer<span style="color: #333333">.</span><span style="color: #0000CC">toString</span><span style="color: #333333">();</span>
    System<span style="color: #333333">.</span><span style="color: #0000CC">out</span><span style="color: #333333">.</span><span style="color: #0000CC">println</span><span style="color: #333333">(</span>xml<span style="color: #333333">);</span>
<span style="color: #333333">}</span>
</pre>
      </div>
      <br />
      <h3>
        Exercice: Pouvez-vous annoter la classe BankAccount et imprimer une
        instance sur la console ?
      </h3>
      <br />
      <a
        href="exercices/jaxb/jaxb-exercice-1.zip"
        download="jaxb-exercice-1.zip"
        ><img
          src="../assets/illustrations/zip-file.svg"
          style="width: 8%"
        />Download zip exercice</a
      >
    </div>
  </div>
</template>

<style scoped></style>
