import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="toast"
export default class extends Controller {
  connect() {
  }
  notify(){
    const toastTrigger = document.getElementById('liveToastBtn')
    const toastLiveExample = document.getElementById('liveToast')
    const toast = new bootstrap.Toast(toastLiveExample)
    toast.show()
  }
}
