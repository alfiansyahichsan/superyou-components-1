<template>
  <div
    class="su-input_checkboxes"
    :class="{[axis]: true, 'readonly': readOnly, 'disabled': disabled}"
    :data-theme="theme"
  >
    <label class="main" :class="{'is-error': error }">{{ label }}</label>
    <div class="inline-flex">
      <div class="checkbox-wrapper" v-for="option in options" :key="option.val">
        <input
          :type="inputType"
          v-model="checkedData"
          :value="option.val"
          :id="option.name"
          :name="name"
          @change="handleOnChange"
          :disabled="disabled || readOnly"
        />
        <label :for="option.name">{{ option.name }}</label>
      </div>
    </div>
    <span v-if="error" class="su-input_error message">{{ errMsg }}</span>
  </div>
</template>

<script>
export default {
  name: "BaseCheckboxAndRadio",
  data() {
    return {
      checkedData: [],
      isError: false,
      errorMessage: ""
    };
  },
  props: {
    options: {
      type: Array,
      default: function() {
        return [
          {
            val: "male",
            name: "Laki-laki"
          },
          {
            val: "female",
            name: "Perempuan"
          }
        ];
      }
    },
    axis: {
      type: String,
      default: "column"
    },
    name: {
      type: String,
      default: null
    },
    inputType: {
      type: String,
      default: "checkbox"
    },
    label: {
      type: String,
      default: "Gender"
    },
    value: {
      type: [String, Array],
      default: ""
    },
    error: {
      type: Boolean
    },
    errMsg: {
      type: String
    },
    theme: {
      type: String,
      default: "normal"
    },
    readOnly: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleOnChange(e) {
      if (this.inputType === "checkbox") {
        this.$emit("handle-change", this.checkedData, this.name);
      } else {
        this.$emit("handle-change", e.target.value, this.name);
      }
    }
  },
  created() {
    this.checkedData = this.value;
  },
  watch: {
    value(val) {
      this.checkedData = val;
    }
  }
};
</script>

<style lang="scss" scoped>
.su-input_checkboxes {
  margin-bottom: 20px;
  label.main {
    color: var(--label-text-color);
    font-size: 12px;
    margin-bottom: 16px;
    display: block;
  }
  .inline-flex {
    display: flex;
    flex-wrap: nowrap;

    .checkbox-wrapper {
      margin-bottom: 6px;

      & > input {
        color: var(--text-color);
        font-size: 16px;
        margin-right: 10px;
        opacity: 0;
        width: 0;
        height: 0;
        display: none;
      }
      & > label {
        color: var(--text-color);
        font-size: 16px;
        position: relative;
        padding-left: 32px;
        display: block;

        &::before {
          content: "";
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-align: center;
          -ms-flex-align: center;
          align-items: center;
          -webkit-box-pack: center;
          -ms-flex-pack: center;
          justify-content: center;
          width: 24px;
          height: 24px;
          -webkit-box-shadow: inset 0 0 6px 0 rgba(0, 0, 0, 0.3);
          box-shadow: inset 0 0 6px 0 rgba(0, 0, 0, 0.3);
          border-radius: 50%;
          position: absolute;
          left: 0;
          top: 50%;
          -webkit-transform: translateY(-50%);
          transform: translateY(-50%);
          text-align: center;
          line-height: 24px;
          background-color: #fff;
        }
      }

      input[type="checkbox"]:checked + label:before,
      input[type="radio"]:checked + label:before {
        content: url(https://superyou.app/img/icons/check-darkblue.svg);
      }
    }
  }

  &.row {
    display: flex;
    flex-wrap: wrap;
    label.main {
      width: 100%;
      flex-basis: 100%;
    }

    .checkbox-wrapper:last-child {
      margin-left: 30px;
    }
  }
  .message {
    margin-top: 8px;
    width: 100%;
    display: inline-block;
    font-size: 10px;
    &.su-input_error {
      color: #e02020;
    }
  }
}
</style>
