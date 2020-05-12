<template>
  <div
    class="su-date-wrapper"
    :data-theme="theme"
    :class="{ disabled: disabled, readonly: readOnly }"
  >
    <label :class="{ 'date-focused': isFocused, 'is-error': error }">
      {{ label }}
    </label>
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
        @beforeinput="handleBeforeInput($event, 'day')"
        @keydown="handleKeypress($event, 'day')"
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
        @beforeinput="handleBeforeInput($event, 'month')"
        @keydown="handleKeypress($event, 'month')"
        :readonly="readOnly"
        :disabled="disabled"
      />
      <span v-if="showYear && (showDay || showMonth)" class="su-date__divider"
        >/</span
      >
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
        @keydown="handleKeypress($event, 'inputYear')"
        :readonly="readOnly"
        :disabled="disabled"
      />

			<span 
				v-show="!readOnly" 
				class="ic-close" 
				@click="resetValue"
			>
			</span>
      <div
        class="su-calendar"
        @click="handleClickedCalendar"
        ref="datepickericon"
        v-show="!readOnly"
      >
        <img :src="calendarTheme()" />
      </div>
    </div>
    <span v-if="error" class="su-input_error message">{{ errMsg }}</span>
    <span v-else class="su-input_note message">{{ note }}</span>

    <v-calendar
      v-show="isCalendarShow"
      v-click-outside="{
        exclude: ['datepickericon'],
        handler: 'onCloseCalendar',
      }"
      mode="single"
      ref="calendar"
      :min-date="minDateAge"
      :max-date="maxDateAge"
      :attributes="[
        {
          key: 'today',
          highlight: true,
          dates: new Date(submittedDate),
        },
      ]"
      @dayclick="dayClicked"
    ></v-calendar>
  </div>
</template>

<script>
import browserDetection from "../helper/browserDetection";
import VCalendar from "v-calendar/lib/components/calendar.umd";
import { clickOutside } from "../directives/clickOutside";

export default {
  name: `BaseInputDate`,
  components: {
    VCalendar,
  },
  directives: {
    clickOutside,
  },
  props: {
    value: {
      type: [Number, String],
      required: true,
    },
    showDay: {
      type: Boolean,
      default: true,
    },
    showMonth: {
      type: Boolean,
      default: true,
    },
    showYear: {
      type: Boolean,
      default: true,
    },
    note: {
      type: String,
    },
    minAge: {
      type: Number,
      default: 0,
    },
    maxAge: {
      type: Number,
      default: 65,
    },
    minMonthAge: {
      default: 0,
    },
    label: {
      type: String,
    },
    name: {
      type: String,
    },
    error: {
      type: Boolean,
    },
    errMsg: {
      type: String,
    },
    theme: {
      type: String,
      default: "normal",
    },
    readOnly: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    calendarColor: {
      type: String,
      default: "dark"
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
        year: 0,
      },
      isCalendarShow: false,
    };
  },
  methods: {
    onCloseCalendar() {
      this.isCalendarShow = false;
    },
    updateDay(e) {
      if (e.inputType === "deleteContentBackward" && this.day.length === 0) {
        this.$refs.day.focus();
        return;
      }
      if (this.day > 31) {
        this.day = "31";
      }
      if (this.day.length < 2 && parseInt(this.day, 10) < 4) return;
      if (this.showMonth) this.$refs.month.focus();
      else if (this.showYear) this.$refs.year.focus();
    },
    updateMonth() {
      if (this.month > 12) {
        this.month = "12";
      }
      if (this.month.length < 2 || parseInt(this.month, 10) < 2) return;
      if (this.showYear) this.$refs.year.focus();
    },
    updateYear() {
      // check first digit in year must be start with "1" or "2"
      if (this.year.length < 2 && !["1", "2"].includes(this.year[0])) {
        this.year = "";
      }
    },
    async updateValue(e, calendarVal = null) {
      if (calendarVal) {
        this.$emit(`input`, calendarVal, this.name);
        this.$emit("handle-datestring", new Date(calendarVal).toLocaleDateString());
        setTimeout(() => {
          this.errorChecker();
        }, 200);
      } else {
        const dateConcat = `${this.month}${this.day}${this.year}`;
        if (Number.isNaN(this.submittedDate)) return;

        if (dateConcat.length === 8 || dateConcat.length === "") {
          this.$emit(`input`, this.submittedDate, this.name);
        }
      }
    },
    checkValidDate() {
      if (
        this.day.length === 2 &&
        this.month.length === 2 &&
        this.year.length === 4 &&
        this.submittedDate
      ) {
        return true;
      }
      return false;
    },
    validateMinMaxYear(type) {
      if (type === "minage") {
        return this.submittedDate <= this.maxDateAge.getTime();
      } else if (type === "maxage") {
        return this.submittedDate >= this.minDateAge.getTime();
      }
    },
    getDateToTime(setMonth = 0, setYear = 0, setDate = 0) {
      const month = new Date().getMonth() + 1 + setMonth;
      const year = new Date().getFullYear() + setYear;
      const day = setDate === 0 ? new Date().getDate() : setDate;

      const completeDate = `${month}/${day}/${year}`;
      const dateToTime = new Date(completeDate);
      return dateToTime;
    },
    errorChecker() {
      if (!this.checkValidDate()) {
        this.$emit("error-handler", true, "invalid", this.name);

        if (this.isFocused && this.dateFlag.year === 1) {
          this.$emit("error-handler", false, "ok", this.name);
        }
        return false;
      }

      if (!this.validateMinMaxYear("minage")) {
        this.$emit("error-handler", true, "min-age", this.name);
        return false;
      }

      if (this.maxAge && !this.validateMinMaxYear("maxage")) {
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
      this.isCalendarShow = false;
      if (type === "year") {
        if (this.month.length === 0) {
          this.$refs.month.focus();
          this.dateFlag.year = 0;
        } else {
          this.$emit("error-handler", false, "ok", this.name);
          this.dateFlag[type] += 1;
        }
      } else if (type === "month") {
        if (this.day.length === 0 && this.month.length === 0) {
          this.$refs.day.focus();
          this.errorMessage = "";
          this.isError = false;
          this.dateFlag.month = 0;
        } else {
          this.$emit("error-handler", false, "ok", this.name);
          this.dateFlag[type] += 1;
        }
      } else if (type === "day") {
        // if (!this.day.length) {
        //   this.$emit("error-handler", false, "ok", this.name);
        // }
        this.$emit("error-handler", false, "ok", this.name);
        this.dateFlag[type] += 1;
      }
    },
    onFocused() {
      if (this.readOnly || this.disabled) return false;
      this.isFocused = true;
    },
    beforeInputYear(e) {
      if (
        e.target.selectionStart === 0 &&
        e.target.selectionEnd === 4 &&
        e.inputType === "deleteContentBackward"
      ) {
        this.year = "";
        this.$refs.year.focus();
        e.preventDefault();
        return;
      }
      if (
        e.inputType === "deleteContentBackward" &&
        e.target.selectionStart === 0
      ) {
        this.$refs.month.focus();
        return false;
      }

      this.numberOnly(e);
      if (this.year.length >= 4 && e.inputType !== "deleteContentBackward") {
        e.preventDefault();
      }
    },
    handleBeforeInput(e, type = null) {
      if (
        type === "month" &&
        e.target.selectionStart === 0 &&
        e.target.selectionEnd === 2 &&
        e.inputType === "deleteContentBackward"
      ) {
        this.month = "";
        this.$refs.month.focus();
        e.preventDefault();
        return;
      }
      if (
        type === "month" &&
        e.inputType === "deleteContentBackward" &&
        e.target.selectionStart === 0
      ) {
        this.$refs.day.focus();
        return;
      }

      if (!this.numberOnly(e)) {
        e.preventDefault();
        return;
      }
      this.currying(e, type);
    },
    numberOnly(e) {
      const rgx = new RegExp("^[0-9]*$");
      let inputVal = e.data || e.key;
      if (rgx.test(inputVal) || e.inputType === "deleteContentBackward") {
        return true;
      }
      e.preventDefault();
      return false;
    },
    currying(e, type) {
      if (
        (type === "day" || type === "month") &&
        e.target.value.length >= 2 &&
        e.inputType !== "deleteContentBackward"
      ) {
        e.preventDefault();
        if (type === "day") {
          const val = this.month.split("");
          let inputVal = e.data || e.key;
          val[0] = inputVal;
          this.month = val.join("");
          this.$refs.month.focus();
          this.$refs.month.setSelectionRange(0, 1);
        } else if (type === "month") {
          const val = this.year.split("");
          let inputVal = e.data || e.key;
          val[0] = inputVal;
          this.year = val.join("");
          this.$refs.year.focus();
          this.$refs.year.setSelectionRange(0, 1);
        }
        return false;
      }
    },
    handleKeypress(e, type = "general") {
      // due to browser support firefox
      // below code only run in firefox
      if (browserDetection() === "firefox") {
        e.key === "Backspace" ? (e.inputType = "deleteContentBackward") : null;
        this.handleBeforeInput(e, type);

        if (
          type === "inputYear" &&
          this.year.length >= 4 &&
          e.inputType !== "deleteContentBackward"
        ) {
          e.preventDefault();
        }

        if (
          type === "inputYear" &&
          e.inputType === "deleteContentBackward" &&
          e.target.selectionStart === 0
        ) {
          this.$refs.month.focus();
          return false;
        }
      }
    },
    dayClicked(data) {
      const min = new Date(this.minDateAge).getTime();
      const max = new Date(this.maxDateAge).getTime();

      if (data.dateTime >= min && data.dateTime <= max) {
        this.updateValue(null, data.dateTime);
        this.isCalendarShow = false;
        this.isFocused = false;
      }
    },
    async handleClickedCalendar() {
      this.isCalendarShow = !this.isCalendarShow;
      this.isCalendarShow ? (this.isFocused = true) : (this.isFocused = false);
      await this.$refs.calendar.move(new Date(this.submittedDate));
    },
    resetValue() {
      this.day = "";
      this.month = "";
      this.year = "";
      this.$refs.day.focus();
			this.$emit("reset-value", true);
    },
    addMonths(date, months) {
      date.setMonth(date.getMonth() + months);
      return date;
    },
    calendarTheme() {
      var color = this.calendarColor == "dark" ? "calendar" : "calendar-white";
      return `https://superyou.co.id/img/icons/${color}.svg`;
    }
  },
  watch: {
    year(current, prev) {
      if (current > 9999) this.year = prev;
      if (this.isFocused && this.year === "0") {
        this.year = "";
      }
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
    },
  },
  computed: {
    submittedDate() {
      return Date.parse(
        `${this.month}/${this.day}/${this.year.padStart(4, 0)}`
      );
    },
    dateString() {
      return new Date(this.submittedDate).toLocaleDateString();
    },
    minDateAge() {
      if (this.minAge > this.maxAge) {
        return null;
      }
      return this.getDateToTime(0, -this.maxAge, new Date().getDate() + 1);
    },
    maxDateAge() {
      const currentMaxDate = this.getDateToTime(0, -this.minAge, 0);
      if (this.minMonthAge) {
        return this.addMonths(currentMaxDate, -this.minMonthAge);
      }
      return currentMaxDate;
    },
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
  },
  async mounted() {
    if (!isNaN(this.submittedDate)) {
      await this.$refs.calendar.move(new Date(this.submittedDate));
    }
  },
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
      padding-top: $spacing;
      padding-right: $spacing / 2;
      padding-left: $spacing / 4;
      padding-bottom: 0.55em;
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
      font-size: 17px;
      padding-top: $spacing;
      padding-bottom: 0.45em;
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
    .su-calendar {
      position: absolute;
      right: 4px;
      top: 10px;

      & > img {
        width: 20px;
        height: 20px;
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

  .vc-container {
    position: absolute;
    z-index: 10;
  }

  .ic-close {
    position: absolute;
    right: 42px;
    top: 10px;
    width: 22px;
    height: 22px;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
    background: lightgray;
    border-radius: 50%;
    cursor: pointer;
  }
  .ic-close:hover {
    opacity: 0.8;
  }
  .ic-close:before,
  .ic-close:after {
    position: absolute;
    left: 10px;
    content: " ";
    height: 12px;
    width: 2px;
    background-color: #333;
  }
  .ic-close:before {
    transform: rotate(45deg);
  }
  .ic-close:after {
    transform: rotate(-45deg);
  }
}
</style>
