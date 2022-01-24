<template>
  <div>
    <carousel-filtering :items="items" :invert="true"></carousel-filtering>

    <div class="px-3 pt-10">

      <!-- Standard -->
      <div class="slide" v-if="subItem == 0">
        <item-slide-menu name="Edad:" :min="18" :max="100" :normal="false">
          <Slider v-model="age" :classes="{
             base: 'w-full h-2 relative z-1 bg-gray-200 rounded',
             touchArea: 'h-5 w-6 bg-white rounded-md border border-gray-400 touchArea',
          }" class="slider-red" :min="18" :max="100" />
        </item-slide-menu>
        <item-slide-menu class="mt-3" name="Altura:" min="100*" max="230**">
          <Slider v-model="height" :classes="{
             base: 'w-full h-2 relative z-1 bg-gray-200 rounded',
             touchArea: 'h-5 w-6 bg-white rounded-md border border-gray-400 touchArea',
          }" class="slider-red" :min="100" :max="230" />
        </item-slide-menu>
      </div>
      <!-- End Standard -->

      <!-- Advanced -->
      <div class="slide" v-if="subItem == 1">
        <item-slide-menu name="Peso:" min="40**" max="120**" :normal="false">
          <Slider v-model="weight" :classes="{
             base: 'w-full h-2 relative z-1 bg-gray-200 rounded',
             touchArea: 'h-5 w-6 bg-white rounded-md border border-gray-400 touchArea',
          }" class="slider-red" :min="40" :max="120" />
        </item-slide-menu>

        <item-slide-menu class="mt-3" name="Estructura corporal:" :normal="true">
          <div class="grid grid-cols-1 md:grid-cols-2 text-gray-500">
            <div>
              <label class="item-checkbox mb-2 font-normal">
                  {{  structureCor.one.name }}
                  <input type="checkbox" :checked="structureCor.one.status" v-model="structureCor.one.status">
                  <span class="checkmark"></span>
              </label>
               <label class="item-checkbox mb-2 font-normal">
                  {{  structureCor.two.name }}
                  <input type="checkbox" :checked="structureCor.two.status" v-model="structureCor.two.status">
                  <span class="checkmark"></span>
              </label>
               <label class="item-checkbox mb-2 font-normal">
                  {{  structureCor.three.name }}
                  <input type="checkbox" :checked="structureCor.three.status" v-model="structureCor.three.status">
                  <span class="checkmark"></span>
              </label>
            </div>
            <div>
               <label class="item-checkbox mb-2 font-normal">
                  {{  structureCor.four.name }}
                  <input type="checkbox" :checked="structureCor.four.status" v-model="structureCor.four.status">
                  <span class="checkmark"></span>
              </label>
               <label class="item-checkbox mb-2 font-normal">
                  {{  structureCor.five.name }}
                  <input type="checkbox" :checked="structureCor.five.status" v-model="structureCor.five.status">
                  <span class="checkmark"></span>
              </label>
               <label class="item-checkbox mb-2 font-normal">
                  {{  structureCor.six.name }}
                  <input type="checkbox" :checked="structureCor.six.status" v-model="structureCor.six.status">
                  <span class="checkmark"></span>
              </label>
            </div>
          </div>
        </item-slide-menu>

        <item-slide-menu class="mt-3" name="Cabello" :normal="true">
          <div class="grid grid-cols-1 xl:grid-cols-2 gap-5 text-gray-500">
            <div>
               <Multiselect
                v-model="cabello"
                mode="tags"
                :options="cabellos"
                :native="false"
                class="multiple-glooball8"
                placeholder="Color del cabello"
                :noOptionsText="empty"
              />
            </div>
             <div>
              <Multiselect
                v-model="formaCabello"
                mode="tags"
                :options="formaCabellos"
                :native="false"
                class="multiple-glooball8"
                placeholder="Forma del cabello"
                :noOptionsText="empty"
              />
            </div>
          </div>
           <div class="grid grid-cols-1 xl:grid-cols-2 gap-5 text-gray-500 mt-5">
            <div>
               <Multiselect
                v-model="estiloCabello"
                mode="tags"
                :options="estiloCabellos"
                :native="false"
                class="multiple-glooball8"
                placeholder="Estilo del cabello"
                :noOptionsText="empty"
              />
            </div>
             <div>
              <Multiselect
                v-model="densidadCabello"
                mode="tags"
                :options="densidadCabellos"
                :native="false"
                class="multiple-glooball8"
                placeholder="Densidad del cabello"
                :noOptionsText="empty"
              />
            </div>
          </div>
          
        </item-slide-menu>



        
        <item-slide-menu class="mt-3" name="Ojos:" :normal="true">
          <div class="grid grid-cols-1 md:grid-cols-2 text-gray-500">
            <div>
               <label class="item-checkbox mb-2 font-normal">
                  {{  eyes.one.name }}
                  <input type="checkbox" :checked="eyes.one.status" v-model="eyes.one.status">
                  <span class="checkmark"></span>
              </label>
               <label class="item-checkbox mb-2 font-normal">
                  {{  eyes.two.name }}
                  <input type="checkbox" :checked="eyes.two.status" v-model="eyes.two.status">
                  <span class="checkmark"></span>
              </label>
               <label class="item-checkbox mb-2 font-normal">
                  {{  eyes.three.name }}
                  <input type="checkbox" :checked="eyes.three.status" v-model="eyes.three.status">
                  <span class="checkmark"></span>
              </label>
            </div>
            <div>
             <label class="item-checkbox mb-2 font-normal">
                  {{  eyes.four.name }}
                  <input type="checkbox" :checked="eyes.four.status" v-model="eyes.four.status">
                  <span class="checkmark"></span>
              </label>
               <label class="item-checkbox mb-2 font-normal">
                  {{  eyes.five.name }}
                  <input type="checkbox" :checked="eyes.five.status" v-model="eyes.five.status">
                  <span class="checkmark"></span>
              </label>
               <label class="item-checkbox mb-2 font-normal">
                  {{  eyes.six.name }}
                  <input type="checkbox" :checked="eyes.six.status" v-model="eyes.six.status">
                  <span class="checkmark"></span>
              </label>

            </div>
          </div>
        </item-slide-menu>


      </div>
      <!-- End Advanced -->

      <!-- Origin / Etnia -->
      <div class="slide" v-if="subItem == 2">
        <item-slide-menu class="mt-3" name="Origen:" min="100*" max="230**" :normal="true">
          <div class="grid grid-cols-1 md:grid-cols-2 text-gray-500">
            <div>
              <label class="item-checkbox mb-2 font-normal">
                  {{  origins.one.name }}
                  <input type="checkbox" :checked="origins.one.status" v-model="origins.one.status">
                  <span class="checkmark"></span>
              </label>
               <label class="item-checkbox mb-2 font-normal">
                  {{  origins.two.name }}
                  <input type="checkbox" :checked="origins.two.status" v-model="origins.two.status">
                  <span class="checkmark"></span>
              </label>
               <label class="item-checkbox mb-2 font-normal">
                  {{  origins.three.name }}
                  <input type="checkbox" :checked="origins.three.status" v-model="origins.three.status">
                  <span class="checkmark"></span>
              </label>
               <label class="item-checkbox mb-2 font-normal">
                  {{  origins.four.name }}
                  <input type="checkbox" :checked="origins.four.status" v-model="origins.four.status">
                  <span class="checkmark"></span>
              </label>
            </div>
            <div>
              <label class="item-checkbox mb-2 font-normal">
                  {{  origins.five.name }}
                  <input type="checkbox" :checked="origins.five.status" v-model="origins.five.status">
                  <span class="checkmark"></span>
              </label>
               <label class="item-checkbox mb-2 font-normal">
                  {{  origins.six.name }}
                  <input type="checkbox" :checked="origins.six.status" v-model="origins.six.status">
                  <span class="checkmark"></span>
              </label>
               <label class="item-checkbox mb-2 font-normal">
                  {{  origins.seven.name }}
                  <input type="checkbox" :checked="origins.seven.status" v-model="origins.seven.status">
                  <span class="checkmark"></span>
              </label>
               <label class="item-checkbox mb-2 font-normal">
                  {{  origins.eight.name }}
                  <input type="checkbox" :checked="origins.eight.status" v-model="origins.eight.status">
                  <span class="checkmark"></span>
              </label>
            </div>
          </div>
        </item-slide-menu>
        <item-slide-menu class="mt-3" name="Color de piel:" min="100*" max="230**" :normal="true">
          <div class="grid grid-cols-1 md:grid-cols-2 text-gray-500">
            <div>
               <label class="item-checkbox mb-2 font-normal">
                  {{  pielColor.one.name }}
                  <input type="checkbox" :checked="pielColor.one.status" v-model="pielColor.one.status">
                  <span class="checkmark"></span>
              </label>
               <label class="item-checkbox mb-2 font-normal">
                  {{  pielColor.two.name }}
                  <input type="checkbox" :checked="pielColor.two.status" v-model="pielColor.two.status">
                  <span class="checkmark"></span>
              </label>
               <label class="item-checkbox mb-2 font-normal">
                  {{  pielColor.three.name }}
                  <input type="checkbox" :checked="pielColor.three.status" v-model="pielColor.three.status">
                  <span class="checkmark"></span>
              </label>
            </div>
            <div>
              <label class="item-checkbox mb-2 font-normal">
                  {{  pielColor.four.name }}
                  <input type="checkbox" :checked="pielColor.four.status" v-model="pielColor.four.status">
                  <span class="checkmark"></span>
              </label>
               <label class="item-checkbox mb-2 font-normal">
                  {{  pielColor.five.name }}
                  <input type="checkbox" :checked="pielColor.five.status" v-model="pielColor.five.status">
                  <span class="checkmark"></span>
              </label>
            </div>
          </div>
        </item-slide-menu>
      </div>
      <!-- End Origin / Etnia -->

      <!-- Discapacities -->
      <div class="slide" v-if="subItem == 3">
        <item-slide-menu class="mt-3" name="Discapacidad:" :normal="true">
          <div class="grid grid-cols-1 md:grid-cols-2 text-gray-500">
            <div>
               <label  v-for="(i, index) in 7" v-bind:key="index" class="item-checkbox mb-2 font-normal">
                  {{  discapacities[i].name }}
                  <input type="checkbox" :checked="discapacities[i].status" v-model="discapacities[i].status">
                  <span class="checkmark"></span>
              </label>
            </div>
            <div>
              <label  v-for="(i, index) in 7" v-bind:key="index" class="item-checkbox mb-2 font-normal">
                  {{  discapacities[i + 7].name }}
                  <input type="checkbox" :checked="discapacities[i + 7].status" v-model="discapacities[i + 7].status">
                  <span class="checkmark"></span>
              </label>
            </div>
          </div>
        </item-slide-menu>

        <item-slide-menu class="mt-3" name="Prótesis:" :normal="true">
          <div class="grid grid-cols-1 md:grid-cols-2 text-gray-500">
            <div>
             <label  v-for="(i, index) in 5" v-bind:key="index" class="item-checkbox mb-2 font-normal">
                  {{  protesis[i].name }}
                  <input type="checkbox" :checked="protesis[i].status" v-model="protesis[i].status">
                  <span class="checkmark"></span>
              </label>
            </div>
            <div>
             <label  v-for="(i, index) in 5" v-bind:key="index" class="item-checkbox mb-2 font-normal">
                  {{  protesis[i + 5].name }}
                  <input type="checkbox" :checked="protesis[i + 5].status" v-model="protesis[i + 5].status">
                  <span class="checkmark"></span>
              </label>
            </div>
          </div>
        </item-slide-menu>

        <item-slide-menu class="mt-3" name="Enfermedad:" :normal="true">
          <div class="grid grid-cols-1 md:grid-cols-2 text-gray-500">
            <div>
              <label  v-for="(i, index) in 3" v-bind:key="index" class="item-checkbox mb-2 font-normal">
                  {{  enfermedades[i].name }}
                  <input type="checkbox" :checked="enfermedades[i].status" v-model="enfermedades[i].status">
                  <span class="checkmark"></span>
              </label>
            </div>
            <div>
               <label  v-for="(i, index) in 3" v-bind:key="index" class="item-checkbox mb-2 font-normal">
                  {{  enfermedades[i + 3].name }}
                  <input type="checkbox" :checked="enfermedades[i + 3].status" v-model="enfermedades[i + 3].status">
                  <span class="checkmark"></span>
              </label>
            </div>
          </div>
        </item-slide-menu>

        <item-slide-menu class="mt-3" name="Alergia:" :normal="true">
          <div class="grid grid-cols-1 md:grid-cols-2 text-gray-500">

            <div>
              <label  v-for="(i, index) in 6" v-bind:key="index" class="item-checkbox mb-2 font-normal">
                  {{  alergia[i].name }}
                  <input type="checkbox" :checked="alergia[i].status" v-model="alergia[i].status">
                  <span class="checkmark"></span>
              </label>
            </div>
             <div>
              <label  v-for="(i, index) in 5" v-bind:key="index" class="item-checkbox mb-2 font-normal">
                  {{  alergia[i + 6].name }}
                  <input type="checkbox" :checked="alergia[i + 6].status" v-model="alergia[i + 6].status">
                  <span class="checkmark"></span>
              </label>
            </div>

          </div>
        </item-slide-menu>
      </div>
      <!-- End Discapacities -->



    </div>




  </div>
</template>
<script>
  import Slider from '@vueform/slider/dist/slider.vue2.js'
  import ItemSlideMenu from '../../Helpers/item-slide-menu.vue'
  import Multiselect from '@vueform/multiselect/dist/multiselect.vue2.js'
  import CarouselFiltering from '../../Helpers/carousel-filtering.vue'
  import ItemSelect from '../../Helpers/item-select.vue'
  import {
    mapState
  } from 'vuex'
  export default {
    name: 'filter-fisico',
    components: {
      Slider,
      ItemSlideMenu,
      CarouselFiltering,
      Multiselect,
      ItemSelect
    },
    data: () => ({
      // Standard Component
      age: [25, 50],
      height: [140, 190], // 165 - 180 [min:100 - max:230]
      // Advanced Component
      // --> Peso
      weight: [50, 90],
      // --> Esctrutura corporal
      structureCor: {
        name: 'Estructura corporal',
        one: {
          name: 'Sin importancia',
          status: true
        },
        two: {
          name: 'Delgada',
          status: false
        },
        three: {
          name: 'Atlética',
          span: '(Músculos definidos)',
          status: false
        },
        four: {
          name: 'Muy delgada',
          status: false
        },
        five: {
          name: 'En forma',
          status: false
        },
        six: {
          name: 'Sobrepeso',
          status: false
        },
      },
      // --> Ojos
      eyes: {
        name: 'eyes',
        one: {
          name: 'Sin importancia',
          status: true
        },
        two: {
          name: 'Verdes',
          status: false
        },
        three: {
          name: 'Marrones',
          status: false
        },
        four: {
          name: 'Azules',
          status: false
        },
        five: {
          name: 'Grises',
          status: false
        },
        six: {
          name: 'Negros',
          status: false
        },
      },
      // Origin / Etnia Component
      origins: {
        one: {
          name: 'Sin importancia',
          status: true
        },
        two: {
          name: 'Africano',
          status: false
        },
        three: {
          name: 'Árabe',
          status: false
        },
        four: {
          name: 'Latinoamericano',
          status: false
        },
        five: {
          name: 'Europeo',
          status: false
        },
        six: {
          name: 'Asiático',
          status: false
        },
        seven: {
          name: 'Indio',
          status: false
        },
        eight: {
          name: 'Otro',
          status: false
        }
      },
      pielColor: {
        one: {
          name: 'Sin importancia',
          status: true
        },
        two: {
          name: 'Oscura',
          status: false
        },
        three: {
          name: 'Otras',
          status: false
        },
        four: {
          name: 'Blanca',
          status: false
        },
        five: {
          name: 'Negra',
          status: false
        }

      },
      discapacities: {
        name: 'discapacities',
        1: {
          name: 'Sin importancia',
          status: true,
        },
        2: {
          name: 'Dedo/s',
          status: false,
        },
        3: {
          name: 'Brazo/s',
          status: false,
        },
        4: {
          name: 'Pierna/s',
          status: false,
        },
        5: {
          name: 'Visual',
          status: false,
        },
        6: {
          name: 'Visual',
          status: false,
        },
        7: {
          name: 'Sexual',
          status: false
        },
        8: {
          name: 'Ninguna discapacidad',
          status: false
        },
        9: {
          name: 'Mano/s',
          status: false
        },
        10: {
          name: 'Pie/s',
          status: false
        },
        11: {
          name: 'Movilidad reducida',
          status: false
        },
        12: {
          name: 'Auditiva',
          status: false
        },
        13: {
          name: 'Paraplejia',
          status: false
        },
        14: {
          name: 'Otras discapacidades',
          status: false
        }
      },
      protesis: {
        name: 'protesis',
        1: {
          name: 'Sin importancia',
          status: true
        },
        2: {
          name: 'Mano/s',
          status: false
        },
        3: {
          name: 'Pie/s',
          status: false
        },
        4: {
          name: 'Cadera',
          status: false,
        },
        5: {
          name: 'Dental',
          status: false
        },
        6: {
          name: 'Ninguna prótesis',
          status: false
        },
        7: {
          name: 'Brazo/s',
          status: false
        },
        8: {
          name: 'Pierna/s',
          status: false
        },
        9: {
          name: 'Ocular',
          status: false
        },
        10: {
          name: 'Otras prótesis',
          status: false
        }
      },
      enfermedades: {
        name: 'enfermedades',
        1: {
          name: 'Sin importancia',
          status: true
        },
        2: {
          name: 'Cardiovascular',
          status: false
        },
        3: {
          name: 'Hepática',
          status: false
        },
        4: {
          name: 'Ninguna enfermedad',
          status: false
        },
        5: {
          name: 'Neurológica',
          status: false
        },
        6: {
          name: 'Otras enfermedades',
          status: false
        }
      },
      alergia: {
        name: 'alergia',
        1: {
          name: 'Sin importancia',
          status: true
        },
        2: {
          name: 'Alergia estacional',
          status: false
        },
        3: {
          name: 'Alergia a las mascotas',
          status: false
        },
        4: {
          name: 'Alergia alimentaria',
          status: false
        },
        5: {
          name: 'Alergia al sol',
          status: false
        },
        6: {
          name: 'Otras alergias',
          status: false
        },
        7: {
          name: 'Ninguna alergia',
          status: false
        },
        8: {
          name: 'Alergia de interior',
          status: false
        },
        9: {
          name: 'Alergias cutáneas',
          status: false
        },
        10: {
          name: 'Alergia al polen',
          status: false
        },
        11: {
          name: 'Conjuntivitis alérgica',
          status: false
        }
      },
      // Multiselects
      cabellos: [
        'Sin importancia', 'Oscuro', 'Claro', 'Canoso'
      ],
      cabello: [],
      formaCabello: [],
      formaCabellos: [
        'Sin importancia', 'Liso', 'Ondulado', 'Rizado'
      ],
        estiloCabello: [],
      estiloCabellos: [
        'Sin importancia', 'Al cero', 'Corto', 'Media melena', 'Largo'
      ],
        densidadCabello: [],
      densidadCabellos: [
        'Sin importancia', 'Alopecia', 'Poca densidad', 'Densidad media', 'Mucha densidad'
      ],
      // Helpers
      empty: 'Lista vacía'
    }),
    computed: {
      ...mapState({
        items: state => state.filters.carouselItemsFisic,
        subItem: state => state.filters.subItem
      })
    },
    methods: {

    },

  }
</script>
<style scoped lang="scss">



</style>