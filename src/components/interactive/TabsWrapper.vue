<script>
import KeyValueTable from "@/components/interactive/KeyValueTable.vue";

export default {
  data() {
    return {
      activetab: "1",
      params: [{ key: "", value: "" }],
      auth: [{ key: "", value: "" }],
      header: [{ key: "", value: "" }],
    };
  },
  watch: {
    // eslint-disable-next-line no-unused-vars
    params(newVal, oldVal) {
      this.sendData();
    },
    // eslint-disable-next-line no-unused-vars
    auth(newVal, oldVal) {
      this.sendData();
    },
    // eslint-disable-next-line no-unused-vars
    header(newVal, oldVal) {
      this.sendData();
    },
  },
  components: {
    KeyValueTable,
  },
  methods: {
    communicateParams(params, title) {
      this[title] = params;
    },
    sendData() {
      const data = {
        params: this.params,
        auth: this.auth,
        header: this.header,
      };
      this.$emit("data-updated", data);
    },
  },
};
</script>

<template>
  <div id="tabs" class="tabcontainer" style="height: 70%; overflow-y: scroll">
    <div class="tabs">
      <a
        v-on:click="activetab = '1'"
        v-bind:class="[activetab === '1' ? 'active' : '']"
        >Params</a
      >
      <a
        v-on:click="activetab = '2'"
        v-bind:class="[activetab === '2' ? 'active' : '']"
        >Authorization</a
      >
      <a
        v-on:click="activetab = '3'"
        v-bind:class="[activetab === '3' ? 'active' : '']"
        >Headers
      </a>
    </div>

    <div class="contentcontainer">
      <div v-show="activetab === '1'" class="tabcontent">
        <KeyValueTable
          @communicateParams="communicateParams($event, 'params')"
        ></KeyValueTable>
      </div>
      <div v-show="activetab === '2'" class="tabcontent">
        <KeyValueTable
          @communicateParams="communicateParams($event, 'auth')"
        ></KeyValueTable>
      </div>
      <div v-show="activetab === '3'" class="tabcontent">
        <KeyValueTable
          @communicateParams="communicateParams($event, 'header')"
        ></KeyValueTable>
      </div>
    </div>
  </div>
</template>
<style scoped>
.tabcontainer {
  margin: auto;
  font-size: 0.8em;
  color: #888;
}

/* Style the tabs */
.tabs {
  overflow: hidden;
  margin-bottom: -2px; /* hide bottom border */
  margin-left: 5px;
}

.tabs a {
  float: left;
  cursor: pointer;
  padding: 5px 5px;
  transition: background-color 0.2s;
  border: 1px solid #ccc;
  border-right: none;
  background-color: #f1f1f1;
  border-radius: 10px 10px 0 0;
  font-size: 1rem;
}
.tabs a:last-child {
  border-right: 1px solid #ccc;
}

/* Change background color of tabs on hover */
.tabs a:hover {
  background-color: #aaa;
  color: #fff;
}

/* Styling for active tab */
.tabs a.active {
  background-color: #fff;
  color: #484848;
  border-bottom: 2px solid #fff;
  cursor: default;
}

/* Style the tab content */
.tabcontent {
  padding: 5px 5px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 4px 4px 8px #e1e1e1;
}

.tabcontent td {
  padding: 0.3em 0.4em;
  color: #484848;
}
.tabcontent td.legend {
  color: #888;
  font-weight: bold;
  text-align: right;
}
.tabcontent .map {
  height: 90%;
  width: 100%;
  background: #d3eafb;
  margin-left: 60px;
  border: 1px solid #ccc;
  border-radius: 10px;
}
.data {
  width: 120px;
}
</style>
