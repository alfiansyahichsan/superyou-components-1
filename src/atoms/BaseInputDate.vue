<template>
  <div
    class="su-date-wrapper"
    :data-theme="theme"
    :class="{'disabled': disabled, 'readonly': readOnly}"
  >
    <label :class="{ 'date-focused': isFocused, 'is-error': error }">{{ label }}</label>
    <div
      class="su-date"
      :class="{ 'date-focused': isFocused, 'is-error': error }"
      @keyup.capture="updateValue"
      @focus.capture="onFocused"
      @blur.capture="onBlured"
    >
      <input
        v-if="showDay"
        ref="day"
        v-model="day"
        class="su-date__input su-date__input--day"
        type="tel"
        placeholder="dd"
        @input="updateDay"
        @blur="eachBlur('day', 2)"
        @focus="eachFocus('day')"
        :readonly="readOnly"
        :disabled="disabled"
      />
      <span v-if="showDay && showMonth" class="su-date__divider">/</span>
      <input
        v-if="showMonth"
        ref="month"
        v-model="month"
        class="su-date__input su-date__input--month"
        type="tel"
        placeholder="mm"
        @input="updateMonth"
        @blur="eachBlur('month', 2)"
        @focus="eachFocus('month')"
        :readonly="readOnly"
        :disabled="disabled"
      />
      <span v-if="showYear && (showDay || showMonth)" class="su-date__divider">/</span>
      <input
        v-if="showYear"
        ref="year"
        v-model="year"
        class="su-date__input su-date__input--year"
        type="tel"
        placeholder="yyyy"
        @input="updateYear"
        @blur="eachBlur('year', 4)"
        @focus="eachFocus('year')"
        @beforeinput="beforeInputYear"
        :readonly="readOnly"
        :disabled="disabled"
      />
    </div>
    <span v-if="error" class="su-input_error message">{{ errMsg }}</span>
    <span v-else class="su-input_note message">{{ note }}</span>
  </div>
</template>

<script>
export default {
  name: `BaseInputDate`,
  props: {
    value: {
      type: [Number, String],
      required: true
    },
    showDay: {
      type: Boolean,
      default: true
    },
    showMonth: {
      type: Boolean,
      default: true
    },
    showYear: {
      type: Boolean,
      default: true
    },
    note: {
      type: String
    },
    minAge: {
      type: Number
    },
    maxAge: {
      type: Number
    },
    label: {
      type: String
    },
    name: {
      type: String
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
  data() {
    return {
      day: "",
      month: "",
      year: "",
      isFocused: false,
      dateFlag: {
        day: 0,
        month: 0,
        year: 0
      }
    };
  },
  methods: {
    updateDay() {
      if (this.day && this.day.length >= 2) {
        this.$refs.month.select();
      }
      if (this.day > 31) {
        this.day = "31";
      }
      if (!this.day.length || parseInt(this.day, 10) < 4) return;
      if (this.showMonth) this.$refs.month.select();
      else if (this.showYear) this.$refs.year.select();
    },
    updateMonth() {
      if (this.month && this.month.length >= 2) {
        this.$refs.year.select();
      }
      if (this.month > 12) {
        this.month = "12";
      }
      if (!this.month.length || parseInt(this.month, 10) < 2) return;
      if (this.showYear) this.$refs.year.select();
    },
    updateYear() {
      // check first digit in year must be start with "1" or "2"
      if (!["1", "2"].includes(this.year[0]) && this.year.length < 2) {
        this.year = "";
      }
    },
    updateValue() {
      const timestamp = Date.parse(
        `${this.year.padStart(4, 0)}-${this.month}-${this.day}`
      );
      if (Number.isNaN(timestamp)) return;
      this.$emit(`input`, timestamp, this.name);
    },
    checkValidDate() {
      const timestamp = Date.parse(
        `${this.year.padStart(4, 0)}-${this.month}-${this.day}`
      );
      if (
        this.day.length === 2 &&
        this.month.length === 2 &&
        this.year.length === 4 &&
        timestamp
      ) {
        return true;
      }
      return false;
    },
    validateMinMaxYear(years = 0) {
      const month = new Date().getMonth() + 1;
      const year = new Date().getFullYear() - years;
      const day = new Date().getDate();
      const completeDate = `${month}/${day}/${year}`;
      const dateToTime = new Date(completeDate).getTime();
      return dateToTime > this.submittedDate;
    },
    errorChecker() {
      if (!this.checkValidDate()) {
        this.$emit("error-handler", true, "invalid", this.name);

        if (this.isFocused && this.dateFlag.year === 1) {
          this.$emit("error-handler", false, "ok", this.name);
        }
        return false;
      }

      if (this.minAge && !this.validateMinMaxYear(this.minAge)) {
        this.$emit("error-handler", true, "min-age", this.name);
        return false;
      }

      if (this.maxAge && this.validateMinMaxYear(this.maxAge)) {
        this.$emit("error-handler", true, "max-age", this.name);
        return false;
      }
      this.$emit("error-handler", false, "ok", this.name);
    },
    eachBlur(type, howMany) {
      if (this[type].length) {
        this[type] = this[type].padStart(howMany, 0);
      }
    },
    onBlured() {
      this.isFocused = false;
      if (
        isNaN(this.submittedDate) &&
        !this.day.length &&
        !this.month.length &&
        !this.year.length
      ) {
        this.$emit("error-handler", true, "required", this.name);
      } else if (isNaN(this.submittedDate)) {
        this.$emit("error-handler", true, "invalid", this.name);
      } else if (!isNaN(this.submittedDate)) {
        this.errorChecker();
      }
      this.$emit("handle-datestring", this.dateString);
    },
    eachFocus(type) {
      if (type === "year") {
        if (this.month.length === 0) {
          this.$refs.month.select();
          this.dateFlag.year = 0;
        } else {
          this.$emit("error-handler", false, "ok", this.name);
          this.dateFlag[type] += 1;
        }
      } else if (type === "month") {
        if (this.day.length === 0 && this.month.length === 0) {
          this.$refs.day.select();
          this.errorMessage = "";
          this.isError = false;
          this.dateFlag.month = 0;
        } else {
          this.$emit("error-handler", false, "ok", this.name);
          this.dateFlag[type] += 1;
        }
      } else if (type === "day") {
        if (!this.day.length) {
          this.$emit("error-handler", false, "ok", this.name);
        }
        this.dateFlag[type] += 1;
      }
    },
    onFocused() {
      if (this.readOnly || this.disabled) return false;
      this.isFocused = true;
    },
    beforeInputYear(e) {
      if (this.year.length >= 4 && e.inputType !== "deleteContentBackward") {
        e.preventDefault();
      }
    }
  },
  watch: {
    year(current, prev) {
      if (current > 9999) this.year = prev;
    },
    submittedDate() {
      if (this.year.length === 4) this.dateFlag.year += 1;
      if (this.dateFlag.day && this.dateFlag.month && this.dateFlag.year) {
        this.errorChecker();
      }
    },
    value(val) {
      this.year = new Date(val).getFullYear().toString();
      this.month = (new Date(val).getMonth() + 1).toString().padStart(2, 0);
      this.day = new Date(val)
        .getDate()
        .toString()
        .padStart(2, 0);
    }
  },
  computed: {
    submittedDate() {
      return Date.parse(
        `${this.month}/${this.day}/${this.year.padStart(4, 0)}`
      );
    },
    dateString() {
      return new Date(this.submittedDate).toLocaleDateString();
    }
  },
  created() {
    this.day = `${
      this.value
        ? new Date(this.value)
            .getDate()
            .toString()
            .padStart(2, 0)
        : ``
    }`;
    this.month = `${
      this.value
        ? (new Date(this.value).getMonth() + 1).toString().padStart(2, 0)
        : ``
    }`;
    this.year = `${this.value ? new Date(this.value).getFullYear() : ``}`;

    if (this.value.length === 10) {
      this.updateValue();
    }
  }
};
</script>

<style lang="scss" scoped>
.su-date-wrapper {
  label {
    display: block;
    color: var(--label-text-color);
    font-size: 12px;
    margin-bottom: 2px;
    &.active {
      color: var(--color-focused);
    }
    &.date-focused {
      color: var(--color-focused);
    }
    &.is-error {
      color: #e02020;
    }
  }
  .su-date {
    $spacing: 0.75em;
    display: inline-flex;
    position: relative;
    overflow: hidden;
    width: 100%;
    &::before,
    &::after {
      bottom: 0;
      content: "";
      left: 0;
      position: absolute;
      transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
      width: 100%;
      border-style: solid;
      border-width: thin 0 0 0;
    }
    &::before {
      border-color: var(--border-bottom-color);
    }
    &::after {
      border-color: var(--color-focused);
      transform: scaleX(0);
    }
    &.date-focused {
      &::after {
        transform: scaleX(1);
        border-width: thin 0 thin 0;
      }
    }
    &.is-error {
      &::after {
        border-color: #e02020;
        transform: scaleX(1);
        border-width: thin 0 0 0;
      }
    }
    // 1. Hide the spinner button in Chrome, Safari and Firefox.
    &__input {
      min-height: 36px;
      font-size: 16px;
      color: var(--text-color);
      padding: $spacing;
      padding-right: $spacing / 2;
      padding-left: $spacing / 4;
      padding: $spacing 0;
      background: transparent;
      border: none;
      text-align: left;

      &::placeholder {
        color: var(--placeholder-color);
      }
      /* stylelint-disable-next-line property-no-vendor-prefix */
      -moz-appearance: textfield; // 1
      &::-webkit-inner-spin-button {
        display: none; // 1
      }

      &:focus {
        outline: none;
      }
      &--day {
        width: 30px;
      }
      &--month {
        margin-left: 3px;
        margin-right: 3px;
        width: 40px;
        text-align: center;
      }
      &--year {
        width: 100%;
        padding-left: 10px;
      }
    }
    &__divider {
      font-size: 16px;
      padding-top: $spacing;
      padding-bottom: $spacing;
      /* padding: 0.75em 5px; */
      pointer-events: none;
      color: var(--label-text-color);
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
        color: var(--text-color);
      }
    }
  }

  &.readonly {
    .su-date {
      &::after,
      &::before {
        visibility: hidden;
      }

      input {
        cursor: default;
      }
    }
  }
}
</style>
