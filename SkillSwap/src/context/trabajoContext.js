
import {create} from 'zustand';

const useDatosTrabajosStore = create((set) => ({
  datosTrabajos: null,
  guardarDatosTrabajos: (datos) => set({ datosTrabajos: datos }),
}));

export default useDatosTrabajosStore;
