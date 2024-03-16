import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MakananService } from './makanan.service';
import { Prisma } from '@prisma/client';

@Controller('makanan')
export class MakananController {
  constructor(private readonly makananService: MakananService) {}

  @Post()
  create(@Body() createMakananDto: Prisma.MakananCreateInput) {
    return this.makananService.create(createMakananDto);
  }

  @Get()
  findAll() {
    return this.makananService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.makananService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateMakananDto: Prisma.MakananUpdateInput,
  ) {
    return this.makananService.update(+id, updateMakananDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.makananService.remove(+id);
  }
}
