<template>
  <div class="slide">
    <div class="heading">HTTP Protocol detour</div>
    <div class="content">
      <p>
        Ici, nous n'envoyons pas de données de requête au serveur car nous
        récupérons une page HTML simple du serveur.
      </p>
      <br />
      <div class="codeblock">
        <pre style="margin: 0; line-height: 125%">
          GET <span style="color: #333333">/</span>hello<span style="color: #333333">.</span>htm HTTP<span style="color: #333333">/</span><span style="color: #6600EE; font-weight: bold">1.1</span>
          User<span style="color: #333333">-</span>Agent: Mozilla<span style="color: #333333">/</span><span style="color: #6600EE; font-weight: bold">4.0</span> (compatible; MSIE5<span style="color: #333333">.</span><span style="color: #4400EE; font-weight: bold">01</span>; Windows NT)
          Host: www<span style="color: #333333">.</span>tutorialspoint<span style="color: #333333">.</span>com
          Accept<span style="color: #333333">-</span>Language: en<span style="color: #333333">-</span>us
          Accept<span style="color: #333333">-</span>Encoding: gzip, deflate
          Connection: Keep<span style="color: #333333">-</span>Alive</pre>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
