<template>
    <div class="title">
        <slot>
            <span>爆款推荐</span>
        </slot>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .title{
        width: 100%;
        text-align: center;
        font-size: 18px;
        padding: 10px 0;
    }
    .title span{
	    position: relative;
    }
    .title span::after{
        content: "";
        display: block;
        position: absolute;
        right: -0.5rem;
        top: 50%;
        margin-top: -4px;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: #d4c0a7;
        
    }
    .title span::before{
        content: "";
        display: block;
        position: absolute;
        top: 50%;
        left: -0.5rem;
        margin-top: -4px;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: #d4c0a7;
    }
</style>