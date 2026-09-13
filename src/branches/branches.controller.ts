import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { BranchesService } from './branches.service';
import { ServicesService } from '../services/services.service';
import { CreateBranchDto } from './dto/create-branch.dto';
import { CreateServiceDto } from '../services/dto/create-service.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/roles.decorator';
import { Role } from '../../generated/prisma/client';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('Branches')
@ApiBearerAuth()
@Controller('branches')
export class BranchesController {
  constructor(
    private readonly branches: BranchesService,
    private readonly services: ServicesService,
  ) {}

  @Post()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADMIN)
  create(@Body() dto: CreateBranchDto) {
    return this.branches.create(dto);
  }

  @Get()
  findAll() {
    return this.branches.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.branches.findById(id);
  }

  @Get(':id/services')
  findServices(@Param('id') id: string) {
    return this.services.findByBranch(id);
  }

  @Post(':id/services')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADMIN)
  createService(@Param('id') id: string, @Body() dto: CreateServiceDto) {
    return this.services.create(id, dto);
  }
}
