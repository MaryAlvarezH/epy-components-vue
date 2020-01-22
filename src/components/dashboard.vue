<template>
  <div>
    <epy-button epyclass="btn btn-default" v-on:clickButton="testClick($event)"
      >Primary button</epy-button
    >

    <epy-button
      epyclass="btn btn-primary btn-outline"
      v-on:clickButton="testClick2($event)"
      >Primary button</epy-button
    >

    <epy-button epyclass="btn btn-primary">Primary button</epy-button>

    <epy-button epyclass="btn btn-primary">
      Primary button
      <i class="epy-icon-edit right"></i>
    </epy-button>

    <epy-button epyclass="btn btn-primary">
      <i class="epy-icon-edit left"></i> Primary button
    </epy-button>

    <epy-button epyclass="btn btn-primary">
      <i class="epy-icon-edit left"></i>
      Primary button
      <i class="epy-icon-edit right"></i>
    </epy-button>

    <epy-button epyclass="btn btn-link">
      Link button
      <i class="epy-icon-edit right"></i>
    </epy-button>

    <epy-button epyclass="btn btn-square-small">
      <i class="epy-icon-edit"></i>
    </epy-button>

    <epy-button epyclass="btn btn-square btn-default">
      <i class="epy-icon-edit"></i>
    </epy-button>

    <epy-button epyclass="btn btn-square btn-primary">
      <i class="epy-icon-edit"></i>
    </epy-button>

    <epy-button epyclass="btn btn-rectangle btn-default">
      <i class="epy-icon-edit"></i>
    </epy-button>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  methods: {
    testClick: function(event) {
      console.log("1 click from vue", event);
    },
    testClick2: function(event) {
      console.log("2 click from vue", event);
    }
  }
};
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
