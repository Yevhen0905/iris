<template>
    <div class="controls">
        <label for="spacing">Border:</label>
        <input id="spacing" class="range" type="range" name="spacing" min="0" max="50" value="10">

        <label for="base">Base Color</label>
        <input id="base" type="color" name="base" value="#ffc600">
    </div>
</template>

<script>
export default {
   name: 'Controls'
}
</script>