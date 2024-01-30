<template>
  <div class="slide">
    <div class="heading">RESTful - Réalisation</div>
    <div class="content">
      <div class="flex-container" style="overflow-y: scroll; height: 100%">
        <div style="width: 48%">
          <h2>Rapide et sale</h2>
          <br />
          <p>
            L'exemple suivant suppose des connaissances en matière de JSP et de
            Servlets. Je ne les expliquerai pas en détail puisque ce n'est pas
            le but de ce cours.
          </p>
          <br />
          <p>REST peut être construit au-dessus du HttpServlet.</p>
          <a
            href="solutions/rest/REST-simple-solution.zip"
            download="REST-simple-solution.zip"
            ><img
              src="../assets/illustrations/zip-file.svg"
              style="width: 20%"
            />Download zip exemple</a
          >
        </div>
        <div style="width: 48%">
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
            <span style="color: #555555; font-weight: bold">@WebServlet</span><span style="color: #333333">(</span>
                    name <span style="color: #333333">=</span> <span style="background-color: #fff0f0">&quot;PersonServlet&quot;</span><span style="color: #333333">,</span>
                    urlPatterns <span style="color: #333333">=</span> <span style="color: #333333">{</span><span style="background-color: #fff0f0">&quot;/persons&quot;</span><span style="color: #333333">}</span>
                <span style="color: #333333">)</span>
            <span style="color: #008800; font-weight: bold">public</span> <span style="color: #008800; font-weight: bold">class</span> <span style="color: #BB0066; font-weight: bold">PersonServlet</span> <span style="color: #008800; font-weight: bold">extends</span> HttpServlet <span style="color: #333333">{</span>

              ...

              <span style="color: #555555; font-weight: bold">@Override</span>
              <span style="color: #008800; font-weight: bold">protected</span> <span style="color: #333399; font-weight: bold">void</span> <span style="color: #0066BB; font-weight: bold">doGet</span><span style="color: #333333">(</span>HttpServletRequest request<span style="color: #333333">,</span> HttpServletResponse response<span style="color: #333333">)</span>
                        <span style="color: #008800; font-weight: bold">throws</span> ServletException<span style="color: #333333">,</span> IOException <span style="color: #333333">{</span>
                    response<span style="color: #333333">.</span><span style="color: #0000CC">setContentType</span><span style="color: #333333">(</span><span style="background-color: #fff0f0">&quot;application/json&quot;</span><span style="color: #333333">);</span>
                    response<span style="color: #333333">.</span><span style="color: #0000CC">setHeader</span><span style="color: #333333">(</span><span style="background-color: #fff0f0">&quot;Access-Control-Allow-Origin&quot;</span><span style="color: #333333">,</span> <span style="background-color: #fff0f0">&quot;*&quot;</span><span style="color: #333333">);</span>
                    
                    ObjectMapper objectMapper <span style="color: #333333">=</span> <span style="color: #008800; font-weight: bold">new</span> ObjectMapper<span style="color: #333333">();</span>
                    ObjectWriter objectWriter <span style="color: #333333">=</span> objectMapper<span style="color: #333333">.</span><span style="color: #0000CC">writerWithDefaultPrettyPrinter</span><span style="color: #333333">();</span>
                    String json <span style="color: #333333">=</span> objectWriter<span style="color: #333333">.</span><span style="color: #0000CC">writeValueAsString</span><span style="color: #333333">(</span>persons<span style="color: #333333">);</span>
                    PrintWriter out <span style="color: #333333">=</span> response<span style="color: #333333">.</span><span style="color: #0000CC">getWriter</span><span style="color: #333333">();</span>
                    out<span style="color: #333333">.</span><span style="color: #0000CC">println</span><span style="color: #333333">(</span>json<span style="color: #333333">);</span>
                <span style="color: #333333">}</span>
              
              <span style="color: #555555; font-weight: bold">@Override</span>
                <span style="color: #008800; font-weight: bold">protected</span> <span style="color: #333399; font-weight: bold">void</span> <span style="color: #0066BB; font-weight: bold">doPost</span><span style="color: #333333">(</span>HttpServletRequest request<span style="color: #333333">,</span> HttpServletResponse response<span style="color: #333333">)</span> <span style="color: #008800; font-weight: bold">throws</span> ServletException<span style="color: #333333">,</span> IOException <span style="color: #333333">{</span>
                    response<span style="color: #333333">.</span><span style="color: #0000CC">setContentType</span><span style="color: #333333">(</span><span style="background-color: #fff0f0">&quot;application/json&quot;</span><span style="color: #333333">);</span>
                    response<span style="color: #333333">.</span><span style="color: #0000CC">setHeader</span><span style="color: #333333">(</span><span style="background-color: #fff0f0">&quot;Access-Control-Allow-Origin&quot;</span><span style="color: #333333">,</span> <span style="background-color: #fff0f0">&quot;*&quot;</span><span style="color: #333333">);</span>
                    <span style="color: #008800; font-weight: bold">final</span> String firstName <span style="color: #333333">=</span> request<span style="color: #333333">.</span><span style="color: #0000CC">getParameter</span><span style="color: #333333">(</span><span style="background-color: #fff0f0">&quot;fname&quot;</span><span style="color: #333333">);</span>
                    <span style="color: #008800; font-weight: bold">final</span> String lastName <span style="color: #333333">=</span> request<span style="color: #333333">.</span><span style="color: #0000CC">getParameter</span><span style="color: #333333">(</span><span style="background-color: #fff0f0">&quot;lname&quot;</span><span style="color: #333333">);</span>
                    <span style="color: #008800; font-weight: bold">final</span> <span style="color: #333399; font-weight: bold">int</span> age <span style="color: #333333">=</span> Integer<span style="color: #333333">.</span><span style="color: #0000CC">parseInt</span><span style="color: #333333">(</span>request<span style="color: #333333">.</span><span style="color: #0000CC">getParameter</span><span style="color: #333333">(</span><span style="background-color: #fff0f0">&quot;age&quot;</span><span style="color: #333333">));</span>
                    <span style="color: #333399; font-weight: bold">long</span> personNum <span style="color: #333333">=</span> persons<span style="color: #333333">.</span><span style="color: #0000CC">size</span><span style="color: #333333">()</span> <span style="color: #333333">+</span> <span style="color: #0000DD; font-weight: bold">1</span><span style="color: #333333">;</span>
                    Person person <span style="color: #333333">=</span> <span style="color: #008800; font-weight: bold">new</span> Person<span style="color: #333333">(</span>personNum<span style="color: #333333">,</span> firstName<span style="color: #333333">,</span> lastName<span style="color: #333333">,</span> age<span style="color: #333333">);</span>
                    persons<span style="color: #333333">.</span><span style="color: #0000CC">add</span><span style="color: #333333">(</span>person<span style="color: #333333">);</span>
                    
                    ObjectMapper mapper <span style="color: #333333">=</span> <span style="color: #008800; font-weight: bold">new</span> ObjectMapper<span style="color: #333333">();</span>
                    ObjectWriter objectWriter <span style="color: #333333">=</span> mapper<span style="color: #333333">.</span><span style="color: #0000CC">writerWithDefaultPrettyPrinter</span><span style="color: #333333">();</span>
                    String json <span style="color: #333333">=</span> objectWriter<span style="color: #333333">.</span><span style="color: #0000CC">writeValueAsString</span><span style="color: #333333">(</span>person<span style="color: #333333">);</span>
                    PrintWriter out <span style="color: #333333">=</span> response<span style="color: #333333">.</span><span style="color: #0000CC">getWriter</span><span style="color: #333333">();</span>
                    out<span style="color: #333333">.</span><span style="color: #0000CC">println</span><span style="color: #333333">(</span>json<span style="color: #333333">);</span>
              <span style="color: #333333">}</span>
            <span style="color: #333333">}</span></pre>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
