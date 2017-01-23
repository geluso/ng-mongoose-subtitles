angular.module('App')
.component('homeComp', {
  templateUrl: 'app/containers/home/home.html',
  controller: HomeCompCtrl,
  controllerAs: 'homeComp'
});

function HomeCompCtrl() {
  var homeComp = this;

  homeComp.scripts = [
    {title: "original", _id: "sfdfksdjkfjsdd"},
    {title: "WDI 11", _id: "zzczxcvxzcxxczxx"},
  ];
}

HomeCompCtrl.$inject = [];
