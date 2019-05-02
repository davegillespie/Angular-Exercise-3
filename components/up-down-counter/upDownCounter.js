function upDownCounter() {
  function controller($scope) {
   const ctrl = this;
   $scope.count = 0;

   ctrl.addCount = () => {
     $scope.count += 10;
    //  this.count+=10
   },
   ctrl.subCount = () => {
     $scope.count -= 10;
    //  this.count-=10
   }
  }
  return {
    template: `
    <section>
      <div class="box">
        <button ng-click="$ctrl.addCount()">Up</button>
         <input value="{{count}}" expand-on-focus/>
        <button ng-click="$ctrl.subCount()">Down</button>
        Click inside the input to expand it
        
      </div>
    </section>
    
     `, // or use templateUrl
  controller: controller
  }
}


  
  angular
  .module('MyApp')
  .component('upDownCounter', upDownCounter());