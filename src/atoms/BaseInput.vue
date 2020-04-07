<template>
  <div
    class="su-input"
    :class="{ 'with-note': note, 'input-error': error, 'readonly': readOnly } "
    :data-theme="theme"
  >
    <div class="su-input_control" :class="{ 'is-focused': isFocused }">
      <label class="su-input_label">
        {{ label }}
        <slot name="tool-tip"></slot>
        <input
          :type="inputType"
          :name="name"
          :value="value"
          autocomplete="off"
          class="su-input_text"
          @focus="onInputFocus"
          @blur="onInputBlur($event)"
          @beforeinput="expectedCharacters($event)"
          @keypress="handleKeypress($event)"
          @input="onInputChange($event)"
          :ref="inputType"
          :readonly="readOnly"
        />
        <span class="span-container" v-if="loader">
          <i class="loader"></i>
        </span>
        <span class="span-container" v-if="inputType == 'password'">
          <i
            class="password_visibility su_eye"
            @click.prevent="switchVisibility($event.target.classList)"
          ></i>
        </span>
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
import browserDetection from "../helper/browserDetection";

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
    },
    equalValue: {
      type: Object,
      default: () => ({})
    },
    loader: {
      type: Boolean,
      default: false
    },
    readOnly: {
      type: Boolean,
      default: false
    },
    theme: {
      type: String,
      default: "normal"
    }
  },
  methods: {
    onInputBlur(e) {
      this.isFocused = false;
      this.checkAllValidation();
      this.$emit("blur-change", e.target.value, e.target.getAttribute("name"));
    },
    onInputFocus() {
      if (this.readOnly) return false;
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
    handleKeypress(e) {
      if (browserDetection() === "firefox") {
        this.expectedCharacters(e);
      }
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
      let inputVal = e.data || e.key;
      if (rgx.test(inputVal) || e.inputType === "deleteContentBackward") {
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
      if (Object.keys(this.equalValue).length != 0) {
        this.$emit(
          "error-handler",
          true,
          "equal-value",
          this.name,
          this.equalValue
        );
      }

      if (this.inputType === "email") {
        this.validateEmail(this.value);
      }
    },
    switchVisibility(e) {
      const refs = this.$refs.password;
      if (refs.type == "password") {
        this.$refs.password.type = "text";
        e.add("su_edit");
        e.remove("su_eye");
      } else {
        this.$refs.password.type = "password";
        e.add("su_eye");
        e.remove("su_edit");
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
@keyframes around {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
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
      /* border-color: rgba(0, 0, 0, 0.3); // need variable */
      border-color: var(--border-bottom-color);
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
      border-color: var(--color-focused); // need variable
      transform: scaleX(0);
    }

    &.is-focused {
      &::after {
        transform: scaleX(1);
      }
      .su-input_label {
        color: var(--color-focused);
      }
    }

    .su-input_label {
      /* position: relative; */
      color: var(--label-text-color);
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

      color: var(--text-color);
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
        color: #f33131;
      }
      &.su-input_note {
        color: var(--text-color);
      }
    }

    .span-container {
      position: absolute;
      right: 7px;
      top: 55%;
      .loader {
        position: relative;
        display: inline-block;
        animation: around 7s infinite;
        height: 15px;
        width: 15px;
        &::after {
          animation: around 0.7s ease-in-out 0.4s infinite;
          background: transparent;
        }
        &::after,
        &::before {
          content: "";
          background: white;
          position: absolute;
          display: inline-block;
          width: 100%;
          height: 100%;
          border-width: 1px;
          border-color: rgba(112, 134, 151, 0.8) rgba(112, 134, 151, 0.8)
            rgba(112, 134, 151, 0.8) transparent;
          border-style: solid;
          border-radius: 50%;
          box-sizing: border-box;
          top: 0;
          left: 0;
          animation: around 0.7s ease-in-out infinite;
        }
      }
      .password_visibility {
        &.su_edit {
          content: url(https://superyou.co.id/img/icons/edit-gray.svg);
        }
        &.su_eye {
          content: url(https://superyou.co.id/img/icons/eye.svg);
        }
      }
    }
  }

  &.readonly {
    .su-input_control {
      &::before,
      &::after {
        visibility: hidden;
      }

      .su-input_note {
        bottom: -12px;
      }
    }
  }
  &.input-error {
    .su-input_control {
      .su-input_label {
        color: #f33131;
      }
      &::before {
        border-color: #f33131;
      }
    }
  }
}
</style>
