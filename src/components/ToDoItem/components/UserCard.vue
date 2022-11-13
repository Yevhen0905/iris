<template>
    <div>

        <img class="user_image" :src="userPhoto">
        <p>{{ username }}</p>
        <input @change="updateNameInParent" v-model="username" type="text" placeholder="add name"> 
        <span v-show="isError"  class="error">{{ errorText }}</span>                        
        <!-- вивід помилки -->
        <Button/>
    </div>
</template>

<script>
import Button from '@/components/Button/Button.vue';
export default {
    name: "UserCard",
    components: { Button },
    data() {
        return {
            username: "",
            isError: false,
            // errorText: ''          // текст буде писатися
        };
    },
    props: {
        userPhoto: {
            type: String,
            default: ""
        }
    },
    methods: {
        updateNameInParent() {
            this.$emit("getUserName", this.username);
        }
    },
    watch: {
        username(val, oldVal) {
            // console.log(val, oldVal);
            if (val != oldVal) {
                // console.log(val.length);
                if (val.length <= 3) { // перевірка скільки букв
                    this.isError = true;
                    // this.errorText = 'Too short username'     
                }
                else if (val.length >= 10) {
                    this.isError = true;
                    // this.errorText = 'Too long username'        
                }
                else {
                    this.isError = false;
                }
            }
        }
    },
    computed: {
        errorText() {
            let text = "";
            if (this.username.length <= 3) {
                text = "Too short username";
            }
            else if (this.username.length >= 10) {
                text = "Too long username";
            }
            else {
                text = "";
            }
            return text;
        }
    },
 
}
</script>

<style scoped lang="scss" src="./style.scss">

</style>