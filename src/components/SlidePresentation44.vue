<template>
  <div class="slide">
    <div class="heading">Conception de services RESTful</div>
    <div class="content">
      <div class="flex-container">
        <div style="width: 55%">
          <h2>Définition du format des données</h2>
          <p>Nous allons travailler avec JSON pour l'instant</p>
          <h3>Person</h3>
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
                <span style="color: #007700">&quot;personNum&quot;</span>: <span style="color: #0000DD; font-weight: bold">1</span>,
                <span style="color: #007700">&quot;firstName&quot;</span>: <span style="background-color: #fff0f0">&quot;Kilian&quot;</span>,
                <span style="color: #007700">&quot;lastName&quot;</span>: <span style="background-color: #fff0f0">&quot;Schropp&quot;</span>,
                <span style="color: #007700">&quot;age&quot;</span>: <span style="color: #0000DD; font-weight: bold">30</span>
              }</pre>
          </div>
          <br />
          <h3>BankAccount</h3>
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
                <span style="color: #007700">&quot;accountIdentifier&quot;</span>: <span style="background-color: #fff0f0">&quot;123456&quot;</span>,
                <span style="color: #007700">&quot;accountOwnerID&quot;</span>: <span style="color: #0000DD; font-weight: bold">1</span>, 
                <span style="color: #007700">&quot;bankConsultantID&quot;</span>: <span style="color: #0000DD; font-weight: bold">2</span>, 
                <span style="color: #007700">&quot;bankName&quot;</span>: <span style="background-color: #fff0f0">&quot;BGE bank&quot;</span>
              }</pre>
          </div>
        </div>
        <div style="width: 42%">
          <img
            src="../assets/illustrations/classDiaModel.svg"
            style="width: 100%"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
