<template>
  <div class="slide">
    <div class="heading">HTTP Protocol detour</div>
    <div class="content">
      <p>
        Réponse HTTP à une demande de récupération de la page hello.html sur le
        serveur web.
      </p>
      <br />
      <div class="codeblock">
        <pre style="margin: 0; line-height: 125%">
          HTTP<span style="color: #333333">/</span><span style="color: #6600EE; font-weight: bold">1.1</span> <span style="color: #0000DD; font-weight: bold">200</span> OK
          Date: Mon, <span style="color: #0000DD; font-weight: bold">27</span> Jul <span style="color: #0000DD; font-weight: bold">2009</span> <span style="color: #0000DD; font-weight: bold">12</span>:<span style="color: #0000DD; font-weight: bold">28</span>:<span style="color: #0000DD; font-weight: bold">53</span> GMT
          Server: Apache<span style="color: #333333">/</span><span style="color: #6600EE; font-weight: bold">2.2</span><span style="color: #333333">.</span><span style="color: #0000DD; font-weight: bold">14</span> (Win32)
          Last<span style="color: #333333">-</span>Modified: Wed, <span style="color: #0000DD; font-weight: bold">22</span> Jul <span style="color: #0000DD; font-weight: bold">2009</span> <span style="color: #0000DD; font-weight: bold">19</span>:<span style="color: #0000DD; font-weight: bold">15</span>:<span style="color: #0000DD; font-weight: bold">56</span> GMT
          Content<span style="color: #333333">-</span>Length: <span style="color: #0000DD; font-weight: bold">88</span>
          Content<span style="color: #333333">-</span>Type: text<span style="color: #333333">/</span>html
          Connection: Closed

          <span style="color: #333333">&lt;</span>html<span style="color: #333333">&gt;</span>
          <span style="color: #333333">&lt;</span>body<span style="color: #333333">&gt;</span>
          <span style="color: #333333">&lt;</span>h1<span style="color: #333333">&gt;</span>Hello, World<span style="color: #FF0000; background-color: #FFAAAA">!</span><span style="color: #333333">&lt;/</span>h1<span style="color: #333333">&gt;</span>
          <span style="color: #333333">&lt;/</span>body<span style="color: #333333">&gt;</span>
          <span style="color: #333333">&lt;/</span>html<span style="color: #333333">&gt;</span></pre>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
