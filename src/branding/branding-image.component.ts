/// <reference path="../config/config-service.ts"/>

namespace Branding {

  export class BrandingImageController {

    class: string;
    src: string;
    alt: string;

    constructor(private $rootScope: ng.IRootScopeService) {
      'ngInject';
    }

    $onInit() {
      this.$rootScope.$on(Config.EVENT_LOADED, (event, configService: Config.ConfigService) => {
        this.src = configService.getBrandingValue(this.src);
        this.alt = configService.getBrandingValue(this.alt);
      });
    }
    
  }

  export const brandingImageComponent: angular.IComponentOptions = {
    bindings: {
      class: '@',
      src: '@',
      alt: '@'
    },
    template: '<img class="{{$ctrl.class}}" src="{{$ctrl.src}}" alt="{{$ctrl.alt}}"/>',
    controller: BrandingImageController
  };

}
