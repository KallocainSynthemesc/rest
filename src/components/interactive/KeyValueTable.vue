<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>Key</th>
          <th>Value</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(param, index) in params" :key="index">
          <td>
            <input type="text" v-model="param.key" placeholder="Enter key" />
          </td>
          <td>
            <input
              type="text"
              v-model="param.value"
              placeholder="Enter value"
              @blur="communicateParams"
            />
          </td>
          <td>
            <button @click="removeParam(index)">Remove</button>
          </td>
        </tr>
      </tbody>
    </table>
    <button @click="addParam">Add parameter</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      params: [{ key: "", value: "" }],
    };
  },
  methods: {
    addParam() {
      this.params.push({ key: "", value: "" });
    },
    removeParam(index) {
      this.params.splice(index, 1);
    },
    communicateParams() {
      this.$emit("communicateParams", this.params);
    },
  },
};
</script>
