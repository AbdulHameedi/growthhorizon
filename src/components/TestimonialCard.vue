<script>
import { defineComponent } from 'vue';

export default defineComponent({
    props: [
        'name',
        'job',
        'testimony'
    ]
})
</script>
<template>
    <div class="bg-white shadow-xl px-4 py-7 rounded-md flex flex-col justify-between gap-4">
        <div class="text-[#28B79A] flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24"><path fill="currentColor" d="m12 18.275l-4.15 2.5q-.275.175-.575.15t-.525-.2q-.225-.175-.35-.438t-.05-.587l1.1-4.725L3.775 11.8q-.25-.225-.312-.513t.037-.562q.1-.275.3-.45t.55-.225l4.85-.425l1.875-4.45q.125-.3.388-.45t.537-.15q.275 0 .537.15t.388.45l1.875 4.45l4.85.425q.35.05.55.225t.3.45q.1.275.038.563t-.313.512l-3.675 3.175l1.1 4.725q.075.325-.05.588t-.35.437q-.225.175-.525.2t-.575-.15l-4.15-2.5Z"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24"><path fill="currentColor" d="m12 18.275l-4.15 2.5q-.275.175-.575.15t-.525-.2q-.225-.175-.35-.438t-.05-.587l1.1-4.725L3.775 11.8q-.25-.225-.312-.513t.037-.562q.1-.275.3-.45t.55-.225l4.85-.425l1.875-4.45q.125-.3.388-.45t.537-.15q.275 0 .537.15t.388.45l1.875 4.45l4.85.425q.35.05.55.225t.3.45q.1.275.038.563t-.313.512l-3.675 3.175l1.1 4.725q.075.325-.05.588t-.35.437q-.225.175-.525.2t-.575-.15l-4.15-2.5Z"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24"><path fill="currentColor" d="m12 18.275l-4.15 2.5q-.275.175-.575.15t-.525-.2q-.225-.175-.35-.438t-.05-.587l1.1-4.725L3.775 11.8q-.25-.225-.312-.513t.037-.562q.1-.275.3-.45t.55-.225l4.85-.425l1.875-4.45q.125-.3.388-.45t.537-.15q.275 0 .537.15t.388.45l1.875 4.45l4.85.425q.35.05.55.225t.3.45q.1.275.038.563t-.313.512l-3.675 3.175l1.1 4.725q.075.325-.05.588t-.35.437q-.225.175-.525.2t-.575-.15l-4.15-2.5Z"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24"><path fill="currentColor" d="m12 18.275l-4.15 2.5q-.275.175-.575.15t-.525-.2q-.225-.175-.35-.438t-.05-.587l1.1-4.725L3.775 11.8q-.25-.225-.312-.513t.037-.562q.1-.275.3-.45t.55-.225l4.85-.425l1.875-4.45q.125-.3.388-.45t.537-.15q.275 0 .537.15t.388.45l1.875 4.45l4.85.425q.35.05.55.225t.3.45q.1.275.038.563t-.313.512l-3.675 3.175l1.1 4.725q.075.325-.05.588t-.35.437q-.225.175-.525.2t-.575-.15l-4.15-2.5Z"/></svg>
        </div>
        <p class="text-[#0D0D3F]">{{ testimony }}</p>
        <div class="flex justify-between items-center visit-container">
            <div class="flex items-center gap-2">
                <div class="p-2 text-white bg-[#28B79A] rounded-[50%]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12 5.9a2.1 2.1 0 1 1 0 4.2a2.1 2.1 0 0 1 0-4.2m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4s4-1.79 4-4s-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z"/></svg>
                </div>
                <div>
                    <p class="text-lg font-semibold">{{ name }}</p>
                    <p class="text-sm">{{ job }}</p>
                </div>
            </div>
            <div class="visit">
                <a href="" class="text-[#0D0D3F] font-semibold">VISIT</a>
            </div>
        </div>
    </div>
</template>
<style scoped>
    @media screen and (min-width: 468px){
        .visit{
            display: none;
            transition: all 0.3s;
        }

    }
    .visit-container:hover .visit{
        display: flex;
    }
</style>