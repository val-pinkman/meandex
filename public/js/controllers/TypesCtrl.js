angular.module('TypesCtrl', []).controller('TypesController', function($scope, $location, $stateParams, Pokemon, $q, $document) {

  var types = {};

  for (i=1; i <= 18; i++) {
    Pokemon.getType(i).success(function(data) {
      //console.log(data);
      types[data.name.toLowerCase()] = data;
      console.log(types);
    });
  };

  $scope.triggerBouncyNav = function($bool) {
    //check if no nav animation is ongoing
    if( !is_bouncy_nav_animating) {
      is_bouncy_nav_animating = true;
      
      //toggle list items animation
      $('.cd-bouncy-nav-modal').toggleClass('fade-in', $bool).toggleClass('fade-out', !$bool).find('li:last-child').one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(){
        $('.cd-bouncy-nav-modal').toggleClass('is-visible', $bool);
        if(!$bool) $('.cd-bouncy-nav-modal').removeClass('fade-out');
        is_bouncy_nav_animating = false;
      });
      
      //check if CSS animations are supported... 
      if($('.cd-bouncy-nav-trigger').parents('.no-csstransitions').length > 0 ) {
        $('.cd-bouncy-nav-modal').toggleClass('is-visible', $bool);
        is_bouncy_nav_animating = false;
      }
    }
  };

  var is_bouncy_nav_animating = false;
  $scope.triggerBouncyNav(true);

});