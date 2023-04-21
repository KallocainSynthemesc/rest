<template>
  <div class="slide">
    <div class="heading">Conception de services RESTful</div>
    <div class="content">
      <div class="flex-container">
        <div style="width: 48%">
          <h2>Consultation des personnes</h2>
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
            <span style="color: #007700">GET</span> /persons HTTP/1.1</pre>
          </div>
          <br />
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
            [
              {
                <span style="color: #007700">&quot;personNum&quot;</span>: <span style="color: #0000DD; font-weight: bold">1</span>,
                <span style="color: #007700">&quot;firstName&quot;</span>: <span style="background-color: #fff0f0">&quot;Kilian&quot;</span>,
                <span style="color: #007700">&quot;lastName&quot;</span>: <span style="background-color: #fff0f0">&quot;Schropp&quot;</span>,
                <span style="color: #007700">&quot;age&quot;</span>: <span style="color: #0000DD; font-weight: bold">28</span>
              },
              {
                <span style="color: #007700">&quot;personNum&quot;</span>: <span style="color: #0000DD; font-weight: bold">2</span>,
                <span style="color: #007700">&quot;firstName&quot;</span>: <span style="background-color: #fff0f0">&quot;Jane&quot;</span>,
                <span style="color: #007700">&quot;lastName&quot;</span>: <span style="background-color: #fff0f0">&quot;Doe&quot;</span>,
                <span style="color: #007700">&quot;age&quot;</span>: <span style="color: #0000DD; font-weight: bold">25</span>
              },
              ...
            ]</pre>
          </div>
        </div>
        <div style="width: 48%">
          <h2>Consultation des bankaccounts</h2>
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
            <span style="color: #007700">GET</span> /bankaccounts HTTP/1.1</pre>
          </div>
          <br />
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
            [
              {
                <span style="color: #007700">&quot;accountIdentifier&quot;</span>: <span style="background-color: #fff0f0">&quot;123456&quot;</span>,
                <span style="color: #007700">&quot;accountOwnerID&quot;</span>: <span style="color: #0000DD; font-weight: bold">1</span>, 
                <span style="color: #007700">&quot;bankConsultantID&quot;</span>: <span style="color: #0000DD; font-weight: bold">2</span>, 
                <span style="color: #007700">&quot;bankName&quot;</span>: <span style="background-color: #fff0f0">&quot;BGE bank&quot;</span>
              },
              {
                <span style="color: #007700">&quot;accountIdentifier&quot;</span>: <span style="background-color: #fff0f0">&quot;123457&quot;</span>,
                <span style="color: #007700">&quot;accountOwnerID&quot;</span>: <span style="color: #0000DD; font-weight: bold">3</span>, 
                <span style="color: #007700">&quot;bankConsultantID&quot;</span>: <span style="color: #0000DD; font-weight: bold">4</span>, 
                <span style="color: #007700">&quot;bankName&quot;</span>: <span style="background-color: #fff0f0">&quot;Kilian bank or whatever&quot;</span>
              },
              ...
            ]</pre>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
