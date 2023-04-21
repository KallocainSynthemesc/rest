<template>
  <div class="slide">
    <div class="heading">Javascript - Promise</div>
    <div class="content">
      <div class="flex-container">
        <div style="width: 50%">
          <h2>Chaining Callbacks</h2>
          <br />
          <p>
            Autrefois, l'exécution de plusieurs opérations asynchrones à la
            suite conduisait à la pyramide classique des callbacks.
          </p>
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
            doSomething(<span style="color: #008800; font-weight: bold">function</span> (result) {
              doSomethingElse(result, <span style="color: #008800; font-weight: bold">function</span> (newResult) {
                doThirdThing(newResult, <span style="color: #008800; font-weight: bold">function</span> (finalResult) {
                  console.log(<span style="color: #FF0000; background-color: #FFAAAA">`</span>Got the <span style="color: #008800; font-weight: bold">final</span> result<span style="color: #333333">:</span> ${finalResult}<span style="color: #FF0000; background-color: #FFAAAA">`</span>);
                }, failureCallback);
              }, failureCallback);
            }, failureCallback);</pre>
          </div>
        </div>
        <div style="width: 48%">
          <img src="../assets/illustrations/Pyramid2.svg" style="width: 100%" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
