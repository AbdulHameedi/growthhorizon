<script>
import { defineComponent } from 'vue';

export default defineComponent({
})
</script>
<template>
    <section class="mt-[7rem]">
        <header class="text-[#0D0D3F] p-14 text-5xl border-b max-[768px]:px-4">
            <p>Settings</p>
        </header>
        <main class="py-10 px-14 max-[767px]:px-4 min-[768px]:w-[80%] flex flex-col gap-8">
            <div class="rounded-md border text-gray-600">
                <div class="p-5 max-[425px]:p-3">
                    <p class="text-xl font-semibold text-[#0D0D3F] mb-2">Change Password</p>
                    <p class="mb-2">Security is important to us, and we recommend that you set a personalized password</p>
                    <div class="flex w-full border rounded-md mb-4">
                        <p class="w-fit bg-gray-100 p-2 border-r max-[455px]:px-1 max-[455px]:w-[55%] min-[426px]:w-[30%]">Old password</p>
                        <input type="password" class="outline-none px-4 max-[455px]:w-[45%] min-[426px]:w-[70%]" />
                    </div>
                    <div class="flex w-full border rounded-md mb-4">
                        <p class="w-fit bg-gray-100 p-2 border-r max-[455px]:px-1 max-[455px]:w-[55%] min-[426px]:w-[30%]">New password</p>
                        <input type="password" class="outline-none px-4 max-[455px]:w-[45%] min-[426px]:w-[70%]" />
                    </div>
                    <div class="flex w-full border rounded-md">
                        <p class="w-fit bg-gray-100 p-2 border-r max-[455px]:px-1 max-[455px]:w-[55%] min-[426px]:w-[30%]">Confirm password</p>
                        <input type="password" class="outline-none px-4 max-[455px]:w-[45%] min-[426px]:w-[70%]" />
                    </div>
                </div>
                <div class="flex justify-end bg-gray-100 w-full p-3 border-t max-[425px]:p-2">
                    <button class="bg-[#0D0D3F] hover:bg-[#1e1e5a] p-1 px-3 rounded-md text-white">Save</button>
                </div>
            </div>
            <!-- delete account -->
            <div class="rounded-md border border-red-300 text-gray-600">
                <div class="p-5 max-[425px]:p-3">
                    <p class="text-xl font-semibold text-[#0D0D3F] mb-2">Delete Account</p>
                    <p class="mb-2">The account will be permanently deleted, including its earnings. This action is irreversible and can not be undone</p>
                    <div class="flex w-full border border-red-100 rounded-md">
                        <p class="w-fit bg-red-100 p-2 border-r border-red-100 max-[455px]:px-1 max-[455px]:w-[55%] min-[426px]:w-[30%]">Confirm password</p>
                        <input type="password" class="outline-none px-4 max-[455px]:w-[45%] min-[426px]:w-[70%]"/>
                    </div>
                </div>
                <div class="flex justify-end bg-red-100 w-full p-3 max-[425px]:p-2">
                    <button class="bg-red-500 hover:bg-red-400 p-1 px-3 rounded-md text-white">Delete</button>
                </div>
            </div>
        </main>
    </section>
</template>