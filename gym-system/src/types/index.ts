

// Estado de la membresía para lógica de colores en UI
export type MembershipStatus = 'ACTIVE' | 'INACTIVE' | 'WARNING';

// Aqui pues se haria la traduccion de lenguages
//Le dice a React: Oye, trae el Menú, trae la Tabla de Socios y trae el Inventario.
export interface Subcripcion {
  id: string; 
  nombre: string;
  email: string;
  fechaVencimiento: string;
  estaActivo: boolean;
  status: MembershipStatus; 
}

export interface Productos {
  id: number;
  nombre: string;
  stockActual: number;
  stockMinimo: number;
  precioVenta: number;
}

export interface ventas {
  id: number;
  monto: number;
  fecha: string;
  concepto: string;
  memberId: string;
}