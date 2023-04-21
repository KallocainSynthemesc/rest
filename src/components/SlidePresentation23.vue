<template>
  <div class="slide">
    <div class="heading">RESTful - L'interface uniforme et contraignante</div>
    <div class="content">
      <p>
        Puisque nous avons déjà fait du GET, nous pouvons directement faire un
        exemple avec du POST. Un post se présente comme suit:
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
          {
            <span style="color: #007700">&quot;userId&quot;</span>: <span style="color: #0000DD; font-weight: bold">1</span>,
            <span style="color: #007700">&quot;id&quot;</span>: <span style="color: #0000DD; font-weight: bold">1</span>,
            <span style="color: #007700">&quot;title&quot;</span>: <span style="background-color: #fff0f0">&quot;sunt aut facere repellat ... optio reprehenderit&quot;</span>,
            <span style="color: #007700">&quot;body&quot;</span>: <span style="background-color: #fff0f0">&quot;quia et suscipit\nsuscipit ... rem eveniet architecto&quot;</span>
          }</pre>
      </div>
      <p>
        Je veux maintenant ajouter un nouveau post en utilisant la méthode HTTP
        POST
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
          {
            <span style="color: #007700">&quot;userId&quot;</span>: <span style="background-color: #fff0f0">&quot;1&quot;</span>,
            <span style="color: #007700">&quot;title&quot;</span>: <span style="background-color: #fff0f0">&quot;BGE Web Service cours&quot;</span>,
            <span style="color: #007700">&quot;body&quot;</span>: <span style="background-color: #fff0f0">&quot;Ce post n&#39;est pas vraiment persisté puisqu&#39;il ne s&#39;agit que d&#39;une API factice,</span>
                <span style="background-color: #fff0f0"> mais cela montre tout de même comment cela fonctionne.&quot;</span>,
            <span style="color: #007700">&quot;id&quot;</span>: <span style="color: #0000DD; font-weight: bold">5001</span>
          }</pre>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
