<template>
  <div class="hello">
    <h2>Copy text here:</h2>
    <textarea
        id="textAreaInput"
        :autosize="true"
        v-model="text"
        v-on:keyup.enter="submit"
    ></textarea>
    <br>
    <br>
    <span>Clipboard:</span>
    <ul id="clipboard">
      <li v-for="input in inputs" :key="input">
        {{ input }}
      </li>
    </ul>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      inputs: [],
      text: ""
    }
  },
  methods: {
    submit() {
      this.inputs.push(this.text)
      this.text = ""
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
