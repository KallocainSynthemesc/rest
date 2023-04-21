<script>
import TabsWrapper from "@/components/interactive/TabsWrapper.vue";

export default {
  name: "RestClient",
  components: {
    TabsWrapper: TabsWrapper,
  },
  data: function () {
    return {
      selectedMethod: "GET",
      url: this.link,
      tabs: { auth: [], header: [], params: [] },
      response: "",
      httpcode: "",
      headers: "",
      message:
        "Bienvenue ! Utilisez cette page simple pour explorer l'API. Spécifiez la méthode HTTP, l'URL et les paramètres, puis cliquez sur 'Envoyer'. Cette page nécessite un navigateur supportant le HTML5.",
    };
  },
  props: ["link"],
  methods: {
    onMethodChange(event) {
      this.selectedMethod = event.target.value;
    },
    handleDataUpdate(data) {
      this.tabs = data;
      console.log("Received data from child component: ", data);
    },
    buildHeader(options) {
      for (const header of this.tabs.header) {
        if (header.key && header.value) {
          options.headers[header.key] = header.value;
        }
      }
      return options;
    },
    buildPutBody(options) {
      const data = new URLSearchParams();
      for (const param of this.tabs.params) {
        data.append(param.key, param.value);
      }
      options.body = data.toString();
      options.headers["Content-Type"] = "application/x-www-form-urlencoded";
      return options;
    },
    prettifyXml(xml, tab) {
      var formatted = "",
        indent = "";
      tab = tab || "\t";
      xml.split(/>\s*</).forEach(function (node) {
        if (node.match(/^\/\w/)) indent = indent.substring(tab.length); // decrease indent by one 'tab'
        formatted += indent + "<" + node + ">\r\n";
        if (node.match(/^<?\w[^>]*[^/]$/)) indent += tab; // increase indent
      });
      return formatted.substring(1, formatted.length - 3);
    },
    buildPostBody(options) {
      const data = new URLSearchParams();
      for (const param of this.tabs.params) {
        data.append(param.key, param.value);
      }
      options.body = data.toString();
      options.headers["Content-Type"] = "application/x-www-form-urlencoded";
      return options;
    },
    async makeHttpRequest() {
      let options = {
        method: this.selectedMethod,
        headers: {},
      };

      options = this.buildHeader(options);

      if (this.selectedMethod === "PUT") {
        options = this.buildPutBody(options);
      }

      if (this.selectedMethod === "POST") {
        options = this.buildPostBody(options);
      }

      if (
        this.tabs.authorization != null &&
        this.tabs.authorization.length > 0
      ) {
        options.headers.Authorization = `Bearer ${this.tabs.authorization}`;
      }
      try {
        const response = await fetch(this.url, options);
        this.httpcode = response.status;
        this.headers = "";
        for (let entry of response.headers.entries()) {
          this.headers += entry + "\n";
        }
        const contentType = response.headers.get("content-type");
        if (contentType === "application/json") {
          let data = await response.json();
          if (Array.isArray(data)) {
            data = data.filter((_, index) => index < 500);
          }
          this.response = JSON.stringify(data, null, 2);
        } else if (contentType === "application/xml") {
          let text = await response.text();
          this.response = this.prettifyXml(text);
        } else {
          let text = await response.text();
          this.response = text;
        }
      } catch (error) {
        this.message = error;
      }
    },
  },
};
</script>

<template>
  <div class="restcontainer">
    <div class="request subcontainer">
      <h3>Options de requête HTTP</h3>
      <hr />
      <select v-model="selectedMethod" @change="onMethodChange">
        <option value="GET">GET</option>
        <option value="POST">POST</option>
        <option value="OPTIONS">OPTIONS</option>
        <option value="PUT">PUT</option>
        <option value="DELETE">DELETE</option>
        <option value="HEAD">HEAD</option>
      </select>
      <input type="text" class="input-xlarge" id="urlvalue" v-model="url" />
      <TabsWrapper @data-updated="handleDataUpdate"></TabsWrapper>
    </div>
    <div class="httpcode subcontainer">
      <label>Http Code: {{ this.httpcode }}</label>
    </div>
    <div class="response subcontainer">
      <textarea readonly v-model="this.response"></textarea>
    </div>
    <div class="header subcontainer">
      <textarea readonly v-model="headers"></textarea>
    </div>
    <div class="button subcontainer">
      <button style="vertical-align: middle" @click="makeHttpRequest">
        <span>Envoyer </span>
      </button>
    </div>
    <div class="message subcontainer">
      <textarea readonly v-model="message"></textarea>
    </div>
  </div>
</template>

<style scoped>
.restcontainer {
  display: grid;
  grid-template-columns: 0.4fr 1.1fr 1.4fr;
  grid-template-rows: 0.3fr 2.2fr 0.5fr;
  gap: 10px 10px;
  grid-template-areas:
    "request request code"
    "request request response"
    "button message header";
  height: 89%;
}

.subcontainer {
  border-radius: 5px;
  background-color: #ededed;
}
.request {
  grid-area: request;
  padding: 5px;
}
.httpcode {
  grid-area: code;
  width: 100%;
  height: 100%;
  padding: 1.2%;
}

.httpcode label {
  margin-left: 2%;
}
.response {
  grid-area: response;
  display: flex;
  justify-content: center;
  align-items: center;
}

.subcontainer textarea {
  box-sizing: border-box;
  width: 95%;
  resize: none;
}
.header textarea {
  height: 75%;
}
.response textarea {
  height: 92%;
}
.header {
  grid-area: header;
  display: flex;
  justify-content: center;
  align-items: center;
}
.button {
  grid-area: button;
  display: flex;
  justify-content: center;
  align-items: center;
}

.message {
  display: flex;
  justify-content: center;
  align-items: center;
  grid-area: message;
}

.message textarea {
  height: 75%;
}

select {
  width: 20%;
  margin: 2%;
}

input {
  width: 75%;
  margin: 0.1%;
}

input[type="text"],
select {
  padding: 6px 6px;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}
.button button {
  display: inline-block;
  border-radius: 4px;
  background-color: #feb322ff;
  border: none;
  text-align: center;
  font-size: 1rem;
  font-weight: bold;
  width: 70%;
  height: 50%;
  transition: all 0.5s;
  cursor: pointer;
  margin-left: 1%;
}

.button button span {
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;
}

.button button span:after {
  content: "\00bb";
  position: absolute;
  opacity: 0;
  top: 0;
  right: -20px;
  transition: 0.5s;
}

.button button:hover span {
  padding-right: 25px;
}

.button button:hover span:after {
  opacity: 1;
  right: 0;
}
</style>
