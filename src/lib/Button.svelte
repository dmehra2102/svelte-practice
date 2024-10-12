<script></script>

<button on:click>
    {#if $$slots["icon-div"]}
        <slot name="icon-div" />
    {/if}
    <slot>Fallback Text</slot>
</button>

<style>
    button{
        font-size: larger;
        font-weight: 700;
        padding: 10px 20px;
        border : 1px solid whitesmoke;
        background-color: red;
        display: flex;
        gap: 6px;
        margin: 10px;
        border-radius: 12px;
    }
</style>