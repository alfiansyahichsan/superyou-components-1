<template>
  <div class="e-modals">
    <div class="modal-background">
      <div class="pre-container">

        <!-- ASK LOGIN -->
        <div class="modal-dialog small">
          <div class="modal-close">
            <a href="javascript:void(0)" class="js_scroll_true js_close_modal"><span class="close-dark"></span></a>
          </div>
          <div class="modal-confirm">
            <p class="head">Kode Verifikasi</p>
            <p class="description">Kami telah mengirimkan kode verifikasi ke nomor 0877 1234 567. Mohon masukan kode tersebut dibawah ini sebelum melanjutkan pembayaran</p>
            <br />
          </div>
          <div class="modal-content">
            <base-input-verification v-model="code"></base-input-verification>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import BaseInputVerification from "../atoms/BaseInputVerification";
export default {
  data() {
    return {
      code: ""
    }
  },
  components: {
    BaseInputVerification
  },
}
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.e-modals {
  display: block;
  border: 1px solid black;
	.modal-dialog.small {
		max-width: 370px;
	}
	.modal-dialog {
		.modal-close {
      padding: 14px;
      margin-bottom: 0;
			a {
				height: 16px;
				width: 16px;
				span {
					height: 16px;
					width: 16px;
				}
			}
		}
		.modal-confirm {
			text-align: center;
			padding: 5px !important;
			margin: 0 15px !important;
			.head {
				font-weight: bold;
				margin-bottom: 7px;
			}
			.description {
				font-size: 12px;
				color: #718798;
			}
		}
		.footer {
			margin-top: -10px;
			.btn {
				min-width: 16.4rem;
				font-size: 1.3rem;
				padding: 1.2rem 2rem;
      }
      .btn-outline {
        border: 1px solid #0d294a;
        color: #0d294a !important;
        background-color: white;
      }
		}
	}
	.btn-align {
		padding: 0 0 20px 0;
	}
}
</style>