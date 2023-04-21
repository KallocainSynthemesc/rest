<template>
  <div class="slide">
    <div class="heading">Conception de services RESTful</div>
    <div class="content">
      <div class="flex-container">
        <div style="width: 55%">
          <h2>Modéliser les URI</h2>
          <br />
          <p>
            Nous voulons naviguer la personne et le compte bancaire dans notre
            REST API.
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
            <span style="color: #0066BB; font-weight: bold">/persons</span>
            <span style="color: #0066BB; font-weight: bold">/persons/{id}</span>
            <span style="color: #0066BB; font-weight: bold">/bankaccount</span>
            <span style="color: #0066BB; font-weight: bold">/bankaccount/{id}</span></pre>
          </div>

          <br />
          <p>Ces 4 adresses sont tout ce dont nous avons besoin</p>
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
