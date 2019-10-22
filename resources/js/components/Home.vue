<template>
    <div class="container">
        <div class="card card-default">
            <div class="card-header">Home</div>
            <div class="card-body">
                Welcome to the home page!
                <p><router-link :to="{ name : 'dashboard' }" class="nav-link">Go to the dashboard</router-link></p>
                
            </div>
        </div>
    </div>
</template>
