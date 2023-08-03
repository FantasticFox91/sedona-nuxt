<script lang="ts">
declare namespace ymaps {
  function ready(init: () => void): Promise;

  class Placemark {
    constructor(position: number[], object: object, settings: object)
  }

  class Promise {
    then(onFulfilled?: Function, onRejected?: Function, onProgress?: Function, ctx?: any): Promise;
  }

  class Map {
    constructor(element: string | any, state: MapState);
    geoObjects: {
      add: (marks: object) => void;
    }
  }

  class MapState {
    center: number[];
    zoom: number;
  }
}

</script>
<script setup lang="ts">
if (typeof(ymaps) !== 'undefined') {
  ymaps.ready(init);
  function init() {
    const mapContainer = document.querySelector('#map') as HTMLDivElement;
    if (mapContainer) {
      mapContainer.innerHTML = '';
    }
    // Создание карты.
    let myMap = new ymaps.Map("map", {
      center: [35.098200, -111.692191],
      zoom: 7
    });

    let myPlacemark = new ymaps.Placemark([35.098200, -111.692191], {}, {
        iconLayout: "default#image",
        iconImageHref: "data:image/svg+xml,%3Csvg width='27' height='27' viewBox='0 0 27 27' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M13.5 27C20.9558 27 27 20.9558 27 13.5C27 6.04416 20.9558 0 13.5 0C6.04416 0 0 6.04416 0 13.5C0 20.9558 6.04416 27 13.5 27Z' fill='white'/%3E%3Cpath d='M13.5 21.9001C18.1392 21.9001 21.9 18.1393 21.9 13.5001C21.9 8.86091 18.1392 5.1001 13.5 5.1001C8.86078 5.1001 5.09998 8.86091 5.09998 13.5001C5.09998 18.1393 8.86078 21.9001 13.5 21.9001Z' fill='%2381B3D3'/%3E%3C/svg%3E",
        iconImageSize: [27, 27],
        iconImageOffset: [-3, 0]
      });

  // Размещение геообъекта на карте.
    myMap.geoObjects.add(myPlacemark);
  }
}

</script>

<template>
  <section class="map">
    <div class="map__container" id="map">
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import '../scss/mixins.scss';
@import '../scss/variables.scss';

.map__image {
  width: 100%;
  object-fit: cover;
  max-height: 350px;
}

.map__container {
  height: 350px;
}
</style>
