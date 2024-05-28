// src/modules/employee/controllers/employee.controller.ts
import { Controller, Post, Body, Get, Param, Put, Patch, Delete } from '@nestjs/common';
import { EmployeeService } from '../services/employee.service';
import { Employee } from '@prisma/client';

@Controller('employees')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Post()
  async createEmployee(@Body() data: { name: string; position: string; salary: number }): Promise<Employee> {
    return this.employeeService.createEmployee(data);
  }

  @Get()
  async getEmployees(): Promise<Employee[]> {
    return this.employeeService.getEmployees();
  }

  @Get(':id')
  async getEmployeeById(@Param('id') id: string): Promise<Employee> {
    return this.employeeService.getEmployeeById(Number(id));
  }

  @Put(':id')
  async updateEmployeeCompletely(@Param('id') id: string, @Body() data: { name: string; position: string; salary: number }): Promise<Employee> {
    return this.employeeService.updateEmployeeCompletely(Number(id), data);
  }

  @Patch(':id')
  async updateEmployeePartially(@Param('id') id: string, @Body() data: { name?: string; position?: string; salary?: number }): Promise<Employee> {
    return this.employeeService.updateEmployeePartially(Number(id), data);
  }

  @Delete(':id')
  async deleteEmployee(@Param('id') id: string): Promise<Employee> {
    return this.employeeService.deleteEmployee(Number(id));
  }
}
