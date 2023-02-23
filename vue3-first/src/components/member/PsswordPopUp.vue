<template>
  <div class="container px-4 px-lg-5 mt-5">
    <nav class="navbar navbar-expand-lg">
      <div class="container gx-4 px-lg-5"></div>
      <div>
        <img
          class="close-image"
          src="../../assets/images/x_button.png"
          alt=""
          @click="closePopup"
        />
      </div>
    </nav>

    <div
      class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center"
    >
      agesgesgg
    </div>
  </div>
</template>

<script>
export default {
  emits: ["close-pssword-popup"],
  setup(props, context) {
    const closePopup = () => {
      context.emit("close-pssword-popup");
    };

    return {
      closePopup,
    };
  },
};
</script>

<style scoped>
.close-image {
  width: 30px;
  height: 30px;
  margin-top: 15px;
}

body {
  padding: 1.5em;
  background: #f5f5f5;
}

table {
  border: 1px #a39485 solid;
  font-size: 0.9em;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25);
  width: 100%;
  border-collapse: collapse;
  border-radius: 5px;
  overflow: hidden;
}

thead {
  font-weight: bold;
  color: #fff;
  background: #73685d;
}

td,
th {
  padding: 1em 0.5em;
  vertical-align: middle;
}

td {
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  background: #fff;
}

a {
  color: #73685d;
}

@media all and (max-width: 768px) {
  table,
  thead,
  tbody,
  th,
  td,
  tr {
    display: block;
  }

  table {
    position: relative;
    padding-bottom: 0;
    border: none;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }

  thead {
    white-space: nowrap;
  }

  tr {
    display: inline-block;
    vertical-align: top;
  }

  th {
    border-bottom: 1px solid #a39485;
  }

  td {
    border-bottom: 1px solid #e5e5e5;
  }
}
</style>
