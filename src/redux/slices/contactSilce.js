import { createSlice } from '@reduxjs/toolkit'

const contactSilce = createSlice({
    name: 'contact',
    initialState: [{
        user: { id: crypto.randomUUID(), avatar: `https://robohash.org/Gl.png?set=set3`, _color: `black` },
        name: 'hamza demnani',
        tel: '0682490113',
        ville: "Tanger"
    }],
    reducers: {
        addContact: (state, action) => {
            const { name, tel, ville, color } = action.payload
            state.push({
                user: {
                    id: crypto.randomUUID(),
                    avatar: `https://robohash.org/${name}.png?set=set3`,
                    _color: color
                },
                name, tel, ville
            })
        },
        deleteContact: (state, action) => {
            return state.filter(contact => contact.user.id != action.payload.id);
        }
    }
});

export const {
    addContact,
    deleteContact,
    filterContact 
} = contactSilce.actions;
export default contactSilce.reducer;