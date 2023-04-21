<template>
  <div class="slide">
    <div class="heading">HTTP Protocol detour</div>
    <div class="content">
      <p>
        L'exemple suivant montre un message de réponse HTTP affichant une
        condition d'erreur lorsque le serveur web n'a pas pu trouver la page
        demandée
      </p>
      <div class="codeblock">
        <pre style="margin: 0; line-height: 125%">
          HTTP<span style="color: #333333">/</span><span style="color: #6600EE; font-weight: bold">1.1</span> <span style="color: #0000DD; font-weight: bold">404</span> Not Found
          Date: Sun, <span style="color: #0000DD; font-weight: bold">18</span> Oct <span style="color: #0000DD; font-weight: bold">2012</span> <span style="color: #0000DD; font-weight: bold">10</span>:<span style="color: #0000DD; font-weight: bold">36</span>:<span style="color: #0000DD; font-weight: bold">20</span> GMT
          Server: Apache<span style="color: #333333">/</span><span style="color: #6600EE; font-weight: bold">2.2</span><span style="color: #333333">.</span><span style="color: #0000DD; font-weight: bold">14</span> (Win32)
          Content<span style="color: #333333">-</span>Length: <span style="color: #0000DD; font-weight: bold">230</span>
          Connection: Closed
          Content<span style="color: #333333">-</span>Type: text<span style="color: #333333">/</span>html; charset<span style="color: #333333">=</span>iso<span style="color: #333333">-</span><span style="color: #0000DD; font-weight: bold">8859</span><span style="color: #333333">-</span><span style="color: #0000DD; font-weight: bold">1</span>
          <span style="color: #333333">&lt;</span><span style="color: #FF0000; background-color: #FFAAAA">!</span>DOCTYPE HTML PUBLIC <span style="background-color: #fff0f0">&quot;-//IETF//DTD HTML 2.0//EN&quot;</span><span style="color: #333333">&gt;</span>
          <span style="color: #333333">&lt;</span>html<span style="color: #333333">&gt;</span>
          <span style="color: #333333">&lt;</span>head<span style="color: #333333">&gt;</span>
            <span style="color: #333333">&lt;</span>title<span style="color: #333333">&gt;</span><span style="color: #0000DD; font-weight: bold">404</span> Not Found<span style="color: #333333">&lt;/</span>title<span style="color: #333333">&gt;</span>
          <span style="color: #333333">&lt;/</span>head<span style="color: #333333">&gt;</span>
          <span style="color: #333333">&lt;</span>body<span style="color: #333333">&gt;</span>
            <span style="color: #333333">&lt;</span>p<span style="color: #333333">&gt;</span>The requested URL <span style="color: #333333">/</span>t<span style="color: #333333">.</span>html was <span style="color: #000000; font-weight: bold">not</span> found on this server<span style="color: #333333">.&lt;/</span>p<span style="color: #333333">&gt;</span>
          <span style="color: #333333">&lt;/</span>body<span style="color: #333333">&gt;</span>
          <span style="color: #333333">&lt;/</span>html<span style="color: #333333">&gt;</span></pre>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
