<template>
  <div id="form-container" :style="{ 'background-color': bgContainer }">
    <BaseStepper :dataSteps="dataSteps" />
    <h1>Form</h1>
    <form>
      <base-input
        :value="form.ph_name.val"
        :label="form.ph_name.label_name"
        v-on:handle-change="(...args) => handleDataChange(...args, 'form')"
        v-on:error-handler="(...args) => errorHandlerInput(...args, 'form')"
        name="ph_name"
        note="Note: Nama Lengkap"
        char="^[A-Za-z ]+$"
        :min-length="form.ph_name.min"
        :error="form.ph_name.err"
        :err-msg="form.ph_name.msg"
        required
        :theme="currentTheme"
      ></base-input>
      <br />

      <base-input
        :value="form.citizen_id.val"
        :label="form.citizen_id.label_name"
        v-on:handle-change="(...args) => handleDataChange(...args, 'form')"
        v-on:error-handler="(...args) => errorHandlerInput(...args, 'form')"
        :error="form.citizen_id.err"
        :err-msg="form.citizen_id.msg"
        name="citizen_id"
        inputType="tel"
        char="^[0-9]*$"
        :max-length="form.citizen_id.max"
        :min-length="form.citizen_id.min"
        required
        :theme="currentTheme"
      ></base-input>

      <br />
      <base-input
        :value="form.email.val"
        :label="form.email.label_name"
        v-on:handle-change="(...args) => handleDataChange(...args, 'form')"
        v-on:error-handler="(...args) => errorHandlerInput(...args, 'form')"
        :error="form.email.err"
        :err-msg="form.email.msg"
        name="email"
        inputType="email"
        required
        :theme="currentTheme"
      ></base-input>
      <br />
      <base-select
        :value="form.relation.val"
        name="relation"
        label="Hubungan"
        v-on:handle-change="(...args) => handleDataChange(...args, 'form')"
        v-on:error-handler="(...args) => errorHandlerInput(...args, 'form')"
        :error="form.relation.err"
        :err-msg="form.relation.msg"
        :select="(opt) => opt.val !== 'mother'"
        :options="dataSelectOpt"
        :theme="currentTheme"
      ></base-select>
      <br />
      <base-checkbox-and-radio
        name="gender"
        v-on:handle-change="(...args) => handleDataChange(...args, 'form')"
        axis="row"
        inputType="radio"
        :theme="currentTheme"
        :value="form.gender.val"
      ></base-checkbox-and-radio>
      <br />
      <base-input-date
        :label="form.dob.label_name"
        name="dob"
        v-on:input="(...args) => handleDataChange(...args, 'form')"
        v-on:error-handler="(...args) => errorHandlerInput(...args, 'form')"
        :value="form.dob.val"
        :min-age="form.dob.min_age"
        :max-age="form.dob.max_age"
        :error="form.dob.err"
        :err-msg="form.dob.msg"
        :theme="currentTheme"
      ></base-input-date>
    </form>
  </div>
</template>

<script>
import BaseInput from "../atoms/BaseInput";
import BaseStepper from "../atoms/BaseStepper";
import BaseSelect from "../atoms/BaseSelect";
import BaseCheckboxAndRadio from "../atoms/BaseCheckboxAndRadio";
import BaseInputDate from "../atoms/BaseInputDate";

export default {
  name: "FormComponets",
  data() {
    return {
      form: {
        ph_name: {
          val: "",
          err: false,
          msg: "",
          min: 5,
          label_name: "Nama Lengkap"
        },
        citizen_id: {
          val: "",
          err: false,
          msg: "",
          min: 16,
          max: 16,
          label_name: "No Kartu Identitas"
        },
        email: {
          val: "",
          err: false,
          msg: "",
          label_name: "Email"
        },
        relation: {
          val: { label: "Saya Sendiri", val: "self" },
          err: false,
          msg: "",
          label_name: "Hubungan"
        },
        gender: {
          val: "",
          err: false,
          msg: ""
        },
        dob: {
          val: "",
          err: false,
          msg: "",
          min_age: 0,
          max_age: 40,
          label_name: "Tanggal Lahir"
        }
      },

      dataSteps: [
        {
          title: "1",
          info: "Pilih Produk"
        },
        {
          title: "2",
          info: "Isi Data"
        },
        {
          title: "3",
          info: "Review"
        },
        {
          title: "4",
          info: "Pembayaran"
        }
      ],
      dataSelectOpt: [
        { label: "Saya Sendiri", val: "self" },
        { label: "Ayah Kandung", val: "father" },
        { label: "Ibu Kandung", val: "mother" },
        { label: "Saudara Kandung", val: "brother" }
      ],
      currentTheme: "normal"
    };
  },
  components: {
    BaseInput,
    BaseStepper,
    BaseSelect,
    BaseCheckboxAndRadio,
    BaseInputDate
  },
  methods: {
    handleDataChange(...args) {
      const [val, name, instance] = [...args];
      this[instance][`${name}`].val = val;
    },
    errorHandlerInput(...args) {
      const [error, type, name, instance] = [...args];

      switch (type) {
        case "required": {
          this[instance][name].err = error;
          this[instance][
            name
          ].msg = `${this[instance][name].label_name} harus diisi`;
          return;
        }
        case "min-length": {
          this[instance][name].err = error;
          this[instance][
            name
          ].msg = `Minimal karakter ${this[instance][name].min}`;
          return;
        }
        case "max-age": {
          this[instance][name].err = error;
          this[instance][
            name
          ].msg = `Usia harus ${this[instance][name].max_age} tahun ke bawah`;
          return;
        }
        case "min-age": {
          this[instance][name].err = error;
          this[instance][
            name
          ].msg = `Usia harus ${this[instance][name].min_age} tahun ke atas`;
          return;
        }
        case "email": {
          this[instance][name].err = error;
          this[instance][name].msg = "Format email tidak valid";
          return;
        }
        case "invalid": {
          this[instance][name].err = error;
          this[instance][name].msg = "Invalid data";
          return;
        }
        case "ok": {
          this[instance][name].err = error;
          this[instance][name].msg = "";
        }
      }
    }
  },
  computed: {
    bgContainer() {
      if (this.currentTheme === "dark") {
        return "#00aaae";
      }
      return "#fff";
    }
  }
};
</script>

<style lang="scss" scoped>
#form-container {
  padding-top: 40px;
  padding-left: 25px;
  padding-right: 25px;

  max-width: 500px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  /* background: #fff; */
  /* background: #00aaae; */
  min-height: 100vh;

  box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12),
    0 2px 4px -1px rgba(0, 0, 0, 0.3);

  @media screen and (max-width: 500px) {
    padding-left: 10px;
    padding-right: 10px;
  }
}
</style>
