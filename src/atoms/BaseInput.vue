<template>
  <div class="su-input" :class="{ 'with-note': note, 'input-error': error }">
    <div class="su-input_control" :class="{ 'is-focused': isFocused }">
      <label class="su-input_label">
        {{ label }}
        <input
          :type="inputType"
          :name="name"
          :value="value"
          autocomplete="off"
          class="su-input_text"
          @focus="onInputFocus"
          @blur="onInputBlur"
          @beforeinput="expectedCharacters($event)"
          @input="onInputChange($event)"
        />
        <span class="su-input_icon" v-if="icon">
          <img :src="icon" alt="input icon" />
        </span>
      </label>

      <span v-if="error" class="su-input_error message">{{ errMsg }}</span>
      <span v-else class="su-input_note message">{{ note }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseInput",
  data() {
    return {
      isFocused: false,
      isReadOnly: false,
      errorFlag: false
    };
  },
  props: {
    value: {
      type: String
    },
    name: String,
    inputType: {
      type: String,
      default: "text"
    },
    label: {
      type: String,
      default: null
    },
    note: {
      type: String,
      default: null
    },
    char: {
      type: String,
      default: null
    },
    maxLength: {
      type: Number,
      default: null
    },
    minLength: {
      type: Number,
      default: 0
    },
    required: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: null
    },
    error: {
      type: Boolean
    },
    errMsg: {
      type: String
    }
  },
  methods: {
    onInputBlur() {
      this.isFocused = false;
      this.checkAllValidation();
    },
    onInputFocus() {
      this.isFocused = true;
    },
    onInputChange(e) {
      this.$emit(
        "handle-change",
        e.target.value,
        e.target.getAttribute("name")
      );
    },
    expectedCharacters(e) {
      this.checkMaxLength(e);
      this.checkCharRegexMatch(e);
      return true;
    },
    checkMaxLength(e) {
      if (
        this.maxLength &&
        e.target.value.length >= this.maxLength &&
        e.inputType !== "deleteContentBackward"
      ) {
        e.preventDefault();
        return false;
      }
    },
    checkMinLength() {
      let length = this.value ? this.value.length : 0;
      return this.minLength > length;
    },
    checkCharRegexMatch(e) {
      if (!this.char) return;

      const rgx = new RegExp(this.char);
      if (rgx.test(e.data) || e.inputType === "deleteContentBackward") {
        return true;
      }
      e.preventDefault();
      return false;
    },
    validateEmail(mail) {
      let mail_regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; // eslint-disable-line

      console.log(mail_regex.test(mail));
      if (mail_regex.test(mail)) {
        return true;
      }
      // this.isError = true;
      // this.errorMessage = "Format email tidak valid";
      this.$emit("error-handler", true, "email", this.name);
    },
    checkAllValidation() {
      if (this.required && (this.value === null || this.value.length === 0)) {
        // this.errorMessage = `${this.label} wajib di isi`;
        // this.isError = true;
        this.$emit("error-handler", true, "required", this.name);
        return this.error;
      }
      if (this.checkMinLength()) {
        // this.errorMessage = `Minimal ${this.minLength} karakter`;
        // this.isError = true;
        this.$emit("error-handler", true, "min-length", this.name);
      } else {
        // this.errorMessage = "";
        // this.isError = false;
        this.$emit("error-handler", false, "ok", this.name);
      }

      if (this.inputType === "email") {
        this.validateEmail(this.value);
      }
    }
  },
  watch: {
    error() {
      this.errorFlag = true;
    },
    value() {
      if (this.errorFlag) {
        this.checkAllValidation();
      }
    }
  }
};
</script>

<style lang="scss" scoped>
input[type="number"] {
  -moz-appearance: textfield;
}
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.su-input {
  position: relative;
  margin-bottom: 20px;
  &_control {
    &::before {
      bottom: -1px;
      content: "";
      left: 0;
      position: absolute;
      transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
      width: 100%;
      border-style: solid;
      border-width: thin 0 0 0;
      border-color: rgba(0, 0, 0, 0.3);
    }

    &::after {
      bottom: -1px;
      content: "";
      left: 0;
      position: absolute;
      transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
      width: 100%;

      border-style: solid;
      border-width: thin 0 thin 0;
      border-color: #00aaae;
      transform: scaleX(0);
    }

    &.is-focused {
      &::after {
        transform: scaleX(1);
      }
      .su-input_label {
        color: #00aaae;
      }
    }

    .su-input_label {
      position: relative;
      color: #708697;
      font-size: 12px;

      .su-input_icon {
        position: absolute;
        bottom: -2px;
        right: 2px;
        img {
          max-width: 22px;
        }
      }
    }

    .su-input_text {
      flex: 1 1 auto;
      line-height: 20px;
      padding: 8px 0 8px;
      max-width: 100%;
      min-width: 0px;
      width: 100%;
      background-color: transparent;
      border-style: none;

      color: #0d294a;
      font-size: 16px;

      &:focus {
        outline: none;
      }
    }

    .message {
      position: absolute;
      width: 100%;
      left: 0;
      bottom: -20px;
      font-size: 10px;
      &.su-input_error {
        color: #e02020;
      }
      &.su-input_note {
        color: #0d294a;
      }
    }
  }
  &.input-error {
    .su-input_control {
      .su-input_label {
        color: #e02020;
      }
      &::before {
        border-color: #e02020;
      }
    }
  }
}
</style>
