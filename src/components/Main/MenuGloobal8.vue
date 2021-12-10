<template>
    <div>
        <div class="bg-white p-5 cursor-pointer" @click="general = !general">
            <h1 class="text-black">
                MENU
            </h1>
        </div>

        <div v-if="general">
            <div class="fixed h-full w-full top-0 left-0 z-40 menu-bg-main">
                <div class="menu-sidebar h-full bg-blue-500 slide">
                    <div class="flex bg-white items-center py-2">
                        <div class="bg-green-500 p-3 w-10 h-10 text-white cursor-pointer" @click="general = !general">
                            cerrar
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

                    <div class="overflow-y-auto h-full bg-blue-500 pb-60 menu-overflow">

                        <div v-for="(item, index) in items" v-bind:key="index">
                            <div class="item-sidebar py-4 px-5 bg-white duration-300 cursor-pointer" @click="item.dropdown.isActive = !item.dropdown.isActive">
                                <div class="font-bold flex justify-between">
                                    <div class="title"> 
                                        <a :href="item.href.show ? item.href.link : '#'">
                                            {{ item.title }}
                                        </a>
                                    </div>
                                    <div v-if="item.iconArrow">></div>
                                </div>
                            </div>
                            <ul v-if="item.dropdown.show" :class="['dropdown', item.dropdown.isActive ? 'h-full' : 'h-0', 'duration-300']">
                                <div v-if="isActive" class="slide">
                                    <li v-for="(li, i) in item.dropdown.content" v-bind:key="i">
                                        <a :href="li.link" class="px-6 py-4 block item-dropdown">
                                            {{ li.title }}
                                        </a>
                                    </li>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>



    </div>
</template>
<script>
    export default {
        name: 'menu-gloobal8',
        data: () => ({
            general: false,
            isActive: false,
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
                    title: 'Gloobla Rencontres',
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

            ]
        })
    }
</script>
<style scoped lang="scss">
    $base: #fa5655;
    .menu-bg-main {
        background: #0000008e;
    }

    .menu-sidebar {
        width: 264px;
        max-width: 264px;

        .item-sidebar {
            background: #efefef;
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