<template>
  <div id="show-case">
    <div class="card_container">
      <CardInvoice
        v-for="invoice in allInvoices"
        :key="invoice.policy_group_number"
        :detailPayment="invoice"
        :payNowAction="payButton"
        :title="`No Transaksi ${invoice.policy_group_number}`"
        @on-show-invoice-product="showDetailSelectedProduct"
        @on-show-payment-history="showPaymentHistory"
      />

      <BaseModal :modalShow="showModal" v-on:modal-close="hideModal" :max-width="'900px'">
        <template v-if="showModalType === `DETAIL_PRODUCT` && productsDetails.list">
          <InvoiceDetails
            :productsDetails="productsDetails.list"
            :paymentFee="productsDetails.paymentFee"
          />
        </template>
        <template v-else>
          <PaymentHistory :historyData="payment_history" />
        </template>
      </BaseModal>

      <br />
      <br />

      <div style="display:flex;justify-content:space-around;">
        <BaseIconProductAndPlan product="life" plan="bronze" />
        <BaseIconProductAndPlan product="safe" plan="gold" size="medium" />
        <BaseIconProductAndPlan product="strong" plan="silver" />
        <BaseIconProductAndPlan product="hospital" plan="silver" />
      </div>

      <br />
      <br />
    </div>
  </div>
</template>

<script>
import BaseIconProductAndPlan from "@/atoms/BaseIconProductAndPlan.vue";
import CardInvoice from "@/components/card-invoice/CardInvoice.vue";
import PaymentHistory from "@/components/PaymentHistory/PaymentHistory.vue";
import BaseModal from "@/atoms/BaseModal.vue";
import InvoiceDetails from "@/molecules/invoice/InvoiceDetails.vue";
import invoicesData from "@/data/payment-invoices.json";

const payNowAction = () => alert("from paynow");

export default {
  name: "ShowCase",
  data() {
    return {
      paymentDetail: null,
      payButton: null,
      showModal: false,
      showModalType: "",
      allInvoices: null,
      selectedInvoiceProduct: null,
      productsDetails: {
        list: null,
        paymentFee: null
      },
      payment_history: null
    };
  },
  components: {
    BaseIconProductAndPlan,
    CardInvoice,
    PaymentHistory,
    BaseModal,
    InvoiceDetails
  },
  methods: {
    handleModal() {
      this.showModal = !this.showModal;
    },
    showDetailSelectedProduct(invoiceProductsDetail, paymentFee) {
      this.productsDetails.list = invoiceProductsDetail;
      this.productsDetails.paymentFee = paymentFee;
      this.showModalType = "DETAIL_PRODUCT";
      this.showModal = true;
    },
    async showPaymentHistory(policyGroupNumber) {
      console.log("HISTORY_DATA", policyGroupNumber);
      if (policyGroupNumber) {
        let stgApiUrl = `https://staging-api.superyou.co.id/api/v1/user-payment-history/2019/${policyGroupNumber}`;
        const getHistory = await fetch(stgApiUrl, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjMyZWFmMDZlOWUwM2IwNGJlZjgwNjc4MGQ3M2UwZDhkMmY1ODBjNDllNTZlNmNhNjBjNjA2MmRjM2Q5MTM3MWQxYzhhNjQ0ODQ4MjkzOWMwIn0.eyJhdWQiOiIyIiwianRpIjoiMzJlYWYwNmU5ZTAzYjA0YmVmODA2NzgwZDczZTBkOGQyZjU4MGM0OWU1NmU2Y2E2MGM2MDYyZGMzZDkxMzcxZDFjOGE2NDQ4NDgyOTM5YzAiLCJpYXQiOjE1ODA5NzU3NjIsIm5iZiI6MTU4MDk3NTc2MiwiZXhwIjoxNjEyNTk4MTYyLCJzdWIiOiI1NzIiLCJzY29wZXMiOltdfQ.LTp0QqgrCdGNKoiKB6Nt6pvp_kEJY9KsbkoU_XO_1dF9OqJGLbJvsI5RElKt54cYrj9lFa4WigLExbxnqXrVWhr8V55RDKwRhiIU__zxcRnwgeMMSHZ94tW5SBja82eW9WbeVgwqRirimK7IhibOXjZ5z4l-vtHuw03HnfCQsFiOtuq41eQ1Bk3iW3XEb0CSyG4MmXpQn5NfmD9nk98awAp0QfgEMHDh0Vm9H8TTgoe7xcfu18_HXdkcsapXYtw12IGbjMkEX_KidF6axxJVSqjboD4AP--K6dYUfTbGXXvonpvTcXZWydgb-HARjCrhpmi2joEbz_QbY3czyJr1YCyzlO8Svj9lAiREWoUBDNFzsr2mfIyXTSJsjkZYQsn861VarBD7LUkxzLEjfeUEvyJ-6elo0GkD8yqMuuCBUq2je-ftwm8EPiMIt5aRc-WlGRd0PgGFuJFx62yBnv9RPsT22K75_SGyoHMd5vv4LXLxF0kMu1_X9dSFSdhNkNupiuGNkNeeXkmNd7LH_zWYDM5r4dllE3g0lHCkcZ2kVRNrgmsK03X9k4mhEmBQqV4vkZBQgP5Zf9BJeIRoUMnylkjaXCQ6nEzsP5nCGiKFieqL7Jlxo8xn7MbtHNQtPQ1Ug-5csHcfbemSQUf9JghCrMn5y68Jxhtx1m2CgyR-Dlk"
          }
        });

        let res = await getHistory.json();
        res.data.forEach(eachPayment => {
          delete eachPayment.id;
          delete eachPayment.status;
        });
        this.showModalType = "PAYMENT_HISTORY";
        this.showModal = true;
        this.payment_history = res.data;
      }
    },
    hideModal() {
      this.showModal = false;
    }
  },
  computed: {
    cardStyles() {
      return {
        header: {
          backgroundColor: "#00aaae",
          color: "#fff"
        }
      };
    }
  },
  created() {
    this.payButton = payNowAction;
    this.allInvoices = invoicesData;
  }
};
</script>

<style lang="scss">
.su_card {
  margin-bottom: 30px;
}
#show-case {
  max-width: 1280px;
  margin: 30px auto 0;
  padding: 0 10px;

  .card_container {
    max-width: 900px;
    margin: 0 auto;
  }
}
</style>
