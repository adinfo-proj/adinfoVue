<template>
    <div>
    <h2>Vue.js multi-level dropdown example</h2>
    <p>
    Selected element: {{ selectedDropdown }}
    </p>
    <h3>vue recursive components example</h3>
    <div class="dropdown">
        <button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown">Dropdown
        <span class="caret"></span></button>
        <ul class="dropdown-menu">
        <li :v-for="liveMenu in primaryMenu" v-bind:class="{'dropdown-submenu': liveMenu.children}">
            <a class="test" tabindex="-1" href="#">{{liveMenu.name}}<span class="caret" v-if="liveMenu.children"></span></a>
            <ul class="dropdown-menu" v-if="liveMenu.children">
            <li :v-for="child in liveMenu.children"><a tabindex="-1" href="#" @click="setSelectedItem(child.name)">{{child.name}}</a></li>
            </ul>
        </li>  
        </ul>
    </div>
</div>
</template>
 
<script>
import $ from 'jquery';

export default {
    data() {
        return{
            primaryMenu: [
                {
                    name: 'Menu 1',
                children: [{name: 'About Us 1'},{name: 'Contact 2'},{name: 'Form 3'}]
                },
                {
                    name: 'Menu 2'
                }
            ],
            selectedDropdown: 'None'
        }
    },
    methods: {
    setSelectedItem(liveMenu) {
        this.selectedDropdown = liveMenu;
      }
    },
    ready: function() {
      $('.dropdown-submenu a.test').on("click", function(e){
        $(this).next('ul').toggle();
        e.stopPropagation();
        e.preventDefault();
      });    
    }
}
</script>
 
<style>
    .dropdown-submenu {
        position: relative;
    }

    .dropdown-submenu .dropdown-menu {
        top: 0;
        left: 100%;
        margin-top: -1px;
    }

</style>