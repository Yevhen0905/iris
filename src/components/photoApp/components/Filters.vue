<template>
    <div class="ba-filters">
        <FilterItem 
           v-for="(filter, index) in filtersArr"
           :key="index" 
           :filter-item="filter"
           @updateState='updateState'   
           />       
                      <!-- функція еміта(емітінг)  @updateState='updateState' коли відбудиться подія updateState виконай функція нижчу updateState    -->
                    <!-- замість forEach проходимось по масиву, filter це кожен з елементів додаємо в filter-name і ставимо ":" щоб зміна, обов'язково ставимо key з index(порядковий номер в масиві) щоб розпізнава після v-for -->
                    <!--filter-item сюда передаємо об'єкт  -->
        <!-- <FilterItem filter-name="contrast"/>
        <FilterItem filter-name="hue rotate"/>
        <FilterItem filter-name="sepia"/>
        <FilterItem filter-name="saturate"/> -->
         <!-- filter-name  -  atribute, property -->
        <button class="ba-clear" data-clear>Clear all</button>
    </div>
</template>

<script>
import FilterItem from '@/components/FilterItem/FilterItem.vue';
import { computed } from 'vue';

export default {
    name: "Filters",
    components: { 
        FilterItem
    },
    data() {                          // додавання реактивних даних
        return {
            filterState: {              // об'єкт зберігає дані всіх фільтрів 
                blur: 0,
                contrast: 100,
                hue: 0,
                sepia: 0
            },
            filtersArr: [
            {
                label: 'blur',
                dimension: 'px',
                max: 20,         //   <!-- dimension для зміни одиниць вимірювання -->
                id: 'blur',
                default: 0
            },
            {
                label: 'contrast',
                dimension: '%',
                max: 200,
                id: 'contrast',
                default: 100
            }, 
            {
                label: 'hue rotate',       // тому що відрізняється label від id
                dimension: 'deg',
                max: 360,
                id: 'hue',
                default: 0
            }, 
            {
                label: 'sepia',
                dimension: '%',
                max: 100,
                id: 'sepia',
                default: 0
            }]   // щоб був тільки один FilterItem зверху
        }
    },
    methods: {
        updateState(id, value) {
        //    console.log(id, value);
           this.filterState[id] = value;  // повязали дочірній елемент з батьківським, і дочірній елемпень оновляю дані в батьківському
           let html = document.getElementsByTagName('html')[0];
           html.style.cssText= this.htmlStyle;   // перевизначаємо в html значення blur, contrast ...
        }
    },
    computed: { 
        htmlStyle() {
            return `--blur:${this.filterState.blur}px; --contrast:${this.filterState.contrast}%; --hue:${this.filterState.hue}deg; --sepia:${this.filterState.sepia}%; --saturate:${this.filterState.saturate}%;`;
        }
    }
}
</script>