

// Estado de la membresía para lógica de colores en UI
export type MembershipStatus = 'ACTIVE' | 'INACTIVE' | 'WARNING';

// Aqui pues se haria la traduccion de lenguages
//Le dice a React: Oye, trae el Menú, trae la Tabla de Socios y trae el Inventario.
export interface Member {
  id: string; 
  nombre: string;
  email: string;
  fechaVencimiento: string;
  estaActivo: boolean;
  status: MembershipStatus; 
}

export interface Product {
  id: number;
  nombre: string;
  stockActual: number;
  stockMinimo: number;
  precioVenta: number;
}

export interface Transaction {
  id: number;
  monto: number;
  fecha: string;
  concepto: string;
  memberId: string;
}