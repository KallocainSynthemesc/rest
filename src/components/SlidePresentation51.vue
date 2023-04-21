<template>
  <div class="slide">
    <div class="heading">RESTful - JAX RS</div>
    <div class="content">
      <h2>Classe de données</h2>
      <p>Dans notre cas, les classes de données sont Person et BankAccount.</p>
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
        <span style="color: #008800; font-weight: bold">public</span> <span style="color: #008800; font-weight: bold">class</span> <span style="color: #BB0066; font-weight: bold">Person</span> <span style="color: #333333">{</span>
          <span style="color: #008800; font-weight: bold">private</span> <span style="color: #333399; font-weight: bold">long</span> personNum<span style="color: #333333">;</span>
          <span style="color: #008800; font-weight: bold">private</span> String firstName<span style="color: #333333">;</span>
          <span style="color: #008800; font-weight: bold">private</span> String lastName<span style="color: #333333">;</span>
          <span style="color: #008800; font-weight: bold">private</span> <span style="color: #333399; font-weight: bold">int</span> age<span style="color: #333333">;</span>              
          <span style="color: #008800; font-weight: bold">public</span> <span style="color: #0066BB; font-weight: bold">Person</span><span style="color: #333333">(</span><span style="color: #333399; font-weight: bold">long</span> personNum<span style="color: #333333">,</span> String firstName<span style="color: #333333">,</span> String lastName<span style="color: #333333">,</span> <span style="color: #333399; font-weight: bold">int</span> age<span style="color: #333333">)</span> <span style="color: #333333">{</span>
              <span style="color: #008800; font-weight: bold">this</span><span style="color: #333333">.</span><span style="color: #0000CC">firstName</span> <span style="color: #333333">=</span> firstName<span style="color: #333333">;</span>
              <span style="color: #008800; font-weight: bold">this</span><span style="color: #333333">.</span><span style="color: #0000CC">lastName</span> <span style="color: #333333">=</span> lastName<span style="color: #333333">;</span>
              <span style="color: #008800; font-weight: bold">this</span><span style="color: #333333">.</span><span style="color: #0000CC">age</span> <span style="color: #333333">=</span> age<span style="color: #333333">;</span>
              <span style="color: #008800; font-weight: bold">this</span><span style="color: #333333">.</span><span style="color: #0000CC">personNum</span> <span style="color: #333333">=</span> personNum<span style="color: #333333">;</span>
          <span style="color: #333333">}</span>

          <span style="color: #333333">...</span>
        <span style="color: #333333">}</span></pre>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
