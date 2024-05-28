// src/modules/employee/services/employee.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { Employee } from '@prisma/client';

@Injectable()
export class EmployeeService {
  constructor(private prisma: PrismaService) {}

  async createEmployee(data: { name: string; position: string; salary: number }): Promise<Employee> {
    return this.prisma.employee.create({ data });
  }

  async getEmployees(): Promise<Employee[]> {
    return this.prisma.employee.findMany();
  }

  async getEmployeeById(id: number): Promise<Employee> {
    return this.prisma.employee.findUnique({ where: { id } });
  }

  async updateEmployeeCompletely(id: number, data: { name: string; position: string; salary: number }): Promise<Employee> {
    // Excluir el campo 'id' del objeto de datos antes de actualizar
    const { name, position, salary } = data;
    return this.prisma.employee.update({
      where: { id },
      data: { name, position, salary },
    });
  }

  async updateEmployeePartially(id: number, data: { name?: string; position?: string; salary?: number }): Promise<Employee> {
    return this.prisma.employee.update({
      where: { id },
      data,
    });
  }

  async deleteEmployee(id: number): Promise<Employee> {
    return this.prisma.employee.delete({ where: { id } });
  }
}
