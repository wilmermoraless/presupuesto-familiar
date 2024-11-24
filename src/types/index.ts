export interface PresupuestoType {
    id: number;
    nombre: string;
    categoria: string;
    tipo: string;
    monto: string;
}

export interface TablaProps {
    presupuestos: PresupuestoType[];
    onEliminarPresupuesto: (id: number) => void;
    onEditarPresupuesto: (id: number) => void;
}