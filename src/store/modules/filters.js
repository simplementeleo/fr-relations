const filters = {
    namespaced: true,
    state: {
        itemMain: '',
        subItem: '',
        carouselItemsMain: [
            {
                name: 'Básico',
                key: ''
            },
            {
                name: 'Físico',
                key: ''
            },
            {
                name: 'Creencias y Costumbres',
                key: ''
            },
            {
                name: 'Familia y Amigos',
                key: ''
            },
            {
                name: 'Trabajo y Economía',
                key: ''
            },
        ],
        carouselItemsFisic: [
            {
                name: 'Filtro Estándar',
                key: ''
            },
            {
                name: 'Filtro Avanzado',
                key: ''
            },
            {
                name: 'Origen / Etnia',
                key: ''
            },
            {
                name: 'Discapacidades / Enfermedades',
                key: ''
            },
        ]
    },
    mutations: {
        CHANGE_ITEM_MAIN(state, index) {
            state.itemMain = index
        },
        CHANGE_SUB_ITEM(state, index) {
            state.subItem = index
        }
    },
    getters: {

    },
    actions: {

    }
}
export default filters;