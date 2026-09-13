import { Controller, Get, Param } from '@nestjs/common';
import { BranchesService } from './branches.service';
import { ServicesService } from '../services/services.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Branches')
@Controller('branches')
export class BranchesController {
  constructor(
    private readonly branches: BranchesService,
    private readonly services: ServicesService,
  ) {}

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
}
