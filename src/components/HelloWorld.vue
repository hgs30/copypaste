<template>
  <div class="main">
    <b-container fluid="true">
      <b-row class="row justify-content-center">
        <b-col md="5" cols="auto" align-self="center">
          <b-card id="Enter clipboard items">
            <b-card-title title="Enter text below" align="center">Clipboard Input</b-card-title>
              <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                <b-form-group
                    id="input-group-1"
                    description="Copy something here to get on another device"
                >
                  <b-form-input
                      id="input-1"
                      autocomplete="off"
                      v-model="form.text"
                      placeholder="Copy here"
                      required
                  ></b-form-input>
                </b-form-group>


                <b-button type="submit" variant="primary">Submit</b-button>
                <b-button type="reset" variant="danger">Reset</b-button>
                <br>
                <span>Clipboard:</span>
                <ul id="clipboard">
                  <li v-for="(input, index) in inputs" :key="index">
                    {{ input }}
                  </li>
                </ul>
            </b-form>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      form: {
        text: "",
      },
      show: true,
      inputs: [],
    }
  },
  methods: {
    onSubmit(event) {
      event.preventDefault()
      this.inputs.push(this.form.text)
    },
    onReset(event) {
      event.preventDefault()
      // Reset our form values
      this.form.text = ""
      this.inputs = []
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
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
