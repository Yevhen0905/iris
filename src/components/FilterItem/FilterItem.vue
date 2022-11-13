<template>
    <div class="ba-filter">
        <div class="ba-filter__top">
            <label for="blur">
                {{ filterItem.label }}:
            </label>
            <span class="ba-filter__value">
                {{ rangeValue }} 
                {{ filterItem.dimension }}
            </span>    
            <!-- {{ rangeValue }} передаємо сюди значення -->
        </div>
        <!-- /.ba-filter__top -->
        <!-- @change подія а до неї підвязав функцію   -->
        <input 
        @change="onImputChange" 
        
            v-model="rangeValue" 
            class="range" 
            type="range" 
            :id="filterItem.id"
            :name="filterItem.id" 
            min="0" 
            :max="filterItem.max">   
         <!-- rangeValue дозволить задавати дефолтні значення бігунку         -->
         <!-- двокрапка робить атрибут змінною      -->
    </div>
</template>
 
<script>
export default {
    name: 'FilterItem',
    // через пропс приймаємо властивість від FilterItem
    props: {
        filterItem: {                  //описуємо
            type: Object,           // передіємо об'єкт з filtersArr
            required: true         //обов'язкове значення
            // default: N/A
        }
    },
    data() {                     // функція отримання даних бігунка
       return {
           rangeValue: this.filterItem.default             // значення передається з  v-model="rangeValue"
       }
    },
    mounted() {
        this.onImputChange();   // коли мій компонент повністю готовий запусти функцию onImputChange
    },
    methods: {                         // methods пишуться функції, пишемо буде використовуваться коли буде змінюватися импут
       onImputChange() {
        //    console.log(this.rangeValue);
        this.$emit('updateState', this.filterItem.id, this.rangeValue);    // коли змінюєшся зроби еміт updateState, приходят id і значення 
        
       }
    }
        // ['filterName']
}
</script>