<template>
    <div>
        <div class="px-3 py-2 cursor-pointer" @click="IsShowSidebar(false)">
            <icon-burguer color="white" :show="isActiveBurger ? {animate: 'Out', delay: delayInput} : { delay: delayInput, animate: 'Input'}" />
        </div>

        <div v-if="general">
            <div class="fixed h-full w-full top-0 left-0 z-40 menu-bg-main">
                <div class="menu-sidebar h-full slide">
                    <div class="flex bg-white items-center py-2">
                        <div @click="IsShowSidebar(true)" class="px-2">
                            <icon-burguer color="black" :show="isActiveBurger ? {animate: 'Input', delay: delayInput} : {animate: 'Out', delay: delayInput}" />
                        </div>
                        <img src="../../assets/images/nav/sidebar/logo-menu-res.png" alt="Gloobal8 Rencontres FR">
                    </div>
                    <div class="bg-basecolor px-3 py-4 text-center text-white">
                        <div>Has accedido cómo invitado</div>
                        <div class="flex font-bold justify-center">
                            <div class="mr-2">Iniciar sesión</div>|
                            <div class="ml-2">Registrarse</div>
                        </div>
                    </div>

                    <div class="overflow-y-auto menu-overflow">

                        <div v-for="(item, index) in items" v-bind:key="index">
                            <div class="item-sidebar py-4 px-5 bg-white duration-300 cursor-pointer">
                                <div class="font-bold flex justify-between">
                                    <div class="title"> 
                                        <a :href="item.href.show ? item.href.link : '#'">
                                            {{ item.title }}
                                        </a>
                                    </div>
                                    <div v-if="item.iconArrow">
                                        <div @click="current(index)">
                                            <img src="../../assets/images/icons/baseline_expand_more_black_24dp-48.png" width="24px">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <ul v-if="item.dropdown.show" :class="['dropdown', 'duration-300']">
                                <div v-if="isActiveItem == index" class="slide">
                                    <li v-for="(li, i) in item.dropdown.content" v-bind:key="i">
                                        <a :href="li.link" class="px-6 py-4 block item-dropdown">
                                            {{ li.title }}
                                        </a>
                                    </li>
                                </div>
                            </ul>
                        </div>

                        <div class="wsfanimatedcolors flex-center-all py-6">
                            <img src="../../assets/images/nav/sidebar/logo-blanco.png">
                        </div>

                    </div>
                </div>
            </div>
        </div>



    </div>
</template>
<script>
    import IconBurguer from './icon-burguer.vue'
    export default {
        name: 'menu-gloobal8',
        data: () => ({
            general: false,
            isActiveBurger: false,
            isActiveItem: '-',
            delayInput: '',

            items: [
                {
                    iconMain: '',
                    title: 'Inicio',
                    href: {
                        show: false,
                        link: ''
                    },
                    iconArrow: true,
                    dropdown: {
                        show: true,
                        isActive: false,
                        content: [
                            {
                                title: '¿Cómo empezar?',
                                link: '#'
                            },
                            {
                                title: '¿Cómo funciona la búsqueda?',
                                link: '#'
                            },

                        ]
                    }
                },
                 {
                    iconMain: '',
                    title: 'Mi sitio web',
                    href: {
                        show: true,
                        link: '#'
                    },
                    iconArrow: false,
                    dropdown: {
                        show: false,
                    }
                },
                 {
                    iconMain: '',
                    title: 'Mensajes',
                    href: {
                        show: true,
                        link: '#'
                    },
                    iconArrow: false,
                    dropdown: {
                        show: false,
                    }
                },
                 {
                    iconMain: '',
                    title: 'Mi cuenta',
                    href: {
                        show: false,
                        link: ''
                    },
                    iconArrow: true,
                    dropdown: {
                        show: true,
                        isActive: false,
                        content: [
                            {
                                title: 'Datos personales',
                                link: '#'
                            },
                            {
                                title: 'Básico',
                                link: '#'
                            },
                             {
                                title: 'Físico',
                                link: '#'
                            },
                             {
                                title: 'Creencias y costumbres',
                                link: '#'
                            },
                             {
                                title: 'Familia y amigos',
                                link: '#'
                            },
                             {
                                title: 'Trabajo y economía',
                                link: '#'
                            },
                             {
                                title: 'Imágenes y videos',
                                link: '#'
                            },
                             {
                                title: 'Mis historias',
                                link: '#'
                            },
                             {
                                title: 'Ganar dinero',
                                link: '#'
                            },
                             {
                                title: 'Cupones promocionales',
                                link: '#'
                            },
                             {
                                title: 'Saldo y facturación',
                                link: '#'
                            },

                        ]
                    }
                },
                 {
                    iconMain: '',
                    title: 'Busqueda',
                    href: {
                        show: false,
                        link: ''
                    },
                    iconArrow: true,
                    dropdown: {
                        show: true,
                        isActive: false,
                        content: [
                            {
                                title: '¿Qué soy?',
                                link: '#'
                            },
                            {
                                title: '¿Qué busco?',
                                link: '#'
                            },
                            {
                                title: '¿Para qué?',
                                link: '#'
                            },
                            {
                                title: '¿En dónde?',
                                link: '#'
                            },

                        ]
                    }
                },
                 {
                    iconMain: '',
                    title: 'Filtros de búsqueda',
                    href: {
                        show: false,
                        link: ''
                    },
                    iconArrow: true,
                    dropdown: {
                        show: true,
                        isActive: false,
                        content: [
                            {
                                title: 'Básico',
                                link: '#'
                            },
                            {
                                title: 'Físico',
                                link: '#'
                            },
                            {
                                title: 'Creencias y costumbres',
                                link: '#'
                            },
                            {
                                title: 'Familia y amigos',
                                link: '#'
                            },
                             {
                                title: 'Trabajo y economía',
                                link: '#'
                            },

                        ]
                    }
                },
                 {
                    iconMain: '',
                    title: 'Flechazos',
                    href: {
                        show: true,
                        link: '#'
                    },
                    iconArrow: false,
                    dropdown: {
                        show: false,
                    }
                },
                 {
                    iconMain: '',
                    title: 'Posibles parejas',
                    href: {
                        show: true,
                        link: '#'
                    },
                    iconArrow: false,
                    dropdown: {
                        show: false,
                    }
                },
                 {
                    iconMain: '',
                    title: 'Amig@s',
                    href: {
                        show: true,
                        link: '#'
                    },
                    iconArrow: false,
                    dropdown: {
                        show: false,
                    }
                },
                 {
                    iconMain: '',
                    title: 'Búsquedas guardadas',
                    href: {
                        show: true,
                        link: '#'
                    },
                    iconArrow: false,
                    dropdown: {
                        show: false,
                    }
                },
                 {
                    iconMain: '',
                    title: 'Partners / Proveedores',
                    href: {
                        show: true,
                        link: '#'
                    },
                    iconArrow: false,
                    dropdown: {
                        show: false,
                    }
                },
                 {
                    iconMain: '',
                    title: 'Herramientas',
                    href: {
                        show: true,
                        link: '#'
                    },
                    iconArrow: false,
                    dropdown: {
                        show: false,
                    }
                },
                 {
                    iconMain: '',
                    title: 'Glooblal Rencontres',
                    href: {
                        show: false,
                        link: ''
                    },
                    iconArrow: true,
                    dropdown: {
                        show: true,
                        isActive: false,
                        content: [
                            {
                                title: 'Sobre Gloobal 8',
                                link: '#'
                            },
                            {
                                title: 'Ayuda (FAQ)',
                                link: '#'
                            },
                            {
                                title: 'Privacidad',
                                link: '#'
                            },
                            {
                                title: 'Aviso Legal',
                                link: '#'
                            },
                             {
                                title: 'Condiciones Generales',
                                link: '#'
                            },
                            {
                                title: 'Cookies',
                                link: '#'
                            },
                            {
                                title: 'Protección de Datos',
                                link: '#'
                            }

                        ]
                    }
                },

            ],
        }),
        components: {
            IconBurguer
        },
        methods: {
            IsShowSidebar(delay){
                this.delayInput = delay
                this.isActiveBurger = !this.isActiveBurger
                setTimeout(() => { this.general = !this.general }, 500)
            },
            current(index) {
                this.isActiveItem == index ? this.isActiveItem = '-' : this.isActiveItem = index
            }
        },
        mounted(){
        }
    }
</script>
<style scoped lang="scss">
    $base: #fa5655;
    $gray: #efefef;
    .menu-bg-main {
        background: #0000008e;
    }
    
    .menu-sidebar {
        width: 264px;
        max-width: 264px;
        background: $gray;
        .item-sidebar {
            background: $gray;
            color: #444;

            &:hover {
                background: #fff;
                color: $base;
            }
        }

        .menu-overflow {
            &::-webkit-scrollbar {
                width: 8px;
                height: 8px;
            }
            &::-webkit-scrollbar-thumb {
                background: #ccc;
                border-radius: 4px;
                &:active {
                    background: $base;
                }
            }
            &::-webkit-scrollbar-track {
                background: #e1e1e1;
                border-radius: 4px;
            }
            height: 100vh;
            padding-bottom: 13rem;
        }

        .dropdown {
            .item-dropdown {
                background: #f8f8f8;
                color: #444;
                &:hover {
                    color: $base;
                    background: #fff;
                }
            }
        }
    }
</style>