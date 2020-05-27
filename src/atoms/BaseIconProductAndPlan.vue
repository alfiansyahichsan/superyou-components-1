<template>
  <div class="icon-container" :class="[product, ...iconSizeClasses]">
    <img :src="getProductImg" class="icon-product" />
    <img :src="getPlanImg" class="icon-plan" />
  </div>
</template>

<script>
export default {
  name: "BaseIconProductAndPlan",
  data() {
    return {
      productIcon: {
        safe: "https://superyou.co.id/img/icons/prod-umbrella.svg",
        life: "https://superyou.co.id/img/icons/prod-heart.svg",
        strong: "https://superyou.co.id/img/icons/prod-dumbell.svg",
        hospital: "/img/products/hospital/icon-hospital.svg"
      },
      planIcon: {
        gold: "https://superyou.co.id/img/icons/badge-gold.svg",
        silver: "https://superyou.co.id/img/icons/badge-silver.svg",
        bronze: "https://superyou.co.id/img/icons/badge-bronze.svg"
      }
    };
  },
  props: {
    product: {
      type: String,
      default: "safe"
    },
    plan: {
      type: String,
      default: "gold"
    },
    size: {
      type: String,
      default: "medium"
    }
  },
  computed: {
    getProductImg() {
      return this.productIcon[this.product];
    },
    getPlanImg() {
      return this.planIcon[this.plan];
    },
    iconSizeClasses() {
      return {
        small: this.size === "small",
        medium: this.size === "medium",
        large: this.size === "large"
      };
    }
  }
};
</script>

<style lang="scss">
.icon-container {
  width: 70px;
  height: 70px;
  position: relative;
  display: flex;
  align-items: center;

  &.small {
    transform: scale(0.7);
  }

  &.large {
    transform: scale(1.2);
  }

  .icon-product {
    max-width: 100%;
  }
  .icon-plan {
    position: absolute;
    bottom: -9px;
    right: -3px;
    max-width: 34px;
  }

  &.strong {
    .icon-product {
      width: 78px;
    }
    .icon-plan {
      right: -7px;
    }
  }
}
</style>