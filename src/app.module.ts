// src/app.module.ts
import { Module } from '@nestjs/common';
import { EmployeeModule } from './modules/employee/employee.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [EmployeeModule, PrismaModule],
})
export class AppModule {}
