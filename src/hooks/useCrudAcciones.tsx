import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';
import {PresupuestoType} from "../types";

const API_URL = 'http://localhost:3000/gastos';

const useCrudAcciones = () => {
    const [presupuestos, setPresupuestos] = useState<PresupuestoType[]>([]);
    const [presupuesto, setPresupuesto] = useState<PresupuestoType | null>(null);

    useEffect(() => {
        cargarPresupuestos();
    }, []);

    const getMaxId = () => {
        return presupuestos.reduce((max, a) => (a.id > max ? a.id : max), 0) + 1;
    };

    const cargarPresupuestos = async () => {
        const response = await axios.get(API_URL);
        setPresupuestos(response.data);
    };

    const agregarPresupuesto = async (nombre: string, categoria: string, tipo: string, monto: string, presupuesto?: PresupuestoType) => {
        if (presupuesto) {
            
            setPresupuestos(
                presupuestos.map((a) => (a.id === presupuesto.id ? { ...a, nombre, categoria } : a))
            );
            setPresupuesto(null);
            alerta('presupuesto actualizado');
            return;
        }

        await axios.post(API_URL, { nombre, categoria, monto: new Date().toISOString(), tipo: 'tipo Desconocido' });
        setPresupuestos([...presupuestos, { id: getMaxId(), nombre, categoria, monto: new Date().toISOString(), tipo: 'tipo Desconocido' }]);
        alerta('presupuesto agregado');
    };

    const editarPresupuesto = (id: number) => {
        const presupuesto = presupuestos.find((a) => a.id === id);
        if (presupuesto) {
            setPresupuesto(presupuesto);
        }
    };

    const eliminarPresupuesto = async (id: number) => {
        const presupuesto = presupuestos.find((a) => a.id === id);
        const result = await Swal.fire({
            title: presupuesto?.nombre,
            text: '¿Estás seguro de eliminar este presupuesto?',
            icon: 'error',
            showCancelButton: true,
            confirmButtonText: 'Eliminar',
            cancelButtonText: 'Cancelar',
            confirmButtonColor: '#f56565',
            cancelButtonColor: '#718096'
        });

        if (!result.isConfirmed) {
            return;
        }
        
        setPresupuestos(presupuestos.filter((a) => a.id !== id));
    };

    const alerta = (title: string) => {
        Swal.fire({
            icon: 'success',
            title,
            showConfirmButton: false,
            timer: 1500,
            position: 'top-end',
        });
    }

    return {
        presupuestos,
        presupuesto,
        agregarPresupuesto,
        editarPresupuesto,
        eliminarPresupuesto
    };
};

export default useCrudAcciones;