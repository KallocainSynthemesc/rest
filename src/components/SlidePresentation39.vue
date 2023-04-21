<template>
  <div class="slide">
    <div class="heading">Javascript - Promise</div>
    <div class="content">
      <div class="flex-container">
        <div style="width: 35%">
          <h2>Chaining Promises</h2>
          <br />
          <p>
            Avec les promesses, nous y parvenons en créant une chaîne de
            promesses.
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
        doSomething()
            .then(<span style="color: #008800; font-weight: bold">function</span> (result) {
              <span style="color: #008800; font-weight: bold">return</span> doSomethingElse(result);
            })
            .then(<span style="color: #008800; font-weight: bold">function</span> (newResult) {
              <span style="color: #008800; font-weight: bold">return</span> doThirdThing(newResult);
            })
            .then(<span style="color: #008800; font-weight: bold">function</span> (finalResult) {
              console.log(<span style="color: #FF0000; background-color: #FFAAAA">`</span>Got the <span style="color: #008800; font-weight: bold">final</span> result<span style="color: #333333">:</span> ${finalResult}<span style="color: #FF0000; background-color: #FFAAAA">`</span>);
            })
            .<span style="color: #008800; font-weight: bold">catch</span>(failureCallback);</pre>
          </div>
        </div>
        <div style="width: 63%">
          <br />
          <img
            src="../assets/illustrations/promisechain.svg"
            style="width: 100%"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
