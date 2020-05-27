<template>
  <div class="invoice-detail">
    <div class="detail-left">
      <div class="product-icon" style="width:70px;">
        <BaseIconProductAndPlan
          :product="getIconProduct"
          :plan="getBadgeType"
        />
      </div>
      <div class="product-basic-rider-name">
        <ProductCompletedName :details="allProductNameAndPolicyNumber" />
      </div>
      <a
        class="see-product-detail"
        :href="`/dashboard/e-policy/${datas.productId}`"
        >Detail Produk</a
      >
    </div>

    <div class="detail-right">
      <span class="price" :class="noRiders">
        <!-- <span>Rp</span> -->
        <span>{{ datas.price }}</span>
      </span>
      <template v-if="datas.riders && datas.riders.length">
        <span
          v-for="riderPrice in datas.riders"
          :key="riderPrice.price"
          class="price"
        >
          <!-- <span>Rp</span> -->
          <span>{{ riderPrice.price }}</span>
        </span>
      </template>
    </div>
  </div>
</template>

<script>
import ProductCompletedName from "../../molecules/common/ProductCompletedName.vue";
import BaseIconProductAndPlan from "../../atoms/BaseIconProductAndPlan.vue";

export default {
  name: "InvoiceDetail",
  components: {
    ProductCompletedName,
    BaseIconProductAndPlan
  },
  props: {
    datas: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    allProductNameAndPolicyNumber() {
      return {
        name: this.datas.product,
        plan: this.datas.plan,
        riders: this.datas.riders,
        policyNumber: this.datas.policyNumber
      };
    },
    getIconProduct() {
      if (this.datas.product) {
        const product_name = this.datas.product.toLowerCase();
        return product_name.includes("safe")
          ? "safe"
          : product_name.includes("life")
          ? "life"
          : product_name.includes("strong")
          ? "strong"
          : product_name.includes("hospital")
          ? "hospital"
          : null;
      }
      return null;
    },
    getBadgeType() {
      if (this.datas) {
        return this.datas.plan.toLowerCase();
      }
      return "";
    },
    noRiders() {
      if (this.datas.riders === null || this.datas.riders.length === 0) {
        return "single";
      }
      return null;
    }
  }
};
</script>

<style lang="scss" scoped>
.invoice-detail {
  display: flex;
  justify-content: space-between;
  width: 100%;

  margin: 0 auto;
  padding-top: 20px;
  padding-bottom: 20px;
  border-bottom: solid 0.5px rgba(112, 134, 151, 0.7);

  @media screen and (max-width: 600px) {
    padding-top: 0;
    padding-bottom: 16px;

    &:not(:first-child) {
      padding-top: 10px;
    }
  }

  .see-product-detail {
    font-size: 14px;
    text-decoration: none;
    color: #00aaae;
  }

  .price {
    font-size: 16px;
    display: flex;
    flex-wrap: nowrap;
    justify-content: flex-end;
    color: #313131;
    & > span:first-child {
      margin-right: 4px;
    }

    &.single {
      display: flex;
      height: 100%;
      align-items: center;
      @media screen and (max-width: 600px) {
        display: block;
        margin-top: 8px;
      }
    }
  }

  .detail-right {
    display: flex;
    flex-direction: column;

    & > span {
      height: 18px;

      &:not(:first-child) {
        margin-top: 8px;
        @media screen and (max-width: 600px) {
          margin-top: 9.5px;
        }
      }
    }
  }

  @media screen and (max-width: 600px) {
    .see-product-detail {
      font-size: 12px;
    }
    .price {
      font-size: 14px;
    }
    .product-icon {
      display: none;
    }
  }

  @media screen and (max-width: 320px) {
    .price {
      font-size: 12px;
    }
  }

  @media screen and (min-width: 601px) {
    padding-left: 20px;
    padding-right: 20px;

    .detail-left {
      display: flex;
      flex-basis: 80%;
      justify-content: space-between;

      .product-icon {
        display: block;
        max-width: 70px;
        width: 70px;
        flex-basis: 70px;
      }
      .product-basic-rider-name {
        flex-basis: 53%;
      }
      .see-product-detail {
        align-self: center;
      }
    }
  }
}
</style>
