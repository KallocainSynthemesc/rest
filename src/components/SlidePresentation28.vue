<template>
  <div class="slide">
    <div class="heading">RESTful - HATEOAS</div>
    <div class="content">
      <h2>Hypermedia As The Engine Of Application State</h2>
      <p>Permet de réaliser une navigation à travers l'API</p>
      <p>
        Chaque requête renvoyée par un serveur vous indique les nouvelles
        interactions que vous pouvez effectuer ensuite, ainsi que l'endroit où
        vous devez vous rendre pour faire évoluer l'état de vos applications.
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
        <span style="color: #007700">&quot;account&quot;</span>: {
            <span style="color: #007700">&quot;account_number&quot;</span>: <span style="color: #0000DD; font-weight: bold">12345</span>,
            <span style="color: #007700">&quot;balance&quot;</span>: {
                <span style="color: #007700">&quot;currency&quot;</span>: <span style="background-color: #fff0f0">&quot;usd&quot;</span>,
                <span style="color: #007700">&quot;value&quot;</span>: <span style="color: #6600EE; font-weight: bold">100.00</span>
            },
            <span style="color: #007700">&quot;links&quot;</span>: {
                <span style="color: #007700">&quot;deposits&quot;</span>: <span style="background-color: #fff0f0">&quot;/accounts/12345/deposits&quot;</span>,
                <span style="color: #007700">&quot;withdrawals&quot;</span>: <span style="background-color: #fff0f0">&quot;/accounts/12345/withdrawals&quot;</span>,
                <span style="color: #007700">&quot;transfers&quot;</span>: <span style="background-color: #fff0f0">&quot;/accounts/12345/transfers&quot;</span>,
            }
        }</pre>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
