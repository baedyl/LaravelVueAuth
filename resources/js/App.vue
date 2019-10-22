<template>
    <div class="panel panel-default">
        <div class="panel-heading">
            <nav>
                <ul class="list-inline">
                    <li>
                        <router-link :to="{ name: 'home' }">Accueil</router-link>
                    </li>
                    <li class="pull-right">
                        <router-link :to="{ name: 'login' }">Connexion</router-link>
                    </li>
                    <li class="pull-right">
                        <router-link :to="{ name: 'register' }">Inscription</router-link>
                    </li>
                </ul>
            </nav>
        </div>
        <div class="panel-body">
            <router-view></router-view>
        </div>
    </div>
</template>

