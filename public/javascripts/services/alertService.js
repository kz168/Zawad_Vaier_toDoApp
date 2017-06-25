angular.module('App')
.service('AlertServ', [function () {
  
  this.ajaxRequestAlert = function(titletext,text,fun){

    swal({
      title: titletext,
      text: text,
      type: 'warning',
      confirmButtonText: 'Submit',
      showCancelButton: true,
      cancelButtonColor: '#d33',
      showLoaderOnConfirm: true,
      background: 'rgba(0, 0, 0, 0.75)',
      animation: false,
      customClass: 'animated jello',
      preConfirm: function () {
        return new Promise(function (resolve, reject) {
          fun();
        })
      },
      allowOutsideClick: false
    }).then(function () {
      
    }, function (dismiss) {
     
    })
  }

  this.errorAlert = function(text){
    swal({
      type: 'error',
      title: text,
      animation: false,
      customClass: 'animated shake',
      background: 'rgba(0, 0, 0, 0.75)'
    })
  }

  this.successAlert = function(text){
    swal({
      type: 'success',
      title: text,
      animation: false,
      customClass: 'animated pulse',
      background: 'rgba(1,1 ,1, 1)'
    })
  }


}]);