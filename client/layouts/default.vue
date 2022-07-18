<template>
    <div>
        <div class="container">
            <header class="d-flex justify-content-center py-3">
                <ul class="nav nav-pills">
                    <li class="nav-item">
                        <NuxtLink exact to="/home" active-class="active" class="nav-link" >Home</NuxtLink>
                    </li>
                    <li class="nav-item">
                        <NuxtLink to="#1"  active-class="active" class="nav-link" >News</NuxtLink>
                    </li>
                    <li class="nav-item">
                        <NuxtLink to="#2" active-class="active" class="nav-link" >Categories</NuxtLink>
                    </li>
                    <li class="nav-item">
                        <NuxtLink to="#3" active-class="active" class="nav-link" >About</NuxtLink>
                    </li>
                    <!-- <li class="nav-item"><a href="#" active-class="active" class="nav-link">News</a></li>
                    <li class="nav-item"><a href="#" active-class="active" class="nav-link">Categories</a></li>
                    <li class="nav-item"><a href="#" active-class="active" class="nav-link">About</a></li> -->
                </ul>
            </header>
        </div>

        <Nuxt/>
    </div>
</template>
