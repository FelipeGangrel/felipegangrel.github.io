export default {
    'OPEN_FILE' (state, payload) {
        
        // abrir apenas arquivos que não estão abertos
        if (state.open.indexOf(payload) == -1) {
            state.open.push(payload);
        }

        // tornar ativo o arquivo recém aberto 
        state.active = payload;

    },

    'CLOSE_FILE' (state, payload) {

        let removeIndex = state.open.indexOf(payload);
        state.open.splice(removeIndex, 1);

        console.log('length', state.open.length);

        if (state.open.length > 0) {
            let lastIndex = state.open.length - 1;
            state.active = state.open[lastIndex];
        } else {
            state.active = null;
        }

    },

    'MENU_TOGGLE' (state) {
        state.menuToggle = !state.menuToggle;
    }
}