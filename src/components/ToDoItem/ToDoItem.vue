<template>
    <div>
        <UserCard 
        :user-photo='userPhoto'
        />
        <!-- <p class="reply">{{ greetings }}</p> -->
        
        <!-- <input v-model="userage" type="text" placeholder="user age" /> -->
        <!-- <ul>
            <input v-model="newTodo" type="text" placeholder="add new item...">
            <button @click="addToDo">add +</button>
            <li class="todo_item" v-for="todo in todoItems">
                <p>{{ todo.name }}</p>
                <p v-if="todo.date">{{ todo.date }}</p>
                <p v-else>N/A</p>
                <p>{{ todo.isdone }}</p>
                <label>
                    Mark as done
                    <input v-model="todo.isdone" type="checkbox">
                </label>
            </li>
        </ul>
        <h2>Total {{ totalTodo }} stuffs</h2>
        <h2>you have to finish {{ unfinishedTasks }} tasks</h2> -->

        
    </div>
</template>

<script>
import UserCard from './components/UserCard.vue';

export default {
    name: "ToDoItem",
    components: { UserCard },
    // beforeCreate() {                                   //життєві цикли
    //     console.log('beforeCreate');
    // },
    // created() {
    //     console.log('created');
    // },
    // beforeMount() {
    //     console.log('beforeMount');
    // },
    // mounted() {
    //     console.log('mounted');
    // }
    data() {
        return {
            username: "",
            userage: "",
            // usernam: '',
            userPhoto: 'https://www.tradeinn.com/f/13795/137954201_2/funko-pop-transformers-optimus-prime.jpg',
            todoItems: [
                {
                    name: "drink beer",
                    date: "03-02-2002",
                    isdone: false
                },
                {
                    name: "drink milk",
                    date: "03-02-2002",
                    isdone: false
                },
                {
                    name: "drink water",
                    date: "03-02-2002",
                    isdone: true
                },
                {
                    name: "drink juice",
                    date: "03-02-2002",
                    isdone: true
                }
            ],
            newTodo: "", // створюєтся новий обєкт
        };
    },
    methods: {
        addToDo() {
            const todoObj = {
                name: this.newTodo,
                isdone: false
            };
            this.todoItems.push(todoObj);
            this.newTodo = "";
        }
    },
    computed: {
        totalTodo() {
            return this.todoItems.length;
        },
        unfinishedTasks() {
            return this.todoItems.filter(el => !el.isdone).length;
        },
        greetings() {
            return `${this.username}`
            // return `Hello ${this.username}, age ${this.userage}`;
        }
    },
    
}
</script>

<style lang="scss" src="./style.scss">

</style>