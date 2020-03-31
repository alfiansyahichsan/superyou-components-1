<template>
  <div
    id="su-base-select"
    :class="{ 'input-error': error, 'disabled': disabled, readonly: readOnly }"
    :data-theme="theme"
  >
    <label :class="{ active: isFocused }">{{ label }}</label>
    <slot name="tool-tip"></slot>
    <v-select
      :label="options.label"
      class="base-select"
      :value="value"
      :options="options"
      :reduce="opt => opt.val"
      :searchable="false"
      :selectable="select"
      @input="onSelectOption"
      @search:focus="onFocus"
      @search:blur="onBlur"
      :select-on-key-codes="[8]"
      :disabled="readOnly || disabled"
    ></v-select>
    <span v-if="error" class="su-input_error message">{{ errMsg }}</span>
  </div>
</template>

<script>
import vSelect from "vue-select";

export default {
  name: "BaseSelect",
  data() {
    return {
      isFocused: false,
      selectedVal: null
    };
  },
  components: {
    vSelect
  },
  props: {
    options: {
      type: Array,
      default: function() {
        return [
          { label: "Indonesia", val: "INA" },
          { label: "Canada", val: "CA" },
          { label: "Australia", val: "AUS" }
        ];
      }
    },
    value: {
      type: [String, Number, Object, Array],
      default: ""
    },
    label: {
      type: String,
      default: "Label"
    },
    name: {
      type: String,
      default: "Label Key"
    },
    select: {
      type: Function
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
    onSelectOption(selectedData) {
      this.selectedVal = selectedData;
      this.$emit("handle-change", selectedData, this.name);
    },
    onFocus() {
      this.isFocused = true;
    },
    onBlur() {
      this.isFocused = false;
      if (this.selectedVal === null || this.selectedVal === "") {
        // this.isError = true;
        // this.errorMessage = "Wajib di isi";
        this.$emit("error-handler", true, "required", this.name);
        return false;
      }
      // this.isError = false;
      // this.errorMessage = "";
      this.$emit("error-handler", false, "ok", this.name);
      return true;
    }
  },
  created() {
    this.selectedVal = this.value;
  },
  watch: {
    value(val) {
      this.selectedVal = val;
    }
  }
};
</script>

<style lang="scss">
#su-base-select {
  margin-bottom: 20px;
  label {
    color: var(--label-text-color);
    font-size: 12px;
    &.active {
      color: var(--color-focused);
    }
  }
  .base-select {
    height: 38px;
    .vs__dropdown-toggle {
      border: none;
      border-radius: 0;

      &::before {
        bottom: -1px;
        content: "";
        left: 0;
        position: absolute;
        transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
        width: 100%;

        border-style: solid;
        border-width: thin 0 0 0;
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
        border-color: var(--color-focused);
        transform: scaleX(0);
      }

      .vs__selected-options {
        padding-left: 0;
        .vs__selected {
          color: var(--text-color);
          padding-left: 0;
          margin: 8px 2px 4px 0;
          font-size: 16px;
        }
        .vs__search {
          font-size: 16px;
          color: var(--text-color);
          padding-bottom: 4px;
        }
      }

      .vs__actions {
        .vs__clear {
          display: none;
        }
        .vs__open-indicator {
          color: #0d294a;
          fill: var(--text-color);
          transform: scale(0.85) rotate(0deg);
        }
      }
    }
    .vs__dropdown-menu {
      top: 110%;
      border-radius: 8px;
      box-shadow: 0 2px 10px 0 rgba(109, 131, 172, 0.25);
      border: none;
      padding-top: 0;
      padding-bottom: 0;
      .vs__dropdown-option {
        font-size: 16px;
        padding: 6px 20px;
        &--highlight {
          background-color: #f2f3f5;
          color: #0d294a;
        }
      }
      .vs__no-options {
        font-size: 16px;
        color: var(--label-text-color);
      }
    }

    &.vs--open {
      .vs__open-indicator {
        transform: rotate(180deg) scale(0.85) !important;
      }
      .vs__dropdown-toggle {
        &::after {
          transform: scaleX(1);
        }
      }
    }
  }

  &.readonly {
    margin-bottom: 10px;
    .base-select {
      .vs__dropdown-toggle {
        background-color: transparent;
        &::after,
        &::before {
          visibility: hidden;
        }
        .vs__selected-options,
        input {
          background-color: transparent;
        }
        .vs__selected,
        input,
        .vs__selected-options {
          cursor: default;
        }
        .vs__actions {
          display: none;
        }
      }
    }
  }
  &.disabled {
    input {
      cursor: not-allowed;
    }
  }

  &.input-error {
    label {
      color: #e02020;
    }
    .vs__dropdown-toggle {
      &::before {
        border-color: #e02020;
      }
    }
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
  &.su-input_note {
    color: #0d294a;
    color: var(--text-color);
  }
}
</style>
